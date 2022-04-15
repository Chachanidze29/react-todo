import React from "react";
import { useDispatch } from "react-redux";
import './ListItem.styles.css';
import {EDIT_ITEM, EDIT_ITEM_SUBMIT, CANCEL_EDIT, CHANGE_STATUS, REMOVE_ITEM} from "../../redux/todoItems/todoItems.reducer";

const ListItem = ({ item }) => {
    let { content } = item;

    const dispatch = useDispatch();

    const handleChange = ev => {
        content = ev.target.value;
    }

    return (
        <div className='list-item'>
            <div className='item-content-container'>
                {
                    item['editMode'] ?
                        <input
                            type='text'
                            onChange={handleChange}
                            defaultValue={content}
                            className='edit-form-input'
                            autoFocus={true}
                        />
                        :
                        <div className='para-container'>
                            <p className='created-at'>{item.createdAt}</p>
                            <p className={`${item.completed ? 'completed' : ''}`} onClick={() => dispatch(EDIT_ITEM(item))}>{content}</p>
                        </div>
                }
            </div>
            {
                item['editMode'] ? <div>
                        <button
                            className="button submit-edit-button"
                            onClick={() => {
                                dispatch(EDIT_ITEM_SUBMIT({...item, content}));
                            }}
                        >
                            Submit Change
                        </button>
                        <button className="button cancel-remove-button" onClick={() => dispatch(CANCEL_EDIT(item))}>Cancel</button>
                    </div>
                    :
                    <div>
                        <input type="checkbox" checked={!!item.completed} onChange={() => dispatch(CHANGE_STATUS(item))} />
                        <button className="button cancel-remove-button" onClick={() => dispatch(REMOVE_ITEM(item))}>Remove Todo</button>
                    </div>
            }
        </div>
    )
}

export default ListItem;