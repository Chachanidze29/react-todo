import {toggleEditMode, changeItem, changeStatus, getCurrentDate} from "./todoItems.utils"
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todoItems:[]
    },
    reducers:{
        ADD_ITEM: {
            reducer:(state,action) => ({
                ...state,
                todoItems:[...state.todoItems,action.payload]
            }),
            prepare: content => ({
                payload:{
                    id:Date.now(),
                    editMode:false,
                    completed:false,
                    createdAt: getCurrentDate(),
                    content
                }
            })
        },
        REMOVE_ITEM: (state,action)=>({
            ...state,
            todoItems: state.todoItems.filter(item => item['id'] !== action.payload['id'])
        }),
        EDIT_ITEM: (state,action)=>({
            ...state,
            todoItems: toggleEditMode(state.todoItems,action.payload)
        }),
        EDIT_ITEM_SUBMIT:{
            reducer:(state,action) => ({
                ...state,
                todoItems: changeItem(state.todoItems, action.payload)
            }),
            prepare: payload => ({
                payload:{
                    ...payload,
                    createdAt: getCurrentDate(),
                }
            })
        },
        CANCEL_EDIT: (state,action)=>({
            ...state,
            todoItems: toggleEditMode(state.todoItems, action.payload)
        }),
        CLEAR_LIST:(state,action)=>({
            ...state,
            todoItems: []
        }),
        CHANGE_STATUS: (state,action)=>({
            ...state,
            todoItems: changeStatus(state.todoItems,action.payload)
        })
    },
    extraReducers:(builder) => {
        builder
            .addDefaultCase((state,action) => state)
    }
})

const {actions,reducer} = todoSlice;

export const {ADD_ITEM,REMOVE_ITEM,EDIT_ITEM,EDIT_ITEM_SUBMIT,CANCEL_EDIT,CHANGE_STATUS,CLEAR_LIST} = actions;

export default reducer;