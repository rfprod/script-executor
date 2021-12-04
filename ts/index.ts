type TInputArrayRecord = Record<string & number, string & number>;

const inputData = [
  {
    arr: [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 1, z: 1 },
      { x: 1, y: 1, z: 3 },
    ],
    keys: ['x', 'y'],
    expected: [
      { x: 1, y: 1 },
      { x: 1, y: 1, z: 3 },
    ],
  },
  {
    arr: [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 1, z: 1 },
      { x: 1, y: 1, z: 3 },
    ],
    keys: ['z'],
    expected: [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ],
  },
  {
    arr: [
      {
        2: 11,
        3: 39,
        4: 11,
        l: 25,
        d: 1,
        s: 18,
        w: 30,
        h: 45,
        i: 18,
        r: 47,
        p: 8,
        f: 33,
        q: 29,
        b: 13,
        c: 1,
        o: 45,
      },
      {
        2: 19,
        3: 30,
        4: 4,
        l: 4,
        d: 11,
        s: 27,
        w: 1,
        h: 28,
        i: 17,
        r: 4,
        p: 49,
        f: 28,
        q: 31,
        b: 44,
        c: 42,
        o: 30,
      },
      {
        2: 31,
        3: 24,
        4: 49,
        l: 19,
        d: 22,
        s: 29,
        w: 25,
        h: 15,
        i: 31,
        r: 9,
        p: 35,
        f: 18,
        q: 25,
        b: 41,
        c: 43,
        o: 29,
      },
      {
        2: 27,
        3: 7,
        4: 8,
        l: 47,
        d: 43,
        s: 5,
        w: 40,
        h: 36,
        i: 4,
        r: 26,
        p: 19,
        f: 14,
        q: 31,
        b: 23,
        c: 19,
        o: 41,
      },
      {
        2: 41,
        3: 44,
        4: 36,
        l: 11,
        d: 11,
        s: 21,
        w: 31,
        h: 35,
        i: 38,
        r: 24,
        p: 12,
        f: 20,
        q: 47,
        b: 11,
        c: 28,
        o: 25,
      },
      {
        2: 12,
        3: 27,
        4: 46,
        l: 7,
        d: 27,
        s: 1,
        w: 20,
        h: 41,
        i: 8,
        r: 9,
        p: 3,
        f: 17,
        q: 32,
        b: 18,
        c: 17,
        o: 14,
      },
      {
        2: 39,
        3: 33,
        4: 45,
        l: 13,
        d: 27,
        s: 5,
        w: 20,
        h: 37,
        i: 25,
        r: 37,
        p: 18,
        f: 8,
        q: 43,
        b: 3,
        c: 22,
        o: 14,
      },
      {
        2: 12,
        3: 27,
        4: 46,
        l: 7,
        d: 27,
        s: 1,
        w: 20,
        h: 41,
        i: 8,
        r: 9,
        p: 3,
        f: 17,
        q: 32,
        b: 18,
        c: 17,
        o: 14,
      },
      {
        2: 8,
        3: 48,
        4: 14,
        l: 27,
        d: 28,
        s: 49,
        w: 23,
        h: 16,
        i: 2,
        r: 17,
        p: 41,
        f: 19,
        q: 44,
        b: 39,
        c: 45,
        o: 38,
      },
      {
        2: 48,
        3: 43,
        4: 32,
        l: 38,
        d: 27,
        s: 38,
        w: 29,
        h: 7,
        i: 37,
        r: 5,
        p: 33,
        f: 46,
        q: 16,
        b: 13,
        c: 14,
        o: 11,
      },
      {
        2: 39,
        3: 40,
        4: 3,
        l: 42,
        d: 29,
        s: 11,
        w: 49,
        h: 7,
        i: 48,
        r: 31,
        p: 41,
        f: 30,
        q: 38,
        b: 41,
        c: 17,
        o: 1,
      },
      {
        2: 42,
        3: 28,
        4: 38,
        l: 20,
        d: 41,
        s: 21,
        w: 42,
        h: 29,
        i: 38,
        r: 40,
        p: 23,
        f: 3,
        q: 16,
        b: 41,
        c: 39,
        o: 28,
      },
      {
        2: 19,
        3: 8,
        4: 10,
        l: 35,
        d: 22,
        s: 48,
        w: 45,
        h: 16,
        i: 10,
        r: 29,
        p: 5,
        f: 14,
        q: 46,
        b: 38,
        c: 25,
        o: 26,
      },
      {
        2: 21,
        3: 5,
        4: 11,
        l: 47,
        d: 45,
        s: 26,
        w: 8,
        h: 11,
        i: 40,
        r: 0,
        p: 6,
        f: 6,
        q: 11,
        b: 8,
        c: 28,
        o: 8,
      },
      {
        2: 4,
        3: 9,
        4: 33,
        l: 1,
        d: 35,
        s: 38,
        w: 12,
        h: 10,
        i: 35,
        r: 34,
        p: 47,
        f: 44,
        q: 46,
        b: 4,
        c: 3,
        o: 36,
      },
      {
        2: 24,
        3: 43,
        4: 27,
        l: 24,
        d: 23,
        s: 13,
        w: 43,
        h: 1,
        i: 6,
        r: 43,
        p: 17,
        f: 32,
        q: 49,
        b: 33,
        c: 40,
        o: 22,
      },
      {
        2: 19,
        3: 38,
        4: 49,
        l: 17,
        d: 37,
        s: 4,
        w: 17,
        h: 39,
        i: 34,
        r: 41,
        p: 41,
        f: 28,
        q: 19,
        b: 3,
        c: 13,
        o: 19,
      },
      {
        2: 11,
        3: 20,
        4: 10,
        l: 48,
        d: 1,
        s: 38,
        w: 38,
        h: 6,
        i: 10,
        r: 45,
        p: 4,
        f: 0,
        q: 18,
        b: 29,
        c: 31,
        o: 17,
      },
      {
        2: 49,
        3: 36,
        4: 44,
        l: 24,
        d: 45,
        s: 22,
        w: 28,
        h: 5,
        i: 47,
        r: 4,
        p: 19,
        f: 26,
        q: 34,
        b: 2,
        c: 41,
        o: 44,
      },
      {
        2: 6,
        3: 22,
        4: 39,
        l: 8,
        d: 40,
        s: 33,
        w: 35,
        h: 12,
        i: 13,
        r: 31,
        p: 48,
        f: 36,
        q: 16,
        b: 49,
        c: 2,
        o: 8,
      },
      {
        2: 39,
        3: 33,
        4: 45,
        l: 13,
        d: 27,
        s: 5,
        w: 20,
        h: 37,
        i: 25,
        r: 37,
        p: 18,
        f: 8,
        q: 43,
        b: 3,
        c: 22,
        o: 14,
      },
      {
        2: 41,
        3: 44,
        4: 36,
        l: 11,
        d: 11,
        s: 21,
        w: 31,
        h: 35,
        i: 38,
        r: 24,
        p: 12,
        f: 20,
        q: 47,
        b: 11,
        c: 28,
        o: 25,
      },
      {
        2: 39,
        3: 33,
        4: 45,
        l: 13,
        d: 27,
        s: 5,
        w: 20,
        h: 37,
        i: 25,
        r: 37,
        p: 18,
        f: 8,
        q: 43,
        b: 3,
        c: 22,
        o: 14,
      },
    ],
    keys: [
      'l',
      'd',
      's',
      '4',
      'w',
      '3',
      'h',
      'd',
      'i',
      'r',
      'd',
      'd',
      '2',
      'p',
      'f',
      'i',
      'h',
      'q',
      'd',
      '4',
      'b',
      'c',
      's',
      'o',
      'r',
    ],
    expected: [
      {
        2: 41,
        3: 44,
        4: 36,
        l: 11,
        d: 11,
        s: 21,
        w: 31,
        h: 35,
        i: 38,
        r: 24,
        p: 12,
        f: 20,
        q: 47,
        b: 11,
        c: 28,
        o: 25,
      },
      {
        2: 12,
        3: 27,
        4: 46,
        l: 7,
        d: 27,
        s: 1,
        w: 20,
        h: 41,
        i: 8,
        r: 9,
        p: 3,
        f: 17,
        q: 32,
        b: 18,
        c: 17,
        o: 14,
      },
      {
        2: 39,
        3: 33,
        4: 45,
        l: 13,
        d: 27,
        s: 5,
        w: 20,
        h: 37,
        i: 25,
        r: 37,
        p: 18,
        f: 8,
        q: 43,
        b: 3,
        c: 22,
        o: 14,
      },
      {
        2: 12,
        3: 27,
        4: 46,
        l: 7,
        d: 27,
        s: 1,
        w: 20,
        h: 41,
        i: 8,
        r: 9,
        p: 3,
        f: 17,
        q: 32,
        b: 18,
        c: 17,
        o: 14,
      },
      {
        2: 39,
        3: 33,
        4: 45,
        l: 13,
        d: 27,
        s: 5,
        w: 20,
        h: 37,
        i: 25,
        r: 37,
        p: 18,
        f: 8,
        q: 43,
        b: 3,
        c: 22,
        o: 14,
      },
      {
        2: 41,
        3: 44,
        4: 36,
        l: 11,
        d: 11,
        s: 21,
        w: 31,
        h: 35,
        i: 38,
        r: 24,
        p: 12,
        f: 20,
        q: 47,
        b: 11,
        c: 28,
        o: 25,
      },
      {
        2: 39,
        3: 33,
        4: 45,
        l: 13,
        d: 27,
        s: 5,
        w: 20,
        h: 37,
        i: 25,
        r: 37,
        p: 18,
        f: 8,
        q: 43,
        b: 3,
        c: 22,
        o: 14,
      },
    ],
  },
];

class TestTask {
  private readonly input = inputData;

  private getInput(options: { index: number }) {
    return this.input[options.index];
  }

  private readonly assertEqualObjects = (
    obj1: Record<string, unknown>,
    obj2: Record<string, unknown>,
  ) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    const sameRootKeys = obj1Keys.map((key: string, index: number) => key === obj2Keys[index]);
    const sameRootValues = obj1Keys.map((key: string) => obj1[key] === obj2[key]);
    return (
      obj1Keys.length === obj2Keys.length &&
      !sameRootKeys.filter((item: boolean) => !item).length &&
      !sameRootValues.filter((item: boolean) => !item).length
    );
  };

  private readonly assertEqualArrays = (arr1: unknown[], arr2: unknown[]) => {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    const sameTypes = arr1.map(
      (item: unknown, index: number) => typeof item === typeof arr2[index],
    );
    return arr1Length === arr2Length && !sameTypes.filter((item: boolean) => !item).length;
  };

  constructor() {
    console.log('TestTask init');
    this.validateResults();
  }

  private validateResults() {
    const input1 = this.getInput({ index: 0 });
    console.log('input1', JSON.stringify(input1));
    const result1 = this.duplicated(input1.arr, input1.keys);
    console.log('result', JSON.stringify(result1));
    console.log('is result 1 correct, check 1', this.assertEqualArrays(input1.expected, result1));
    if (result1.length) {
      input1.expected.forEach((expectation: TInputArrayRecord, index: number) => {
        console.log(
          `is result 1 correct, check ${index}`,
          this.assertEqualObjects(expectation, result1[index]),
        );
      });
    }

    const input2 = this.getInput({ index: 1 });
    console.log('input2', JSON.stringify(input2));
    const result2 = this.duplicated(input2.arr, input2.keys);
    console.log('result2', JSON.stringify(result2));
    console.log('is result 2 correct', this.assertEqualArrays(input2.expected, result2));
    if (result2.length) {
      input2.expected.forEach((expectation: TInputArrayRecord, index: number) => {
        console.log(
          `is result 2 correct, check ${index}`,
          this.assertEqualObjects(expectation, result2[index]),
        );
      });
    }

    const input3 = this.getInput({ index: 2 });
    console.log('input3', JSON.stringify(input3));
    const result3 = this.duplicated(input3.arr, input3.keys);
    console.log('result3', JSON.stringify(result3));
    console.log('is result 3 correct', this.assertEqualArrays(input3.expected, result3));
    if (result3.length) {
      input3.expected.forEach((expectation: TInputArrayRecord, index: number) => {
        console.log(
          `is result 3 correct, check ${index}`,
          this.assertEqualObjects(expectation, result3[index]),
        );
      });
    }
  }

  public readonly duplicated = (arr: TInputArrayRecord[], keysInput: string[]) => {
    // console.log('arr', JSON.stringify(arr));
    // console.log('keys', JSON.stringify(keys));
    /**
     * remove duplicated keys
     */
    const keys = keysInput.reduce(
      (a: string[] | undefined, b) =>
        typeof a === 'undefined' ? [] : a.includes(b) ? a : a.concat(b),
      [],
    );
    // console.log('keys', JSON.stringify(keys));
    /**
     * prefill duplicated objects indicators
     */
    const duplicatedObjects = [...new Array(arr.length)].map((item, index: number) => false);
    // console.log('duplicatedObjects', JSON.stringify(duplicatedObjects));
    /**
     * actually find duplicates
     */
    for (let i = 0, max = arr.length; i < max - 1; i += 1) {
      const item = arr[i];
      // console.log('item', JSON.stringify(item));
      for (let j = i + 1; j < max; j += 1) {
        const next = arr[j];
        // console.log('next', JSON.stringify(next));
        const checker: boolean[] = [];
        keys?.forEach((key: string) => {
          if (item[key] !== next[key]) {
            checker.push(false);
          } else {
            checker.push(true);
          }
        });
        if (checker.length === keys?.length) {
          const duplicates = !checker.filter((item1: boolean) => !item1).length;
          if (duplicates) {
            duplicatedObjects[i] = true;
            duplicatedObjects[j] = true;
          }
        }
      }
    }
    /**
     * filter provided array based on found duplication indicators
     */
    const output = arr.filter((item, index: number) => duplicatedObjects[index]);
    return output;
  };
}

new TestTask();
