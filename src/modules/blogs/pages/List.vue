<template>
  <div>
    <p class="page-head">Blog List</p>
    {{ $t("guide") }}
    <div>
      {{ $t('title')}}
      <br/>
      {{ $t('description') }}
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.page-head {
  font-size: 16px;
  color: blue;
}
</style>
