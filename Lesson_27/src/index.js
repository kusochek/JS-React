import dayjs from "dayjs";
import getUserFullName from "./modules/module.js";
import { user } from "./modules/variables.js";
// import http from "node:url";

// node.js
// jquery
// global
// dev-dependencies

const { firstName, lastName } = user;
const data = '01-09-2022';
const date = dayjs(data).toDate();

const fullAnnasName = getUserFullName(firstName, lastName);
console.log(fullAnnasName);
console.log(date);
console.log(date.getTime())

// console.log(http);
