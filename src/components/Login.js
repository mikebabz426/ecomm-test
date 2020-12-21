import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { auth, db } from "../firebase";

const LoginWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background-color: #fff;
`;

const Logo = styled.img`
	margin: 20px auto;
	object-fit: contain;
	width: 100px;
`;

const Container = styled.div``;

const Title = styled.h1`
	font-weight: 500;
	margin-bottom: 20px;
`;

const Form = styled.form`
	width: 300px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	border: 1px solid lightgray;
	padding: 20px;
`;

const FieldLabel = styled.h5`
	margin-bottom: 5px;
`;
const Input = styled.input`
	height: 30px;
	margin-bottom: 10px;
	background-color: white;
	width: 98%;
`;
const Button = styled.button`
	background: #f0c14b;
	border-radius: 2px;
	width: 100%;
	height: 30px;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
`;
const Message = styled.p`
	margin-top: 15px;
	font-size: 12px;
`;
const CreateButton = styled.button`
	border-radius: 2px;
	width: 100%;
	height: 30px;
	border: 1px solid;
	margin-top: 10px;
	border-color: darkgray;
`;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) history.push("/");
			})
			.catch((err) => alert(err.message));
	};

	const registerUser = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) history.push("/");
			})
			.catch((err) => alert(err.message));
	};
	return (
		<LoginWrap>
			<Link to="/">
				<Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
			</Link>
			<Container>
				<Form>
					<Title>Sign In</Title>
					<FieldLabel>Email</FieldLabel>
					<Input
						value={email}
						type="email"
						onChange={(e) => setEmail(e.target.value)}
					></Input>
					<FieldLabel>Password</FieldLabel>
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Input>
					<Button onClick={signIn}>Sign In</Button>
					<Message>
						By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
						Sale. Please see our Privacy Notice, our Cookies Notice and our
						Interest-Based Ads Notice.
					</Message>
					<CreateButton onClick={registerUser}>
						Create your Amazon account
					</CreateButton>
				</Form>
			</Container>
		</LoginWrap>
	);
};

export default Login;
