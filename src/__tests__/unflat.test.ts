/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import assert from 'node:assert'
import unflat from '../unflat.js'

describe('default size', () => {
  ;[
    {
      description: 'should work with empty array',
      expected: [],
      value: [],
    },

    {
      description: 'should work with array with one item',
      expected: [['a', undefined]],
      value: ['a'],
    },

    {
      description: 'should work with array with two items',
      expected: [['a', 1]],
      value: ['a', 1],
    },

    {
      description: 'should work with array with three items',
      expected: [
        ['a', 1],
        ['c', undefined],
      ],
      value: ['a', 1, 'c'],
    },

    {
      description: 'should work with array and multiple types',
      expected: [
        ['a', 1],
        [true, {}],
        [[], 1n],
        [undefined, null],
      ],
      value: ['a', 1, true, {}, [], 1n, undefined, null],
    },

    {
      description: '... todo ...',
      expected: [[[1], undefined]],
      value: [[1]],
    },

    {
      description: '... todo ...',
      expected: [[[1], [2]]],
      value: [[1], [2]],
    },

    {
      description: '... todo ...',
      expected: [[[1][2], [3][4]]],
      value: [[1][2], [3][4]],
    },
  ].forEach(({ description, expected, value }) => {
    it(description, () => {
      const result = unflat(value)

      assert.deepStrictEqual(result, expected)
    })
  })
})

describe('size param', () => {
  ;[
    {
      description: '...',
      expected: [],
      size: 0,
      value: [],
    },

    {
      description: 'should work with empty aray and size 1',
      expected: [],
      size: 1,
      value: [],
    },

    {
      description: 'should work with empty array and size 2',
      expected: [],
      size: 2,
      value: [],
    },

    {
      description: '...',
      expected: ['a'],
      size: 0,
      value: ['a'],
    },

    {
      description: '...',
      expected: [['a']],
      size: 1,
      value: ['a'],
    },

    {
      description: '...',
      expected: [['a', undefined]],
      size: 2,
      value: ['a'],
    },

    {
      description: 'should work with array with 3 items and size 3',
      expected: [['a', 1, 'c']],
      size: 3,
      value: ['a', 1, 'c'],
    },

    {
      description: 'should work with array with 5 items and size 3',
      expected: [
        ['a', 'b', 'c'],
        ['d', 'e', undefined],
      ],
      size: 3,
      value: ['a', 'b', 'c', 'd', 'e'],
    },

    {
      description: 'should work with array with 6 items and size 3',
      expected: [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
      ],
      size: 3,
      value: ['a', 'b', 'c', 'd', 'e', 'f'],
    },

    {
      description: 'should work with empty array and size -1',
      expected: [],
      size: -1,
      value: [],
    },
  ].forEach(({ description, expected, value, size }) => {
    it(`should return ${description}`, () => {
      const result = unflat(value, size)

      assert.deepStrictEqual(result, expected)
    })
  })
})

describe('exceptions', () => {
  ;[
    {
      description: 'should throw exception if value is not an array',
      value: {},
    },

    {
      description: 'should throw exception if size is null',
      size: null,
      value: [],
    },

    {
      description: 'should throw exception if size is not a number',
      size: '6',
      value: [],
    },
  ].forEach(({ description, value, size }) => {
    it(description, () => {
      // eslint-disable-next-line
      // @ts-ignore
      assert.throws(() => unflat(value, size))
    })
  })
})
