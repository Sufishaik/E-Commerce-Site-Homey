import React from "react"
export const FormSelect = ({ label, name, size, defaultValue, list }) => {
    return (
        <>
            <div className="form-control">
                <label htmlFor={name} className="label">
                    <span className="label-text capitalize">{label}</span>
                </label>
                <select name={name} id={name} className={`select select-bordered ${size}`} defaultValue={defaultValue}>
                    {list?.map((item:any) => {
                        return (
                            <option value={item} key={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}