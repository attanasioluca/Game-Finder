import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamePage, { Game } from "./components/GamePage";
import MainPage from "./components/MainPage";

function App() {
    const [gameSelected, setGameSelected] = useState<Game>({} as Game);
    
    return(
        <Router>
            <Routes>
                <Route path="/main">
                    <MainPage/>
                </Route>
                <Route path={gameSelected.name}>
                    <GamePage game={gameSelected}/>
                </Route>
            </Routes>
        </Router>
    )
}
export default App;
