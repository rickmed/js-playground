'use strict'

// references with promitives are set by value

function hello () {
    let driver = 'default'
    yes(driver)
    console.log(driver)

}
hello()

function yes (arg) {
    arg = 3
    return arg
}


// references with not primitives are set by reference

(function updatePrices () {

    let wb = // wb is a reference to a new object created with {}
        { a: // a is a reference to a newly/different created object with {}
            { b: // b IDEM
                {c: 1}
            }
        }
    console.log(wb)
    hello1(wb.a.b) // a unique object passed to hello1
// passing the whole value means hello1 has access to all the references in
// the above reference chain

    hello5(wb)
    console.log(wb)
})()

function hello1 (obj) {
    obj.c = 4
}

function hello5 (obj) {
    obj.a = undefined
}
