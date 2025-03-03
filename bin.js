#!/usr/bin/env node

import { getRandomName, hello } from "./dist/index.js";

function main() {
  console.log(hello(getRandomName()));
}

main();
