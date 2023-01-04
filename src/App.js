import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    isNewsletter: false
    
})

function handleChange(event){
    const {name, value, type, checked} = event.target
    setValue(previousValues=>({
            ...previousValues,
            [name]: type=== "checkbox" ? checked : value
    }))
}


function handleSubmit(event) {
    event.preventDefault()
    if (value.password===value.confirmPassword){
        console.log("Successfully signed up")
    }
    else{
        console.log("Passwords do not match")
        return
    }
    if (value.isNewsletter){
        console.log("Thanks for signing up for our newsletter")
    }
}

return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                onChange={handleChange}
                name="email"
                value={value.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                onChange={handleChange}
                name="password"
                value={value.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                onChange={handleChange}
                name="confirmPassword"
                value={value.confirmPassword}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    checked={value.isNewsletter}
                    onChange={handleChange}
                    name="isNewsletter"
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
)
}

export default App;
