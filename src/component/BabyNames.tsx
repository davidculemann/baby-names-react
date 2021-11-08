import { Alphabetical } from "../utils/Alphabetical";

interface IName {
  id: number;
  name: string;
  sex: string;
}

export function BabyNames(names: IName[]): JSX.Element {
  return (
    <div className="name-gallery">
      {Alphabetical(names).map((baby) =>
        baby.sex === "f" ? (
          <div className="f-name">{baby.name}</div>
        ) : (
          <div className="m-name">{baby.name}</div>
        )
      )}
    </div>
  );
}
