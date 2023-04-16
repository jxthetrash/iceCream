
const CupDetails = ({description, receipeUrl, imageUrl, name})  => {
    return (
        <>
        <img className="detail-pic" src={imageUrl} alt={name} />
        <div className=".d-flex" id="name-and-button">
            <h2 className="detail-name d-inline">{name}</h2>
            <a href={receipeUrl} className="d-inline pr-5 mr-5"><button type="button" className="btn btn-outline-secondary">Go To Receipe</button></a>
        </div>
        <p className="discription">{description}</p>
        </>
    )
}

export default CupDetails