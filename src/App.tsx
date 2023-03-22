import { Admin, Resource, ListGuesser } from 'react-admin'
import { theme } from '@/themes'
import { i18nProvider } from '@/i18n'
import { defaultDataProvider } from '@/data'
import './App.css'

export const App = () => (
  <Admin i18nProvider={i18nProvider} dataProvider={defaultDataProvider} theme={theme}>
    <Resource name='example' list={ListGuesser} />
  </Admin>
)
