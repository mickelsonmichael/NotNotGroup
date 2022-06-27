import { Box, Button, Input } from "@mui/material";
import ArrowDownIcon from "@mui/icons-material/ArrowDownwardRounded"
import CheckIcon from "@mui/icons-material/Check"
import React from "react";

import useAnagramHelper from "./useAnagramHelper";
import "./AnagramHelper.css";

const AnagramHelper = () => {
    const {
        letters,
        started,
        bank,
        guess,
        history,
        setBank,
        setGuess,
        addLetter,
        addHistory,
        start,
        reset
    } = useAnagramHelper();

    if (!started) {
        return (
            <Box display="flex" flexDirection="row">
                <Input
                    value={letters}
                    fullWidth
                    sx={{ marginRight: "1rem" }}
                    onChange={({ target: { value } }) => setBank(value)}
                    placeholder="Enter clue letters"
                />
                <Button
                    variant="contained"
                    color="info"
                    onClick={start}
                    disabled={letters.length < 1}
                >
                    <CheckIcon alt="Start" title="Start" />
                </Button>
            </Box>
        )
    }

    return (
        <div style={{ textAlign: "center" }}>
            <ul className="word-bank">
                {bank.map((l, i) => (
                    <li
                        key={`${l}-${i}`}
                        className="word-bank__letter"
                        onClick={() => addLetter(l)}
                        role="button"
                    >
                        {l}
                    </li>
                ))}
            </ul>

            <Button
                variant="contained"
                color="secondary"
                onClick={reset}
            >
                Reset
            </Button>

            <div style={{ marginTop: "2rem" }}>
                <Input
                    sx={{ marginRight: "1rem" }}
                    value={guess}
                    onChange={({ target: { value } }) => setGuess(value)}
                    placeholder="Enter guess"
                />
                <Button
                    variant="contained"
                    color="info"
                    onClick={addHistory}
                    disabled={bank.length > 0}
                >
                    <ArrowDownIcon />
                </Button>
            </div>

            <ul className="word-history">
                {history.map((l, i) => (
                    <li
                        key={`${l}-${i}`}
                        className="word-history__word"
                    >
                        {l}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default AnagramHelper;
