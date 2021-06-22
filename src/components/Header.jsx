import React from "react"
import Logo from "../assets/Easy_logo.png"
import styled from "styled-components";
import Button from "./Button";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .header__logo {
  img {
      max-width: 290px;
      max-height: 78px;
  }
}  
`

const Header = () => {
	return (
		<HeaderStyle>
			<div className="header__logo">
				<a href="#">
					<img src={Logo} alt="Logo"/>
				</a>
			</div>
			<Button

			/>
		</HeaderStyle>
	);
}

export default Header;

