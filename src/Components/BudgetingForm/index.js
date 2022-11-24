import { useRef, useState } from 'react'

export const BudgetingForm = () => {
    // add ref/state variables:
    const userRef = useRef()
    const errRef = useRef()

    return (
        // create the form jsx elements:
      <div> 
        <div>
            <h2>Income:</h2>
            <label htmlFor="totalIncome">Total Yearly Income:
               <input 
               id="totalIncome" type="number"></input> 
            </label>
        </div>
        <div>
            <h2>Expenses:</h2>
        </div>
        <div>
            <h3>ُEssentials:</h3>
            <label htmlFor='monthlyRent'>Monthly Rent
              <input 
              id='monthlyRent' 
              type="number" ></input>  
            </label>

            <label htmlFor='monthlyFood'>Monthly Food/Groceries
              <input 
              id='monthlyFood' 
              type="number" ></input>  
            </label>
        </div>
        <div>
            <h3>ُBills:</h3>
            
        </div>
        <div>
            <h3>ُTransport:</h3>
        </div>
        <div>
            <h3>ُChildcare:</h3>
        </div>
      </div>   
        
    )
}
