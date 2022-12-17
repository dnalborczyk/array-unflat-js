const { isArray } = Array
const { floor } = Math

export default function unflat<T, U = undefined>(
  value: readonly T[],
  size = 2,
  fill?: U,
): (T | U)[][] {
  if (!isArray(value)) {
    throw new Error(`value parameter must be an array.`)
  }

  if (typeof size !== 'number' || size < 1) {
    throw new Error(`size parameter must be a positive number.`)
  }

  const unflattened: (T | U)[][] = []

  for (let i = 0; i < value.length; i += floor(size)) {
    const slice = value.slice(i, i + size) as (T | U)[]

    for (; size - slice.length; ) {
      slice.push(fill as T | U)
    }

    unflattened.push(slice)
  }

  return unflattened
}
