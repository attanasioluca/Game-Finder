import { Game } from "../hooks/useGames";
import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import NavBar from "./NavBar";

interface Props {
    game: Game;
}

const GamePageCard = ({ game }: Props) => {
    console.log(game);
    
    return (
        <div>
            <NavBar onSearch={() => {}} />
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
                        <PlatformIconList platforms={
                    game.parent_platforms.map((p) => p.platform)} />
                    </VStack>
                </HStack>
                
                <Box w={1200} borderRadius={5}>
                    <Text
                        dangerouslySetInnerHTML={{ __html: game.description }}
                        p={8}
                    />
                </Box>
            </VStack>
        </div>
    );
};

export default GamePageCard;
