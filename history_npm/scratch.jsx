import { createHistory } from 'history'

const history = createHistory()

// Get the current location.
const location = history.getCurrentLocation()

// Listen for changes to the current location.
const unlisten = history.listen(location => {
  console.log(location.pathname)
})

// When you're finished, stop the listener.
unlisten()


// Push a new entry onto the history stack.
history.push('/home')

// Replace the current entry on the history stack.
history.replace('/profile')

// Push a new entry with state onto the history stack.
// state must be a JSON-serializable object (no Function
// or Date values).
history.push({
  pathname: '/about',
  search: '?the=search',
  state: { some: 'state' }
})

// Push a new entry onto the history stack that changes
// only the search on an existing location.
history.push({ ...location, search: '?the=other+search' })

// Go back to the previous history entry. The following
// two lines are synonymous.
history.go(-1)
history.goBack()