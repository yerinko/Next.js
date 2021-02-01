import Link from "next/link";
import styled from "styled-components";


const NavBar = () => {
    return(
    <div>
        <Link href="../index" >
            {/*<LinkStyle>*/}
           <a> Home</a>
            {/*</LinkStyle>*/}
        </Link>
        <Link href="../about">
            {/*<LinkStyle>*/}
                <a> About</a>
            {/*</LinkStyle>*/}
        </Link>
    </div>
    )
}
export default NavBar;

const LinkStyle = styled.a`
    margin-right: 15px;
    cursor: pointer;
    `