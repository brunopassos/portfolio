import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    colors:{
        primary:{
            50: "#01080E",
            100: "#011627",
            150: "#011221"
        },
        secondary:{
            50: "#607B96",
            100: "#3C9D93",
            150: "#4D5BCE",
            200: "#FFFFFF"
        },
        accent:{
            50: "#FEA55F",
            100: "#43D9AD",
            150: "#E99287",
            200: "#C98BDF"
        },
        lines: {
            50: "1E2D3D"
        },
        gradients:{
            50: "#4D5BCE",
            100: "#43D9AD"
        }
    }
});

export default Theme;
