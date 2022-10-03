<template>
  <div id="app">
    <Header-bar />
    <cv-content id="#main-content"></cv-content>
    <cv-row>
      <data-table></data-table>
    </cv-row>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
import HeaderBar from "@/components/HeaderBar.vue";

export default {
  name: "App",
  components: {
    DataTable,
    HeaderBar,
  },
};
</script>

<style lang="scss">
@import "./styles/carbon";
</style>
