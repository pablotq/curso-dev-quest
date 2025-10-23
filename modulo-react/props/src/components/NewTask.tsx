type TaskProps = {
    description?: string;
};

const NewTask = ({ description = "nenhuma tarefa cadastrada" }: TaskProps) => {
    return (
            <p>- Tarefa: {description}</p>
    );
}

export default NewTask;