import React from "react"
export const FormInputs = ({ label, name, type, defaultValue, size }) => {
    return (
        <>
            <div className="form-control">
                <label htmlFor={name} className="label">
                    <span className="label-text capitalize">{label}</span>
                </label>
                <input
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    className={`input input-bordered ${size}`}
                />
            </div>
        </>
    )
}