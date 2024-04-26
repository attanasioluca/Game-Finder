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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./components/GamePage";
import MainPage, { GameQuery } from "./components/MainPage";
import ProfilePage from "./components/ProfilePage";
import { Game } from "./hooks/useGames";



function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/profile",
            element: <ProfilePage />,
        },
        {
            path: "games/:gameId",
            element: <GamePage onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })}/>,
        },
    ]);
    return <RouterProvider router={router} />;
}
export default App;
