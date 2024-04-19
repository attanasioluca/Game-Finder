import React from 'react'
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

export interface Game {
    name: string
    desc: string
    rating: number
    platform: Platform | null
    genre: Genre | null
}

interface Props {
    game: Game
}

const GamePage = ({game}: Props) => {
    return (
          <div>
            <h1>{game.name}</h1>
            <p>{game.desc}</p>
          </div>
        );
}

export default GamePage