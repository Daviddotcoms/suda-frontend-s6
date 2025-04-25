export function randomColor(): string {
  const light = "9abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += light[Math.floor(Math.random() * 7)];
  }
  return color;
}
