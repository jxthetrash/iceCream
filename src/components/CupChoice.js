
const CupChoice = ({active, imageUrl, index, name, setChosenCup}) => {

    return (
        <div className={active? "item item-active" : "item"} onClick={()=> setChosenCup(index)}>
         <img src={imageUrl} className={active? "img-fluid thumbnail rounded img-thumbnail active" : "img-fluid thumbnail rounded img-thumbnail"} alt={name} />
         <h6 className="name">{name}</h6>
     </div>)
}

export default CupChoice
