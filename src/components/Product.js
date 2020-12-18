import React from "react";
import styled from "styled-components";

const ProductWrap = styled.div``;

const Info = styled.div``;

const Title = styled.p``;

const Price = styled.p``;

const Rating = styled.div``;

const ProductImage = styled.img``;

const Product = () => {
	return (
		<ProductWrap>
			<Info>
				<Title>Product Here</Title>
				<Price>
					<small>$</small>
					<strong>12.99</strong>
				</Price>
				<Rating>⭐⭐⭐⭐⭐</Rating>
			</Info>
			<ProductImage />
		</ProductWrap>
	);
};

export default Product;
