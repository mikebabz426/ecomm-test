import React from "react";
import styled from "styled-components";
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./../StateProvider";

const CheckoutWrap = styled.div`
	display: flex;
	padding: 20px;
	background-color: #fff;
	height: max-content;
`;

const CheckoutLeft = styled.div``;

const CheckoutRight = styled.div``;

const BannerAd = styled.img`
	width: 100%;
	margin-bottom: 10px;
`;

const HeadingContainer = styled.div``;

const Title = styled.h2`
	margin-right: 10px;
	padding: 10px;
	border-bottom: 1px solid lightgray;
`;

const Checkout = () => {
	const [{ basket, user }] = useStateValue();

	return (
		<CheckoutWrap>
			<CheckoutLeft>
				<BannerAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
				<HeadingContainer>
					<h3>Hello {user?.email}</h3>
					<Title>Your Shopping Basket</Title>
				</HeadingContainer>
				{basket.map((item, i) => (
					<CheckoutProduct key={i} {...item} />
				))}

				{/* SHOPPING CART ITEM */}
				{/* SHOPPING CART ITEM */}
				{/* SHOPPING CART ITEM */}
				{/* SHOPPING CART ITEM */}
			</CheckoutLeft>
			<CheckoutRight>
				<Subtotal />
			</CheckoutRight>
		</CheckoutWrap>
	);
};

export default Checkout;
