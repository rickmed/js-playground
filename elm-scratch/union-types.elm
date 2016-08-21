-- first declare types

type Visibility = All | Active | Completed

type alias Task = { task : String, complete : Bool }

buy : Task -- buy is a collection of type Task
buy =
  { task = "Buy milk", complete = True }

drink : Task
drink =
  { task = "Drink milk", complete = False }

tasks : List Task  -- is a List of Tasks
tasks =
  [ buy, drink ]

-- a fn "keep" that takes a Visibility and a List of Tasks and returns a
-- transformed new List of Tasks depending on the visibility
-- a case expression is obligatory to work with the Visibility type.
-- all cases must be covered or won't compile
keep : Visibility -> List Task -> List Task
keep visibility tasks =
  case visibility of
    All ->
      tasks

    Active ->
      List.filter (\task -> not task.complete) tasks

    Completed ->
      List.filter (\task -> task.complete) tasks


-- keep All tasks == [buy,drink]
-- keep Active tasks == [drink]
-- keep Complete tasks == [buy]



{- another example -}
-- Named is converted automatically to a function constructor,

 type User = Anonymous | Named String

-- Named is a function: String -> User
-- used like:
Named "AzureDiamond"

-- implementing user with a userPhoto function.
userPhoto : User -> String
userPhoto user =
  case user of
    Anonymous ->
      "anon.png"

    Named name ->
      "users/" ++ name ++ ".png"