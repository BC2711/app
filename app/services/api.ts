import Constants from 'expo-constants';

const API_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: Constants.expoConfig?.extra?.EXPO_PUBLIC_MOVIE_API_KEY
};

const fetchMovies = async ({ query }: { query?: string }) => {

    try {
        const endPoint = query
            ? `${API_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_CONFIG.API_KEY}`
            : `${API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_CONFIG.API_KEY}`;

        const response = await fetch(endPoint, {
            method: 'GET',
            headers: { accept: 'application/json' } 
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Movies: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

export default fetchMovies;
