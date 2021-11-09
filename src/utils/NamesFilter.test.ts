import { NamesFilter } from "./NamesFilter";

test("Returns unchanged array if seach is empty or array of elements which include the search term", () => {
  expect(
    NamesFilter(
      [
        {
          id: 0,
          name: "Zahra",
          sex: "f",
        },
        {
          id: 1,
          name: "Parsa",
          sex: "m",
        },
        {
          id: 2,
          name: "Avah",
          sex: "f",
        },
      ],
      "ah"
    )
  ).toStrictEqual([
    {
      id: 0,
      name: "Zahra",
      sex: "f",
    },
    {
      id: 2,
      name: "Avah",
      sex: "f",
    },
  ]);
});
