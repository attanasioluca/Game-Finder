import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import accountlogo from "../assets/accountlogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px">
            <Link to={`/`}>
                <Image src={logo} boxSize="50px" />
            </Link>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
            <Link to={`/account`}>
                <Image src={accountlogo} boxSize="50px"/>
            </Link>
        </HStack>
    );
};

export default NavBar;
