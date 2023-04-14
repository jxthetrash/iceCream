import { useState } from "react";
import {cupChoices} from "../util/cupselections";
import AddToCart from "./AddToCart";
import CupChoice from "./CupChoice";
import CupDetails from "./CupDetails";

const Picker = () => {
  // @todo, there are two things State will need to keep track of
  // 1. which cup you clicked (so it knows which cup to feature in the left column)
  // 2. The message you'd like to display after clicking "add to cart"
  const [addedToCartCup, setaddedToCartCup] = useState('')
  const [targetCupIndex, setTargetCupIndex] = useState('')
  
  const getCupInCart = (cup) => {
    setaddedToCartCup(cup)
    console.log(addedToCartCup)
  }

 
  return (
    <div className='container'>
      {/* The message that appears after adding to cart appears here. */}
      {/* @todo Conditional display! This not output anything if you haven't clicked "Add To Cart" yet.: */}
      {addedToCartCup && <p className="alert alert-success">{addedToCartCup}</p>}

      <div className="row">
        <div className='col col-5'>
          {!Number.isInteger(targetCupIndex) && <img src="images/placeholder.png" id="placehoder" />}

          {Number.isInteger(targetCupIndex) && <CupDetails 
            description={cupChoices[targetCupIndex].description}
            imageUrl={cupChoices[targetCupIndex].imageUrl}
            name={cupChoices[targetCupIndex].name}/>} 

          {Number.isInteger(targetCupIndex) && <AddToCart name={cupChoices[targetCupIndex].name} setMessage={setaddedToCartCup}/> }
        </div>
        <div className='col col-1'>
        {/*  This 'col-1' column stays empty, it is here to provide a bit of space.  */}
        </div>

        <div className='col col-6'>
          <h2>Pick n Ice Cream</h2>
          <div className='row'>
            {/* The cups available for purchase appear here. These are generated from the items in the cupChoices array */}
            {/* There is an array called cupChoices that is already imported. Each item in cupChoices should be
             rendered as a <CupChoice> */}
            {cupChoices.map((cupChoice, index) => 
              <CupChoice key={index}
                description={cupChoice.description}
                imageUrl={cupChoice.imageUrl}
                index={index}
                name={cupChoice.name}
                setChosenCup={setTargetCupIndex}/>)}
          </div>
        </div>
      </div>
    </div>)
}

export default Picker;
