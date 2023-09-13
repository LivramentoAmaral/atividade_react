function Card({ titulo, imagem, descricao, curriculo }) {

    return (
        <div className="card">
            <div className="card-item">
                <h2>{titulo}</h2>
                <img src={imagem} alt={titulo} />
                <p>{descricao}</p>
                <a href={curriculo} target="_blank" rel="noopener noreferrer">
                    Currículo
                </a>
            </div>
        </div>
    );
}

export default Card;
