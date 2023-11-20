import {
    Box,
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onClick: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onClick, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {data.map((genre: Genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                borderRadius={8}
                                boxSize="32px"
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                color={
                                    genre.id === selectedGenre?.id
                                    ? "white"
                                    : "gray"
                                }
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => onClick(genre)}
                                variant="link"
                                fontSize="lg"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
