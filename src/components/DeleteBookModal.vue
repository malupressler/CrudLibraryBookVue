<template>
  <div>
    <h6 class="text-secondary">
      Are you sure you want to delete this Book from your CRUD?
    </h6>

    <p class="text-danger">
      This action is not reversible and may result in the loss if important
      data.
    </p>

    <cv-button id="deleteBook" kind="danger" @click="removeBookFromData"
      >Delete Book</cv-button
    >

    <cv-button id="closeModalDeleteBook" kind="secondary" @click="triggerClose"
      >Close</cv-button
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeleteBookModal",
  props: {
    BookId: String,
  },
  methods: {
    triggerClose() {
      this.$emit("closeDeleteModal");
    },
    removeBookFromData() {
      console.log(this.BookId);
      axios
        .delete(`http://localhost:3000/books/${this.BookId}`, this.Book)
        .then(() => {
          this.$emit("reloadDataTable");
          this.$emit("showDeleteAlert");
          this.$emit("closeDeleteModal");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "./src/styles/carbon";
</style>
