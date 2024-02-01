import { $fetch, type FetchOptions } from "ofetch";

// locals
import MovieModule from "~/repository/modules/movie";

interface IApiInstance {
  movie: MovieModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.omdbApiBase,
    params: {
      'apikey': config.public.omdbApiSecret
    }
  };

  const apiFetcher = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    movie: new MovieModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
