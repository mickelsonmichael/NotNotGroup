import { useEffect, useMemo, useState } from "react";

import QuestData from "../../Data/questData.json";

const allQuests = QuestData.quests.map(q => ({ ...q, id: q.name }));

const baseFilterOptions = [
    {
        label: "All Ready",
        value: "allReady",
        fn: (quests, players) => quests.filter(
            quest => players.every(player =>
                !player.quests.includes(quest.name)
                && quest.skills.every(skill => player.skills[skill.name].level >= skill.level)
                && quest.quests.every(qp => player.quests.includes(qp))
            )
        )
    },
    {
        label: "Any Ready",
        value: "anyReady",
        fn: (quests, players) => quests.filter(
            quest => players.some(player =>
                !player.quests.includes(quest.name)
                && quest.skills.every(skill => player.skills[skill.name].level >= skill.level)
                && quest.quests.every(qp => player.quests.includes(qp)))
        )
    },
    {
        label: "None Ready",
        value: "noneReady",
        fn: (quests, players) => quests.filter(
            quest => players.every(player =>
                !player.quests.includes(quest.name)
                && (quest.skills.some(sk => player.skills[sk.name].level < sk.level)
                    || quest.quests.some(qp => !player.quests.includes(qp))))
        )
    },
    {
        label: "All Done",
        value: "allDone",
        fn: (quests, players) => quests.filter(
            quest => players.every(player =>
                player.quests.includes(quest.name)
            )
        )
    },
    {
        label: "Any Done",
        value: "anyDone",
        fn: (quests, players) => quests.filter(
            quest => players.some(player =>
                player.quests.includes(quest.name)
            )
        )
    },
    {
        label: "None Done",
        value: "noneDone",
        fn: (quests, players) => quests.filter(
            quest => players.every(player =>
                !player.quests.includes(quest.name)
            )
        )
    }
]

const useQuestTable = (players) => {
    const [state, setState] = useState({
        page: 0,
        questsPerPage: 10,
        filter: null,
        quests: allQuests,
        totalQuests: allQuests.length,
        selectedFilter: null
    });

    const { filter, pageSize, questsPerPage, page, selectedFilter } = state;

    useEffect(() => setState((st) => {
        let filtered = allQuests
            .filter(q =>
                (filter == null || (q.name.match(filter) || q.description.match(filter)))
            );

        if (selectedFilter) {
            filtered = selectedFilter.fn(filtered, players);
        }

        return {
            ...st,
            quests: filtered.slice(page * questsPerPage, page * questsPerPage + questsPerPage),
            totalQuests: filtered.length
        };
    }), [filter, pageSize, questsPerPage, page, selectedFilter]);

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

    const setSelectedFilter = (filter) => setState((st) => ({
        ...st,
        selectedFilter: filterOptions.find(f => f.value === filter),
        page: 0
    }));

    const filterOptions = useMemo(() => {
        const ops = ([
            ...baseFilterOptions,
            ...players.map(player => ([{
                label: `${player.name} Ready`,
                value: `${player.name}Ready`,
                fn: (quests) => quests.filter(
                    quest =>
                        !player.quests.includes(quest.name)
                        && quest.skills.every(skill => player.skills[skill.name].level >= skill.level)
                        && quest.quests.every(qp => player.quests.includes(qp))
                )
            }, {
                label: `${player.name} Not Ready`,
                value: `${player.name}NotReady`,
                fn: (quests) => quests.filter(
                    quest =>
                        !player.quests.includes(quest.name)
                        && (quest.skills.some(skill => player.skills[skill.name].level < skill.level)
                            || quest.quests.some(qp => !player.quests.includes(qp)))
                )
            },
            {
                label: `${player.name} Done`,
                value: `${player.name}Done`,
                fn: (quests) => quests.filter(
                    quest => player.quests.includes(quest.name)
                )
            }])).flat(1)
        ]);

        ops.sort((a, b) => (a.label > b.label) ? 1 : ((b.label > a.label ? -1 : 0)));

        return ops;
    }, [players]);

    return {
        ...state,
        setFilter,
        setPageSize,
        setPage,
        setSelectedFilter,
        filterOptions
    }
};

export default useQuestTable;
