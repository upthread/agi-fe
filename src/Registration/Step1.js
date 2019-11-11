import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const Step1 = props => {
  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
  // const [photo, setPhoto] = useState([])
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  };
  const [input, setInput] = useState(initialState);

  const db = props.db;

  // const dataObj = {
  //     _id : 'Step1',
  //     name : name,
  //     desc: description,
  //     photo : photo
  // }

  // Funtional Components
  const NextBtn = props.next;
  const BackBtn = props.back;

  //Form Handlers
  // const handleSubmit = async ( e ) => {
  //     try {
  //         const resp = await db.put(dataObj)
  //         console.log(resp)
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  const handleChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <image src={photo} /> */}
      <form onSubmit={"handleSubmit"}>
        {/* <input 
                    className="form_input"
                    id = {name}
                    type= 'text'
                    value= { name || ''}
                    placeholder= "Name"
                    onChange = { e => {
                        e.preventDefault()
                        setName(e.target.value) 
                    }}
                    
                />
                <textarea
                    className = "form_area"
                    id = {description}
                    type= "textarea"
                    value= {description || ''}
                    placeholder= "Description"
                    onChange = { e => {
                        e.preventDefault()
                        setDescription(e.target.value) 
                    }}
                >
                    Description
                </textarea> 
                <ImageUploader
                    withIcon = {true}
                    buttonText = 'Choose images'
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    onChange = { e => {
                        setPhoto( () => photo.concat(e))
                    }}
                /> */}
        <Typography variant="h6" gutterBottom>
          Personal Details{" "}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              value={input.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              value={input.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              type="email"
              label="email Address"
              fullWidth
              autoComplete="email"
              value={input.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              autoComplete="lname"
              value={input.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address "
              fullWidth
              value={input.address1}
              onChange={handleChange}
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              fullWidth
              value={input.city}
              onChange={handleChange}
              autoComplete="billing address-line2"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              value={input.state}
              onChange={handleChange}
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              value={input.zip}
              onChange={handleChange}
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              value={input.country}
              onChange={handleChange}
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
        </Grid>

        <BackBtn />
        <NextBtn type="submit" value="submit" />
      </form>
    </>
  );
};

export default Step1;
