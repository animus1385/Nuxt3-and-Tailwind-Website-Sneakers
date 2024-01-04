<template>
  <div class="card-product" v-if="item.title">
    <UButton
      v-if="!cart"
      class="card-product__favorite"
      color="empty"
      variant="empty"
      :icon="!isFavorited ? 'i-material-symbols-favorite-outline' : 'i-material-symbols-favorite'"
      @click="addFavorite"
    />
    <NuxtImg class="card-product__img" :src="item.imageUrl" />
    <h3 class="card-product__title">{{ item.title }}</h3>
    <div class="card-product__bottom">
      <div class="card-product__price">
        <span class="card-product__label">Цена:</span>
        <span class="card-product__value">{{ item.price }}</span>
      </div>
      <UButton
        @click="store.cartModal = !store.cartModal"
        class="card-product__btn-add"
        color="empty"
        variant="empty"
        :icon="!cart ? 'i-material-symbols-add' : 'i-material-symbols-close-rounded'"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../../store/store";
const store = useStore();
const { cart, item } = defineProps({
  cart: Boolean,
  item: Object,
});
const isFavorited = ref(item.isFavorited);

async function addFavorite() {
  isFavorited.value = !isFavorited.value;
  const { data } = await useFetch("https://dd38c3eaa419c084.mokky.dev/favorites", {
    method: "post",
    body: {
      parentId: item.id,
    },
  });
}
function addCart() {}
function deleteCart() {}
</script>

<style lang="scss">
@import "./card-product.scss";
</style>
