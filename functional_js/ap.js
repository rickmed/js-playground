/* eslint-disable */

/*
Applicative Functors
*/


/*
Parallel async
*/

// Helpers:
// ==============
//  $ :: String -> IO DOM
var $ = function(selector) {
  return new IO(function() { return document.querySelector(selector)});
}

//  getVal :: String -> IO String
var getVal = compose(map(_.prop('value')), $);

// Example:
// ===============
//  signIn :: String -> String -> Bool -> User
var signIn = curry(function(username, password, remember_me) {
/* signing in */
})

// not the last IO.of (it needs to be "lifted") so all args match IO type
IO.of(signIn).ap(getVal('#email')).ap(getVal('#password')).ap(IO.of(false));
// IO({id: 3, email: "gg@allin.com"})

// Or...
// no we don't depend on a specific type.
liftA3(signIn, getVal('#email'), getVal('#password'), IO.of(false))
