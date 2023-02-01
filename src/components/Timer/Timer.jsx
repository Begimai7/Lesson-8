import { useEffect, useRef, useState } from "react"
import styled from "styled-components";
import { Card } from "../UI/Card/Card";

export const Timer = () => {
    const [timer, setTimer] = useState(0)
    const timerRef = useRef()

useEffect(() => {
 
    timerRef.current = setInterval(() => {
    setTimer((prevS) => prevS + 1)
    }, 1000)
   
   }, [])
   
   useEffect(() => {
    setTimeout(() => {
     clearInterval(timerRef.current )
    }, 60000);
   }, [])
   
    

    return(
        <Card>
             <TimerContainer>
             <div style={{fontWeight: "bold", fontSize: 25}}>Timer: {timer}</div>
        </TimerContainer>
        </Card>
       
    )
}


const TimerContainer = styled.div`
    display: flex;
`