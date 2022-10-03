import { shallowMount } from "@vue/test-utils";
import BookOverview from "../../src/components/BookOverview";
let configMount;

describe("Unit Test for BookOverView", () => {
  configMount = {
    // Create a copy of the original component
    propsData: {
      totalBooks: 6,
      activeBooks: 4,
    },
  };
  test("If the totalbooks it is in the correct place, and getting the right result", () => {
    const wrapper = shallowMount(BookOverview, configMount);
    const byIdTotalBooks = wrapper.find("#totalbooksid");
    expect(byIdTotalBooks.html()).toBe(
      `<strong id="totalbooksid">${configMount.propsData.totalBooks}</strong>`
    );
  });
  test("To know if the filter activebooks is getting the right number of books that have been read", () => {
    const wrapper = shallowMount(BookOverview, configMount);
    const byIdActiveBooks = wrapper.find("#activebookid");
    expect(byIdActiveBooks.html()).toBe(
      `<strong id="activebookid">${configMount.propsData.activeBooks}</strong>`
    );
  });
});
