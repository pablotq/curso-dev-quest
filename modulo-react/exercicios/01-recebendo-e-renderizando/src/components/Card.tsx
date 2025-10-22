type CardProps = {
    titulo: string;
    descricao: string;
};

const Card = ({ titulo, descricao }: CardProps) => {
    return (
        <div className="card">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    );
}

export default Card;