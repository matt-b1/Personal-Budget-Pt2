import { useRef, useState } from 'react'

export const BudgetingForm = () => {
    // add ref/state variables:
    const userRef = useRef()
    const errRef = useRef()

    return (
        // create the form jsx elements:
      <div id='budgetForm'> 
        <h2>Income:</h2>
        <div className='budgetGrid' id='inputIncome'>
            <label htmlFor="totalIncome">Total Yearly Income:
               <input 
               id="totalIncome" type="number"></input> 
            </label>
        </div>
        <h2>Expenses:</h2>
        <div className='budgetGrid' id='expenseBudget'>
        </div>
        <h3>Essentials:</h3>
        <div className='budgetGrid' id='essentialsBudget'>
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
        <h3>Bills:</h3>
        <div className='budgetGrid' id='billsBudget'>
            <label htmlFor='councilTax'>Council Tax
              <input 
              id='councilTax' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='gas'>Gas:
              <input 
              id='gas' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='electric'>Electric:
              <input 
              id='electric' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='water'>Water:
              <input 
              id='water' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='tv'>TV License (incl. Sky/Virgin Media):
              <input 
              id='tv' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='mobilePhone'>Mobile Phone:
              <input 
              id='mobilePhone' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='landline'>Landline Telephone:
              <input 
              id='landline' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='broadband'>Broadband Internet:
              <input 
              id='broadband' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='homeInsurance'>Home Insurance:
              <input 
              id='homeInsurance' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='healthInsurance'>Health Insurance:
              <input 
              id='healthInsurance' 
              type="number" ></input>  
            </label>

            
            
        </div>
        <h3>Transport:</h3>
        <div className='budgetGrid' id='transportBudget'>
        
            <label htmlFor='fuel'>Fuel:
              <input 
              id='fuel' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='parking'>Parking:
              <input 
              id='parking' 
              type="number" ></input>  
            </label>

            
            
        </div>
        <h3>Childcare:</h3>
        <div className='budgetGrid' id='childcareBudget'>
            
        </div>
      </div>   
        
    )
}
