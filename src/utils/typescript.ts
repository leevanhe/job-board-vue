export type Nullish<T> = T | null | undefined;

export function isPresent<T>(value: Nullish<T>): value is T {
  return value !== null && value !== undefined;
}

export function present<T>(value: Nullish<T>, message = 'value not present'): T {
  if (isPresent(value)) {
    return value;
  } else {
    throw new Error(message);
  }
}
