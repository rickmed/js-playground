import { Observable } from 'rxjs/Observable'
import {of} from 'rxjs/observable/of'
import {map} from 'rxjs/operator/map'

const obs = Observable::of(1, 2, 3)
  ::map(x => x + '!!!')
  .subscribe(console.log)

console.log(JSON.stringify(obs, null, 2))

