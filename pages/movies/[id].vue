<script setup lang="ts">

const { $api } = useNuxtApp();

const route = useRoute();

const { data: movie, pending} = await $api.movie.getMovie(route.params.id);

useSeoMeta({
  title: movie.value.Title,
})

</script>

<template>
  <div class="movie-item group">
    <div class="movie-item-image-wrapper">
      <el-image v-if="movie?.Poster"
                :src="movie.Poster" style="width: 100%" fit="fill"  :alt="movie.Title" loading="lazy" />
    </div>

    <div class="movie-item-content-wrapper">
      <div class="movie-item-title-wrapper">
        <h3 class="movie-item-title">{{ movie.Title }}</h3>
        <div class="movie-item-genres-wrapper">
          <span
              class="movie-item-genre-tag"
          >{{ movie.Type }}</span
          >
          <span
              class="movie-item-genre-tag"
          >{{ movie.Year }}</span>
          <span
              class="movie-item-genre-tag"
          >{{ movie.Director }}</span>
        </div>
      </div>
      <div>
        <p>{{movie.Plot}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>