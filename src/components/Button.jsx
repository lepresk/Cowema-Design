import React from "react"

import "./Button.css"

const Button = ({ children, ...rest }) => {
  return (
    <button className="btn button-primary" {...rest}>{children}</button>
  )
}

export default Button