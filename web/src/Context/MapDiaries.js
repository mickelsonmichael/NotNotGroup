import diaries from "@data/diaries";

const MapDiaries = (csv) => {
  const data = csv.split(/\r\n/gi).map((line) => line.split(","));

  const headers = data[0];
  const diaryStatus = data.slice(1).map((d) => ({
    description: d[2],
    ...headers
      .slice(3)
      .reduce(
        (userData, user, i) => ({ ...userData, [user]: d[i + 3] === "TRUE" }),
        {}
      ),
  }));

  return Object.keys(diaries).flatMap((regionName) =>
    Object.keys(diaries[regionName]).flatMap((difficultyName) =>
      diaries[regionName][difficultyName].map((task) => ({
        description: task.description,
        players: diaryStatus
          .filter((d) => d.description === task.description)
          .flatMap((d) =>
            Object.keys(d).reduce(
              (players, key) =>
                key != "description" && d[key] ? [...players, key] : players,
              []
            )
          ),
      }))
    )
  );
};

export default MapDiaries;
