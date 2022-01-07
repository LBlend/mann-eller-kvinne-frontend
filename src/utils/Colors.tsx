const root = document.querySelector(":root");

const defaults = {
  background: "hsl(250, 20%, 10%)",
  text: "white",
  link: "hsl(40, 100%, 50%)",
  linkHover: "hsl(40, 100%, 70%)",
};

export const setDefaultColors = () => {
  root?.style?.setProperty("--background-color", defaults.background);
  root?.style?.setProperty("--text-color", defaults.text);
  root?.style?.setProperty("--link-color", defaults.link);
  root?.style?.setProperty("--link-color-hover", defaults.linkHover);
};

export const setFemaleColors = () => {
  root?.style?.setProperty("--background-color", "hsl(350 50% 50%)");
  root?.style?.setProperty("--text-color", "white");
  root?.style?.setProperty("--link-color", "hsl(60 100% 85%)");
  root?.style?.setProperty("--link-color-hover", "hsl(165 100% 85%)");
};

export const setMaleColors = () => {
  root?.style?.setProperty("--background-color", "hsl(190 50% 50%)");
  root?.style?.setProperty("--text-color", "hsl(0 0% 15%)");
  root?.style?.setProperty("--link-color", "hsl(275 100% 20%)");
  root?.style?.setProperty("--link-color-hover", "hsl(250 100% 30%)");
};
