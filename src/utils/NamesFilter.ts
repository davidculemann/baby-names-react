interface IName {
  id: number;
  name: string;
  sex: string;
}

export function NamesFilter(names: IName[], search: string): IName[] {
  function Contains(a: string, b: string) {
    return a && b && a.toLowerCase().includes(b.toLowerCase());
  }

  function SearchFilter(babyname: IName) {
    return !search || Contains(babyname.name, search);
  }

  return names.filter((babyname) => SearchFilter(babyname));
}
