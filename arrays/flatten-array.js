var myarray = [],
  myarray2 = []
var L = 100
for (var j = 0; j < 4; j++) {
  for (var i = 0; i < 4; i++) {
    myarray.push([L])
    L = L + 100
  }
  myarray2.push(myarray)
}
console.log(myarray)

// var array = '100,200,300,400,500,600,700,800,900,100,1100,1200,1300,1400,1500,1600'.split(',')
// var grouping = 4
// var result = []

// array.forEach(function (element, index) {
//   var group = index % grouping
//   var temp = result[group]

//   if (!Array.isArray(temp)) {
//     temp = []
//   }

//   temp.push(element)
//   result[group] = temp
// })

// console.log(result)
