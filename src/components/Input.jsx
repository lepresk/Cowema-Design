import React from "react"
import PropTypes from "prop-types"

const styles = {
  input: {
    paddingTop: '10px',
    paddingBottom: '10px',
    borderColor: '#ccc',
    borderRadius: '6px'
  }
}

function Input({ type, ...props }) {
  return (
    <div className="mb-4">
      <input className="form-control" style={styles.input} type={type} {...props} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired
}

export default Input


