<template>
  <div>
    <p class="page-head">User Form</p>
    <p>
      {{ $t('name') }}
      <br/>
      {{ $t('dob') }}
    </p>
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
