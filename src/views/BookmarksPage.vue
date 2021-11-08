<template>
  <ItemTable
    headline="Meine Merkliste"
    :tableHead="tableHead"
    :tableBody="bookmarks"
    @bookmark-changed="handleBookmarkChange"
  >
    <template v-slot:default="{ rowData }">
      <td>{{ rowData.title }}</td>
      <td>{{ rowData.isbn }}</td>
    </template>
  </ItemTable>
</template>

<script>
import AllBooksPage from "@/views/AllBooksPage.vue";

export default {
  name: "BookMarksPage",
  extends: AllBooksPage,
  data() {
    return {
      tableHead: ["Name", "ISBN"],
    };
  },
  computed: {
    bookmarks() {
      return this.books.filter((book) => book.isBookmarked);
    },
  },
};
</script>
