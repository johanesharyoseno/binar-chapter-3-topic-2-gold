function p1() {
    console.log ('p1 done')
}

function p2 () {
    //setTimeout or delay for async simulation
    setTimeout(
        function() {
            console.log ('p2 done')
        },100
    )
        }
function p3 () {
    console.log ('p3 done')
}

p1()
p2()
p3()