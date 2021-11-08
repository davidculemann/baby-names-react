import { Alphabetical } from "../utils/Alphabetical";
import { searchFilter } from "../utils/searchFilter";
import { useState } from "react";

interface IName {
  id: number;
  name: string;
  sex: string;
}

export function BabyNames(names: IName[]): JSX.Element {
  const [search, setSearch] = useState("");
  const namesToShow = names.filter((babyname) =>
    searchFilter(babyname, search)
  );

  return (
    <div className="baby-names">
      {/* Search bar */}
      <div className="search-bar">
        <input
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <hr />

      {/* Names gallery */}
      <div className="name-gallery">
        {Alphabetical(namesToShow).map((baby) =>
          baby.sex === "f" ? (
            <div className="f-name">{baby.name}</div>
          ) : (
            <div className="m-name">{baby.name}</div>
          )
        )}
      </div>
    </div>
  );
}

// function AlphabeticalSort(names: IName[]) {
//   return (
//     <div>
//       {names.map((baby) =>
//         baby.sex === "f" ?
//           (<div className="f-name">{baby.name}</div>)
//           :
//           (<div className="m-name">{baby.name}</div>)
//       )}
//     </div>
//   )
// }
