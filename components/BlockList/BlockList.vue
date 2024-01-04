<template>
  <div class="list">
    <div class="list__container">
      <div class="list__head">
        <h2 class="list__title">{{ title }}</h2>
        <USelectMenu v-model="store.orderBy" :options="orderByVariant">
          <template #label>
            <span v-if="store.orderBy.value">{{ store.orderBy.value }}</span>
            <span v-else>Выберите сортировку</span>
          </template>
          <template #option="{ option: item }">
            <span>{{ item.value }}</span>
          </template>
        </USelectMenu>
        <UInput
          class="list__input"
          v-model="store.search"
          color="empty"
          variant="empty"
          placeholder="Поиск..."
          icon="i-heroicons-magnifying-glass-20-solid"
        />
      </div>
   
      <ul class="list__list" v-if="!products.pending">
        <li class="list__elem" v-for="product in products.data" :key="product.id">
          <CardProduct :item="product" />
        </li>
      </ul>
      <div v-else-if="products.data && products.data.length == 0" class="list__empty">Пока товаров нет</div>
      <ul v-else class="list__list">
        <li class="list__elem" v-for="index in 8" :key="index">
          <USkeleton class="h-[250px] w-[250px]" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../../store/store";

const store = useStore();

const filter = reactive({
  title: "",
  sortBy: "",
});

const orderByVariant = [
  { value: "По убыванию", name: "-price" },
  { value: "По возростанию", name: "price" },
];

const { title, products } = defineProps({
  title: String,
  products: Object,
});
</script>

<style lang="scss">
@import "./blockList.scss";
</style>
