import { useState, useReducer } from "react";

const initState = {
    letters: "",
    started: false,
    guess: "",
    bank: [],
    history: []
};

const reducer = (state, action) => {
    const newestLetter = action.guess ? action.guess[action.guess.length - 1] ?? "" : "";

    switch (action.type) {
        case "START":
            return {
                ...state,
                bank: state.letters.split(""),
                started: true
            };
        case "RESET":
            return {
                ...state,
                bank: [...state.letters],
                guess: ""
            }
        case "CLEAR":
            return initState;
        case "SHUFFLE":
            const randomized = [...state.bank].map(letter => ({ letter, n: Math.random()}));

            randomized.sort((a, b) => a.n > b.n);

            const result = randomized.map(({ letter }) => letter);

            return {
                ...state,
                bank: result
            }
        case "BANK/SET":
            return {
                ...state,
                letters: action.letters
            };
        case "GUESS/ADD":
            return reducer(state, {
                type: "GUESS/SET",
                guess: state.guess + action.letter
            })
        case "GUESS/SET":
            if (action.guess > state.guess) {
                // Don't allow invalid letters
                if (!state.bank.includes(newestLetter)) {
                    return state;
                }

                const firstMatch = state.bank.indexOf(newestLetter);

                return {
                    ...state,
                    guess: action.guess,
                    bank: [
                        ...state.bank.slice(0, firstMatch),
                        ...state.bank.slice(firstMatch + 1)
                    ]
                };
            } else if (action.guess < state.guess) {
                const removed = state.guess[state.guess.length - 1];

                return {
                    ...state,
                    guess: action.guess,
                    bank: [...state.bank, removed]
                }
            }

            return state;
        case "GUESS/REMOVE":
            const { index } = action;

            const letter = state.guess[index];
            return {
                ...state,
                guess: [...state.guess.substr(0, index), ...state.guess.substr(index+1)].join(""),
                bank: [...state.bank, letter]
            }
        case "HISTORY/ADD":
            if (state.guess.length != state.letters.length || state.history.includes(state.guess)) {
                return state;
            }

            return {
                ...state,
                guess: "",
                bank: state.letters.split(""),
                history: [
                    ...state.history,
                    state.guess
                ]
            };
    }
}

const useAnagramHelper = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const setBank = (letters) => dispatch({ type: "BANK/SET", letters });

    const setGuess = (guess) => dispatch({ type: "GUESS/SET", guess });

    const addLetter = (letter) => dispatch({ type: "GUESS/ADD", letter });

    const addHistory = (guess) => dispatch({ type: "HISTORY/ADD", guess })

    const start = () => dispatch({ type: "START" });

    const reset = () => dispatch({ type: "RESET" });

    const clear = () => dispatch({ type: "CLEAR" });

    const shuffle = () => dispatch({ type: "SHUFFLE" });

    const removeAt = (index) => dispatch({ type: "GUESS/REMOVE", index });

    return {
        ...state,
        setBank,
        setGuess,
        addLetter,
        addHistory,
        start,
        clear,
        reset,
        shuffle,
        removeAt
    };
}

export default useAnagramHelper;
