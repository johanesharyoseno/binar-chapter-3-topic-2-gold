function isPasswordCorrect (password) {
    return new Promise ((resolve, reject)=> {
        console.log ('Password', password)
        if (password !== '123456')
        return reject ("wrong password!")
        resolve ("password is correct!")
    })
}

isPasswordCorrect ('123456')
.then (resolve => console.log (resolve))
.catch (reject =>console.error(reject))

isPasswordCorrect('123458')
.then(resolve => console.log (resolve))
.catch (reject => console.error (reject))