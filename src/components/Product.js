import React from "react";
import styled from "styled-components";
import { useStateValue } from "./../StateProvider";

const ProductWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	margin: 10px;
	padding: 20px;
	width: 100%;
	max-height: 400px;
	min-width: 100px;
	background-color: #fff;
	z-index: 1;
`;

const Info = styled.div`
	height: 100px;
	margin-bottom: 15px;
`;

const Title = styled.p``;

const Price = styled.p`
	margin-top: 5px;
`;

const Rating = styled.div`
	display: flex;
`;

const ProductImage = styled.img`
	max-height: 200px;
	width: 100%;
	object-fit: contain;
	margin-bottom: 15px;
`;

const Button = styled.button`
	background: #f0c14b;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
	color: #111;
	padding: 0.2rem;
`;

const Product = ({ id, title, price, rating, image }) => {
	const [state, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<ProductWrap>
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
			</Info>
			<ProductImage src={image} alt="product-image" />
			<Button onClick={addToBasket}>Add to Basket</Button>
		</ProductWrap>
	);
};

export default Product;
