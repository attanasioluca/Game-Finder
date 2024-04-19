import React from 'react'
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { useParams } from 'react-router-dom'
import { Game } from "../hooks/useGames"

const GamePage = () => {
    const params = useParams();
    return (
          <div>
            {params.gameId}
          </div>
    );
}

export default GamePage