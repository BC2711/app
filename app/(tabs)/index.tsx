import { Link, useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { IMAGES } from "../constant";
import Searchbar from "../components/Searchbar";
import useFetch from "../services/useFetch";
import fetchMovies from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Index() {
  const router = useRouter();
  const { data: movies, loading: movieLoading, errors: movieErrors } = useFetch(() => fetchMovies({ query: '' }))
  return (
    <View className="flex-1 bg-primary">
      <Image source={IMAGES.bg} className="flex-1 absolute w-full z-0" />
      <ScrollView className="flex-5 px-5" showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
        <Image source={IMAGES.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {
          movieLoading ? (
            <ActivityIndicator size='large' color='#0000ff' className="mt-10 self-center" />
          ) : movieErrors ? (
            <Text> Error: {movieErrors?.message}</Text>
          ) : (
            <View className="flex-1 mt-5">
              <Searchbar value="" onChangeText={() => { }} onPress={() => router.push('/Search')} placeholder='Search for a movie' />
              <>
                <Text className="text-large text-white  mt-5 mb-3">Latest Movies</Text>
                <FlatList
                  className="mt-2 pb-32"
                  scrollEnabled={false}
                  data={movies}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10
                  }}
                  renderItem={({ item }) => (<MovieCard {...item} />)}

                />
              </>
            </View>
          )
        }

      </ScrollView>

    </View>
  );
}
