import quests from "./questData.json";

const allQuests = quests.quests.map((q) => q.name);

const diaries = {
  ardougne: {
    easy: [
      {
        description:
          "Have Wizard Cromperty teleport you to the Rune Essence mine",
        skills: {},
        quests: ["Rune Mysteries"],
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description: "Steal a cake from the Ardougne market stalls",
        quests: [],
        skills: {
          Thieving: 5,
        },
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description:
          "Sell silk to the Silk trader in East Ardougne for 60 coins each",
        quests: [],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description: "Use the altar in East Ardougne's church",
        quests: [],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description: "Go out fishing on the Fishing Trawler",
        quests: [],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description: "Enter the Combat Training Camp north of West Ardougne",
        quests: ["Biohazard"],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description: "Have Tindel Marchant identify a rusty sword for you",
        quests: [],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description: "Use the Ardougne lever to teleport to the wilderness",
        quests: [],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description: "View Aleck's Hunter Emporium in Yanille",
        quests: [],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
      {
        description:
          "Check what pets you have insured with Probita in East Ardougne",
        quests: [],
        skills: {},
        players: ["NotNotThomas", "NotNotMike"],
      },
    ],
    medium: [
      {
        description: "Enter the unicorn pen in Ardougne Zoo using Fairy rings",
        quests: ["Fairytale I - Growing Pains"],
        skills: {},
        players: [],
      },
      {
        description: "Grapple over Yanille's south wall and jump off",
        quests: [],
        skills: {
          Agility: 39,
          Strength: 38,
          Ranged: 21,
        },
        players: [],
      },
      {
        description:
          "Harvest some strawberries form the Ardougne farming patch",
        quests: [],
        skills: {
          Farming: 31,
        },
        players: [],
      },
      {
        description: "Cast the Ardougne Teleport spell",
        quests: ["Plague City"],
        skills: {
          Magic: 51,
        },
        players: [],
      },
      {
        description: "Travel to Castle Wars by Hot Air Balloon",
        quests: ["Enlightened Journey"],
        skills: {
          Firemaking: 50,
        },
        players: [],
      },
      {
        description: "Claim buckets of sand from Bert in Yanille",
        quests: ["The Hand in the Sand"],
        skills: {},
        players: [],
      },
      {
        description: "Catch any fish on the Fishing Platform",
        quests: ["Sea Slug"],
        skills: {},
        players: [],
      },
      {
        description: "Pickpocket the master farmer north of East Ardougne",
        quests: [],
        skills: {
          Thieving: 38,
        },
        players: [],
      },
      {
        description: "Collect some cave nightshade from the Skavid caves",
        quests: ["Watchtower"],
        skills: {},
        players: [],
      },
      {
        description: "Kill a swordchick in the Tower of Life",
        quests: ["Tower of Life"],
        skills: {},
        players: [],
      },
      {
        description:
          "Equip an Iban's upgraded staff or upgrade an Iban's staff",
        quests: ["Underground Pass"],
        skills: {},
        players: [],
      },
      {
        description: "Visit the island east of the Necromancer Tower",
        quests: ["Fairytale I - Growing Pains"],
        skills: {},
        players: [],
      },
    ],
    hard: [
      {
        description:
          "Recharge some jewelry at the Totem pole in the Legends' Guild",
        quests: ["Legends' Quest"],
        skills: {},
        players: [],
      },
      {
        description: "Enter the Magic Guild",
        quests: [],
        skills: {
          Magic: 66,
        },
        players: [],
      },
      {
        description: "Attempt to steal from a chest in Ardougne Castle",
        quests: [],
        skills: {
          Thieving: 72,
        },
        players: [],
      },
      {
        description:
          "Have a zookeeper put you in the Ardougne Zoo's monkey cage",
        quests: ["Monkey Madness I"],
        skills: {},
        players: [],
      },
      {
        description: "Teleport to the Watchtower",
        quests: ["Watchtower"],
        skills: {
          Magic: 58,
        },
        players: [],
      },
      {
        description: "Catch a Red Salamander",
        quests: [],
        skills: {
          Hunter: 59,
        },
        players: [],
      },
      {
        description: "Check the health of a palm tree near Tree Gnome Village",
        quests: [],
        skills: {
          Farming: 68,
        },
        players: [],
      },
      {
        description:
          "Pick some poison ivy berries form the patch south of East Ardougne",
        quests: [],
        skills: {
          Farming: 70,
        },
        players: [],
      },
      {
        description: "Smith a Mithril platebody near Ardougne",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Enter your POH from Yanille",
        quests: [],
        skills: {
          Construction: 50,
        },
        players: [],
      },
      {
        description: "Smith a Dragon sq. shield in West Ardougne",
        quests: [],
        skills: {
          Smithing: 60,
        },
        players: [],
      },
      {
        description: "Craft some death runes from essence",
        quests: ["Mourning's End Part II"],
        skills: {
          Runecraft: 65,
        },
        players: [],
      },
    ],
    elite: [
      {
        description:
          "Catch a manta ray in the Fishing Trawler and cook it in Port Khazard",
        quests: [],
        skills: {
          Fishing: 81,
          Cooking: 91,
        },
        players: [],
      },
      {
        description:
          "Attempt to pickpocket the door to the basement of Yanille Agility dungeon",
        quests: [],
        skills: {
          Thieving: 80,
        },
        players: [],
      },
      {
        description: "Pickpocket a hero",
        quests: [],
        skills: {
          Thieving: 80,
        },
        players: [],
      },
      {
        description:
          "Make a rune crossbow yourself from scratch within Witchhaven or Yanille",
        quests: [],
        skills: {
          Crafting: 10,
          Smithing: 91,
          Fletching: 69,
        },
        players: [],
      },
      {
        description:
          "Imbue a salve amulet at Nightmare Zone or equip a salve amulet(i)",
        quests: ["Haunted Mine"],
        skills: {},
        players: [],
      },
      {
        description: "Pick some torstol from the patch nor of East Ardougne",
        quests: [],
        skills: {
          Farming: 85,
        },
        players: [],
      },
      {
        description: "Complete a lap of Ardougne's rooftop agility course",
        quests: [],
        skills: {
          Agility: 90,
        },
        players: [],
      },
      {
        description: "Cast Ice Barrage on another player within Castle Wars",
        quests: ["Desert Treasure"],
        skills: {
          Magic: 94,
        },
        players: [],
      },
    ],
  },
  desert: {
    easy: [
      {
        description: "Catch a golden warbler",
        quests: [],
        skills: {
          Hunter: 5,
        },
        players: [],
      },
      {
        description: "Mine five clay in the north-eastern desert",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Enter the Kalphite Hive",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Enter the Desert with a set of desert robes equipped",
        quests: [],
        skills: {},
        players: ["NotNotMike"],
      },
      {
        description: "Kill a vulture",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Have the Nardah herbalist clean an herb for you",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Collect 5 potato cacti from the Kalphite Hive",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Sell some artefacts to Simon Templeton",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description:
          "Open the sarcophagus in the first room of Pyramid Plunder",
        quests: ["Icthlarin's Little Helper"],
        skills: {
          Thieving: 21,
        },
        players: [],
      },
      {
        description: "Cut a desert cactus open to fill a waterskin",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Travel from Shantay pass to Pollnivneach by magic carpet",
        quests: [],
        skills: {},
        players: ["NotNotMike"],
      },
    ],
    medium: [
      {
        description: "Climb to the summit of the Agility Pyramid",
        quests: [],
        skills: {
          Agility: 30,
        },
        players: ["NotNotMike"],
      },
      {
        description: "Slay a desert lizard",
        quests: [],
        skills: {
          Slayer: 22,
        },
        players: [],
      },
      {
        description: "Catch an orange salamander",
        quests: [],
        skills: {
          Hunter: 47,
        },
        players: [],
      },
      {
        description: "Steal a Phoenix feather from the Desert phoenix",
        quests: [],
        skills: {
          Thieving: 25,
        },
        players: [],
      },
      {
        description: "Travel to Uzer via magic carpet",
        quests: ["The Golem"],
        skills: {},
        players: [],
      },
      {
        description: "Travel to the desert via the Eagle transport system",
        quests: ["Eagles' Peak"],
        skills: {},
        players: [],
      },
      {
        description: "Pray at the Elidinis Statuette in Nardah",
        quests: ["Spirits of the Elid"],
        skills: {},
        players: [],
      },
      {
        description: "Create a combat potion in the desert",
        quests: [],
        skills: {
          Herblore: 36,
        },
        players: [],
      },
      {
        description: "Teleport to Enakhra's Temple with the Camulet",
        quests: ["Enakhra's Lament"],
        skills: {},
        players: [],
      },
      {
        description: "Visit the genie",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description:
          "Teleport to Pollnivneach with a redirected teleport to house tablet",
        quests: [],
        skills: {
          Construction: 20,
        },
        players: [],
      },
      {
        description: "Chop some teak logs near Uzer",
        quests: [],
        skills: {
          Woodcutting: 35,
        },
        players: [],
      },
    ],
    hard: [
      {
        description: "Knock out and pickpocket a Menaphite Thug",
        quests: ["The Feud"],
        skills: {
          Thieving: 65,
        },
        players: [],
      },
      {
        description: "Mine some granite",
        quests: [],
        skills: {
          Mining: 45,
        },
        players: [],
      },
      {
        description: "Refill your waterskins in the Desert using Lunar spells",
        quests: ["Dream Mentor"],
        skills: {
          Magic: 68,
        },
        players: [],
      },
      {
        description: "Kill the Kalphite Queen",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Complete a lap of the Pollnivneach Rooftop Course",
        quests: [],
        skills: {
          Agility: 70,
        },
        players: [],
      },
      {
        description:
          "Slay a Dust devil in the desert cave with a Slayer helmet equipped",
        quests: ["Desert Treasure"],
        skills: {
          Slayer: 65,
          Defence: 10,
        },
        players: [],
      },
      {
        description:
          "Activate Ancient Magicks at the altar in the Jaldraocht Pyramid",
        quests: ["Desert Treasure"],
        skills: {},
        players: [],
      },
      {
        description: "Defeat a locust rider or scarab mage with Keris",
        quests: ["Contact!"],
        skills: {
          Attack: 50,
        },
        players: [],
      },
      {
        description: "Burn some yew logs on the Nardah Mayor's balcony",
        quests: [],
        skills: {
          Firemaking: 60,
        },
        players: [],
      },
      {
        description: "Create a Mithril platebody in Nardah",
        quests: [],
        skills: {
          Smithing: 68,
        },
        players: [],
      },
    ],
    elite: [
      {
        description: "Bake a wild pie at the Nardah clay oven",
        quests: [],
        skills: {
          Cooking: 85,
        },
        players: [],
      },
      {
        description: "Cast Ice Barrage against a foe in the Desert",
        quests: ["Desert Treasure"],
        skills: {
          Magic: 94,
        },
        players: [],
      },
      {
        description: "Fletch some Dragon darts at the Bedabin Camp",
        quests: ["The Tourist Trap"],
        skills: {
          Fletching: 95,
        },
        players: [],
      },
      {
        description: "Speak to the Kq head in your POH",
        quests: ["Priest in Peril"],
        skills: {
          Construction: 78,
        },
        players: [],
      },
      {
        description:
          "Steal from the Grand Gold Chest in the final room of Pyramid Plunder",
        quests: ["Icthlarin's Little Helper"],
        skills: {
          Thieving: 91,
        },
        players: [],
      },
      {
        description:
          "Restore at least 85 Prayer points when praying at the altar in Sophanem",
        quests: ["Icthlarin's Little Helper"],
        skills: {
          Prayer: 85,
        },
        players: [],
      },
    ],
  },
  falador: {
    easy: [
      {
        description: "Find out what your family crest is from Sir Renitee",
        quests: [],
        skills: {
          Construction: 16,
        },
        players: [],
      },
      {
        description: "Climb over the western Falador wall",
        quests: [],
        skills: {
          Agility: 5,
        },
        players: [],
      },
      {
        description: "Browse Sarah's Farming Shop",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Get a haircut from the Falador hairdresser",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Fill a bucket from the pump north of Falador west Bank",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Kill a duck in Falador Park",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Make a mind tiara",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Take the boat to Entrana",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Repair a broken strut in the Motherlode Mine",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description:
          "Claim a security book form the Security Guard upstairs at Port Sarim jail",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Smith some Blurite limbs on Doric's anvil",
        quests: ["The Knight's Sword", "Doric's Quest"],
        skills: {
          Mining: 10,
          Smithing: 13,
        },
        players: [],
      },
    ],
    medium: [
      {
        description: "Light a bullseye lantern at the Chemist's in Rimmington",
        quests: [],
        skills: {
          Firemaking: 49,
        },
        players: [],
      },
      {
        description:
          "Telegrab some Wine of Zamorak at the Chaos Temple just outside the Wilderness",
        quests: [],
        skills: {
          Magic: 33,
        },
        players: [],
      },
      {
        description: "Unlock the crystal chest in Taverley",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Place a Scarecrow in the Falador farm flower patch",
        quests: [],
        skills: {
          Farming: 47,
        },
        players: [],
      },
      {
        description: "Kill a Mogre at Mudskipper Point",
        quests: [],
        skills: {
          Slayer: 32,
        },
        players: [],
      },
      {
        description: "Visit the Port Sarim Rat Pits",
        quests: ["Ratcatchers"],
        skills: {},
        players: [],
      },
      {
        description: "Grapple up and then jump off the north Falador wall",
        quests: [],
        skills: {
          Agility: 11,
          Strength: 37,
          Ranged: 19,
        },
        players: [],
      },
      {
        description: "Pickpocket a Falador guard",
        quests: [],
        skills: {
          Thieving: 40,
        },
        players: [],
      },
      {
        description:
          "Pray at the Altar of Guthix in Taverley whilst wearing full Initiate armour",
        quests: ["Recruitment Drive"],
        skills: {
          Prayer: 10,
          Defence: 20,
        },
        players: [],
      },
      {
        description: "Mine some gold ore at the Crafting Guild",
        quests: [],
        skills: {
          Crafting: 40,
          Mining: 40,
        },
        players: [],
      },
      {
        description: "Squeeze through the crevice in the Dwarven Mines",
        quests: [],
        skills: {
          Agility: 42,
        },
        players: [],
      },
      {
        description: "Chop and burn some willow logs in Taverley",
        quests: [],
        skills: {
          Woodcutting: 30,
          Firemaking: 30,
        },
        players: [],
      },
      {
        description: "Craft a basket on the Falador farm loom",
        quests: [],
        skills: {
          Crafting: 36,
          Farming: 30,
        },
        players: [],
      },
      {
        description: "Teleport to Falador",
        quests: [],
        skills: {
          Magic: 37,
        },
        players: [],
      },
    ],
    hard: [
      {
        description: "Craft 140 mind runes simultaneously from essence",
        quests: [],
        skills: {
          Runecraft: 56,
        },
        players: [],
      },
      {
        description: "Change your family crest to the Saradomin symbol",
        quests: [],
        skills: {
          Prayer: 70,
        },
        players: [],
      },
      {
        description: "Kill the Giant Mole beneath Falador Park",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Kill a Skeletal Wyvern in the Asgarnia Ice Dungeon",
        quests: [],
        skills: {
          Slayer: 72,
        },
        players: [],
      },
      {
        description: "Complete a lap of the Falador Rooftop Agility Course",
        quests: [],
        skills: {
          Agility: 50,
        },
        players: [],
      },
      {
        description: "Enter the Mining Guild wearing full Prospector",
        quests: [],
        skills: {
          Mining: 60,
        },
        players: [],
      },
      {
        description: "Kill the blue dragon under the Heroes' Guild",
        quests: ["Heroes' Quest"],
        skills: {},
        players: [],
      },
      {
        description: "Crack a wall safe within Rouges' Den",
        quests: [],
        skills: {
          Thieving: 50,
        },
        players: [],
      },
      {
        description:
          "Recharge your Prayer in the Port Sarim church while wearing full Proselyte",
        quests: ["The Slug Menace"],
        skills: {
          Defence: 30,
        },
        players: [],
      },
      {
        description: "Enter the Warriors' Guild",
        quests: [],
        skills: {},
        players: [],
        test: ({ skills }) => ({
          isMet:
            skills != null &&
            skills.length > 0 &&
            (skills["Strength"].level + skills["Attack"].level > 130 ||
              skills["Strength"].level >= 99 ||
              skills["Attack"].level >= 99),
          description:
            "Combined attack and strength level greater than 130 or 99 in either skill",
        }),
      },
      {
        description: "Equip a Dwarven helmet within the Dwarven Mines",
        quests: ["Grim Tales"],
        skills: {
          Defence: 50,
        },
        players: [],
      },
    ],
    elite: [
      {
        description: "Craft 252 air runes simultaneously from essence",
        quests: [],
        skills: {
          Runecraft: 88,
        },
        players: [],
      },
      {
        description: "Purchase a white 2h sword from Sir Vyvin",
        quests: ["Wanted!"],
        skills: {},
        players: [],
      },
      {
        description:
          "Find at least 3 magic roots at once when digging up your magic tree in Falador",
        quests: [],
        skills: {
          Farming: 91,
          Woodcutting: 75,
        },
        players: [],
      },
      {
        description:
          "Perform a Skillcape or Quest cape emote at the top of Falador Castle",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Jump over the strange floor in Taverley Dungeon",
        quests: [],
        skills: {
          Agility: 80,
        },
        players: [],
      },
      {
        description: "Mix a Saradomin brew in Falador East Bank",
        quests: [],
        skills: {
          Herblore: 81,
        },
        players: [],
      },
    ],
  },
  fremennik: {
    easy: [
      {
        description: "Catch a cerulean twitch",
        quests: [],
        skills: { Hunter: 11 },
        players: [],
      },
      {
        description: "Change your boots at Yrsa's Shoe Store",
        quests: ["The Fremennik Trials"],
        skills: {},
        players: [],
      },
      {
        description: "Kill 5 Rock Crabs",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Craft a tiara from scratch in Rellekka",
        quests: [],
        skills: { Crafting: 23, Mining: 20, Smithing: 20 },
        players: [],
      },
      {
        description: "Browse the Stonemason's shop",
        quests: ["The Giant Dwarf"],
        skills: {},
        players: [],
      },
      {
        description: "Collect 5 snape grass on Waterbirth Island",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Steal from the Keldagrim crafting or baker's stall",
        quests: ["The Giant Dwarf"],
        skills: { Thieving: 5 },
        players: [],
      },
      {
        description: "Fill a bucket with water at the Rellekka well",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Enter the Troll Stronghold",
        quests: ["Death Plateau", "Troll Stronghold"],
        skills: {},
        players: [],
      },
      {
        description: "Chop and burn some oak logs in the Fremennik Province",
        quests: [],
        skills: { Woodcutting: 15, Firemaking: 15 },
        players: [],
      },
    ],
    medium: [
      {
        description: "Slay a brine rat",
        quests: ["Olaf's Quest"],
        skills: { Slayer: 47 },
        players: [],
      },
      {
        description:
          "Travel to the Snowy Hunter Area via the Eagle transport system",
        quests: ["Eagles' Peak"],
        skills: {},
        players: [],
      },
      {
        description: "Mine some coal in Rellekka",
        quests: ["The Fremennik Trials"],
        skills: { Mining: 30 },
        players: [],
      },
      {
        description: "Steal from the Rellekka fish stalls",
        quests: ["The Fremennik Trials"],
        skills: { Thieving: 42 },
        players: [],
      },
      {
        description: "Travel to Miscellania by fairy ring",
        quests: ["The Fremennik Trials"],
        skills: {},
        players: [],
      },
      {
        description: "Catch a Snowy knight",
        quests: [],
        skills: { Hunter: 35 },
        players: [],
      },
      {
        description: "Pick up your pet rock from you POH menagerie",
        quests: ["The Fremennik Trials"],
        skills: { Construction: 37 },
        players: [],
      },
      {
        description: "Visit the Lighthouse from Waterbirth Island",
        quests: ["Horror from the Deep", "The Fremennik Trials"],
        skills: {},
        players: [],
      },
      {
        description: "Mine some gold at the Arzinian Mine",
        quests: ["Between a Rock..."],
        skills: { Mining: 40 },
        players: [],
      },
    ],
    hard: [
      {
        description: "Teleport to Trollheim",
        quests: ["Eadgar's Ruse"],
        skills: { Magic: 61 },
        players: [],
      },
      {
        description: "Catch a Sabre-toothed kyatt",
        quests: [],
        skills: { Hunter: 55 },
        players: [],
      },
      {
        description: "Mix a Super defence potion in the Fremennik Province",
        quests: [],
        skills: { Herblore: 66 },
        players: [],
      },
      {
        description: "Steal from the Keldagrim Gem Stall",
        quests: ["The Giant Dwarf"],
        skills: { Thieving: 75 },
        players: [],
      },
      {
        description: "Craft a Fremennik shield on Neitiznot",
        quests: ["The Fremennik Isles"],
        skills: { Woodcutting: 56 },
        players: [],
      },
      {
        description: "Mine 5 adamantite ores on Jatizso",
        quests: [],
        skills: { Mining: 70 },
        players: [],
      },
      {
        description: "Obtain 100% support from your kingdom subjects",
        quests: ["Throne of Miscellania"],
        skills: {},
        players: [],
      },
      {
        description: "Teleport to Waterbirth Island",
        quests: ["Lunar Diplomacy"],
        skills: {},
        players: [],
      },
      {
        description:
          "Obtain the Blast Furnace Foreman's permission to use the Blast Furnace for free",
        quests: ["The Giant Dwarf"],
        skills: {},
        players: [],
      },
    ],
    elite: [
      {
        description: "Kill each of the Dagannoth Kings",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Craft 56 astral runes at once from essence",
        quests: ["Lunar Diplomacy"],
        skills: { Runecraft: 82 },
        players: [],
      },
      {
        description: "Create a dragonstone amulet in the Neitiznot furnace",
        quests: ["The Fremennik Isles"],
        skills: { Crafting: 80 },
        players: [],
      },
      {
        description: "Complete a lap of the Rellekka Rooftop Course",
        quests: [],
        skills: { Agility: 80 },
        players: [],
      },
      {
        description:
          "Kill the generals of Armadyl, Bandos, Saradomin, and Zamorak in the God Wars Dungeon",
        quests: ["Troll Stronghold"],
        skills: { Agility: 70, Strength: 70, Hitpoints: 70, Ranged: 70 },
        players: [],
      },
      {
        description: "Slay a Spiritual mage within the God Wars Dungeon",
        quests: ["Troll Stronghold"],
        skills: { Slayer: 83 },
        players: [],
      },
    ],
  },
  kandarin: {
    easy: [
      {
        description: "Catch a mackerel at Catherby",
        quests: [],
        skills: { Fishing: 16 },
        players: [],
      },
      {
        description: "Buy a candle from the candle maker in Catherby",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Collect 5 flax from the Seers' Village flax field",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Play the Church organ in the Seers' Village church",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description:
          "Plant jute seeds in the farming patch north of McGrubor's Wood",
        quests: [],
        skills: { Farming: 13 },
        players: [],
      },
      {
        description: "Have Galahad make you a cup of tea",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Defeat one of each elemental in the Elemental Workshop",
        quests: ["Elemental Workshop I"],
        skills: {},
        players: [],
      },
      {
        description: "Get a pet fish from Harry in Catherby",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Buy a stew from the Seers' Village pub",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description:
          "Speak to Sherlock between the Sorcerer's Tower and Keep Le Faye",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Cross the Coal truck log shortcut",
        quests: [],
        skills: { Agility: 20 },
        players: [],
      },
    ],
    medium: [
      {
        description: "Complete a lap of the Barbarian agility course",
        quests: ["Alfred Grimhand's Barcrawl"],
        skills: { Agility: 35 },
        players: [],
      },
      {
        description:
          "Create a Superantipoison potion from scratch in the Seers/Catherby area",
        quests: [],
        skills: { Herblore: 48 },
        players: [],
      },
      {
        description: "Enter the Ranging Guild",
        quests: [],
        skills: { Ranged: 40 },
        players: [],
      },
      {
        description:
          "Use the grapple shortcut to get from the water obelisk to Catherby shore",
        quests: [],
        skills: { Agility: 36, Strength: 22, Ranged: 39 },
        players: [],
      },
      {
        description: "Catch and cook a bass in Catherby",
        quests: [],
        skills: { Fishing: 46, Cooking: 43 },
        players: [],
      },
      {
        description: "Teleport to Camelot",
        quests: [],
        skills: { Magic: 45 },
        players: [],
      },
      {
        description: "String a maple shortbow in Seers' Village bank",
        quests: [],
        skills: { Fletching: 50 },
        players: [],
      },
      {
        description:
          "Pick some limpwurt root from the farming patch in Catherby",
        quests: [],
        skills: { Farming: 26 },
        players: [],
      },
      {
        description: "Create a mind helmet",
        quests: ["Elemental Workshop II"],
        skills: {},
        players: [],
      },
      {
        description: "Kill a fire giant in the Waterfall Dungeon",
        quests: ["Waterfall Quest"],
        skills: {},
        players: [],
      },
      {
        description: "Complete a wave of Barbarian Assault",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Steal from the chest in Hemenster",
        quests: [],
        skills: { Thieving: 47 },
        players: [],
      },
      {
        description: "Travel to McGrubor's Wood by Fairy ring",
        quests: ["Fairytale I - Growing Pains"],
        skills: {},
        players: [],
      },
      {
        description: "Mine some coal near the coal trucks",
        quests: [],
        skills: { Mining: 30 },
        players: [],
      },
    ],
    hard: [
      {
        description: "Catch a leaping sturgeon",
        quests: [],
        skills: { Fishing: 70, Agility: 45, Strength: 45 },
        players: [],
      },
      {
        description: "Complete a lap of the Seers' Village Rooftop Course",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Create a yew longbow from scratch around Seers' Village",
        quests: [],
        skills: { Fletching: 70, Woodcutting: 60 },
        players: [],
      },
      {
        description: "Enter the Seers' Village courthouse with Piety turned on",
        quests: ["King's Ransom"],
        skills: { Prayer: 70, Defence: 70 },
        players: [],
      },
      {
        description: "Charge a water orb",
        quests: [],
        skills: { Magic: 56 },
        players: [],
      },
      {
        description: "Burn some maple logs with a bow in Seers' Village",
        quests: [],
        skills: { Firemaking: 65 },
        players: [],
      },
      {
        description: "Kill a shadow hound in the SHadow Dungeon",
        quests: ["Desert Treasure"],
        skills: { Thieving: 53 },
        players: [],
      },
      {
        description: "Kill a Mithril dragon",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Purchase and equip a granite body from Barbarian Assault",
        quests: [],
        skills: { Strength: 50, Defence: 50 },
        players: [],
      },
      {
        description:
          "Have the Seers' Village estate agent decorate your house with Fancy Stone",
        quests: [],
        skills: { Construction: 50 },
        players: [],
      },
      {
        description: "Smith an adamant spear at Otto's Grotto",
        quests: [],
        skills: { Smithing: 75 },
        players: [],
      },
    ],
    elite: [
      {
        description:
          "Read the blackboard at Barbarian Assault after reaching level 5 in every role",
        quests: [],
        skills: {},
        players: [],
      },
      {
        description: "Pick som dwarf weed form the herb patch at Catherby",
        quests: [],
        skills: { Farming: 79 },
        players: [],
      },
      {
        description:
          "Fish and cook 5 sharks in Catherby using the Cooking gauntlets",
        quests: ["Family Crest"],
        skills: { Fishing: 76, Cooking: 80 },
        players: [],
      },
      {
        description: "Mix a Stamina mix on top of the Seers' Village bank",
        quests: [],
        skills: { Herblore: 86, Agility: 60 },
        players: [],
      },
      {
        description: "Smith a rune hasta at Otto's Grotto",
        quests: [],
        skills: { Smithing: 90 },
        players: [],
      },
      {
        description: "Construct a pyre ship from magic logs",
        quests: [],
        skills: { Firemaking: 85, Crafting: 85 },
        players: [],
      },
      {
        description: "Teleport to Catherby",
        quests: ["Lunar Diplomacy"],
        skills: { Magic: 87 },
        players: [],
      },
    ],
  },
  karamja: {
    easy: [
      {
        description:
          "Pick 5 bananas from the plantation located east of the volcano",
        quests: [],
        skills: {},
      },
      {
        description:
          "Use the rope swing to travel to the Moss Giant Island north-west of Karamja",
        quests: [],
        skills: { Agility: 10 },
      },
      {
        description:
          "Mine some gold from the rocks on the north-west peninsula of Karamja",
        quests: [],
        skills: { Mining: 40 },
      },
      {
        description: "Travel to Port Sarim via the dock, east of Musa Point",
        quests: [],
        skills: {},
      },
      {
        description: "Travel to Ardougne via the port near Brimhaven",
        quests: [],
        skills: {},
      },
      {
        description: "Explore Cairn Isle to the west of Karamja",
        quests: [],
        skills: { Agility: 15 },
      },
      {
        description: "Use the fishing spots north of the banana plantation",
        quests: [],
        skills: {},
      },
      {
        description: "Collect 5 seaweed from anywhere on Karamja",
        quests: [],
        skills: {},
      },
      {
        description: "Attempt the TzHaar Fight Pits or Fight Cave",
        quests: [],
        skills: {},
      },
      {
        description: "Kill a jogre in the Pothole Dungeon",
        quests: [],
        skills: {},
      },
    ],
    medium: [
      {
        description: "Claim a ticket from the Agility arena in Brimhaven",
        quests: [],
        skills: {},
      },
      {
        description: "Discover hidden wall in the dungeon below the volcano",
        quests: ["Dragon Slayer I"],
        skills: {},
      },
      {
        description:
          "Visit the Isle of Crandor via the dungeon below the volcano",
        quests: ["Dragon Slayer I"],
        skills: {},
      },
      {
        description: "Use Vigroy and Hajedy's cart service",
        quests: ["Shilo Village"],
        skills: {},
      },
      {
        description: "Earn 100% favour in the Tai Bwo Wannai Cleanup minigame",
        quests: ["Jungle Potion"],
        skills: { Woodcutting: 10 },
      },
      {
        description: "Cook a spider on a stick",
        quests: [],
        skills: { Cooking: 16 },
      },
      {
        description:
          "Charter the Lady of the Waves from south of Cairn Isle to Port Khazard",
        quests: ["Shilo Village"],
        skills: {},
      },
      {
        description: "Cut a log from a teak tree",
        quests: ["Jungle Potion"],
        skills: { Woodcutting: 35 },
      },
      {
        description: "Cut a log from a mahogany tree",
        quests: ["Jungle Potion"],
        skills: { Woodcutting: 50 },
      },
      {
        description: "Catch a karambwan",
        quests: ["Tai Bwo Wannai Trio"],
        skills: { Fishing: 65 },
      },
      {
        description: "Exchange gems for a machete",
        quests: ["Jungle Potion"],
        skills: {},
      },
      {
        description: "Use the gnome glider to travel to Karamja",
        quests: ["The Grand Tree"],
        skills: {},
      },
      {
        description: "Grow a healthy fruit tree in the patch near Brimhaven",
        quests: [],
        skills: { Farming: 27 },
      },
      {
        description: "Trap a Horned Graahk",
        quests: [],
        skills: { Hunter: 41 },
      },
      {
        description:
          "Chop the vines to gain deeper access to Brimhaven Dungeon",
        quests: [],
        skills: { Woodcutting: 10 },
      },
      {
        description:
          "Cross the lava using the stepping stones within Brimhaven Dungeon",
        quests: [],
        skills: { Woodcutting: 10, Agility: 12 },
      },
      {
        description: "Climb the stairs within Brimhaven Dungeon",
        quests: [],
        skills: { Woodcutting: 10 },
      },
      {
        description:
          "Charter a ship from the shipyard in the far east of Karamja",
        quests: ["The Grand Tree"],
        skills: {},
      },
      {
        description: "Mine a red topaz from a gem rock",
        quests: [],
        skills: {},
        test: ({ quests }) => ({
          isMet:
            quests != null &&
            (quests.includes("Jungle Potion") ||
              quests.includes("Shilo Village")),
          description: "Completed 'Jungle Potion' or 'Shilo Village'",
        }),
      },
    ],
    hard: [
      {
        description: "Become the champion of the Fight Pit",
        quests: [],
        skills: {},
      },
      {
        description: "Kill a Ket-Zek in the Fight Caves",
        quests: [],
        skills: {},
      },
      {
        description: "Eat an oomlie wrap",
        quests: [],
        skills: { Cooking: 50 },
      },
      {
        description: "Craft some nature runes from essence",
        quests: [],
        skills: { Runecraft: 44 },
      },
      {
        description: "Cook a raw karambwan thoroughly",
        quests: ["Tai Bwo Wannai Trio"],
        skills: { Cooking: 30 },
      },
      {
        description: "Kill a deathwing in the dungeon under the Kharazi Jungle",
        quests: ["Legends' Quest"],
        skills: {
          Woodcutting: 15,
          Strength: 50,
          Agility: 50,
          Thieving: 50,
          Mining: 52,
        },
      },
      {
        description: "Use the crossbow shortcut south of the volcano",
        quests: [],
        skills: { Agility: 53, Ranged: 42, Strength: 21 },
      },
      {
        description: "Collect 5 palm leaves",
        quests: ["Legends' Quest"],
        skills: { Woodcutting: 15 },
      },
      {
        description: "Be assigned a Slayer task by Duradel in Shilo Village",
        quests: [],
        skills: {},
        test: ({ skills, combatLevel }) => ({
          isMet:
            skills != null &&
            combatLevel != null &&
            ((skills["Slayer"]?.level >= 50 && combatLevel >= 100) ||
              skills["Slayer"].level >= 99),
          description: "50 Slayer with 100 Combat Level or 99 Slayer",
        }),
      },
      {
        description: "Kill a metal dragon in Brimhaven Dungeon",
        quests: [],
        skills: {},
      },
    ],
    elite: [
      {
        description: "Craft 56 nature runes at once from essence",
        quests: [],
        skills: { Runecraft: 91 },
      },
      {
        description: "Equip a fire cape or infernal cape in the Tzhaar city",
        quests: [],
        skills: {},
      },
      {
        description: "Check the health of a palm tree in Brimhaven",
        quests: [],
        skills: { Farming: 68 },
      },
      {
        description:
          "Create an antivenom potion whilst standing in the horse shoe mine",
        quests: [],
        skills: { Herblore: 87 },
      },
      {
        description: "Check the health of your Calquat tree patch",
        quests: [],
        skills: { Farming: 72 },
      },
    ],
  },
  "kourend & kebos": {
    easy: [
      {
        description: "Mine some iron ore at the Mount Karuulm mine",
        quests: [],
        skills: { Mining: 15 },
      },
      {
        description: "Kill a Sand Crab",
        quests: [],
        skills: {},
      },
      {
        description: "Hand in a book at the Arceuus Library",
        quests: [],
        skills: {},
      },
      {
        description: "Steal from a Hosidius Fruit Stall",
        quests: [],
        skills: { Thieving: 25 },
      },
      {
        description: "Browse the Warrens General Store",
        quests: [],
        skills: {},
      },
      {
        description: "Take a boat to Land's End",
        quests: [],
        skills: {},
      },
      {
        description: "Pray at the altar on the top floor of the Kourend Castle",
        quests: [],
        skills: {},
      },
      {
        description: "Dig up some saltpetre",
        quests: [],
        skills: {},
      },
      {
        description: "Enter your player-owned house from Hosidius",
        quests: [],
        skills: { Construction: 25 },
      },
      {
        description: "Heal a wounded Shayzien soldier",
        quests: [],
        skills: {},
      },
      {
        description: "Create a strength potion in the Lovakengj pub",
        quests: ["Druidic Ritual"],
        skills: { Herblore: 12 },
      },
      {
        description: "Fish a Trout from the River Molch",
        quests: [],
        skills: { Fishing: 20 },
      },
    ],
    medium: [
      {
        description: "Travel to the fairy ring south of Mount Karuulm",
        quests: ["Fairytale I - Growing Pains"],
        skills: {},
      },
      {
        description: "Kill a lizardman",
        quests: [],
        skills: {},
      },
      {
        description:
          "Use Kharedst's memoirs to teleport to all five cities in the Great Kourend",
        quests: [
          "The Depths of Despair",
          "The Queen of Thieves",
          "Tale of the Righteous",
          "The Forsaken Tower",
          "The Ascent of Arceuus",
        ],
        skills: {},
      },
      {
        description: "Mine some volcanic sulphur",
        quests: [],
        skills: { Mining: 42 },
      },
      {
        description: "Enter the Farming Guild",
        quests: [],
        skills: { Farming: 45 },
      },
      {
        description: "Switch to the Arceuus spellbook via Tyss",
        quests: [],
        skills: {},
      },
      {
        description: "Repair a crane within Port Piscarilius",
        quests: [],
        skills: { Crafting: 30 },
      },
      {
        description: "Deliver some intelligence to Captain Ginea",
        quests: [],
        skills: {},
      },
      {
        description: "Catch a Bluegill on Lake Molch",
        quests: [],
        skills: { Fishing: 43, Hunter: 35 },
      },
      {
        description: "Use the boulder leap shortcut in the dense essence mine",
        quests: [],
        skills: { Agility: 49 },
      },
      {
        description: "Subdue the Wintertodt",
        quests: [],
        skills: { Firemaking: 50 },
      },
      {
        description: "Catch a chinchompa in the Kourend Woodland",
        quests: ["Eagles' Peak"],
        skills: { Hunter: 53 },
      },
      {
        description: "Chop some mahogany logs north of the Farming Guild",
        quests: [],
        skills: { Woodcutting: 50 },
      },
    ],
    hard: [
      {
        description: "Enter the Woodcutting Guild",
        quests: [],
        skills: { Woodcutting: 60 },
      },
      {
        description: "Smelt an adamantite bar in The Forsaken Tower",
        quests: ["The Forsaken Tower"],
        skills: { Smithing: 70 },
      },
      {
        description: "Kill a lizardman shaman in the Lizardman Temple",
        quests: [],
        skills: {},
      },
      {
        description: "Mine some Lovakite ore",
        quests: [],
        skills: { Mining: 65 },
      },
      {
        description: "Plant some Logavano seeds at the Tithe Farm",
        quests: [],
        skills: { Farming: 74 },
      },
      {
        description: "Kill a zombie in the Shayzien Crypts",
        quests: [],
        skills: {},
      },
      {
        description: "Teleport to Xeric's Heart using Xeric's talisman",
        quests: [],
        skills: {},
      },
      {
        description: "Deliver an artefact to Captain Khaled",
        quests: [],
        skills: { Thieving: 49 },
      },
      {
        description: "Kill a wyrm in the Karuulm Slayer Dungeon",
        quests: [],
        skills: { Slayer: 62 },
      },
      {
        description:
          "Cast Monster Examine on a mountain troll south of Mount Quidamortem",
        quests: ["Dream Mentor"],
        skills: { Magic: 66 },
      },
    ],
    elite: [
      {
        description: "Craft one or more blood runes from essence",
        quests: [],
        skills: { Runecraft: 77, Mining: 38, Crafting: 38 },
      },
      {
        description: "Chop some redwood logs",
        quests: [],
        skills: { Woodcutting: 90 },
      },
      {
        description: "Defeat Skotizo in the Catacombs of Kourend",
        quests: [],
        skills: {},
      },
      {
        description: "Catch an anglerfish and cook it whilst in Great Kourend",
        quests: [],
        skills: { Cooking: 84, Fishing: 82 },
      },
      {
        description: "Kill a hydra in the Karuulm Slayer Dungeon",
        quests: [],
        skills: { Slayer: 95 },
      },
      {
        description: "Create an Ape Atoll telport tablet",
        quests: [],
        skills: { Magic: 90 },
      },
      {
        description: "Complete a raid in the Chambers of Xeric",
        quests: [],
        skills: {},
      },
      {
        description:
          "Create your own battlestaff from scratch within the Farming Guild",
        quests: [],
        skills: { Farming: 85, Fletching: 40 },
      },
    ],
  },
  "lumbridge & draynor": {
    easy: [
      {
        description: "Compelte a lap of the Draynor Village Rooftop Course",
        quests: [],
        skills: { Agility: 10 },
      },
      {
        description: "Slay a cave bug in the Lumbridge Swamp Caves",
        quests: [],
        skills: { Slayer: 7 },
      },
      {
        description:
          "Have Archmage Sedridor teleport you to the Rune essences mine",
        quests: ["Rune Mysteries"],
        skills: {},
      },
      {
        description: "Craft some water runes",
        quests: [],
        skills: { Runecraft: 5 },
      },
      {
        description: "Learn your age from Hans in Lumbridge",
        quests: [],
        skills: {},
      },
      {
        description: "Pickpocket a man or woman in Lumbridge",
        quests: [],
        skills: {},
      },
      {
        description: "Chop and burn some oak logs in Lumbridge",
        quests: [],
        skills: { Firemaking: 15, Woodcutting: 15 },
      },
      {
        description: "Kill a zombie in the Draynor Sewers",
        quests: [],
        skills: {},
      },
      {
        description: "Catch some anchovies in Al-Kharid",
        quests: [],
        skills: { Fishing: 15 },
      },
      {
        description: "Bake some bread on the Lumbridge castle kitchen range",
        quests: ["Cook's Assistant"],
        skills: {},
      },
      {
        description: "Mine some iron ore at the Al-Kharid mine",
        quests: [],
        skills: { Mining: 15 },
      },
      {
        description: "Enter the H.A.M. Hideout",
        quests: [],
        skills: {},
      },
    ],
    medium: [
      {
        description: "Complete a lap of the Al Kharid Rooftop",
        quests: [],
        skills: { Agility: 20 },
      },
      {
        description: "Grapple accross the River Lum",
        quests: [],
        skills: { Agility: 8, Strength: 19, Ranged: 37 },
      },
      {
        description: "Purchase an upgraded device from Ava",
        quests: ["Animal Magnetism"],
        skills: { Ranged: 50 },
      },
      {
        description: "Travel to the Wizards' Tower by Fairy ring",
        quests: ["Fairytale I - Growing Pains"],
        skills: {},
      },
      {
        description: "Cast the Lumbridge Teleport spell",
        quests: [],
        skills: { Magic: 31 },
      },
      {
        description: "Catch some salon in Lubridge",
        quests: [],
        skills: { Fishing: 30 },
      },
      {
        description: "Craft a coif in the Lumbridge cow pen",
        quests: [],
        skills: { Crafting: 38 },
      },
      {
        description: "Chop some willow logs in Draynor Village",
        quests: [],
        skills: { Woodcutting: 30 },
      },
      {
        description: "Pickpocket Martin the Master Gardener",
        quests: [],
        skills: { Thieving: 38 },
      },
      {
        description: "Get a Slayer task from Chaeldar",
        quests: ["Lost City"],
        skills: {},
        test: ({ combatLevel }) => ({
          isMet: combatLevel >= 70,
          description: "Combat Level 70",
        }),
      },
      {
        description: "Catch an essence or eclectic impling in Puro-Puro",
        quests: ["Lost City"],
        skills: { Hunter: 42 },
      },
      {
        description: "Craft some lava runes at the Fire Altar in Al-Kharid",
        quests: [],
        skills: { Runecraft: 23 },
      },
    ],
    hard: [
      {
        description: "Cast Bones to Peaches in Al-Kharid Palace",
        quests: [],
        skills: { Magic: 60 },
      },
      {
        description:
          "Squeeze past the jutting wall on your way to the Cosmic Altar",
        quests: ["Lost City"],
        skills: { Agility: 46 },
      },
      {
        description: "Craft 56 cosmic runes simultaneously from essence",
        quests: ["Lost City"],
        skills: { Runecraft: 59 },
      },
      {
        description: "Travel from Lumbridge to Edgeville on a waka canoe",
        quests: [],
        skills: { Woodcutting: 57 },
      },
      {
        description: "Collect at least 100 Tears of Guthix in one visit",
        quests: ["Tears of Guthix"],
        skills: {},
      },
      {
        description: "Take the train from Dorgesh-Kaan to Keldagrim",
        quests: ["Another Slice of H.A.M."],
        skills: {},
      },
      {
        description:
          "Purchase some Barrows gloves from the Culinaromancer's Chest",
        quests: ["Recipe for Disaster"],
        skills: {},
      },
      {
        description:
          "Pick some belladonna from the farming patch at Draynor Manor",
        quests: [],
        skills: { Farming: 63 },
      },
      {
        description:
          "Light your mining helment in the Lumbridge Castle basement",
        quests: [],
        skills: { Farming: 65 },
      },
      {
        description:
          "Recharge your prayer at Emir's Arena with Smite activated",
        quests: [],
        skills: { Prayer: 52 },
      },
      {
        description:
          "Craft, string, and enchant an amulet of power in Lumbridge",
        quests: [],
        skills: { Crafting: 70, Magic: 57 },
      },
    ],
    elite: [
      {
        description: "Steal from the Dorgesh-Kaan rich chest",
        quests: ["Death to the Dorgeshuun"],
        skills: { Thieving: 78 },
      },
      {
        description: "Pickpocket Movario on the Dorgesh-Kaan Agility Course",
        quests: ["Death to the Dorgeshuun", "Temple of Ikov"],
        skills: { Thieving: 42, Agility: 70, Ranged: 70, Strength: 70 },
      },
      {
        description: "Chop some magic logs at the Mage Training Arena",
        quests: [],
        skills: { Woodcutting: 75 },
      },
      {
        description: "Smith an adamant platebody down in Dryanor Swewer",
        quests: [],
        skills: { Smithing: 88 },
      },
      {
        description: "Craft 140 or more water ruens at once form essence",
        quests: [],
        skills: { Runecraft: 76 },
      },
      {
        description:
          "Perform the Quest point cape emote in the Wise Old Man's house",
        quests: [],
        skills: {},
        test: ({ quests }) => ({
          isMet: quests != null && allQuests.every((q) => quests.includes(q)),
          description: "Every quest completed",
        }),
      },
    ],
  },
  morytania: {
    easy: [
      {
        description: "Craft any snelm from scratch in Morytania",
        quests: [],
        skills: { Crafting: 15 },
      },
      {
        description: "Cook a thin snail on the Port Phasmatys range",
        quests: [],
        skills: { Cooking: 12 },
      },
      {
        description: "Get a Slayer task from Mazchna",
        quests: [],
        skills: {},
        test: ({ combatLevel }) => ({
          isMet: combatLevel >= 20,
          description: "Combat Level 20",
        }),
      },
      {
        description: "Kill a banshee in the Slayer Tower",
        quests: [],
        skills: { Slayer: 15 },
      },
      {
        description: "Have Sbott tan something for you",
        quests: [],
        skills: {},
      },
      {
        description: "Enter Mort Myre Swamp",
        quests: ["Nature Spirit"],
        skills: {},
      },
      {
        description: "Kill a ghoul",
        quests: [],
        skills: {},
      },
      {
        description: "Place a Scarecrow in the Morytania flower patch",
        quests: [],
        skills: { Farming: 23 },
      },
      {
        description: "Offer some Bonemeal at the Ectofuntus",
        quests: [],
        skills: {},
      },
      {
        description:
          "Kill a Werewolf in its human form using the Wolfbane dagger",
        quests: ["Priest in Peril"],
        skills: {},
      },
      {
        description: "Restore your prayer points at the nature altar",
        quests: ["Nature Spirit"],
        skills: {},
      },
    ],
    medium: [
      {
        description: "Catch a swamp lizard",
        quests: [],
        skills: { Hunter: 29 },
      },
      {
        description: "Complete a lap of the Canifis Rooftop Agility Course",
        quests: [],
        skills: { Agility: 40 },
      },
      {
        description: "Travel to Dragontooth Isle",
        quests: ["The Restless Ghost"],
        skills: {},
      },
      {
        description: "Kill a Terror Dog",
        quests: ["Haunted Mine"],
        skills: { Slayer: 40 },
      },
      {
        description: "Complete a game of trouble brewing",
        quests: ["Cabin Fever"],
        skills: { Cooking: 40 },
      },
      {
        description: "Board the Swamp boaty at the Hollows",
        quests: ["Nature Spirit"],
        skills: {},
      },
      {
        description:
          "Make a batch of cannonballs at the Port Phasmatys furnace",
        quests: ["Dwarf Cannon"],
        skills: { Smithing: 35 },
      },
      {
        description: "Kill a fever spider on Braindeath Island",
        quests: ["Rum Deal"],
        skills: { Slayer: 42 },
      },
      {
        description: "Use an ectophial to return to Port Phasmatys",
        quests: ["Ghosts Ahoy"],
        skills: {},
      },
      {
        description: "Mix a Guthix balance potion while in Morytania",
        quests: ["In Aid of the Myreque"],
        skills: { Herblore: 22 },
      },
    ],
    hard: [
      {
        description: "Enter the Kharyrll portal in your POH",
        quests: ["Desert Treasure"],
        skills: { Magic: 66, Construction: 50 },
      },
      {
        description: "Climb the advanced spike chain within Slayer Tower",
        quests: [],
        skills: { Agility: 71 },
      },
      {
        description:
          "Harvest some Watermelon from the allotment patch on Harmony Island",
        quests: ["The Great Brain Robbery"],
        skills: { Farming: 47 },
      },
      {
        description: "Chop and burn some mahogany logs on Mos Le'Harmless",
        quests: ["Cabin Fever"],
        skills: { Woodcutting: 50, Firemaking: 50 },
      },
      {
        description: "Complete a temple trek with a hard companion",
        quests: ["In Aid of the Myreque"],
        skills: {},
      },
      {
        description: "Kill a Cave Horror",
        quests: ["Cabin Fever"],
        skills: { Slayer: 58 },
      },
      {
        description:
          "Harvest some Bittercap Mushrooms from the patch in Canifis",
        quests: [],
        skills: { Farming: 53 },
      },
      {
        description: "Pray at the Altar of Nature with Piety activated",
        quests: ["Nature Spirit"],
        skills: { Prayer: 70, Defence: 70 },
      },
      {
        description: "Use the shortcut to get to the bridge over the Salve",
        quests: [],
        skills: { Agility: 65 },
      },
      {
        description: "Mine some mithril ore in the Abandoned Mine",
        quests: ["Haunted Mine"],
        skills: { Mining: 55 },
      },
    ],
    elite: [
      {
        description: "Catch a shark in Burgh de Rott with your bare hands",
        quests: ["In Aid of the Myreque"],
        skills: { Fishing: 96, Strength: 76 },
      },
      {
        description: "Cremate any Shade remains on a Magic or Redwood pyre",
        quests: ["Shades of Mort'ton"],
        skills: { Firemaking: 80 },
      },
      {
        description: "Fertilize the Morytania herb patch using Lunar Magic",
        quests: ["Lunar Diplomacy"],
        skills: { Magic: 83 },
      },
      {
        description: "Craft a Black dragonhide body in the Canifis bank",
        quests: [],
        skills: { Crafting: 84 },
      },
      {
        description: "Kill an Abyssal demon in the Slayer Tower",
        quests: [],
        skills: { Slayer: 85 },
      },
      {
        description:
          "Loot the Barrows chest while wearing any complete barrows set",
        quests: [],
        skills: {},
        test: ({ skills }) => ({
          isMet:
            skills != null &&
            skills.length > 1 &&
            skills["Defense"] >= 70 &&
            (skills["Attack"].level >= 70 || skills["Ranged"].level >= 70),
          description: "Can equip a full set",
        }),
      },
    ],
  },
  varrock: {
    easy: [
      {
        description: "Browse Thessalia's store",
        quests: [],
        skills: {},
      },
      {
        description: "Have Aubury teleport you to the essence mine",
        quests: ["Rune Mysteries"],
        skills: {},
      },
      {
        description: "Mine some iron in the south-east Varrock mine",
        quests: [],
        skills: { Mining: 15 },
      },
      {
        description: "Make a normal plank at the Sawmill",
        quests: [],
        skills: {},
      },
      {
        description: "Enter the second level of the Stronghold of Security",
        quests: [],
        skills: {},
      },
      {
        description: "Jump over the fence south of Varrock",
        quests: [],
        skills: { Agility: 13 },
      },
      {
        description: "Chop down a dying tree in the Lumber Yard",
        quests: [],
        skills: {},
      },
      {
        description: "Buy a newspaper",
        quests: [],
        skills: {},
      },
      {
        description: "Give a dog a bone",
        quests: [],
        skills: {},
      },
      {
        description:
          "Spin a bowl on the pottery wheel and fire it in the oven in Barbarian Village",
        quests: [],
        skills: { Crafting: 8 },
      },
      {
        description: "Speak to Haig Halen after obtaining at least 50 Kudos",
        quests: [],
        skills: {},
      },
      {
        description: "Craft some earth runes from Essence",
        quests: [],
        skills: { Runecraft: 9 },
      },
      {
        description: "Catch some trout in the River Lum at Barbarian Village",
        quests: [],
        skills: { Fishing: 20 },
      },
      {
        description: "Steal from the tea stall in Varrock",
        quests: [],
        skills: { Thieving: 5 },
      },
    ],
    medium: [
      {
        description:
          "Have the Apothecary in Varrock make you a Strength potion",
        quests: [],
        skills: {},
      },
      {
        description: "Enter the Champions' Guild",
        quests: [],
        skills: {},
      },
      {
        description: "Select a color for your kitten",
        quests: ["Gertrude's Cat", "Garden of Tranquility"],
        skills: {},
      },
      {
        description:
          "Use the Spirit tree in the north-eastern corner of the Grand Exchange",
        quests: [],
        skills: {},
      },
      {
        description: "Perform the 4 emotes from the Stronghold of Security",
        quests: [],
        skills: {},
      },
      {
        description: "Enter the Tolna dungeon after completing A Soul's Bane",
        quests: ["A Soul's Bane"],
        skills: {},
      },
      {
        description: "Teleport to the digsite using a Digsite pendant",
        quests: ["The Dig Site"],
        skills: {},
      },
      {
        description: "Cast the teleport to Varrock spell",
        quests: [],
        skills: { Magic: 25 },
      },
      {
        description: "Get a Slayer task from Vannaka",
        quests: [],
        skills: {},
        test: ({ combatLevel }) => ({
          isMet: combatLevel != null && combatLevel >= 40,
          description: "40 Combat level",
        }),
      },
      {
        description: "Make 20 mahogany planks in one go at the Lumber Yard",
        quests: [],
        skills: {},
      },
      {
        description: "Pick a white tree fruit",
        quests: ["Garden of Tranquility"],
        skills: { Farming: 25 },
      },
      {
        description: "Use the balloon to travel from Varrock",
        quests: ["Enlightened Journey"],
        skills: { Farming: 30, Firemaking: 40 },
      },
      {
        description: "Complete a lap of the Varrock Rooftop Course",
        quests: [],
        skills: { Agility: 30 },
      },
    ],
    hard: [
      {
        description:
          "Trade furs with the Fancy Dress Seller for a Spottier cape and equip it",
        quests: [],
        skills: { Hunter: 66 },
      },
      {
        description: "Speak to Orlando Smith when you have achieved 153 Kudos",
        quests: [],
        skills: {},
      },
      {
        description: "Make a Waka canoe near Edgeville",
        quests: [],
        skills: { Woodcutting: 57 },
      },
      {
        description: "Teleport to Paddewwa",
        quests: ["Desert Treasure"],
        skills: { Magic: 54 },
      },
      {
        description: "Teleport to Barbarian Village with a Skull sceptre",
        quests: [],
        skills: {},
      },
      {
        description:
          "Chop some yew logs in Varrock and burn them at the top of the Varrock church",
        quests: [],
        skills: { Woodcutting: 60, Firemaking: 60 },
      },
      {
        description:
          "Have the Varrock estate agent decorate your house with Fancy Stone",
        quests: [],
        skills: { Construction: 50 },
      },
      {
        description:
          "Collect at least 2 yew roots from the tree patch in Varrock Palace",
        quests: [],
        skills: { Farming: 68, Woodcutting: 60 },
      },
      {
        description: "Pray at the altar in Varrock Palace with Smite active",
        quests: [],
        skills: { Prayer: 52 },
      },
      {
        description: "Squeeze through the obstacle pipe in Edgeville Dungeon",
        quests: [],
        skills: { Agility: 51 },
      },
    ],
    elite: [
      {
        description: "Create a Super combat potion in Varrock West Bank",
        quests: ["Druidic Ritual"],
        skills: { Herblore: 90 },
      },
      {
        description:
          "Use Lunar magic to make 20 mahogany planks in the Varrock Lumber Yard",
        quests: ["Dream Mentor"],
        skills: { Magic: 86 },
      },
      {
        description: "Bake a summer pie in the Cooking Guild",
        quests: [],
        skills: { Cooking: 95 },
      },
      {
        description: "Smith and fletch ten rune darts within Varrock",
        quests: ["The Tourist Trap"],
        skills: { Smithing: 89, Fletching: 81 },
      },
      {
        description:
          "Craft 100 or more earth runes simultaneously from essence",
        quests: ["Rune Mysteries"],
        skills: { Runecraft: 78 },
      },
    ],
  },
  westernProvinces: {
    easy: [
      {
        description: "Catch a copper longtail",
        quests: [],
        skills: { Hunter: 9 },
      },
      {
        description: "Complete a novice game of Pest Control",
        quests: [],
        skills: {},
        test: ({ combatLevel }) => ({
          isMet: combatLevel != null && combatLevel >= 40,
          description: "40 Combat level",
        }),
      },
      {
        description: "Mine some iron ore near Piscatoris",
        quests: [],
        skills: { Mining: 15 },
      },
      {
        description: "Complete a lap of the Gnome Agility Course",
        quests: [],
        skills: {},
      },
      {
        description: "Score a goal in a Gnome Ball match",
        quests: [],
        skills: {},
      },
      {
        description: "Claim any Chompy bird hat from Rantz",
        quests: ["Big Chompy Bird Hunting"],
        skills: {},
      },
      {
        description: "Teleport to Pest Control using the Minigame teleport",
        quests: [],
        skills: {},
        test: ({ combatLevel }) => ({
          isMet: combatLevel != null && combatLevel >= 40,
          description: "40 Combat level",
        }),
      },
      {
        description: "Collect a swamp toad at the Gnome Stronghold",
        quests: [],
        skills: {},
      },
      {
        description: "Have Brimstail teleport you to the Essence mine",
        quests: ["Rune Mysteries"],
        skills: {},
      },
      {
        description: "Fletch an oak shortbow in the Gnome Stronghold",
        quests: [],
        skills: { Fletching: 20 },
      },
      {
        description: "Kill a terrorbird in the terrorbird enclosure",
        quests: [],
        skills: {},
      },
    ],
    medium: [
      {
        description:
          "Take the agility shortcut form the Grand Tree to Otto's Grotto",
        quests: ["Tree Gnome Village", "The Grand Tree"],
        skills: { Agility: 37 },
      },
      {
        description: "Travel to the Gnome Stronghold by Spirit tree",
        quests: ["Tree Gnome Village"],
        skills: {},
      },
      {
        description: "Trap a Spined larupia",
        quests: [],
        skills: { Hunter: 31 },
      },
      {
        description: "Fish some bass on Ape Atoll",
        quests: ["Monkey Madness I"],
        skills: { Fishing: 46 },
      },
      {
        description: "Chop and burn some teak logs on Ape Atoll",
        quests: ["Monkey Madness I"],
        skills: { Woodcutting: 35, Firemaking: 35 },
      },
      {
        description: "Complete an intermediate game of Pest Control",
        quests: [],
        skills: {},
        test: ({ combatLevel }) => ({
          isMet: combatLevel != null && combatLevel >= 70,
          description: "70 Combat level",
        }),
      },
      {
        description: "Travel to the Feldip Hills by Gnome Glider",
        quests: ["The Grand Tree", "One Small Favour"],
        skills: {},
      },
      {
        description:
          "Claim a Chompy bird hat from Rantz after registering at least 125 kills",
        quests: ["Big Chompy Bird Hunting"],
        skills: {},
      },
      {
        description: "Travel from Eagles' Peak to the Feldip Hills by Eagle",
        quests: ["Eagles' Peak"],
        skills: {},
      },
      {
        description: "Make a Chocolate bomb at the Grand Tree",
        quests: [],
        skills: { Cooking: 42 },
      },
      {
        description: "Complete a delivery for the Gnome Restaurant",
        quests: [],
        skills: { Cooking: 29 },
      },
      {
        description: "Turn your crystal saw seed into a crystal saw",
        quests: ["The Eyes of Glouphrie"],
        skills: {},
      },
      {
        description: "Mine some gold ore underneath the Grand Tree",
        quests: ["The Grand Tree"],
        skills: { Mining: 40 },
      },
    ],
    hard: [
      {
        description: "Kill an elf with a crystal bow",
        quests: ["Roving Elves"],
        skills: { Ranged: 70 },
      },
      {
        description:
          "Catch and cook a monkfish in the Piscatoris Fishing Colony",
        quests: ["Swan Song"],
        skills: { Fishing: 62, Cooking: 62 },
      },
      {
        description: "Complete a veteran game of Pest Control",
        quests: [],
        skills: {},
        test: ({ combatLevel }) => ({
          isMet: combatLevel != null && combatLevel >= 100,
          description: "100 Combat level",
        }),
      },
      {
        description: "Catch a dashing kebbit",
        quests: [],
        skills: { Hunter: 69 },
      },
      {
        description: "Complete a lap of the Ape Atoll Agility Course",
        quests: ["Monkey Madness I"],
        skills: { Agility: 48 },
      },
      {
        description: "Chop and burn some mahogany logs on Ape Atoll",
        quests: ["Monkey Madness I"],
        skills: { Woodcutting: 50, Firemaking: 50 },
      },
      {
        description: "Mine some adamantite ore in Tirannwn",
        quests: ["Regicide"],
        skills: { Mining: 70 },
      },
      {
        description: "Check the health of your palm tree in Lletya",
        quests: ["Mourning's End Part I"],
        skills: { Farming: 68 },
      },
      {
        description:
          "Claim a Chompy bird hat from Rantz after registering at least 300 kills",
        quests: ["Big Chompy Bird Hunting"],
        skills: {},
      },
      {
        description: "Build an Isafdar painting in your POH Quest Hall",
        quests: ["Roving Elves"],
        skills: { Construction: 65 },
      },
      {
        description: "Kill Zulrah",
        quests: ["Regicide"],
        skills: {},
      },
      {
        description: "Teleport to Ape Atoll",
        quests: ["Recipe for Disaster - Freeing King Awowogei"],
        skills: { Magic: 64 },
      },
      {
        description: "Pickpocket a gnome",
        quests: ["Tree Gnome Village"],
        skills: { Thieving: 75 },
      },
    ],
    elite: [
      {
        description: "Fletch a magic longbow in Tirannwn",
        quests: [],
        skills: {},
        test: ({ quests }) => ({
          isMet:
            quests != null &&
            (quests.includes("Regicide") ||
              quests.includes("Fairytale I - Growing Pains")),
          description:
            "Completed Regicide or started Fairtale II - Cure a Queen",
        }),
      },
      {
        description: "Kill the Thermonuclear smoke devil",
        quests: [],
        skills: { Slayer: 93 },
      },
      {
        description: "Have Pissy Scilla protect your magic tree",
        quests: [],
        skills: { Farming: 75 },
      },
      {
        description: "Use the advanced elven overpass cliffside shortcut",
        quests: ["Underground Pass"],
        skills: { Agility: 85 },
      },
      {
        description: "Equip any complete void set",
        quests: [],
        skills: {
          Prayer: 22,
          Attack: 42,
          Strength: 42,
          Defence: 42,
          Hitpoints: 42,
          Ranged: 42,
          Magic: 42,
        },
        test: ({ combatLevel }) => ({
          isMet: combatLevel != null && combatLevel >= 40,
          description: "Ability to play Pest Control",
        }),
      },
      {
        description:
          "Claim a Chompy bird hat from Rantz after registering at least 300 kills",
        quests: ["Big Chompy Bird Hunting"],
        skills: {},
      },
      {
        description: "Pickpocket an elf",
        quests: ["Mourning's End Part I"],
        skills: { Thieving: 85 },
      },
    ],
  },
};

export default diaries;
