import React from "react"
import styled from "styled-components";

const ScheduleStyle = styled.div`
  margin-bottom: 70px;
  padding: 15px;
  font-size: 16px;
  @media (max-width: 768px) {
    margin-bottom: 55px;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  
  .schedule__header {
    background: #00AAF0;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
  }
.schedule__info {
    text-align: end;
  }

.content-schedule {
  border: 1px solid #414142;
  border-top: none;
  padding: 15px;

  li {
    display: flex;
    margin-bottom: 12px;
    @media (max-width: 650px) {
      flex-direction: column;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.content-schedule__left {
  // color: #ffffff;
  width: 20%;
  white-space: nowrap;
  @media (max-width: 650px) {
    margin-bottom: 3px;
  }
}
.content-schedule__right {
  font-size: 14px;
  opacity: 0.7;
}
`

const Schedule = () => {
	return (
		<ScheduleStyle>
			<h3 className="section__title">Scheduled Maintenance</h3>
			<div className="schedule__header">
				<div className="schedule__version">
					<a href="">Deploy Version 1.5.3</a>
				</div>
				<div className="schedule__info">Planned Maintenance</div>
			</div>
			<ul className="schedule__content content-schedule">
				<li>
					<div className="content-schedule__left">Schedule</div>
					<div className="content-schedule__right">June 22, 2021 15:00 - 15:15 UTC</div>
				</li>
				<li>
					<div className="content-schedule__left">Data Centers</div>
					<div className="content-schedule__right">US-East, US-West, Ireland, Sydney, Toronto</div>
				</li>
				<li>
					<div className="content-schedule__left">Components</div>
					<div className="content-schedule__right">Hosted Status Pages, Developer API, Status API, Dashboard, Website</div>
				</li>
				<li>
					<div className="content-schedule__left">Description</div>
					<div className="content-schedule__right">We will be deploying the next version of Status.io.</div>
				</li>
				<li>
					<div className="content-schedule__left"></div>
					<div className="content-schedule__right">There will be no downtime during this maintenance.</div>
				</li>
			</ul>
		</ScheduleStyle>
	);
}

export default Schedule;