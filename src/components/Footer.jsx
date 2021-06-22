import React from "react"
import styled from "styled-components";

const FooterStyle = styled.footer`
  padding-bottom: 10px;
  
  .menu {
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    flex-direction: column;
  }
}

.menu__left {
  display: flex;
  width: 75%;
  a {
    margin-right: 20px;
    white-space: nowrap;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
}
.menu__right {
  display: block;
  text-align: right;
  a {
    white-space: nowrap;
  }
  @media (max-width: 420px) {
    text-align: center;
  }
}
`
const Footer = () => {
	return (
		<FooterStyle >
			<nav className="menu">
				<div className="menu__left">
					<a href="#"><strong>Status</strong></a>
					<a href="#">History</a>
					<a href="#">Report Issue</a>
				</div>
				<div className="menu__right"><a href="#">Powered by Status.io</a></div>
			</nav>
		</FooterStyle>
	);
}

export default Footer;