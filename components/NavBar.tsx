import Link from "next/link";
import styled from "styled-components";


const NavBar = () => {
    return(
    <div>
        <Link href="/">
            <LinkStyle>
                Home
            </LinkStyle>
        </Link>
        <Link href="/about">
            <LinkStyle>
                About
            </LinkStyle>
        </Link>
    </div>
    )
}
export default NavBar;

const LinkStyle = styled.a`
    margin-right: 15px;
    cursor: pointer;
    `