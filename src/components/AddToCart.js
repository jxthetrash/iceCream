// @todo create the AddToCart component. It will return this markup:
//      <button class="btn btn-primary">Add To Cart</button>
//
// The button should have a click listener so when you click it,
// the "ADDED (cup name)" TO CART" message appears.

const AddToCart = ({name, setMessage}) => {

  return (
    <>
      <button className="btn btn-primary" onClick={()=> setMessage(`Added "${name}" to cart`)}>Add To Cart</button>
    </>)
}
  
  export default AddToCart;