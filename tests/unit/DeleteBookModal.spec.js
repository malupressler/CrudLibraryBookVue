import { shallowMount } from "@vue/test-utils";
import DeleteBookModal from "../../src/components/DeleteBookModal";
import { CvButton } from "@carbon/vue";
let configMount;
describe("Unit Test for CreateBookForm", () => {
  configMount = {
    // Create a copy of the original component
    stubs: {
      CvButton,
    },
  };
  test("Should render delete button", () => {
    const wrapper = shallowMount(DeleteBookModal, configMount);
    const Title = wrapper.find("#deleteBook");
    expect(Title.exists()).toBe(true);
  });
  test("Should render close button", () => {
    const wrapper = shallowMount(DeleteBookModal, configMount);
    const Title = wrapper.find("#closeModalDeleteBook");
    expect(Title.exists()).toBe(true);
  });
});
