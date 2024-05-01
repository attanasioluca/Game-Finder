import React, { useState } from "react";
import useGames, { Game } from "../hooks/useGames";
import {
    Box,
    Divider,
    Flex,
    HStack,
    Heading,
    Image,
    Spacer,
    VStack,
    space,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { GameQuery } from "./MainPage";

interface Props {
    game: Game;
}

const GamePageCard = ({ game }: Props) => {
    return (
        <VStack>
            <HStack>
                <Image
                    src={game.background_image}
                    maxHeight={500}
                    maxWidth={800}
                    borderRadius={15}
                    margin={5}
                />
                <VStack align="start">
                    <Heading>{game.name}</Heading>
                    <HStack w="full" gap={7}>
                        <Box marginTop="1">
                            <CriticScore rating={game.metacritic} />
                        </Box>
                        <Emoji rating={game.rating_top} />
                    </HStack>
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                </VStack>
            </HStack>
            <p>{game.description}</p>
        </VStack>
    );
};

export default GamePageCard;
