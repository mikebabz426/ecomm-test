import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "./../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";

const PaymentWrap = styled.div`
	background-color: #fff;
`;

const Container = styled.div`
	h1 {
		text-align: center;
		padding: 10px;
		font-weight: 400;
		background-color: rgb(234, 237, 237);
		border-bottom: 1px solid lightgray;

		a {
			text-decoration: none;
		}
	}
`;

const Section = styled.div`
	display: flex;
	padding: 20px;
	margin: 0 20px;
	border-bottom: 1px solid lightgray;
`;

const Title = styled.div`
	flex: 0.2;
`;

const Heading = styled.h3``;

const Address = styled.div`
	flex: 0.8;
`;

const Items = styled.div`
	flex: 0.8;
`;

const Details = styled.div`
	flex: 0.8;
`;

const Form = styled.form``;

const PriceContainer = styled.div``;

const Payment = () => {
	const [{ basket, user }] = useStateValue();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		//generate stripe secret which allows charge to customer (new secret generates on basket change)
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				//Stripe expects total in curency subunits (for dollars ie: 'cents')
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});

			setClientSecret(response.data.clientSecret);
		};
	}, [basket]);

	const handleSubmit = async (e) => {
		//handle payment with stripe
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
		}
	};
	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	return (
		<PaymentWrap>
			<Container>
				<h1>
					Checkout (<Link to="/checkout">{basket.length} items</Link>)
				</h1>
				<Section>
					<Title>
						<Heading>Delivery Address</Heading>
					</Title>
					<Address>
						<p>{user?.email}</p>
						<p>777 Lucky Ln</p>
						<p>Las Vegas, NV</p>
					</Address>
				</Section>
				<Section>
					<Title>
						<Heading>Review items and delivery</Heading>
					</Title>
					<Items>
						{basket.map((item) => (
							<CheckoutProduct {...item} />
						))}
					</Items>
				</Section>
				<Section>
					<Title>
						<Heading>Payment Method</Heading>
					</Title>
					<Details>
						<Form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<PriceContainer>
								<CurrencyFormat
									renderText={(value) => (
										<>
											<h3>Order Total: {value}</h3>
										</>
									)}
									value={getBasketTotal(basket)}
									displayType={"text"}
									decimalScale={2}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
								</button>
							</PriceContainer>
							{error && <div>{error}</div>}
						</Form>
					</Details>
				</Section>
			</Container>
		</PaymentWrap>
	);
};

export default Payment;
