import { shallowMount } from "@vue/test-utils";
import {
  CvNumberInput,
  CvTextInput,
  CvSelectOption,
  CvSelect,
  CvButton,
  CvForm,
} from "@carbon/vue";
let configMount;

import CreateBookModal from "../../src/components/CreateBookForm";

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
    const wrapper = shallowMount(CreateBookModal, configMount);
    const Title = wrapper.find("#Title");
    expect(Title.exists()).toBe(true);
  });
  test("Should render author text input", () => {
    const wrapper = shallowMount(CreateBookModal, configMount);
    const Author = wrapper.find("#Author");
    expect(Author.exists()).toBe(true);
  });
  test("Should render entrace Data input", () => {
    const wrapper = shallowMount(CreateBookModal, configMount);
    const Entrace_date = wrapper.find("#entraceDate");
    expect(Entrace_date.exists()).toBe(true);
  });
  test("Should render status text input", () => {
    const wrapper = shallowMount(CreateBookModal, configMount);
    const Status = wrapper.find("#status");
    expect(Status.exists()).toBe(true);
  });
  test("Should render Conclusion Data input", () => {
    const wrapper = shallowMount(CreateBookModal, configMount);
    const Finish_date = wrapper.find("#finishDate");
    expect(Finish_date.exists()).toBe(true);
  });
  test("Should render score number input", () => {
    const wrapper = shallowMount(CreateBookModal, configMount);
    const Score = wrapper.find("#score");
    expect(Score.exists()).toBe(true);
  });
});
