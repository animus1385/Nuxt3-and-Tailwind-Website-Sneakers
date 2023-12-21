<template>
    <USlideover v-model="store.cartModal">
        <UCard class="modal-cart">
            <template #header>
                <div class="modal-cart__header">
                    <h3 class="modal-cart__title">Корзина</h3>
                    <UButton color="empty" variant="empty" icon="i-material-symbols-close-rounded" @click="store.cartModal = false" />
                </div>
            </template>
            <div class="modal-cart__content">
                <CardProduct :cart="true" />
                <CardProduct :cart="true" />
            </div>
            <template #footer>
                <div class="modal-cart__footer">
                    <div class="modal-cart__text">
                        <span>Итого: </span>
                        <span>21 498 руб. </span>
                    </div>
                    <div class="modal-cart__text">
                        <span>Налог 5%: </span>
                        <span>1074 руб. </span>
                    </div>
                    <UButton class="modal-cart__btn" trailing color="empty" variant="empty" label="Оформить заказ" icon="i-material-symbols-arrow-right-alt-rounded" />
                </div>
            </template>
        </UCard>
    </USlideover>
</template>

<script setup>
import { useStore } from '../../store/store';
const store = useStore();
</script>

<style lang="scss">
@import './popup-slide.scss';
</style>

