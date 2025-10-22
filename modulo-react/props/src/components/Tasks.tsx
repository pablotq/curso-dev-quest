import NewTask from "./NewTask";

const Tasks = () => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                <NewTask description="Estudar React no fim de semana"></NewTask>
                <NewTask description="Fazer bolo de chocolate"></NewTask>
            </ul>
        </div>

    );
}

export default Tasks;