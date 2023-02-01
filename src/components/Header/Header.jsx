import styled from "styled-components"


import { Navigation } from "./Navigation"

export const Header =({isAuthenticated , loginHandler , clickedUsers ,usersHandler ,timerHandler ,timer})=>{
    return(
        <StyledHeader>
            <h1>A Typical Page</h1>
             {isAuthenticated  /clickedUsers /timer && <Navigation loginHandler={loginHandler} usersHandler={usersHandler} timerHandler={timerHandler} />}
        
            
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 20px 20px;
    background-color:#c73bda;
    color:white;
    display: flex;
    justify-content:space-between;
`