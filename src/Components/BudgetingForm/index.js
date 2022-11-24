import { useState } from "react"

export const BudgetingForm = () => {
    
    const [budgetName, setBudgetName] = useState();
    

    return (
        <div id="budgetForm">
            <form>
                <label>Budget Name:
                    <input type="text" value={budgetName}></input>
                </label>
                <label>Total income:
                    <input type="number"></input>
                </label>

            </form>
        </div>
        
    )
}
