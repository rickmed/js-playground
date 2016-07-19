
var myError = (message) => ({
    message: message,
    stack: (new Error()).stack
})


function hello () {
    throw myError('yeap')
}

try {
    hello()
} catch (e) {
    console.log(typeof e)
    console.log('HEEYYY', e)
}
