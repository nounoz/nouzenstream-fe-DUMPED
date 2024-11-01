import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        darkGray: {
          "50": "#fafafa",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
        primary: {
          "50": "#fff0f1",
          "100": "#ffdee0",
          "200": "#ffc3c6",
          "300": "#ff999e",
          "400": "#ff5e66",
          "500": "#ff2c37",
          "600": "#e50914",
          "700": "#cf0610",
          "800": "#ab0911",
          "900": "#8d0f15",
          "950": "#4d0206",
        },
      },
      fontFamily: {
        sans: ["Manrope"],
        gothic: ["Dela Gothic One", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
      height: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
      width: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
      maxHeight: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
      maxWidth: {
        "100": "28rem",
        "110": "32rem",
        "128": "38rem",
        "136": "46rem",
        "138": "48rem",
        "142": "52rem",
        "148": "58rem",
        "158": "76rem",
        "186": "94rem",
        "192": "96rem",
        "200": "100rem",
        "210": "110rem",
      },
    },
  },
};
