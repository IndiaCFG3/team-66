// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBiPX_Xd7WjPIPL8iuCLWdN9ooqwhnkHu0",
    authDomain: "team-66-4dfb0.firebaseapp.com",
    databaseURL: "https://team-66-4dfb0.firebaseio.com",
    projectId: "team-66-4dfb0",
    storageBucket: "team-66-4dfb0.appspot.com",
    messagingSenderId: "854124885560",
    appId: "1:854124885560:web:e9accb9086d1781b4358cd",
    measurementId: "G-7S5CMEW2RD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const dbRef = firebase.database().ref();
const schemesRef = dbRef.child('schemes');
var AllSchemes = []

schemesRef.on("child_added", snap => {
    let scheme = snap.val()
    AllSchemes = AllSchemes.push(scheme)
})

var AddScheme = function(Scheme) {
    schemesRef.push(Scheme, function() {
        console.log("The scheme has been pushed");
    })
}

var UpdateScheme = function(New_Scheme, Orig_ID) {
    var ref = dbRef.child('schemes/' + Orig_ID)
    ref.update(New_Scheme, function() {
        console.log("Update done!");
    })
}

var DeleteScheme = function(Scheme) {
    var Delref = dbRef.child('schemes/' + Scheme.name)
    Delref.remove()
}