import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { selectTodoItems } from "../../redux/todoItems/todoItems.selector";
import ListItem from "../ListItem/ListItem.component";
import {CLEAR_LIST} from "../../redux/todoItems/todoItems.reducer";

const TodoList = () => {
    const todoItems = useSelector(selectTodoItems);
    const length = todoItems.length;
    const dispatch = useDispatch();

    return (
        <div>
            {
            length ?
                (
                    <div>
                        <input
                            type="button"
                            value="Clear List"
                            className='button cancel-remove-button'
                            onClick={() => dispatch(CLEAR_LIST())}
                        />
                    </div>
                )
                :
                null
            }
            <p>Items Count: {length} </p>
            {
                length ?
                    todoItems.map( todo => <ListItem key={todo.id} item={todo} /> )
                    :
                    null
            }
        </div>
    )
}

export default TodoList;