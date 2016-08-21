const div: (a: number, b: number) => number
  = (a, b) => a / b

//  or...

// const div: {(a: number, b: number): number}
//   = (a, b) => a / b

export default div

//  or...

// export default function div(a: number, b: number): number {
//   return a / b
// }
