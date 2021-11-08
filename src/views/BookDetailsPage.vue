<template>
  <h1>{{ book.title }}</h1>
  <h2>{{ book.subtitle }}</h2>
  <p>{{ book }}</p>
</template>

<script>
export default {
  data() {
    return {
      book: [],
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:3000/books/" + this.$route.params.id
    );
    const jsonData = await response.json();

    this.book = jsonData;
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.2rem;
}
</style>