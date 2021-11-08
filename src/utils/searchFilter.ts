interface IName {
  name: string;
}

export function searchFilter(babyname: IName, search: string): boolean {
  return (
    babyname.name.toLowerCase().includes(search.toLowerCase()) || search === ""
  );
}
