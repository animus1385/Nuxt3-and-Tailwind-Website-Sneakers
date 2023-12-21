<template>
    <div class="card-product">
        <UButton  v-if="!cart" class="card-product__favorite" color="empty" variant="empty" icon="i-material-symbols-favorite-outline" />
        <NuxtImg class="card-product__img" src="/img/logo.svg" />
        <h3 class="card-product__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
        <div class="card-product__bottom">
            <div class="card-product__price">
                <span class="card-product__label">Цена:</span>
                <span class="card-product__value">12 999 руб.</span>
            </div>
            <UButton
                @click="store.cartModal = !store.cartModal"
                class="card-product__btn-add"
                color="empty"
                variant="empty"
                :icon="(!cart)? 'i-material-symbols-add' : 'i-material-symbols-close-rounded'"
            />
        </div>
    </div>
</template>

<script setup>
import { useStore } from '../../store/store';
const store = useStore();
const {cart} = defineProps({
    cart: Boolean
})

function addCart() {

}
function deleteCart() {

}
</script>

<style lang="scss">
@import './card-product.scss';
</style>
