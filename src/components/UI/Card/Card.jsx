
import styled from "styled-components"

export const Card =({children})=>{
    return <Container>{children}</Container>
}

const Container = styled.div`
padding: 20px 25px;
margin: 2rem auto;
    width: 480px;
    border-radius:10px;
    box-shadow: -2px 0px 46px 1px rgba(86,86,86,0.76);
-webkit-box-shadow: -2px 0px 46px 1px rgba(86,86,86,0.76);
-moz-box-shadow: -2px 0px 46px 1px rgba(86,86,86,0.76);


`