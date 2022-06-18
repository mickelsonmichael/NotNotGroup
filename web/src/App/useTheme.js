import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const useTheme = () => createTheme({
    palette: {
        primary: {
            main: "#444477",
            dark: "#333366",
        },
        secondary: {
            main: "#ececec"
        },
        text: {
            primary: "#FFFFFF"
        },
        white: {
            main: "#FFFFFF",
            backgroundColor: "transparent"
        },
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            "sans-serif"
        ].join(","),
        fontSize: 14
    },
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    "&::before": {
                        borderColor: "#ddd",
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: "#ddd",
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    background: "transparent"
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0, 0, 0, 0.4)"
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(25, 25, 25, 0.4)"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "rgba(155, 155, 155)",
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(25, 25, 25)"
                }
            }
        },
        MuiNativeSelect: {
            styleOverrides: {
                icon: {
                    color: "#ddd",
                }
            }
        }
    }
});

export default useTheme;
