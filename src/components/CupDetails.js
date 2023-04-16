
const CupDetails = ({description, imageUrl, name})  => {
    return (
        <>
        <img className="detail-pic" src={imageUrl} alt={name} />
        <h2 className="detail-name">{name}</h2>
        <p className="discription">{description}</p>
        </>
    )
}

export default CupDetails