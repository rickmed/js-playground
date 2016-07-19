import {ajaxGetJSON} from 'rxjs/observable/dom/AjaxObservable'

const url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats'

ajaxGetJSON(url)
.subscribe( res => console.log(JSON.stringify(res)))
