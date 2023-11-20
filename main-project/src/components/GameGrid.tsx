import { SimpleGrid, SkeletonText, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { SiDigikeyelectronics } from "react-icons/si";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    if (error) return <Text>{error}</Text>
    
    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            paddingLeft={2}
        >
            {isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton.toString()}>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>
                ))}
            {data.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
            
        </SimpleGrid>
    );
};

export default GameGrid;
