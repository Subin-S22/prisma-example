import { PrismaClient } from "@prisma/client";
import express, { Express } from "express";

const app: Express = express();

const prisma = new PrismaClient();

app.listen(4000, async () => {
  console.log("server as started");
  await prisma.$connect;
  const post = await prisma.post.create({
    data: {
      header: "header",
      body: "body",
      email: "subin@gmail.com",
    },
  });
  console.log(post);
});
const arr = [{ key: 1 }, { key: 2 }, { key: 3 }];
//using map and variable
let sum = 0;
arr.map((value) => {
  sum += value.key;
});
//using reduce
arr.reduce((acc, val) => {
  return acc + val.key;
}, 0);

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4, 55];
const maxLength = Math.max(arr1.length, arr2.length);
let newArr = [];
for (let i = 0; i < maxLength; ++i) {
  if (arr1[i] && arr2[i]) newArr.push(arr1[i] + arr2[i]);
  else if (arr1[i]) newArr.push(arr1[i]);
  else newArr.push(arr2[i]);
}
