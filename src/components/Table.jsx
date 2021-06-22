import React from "react";
import styled from "styled-components";
import InfoSvg from "../assets/i1.svg"

const TableStyle = styled.div`
  border: 1px solid #414142;
  width: 100%;
  margin-bottom: 50px;
  
.table__row {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #414142;
    flex-wrap: wrap;
    &:last-child {
      border-bottom: none;
    }
}
   .row-table__column_left {
    width: 70%;
    text-align: left;
    }
    
    .row-table__column_right {
      width: 30%;
      text-align: right;
      font-size: 17px;
      color: #27AE60;
      margin: auto 0;
    }
    
  .row-table__list {
    display: flex;
    flex-wrap: wrap;
  }

  .row-table__item {
    background-color: #27AE60;
    color: #ffffff;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 10px 10px 0;
    &:last-child {
      margin: 10px 0;
    }
  }

  .row-table__title {
    font-size: 17px;
    margin-bottom: 10px;
    position: relative;
    white-space: nowrap;
  }
  
  .row-table__icon {
      position: absolute;
      padding: 9px;
      top: -5px;
      width: 2px;
      height: 2px;
      &:hover {
        div {
         display: block;
      }
    }
  }
  
  .row-table__dropdown {
    position: absolute;
    background: black;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    padding: 10px;
    width: 150px;
    border-radius: 5px;
    opacity: 0.8;
    top: -60px;
    left: -60px;
    display: none;
    white-space: normal;
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      position: absolute;
      right: 73px;
      bottom: -16px;
      opacity: 0.8;
      border-top-color: black;
    }
  }
}
`

const Table = () => {
	return (
		<TableStyle>
			<div className="table__row row-table">
				<div className="row-table__column row-table__column_left">
					<div className="row-table__title">Hosted Status Pages
						<span className="row-table__icon" style={
							{
								backgroundImage: `url(${InfoSvg})` ,
								backgroundRepeat: 'no-repeat'
							}
						}>
							<div className="row-table__dropdown">
								Текст всплывающей подсказки
							</div>
						</span>
					</div>
					<ul className="row-table__list">
						<li className="row-table__item">US-East</li>
						<li className="row-table__item">US-West</li>
						<li className="row-table__item">Ireland</li>
						<li className="row-table__item">Sydney</li>
						<li className="row-table__item">Toronto</li>
					</ul>
				</div>
				<div className="row-table__column row-table__column_right">
					Operational
				</div>
			</div>
			<div className="table__row row-table">
				<div className="row-table__column row-table__column_left">
					<div className="row-table__title">Hosted Status Pages
						<span className="row-table__icon" style={
							{
								backgroundImage: `url(${InfoSvg})` ,
								backgroundRepeat: 'no-repeat'
							}
						}>
							<div className="row-table__dropdown">
								Текст всплывающей подсказки
							</div>
						</span>
					</div>
					<ul className="row-table__list">
						<li className="row-table__item">US-East</li>
						<li className="row-table__item">US-West</li>
						<li className="row-table__item">Ireland</li>
						<li className="row-table__item">Sydney</li>
						<li className="row-table__item">Toronto</li>
					</ul>
				</div>
				<div className="row-table__column row-table__column_right">
					Operational
				</div>
			</div>
			<div className="table__row row-table">
				<div className="row-table__column row-table__column_left">
					<div className="row-table__title">Hosted Status Pages
						<span className="row-table__icon" style={
							{
								backgroundImage: `url(${InfoSvg})` ,
								backgroundRepeat: 'no-repeat'
							}
						}>
							<div className="row-table__dropdown">
								Текст всплывающей подсказки
							</div>
						</span>
					</div>
					<ul className="row-table__list">
						<li className="row-table__item">US-East</li>
						<li className="row-table__item">US-West</li>
						<li className="row-table__item">Ireland</li>
						<li className="row-table__item">Sydney</li>
						<li className="row-table__item">Toronto</li>
						<li className="row-table__item">Toronto</li>
						<li className="row-table__item">Toronto</li>
					</ul>
				</div>
				<div className="row-table__column row-table__column_right">
					Operational
				</div>
			</div>
			<div className="table__row row-table">
				<div className="row-table__column row-table__column_left">
					<div className="row-table__title">Hosted Status Pages
						<span className="row-table__icon" style={
							{
								backgroundImage: `url(${InfoSvg})` ,
								backgroundRepeat: 'no-repeat'
							}
						}>
							<div className="row-table__dropdown">
								Текст всплывающей подсказки
							</div>
						</span>
					</div>
					<ul className="row-table__list">
						<li className="row-table__item">US-East</li>
						<li className="row-table__item">US-West</li>
						<li className="row-table__item">Ireland</li>
						<li className="row-table__item">Sydney</li>
						<li className="row-table__item">Toronto</li>
					</ul>
				</div>
				<div className="row-table__column row-table__column_right">
					Operational
				</div>
			</div>
			<div className="table__row row-table">
				<div className="row-table__column row-table__column_left">
					<div className="row-table__title">Hosted Status Pages
						<span className="row-table__icon" style={
							{
								backgroundImage: `url(${InfoSvg})` ,
								backgroundRepeat: 'no-repeat'
							}
						}>
							<div className="row-table__dropdown">
								Текст всплывающей подсказки
							</div>
						</span>
					</div>
					<ul className="row-table__list">
						<li className="row-table__item">US-East</li>
						<li className="row-table__item">US-West</li>
						<li className="row-table__item">Ireland</li>
						<li className="row-table__item">Sydney</li>
						<li className="row-table__item">Toronto</li>
						<li className="row-table__item">US-East</li>
						<li className="row-table__item">US-West</li>
						<li className="row-table__item">Ireland</li>
						<li className="row-table__item">Sydney</li>
						<li className="row-table__item">Toronto</li>
					</ul>
				</div>
				<div className="row-table__column row-table__column_right">
					Operational
				</div>
			</div>
			<div className="table__row row-table">
				<div className="row-table__column row-table__column_left">
					<div className="row-table__title">Hosted Status Pages
						<span className="row-table__icon" style={
							{
								backgroundImage: `url(${InfoSvg})` ,
								backgroundRepeat: 'no-repeat'
							}
						}>
							<div className="row-table__dropdown">
								Текст всплывающей подсказки
							</div>
						</span>
					</div>
					<ul className="row-table__list">
						<li className="row-table__item">US-East</li>
						<li className="row-table__item">US-West</li>
						<li className="row-table__item">Ireland</li>
					</ul>
				</div>
				<div className="row-table__column row-table__column_right">
					Operational
				</div>
			</div>
		</TableStyle>
	);
}

export default Table;
