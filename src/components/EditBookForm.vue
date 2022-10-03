<template>
  <cv-form class="form_edit_book_class">
    <cv-dropdown
      :placeholder="'Select Status'"
      :label="'Status'"
      id="status"
      v-model="Book.status"
    >
      <cv-dropdown-item
        v-for="item in statusList"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      >
        {{ item.label }}
      </cv-dropdown-item>
    </cv-dropdown>
    <cv-text-input
      kind="single"
      :label="'Entrace Date'"
      :placeholder="'Entrace Date'"
      id="entraceDate"
      type="date"
      v-model="Book.entrace_date"
    />
    <cv-text-input
      kind="single"
      :label="'Conclusion Date'"
      :placeholder="'Conclusion Date'"
      :disabled="isDisabled"
      id="finishDate"
      type="date"
      v-model="Book.finish_date"
    />
    <cv-text-input
      id="Title"
      :label="'Title'"
      :placeholder="'Title'"
      type="text"
      v-model="Book.title"
    />
    <cv-text-input
      id="Author"
      :label="'Author'"
      :placeholder="'Author'"
      type="text"
      v-model="Book.author"
    />
    <cv-number-input
      :label="'Score'"
      :disabled="isDisabled"
      :step="0.5"
      :max="5"
      :min="0"
      id="score"
      placeholder="score"
      v-model="Book.score"
    />
    <cv-button kind="primary" class="px-5" @click="updateBook"
      >Update Book</cv-button
    >

    <cv-button kind="secondary" @click="triggerClose">Close</cv-button>
  </cv-form>
</template>

<script>
import axios from "axios";
export default {
  name: "EditBookModal",
  props: {
    BookId: String,
    status: String,
  },
  data() {
    return {
      Book: {
        status: "",
      },
      calOptions: {
        dateFormat: "d/m/Y",
      },
      itemsStatus: [
        { label: "Want to Read", value: "Want to Read" },
        { label: "Reading", value: "Reading" },
        { label: "Read", value: "Read" },
      ],
    };
  },
  computed: {
    statusList() {
      return this.itemsStatus;
    },
    isDisabled() {
      if (this.Book.status === "Read") {
        return false;
      }
      return true;
    },
  },
  methods: {
    triggerClose() {
      this.$emit("closeEditModal");
    },
    updateBook() {
      axios
        .patch(`http://localhost:3000/books/${this.BookId}`, this.Book)
        .then((response) => {
          console.log(response.data);
          this.$emit("closeEditModal");
          this.$emit("reloadDataTable");
          this.$emit("showSuccessAlert");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
select {
  height: 30px;
}
#entrace_date {
  width: 200px;
}
#finish_date {
  width: 200px;
}
</style>

<style lang="scss">
@import "./src/styles/carbon";
</style>
