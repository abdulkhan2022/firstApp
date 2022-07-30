import React from 'react'
import PropTypes from 'prop-types'


export default function Alert(props) {
    return (
        <div className={`alert alert-${props.typeT} alert-dismissible fade show`} role="alert">
            <strong>{props.typeT} : </strong>{props.messageM}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
