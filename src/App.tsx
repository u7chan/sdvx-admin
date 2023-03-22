import { Admin, Resource, ListGuesser } from 'react-admin'
import { defaultDataProvider } from './data'
import './App.css'

export const App = () => (
  <Admin dataProvider={defaultDataProvider}>
    <Resource name='dummy' list={ListGuesser} />
  </Admin>
)
