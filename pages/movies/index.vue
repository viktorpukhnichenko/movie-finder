<script setup lang="ts">
import MovieItem from "@/components/movie/MovieItem.vue";
import AppModal from "@/components/movie/UI/modal/AppModal.vue";
import { ref, defineAsyncComponent } from "vue";
import {useMoviesStore} from "~/store/movie";
import movie from "~/repository/modules/movie";

// async components
const MovieForm = defineAsyncComponent(() => import("@/components/movie/MovieForm.vue"));

const route = useRoute();
const router = useRouter();


const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.getMovies(route.query.search, route.query.page);
})

onUpdated(() => {
  moviesStore.getMovies(route.query.search, route.query.page);
})

const showMovieForm = ref<boolean>(false)
function hideForm() {
  showMovieForm.value = false;
}
function showForm() {
  showMovieForm.value = true;
}

function onPageChange(page) {
  router.replace({ name: 'movies', query: { search: route.query.search, page }})
}
</script>

<template>
  <el-main>
    <el-button type="success" @click="showForm">Add movie</el-button>
    <AppModal
        :show="showMovieForm"
        title="Add Movie"
        @close="hideForm()"
    >
      <MovieForm
          v-if="showMovieForm"
          @cancel="hideForm"
      />
    </AppModal>
    <el-row :gutter="20">
      <el-col :span="14" :offset="6">
        <el-carousel v-loading="moviesStore.isLoadingMovie" height="700px" :autoplay="false" indicator-position="none">
          <el-carousel-item v-for="movie in moviesStore.movies" :key="movie.imdbID">
            <NuxtLink :to="`/movies/${movie.imdbID}`">
              <MovieItem
                  :movie="movie"
              />
            </NuxtLink>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <div class="flex items-center justify-center" v-if="+moviesStore.total > 0">
      <el-pagination
          class="mt-2"
          :page-size="10"
          :pager-count="11"
          layout="prev, pager, next"
          :total="+moviesStore.total"
          @change="onPageChange"
      />
    </div>
  </el-main>
</template>
