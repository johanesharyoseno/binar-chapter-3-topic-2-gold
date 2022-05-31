let isStudioKebakaran = true;

let promise = new Promise ((resolve, reject)=> {
    setTimeout(() => {
    if (isStudioKebakaran) {reject ("maaf studio kebakaran, lagu tidak bisa diproduksi")
} else {
        resolve ("lagu baru akan keluar besok")
    }
},1000)
})

promise.then ((result) => {
    console.log (result)
}).catch ((error)=> {
    console.log (error)
})