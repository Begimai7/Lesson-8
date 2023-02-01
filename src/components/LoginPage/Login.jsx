import { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "../UI/Button/Button"
import { Card } from "../UI/Card/Card"


export const Login = ({loginHandler})=>{
   const [enteredEmail , setEnteredEmail] = useState("")
   const [enteredPassword , setEnteredPassword] = useState("")
   const [isEmailValid , setIsEmailValid] = useState(false)
   const [isPasswordlValid , setIsPasswordlValid] = useState(false)
   const [formIsValid , setFormIsValid] = useState(false)

useEffect(()=>{
    setFormIsValid(isEmailValid && isPasswordlValid)
}, [isEmailValid , isPasswordlValid])

   const emailChangeHandler = (e)=>{
    setEnteredEmail(e.target.value)
    setIsEmailValid(enteredEmail.includes('@'))

   }

   const passwordChangeHandler = (e)=>{
    setEnteredPassword(e.target.value)
    setIsPasswordlValid(enteredPassword.trim().length >=6)
   }
   


    return(
        <Card>
<form>
    <InputContainer>
        <label htmlFor="email">Email</label>
        <StyledInput 
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailChangeHandler}/>
    </InputContainer>

    <InputContainer>
        <label htmlFor="password">Password</label>
        <StyledInput 
        type="password"
        id="password"
        value={enteredPassword}
        onChange={passwordChangeHandler}/>
    </InputContainer>

    <StyledButtonContainer>
        <Button 
        bgColor={'success'}
        disabled={!formIsValid} 
        onClick={loginHandler}
        
        >Login
        </Button>
    </StyledButtonContainer>
    
</form>

        </Card>
    )
} 


const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom:20px;
    font-weight:600px;
`

const StyledInput = styled.input`
    width: 300px;
    outline: none;
    border-radius: 5px;
    border:1px solid grey;
    padding: 5px 10px;

`
const StyledButtonContainer = styled.div`
    width: 100%;
    text-align:center;

`