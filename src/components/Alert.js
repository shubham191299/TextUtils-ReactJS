import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    let capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '58px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
        </div>}
    </div>
  )
}

Alert.propTypes = {
    alert: PropTypes.object,
}

Alert.defaultProps = {
    alert: {
        type: "danger",
        message: "You have not set any Alerts! This is a default Alert!"
    }
}