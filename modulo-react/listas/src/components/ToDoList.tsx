
type ToDo = {
    id: number;
    text: string;
};

export const ToDoList = () => {
    const todos: ToDo[] = [
        { id: 1, text: 'Estudar TypeScript' },
        { id: 2, text: 'Estudar CSS' },
        { id: 3, text: 'Estudar JS' },
    ];
    return (
        <>
            <h2>Minhas Tarefas</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}