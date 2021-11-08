<template>
  <h1>Details</h1>
  <p>{{ $route.params.id }}</p>
</template>

<script>
export default {
  created() {
    console.log(this);
  },
};
</script>