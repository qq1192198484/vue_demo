<template>
  <div>
    <router-view :key="$route.name+$route.query.searchName+$route.query.cid"/>
  </div>
</template>

<script>

</script>

<style>

</style>
