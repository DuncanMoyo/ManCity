import React, { Component } from 'react'
import FormFields from "../UI/FormFields";
import { validate } from "../UI/Misc";



class SignIn extends Component {

  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
  };

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
       console.log(dataToSubmit); 

    } else {
      // console.log('ERROR');
      this.setState({
        formError: true,
      });
    }
  }

  updateForm(element) {
    // console.log(element);
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    // console.log(validData);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormData[element.id] = newElement;
    // console.log(newFormData);
    this.setState({ formData: newFormData, formError: false });
  }

  render() {
    return (
      <div className='container'>
        <div className='signin_wrapper' style={{margin: '100px'}}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Login</h2>
            <FormFields
                id={"email"}
                formData={this.state.formData.email}
                change={element => this.updateForm(element)}
              />

            <FormFields
                id={"password"}
                formData={this.state.formData.password}
                change={element => this.updateForm(element)}
              />    
              <button onClick={(event) => this.submitForm(event)}>Log in</button>

          </form>
        </div>
      </div>
    )
  }
}

export default SignIn
