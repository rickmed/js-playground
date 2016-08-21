// most useful thing in monad is chain.
// it can captura variables in closure and run async sequences at the same time.

querySelector('input.username').chain(function(uname) {
  return querySelector('input.email').chain(function(email) {
    return IO.of(
      'Welcome ' + uname.value + ' ' + 'prepare for spam at ' + email.value
    );
  });
});
// IO('Welcome Olivia prepare for spam at olivia@tremorcontrol.net');
// when needing variable assignment via a closure is better to use the
// infinx/method version of chain instead of using compose.
// this does not work with two different nested types.


/*
Example:
Read a file, then upload it directly afterward:
*/

// readFile :: Filename -> Either String (Task Error String)
// httpPost :: String -> String -> Task Error JSON

//  upload :: String -> Either String (Task Error JSON)
var upload = compose(map(chain(httpPost('/uploads'))), readFile);