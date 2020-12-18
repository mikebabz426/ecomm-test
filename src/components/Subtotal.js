import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";

const SubtotalWrap = styled.div``;

const Subtotal = ({}) => {
	return (
		<SubtotalWrap>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({0} items):
							<strong>{` ${0}`}</strong>
						</p>
						<small>
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={0}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
		</SubtotalWrap>
	);
};

export default Subtotal;
