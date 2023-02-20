import HeaderButtonGroup from "../components/Header/HeaderButtonGroup";
import HeaderDroppable from "../components/Header/HeaderDroppable";
import HeaderLogo from "../components/Header/HeaderLogo";
import HeaderSearch from "../components/Header/HeaderSearch";
import HeaderToggle from "../components/Header/HeaderToggle";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
	return (
		<StyledHeader>
			<HeaderLogo />
			<HeaderSearch />
			<HeaderToggle />
			<HeaderDroppable />
			<HeaderButtonGroup />
		</StyledHeader>
	);
};

export default Header;
