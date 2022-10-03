<template>
  <div>
    <div class="filter-card" @click="totalBooksIsActiveFilter">
      <h6 class="text-secondary">Total Books</h6>
      <strong id="totalbooksid">{{ totalBooks }}</strong>
    </div>
    <div class="filter-card" @click="activeBooksIsActiveFilter">
      <h6 class="text-secondary">Books that have been read</h6>
      <strong id="activebookid">{{ activeBooks }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookOverview",
  props: {
    totalBooks: Number,
    activeBooks: Number,
  },
  data() {
    return {
      totalIsActive: true,
      activeIsActive: false,
    };
  },
  methods: {
    totalBooksIsActiveFilter() {
      this.totalIsActive = true;
      this.activeIsActive = false;
      this.$emit("totalBooksIsActive");
    },
    activeBooksIsActiveFilter() {
      this.totalIsActive = false;
      this.activeIsActive = true;
      this.$emit("activeBookIsActive");
    },
  },
};
</script>

<style>
body {
  margin: 10px;
}
.filter-card {
  width: 200px;
  margin-left: 10px;
  display: inline-block;
}
.filter-card:hover {
  cursor: pointer;
  color: rgb(8, 3, 37);
}
</style>
<style lang="scss">
@import "./src/styles/carbon";
</style>
