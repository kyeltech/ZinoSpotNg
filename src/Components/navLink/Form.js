import React from 'react'



class Form extends React.Component {
  constructor(props){
    super(props) 
    this.state={
      firstName: '',
      lastName: '',
      companyName: '',
      workEmail:'',
      phoneNumber: null,
      country:'',
      tick:'',
      errormessage:'',
    };
  }
  // using event to validate the form section
  myChangeHandler = (event) => {
  let nam = event.target.name;
  let val = event.target.value;
  if(nam === 'PhoneNumber') {
    if(!Number(val)){
      console.log("your age must be a number");
    }
  }
  this.setState({[nam]: val})
  }

    render() {
      return (
        <form className="form">
        <div className="form-container">
        <h3>Hire Developers</h3>
        <p> We take great pride in matching our developers with the best partners. Tell us about your team below!</p>
       <li> First Name
        <input 
        placeholder="First Name"
        type="text"
        name="FirstName"
        require="true"
        onChange={this.myChangeHandler}
        />
        </li>
        <li> Second Name
        <input 
        placeholder="Second Name"
        type="text"
        name="Second Name"
        require="true"
        onChange={this.myChangeHandler}
        />
        </li>
        <li>Company Name
        <input 
        placeholder="Company Name"
        type="text"
        name="Company"
        require="true"
        onChange={this.myChangeHandler}
        />
        </li>
        <li>
          Work Email
        <input 
        placeholder=" Work Email"
        type="text"
        name="Email"
        require="true"
        onChange={this.myChangeHandler}
        />
        </li>
        <li>
      Phone Number
      <input 
      placeholder="Phone Number"
      type="text"
      name="PhoneNumber"
      require="true"
      onChange={this.myChangeHandler}
        />
        </li>
        <li>
      Country
      <input 
      placeholder="Country"
      type="text"
      name="Country"
      require="true"
      onChange={this.myChangeHandler}
        />
        </li>
   
        </div>
        </form>
      )
    }
  }
  export default Form