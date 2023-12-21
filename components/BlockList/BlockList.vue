<template>
    <div class="list">
        <div class="list__container">
            <div class="list__head">
                <h2 class="list__title">{{ title }}</h2>
                <UInput
                    class="list__input"
                    v-model="value"
                    color="empty"
                    variant="empty"
                    placeholder="Поиск..."
                    icon="i-heroicons-magnifying-glass-20-solid"
                />
            </div>
            <ul class="list__list">
                <li class="list__elem" v-for="index in 10" :key="index">
                    <CardProduct />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const value = ref('');
const { title } = defineProps({
    title: String
})
</script>

<style lang="scss">
@import './blockList.scss';
</style>
