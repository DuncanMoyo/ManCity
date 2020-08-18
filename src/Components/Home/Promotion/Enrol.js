// import React, { useState } from "react";
// import Fade from "react-reveal/Fade";
// import FormFields from "../../UI/FormFields";
// import { validate } from "../../UI/Misc";
// import { firebasePromotions } from '../../../firebase';


//   const Enrol = () => {

    
//   const [formError, setFormError] = useState(false)
//   const [formSuccess, setFormSuccess] = useState('')
//   const [formData, setFormData] = useState({ email: {
//     element: "input",
//     value: "",
//     config: {
//       name: "email_input",
//       type: "email",
//       placeholder: "Enter your email",
//     },
//     validation: {
//       required: true,
//       email: true,
//     },
//     valid: false,
//     validationMessage: "",
//   },})

//   const resetFormSuccess = (type) => {
//     const newFormData = {...formData}

//     for (let key in newFormData) {
//       newFormData[key].value = '';
//       newFormData[key].valid = false;
//       newFormData[key].validationMessage = '';
//     }

//     setFormError(false)
//     setFormData(newFormData)
//     setFormSuccess( type ? 'Congratulations' : 'Already a member')
//     successMessage()
//   }

//   const successMessage = () => {
//     setTimeout(() => {
//       setFormSuccess('')
//     }, 2000)
//   }

//   const submitForm = (event) => {
//     event.preventDefault();

//     let dataToSubmit = {};
//     let formIsValid = true;

//     for (let key in formData) {
//       dataToSubmit[key] = formData[key].value;
//       formIsValid = formData[key].valid && formIsValid;
//     }

//     if (formIsValid) {
//       // console.log("dataToSubmit");

//       firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value').then(snapshot => {
//         // console.log(snapshot.val());
//         if (snapshot.val() === null) {
//           firebasePromotions.push(dataToSubmit)
//           resetFormSuccess(true)

//         } else {
//           resetFormSuccess(false)
//         }
//       })

//       resetFormSuccess()
//     } else {
//       // console.log('ERROR');
//       setFormError(true)
//     }
//   }

//   const updateForm = (element) => {
//     // console.log(element);
//     const newFormData = { formData };
//     const newElement = { ...newFormData[element.id] };
//     newElement.value = element.event.target.value;

//     let validData = validate(newElement);
//     // console.log(validData);
//     newElement.valid = validData[0];
//     newElement.validationMessage = validData[1];
//     newFormData[element.id] = newElement;
//     // console.log(newFormData);
   
//     setFormData(newFormData)
//     setFormError(false)
//   }


//     return (
//       <Fade>
//         <div className="enroll_wrapper">
//           <form onSubmit={event => submitForm(event)}>
//             <div className="enroll_title">Enter your email</div>
//             <div className="enroll_input">
//               <FormFields
//                 id={"email"}
//                 formData={formData.email}
//                 change={element => updateForm(element)}
//               />
//               {formError ? (
//                 <div className="error_label">Something is wrong. Try again</div>
//               ) : null}
//               <div className='success_label'>{formSuccess}</div>
//               <button onClick={event => submitForm(event)}>Enrol</button>
//               <div className='enroll_discl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae justo mollis, volutpat dolor vel, volutpat purus. Nulla facilisi.</div>
//             </div>
//           </form>
//         </div>
//       </Fade>
//     );
//   }


// export default Enrol;


















import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormFields from "../../UI/FormFields";
import { validate } from "../../UI/Misc";
import { firebasePromotions } from "../../../firebase";

class Enrol extends Component {
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
    },
  };

  resetFormSuccess(type) {
    const newFormData = { ...this.state.formData };

    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }

    this.setState({
      formError: false,
      formData: newFormData,
      formSuccess: type ? "Congratulations" : "Already a member",
    });
    this.successMessage();
  }

  successMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: "",
      });
    }, 2000);
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      // console.log("dataToSubmit");

      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then((snapshot) => {
          // console.log(snapshot.val());
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });

      this.resetFormSuccess();
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
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={(event) => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormFields
                id={"email"}
                formData={this.state.formData.email}
                change={(element) => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Something is wrong. Try again</div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={(event) => this.submitForm(event)}>Enrol</button>
              <div className="enroll_discl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vitae justo mollis, volutpat dolor vel, volutpat purus. Nulla
                facilisi.
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enrol;
