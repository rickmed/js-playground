// ava runner configuration is in package.json
// it supports babel using your babelrc
import test from 'ava'
import add1 from './features.es'

// basic
test('My Test 1: The add method should add 1', t => {
  const expected = 5
  const actual = add1(4)
  t.is(actual, expected)
})


// the function name will be used in reporting
test('My Test 2: description', function myTestFunc(t) {
  t.is(add1(4), 6, 'Additional info here')
  // the message only shows on error to help you
  // but ava error reporting is too powerful so we don't need it
})


// plan tests. useful when you have loops or callbacks to check
// the number of tests where correctly executed
test('My Test 3 will fail', t => {
  t.plan(4)

  for (let i = 0; i < 3; i++) {
    t.true(i < 3)
  }
})

// skip test (useful to defer in dev if test is too complex)
test.skip('My Test 4: will not be run', t => {
  t.fail()
})


// todos
test.todo('My Test 5: is a todo will think about writing this later')


// expected to fail to not break the overal output
test.failing(`My Test 6: will fail but won't break the process`, t => {
  t.fail() // test will count as passed
})
// expected to fail to not break the overal output
test.fail(`It will fail but not break the test run`, t => {
})
