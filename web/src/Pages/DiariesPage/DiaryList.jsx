import React from "react";

import diaries from "../../Data/diaries";
import FancyTable from "@common/FancyTable";
import { useAccounts } from "../../Context/AccountContext";
import DiaryStatusIcon from "../../Common/DiaryStatusIcon/DiaryStatusIcon";
import DiaryRequirements from "./DiaryRequirements";

const detailedDiaries = Object.keys(diaries).flatMap((regionName) =>
  Object.keys(diaries[regionName]).flatMap((diffName) =>
    diaries[regionName][diffName].map((task) => ({
      ...task,
      region: regionName,
      difficulty: diffName,
    }))
  )
);

const diaryStatusFor = (player) => (diary) =>
  <DiaryStatusIcon player={player} diary={diary} />;

const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

const filters = {
  Easy: (item) => item.difficulty.match(/easy/i),
  Medium: (item) => item.difficulty.match(/medium/i),
  Hard: (item) => item.difficulty.match(/hard/i),
  Elite: (item) => item.difficulty.match(/elite/i),
  ...Object.keys(diaries).reduce((regionFilters, regionName) => {
    const regex = new RegExp(regionName);
    const filter = (item) => item.region.match(regex, "i");
    return { ...regionFilters, [capitalize(regionName)]: filter };
  }, []),
};

const DiaryList = () => {
  const { notNotMike, notNotThomas } = useAccounts();

  const columns = [
    {
      header: "Task",
      cell: ({ description }, toggleBtn) => (
        <>
          <span style={{ marginRight: "0.2rem" }}>{description}</span>
          {toggleBtn}
        </>
      ),
    },
    {
      header: "Region",
      cell: "region",
    },
    {
      header: "Difficulty",
      cell: "difficulty",
    },
    {
      header: "NotNotMike",
      cell: diaryStatusFor(notNotMike),
      alignment: "center",
    },
    {
      header: "NotNotThomas",
      cell: diaryStatusFor(notNotThomas),
      alignment: "center",
    },
  ];

  const expandItem = (item) => (
    <DiaryRequirements task={item} players={[notNotMike, notNotThomas]} />
  );

  return (
    <FancyTable
      columns={columns}
      items={detailedDiaries}
      expandItem={expandItem}
      filters={filters}
    />
  );
};

export default DiaryList;
