import './App.css';
import FormInput from "./components/FormInput/FormInput.component";
import TodoList from "./components/TodoList/TodoList.component";
import React from "react";

// We Suffer More In Imagination Than In Reality

const App = () => {
    return (
        <>
            <FormInput />
            <TodoList/>
        </>
    )
};

export default App;
