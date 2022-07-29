import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import MapQuests from "./MapQuests";
import MapSkills from "./MapSkills";
import MapDiaries from "./MapDiaries";

const AccountContext = createContext({
  notNotThomas: null,
  isNotNotThomasLoading: false,
  isNotNotThomasError: false,
  notNotMike: null,
  isNotNotMikeLoading: false,
  isNotNotMikeError: false,
});

const getCombatLevel = (skills) => {
  if (skills == null) return 3;

  const getLevelFor = (skillName) =>
    skills[skillName]?.level == null ? 1 : Number(skills[skillName]?.level);

  const baseLevel =
    (getLevelFor("Defence") +
      getLevelFor("Hitpoints") +
      Math.floor(getLevelFor("Prayer") * 0.5)) /
    4;

  const meleeLevel = 0.325 * (getLevelFor("Attack") + getLevelFor("Strength"));

  const rangedLevel = 0.325 * Math.floor((getLevelFor("Ranged") * 3) / 2);

  const magicLevel = 0.325 * Math.floor((getLevelFor("Magic") * 3) / 2);

  return Math.floor(baseLevel + Math.max(meleeLevel, rangedLevel, magicLevel));
};

const useStats = (account) =>
  useQuery(
    account,
    async () => {
      const cancellationToken = axios.CancelToken;
      const cancellationSource = cancellationToken.source();

      const response = await axios(
        `${process.env.HISCORES_URL}?name=${account}`,
        {
          cancelToken: cancellationSource.token,
        }
      );

      const mapped = MapSkills(response.data.hiScores);

      return mapped;
    },
    {
      staleTime: Number(process.env.REFETCH_INTERVAL),
    }
  );

const useDiaries = () =>
  useQuery(
    "/diaries",
    async () => {
      const response = await axios(`${process.env.DIARIES_URL}`);

      const questData = MapDiaries(response.data);

      return questData;
    },
    { staleTime: Number(process.env.REFETCH_INTERVAL) }
  );

const useQuests = () =>
  useQuery(
    "/quests",
    async () => {
      const cancellationToken = axios.CancelToken;
      const cancellationSource = cancellationToken.source();

      const response = await axios(`${process.env.QUESTS_URL}`, {
        cancelToken: cancellationSource.token,
      });

      const questData = MapQuests(response.data);

      return questData;
    },
    { staleTime: Number(process.env.REFETCH_INTERVAL) }
  );

const useAccount = (account) => {
  const quests = useQuests();
  const diaries = useDiaries();
  const stats = useStats(account);

  return {
    name: account,
    quests: quests.data?.filter((q) => q[account]).map((q) => q.quest) ?? [],
    diaries:
      diaries.data
        ?.filter((d) => d.players.includes(account))
        .map((d) => d.description) ?? [],
    isLoading: quests.isLoading || stats.isLoading,
    isError: quests.isError || stats.isError,
    ...(stats.data ?? { skills: [], Overall: -1, bosses: [] }),
    combatLevel: getCombatLevel(stats.data?.skills),
  };
};

const AccountProvider = ({ children }) => {
  const {
    isLoading: isNotNotMikeLoading,
    isError: isNotNotMikeError,
    ...notNotMike
  } = useAccount("NotNotMike");

  const {
    isLoading: isNotNotThomasLoading,
    isError: isNotNotThomasError,
    ...notNotThomas
  } = useAccount("NotNotThomas");

  return (
    <AccountContext.Provider
      value={{
        notNotThomas,
        isNotNotThomasLoading,
        isNotNotThomasError,
        notNotMike,
        isNotNotMikeLoading,
        isNotNotMikeError,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

const useAccounts = () => useContext(AccountContext);

const usePlayer = (playerName) => {
  const context = useAccounts();

  const key = Object.keys(context).find(
    (key) => key.toLowerCase() === playerName.toLowerCase()
  );

  return context[key];
};

export { AccountProvider, useAccounts, usePlayer, useQuests, useDiaries };
