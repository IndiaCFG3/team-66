require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");
const admin = require("firebase-admin");
// const cron = require("node-cron");
const cors = require("cors");

let serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
const app = express();

const eligible = require("./eligible");

// Setup for Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Setup for static pages
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));
}

// // Get the page for heroku
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

//Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
let db = admin.firestore();

//Get user details and store it on firebase
app.post("/user/set", (req, res) => {
  let userModel = req.body;
  console.log("userModel", userModel);
  db.collection("users")
    .doc(userModel.adhaar)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        userModel.scheme = "";
        // new user save to db
        db.collection("users").doc(userModel.adhaar).set(userModel, { merge: true });
        res.send(userModel);
        if (userModel.isFamilyNGOMember) {
          db.collection("family")
            .doc(userModel.rationCard)
            .get()
            .then((doc) => {
              if (userModel.member) {
                let familyModel = {
                  adhaar: userModel.adhaar,
                  location: userModel.location,
                };

                db.collection("family").doc(userModel.rationCard).set(familyModel, { merge: true });
              }
            });
        }
      } else {
        db.collection("users")
          .doc(userModel.adhaar)
          .get()
          .then((doc) => res.send(doc.data()));
      }
    });
});

app.post("/users/schemes", async (req, res) => {
  let User = req.body;
  let Schemes = await db.collection("schemes").get();
  let result = eligible.GenerateList(User, Schemes);
  res.send(result);
});

// Get all the families within the same location as adminLocation
const findFamilies = async (adminLocation) => {
  const familyRef = db.collection("family");
  const usersUnderAdmin = [];
  const snapshot = await familyRef.get();
  snapshot.forEach(async (doc) => {
    const subCollection = await doc.listCollections();
    const subArray = [];
    subCollection.forEach((collection) => {
      if (collection.location == adminLocation) {
        subArray.push(collection);
      }
    });
    if (subArray.length !== 0) {
      usersUnderAdmin.push(subArray);
    }
  });
  return usersUnderAdmin;
};

// Store the admin details
app.post("/admin", (req, res) => {
  let adminModel = req.body;
  db.collection("admin")
    .doc(adminModel.adminId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        adminModel[allMembers] = findFamilies(adminModel.location);
        db.collection("admin").doc(adminModel.adminId).set(adminModel, { merge: true });
        res.send(adminModel);
      } else {
        // existing user get data from db
        db.collection("admin")
          .doc(admninModel.adminId)
          .get()
          .then((doc) => res.send(doc.data()));
      }
    });
});

app.post("/admin/schemes", (req, res) => {
  const schemes = await;
  db.collection("schemes").get();
  res.send(schemes);
});

app.post("/admin/schemes/delete:name", (req, res) => {
  let schemeName = req.body.params;
  doc
    .collection("schemes")
    .doc(schemeName)
    .get()
    .then((doc) => {
      if (doc.exists) {
        doc.delete();
        res.send(true);
      }
    });
});

app.post("/admin/schemes/insert", (req, res) => {
  let schemeModel = req.body;
  let name = schemeModel.name;
  delete schemeModel.name;
  db.collection("schemes").doc(name).set(schemeModel, { merge: true });
});

app.post("/admin/schemes/update:name", (req, res) => {
  let name = req.body.params;
  db.collection("schemes")
    .doc(name)
    .get()
    .then((doc) => {
      if (doc.exists) {
        doc.delete();
      }
    });
  let newSchemeModel = req.body;
  db.collection("schemes").doc(name).set(newSchemeModel, { merge: true });
});

// create a GET route
// global.window = {};
app.get("/express_backend", (req, res) => {
  res.send({ express: "Backend Connected" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
