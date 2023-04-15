import { useState } from "react";
import {cupChoices} from "../util/selections";
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
  
  // const colorOverlay = (index) {
    
  // }
 
  return (
    <div className='container'>
      {/* The message that appears after adding to cart appears here. */}
      {/* @todo Conditional display! This not output anything if you haven't clicked "Add To Cart" yet.: */}
      {addedToCartCup && <p className="alert alert-success">{addedToCartCup}</p>}

      <div id="grid">
        <div id="display">
          {!Number.isInteger(targetCupIndex) && <img src="images/placeholder.png" id="placehoder" className="img-fluid"/>}

          {Number.isInteger(targetCupIndex) && <CupDetails {...cupChoices[targetCupIndex]} />} 
        </div>

        <div id="options">
          <h3>Pick an Ice Cream</h3>
          <div id="option-list">
            {/* The cups available for purchase appear here. These are generated from the items in the cupChoices array */}
            {/* There is an array called cupChoices that is already imported. Each item in cupChoices should be
             rendered as a <CupChoice> */}
            {cupChoices.map((cupChoice, index) => 
              <CupChoice key={index}
                index={index}
                description={cupChoice.description}
                imageUrl={cupChoice.imageUrl}
                name={cupChoice.name}
                setChosenCup={setTargetCupIndex}/>)}
          </div>
        </div>
      </div>
    </div>)
}

export default Picker;
