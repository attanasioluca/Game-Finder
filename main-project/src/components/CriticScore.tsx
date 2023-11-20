import { Badge } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'

interface Props {
    rating: number
}

const CriticScore = ({rating}: Props) => {

    let color = rating >75? "green" : rating > 60 ? "yellow" : "red";
    return (
        <Badge fontSize="14px" colorScheme={color} paddingX={2} borderRadius="4px">{rating}</Badge>
    )
}

export default CriticScore