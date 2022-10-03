import { shallowMount } from "@vue/test-utils";
import EditBookForm from "../../src/components/EditBookForm";
import {
  CvNumberInput,
  CvTextInput,
  CvSelectOption,
  CvSelect,
  CvButton,
  CvForm,
} from "@carbon/vue";
let configMount;

describe("Unit Test for CreateBookForm", () => {
  configMount = {
    // Create a copy of the original component
    stubs: {
      CvNumberInput,
      CvTextInput,
      CvSelectOption,
      CvSelect,
      CvButton,
      CvForm,
    },
  };
  test("Should render Title text input", () => {
    const wrapper = shallowMount(EditBookForm, configMount);
    const Title = wrapper.find("#Title");
    expect(Title.exists()).toBe(true);
  });
  test("Should render author text input", () => {
    const wrapper = shallowMount(EditBookForm, configMount);
    const Author = wrapper.find("#Author");
    expect(Author.exists()).toBe(true);
  });
  test("Should render entrace Data input", () => {
    const wrapper = shallowMount(EditBookForm, configMount);
    const Entrace_date = wrapper.find("#entrace_date");
    expect(Entrace_date.exists()).toBe(true);
  });
  test("Should render status text input", () => {
    const wrapper = shallowMount(EditBookForm, configMount);
    const Status = wrapper.find("#status");
    expect(Status.exists()).toBe(true);
  });
  test("Should render end Data input", () => {
    const wrapper = shallowMount(EditBookForm, configMount);
    const Finish_date = wrapper.find("#finish_date");
    expect(Finish_date.exists()).toBe(true);
  });
  test("Should render score number input", () => {
    const wrapper = shallowMount(EditBookForm, configMount);
    const Score = wrapper.find("#score");
    expect(Score.exists()).toBe(true);
  });
});
