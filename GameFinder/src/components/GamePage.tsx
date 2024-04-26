import React, { useState } from "react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import getCroppedImageUrl from "../services/image-url";
import { useLocation, useParams } from "react-router-dom";
import useGames, { Game } from "../hooks/useGames";
import {
    Card,
    CardBody,
    HStack,
    Heading,
    Image,
} from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import GamePageCard from "./GamePageCard";
import NavBar from "./NavBar";
import { GameQuery } from "./MainPage";


interface Props {
    onSearch: (searchText: string) => void;
}

const GamePage = ({ onSearch }: Props) => {

    const location = useLocation();
    const game = location.state.game;

    return (
        <div>
            <NavBar onSearch={onSearch}/>
            <GamePageCard game={game} />
        </div>
    );
};

export default GamePage;
