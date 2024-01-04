<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useStore } from "../store/store";
const store = useStore();

store.obj = await store.getItems();
store.obj = await store.getFavorites();
</script>
