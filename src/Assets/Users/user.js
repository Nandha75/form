import { useState, useEffect } from "react";
import { Button} from 'semantic-ui-react'
import "./users.css";

function App() {
  
  const [formValues, setFormValues] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  

 const handleChange = (e) => {
    const { name,value} = e.target;
    setFormValues({ ...formValues,[name]:value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.firstname) {
        errors.firstname = "*Firstname is required!";   
     } 
    
      if (!values.lastname) {
        errors.lastname = "*Lastname is required!";  
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mobileno1){
        errors.mobileno1= "*Mobile No is required!"
    } else if(values.mobileno1.length > 10){
        errors.mobileno1="Only 10 digit!";
    }
    if (!values.mobileno2){
        errors.mobileno2= "Mobile No is Optional"
    } else if(values.mobileno1.length > 10){
        errors.mobileno1="Only 10 digit!";
    }
   
    if (!values.address1) {
        errors.address1 = "*Address Line1 is required!"; 
    }

    if (!values.address2) {
        errors.address2 = "*Address Line2 is required!"; 
    }

    if (!values.state) {
        errors.state = "*State is required!";   
     } 

     if (!values.district) {
        errors.district = "*District is required!";   
     } 

     if (!values.pincode){
        errors.pincode= "*PinCode is required!"
    } else if(values.pincode.length > 6){
        errors.pincode="Only 6 digit!";
    }
    return errors;
  };

  return (
    <div className="container"> 
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Firstname :</label>
            <input
              type="text" name="firstname" placeholder="Firstname" value={formValues.firstname} onChange={handleChange}/>
          </div>
          <p>{formErrors.firstname}</p>
        
          <div className="field">
            <label>Lastname :</label>
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastname}</p>
          
          <div className="field">
            <label>Email :</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Mobile No1:</label>
            <input
              type="number"
              name="mobileno1"
              placeholder="Mobile No 1"
              value={formValues.mobileno1}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.mobileno1}</p>

          <div className="field">
            <label>Mobile No2:</label>
            <input
              type="number"
              name="mobileno2"
              placeholder="Mobile No 2"
              value={formValues.mobileno2}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.mobileno2}</p>
          
          <div className="field">
            <label>Address 1 :</label>
            <input
              type="text"
              name="address1"
              placeholder="Address Line1"
              value={formValues.address1}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address1}</p>

          <div className="field">
            <label>Address 2 :</label>
            <input
              type="text"
              name="address2"
              placeholder="Address Line2"
              value={formValues.address2}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address2}</p>

          <div className="field">
            <label>State :</label>
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.state}</p>

          <div className="field">
            <label>District :</label>
            <input
              type="text"
              name="district"
              placeholder="District"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.district}</p>

          <div className="field">
            <label>PinCode:</label>
            <input
              type="number"
              name="pincode"
              placeholder="PinCode"
              value={formValues.pincode}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.pincode}</p>

          <Button inverted color='green'>Submit</Button>
        </div>
      </form>
      
    </div>
  );
}


export default App;