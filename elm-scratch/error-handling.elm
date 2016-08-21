-- Maybe

type Maybe a
  = Nothing
  | Just a


-- Result (Either)

type Result error value
  = Err error
  | Ok value


-- Nothing, Just, Err and Ok are constructors.