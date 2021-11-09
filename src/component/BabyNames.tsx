import { Alphabetical } from "../utils/Alphabetical";
import { NamesFilter } from "../utils/NamesFilter";
import { useState } from "react";

interface IName {
  id: number;
  name: string;
  sex: string;
}

export function BabyNames(names: IName[]): JSX.Element {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [favourites, setFavourites] = useState<IName[]>([]);
  const namesToShow: IName[] = NamesFilter(names, search)
    .filter((baby) => !favourites.includes(baby))
    .filter((baby) => baby.sex === gender || gender === "All");

  function handleSetFavourite(newFavourite: IName) {
    if (!favourites.includes(newFavourite)) {
      setFavourites([...favourites, newFavourite]);
    } else {
      setFavourites(
        favourites.filter((fave) => fave.name !== newFavourite.name)
      );
    }
  }

  function handleSetGender(newGender: string) {
    setGender(newGender);
  }

  return (
    <div className="baby-names">
      {/* Search bar */}
      <div className="search">
        <input
          className="input-bar"
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Buttons to filter for each gender */}
        &nbsp;
        <button className="gender-all" onClick={() => handleSetGender("All")}>
          ⚥
        </button>
        &nbsp;
        <button className="gender-female" onClick={() => handleSetGender("f")}>
          ♀
        </button>
        &nbsp;
        <button className="gender-male" onClick={() => handleSetGender("m")}>
          ♂️
        </button>
      </div>

      {/* List of favourites name selected by the user  */}
      <div className="favourites">
        Favourites:
        {Alphabetical(favourites).map((baby) =>
          baby.sex === "f" ? (
            <div className="f-name" onClick={() => handleSetFavourite(baby)}>
              {baby.name}
            </div>
          ) : (
            <div className="m-name" onClick={() => handleSetFavourite(baby)}>
              {baby.name}
            </div>
          )
        )}
      </div>
      <hr />

      {/* Names gallery */}
      <div className="name-gallery">
        {Alphabetical(namesToShow).map((baby) =>
          baby.sex === "f" ? (
            <div className="f-name" onClick={() => handleSetFavourite(baby)}>
              {baby.name}
            </div>
          ) : (
            <div className="m-name" onClick={() => handleSetFavourite(baby)}>
              {baby.name}
            </div>
          )
        )}
      </div>
      <hr />
    </div>
  );
}
