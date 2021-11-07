<template>
  <ItemTable
    headline="Meine Merkliste"
    :rowsData="bookmarks"
    @bookmark-changed="handleBookmarkChange"
  />
</template>

<script>
import AllBooksPage from "@/views/AllBooksPage.vue";

export default {
  name: "BookMarksPage",
  extends: AllBooksPage,
  computed: {
    bookmarks() {
      return this.books.filter((book) => book.isBookmarked);
    },
  },
};
</script>

