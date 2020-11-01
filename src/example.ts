type Concat = (s1: string, s2: string) => string;

type MyHometask = {
  readonly howIDoIt: string;
  simeArray: Array<string | number>;
  withData?: MyHometask[];
};

const MyHometask: MyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyArray<T> {
  [N: number]: T;

  reduce<A = T>(
    reducer: (acc: A, item: T, i: number, arr: MyArray<T>) => A,
    acc?: A,
  ): A;
}

const myNums: MyArray<number> = [1, 2, 3];

const sum = myNums.reduce((acc, item) => acc + item);
const sum2 = myNums.reduce((acc, item) => acc + item, 0);
