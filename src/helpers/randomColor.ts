import { preference } from "./colorSchemePreference";

export function randomColor(): string {
  let colorScheme = "9abcdef";
  if (!preference) colorScheme = "012345678";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorScheme[Math.floor(Math.random() * 7)];
  }
  return color;
}
