import { Game } from "../hooks/useGames"
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface Props {
    game: Game
}

const GameCard = ({ game} : Props) => {
    if(game.id == "3498") {
        console.log({game});
    }
  return (
    <Link to={`games/${game.id}`}>
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
    </Link>
  )
}

export default GameCard