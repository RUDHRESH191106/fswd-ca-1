const ServiceCard = ({ name, discription}) => {
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>{discription}</p>
        </div>
    );
};

export default ServiceCard;