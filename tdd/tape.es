import test from 'tape'
import add1 from './features.es'
import expect from 'expect'

test('The add method', function(test) {
  const expected = 5
  const actual = add1(4)
  test.equal(actual, expected, 'Should add one the input')
  test.end()
})

// errors
test('The add method', function(test) {
  const expected = 6
  const actual = add1(4)
  test.equal(actual, expected, 'Should add one the input')
  test.end()
})


// using a custom assert, error messages will not be that friendly
test('The add method', function(test) {
  expect(add1(4)).toBe(5,
    'Should add one the input')
  test.end()
  // if using a custom library the optional message won't appear until
  // it errs
})


/*
Eric Elliot template
*/
// import test from 'tape';
// import compose from '../source/compose';

// test('Compose function output type', assert => {
//   const actual = typeof compose();
//   const expected = 'function';

//   assert.equal(actual, expected,
//     'compose() should return a function.');

//   assert.end();
// });

// test('What component aspect are you testing?', assert => {
//   const actual = 'What is the actual output?';
//   const expected = 'What is the expected output?';

//   assert.equal(actual, expected,
//     'What should the feature do?');

//   assert.end();
// });