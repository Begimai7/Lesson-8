import styled from "styled-components"

export const Button =({children , disabled , onClick , bgColor })=>{
    return(
        <StyledButton disabled={disabled} onClick={onClick} bgColor={bgColor}>
            {children} 
            </StyledButton>
    )
}

const StyledButton = styled.button`
    padding: 10px 25px ;
    background-color: ${(props)=>(props.bgColor?"#5b1f8f":"#8f1f89")};
    border-radius:20px;
    border:none;
    color:white;
    cursor: pointer; 
    font-size: 20px;
    
    :disabled{
        background-color:grey;
    }
`