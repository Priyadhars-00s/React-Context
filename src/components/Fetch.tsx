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
  const handleSubmit = (event:any) => {
  }

console.log(props);
  return (
    <div role="dailog">
      <h1>
        Welcome, {values.firstName} {values.lastName}
      </h1>

      <form onSubmit={handleSubmit} name="userName">
        <label>
          First Name
          <input
            value={values.firstName}
            name="firstName"
            placeholder="firstName"
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name
          <input
            value={values.lastName}
            name="lastName"
            placeholder="lastName"
            onChange={handleChange}
          />
        </label>
        <button aria-pressed="true" name="submit" data-testid="button">Submit</button>
        <button aria-pressed="false" name="submit" data-testid="button">NotSubmit</button>
      </form>
    </div>
  )
}

export default Welcome



