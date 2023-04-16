
const ReceipeButton = ({receipeUrl})  => {
    return (
        <a href={receipeUrl}><button type="button" className="btn btn-outline-secondary">Go To Receipe</button></a>
    )
}

export default ReceipeButton