var inspector = require('schema-inspector')

var inspector = require('schema-inspector')

// Data that we want to sanitize and validate
var data = {
    firstname: 'sterling  ',
    lastname: '  archer',
    jobs: 'Special agent, cocaine Dealer',
    email: 'NEVER!',
}


var validation = {
    type: 'object',
    properties: {
        firstname: { type: 'string', minLength: 1 },
        lastname: { type: 'string', minLength: 1 },
        jobs: {
            type: 'array',
            items: { type: 'string', minLength: 1 }
        },
        email: { type: 'string', pattern: 'email' }
    }
}
const result = inspector.validate(validation, data)
if (!result.valid) {

  console.log(result.format())
}
