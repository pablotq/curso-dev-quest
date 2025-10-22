type TaskProps = {
    description: string;
};

const NewTask = ({ description }: TaskProps) => {
    return (
            <li>{description}</li>
    );
}

export default NewTask;