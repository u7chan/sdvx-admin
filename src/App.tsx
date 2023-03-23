import { Admin, Resource, ListGuesser } from 'react-admin'
import { theme } from '@/themes'
import { i18nProvider } from '@/i18n'
import { defaultDataProvider } from '@/data'
import { Layout, AppBar } from '@/components'
import './App.css'

export const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    dataProvider={defaultDataProvider}
    theme={theme}
    layout={(props) => <Layout {...props} appBar={() => <AppBar title='header.title' />} />}
  >
    <Resource name='example' list={ListGuesser} />
  </Admin>
)
