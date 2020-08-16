import React, { useEffect, useState } from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import AadharCardImage from "../../assets/AadharCard.jpg";
import RationCardImage from "../../assets/RationCardImage.jpg";
import PanCardImage from "../../assets/PanCardImage.jpg";

const useStyles = makeStyles({
  root: {},
  media: {
    maxWidth: "50vw",
    height: "auto",
  },
});

export default function AadharCard(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    imgName: "",
    link: "",
    text: "",
  });
  const cardName = useParams().cardName;

  useEffect(() => {
    if (!cardName) return;

    switch (cardName) {
      case "aadharcard":
        setValues({
          imgName: AadharCardImage,
          link: "https://uidai.gov.in/my-aadhaar/about-your-aadhaar/aadhaar-enrolment.html",
          text: "Aadhar",
        });
        break;
      case "pancard":
        setValues({
          imgName: PanCardImage,
          link: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
          text: "PAN",
        });
        break;
      case "rationcard":
        setValues({
          imgName: RationCardImage,
          link: "https://nfsa.gov.in/portal/apply_ration_card",
          text: "Ration",
        });
        break;
    }
  }, []);

  return (
    <Container className={classes.root} maxWidth="md">
      <img src={values.imgName} className={classes.media} />
      <Typography variant="h5">
        Don't have {values.text} yet ? Visit{" "}
        <a href={values.link} target="_blank" rel="noopener noreferrer">
          this
        </a>{" "}
        Link to view official instructions.
      </Typography>
    </Container>
  );
}
