'use strict'


function hello (...args) {

    let selector = args
        .filter( (e) => typeof e === 'string' )
        .map ( (e) => e.trim())
        .find( (e) => /^(\.|#)/.test(e) )
    if (selector) selector.split(/([\.#]?[^\s#.]+)/ )
    console.log(selector)

    let attrs = args
        .find( (e) => Object.prototype.toString.apply(e) === '[object Object]' )
    console.log(attrs)

    let children = args.filter( (e) => e !== selector && e !== attrs )
        .reduce( (a, b) => a.concat(b), [])
    console.log(children)

}



// function classes (sel) {
//     return sel
//         .filter( (el) => el.startsWith('.') )
//         .map( (el) => el.replace('.', ''))
//         .join(' ')
// }

// classes('#dsda')

hello({}, 'DOSAO')

set
