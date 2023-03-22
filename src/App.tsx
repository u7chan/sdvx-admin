import { Admin, Resource, ListGuesser } from 'react-admin'
import { i18nProvider } from '@/i18n'
import { defaultDataProvider } from '@/data'
import './App.css'

export const App = () => (
  <Admin i18nProvider={i18nProvider} dataProvider={defaultDataProvider}>
    <Resource name='example' list={ListGuesser} />
  </Admin>
)
