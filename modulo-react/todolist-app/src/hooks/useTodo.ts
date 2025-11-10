import { useEffect, useState, type FormEvent } from 'react';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

async function getTodos(): Promise<Todo[]> {
    await new Promise(resolve=> setTimeout(resolve, 800))

    return[
        {id: 1, text: "Aprender useEffect sem dependências", completed: false},
        {id: 2, text: "Aprender useEffect com array vazio de dependência", completed: true},
        {id: 3, text: "Aprender useEffect com dependências", completed: false},
    ]
}

export const useTodo = () => {

    const [todolist, setTodolist] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<"all" | "completed" | "active">("all");
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await getTodos(); // simula a chamada pra api externa depois de 800 ms retorna a lista de tarefas
            console.log("dados recebidos", todos);
            setTodolist(todos);  
        };

        fetchTodos();
    }, [refresh])

    //! 1- sem array de dependências
    // useEffect(() => {
    //     console.log("Efeito executado");
    // }) //? sem dependências ele executa sempre a cada renderização

    //! 2- array vazio como dependencia
    // useEffect(() => {
    //     console.log("Efeito executado");

    // },[]) //? array vazio como dependencia ele executa apenas uma vez

    //! 3- com dependencia
    // useEffect(() => {
    //     localStorage.setItem('todolist', JSON.stringify(todolist));
    // },[todolist]) //? se as dependências mudarem ou o componente for montado executa o useEffect

    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const todoItem = formData.get("todo") as string;

        if (!todoItem.trim()) return

        setTodolist(prev => [...prev, {
            id: Date.now(),
            text: todoItem,
            completed: false
        }]);

        event.currentTarget.reset();

        setFilter("all");
    };

    const toggleTodoCompleted = (id: number) => {

        const newTodoList = todolist.map(todo => {
            if (id === todo.id) {
                const completed = !todo.completed;

                return {
                    ...todo,
                    completed,
                };
            }

            return todo;
        });

        setTodolist(newTodoList);

    };

    const filteredTodos = todolist.filter(todo => {
        switch (filter) {
            case "all": return true
            case "active": return !todo.completed
            case "completed": return todo.completed
        }
    });

    const clearCompleted = () => {
        setTodolist(prev => prev.filter(todo => !todo.completed));
    }

    const removeTodo = (id: number) => {
        setTodolist(prev => prev.filter(todo => todo.id !== id));
    };

    return {
        addTodo,
        toggleTodoCompleted,
        filteredTodos,
        clearCompleted,
        setFilter,
        filter,
        removeTodo,
        refresh,
        setRefresh
    };
};