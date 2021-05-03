import React, { useState, useReducer } from 'react'
import axios from 'axios'
import { render, screen } from "@testing-library/react";

const Welcome = (props:any) => {
  const [values, setValues] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
  })

  const handleChange = (event:any) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }
console.log(props);
  return (
    <div>
      <h1>
        Welcome, {values.firstName} {values.lastName}
      </h1>

      <form name="userName">
        <label>
          First Name
          <input
            value={values.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name
          <input
            value={values.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  )
}

export default Welcome

