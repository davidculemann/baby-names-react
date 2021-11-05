interface IName {
  id: number;
  name: string;
  sex: string;
}

export function BabyNames(names: IName[]): JSX.Element {
  const Name = (baby: IName) => {
    baby.sex === "f" ? (
      <div className="f-name">{baby.name}</div>
    ) : (
      <div className="m-name">{baby.name}</div>
    );
  };

  return <div className="name-gallery">{names.map((baby) => Name(baby))}</div>;
}
