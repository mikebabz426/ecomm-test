import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./../StateProvider";

const Header = styled.nav`
	height: 60px;
	display: flex;
	align-items: center;
	background-color: #131921;
	position: sticky;
	top: 0;
	z-index: 100;
`;
const Logo = styled.img`
	width: 100px;
	object-fit: contain;
	margin: 0 20px;
	margin-top: 18px;
`;
const Search = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	height: 40px;
`;
const SearchInput = styled.input`
	height: 40px;
	padding: 10px;
	border: none;
	width: 100%;
`;
const IconBox = styled.div`
	padding: 2px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 40px;
	background-color: #cd9042;
`;
const MiniNav = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
const Option = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	color: white;
`;
const HighlightOne = styled.span`
	font-size: 12px;
`;
const HighlightTwo = styled.span`
	font-size: 16px;
	font-weight: bold;
`;

const Basket = styled(ShoppingBasketIcon)`
	display: flex;
	align-items: center;
	margin: 0 10px;
`;

const ItemsSpan = styled.span`
	font-weight: bold;
`;

const IconWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 10px;
	color: white;
`;

const Navbar = () => {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<Header>
			<Link to="/">
				<Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
			</Link>
			<Search>
				<SearchInput />
				<IconBox>
					<SearchIcon />
				</IconBox>
			</Search>
			<MiniNav>
				<Option>
					<HighlightOne>Hello Guest</HighlightOne>
					<HighlightTwo>Sign In</HighlightTwo>
				</Option>
				<Option>
					<HighlightOne>Returns</HighlightOne>
					<HighlightTwo>& Orders</HighlightTwo>
				</Option>
				<Option>
					<HighlightOne>Your</HighlightOne>
					<HighlightTwo>Prime</HighlightTwo>
				</Option>
				<Link to="/checkout">
					<IconWrap>
						<Basket />
						<ItemsSpan>{basket.length}</ItemsSpan>
					</IconWrap>
				</Link>
			</MiniNav>
		</Header>
	);
};

export default Navbar;
