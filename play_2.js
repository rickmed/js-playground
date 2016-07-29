'use strict'

const obj = {
  mandatory (fn) {
    const msg = `Missing ${fn.name} call`
    throw new Error(msg)
  }
}

function hello ({
  weight = obj.mandatory(),
  name = 'Rick',
  position: {x = 4, y = 10} = {}
} = {}) {
  console.log(name, weight, x, y)
  return weight
}

class HelloMessage extends React.Component {

  async funcName() {
    const me = await something
    return me
  }

  render() {
    return <div>Hello {this.funcName}</div>
  }
}

ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode)

function template (title = 'My title', link, name) {
  return {
    template: `
      <html>
        <head>
          <title>${title}</title>
          <link rel="stylesheet" href=${link} />
        </head>
        <body>
          <p>Hello ${name} </p>
          </div>
        </body>
      </html>
    `
  }
}

template()
