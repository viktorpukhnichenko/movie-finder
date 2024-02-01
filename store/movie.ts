import { defineStore } from 'pinia'
import type {Movie} from "~/types/Movie";
import movie from "~/repository/modules/movie";

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([])
  const isLoadingMovie = ref<bool>(false)
  const total = ref<string>('0')

  async function getMovies(search: string, page) {
    isLoadingMovie.value = true;
    const { $api } = useNuxtApp();

    const { data } = await $api.movie.getMovies(search, page);

    if(data.value.Response === "True") {
      movies.value = data.value.Search;
      total.value = data.value.totalResults
    }

    isLoadingMovie.value = false;
  }

  function addMovie(data: Movie) {
    movies.value.push(data);
    total.value = total.value + 1;
  }

  return { movies, getMovies, isLoadingMovie, total, addMovie }
})
