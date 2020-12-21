import React from "react";
import styled from "styled-components";
import { useStateValue } from "./../StateProvider";

const ProductWrap = styled.div`
	display: flex;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Image = styled.img`
	object-fit: contain;
	width: 180px;
	height: 180px;
`;

const Info = styled.div`
	padding-left: 20px;
`;

const Title = styled.p`
	font-size: 17px;
	font-weight: 800;
`;

const Price = styled.p``;

const Rating = styled.div`
	display: flex;
`;

const RemoveButton = styled.button`
	background-color: #f0c14b;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
	padding: 0.2rem;
`;

const CheckoutProduct = ({ id, image, title, price, rating }) => {
	const [, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({ type: "REMOVE_FROM_BASKET", id: id });
	};

	return (
		<ProductWrap>
			<Image src={image} />
			<Info>
				<Title>{title}</Title>
				<Price>
					<small>$</small>
					<strong>{price}</strong>
				</Price>
				<Rating>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</Rating>
				<RemoveButton onClick={removeFromBasket}>
					Remove from Basket
				</RemoveButton>
			</Info>
		</ProductWrap>
	);
};

export default CheckoutProduct;
