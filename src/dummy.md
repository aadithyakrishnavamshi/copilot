> app.css


```css
body {
margin: 0;
padding: 0;
font-family: Inter;
}
* {
box-sizing: border-box;
line-height: normal;
font-family: inherit;
margin: unset;
}
input {
background-color: transparent;
width: 100%;
}
input:focus {
outline: none;
}
a {
text-decoration: none;
display: block;
}
```

font.css

```css
@font-face {
font-display: swap;
font-style: normal;
src: url("/public/fonts/InterBold.ttf");
font-family: "Inter";
font-weight: 700;
}
@font-face {
font-display: swap;
font-style: normal;
src: url("/public/fonts/InterSemiBold.ttf");
font-family: "Inter";
font-weight: 600;
}
@font-face {
font-display: swap;
font-style: normal;
src: url("/public/fonts/InterRegular.ttf");
font-family: "Inter";
font-weight: 400;
}
@font-face {
font-display: swap;
font-style: normal;
src: url("/public/fonts/InterMedium.ttf");
font-family: "Inter";
font-weight: 500;
}
```


tailwind.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer base {
:root {
/*------color variables------*/
--black_900: #000000;
--black_900_3f: #0000003f;
--blue_gray_100_4f: #d9d9d94f;
--gray_100: #f6f6f6;
--green_100_91: #ccf2be91;
--green_400: #78be67;
--green_50: #e2f8da;
--light_green_a700: #50e51b;
--light_green_a700_01: #3adb1a;
--light_green_a700_02: #51ef1a;
--white_a700: #ffffff;
/*
------Shadow variables------*/
--shadow-xs: 0 4px 4px 0 #0000003f;
/
*------Border radius variables------*/
--radius-xs: 2px;
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-xl: 24px;
/*------Spacing variables------*/
--space-xs: 6px;
--space-sm: 8px;
--space-md: 10px;
--space-lg: 12px;
--space-xl: 16px;
--space-2x1: 28px;
}
}
```