<script setup lang="ts">
import {Search} from "@element-plus/icons-vue";

const router = useRouter();

const search = ref<string>('');

const onSubmit = () => {
  router.push({ name: 'movies', query: { search: search.value, page: '1' }})
}
</script>

<template>
  <el-main>
    <el-form @submit.prevent="onSubmit">
      <el-form-item>
        <el-input
            v-model="search"
            class="w-50 m-2"
            size="large"
            placeholder="Please input movie title"
            :suffix-icon="Search"
        />
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" type="primary">Search</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<style scoped>

</style>