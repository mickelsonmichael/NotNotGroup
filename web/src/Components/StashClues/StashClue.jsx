import React, { useMemo } from "react";
import { useAccounts } from "../../Context/AccountContext";

import Clue from "../Clue";
import StashClueStatus from "./StashClueStatus";

const getTextList = (items) =>
  items.reduce(
    (result, item, i) =>
      i == 0
        ? item.match(/^[aeiou]/i)
          ? `Equip an ${item.toLowerCase()}`
          : `Equip a ${item.toLowerCase()}`
        : i === items.length - 1
        ? `${result}, and ${item.toLowerCase()}`
        : `${result}, ${item.toLowerCase()}`,
    ""
  );

const StashClue = ({ clue }) => {
  const { items, location } = clue;
  const { accounts } = useAccounts();

  const solution = useMemo(
    () => (
      <ul>
        {accounts.map((p) => (
          <li key={p.name}>
            <StashClueStatus player={p} clue={clue} />
          </li>
        ))}
      </ul>
    ),
    [items, accounts]
  );

  const text = useMemo(
    () => `${location} ${getTextList(items)}.`,
    [items, location]
  );

  return <Clue clueText={text} clueSolution={solution} />;
};

export default StashClue;
