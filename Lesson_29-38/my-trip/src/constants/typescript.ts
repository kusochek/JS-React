export const firstName: string = 'SomeName';
export const userAge: number = 12;
export const isAdult: boolean = userAge >= 18;
// export const a: null = null;
// export const b: undefined = undefined;
export const money: bigint = 1283874387463874n;
export const ind: symbol = Symbol('');

let canSellAlcohol: boolean | null | undefined = null;

if (isAdult) canSellAlcohol = true;
console.log(canSellAlcohol);

export const values: number[] = [1, 2, 3, 4, 5, 6]; // !!!BETTER!!!!
export const names: Array<string> = ['Olha', 'Oleksandra', 'David'];

type ChildUser = {
  firstName: string;
  age: number;
  visitChildrenGarden?: boolean;
};

// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   hasPet: boolean;
//   child: ChildUser;
// };

// export const user: User = {
//   firstName: 'Olha',
//   lastName: 'Zhuk',
//   age: 26,
//   hasPet?: true,
//   child: {
//     firstName: 'Pasha',
//     age: 1,
//   },
// };

// // function getYearOfBirth(child: ChildUser | undefined): number | null {
// function getYearOfBirth(child?: ChildUser): number | null {
//   if (child) {
//     return 2025 - child.age;
//   }

//   return null;
// }

// getYearOfBirth(user.child);

// export const userList: User[] = [user, user];

// export function getDifferent(): void {
//   const diff = user.age - user.child.age;
//   console.log(diff);
// }

// any, unknown, never

// type AnotherUser = Partial<User>;
// type AnotherUser = Omit<User, 'firstName' | 'lastName'>; // { age, hasPet, child }
// type AnotherUser = Pick<User, 'firstName' | 'lastName'>; // { firstName, lastName }
// type AnotherUser = Required<User>;
// type AnotherUser = Readonly<User>;

// type UserWithClientAccount = User & {
//   clientAccountId: number;
// }

type Parent = {
  firstName: string;
  lastName: string;
  age: number;
  hasPet: boolean;
  child: ChildUser;
};

type Adult = {
  firstName: string;
  lastName: string;
  age: number;
  university: boolean;
};

const user: Parent = {
  firstName: 'Olha',
  lastName: 'Zhuk',
  age: 26,
  hasPet: true,
  child: {
    firstName: 'Pasha',
    age: 1,
  },
};

const student: Adult = {
  firstName: 'Kolya',
  lastName: 'Lopuhin',
  age: 19,
  university: true,
};

function getYearOfBirth<T extends { age: number }>(person: T): number {
  return 2025 - person.age;
}

getYearOfBirth<ChildUser>(user.child);
getYearOfBirth<Parent>(user);
getYearOfBirth<Adult>(student);
