import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constant';
import useFetch from '../services/useFetch';
import fetchMovies from '../services/api';
import MovieCard from '../components/MovieCard';
import Searchbar from '../components/Searchbar';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: movies, loading: movieLoading, errors: movieErrors, refetch: loadMovies, reset } = useFetch(() => fetchMovies({ query: searchQuery }), false);

    useEffect(() => {
        const timeOutId = setTimeout(async () => {
            if (searchQuery.trim()) {
                await loadMovies();
            } else {
                reset();
            }
        }, 500);
        return () => clearTimeout(timeOutId)
    }, [searchQuery]);

    return (
        <View className="flex-1 bg-primary">
            <Image className="flex-1 absolute w-full z-0" source={IMAGES.bg} />
            <FlatList
                ListHeaderComponent={
                    <>
                        <View className="w-full flex-row justify-center mt-20 items-center">
                            <Image source={IMAGES.logo} className="w-12 h-10" />
                        </View>
                        <View className="my-5">
                            <Searchbar
                                placeholder="Search movies..."
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>
                        {movieLoading && <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 12 }} />}
                        {movieErrors && <Text className="text-red-500 px-5 my-3">Error: {movieErrors?.message}</Text>}
                        {!movieLoading && !movieErrors && searchQuery.trim() && movies?.length > 0 && (
                            <Text className="text-xl text-white font-bold">
                                Search result for <Text className="text-accent">{searchQuery}</Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    !movieLoading && !movieErrors ? (
                        <View className='mt-10 px-5'>
                            <Text className='text-center text-gray-500'>
                                {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
                            </Text>
                        </View>
                    ) : null
                }
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={({ item }) => <MovieCard {...item} />}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({});
