import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(0)
  }
}));
const boards = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",

];
const licenseTime=[
    "One",
  "Two",
  "Three",
]

function getStyles(name, input, theme) {
  return {
    fontWeight:
      input.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
const Step2 = props => {
  const initialState = {
    board: "",
    license:"",
    active:"",
    time:"",
    agentType:"",
    suspended:"",
    complaint:"",
    join:""
  };
  const classes = useStyles();
  const theme = useTheme();

  const [input, setInput] = useState(initialState);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  // Funtional Components
  const NextBtn = props.next;
  const BackBtn = props.back;

  const handleChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
console.log(input)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
        License and Legal Details     </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
              <InputLabel ref={inputLabel} id="board">
                Which Board are you a member of?
              </InputLabel>
              <Select
                labelId="boardLabel"
                id="board"
                value={input.board}
                name="board"
                onChange={handleChange}
                labelWidth={labelWidth}
              >
                {boards.map(name => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, input.board, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            required
            id="license"
            name="license"
            label="What is your License number?"
            fullWidth
            value={input.license}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm ={12}>
        <FormControl component="fieldset" fullWidth className={classes.formControl}>
        <FormLabel component="legend">Is your License active?</FormLabel>
        <RadioGroup aria-label="license" fullWidth name="active" value={input.active} onChange={handleChange}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        </FormControl>

        </Grid>

        <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
              <InputLabel ref={inputLabel} id="time">
                How long have you been licensed for?
              </InputLabel>
              <Select
                labelId="howlong"
                id="time"
                value={input.time}
                name="time"
                onChange={handleChange}
                labelWidth={labelWidth}
              >
                {licenseTime.map(name => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, input.board, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
        <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
              <InputLabel ref={inputLabel} id="agentType">
                Are you a single agent or a part of a team?
              </InputLabel>
              <Select
                labelId="agent"
                id="agentType"
                value={input.agentType}
                name="agentType"
                onChange={handleChange}
                labelWidth={labelWidth}
              >
               <MenuItem
                   value="1"
                  >
                   Single Agent
                  </MenuItem>
                  <MenuItem
                   value="2"
                  >
                   Part of a Team
                  </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm ={6}>
        <FormControl component="fieldset" fullWidth className={classes.formControl}>
        <FormLabel component="legend">Have you ever had a registered complaint filed against you?</FormLabel>
        <RadioGroup aria-label="license" fullWidth name="complaint" value={input.complaint} onChange={handleChange}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        </FormControl>

        </Grid>
        <Grid item xs={12} sm ={6}>
        <FormControl component="fieldset" fullWidth className={classes.formControl}>
        <FormLabel component="legend">Have you ever had your license suspended before?</FormLabel>
        <RadioGroup aria-label="license" fullWidth name="suspended" value={input.suspended} onChange={handleChange}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        </FormControl>

        </Grid>
        <Grid item xs={12} sm ={12}>
        <FormControl component="fieldset" fullWidth className={classes.formControl}>
        <FormLabel component="legend">Would you like to transfer your license to AGI America now?</FormLabel>
        <RadioGroup aria-label="license" fullWidth name="join" value={input.join} onChange={handleChange}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        </FormControl>
        
        </Grid>
        <Grid item xs={12} sm={12}>
            <Typography variant="h6">If you select Yes here, our team will reach out to you and have your license
                  transfer expedited so you can get started straight away.</Typography>
        </Grid>
        </Grid>
        <BackBtn/>
        <NextBtn/>
       {/* <button><BackBtn /></button> */}
       {/* <button type="submit"> <NextBtn  /></button> */}
      </form>
    </div>
  );
};

export default Step2;
