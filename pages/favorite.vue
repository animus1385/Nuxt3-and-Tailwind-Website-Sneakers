<template>
  <div>
    <BlockList title="Мои закладки" :products="store.obj" />
  </div>
</template>

<script setup>
import { useStore } from "../store/store";
const store = useStore();
const { search, orderBy } = storeToRefs(store);

store.obj = await store.getFavorites();
watch([search, orderBy], async () => (store.obj = await store.getFavorites()));
</script>

<style></style>
