interface IName {
  id: number;
  name: string;
  sex: string;
}

export function Alphabetical(names: IName[]): IName[] {
  return names.sort((a, b) => a.name.localeCompare(b.name));
}

// export function Alphabetical(names: IName[]) {
//   function alphaSort(a: IName, b: IName) {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   }
//   return names.sort(alphaSort)
// }
