import React from 'react'
import { User } from '../hooks/useUserInfo'
import LoginPage from './LoginPage'
import { Heading, Text } from '@chakra-ui/react'

interface Props {
    user: User | null
}

const ProfilePage = ({user} : Props) => {
    if(user == null) return (<LoginPage/>)
    else{
        return (
            <div>
                <Heading>{"Welcome back, " + user.username}</Heading>
            </div>
        )
    }
}

export default ProfilePage