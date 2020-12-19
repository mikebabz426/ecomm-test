import React from "react";
import styled from "styled-components";

const ProductWrap = styled.div``;

const Image = styled.img``;

const Info = styled.div``;

const CheckoutProduct = () => {
	return (
		<ProductWrap>
			<Image src={image} />
			<Info></Info>
		</ProductWrap>
	);
};

export default CheckoutProduct;
