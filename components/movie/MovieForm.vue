<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import type {Movie} from "~/types/Movie";
import {useMoviesStore} from "~/store/movie";

const emit = defineEmits(["cancel"]);

const movieStore = useMoviesStore();

const types = reactive([
  { text: "movie", value: "movie" },
  { text: "series", value: "series" },
  { text: "episode", value: "episode" },
]);

const form = ref<Movie>({
  imdbID: Math.random(),
  Year: '2020',
  Title: '',
  Poster: '',
  Type: ''
});

function cancelForm() {
  emit("cancel");
}

function addMovie() {
  movieStore.addMovie(form.value)
  emit("cancel");
}

const nameInput = ref();
onMounted(() => nameInput.value.focus());
</script>

<template>
  <form @submit.prevent="addMovie">
    <input type="hidden" name="id" v-model="form.imdbID" />
    <div class="movie-form-input-wrapper">
      <label for="name">Name</label>
      <input
        ref="nameInput"
        type="text"
        name="name"
        v-model="form.Title"
        class="movie-form-input"
      />
    </div>
    <div class="movie-form-input-wrapper">
      <label for="image">Image</label>
      <input
        type="text"
        name="image"
        v-model="form.Poster"
        class="movie-form-input"
      />
    </div>
    <div class="movie-form-input-wrapper">
      <label for="genre">Genres</label>
      <select
        name="genre"
        v-model="form.Type"
        class="movie-form-input"
      >
        <option
          v-for="option in types"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="movie-form-actions-wrapper mt-2">
      <button type="button" class="button" @click="cancelForm">Cancel</button>

      <button type="submit" class="button-primary">
        <span v-if="form.imdbID">Save</span>
        <span v-else>Create</span>
      </button>
    </div>
  </form>
</template>
