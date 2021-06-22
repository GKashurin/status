import React from "react";
import {VectorMap} from "react-jvectormap"
import styled from "styled-components";
//https://stackoverflow.com/questions/57844307/react-jvectormap-marker
//https://28arpit2000sharma.medium.com/react-india-map-react-any-country-map-c6047ff71876
//https://codepen.io/kittabit/pen/WwJQKj
//stackoverflow.com/questions/57844307/react-jvectormap-marker
//https://allegra9.medium.com/react-world-map-75aceda9cc48

const MapStyle = styled.div`
  border: 1px solid #414142;
  margin-bottom: 70px;
  height: 500px;
  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 55px;
  }
  @media (max-width: 630px) {
    height: 330px;
  }
  @media (max-width: 480px) {
    height: 250px;
    margin-bottom: 40px;
  }
`

const Map = () => {
	return (
		<>
			<h3 className="section__title">Locations</h3>
			<MapStyle>
				<div style={{width: '100%', height: '100%'}}>
					<VectorMap map={'ru_mill'} //jvectormap.com/maps/countries/russia/
							   backgroundColor="inherit"
						// ref="map"
							   containerStyle={{
								   width: '100%',
								   height: '100%'
							   }}
							   containerClassName="map"
							   zoomOnScroll={false}
							   regionStyle={{
								   initial: {
									   fill: "#797979",
									   stroke: "none",
									   "stroke-width": 0,
									   "stroke-opacity": 0
								   }
							   }}
							   markers={{
								   latLng: [56.51, 60.36],
								   name: "Ekaterinburg"
							   }}
							   markerStyle={{
								   initial: {
									   fill: '#FFD700',
									   stroke: '#383f47'
								   }
							   }}

					/>
				</div>
			</MapStyle>
		</>
	);
}

export default Map;
