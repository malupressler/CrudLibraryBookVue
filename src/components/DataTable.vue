<template>
  <div id="table">
    <cv-toast-notification
      v-if="showSuccessAlert"
      kind="success"
      :title="alertMessage"
      :hide-close-button="true"
    >
      {{ alertMessage }}
    </cv-toast-notification>
    <Book-overview
      :totalBooks="numberOfBooks"
      :activeBooks="activeBooks"
      @totalBookIsActive="setFilterTotalIsActive"
      @activeBookIsActive="setFilterActiveIsActive"
    />

    <h3>{{ tableHeader }}</h3>
    <cv-button id="show-btn" @click="showCreateModal()">
      <Add32 class="text-white" />
      New Book
    </cv-button>
    <cv-data-table striped hover :columns="fields" class="text-center">
      <template slot="data">
        <cv-data-table-row
          v-for="(row, rowIndex) in items"
          :key="`${rowIndex}`"
          :value="`${rowIndex}`"
        >
          <cv-data-table-cell>{{ row.title }}</cv-data-table-cell>
          <cv-data-table-cell>{{ row.author }}</cv-data-table-cell>
          <cv-data-table-cell>
            {{ Datestyle(row.entrace_date) }}
          </cv-data-table-cell>
          <cv-data-table-cell>{{ row.status }}</cv-data-table-cell>
          <cv-data-table-cell>
            {{ Datestyle(row.finish_date) }}
          </cv-data-table-cell>
          <cv-data-table-cell>{{ row.score }}</cv-data-table-cell>
          <cv-data-table-cell>
            <Edit32
              class="action-item"
              id="edit-btn-icon"
              @click="getRowData(row._id)"
            />
            <TrashCan32
              class="action-item"
              id="delete-btn-icon"
              @click="showDeleteModal(row._id)"
            />
          </cv-data-table-cell>
        </cv-data-table-row>
      </template>
    </cv-data-table>

    <!-- Modal for adding new Books -->
    <cv-modal ref="create-Book-modal" size="xl" hide-footer title="New Book">
      <template slot="content">
        <CreateBookForm
          @closeCreateModal="closeCreateModal"
          @reloadDataTable="getBookData"
          @showSuccessAlert="showAlertCreate"
        />
      </template>
    </cv-modal>

    <!-- Modal for updating Books -->
    <cv-modal ref="editBookModal" size="xl" hide-footer title="Edit Book">
      <template slot="content">
        <edit-Book-form
          @closeEditModal="closeEditModal"
          @reloadDataTable="getBookData"
          @showSuccessAlert="showAlertUpdate"
          :BookId="BookId"
        ></edit-Book-form>
      </template>
    </cv-modal>

    <!-- Delete Book Modal -->
    <cv-modal ref="deleteBookModal">
      <template slot="title"> Confirmation Delete </template>
      <template slot="content">
        <delete-Book-modal
          @closeDeleteModal="closeDeleteModal"
          @reloadDataTable="getBookData"
          @showDeleteAlert="showDeleteSuccessModal"
          :BookId="BookId"
        />
      </template>
    </cv-modal>
  </div>
</template>

<script>
import axios from "axios";
import BookOverview from "@/components/BookOverview.vue";
import CreateBookForm from "@/components/CreateBookForm.vue";
import EditBookForm from "@/components/EditBookForm.vue";
import DeleteBookModal from "@/components/DeleteBookModal.vue";
import { TrashCan32, Edit32, Add32 } from "@carbon/icons-vue";
export default {
  components: {
    BookOverview,
    CreateBookForm,
    EditBookForm,
    DeleteBookModal,
    TrashCan32,
    Edit32,

    Add32,
  },
  data() {
    return {
      fields: [
        "Title",
        "Author",
        "Entrace Date",
        "Status",
        "End Date",
        "Score",
        "Actions",
      ],
      items: [],
      numberOfBooks: 0,
      activeBooks: 0,
      activeBooksData: [],
      BookId: "",
      tituloSearchTerm: "",
      tableHeader: "",
      showSuccessAlert: false,
      alertMessage: "",
    };
  },
  mounted() {
    this.getBookData();
  },
  methods: {
    showCreateModal() {
      this.$refs["create-Book-modal"].show();
    },
    closeCreateModal() {
      this.$refs["create-Book-modal"].hide();
    },
    getBookData() {
      axios
        .get("http://localhost:3000/books", this.Book)
        .then((response) => {
          this.tableHeader = "Total Book";
          this.items = response.data;
          this.numberOfBooks = response.data.length;
          this.activeBooksData = response.data.filter(
            (item) => item.status === "Read"
          );
          this.activeBooks = this.activeBooksData.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRowData(id) {
      this.$refs["editBookModal"].show();
      this.BookId = id;
    },
    closeEditModal() {
      this.$refs["editBookModal"].hide();
    },
    setFilterTotalIsActive() {
      this.tableHeader = "Total Books";
      this.getBookData();
    },
    setFilterActiveIsActive() {
      this.tableHeader = "Books that have been read";
      this.items = this.activeBooksData;
    },
    showAlertCreate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Book was created successfully!";
    },
    showAlertUpdate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Book was updated successfully";
    },
    showDeleteSuccessModal() {
      this.showSuccessAlert = true;
      this.alertMessage = "Book was deleted successfully!";
    },
    showDeleteModal(id) {
      this.$refs["deleteBookModal"].show();
      this.BookId = id;
    },
    closeDeleteModal() {
      this.$refs["deleteBookModal"].hide();
    },
    Datestyle(date) {
      {
        if (date == null) {
          return "";
        } else {
          var strArray = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          var datatranform = new Date(date);
          var d = datatranform.getDate() + 1;
          var m = strArray[datatranform.getMonth()];
          var y = datatranform.getFullYear();
          return "" + (d <= 9 ? "0" + d : d) + "-" + m + "-" + y;
        }
      }
    },
  },
};
</script>

<style>
.action-item:hover {
  cursor: pointer;
}
#table {
  width: 1300px;
  position: relative;
  left: 60px;
}
#show-btn {
  width: 160px;
}
</style>

<style lang="scss">
@import "./src/styles/carbon";
</style>
