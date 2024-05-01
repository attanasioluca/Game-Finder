import React from 'react'
import { Game } from "../hooks/useGames"
import { Badge, Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
    game: Game
}

const GameCard = ({ game} : Props) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`games/${game.id}`, {state: { game }});
    }

  return (
    <div onClick={handleNavigate}>
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack marginBottom={2} justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore rating={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading><Emoji rating={game.rating_top} />
            </CardBody>
        </Card>
    </div>
  )
}

export default GameCard