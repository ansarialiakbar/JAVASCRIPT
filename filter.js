// the filter() method is used to create a new array filled with elements that pass a test provided by a function 
const heros = ["shaktiman", "doga",  "maniraj", "nagraj"]
const heroswithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})

    console.log(heroswithRaj);