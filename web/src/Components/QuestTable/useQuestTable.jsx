import { useEffect, useState } from "react";

import QuestData from "../../Data/questData.json";

const allQuests = QuestData.quests.map(q => ({ ...q, id: q.name }));

const useQuestTable = ({ players }) => {
    const [state, setState] = useState({
        page: 0,
        questsPerPage: 10,
        filter: null,
        quests: allQuests,
        totalQuests: allQuests.length
    });

    const { filter, pageSize, questsPerPage, page } = state;

    useEffect(() => setState((st) => {
        const filtered = allQuests
            .filter(q => filter == null || (q.name.match(filter) || q.description.match(filter)));

        return {
            ...st,
            quests: filtered.slice(page * questsPerPage, page * questsPerPage + questsPerPage),
            totalQuests: filtered.length
        };
    }), [filter, pageSize, questsPerPage, page]);

    const setFilter = (value) => setState((st) => ({
        ...st,
        filter: value ? new RegExp(value, "i") : null
    }));

    const setPageSize = (pageSize) => setState((st) => ({
        ...state,
        questsPerPage: pageSize < 1 ? allQuests.length : pageSize,
        page: 0 
    }));

    const setPage = (page) => setState((st) => ({ ...st, page: page }));

    return {
        ...state,
        setFilter,
        setPageSize,
        setPage
    }
};

export default useQuestTable;
