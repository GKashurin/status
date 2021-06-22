import React from "react"
import styled from "styled-components";

const ButtonStyle = styled.button`
  height: 35px;
  // color: #333;
  // background-color: #fff;
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 4px;
  &:hover {
    opacity: 0.7;
  }
  `
const Button = () => {
	return (
		<ButtonStyle>Subscribe</ButtonStyle>
	);
}

export default Button;