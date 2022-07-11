const suma = (a,b) => {
    return a + b;
}

const checks = [
    {a:3,b:1, result : 4},
    {a:4,b:2, result : 6},
    {a:0,b:0, result : 0},
    {a:1,b:1, result : 2}
]

checks.forEach( (check) =>{
    const { a, b, result } = check

    console.assert(
        suma(a,b) === result, 
        `The sum between ${a} and ${b} expected to be ${result}`
        )
})

console.log(`${checks.length} checks performed...`)

