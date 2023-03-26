const obj = {
    name: "Aabiskar",
    contact: "98080808080",
    address: "Sifal"
}

console.log(obj)
console.log(typeof obj)
console.log(obj.name)

//Convert to JSON
const json = JSON.stringify(obj)
console.log(json)
console.log(typeof json)
console.log(json.name)

//Convert back to object
const objAgain = JSON.parse(json)
console.log(objAgain)
console.log(typeof objAgain)
console.log(objAgain.name)