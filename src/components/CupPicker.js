// HI SI 579 Student! This is not *that* complex an application,
// but turning it into written instructions sure makes it seem
// that way. For many of you, basing most of what you do on the
// working example will be easier than going through all these
// instructions across four components.

// @tip if we already provided markup, keep it there. It's there
// to help.

// @tip the React Developer Tools Chrome extension will make this WAY
// easier. The components in the inspector won't match the component names anymore
// (this is default React behavior, lecture 13 have a workaround). It should
// be pretty clear which component is which, though...

// This 👇 is an array of cupChoices that has already been imported for you
// This will be used to create the grid of available cups to purchase.
import { useState } from "react";
import {cupChoices} from "../util/cupselections";
import AddToCart from "./AddToCart";
import CupChoice from "./CupChoice";
import CupDetails from "./CupDetails";

const CupPicker = () => {
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
          {!Number.isInteger(targetCupIndex) && <strong>Please Choose A Cup</strong>}
          {/* Info on the selected cup and the add to cart button appear here */}
          {/* @todo Conditional display! this should not output anything unless you've clicked a cup in the cup grid.
          If you've clicked a cup, you need two things:
           1. A <CupDetails> component that provides a large display of the selected cup
           2. An <AddToCart> component that provides a button that, when clicked, results
            in the "Added THE-CUP-NAME to cart" message that is conditionally displayed a few lines up
           */}
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
          <h2>Pick a cup</h2>
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

export default CupPicker;
