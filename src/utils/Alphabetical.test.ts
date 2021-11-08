import { Alphabetical } from "./Alphabetical";

test("greet returns a string, greeting the passed name", () => {
  expect(
    Alphabetical([
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
      {
        id: 3,
        name: "Lala",
        sex: "f",
      },
    ])
  ).toStrictEqual([
    {
      id: 2,
      name: "Avah",
      sex: "f",
    },
    {
      id: 3,
      name: "Lala",
      sex: "f",
    },
    {
      id: 1,
      name: "Parsa",
      sex: "m",
    },
    {
      id: 0,
      name: "Zahra",
      sex: "f",
    },
  ]);
});
