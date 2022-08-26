const languages = {
    fra: "French",
    kon: "Kikongo",
    lin: "Lingala",
    lua: "Tshiluba",
    swa: "Swahili"
    }

const entries = Object.entries(languages);
console.log(entries);

const entries2 = Object.entries(languages).forEach(([key,value]) =>{
  	console.log(key)
    console.log(value)
})