export const getCenter = ({ height, width, x, y }: DOMRect) => [
  x + width / 2,
  y + height / 2,
];

export const getRndInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
