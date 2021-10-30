
const splitSkill = (skillStr) => {
    const [rank, level, experience] = skillStr.split(",");

    return {
        rank,
        level,
        experience
    }
}

export default (skillStr) => {
    const [
        Overall,
        Attack,
        Defence,
        Strength,
        Hitpoints,
        Ranged,
        Prayer,
        Magic,
        Cooking,
        Woodcutting,
        Fletching,
        Fishing,
        Firemaking,
        Crafting,
        Smithing,
        Mining,
        Herblore,
        Agility,
        Thieving,
        Slayer,
        Farming,
        Runecrafting,
        Hunter,
        Construction,
        LeaguePoints,
		BountyHunterHunter,
		BountyHunterRogue,
		ClueScrollsall,
		ClueScrollsbeginner,
		ClueScrollseasy,
		ClueScrollsmedium,
		ClueScrollshard,
		ClueScrollselite,
		ClueScrollsmaster,
		LMSRank,
		SoulWarsZeal,
		AbyssalSire,
		AlchemicalHydra,
		BarrowsChests,
		Bryophyta,
		Callisto,
		Cerberus,
		ChambersofXeric,
		ChambersofXericChallengeMode,
		ChaosElemental,
		ChaosFanatic,
		CommanderZilyana,
		CorporealBeast,
		CrazyArchaeologist,
		DagannothPrime,
		DagannothRex,
		DagannothSupreme,
		DerangedArchaeologist,
		GeneralGraardor,
		GiantMole,
		GrotesqueGuardians,
		Hespori,
		KalphiteQueen,
		KingBlackDragon,
		Kraken,
		KreeArra,
		KrilTsutsaroth,
		Mimic,
		Nightmare,
		PhosanisNightmare,
		Obor,
		Sarachnis,
		Scorpia,
		Skotizo,
		Tempoross,
		TheGauntlet,
		TheCorruptedGauntlet,
		TheatreofBlood,
		TheatreofBloodHardMode,
		ThermonuclearSmokeDevil,
		TzKalZuk,
		TzTokJad,
		Venenatis,
		Vetion,
		Vorkath,
		Wintertodt,
		Zalcano,
		Zulrah,
		] = skillStr.split("\n").map(skillStr => splitSkill(skillStr));

        return {
            Overall,
            Attack,
            Defence,
            Strength,
            Hitpoints,
            Ranged,
            Prayer,
            Magic,
            Cooking,
            Woodcutting,
            Fletching,
            Fishing,
            Firemaking,
            Crafting,
            Smithing,
            Mining,
            Herblore,
            Agility,
            Thieving,
            Slayer,
            Farming,
            Runecrafting,
            Hunter,
            Construction,
            Wintertodt,
        }
};
