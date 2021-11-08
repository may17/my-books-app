<template>
  <section class="table-item">
    <h2 class="table-item__hl">{{ headline }}</h2>
    <table class="table-item__table">
      <thead>
        <tr>
          <th
            v-for="(name, index) in tableHead"
            :key="index"
            :class="`table-item__table-head-${name.toLowerCase()}`"
          >
            {{ name }}
          </th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="rowData in tableBody"
          :key="rowData.id"
          class="table-item__table-row"
        >
          <slot :rowData="rowData" />
          <td>
            <button
              :class="{
                'table-item__table-btn-remove': rowData.isBookmarked,
                'table-item__table-btn-add': !rowData.isBookmarked,
              }"
              @click="bookmarkChanged(rowData)"
            >
              <span v-if="rowData.isBookmarked"> - entfernen </span>
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
  emits: ["bookmark-changed"],
  props: {
    headline: {
      type: String,
      required: true,
    },
    tableHead: {
      type: Array,
      default: () => [],
    },
    tableBody: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    bookmarkChanged(rowData) {
      this.$emit("bookmark-changed", rowData.id);
    },
  },
};
</script>
