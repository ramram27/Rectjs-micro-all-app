import { useState } from "react";

const Expense = () => {
    const [expense, setExpense] = useState([]);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [cat, setCat] = useState("Food"); 

    const SubmitHandler = (e) => { 
        e.preventDefault(); 
 
        if(!amount || !description) { 
            alert("Please fill in all fields");
            return;
        }

        const newExpense = {
           id: Date.now(), 
           amount: Number(amount),
           description: description,
           cat: cat
        };
        
        setExpense([...expense, newExpense]);
        
        
        setAmount('');
        setDescription('');
        setCat('Food');
    };

   
    const total = expense.reduce((sum, item) => sum + item.amount, 0);

    return(
        <div 
        style={{
            border: "2px solid white",
            marginLeft: "100px",
            width: "400px",
            padding: "20px"
        }}>
          <h2>Expense Tracker</h2>
          <div>
            <form onSubmit={SubmitHandler}>
                <div>
                    <label>
                        Amount: 
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                  <label>
                   Description: 
                   <input 
                       type="text"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                   />
                  </label>
                </div>

                <div>
                    <label>Category: </label>
                    <select 
                        value={cat}
                        onChange={(e) => setCat(e.target.value)}> 
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
          </div>

          
          <div style={{ marginTop: "20px" }}>
              <h3>Expenses:</h3>
              {expense.length === 0 ? (
                  <p>No expenses yet</p>
              ) : (
                  <ul style={{ listStyle: "none", padding: 0 }}>
                      {expense.map((item) => (
                          <li key={item.id} style={{ 
                              borderBottom: "1px solid #ccc", 
                              padding: "10px 0" 
                          }}>
                              <strong>{item.description}</strong> - ${item.amount} 
                              <span style={{ marginLeft: "10px", fontSize: "0.9em" }}>
                                  ({item.cat})
                              </span>
                          </li>
                      ))}
                  </ul>
              )}
              {expense.length > 0 && (
                  <h4>Total: ${total}</h4>
              )}
          </div>
        </div>
    );
};

export default Expense;