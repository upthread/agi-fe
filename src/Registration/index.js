import React, { useState } from "react";
import Navigation from "../Navigation";
import { FORM } from "./styles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));
const steps = [
  "Personal Details",
  "License and Legal Details",
  "Confirm Information"
];

const Registration = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);

  //Shared Components
  const NextBtn = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          step < 2 ? setStep(step + 1) : setStep(2);
        }}
      >
        {step === 1 ? "Submit" : "Next"}
      </Button>
    );
  };

  const BackBtn = () => {
    return (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          step > 0 ? setStep(step - 1) : setStep(0);
        }}
      >
        Back
      </Button>
    );
  };

  switch (step) {
    case 0:
      return (
        <FORM>
          <Navigation />
          <div className="form">
            <main className={classes.layout}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                  Join AGI
                </Typography>
                <Typography component="h1" variant="h4" align="center">
                  Hi there, let's get you started.
                </Typography>
                <Stepper activeStep={step} className={classes.stepper}>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Step1
                  // db = {localDb}
                  className="step1"
                  back={BackBtn}
                  next={NextBtn}
                />
              </Paper>
            </main>
          </div>
        </FORM>
      );
    case 1:
      return (
        <FORM>
          <Navigation />

          <div className="form">
            <main className={classes.layout}>
              <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                  Join AGI
                </Typography>
                <Typography component="h1" variant="h4" align="center">
                  Hi there, let's get you started.
                </Typography>
                <Stepper activeStep={step} className={classes.stepper}>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>{" "}
                <Step2
                  // db = {localDb}
                  className="step2"
                  back={BackBtn}
                  next={NextBtn}
                />
              </Paper>
            </main>
          </div>
        </FORM>
      );
    case 2:
      return (
        <FORM>
          <div className="form">
            <Navigation />
            <Step3
              // db = {localDb}
              className="step3"
              back={BackBtn}
              next={NextBtn}
            />
          </div>
        </FORM>
      );
    default:
      return setStep(0);
  }
};

export default Registration;
