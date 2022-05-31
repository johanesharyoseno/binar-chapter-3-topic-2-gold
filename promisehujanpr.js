let ishujan = true;

let promise = new Promise ((resolve, reject)=> {
    setTimeout(() => {
    if (ishujan) {reject ("tidak ada pr")
} else {
        resolve ("ada pr")
    }
},1000)
})

promise.then ((result) => {
    console.log (result)
}).catch ((error)=> {
    console.log (error)
})