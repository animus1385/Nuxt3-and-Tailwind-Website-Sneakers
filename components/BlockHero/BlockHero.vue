<template>
    <div class="hero">
        <div class="hero__container">
            <carousel :items-to-show="1">
                <slide v-for="slide in 3" :key="slide">
                    <div class="carousel__item">
                        <NuxtImg class="carousel__item-img" src="/img/slider.png" />
                        <div class="carusel__info">
                            <h2 class="carusel__title"><span> Stan Smith,</span> <span>Forever</span> !</h2>
                            <button class="carusel__btn">Купить</button>
                        </div>
                    </div>
                </slide>

                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>

<style lang="scss">
@import './block-hero.scss';
</style>
