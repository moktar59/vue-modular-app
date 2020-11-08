<template>
  <div class="hello">
    {{ msg }}

    <h3>
      If you have not yet created account,
      <router-link :to="{ name: 'user_register' }">register here.</router-link>
      <br/>OR <br/>
      <router-link :to="{ name: 'user_login' }">login</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
