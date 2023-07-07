import React, {ChangeEvent, useState} from 'react';

export const Input = () => {
    const [newTitle, setNewTitle]=useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        <input value={newTitle} onChange={onChangeHandler}/>
    )
}