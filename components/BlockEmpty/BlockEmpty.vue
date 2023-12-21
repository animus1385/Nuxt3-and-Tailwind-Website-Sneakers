<template>
    <section class="emty">
        <div class="empty__container">
            <UIcon class="emty__icon" name="i-heroicons-light-bulb" />
            <h1 class="emty__title">Закладок нет :(</h1>
            <p class="emty__sub-title">Вы ничего не добавляли в закладки</p>
            <UButton color="empty" variant="empty" label="Вернуться назад" icon="i-material-symbols-arrow-left-alt-rounded"/>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss">
@import './block-empty.scss';
</style>
