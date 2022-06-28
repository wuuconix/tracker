const { readFileSync } = require("fs")
const data = readFileSync(0, "utf-8") //得到stdin中传入的字符

console.log([...new Set(data.split(" "))].join(","))