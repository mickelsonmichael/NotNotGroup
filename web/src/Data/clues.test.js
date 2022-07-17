import clues from "./clues.json";

describe("clues data", () => {
    test("all anagrams unique", () => {
        const anagrams = clues["anagram"];
        const names = anagrams.map(a => a.text);

        anagrams.forEach(
            clue => expect(names.filter(n => n === clue.text).length).toBeGreaterThan(0)
        )
    });

    test("all coordinates unique", () => {
      const coordinates = clues["coordinate"];
      const names = coordinates.map((a) => a.text);

      coordinates.forEach((clue) =>
        expect(names.filter((n) => n === clue.text).length).toBeGreaterThan(0)
      );
    });
})