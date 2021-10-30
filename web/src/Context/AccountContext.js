import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import MapSkills from "./MapSkills";

const hourMS = 1000 * 60 * 60;

const AccountContext = createContext({
    notNotThomas: null,
    isNotNotThomasLoading: false,
    isNotNotThomasError: false,
    notNotMike: null,
    isNotNotMikeLoading: false,
    isNotNotMikeError: false
});

const hiScoresUrl = "https://mickelsonosrs.azurewebsites.net/api/GetHiScores"

const useAccount = (account) => useQuery(account, async () => {
    const cancellationToken = axios.CancelToken;
    const cancellationSource = cancellationToken.source();

    const response = await axios(`${hiScoresUrl}?name=${account}`, {
        cancelToken: cancellationSource.token
    });

    const mapped = MapSkills(response.data.hiScores);

    return {
        ...mapped,
        cancel: () => cancellationSource.cancel("Query was canceled by React Query.")
    }
}, {
    staleTime: hourMS
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
