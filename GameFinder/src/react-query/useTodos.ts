import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
    name: string;
    date: string;
    id: number;
}
    

const useTodos = () => {
    const fetchTodos = () =>
        axios
            .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.data);
        
    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    })
}

export default useTodos;