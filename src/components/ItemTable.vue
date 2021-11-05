<template>
  <section class="table-item">
    <h2 class="table-item__hl">{{ headline }}</h2>
    <table class="table-item__table">
      <thead>
        <tr>
          <th class="table-item__table-head-name">Name</th>
          <th class="table-item__table-head--isbn">ISBN</th>
          <th class="table-item__table-head--actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="rowData in rowsData"
          :key="rowData.id"
          class="table-item__table-row"
        >
          <td>{{ rowData.title }}</td>
          <td>{{ rowData.isbn }}</td>
          <td>
            <button
              :class="{
                'table-item__table-btn-remove': rowData.isBookmarked,
                'table-item__table-btn-add': !rowData.isBookmarked,
              }"
              @click="$emit('bookmarked-status-changed', rowData.id)"
            >
              <span v-if="rowData.isBookmarked">- entfernen</span>
              <span v-else>+ hinzufügen</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "ItemTable",
  props: {
    headline: {
      type: String,
      required: true,
    },
    rowsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
