import { searchFilter } from "./searchFilter";

test("Returns unchanged array if seach is empty or array of elements which include the search term", () => {
  expect(searchFilter({ name: "Zahra" }, "Zah")).toBe(true);
  expect(searchFilter({ name: "Zahra" }, "Zahb")).toBe(false);
  expect(searchFilter({ name: "Ali" }, "")).toBe(true);
});
