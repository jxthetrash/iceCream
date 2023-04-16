import { useState } from "react";
import {cupChoices} from "../util/selections";
import CupChoice from "./CupChoice";
import CupDetails from "./CupDetails";
import ReceipeButton from "./ReceipeButton"

const Picker = () => {
  // @todo, there are two things State will need to keep track of
  // 1. which cup you clicked (so it knows which cup to feature in the left column)
  // 2. The message you'd like to display after clicking "add to cart"
  const [addedToCartCup, setaddedToCartCup] = useState('')
  const [targetCupIndex, setTargetCupIndex] = useState('')
 
  return (
    <div className='container-fluid'>
      {/* The message that appears after adding to cart appears here. */}
      {/* @todo Conditional display! This not output anything if you haven't clicked "Add To Cart" yet.: */}
      {addedToCartCup && <p className="alert alert-success">{addedToCartCup}</p>}

      <div id="grid">
        <div id="display">
          {!Number.isInteger(targetCupIndex) && <div id="placeholder"><img src="images/placeholder.png" className="img-fluid" id="placeholder-img" alt="9 diffrent types of ice creams on a blue and pink background"/></div>}
          {Number.isInteger(targetCupIndex) && <CupDetails {...cupChoices[targetCupIndex]} receipeUrl={cupChoices[targetCupIndex].recipeUrl}/>} 
        </div>

        <div id="options">
          {/* <h3 className="text-center">Pick an Ice Cream</h3> */}
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
                setChosenCup={setTargetCupIndex}
                active={targetCupIndex === index}
                />)}
          </div>
        </div>
        <div id="intro">
          {!Number.isInteger(targetCupIndex) && <h3>The page introduces 12 types of ice creams around the world! Click on the thumbnails to  find out more about diffrent ice creams.</h3>}
        </div>
      
      </div>

    </div>)
}

export default Picker;
