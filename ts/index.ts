import * as colors from 'colors';

import { inputData, TInputArrayRecord } from './input-data';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TestModule {
  export class TestTask {
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
      console.log(colors.green('TestModule: TestTask init'));
      this.validateResults();
    }

    private validateResults() {
      const input1 = this.getInput({ index: 0 });
      console.log('input1', JSON.stringify(input1));
      const result1 = this.duplicated(input1.arr, input1.keys);
      console.log(colors.yellow('result'), JSON.stringify(result1));
      console.log(
        colors.yellow('is result 1 correct, check 1'),
        this.assertEqualArrays(input1.expected, result1),
      );
      if (result1.length) {
        input1.expected.forEach((expectation: TInputArrayRecord, index: number) => {
          console.log(
            colors.yellow(`is result 1 correct, check ${index}`),
            this.assertEqualObjects(expectation, result1[index]),
          );
        });
      }

      const input2 = this.getInput({ index: 1 });
      console.log('input2', JSON.stringify(input2));
      const result2 = this.duplicated(input2.arr, input2.keys);
      console.log(colors.yellow('result2'), JSON.stringify(result2));
      console.log(
        colors.yellow('is result 2 correct'),
        this.assertEqualArrays(input2.expected, result2),
      );
      if (result2.length) {
        input2.expected.forEach((expectation: TInputArrayRecord, index: number) => {
          console.log(
            colors.yellow(`is result 2 correct, check ${index}`),
            this.assertEqualObjects(expectation, result2[index]),
          );
        });
      }

      const input3 = this.getInput({ index: 2 });
      console.log('input3', JSON.stringify(input3));
      const result3 = this.duplicated(input3.arr, input3.keys);
      console.log(colors.yellow('result3'), JSON.stringify(result3));
      console.log(
        colors.yellow('is result 3 correct'),
        this.assertEqualArrays(input3.expected, result3),
      );
      if (result3.length) {
        input3.expected.forEach((expectation: TInputArrayRecord, index: number) => {
          console.log(
            colors.yellow(`is result 3 correct, check ${index}`),
            this.assertEqualObjects(expectation, result3[index]),
          );
        });
      }
    }

    public readonly duplicated = (arr: TInputArrayRecord[], keysInput: string[]) => {
      // console.log('arr', JSON.stringify(arr));
      // console.log('keys', JSON.stringify(keys));
      /*
       * remove duplicated keys
       */
      const keys = keysInput.reduce(
        (a: string[], b) => (!Boolean(a) ? [] : a.includes(b) ? a : a.concat(b)),
        [],
      );
      // console.log('keys', JSON.stringify(keys));
      /*
       * prefill duplicated objects indicators
       */
      const duplicatedObjects = [...new Array(arr.length)].map((item, index: number) => false);
      // console.log('duplicatedObjects', JSON.stringify(duplicatedObjects));
      /*
       * actually find duplicates
       */
      for (let i = 0, max = arr.length; i < max - 1; i += 1) {
        const item = arr[i];
        // console.log('item', JSON.stringify(item));
        for (let j = i + 1; j < max; j += 1) {
          const next = arr[j];
          // console.log('next', JSON.stringify(next));
          const checker: boolean[] = [];
          keys.forEach((key: string) => {
            if (item[key] !== next[key]) {
              checker.push(false);
            } else {
              checker.push(true);
            }
          });
          if (checker.length === keys.length) {
            const duplicates = !checker.filter((item1: boolean) => !item1).length;
            if (duplicates) {
              duplicatedObjects[i] = true;
              duplicatedObjects[j] = true;
            }
          }
        }
      }
      /*
       * filter provided array based on found duplication indicators
       */
      const output = arr.filter((item, index: number) => duplicatedObjects[index]);
      return output;
    };
  }
}
