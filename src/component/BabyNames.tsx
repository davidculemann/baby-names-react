import { Alphabetical } from "../utils/Alphabetical";
import { NamesFilter } from "../utils/NamesFilter";
import { useState } from "react";
import { useSound } from "use-sound";

// Imported audio
import babySound from "../sounds/baby.mp3";
import select from "../sounds/select.wav";
import deselect from "../sounds/deselect.wav";

interface IName {
  id: number;
  name: string;
  sex: string;
}

export function BabyNames(names: IName[]): JSX.Element {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [favourites, setFavourites] = useState<IName[]>([]);
  const namesToShow: IName[] = NamesFilter(names, search)
    .filter((baby) => !favourites.includes(baby))
    .filter((baby) => baby.sex === gender || gender === "all");

  const [play] = useSound(babySound);
  const [deselectSound] = useSound(deselect);
  const [selectSound] = useSound(select);

  function handleSetFavourite(newFavourite: IName) {
    if (!favourites.includes(newFavourite)) {
      setFavourites([...favourites, newFavourite]);
      selectSound();
    } else {
      setFavourites(
        favourites.filter((fave) => fave.name !== newFavourite.name)
      );
      deselectSound();
    }
  }

  function handleSetGender(newGender: string) {
    setGender(newGender);
    play();
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
        {/* Buttons to filter for gender */}
        &nbsp;
        <button
          className={gender === "all" ? "gender-all-on" : "gender-all-off"}
          onClick={() => handleSetGender("all")}
        >
          ⚥
        </button>
        &nbsp;
        <button
          className={gender === "f" ? "gender-female-on" : "gender-female-off"}
          onClick={() => handleSetGender("f")}
        >
          ♀
        </button>
        &nbsp;
        <button
          className={gender === "m" ? "gender-male-on" : "gender-male-off"}
          onClick={() => handleSetGender("m")}
        >
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
