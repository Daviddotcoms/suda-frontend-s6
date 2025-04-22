export function sleep(milliseconds: number): Promise<boolean> {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, milliseconds);
  });
}
