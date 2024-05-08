import { Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage";
import MainPage from "./components/MainPage";

function App() {
    return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games/:gameId" element={<GamePage />} />
        <Route path="/account" element={<GamePage />} />
    </Routes>
    );
}
export default App;
