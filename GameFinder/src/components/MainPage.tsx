import { useState } from 'react'
import { Platform } from '../hooks/usePlatforms';
import { Genre } from '../hooks/useGenres';
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './NavBar';
import GenreList from './GenreList';
import GameHeading from './GameHeading';
import PlatformSelector from './PlatformSelector';
import SortSelector from './SortSelector';
import GameGrid from './GameGrid';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

const MainPage = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return (<Grid
        templateAreas={{
            base: `"nav" "main"`,
            md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
            base: "1fr",
            md: "200px 1fr",
        }}
    >
        <GridItem area="nav">
            <NavBar
                onSearch={(searchText) =>
                    setGameQuery({ ...gameQuery, searchText })
                }
            />
        </GridItem>
        <Show above="md">
            <GridItem area="aside" paddingX={5}>
                <GenreList
                    selectedGenre={gameQuery.genre}
                    onClick={(genre) =>
                        setGameQuery({ ...gameQuery, genre })
                    }
                />
            </GridItem>
        </Show>
        <GridItem area="main">
            <Box paddingLeft={2}>
                <GameHeading gamequery={gameQuery} />
                <Flex marginBottom={5}>
                    <Box marginRight={5}>
                        <PlatformSelector
                            selectedPlatform={gameQuery.platform}
                            onSelectedPlatform={(platform) =>
                                setGameQuery({ ...gameQuery, platform })
                            }
                        />
                    </Box>
                    <SortSelector
                        selectedSortOrder={gameQuery.sortOrder}
                        onSelectSortOrder={(sortOrder) =>
                            setGameQuery({ ...gameQuery, sortOrder })
                        }
                    />
                </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery} />
        </GridItem>
    </Grid>
); 
}
export default MainPage
