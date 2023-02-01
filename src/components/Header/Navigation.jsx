import { Button } from "../UI/Button/Button"
import styled from "styled-components"

export const Navigation =({loginHandler , usersHandler , timerHandler})=>{
    return(
        <nav>
            <NavList>
                <li>
                    <Button onClick={usersHandler}>Users</Button>
                </li>
                <li>
                    <Button onClick={timerHandler}>Timer</Button>
                </li>
                <li>
                    <Button onClick={loginHandler}>Logout</Button>
                </li>
            </NavList>
        </nav>
    )
}

const NavList = styled.ul`
    list-style:none;
    display: flex;
    width: 400px;
    justify-content:space-around;
`