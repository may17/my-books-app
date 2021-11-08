<template>
  <ItemTable
    headline="Liste aller Bücher"
    :tableHead="tableHead"
    :tableBody="books"
    @bookmark-changed="handleBookmarkChange"
  >
    <template v-slot:default="{ rowData }">
      <td>{{ rowData.title }}</td>
      <td>{{ rowData.author }}</td>
      <td>{{ rowData.isbn }}</td>
      <td>{{ rowData.numPages }}</td>
    </template>
  </ItemTable>
</template>

<script>
import ItemTable from "@/components/ItemTable.vue";

export default {
  name: "AllBooksPage",
  data() {
    return {
      tableHead: ["Name", "Author", "ISBN", "Number of Pages"],
      books: [],
    };
  },
  components: {
    ItemTable,
  },
  methods: {
    async handleBookmarkChange(id) {
      /** find current book element */
      const index = this.books.findIndex((book) => book.id === id);

      /** try to update the book otherwise give the user a response that action was not successful */
      try {
        /** store the new book value. It's always the oposite boolean of the current state. */
        const newBookmarkedValue = !this.books[index].isBookmarked;

        /**
         * If you like to update some data you need to override the whole record.
         * First you should spread in an new shallow copy of this.books[index].
         * Afterwards you should add the properties with the new values.
         * They will merged together into a new object.
         */
        const data = {
          ...this.books[index],
          isBookmarked: newBookmarkedValue,
        };

        /**
         * Start a fetch with the put method.
         * Their exists noch UPDATE Method in http but PUT is one solution to handle that.
         * We need to address book we like to update.
         * Don't forget to send the body as serialized string,
         *
         */
        const response = await fetch(`http://localhost:3000/books/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(
            "An error occurred during communication with the api."
          );
        }

        /**
         * After a sucessful update of our record
         * we need to update our local state.
         *
         * We are done
         */
        this.books[index].isBookmarked = newBookmarkedValue;
      } catch {
        alert(
          "Es gab leider einen technischen Fehler und das Buch konnte nicht hinzugefügt werden."
        );
      }
    },
  },
  async created() {
    const response = await fetch("http://localhost:3000/books");
    const jsonData = await response.json();

    this.books = jsonData;
  },
};
</script>
