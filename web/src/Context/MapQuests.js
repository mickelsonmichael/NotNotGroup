const MapQuests = (csv) => {
    const split = csv.split(/\r\n/ig);

    const headers = split[0].split(",");
    const data = split.slice(1).map(line => line.split(","));

    return data.map(questData => ({
        quest: questData[0],
        ...headers.slice(1).reduce((players, player, i) => ({
            ...players,
            [player]: questData[i+1] === "TRUE"
        }), {})
    }));
}

export default MapQuests;
