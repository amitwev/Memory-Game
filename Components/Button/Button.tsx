import React, { DOMAttributes } from 'react'

const Button = ({ value, classes, text, id, clicked, attributes }: { text: string, clicked: VoidFunction, classes?: string, id?: string, value?: string, attributes?: [{ key: string, value: string }] }) => {
    return (
        <button value={value} id={id} className={classes} onClick={clicked}>{text}</button>
    )
}

export default Button