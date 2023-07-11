//============ Задайте правильні ts типи для класичних js; ===========================//
let age: number;
age = 50;
let userName: string;
userName = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

//========== Задайте тип для змінної, в яку можна зберегти будь-яке значення. ===========================//

let anything: any;
anything = -20;
anything = "Text";
anything = {};

//=============== Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом. ======================//

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

//================ Зробіть незмінний масив із суворо описаними типами. Масив для прикладу. =====================//

let person: [string, number];
person = ["Max", 21];

//============= Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY). ========================//

enum Load {
  LOADING,
  READY,
}

const page = {
  status: Load.LOADING,
};

if (page.status === Load.LOADING) {
  console.log("Page is loading...");
}
if (page.status === Load.READY) {
  console.log("Page loaded");
}

//=============== Створіть свій тип даних на основі наявних даних. ======================//

let union: string | number;

//=====================================//

let literal: "enable" | "disable";

//=====================================//

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//=====================================//

const page1: pageType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};
const page2: pageType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

type pageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
