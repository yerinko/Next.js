import NavBar from "./NavBar";
import Link from "next/link";
import styled from "styled-components";

const MyLayout = props  => {
    return(
        <LayoutStyle>
           <NavBar/>
            {props.children}
        </LayoutStyle>
    )
}
export default MyLayout;

const LayoutStyle = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #DDD;
    `