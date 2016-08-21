/* eslint-disable */

/*
Applicative Functors
*/
// Applies the content of one functor to the content of another one. Returns
// the same functor type.
// Useful when a function needs arguments of the same functor.

// Basics

// or...you can apply the contents of the 2 functors to a function.
Container.of(2).map(add).ap(Container.of(3));
// Container(5)
// adds is curried.

Maybe.of(add).ap(Maybe.of(2)).ap(Maybe.of(3));
// Maybe(5)


/*
Parallel async Example
*/

//  $ :: String -> IO DOM
var $ = function(selector) {
  return new IO(function() { return document.querySelector(selector)});
}

//  getVal :: String -> IO String
var getVal = compose(map(_.prop('value')), $);

//  signIn :: String -> String -> Bool -> User
var signIn = curry(function(username, password, remember_me) {
/* signing in */
})

IO.of(signIn).ap(getVal('#email')).ap(getVal('#password')).ap(IO.of(false));
// IO({id: 3, email: "gg@allin.com"})
// with each ap, signIn receives one more argument until it is complete and runs.
// note the last IO.of (it needs to be "lifted") so all args match IO type

// Or...
// now we don't depend on a specific type.
liftA3(signIn, getVal('#email'), getVal('#password'), IO.of(false))
