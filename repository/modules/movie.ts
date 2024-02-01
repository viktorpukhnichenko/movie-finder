import FetchFactory from "../factory";
import { type AsyncDataOptions } from "#app";
import { type FetchOptions } from "ofetch";
import type {Movie} from "~/types/Movie";

class MovieModule extends FetchFactory<Movie[]> {

  /**
   * Return the movie
   * @param title options for `title`
   * @param page options for `page number`
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */

  getMovies(
      title: string,
      page: number = 1,
      asyncDataOptions?: AsyncDataOptions<any>
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call(
          "GET",
          `/?s=${title}&page=${page}`,
          undefined,
          fetchOptions
      );
    }, asyncDataOptions);
  }

  getMovie(
      id: string,
      asyncDataOptions?: AsyncDataOptions<any>
  ) {
    return useAsyncData<Movie[]>(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call(
          "GET",
          `/?i=${id}`,
          undefined,
          fetchOptions
      );
    }, asyncDataOptions);
  }
}

export default MovieModule;
