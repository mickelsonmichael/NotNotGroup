import mapSkills from "./MapSkills";

async function getScores() {
    const response = await fetch("http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=notnotmike");

    const hiscores = await response.text();

    return mapSkills(hiscores);
}

describe('mapping of skills', () => {
    test('all hiscore categories matched', async () => {
        const hiscores = await getScores();

        expect(hiscores.unmapped).toHaveLength(2);
    })
})