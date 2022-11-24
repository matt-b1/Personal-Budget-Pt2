import { useRef, useState, useContext } from 'react'
import axios from '../../Api/axios'

import AuthContext from '../../Api/context/AuthProvider';
import { refresh } from '../../Features/auth/refresh';

export const BudgetingForm = () => {
    const { auth, setAuth } = useContext(AuthContext)

    // add ref/state variables:
    const userRef = useRef()
    const errRef = useRef()

    const [loading, setLoading] = useState(true);
    const [totalIncome, setTotalIncome] = useState();

    const USER_URL = '/users';
    const BUDGET_URL = '/budget';

   
    const handleSubmit = async (e) => {
      e.preventDefault();
      await refresh(setAuth, setLoading);
      try {
          const response = await axios.patch(USER_URL, JSON.stringify({
            'user' : auth.user,
            'totalBudget' : totalIncome
          }),
            {
              headers: { 
                'Content-Type': 'application/json',
                withCredentials: true,
                'authorization': `bearer ${auth.token}`
             },
              withCredentials: true
            }
          );
        
      } catch (error) {
         console.log(error)
      }
    }

    return (
        // create the form jsx elements:
      <div id='budgetForm'> 
        <h2>Income:</h2>
        <div className='budgetGrid' id='inputIncome'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="totalIncome">Total Yearly Income:
                    <input 
                    id="totalIncome" 
                    type="number" 
                    onChange={(e) => setTotalIncome(e.target.value)}
                    > 
                    </input>
                    
                </label>
                <input type="submit"></input>
            </form>
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
            
            <label htmlFor='carMaintenance'>Car Maintenance:
              <input 
              id='carMaintenance' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='carInsurance'>Car Insurance:
              <input 
              id='carInsurance' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='roadTax'>Road Tax:
              <input 
              id='roadTax' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='mot'>MOT:
              <input 
              id='mot' 
              type="number" ></input>  
            </label>
            
            <label htmlFor='publicTransport'>Public Transport:
              <input 
              id='publicTransport' 
              type="number" ></input>  
            </label>

        </div>
        <h3>Family & Children:</h3>
        <div className='budgetGrid' id='childcareBudget'>
            
            <label htmlFor='childCare'>Childcare:
              <input 
              id='childCare' 
              type="number" ></input>  
            </label>

        </div>
      </div>   
        
    )
}
