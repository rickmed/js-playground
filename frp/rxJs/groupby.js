import {Observable} from 'rxjs'

const items = ["Apple", "Ananas", "Mango", "Banana", "Beer"]

Observable.from(items)
    .groupBy(s => s[0] ) // default element selector is the entire value
    .flatMap(group =>
        group
          .toArray()
          .map(items => ({ key: group.key, value: items }) )
    )
    .subscribe(s => console.log(JSON.stringify(s, null, 2)) )
