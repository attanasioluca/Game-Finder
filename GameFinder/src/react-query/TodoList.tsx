import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useTodos, { Todo } from "./useTodos";

const TodoList = () => {

    const { data, error, isLoading } = useTodos();

    if(isLoading) return <p>Loading...</p>

    if(error) return <p>{error.message}</p>

    return (
        <div>
            {data?.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
            ))}
        </div>
    );
};

export default TodoList;
