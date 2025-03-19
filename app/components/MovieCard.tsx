import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { IMAGES } from '../constant';

interface MovieCardProps {
    id: number;
    poster_path: string | null;
    title: string;
    release_date: string,
    vote_average: number
}

const MovieCard = ({ id, poster_path, release_date, vote_average, title }: MovieCardProps) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}
                />
                <Text className="text-white text-sm font-bold mt-2" numberOfLines={1}>{title}</Text>
                <View className='flex-row items-center justify-start gap-x-1'>
                    <Image className='size-4' source={IMAGES.star} />
                    <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average / 2)}</Text>
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-100 font-medium mt-1'>{release_date?.split('-')[0]}</Text>
                    {/* <Text className='text-xs text-light-300 font-medium mt-1'></Text> */}
                </View>
            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;
