import {observable, autorun} from "mobx"

const todos = observable([{
  title: "Find napkin",
  completed: false
}])

autorun(() =>
    console.log(todos
        .filter(todo => !todo.completed)
        .map(todo => todo.title)
        .join(", "))
)
// Prints: 'Find napkin'

todos[1] = {
  title: "Sneeze",
  completed: false
}
// Prints: 'Find napkin, Sneeze'

todos[0].completed = true
// Prints: 'Sneeze'

todos[1].title = 'Ha.. ha... ha....'
// Prints: 'Ha.. ha... ha.... '

todos[0].title = "Foobar"
// (doesn't print)
