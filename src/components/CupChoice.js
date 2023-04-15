//@todo create the CupChoice component. This is responsible for rendering
// a cup as it appears in the "Pick a cup" grid.
// It needs to return this markup:
//   <div class="col col-3">
//     <img src="THE CUP IMAGE URL" class="img-fluid" alt="THE CUP NAME" />
//     <h6>THE CUP NAME</h6>
//   </div>
//
// The <div class='col col-3'> needs a click listener so when you click it
// it appears in the left column as your choice.

const CupChoice = ({description, imageUrl, index, name, setChosenCup}) => {

    return (
        <div className="item" onClick={()=> setChosenCup(index)}>
         <img src={imageUrl} className="img-fluid rounded border border-secondary" alt={name} />
         <h6 className="name">{name}</h6>
     </div>)
}

export default CupChoice
