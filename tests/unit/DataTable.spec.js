//esta dando erro quando puxa aplicacao, sendo que aplicacao esta correndo normalmente
import { shallowMount } from "@vue/test-utils";
import DataTable from "../../src/components/DataTable";
import {
  CvButton,
  CvModal,
  CvDataTableCell,
  CvDataTable,
  CvDataTableRow,
  CvToastNotification,
} from "@carbon/vue";

let configMount;

describe("Unit Test for DataTable", () => {
  configMount = {
    stubs: {
      CvButton,
      CvModal,
      CvDataTableCell,
      CvDataTable,
      CvDataTableRow,
      CvToastNotification,
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
        items: [
          {
            _id: "61ddcfa652bf949f815082e9",
            title: "Reboot",
            author: "Any Tintera",
            entrace_date: "2022-01-06T00:00:00.000Z",
            status: "Reading",
            finish_date: "2022-01-04T00:00:00.000Z",
            score: 4,
            __v: 0,
          },
        ],
        BookId: "61ddcfa652bf949f815082e9",
      };
    },
  };
  test("Trigger the add book button", async () => {
    const wrapper = shallowMount(DataTable, configMount);
    const createbutton = wrapper.find("#show-btn");
    const spy = jest.spyOn(wrapper.vm, "showCreateModal");
    createbutton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
  test("Trigger the pencil icon button to edit", async () => {
    const wrapper = shallowMount(DataTable, configMount);
    const editbutton = wrapper.find("#edit-btn-icon");
    const spy = jest.spyOn(wrapper.vm, "getRowData");
    editbutton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
  test("Trigger the trash icon button to delete", async () => {
    const wrapper = shallowMount(DataTable, configMount);
    const deletebutton = wrapper.find("#delete-btn-icon");
    const spy = jest.spyOn(wrapper.vm, "showDeleteModal");
    deletebutton.trigger("click");
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});
