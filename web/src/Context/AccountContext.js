import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import CompletedQuests from "../Data/completedQuests.json";

import MapSkills from "./MapSkills";

const AccountContext = createContext({
    notNotThomas: null,
    isNotNotThomasLoading: false,
    isNotNotThomasError: false,
    notNotMike: null,
    isNotNotMikeLoading: false,
    isNotNotMikeError: false
});

const useAccount = (account) => useQuery(account, async () => {
    const cancellationToken = axios.CancelToken;
    const cancellationSource = cancellationToken.source();

    const response = await axios(`${process.env.HISCORES_URL}?name=${account}`, {
        cancelToken: cancellationSource.token
    });

    const mapped = MapSkills(response.data.hiScores);

    return {
        ...mapped,
        quests: CompletedQuests[account.toLowerCase()],
        cancel: () => cancellationSource.cancel("Query was canceled by React Query.")
    }
}, {
    staleTime: Number(process.env.REFETCH_INTERVAL)
});

const AccountProvider = ({ children }) => {

    const { data: notNotMike, isLoading: isNotNotMikeLoading, isError: isNotNotMikeError } = useAccount("NotNotMike");

    const { data: notNotThomas, isLoading: isNotNotThomasLoading, isError: isNotNotThomasError } = useAccount("NotNotThomas")

    return (
        <AccountContext.Provider value={{
            notNotThomas,
            isNotNotThomasLoading,
            isNotNotThomasError,
            notNotMike,
            isNotNotMikeLoading,
            isNotNotMikeError
        }}>
            {children}
        </AccountContext.Provider>
    )
};

const useAccounts = () => useContext(AccountContext);

export {
    AccountProvider,
    useAccounts
};
