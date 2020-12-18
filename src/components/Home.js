import React from "react";
import styled from "styled-components";
import Product from "./Product";

const HomeContainer = styled.div`
	height: 100vh;
`;

const Hero = styled.img`
	width: 100%;
	z-index: -1;
	margin-bottom: -150px;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Home = () => {
	return (
		<HomeContainer>
			<Hero
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="amazon-hero"
			/>
			<Product />
		</HomeContainer>
	);
};

export default Home;
