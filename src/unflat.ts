const { isArray } = Array
const { floor } = Math

export default function unflat<T, U = undefined>(
  value: readonly T[],
  size = 2,
  fill?: U,
): T[] | (T | U)[][] {
  if (!isArray(value)) {
    throw new Error(`value must be an array.`)
  }

  if (typeof size !== 'number') {
    throw new Error(`size must be a number.`)
  }

  if (size < 1) {
    return value as T[]
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
