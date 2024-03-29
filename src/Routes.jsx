import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewContact } from './pages/NewContact'
import { EditContact } from './pages/EditContact'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new" component={NewContact} exact />
      <Route path="/edit/:id" component={EditContact} exact />
    </Switch>
  )
}
