import * as actionTypes from './actions'

const initialState = {
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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ENTER_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case actionTypes.ENTER_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    default:
      return state
  }
}

export default reducer;