<template>
  <header class="header">
    <div class="header__container">
      <UButton to="/" class="header__logo" color="empty" variant="emty">
        <NuxtImg class="header__img" src="/img/logo.svg" />
        <p class="header__title">
          <span>REACT SNEAKERS</span>
          <span>Магазин лучших кроссовок</span>
        </p>
      </UButton>
      <div class="header__panel-btn">
        <UButton
          to="/cart"
          class="header__balace"
          color="empty"
          variant="empty"
          icon="i-material-symbols-shopping-cart-outline-rounded"
        >
          <span> 1025 руб.</span>
        </UButton>
        <UButton
          to="/favorite"
          class="header__bookmark"
          color="empty"
          variant="empty"
          icon="i-material-symbols-favorite-outline"
        >
          <span> Закладки</span>
        </UButton>
        <UButton
          to="/user"
          class="header__user"
          color="empty"
          variant="empty"
          icon="i-material-symbols-account-circle-full"
        >
          <span>Профиль</span>
        </UButton>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./header.scss";
</style>
