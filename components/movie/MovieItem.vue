<script setup lang="ts">
import type {Movie} from "~/types/Movie";

defineProps<{
  movie: Movie
}>();

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
          >{{ movie.Year }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
