import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './FormInput.styles.css';
import {ADD_ITEM} from "../../redux/todoItems/todoItems.reducer";

const FormInput = () => {
    const [content,setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = ev => {
        ev.preventDefault();
        dispatch(ADD_ITEM(content));
        setContent('');
    }

    const handleChange = ev => {
        setContent(ev.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='itemContent'
                    value={content}
                    onChange={handleChange}
                    placeholder='What Needs To Be Done'
                    required={true}
                    autoFocus={true}
                    autoComplete="off"
                    className="form-input"
                />
                <input type="submit" className="button add-button" value="Submit"/>
        </form>
    )
}

export default FormInput;