import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  InputLabel,
  Input,
  Grid,
  InputAdornment,
  IconButton,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import { post } from "../../api/fetch_backend";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  section: {
    border: "0.4px solid white",
    borderRadius: "0.5px",
    zIndex: 20,
    backgroundColor: "white",
    margin: 0,
  },
}));

export default function RegistrationForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    location: "",
    numPeople: 1,
    livStatus: "",
    ration: "",
    phNumber: "",
    aadhar: "",
    paymentStatus: "",

    isFamily: false,
  });

  const [aadharCard, setAadharCard] = useState(true);
  const [rationCard, setRationCard] = useState(false);
  const [panCard, setPanCard] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleFamily = (str) => {
    setValues({ ...values, isFamily: str === "family" });
    setRationCard(str === "family");
  };

  const getDocs = () => {
    let arr = [];
    if (aadharCard) arr.push("Aadhar Card");
    if (panCard) arr.push("PAN Card");
    if (rationCard) arr.push("Ration Card");
    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const objToSend = {
      gender: values.gender,
      age: values.age,
      aadhar: values.aadhar,
      phoneNo: values.phNumber,
      noOfFamily: values.numPeople,
      rationCard: values.ration,
      payment: values.paymentStatus,
      location: values.location,
      isFamilyNGOMember: values.isFamily,
      docs: getDocs(),
    };
    try {
      let ret = post("/user/set", objToSend);
    } catch (e) {
      alert("Oops! An error occurred..." + e.message.toString());
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Registration Form
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="fName">First Name*</InputLabel>
                <Input
                  id="fName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  autoComplete="fname"
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor="lName">Last Name*</InputLabel>
                <Input
                  id="lName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  autoComplete="lname"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="gender">Gender*</InputLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={values.gender}
                  onChange={handleChange("gender")}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="age">Age*</InputLabel>
                <Input
                  id="age"
                  type="number"
                  value={values.age}
                  onChange={handleChange("age")}
                  autoComplete="age"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="location">Location*</InputLabel>
                <Input
                  id="location"
                  type="text"
                  value={values.location}
                  onChange={handleChange("location")}
                  autoComplete="location"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="numPeople">Number Of People*</InputLabel>
                <Input
                  id="numPeople"
                  type="text"
                  value={values.numPeople}
                  onChange={handleChange("numPeople")}
                  autoComplete="numPeople"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="livStatus">Current Living Status*</InputLabel>
                <RadioGroup
                  aria-label="livStatus"
                  name="gender1"
                  value={values.livStatus}
                  onChange={(e) => {
                    handleFamily(e.target.value);
                    handleChange("livStatus");
                  }}
                >
                  <FormControlLabel value="alone" control={<Radio />} label="Alone" />
                  <FormControlLabel value="family" control={<Radio />} label="Family" />
                  <FormControlLabel value="institution" control={<Radio />} label="Institution" />
                </RadioGroup>
              </Grid>
              {values.isFamily && (
                <Grid item xs={12}>
                  <InputLabel htmlFor="ration">Your Ration Card Number*</InputLabel>
                  <Input
                    id="ration"
                    type="text"
                    value={values.ration}
                    onChange={handleChange("ration")}
                    autoComplete="aadhar"
                    required
                    fullWidth
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <InputLabel htmlFor="aadhar">Your Aadhar Number*</InputLabel>
                <Input
                  id="aadhar"
                  type="text"
                  value={values.aadhar}
                  onChange={handleChange("aadhar")}
                  autoComplete="aadhar"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="phone">Your Phone Number*</InputLabel>
                <Input
                  id="phone"
                  type="text"
                  value={values.phNumber}
                  onChange={handleChange("phNumber")}
                  autoComplete="aadhar"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="paymentStatus">Payment Status*</InputLabel>
                <RadioGroup
                  aria-label="paymentStatus"
                  name="PaymentStatus"
                  value={values.paymentStatus}
                  onChange={handleChange("paymentStatus")}
                >
                  <FormControlLabel value="pending" control={<Radio />} label="Pending" />
                  <FormControlLabel value="success" control={<Radio />} label="Success" />
                  <FormControlLabel value="complete" control={<Radio />} label="Complete" />
                  <FormControlLabel value="failed" control={<Radio />} label="Cancelled" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Documents Submitted</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={aadharCard}
                          onChange={() => setAadharCard(!aadharCard)}
                          name="Aadhar Card"
                        />
                      }
                      label="Aadhar Card"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rationCard}
                          onChange={() => setRationCard(!rationCard)}
                          name="Ration Card"
                        />
                      }
                      label="Ration Card"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={panCard}
                          onChange={() => setPanCard(!panCard)}
                          name="PAN Card"
                        />
                      }
                      label="PAN Card"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
