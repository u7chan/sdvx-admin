import { FC } from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { theme } from '@/themes'
import { i18nProvider } from '@/i18n'
import { defaultDataProvider } from '@/data'
import { Layout, AppBar } from '@/components'
import './App.css'

// eslint-disable-next-line react/jsx-props-no-spreading, react/no-unstable-nested-components
const AppLayout: FC = (props) => <Layout {...props} appBar={() => <AppBar title='header.title' />} />

export const App = () => (
  <Admin i18nProvider={i18nProvider} dataProvider={defaultDataProvider} theme={theme} layout={AppLayout}>
    <Resource name='example' list={ListGuesser} icon={InsertChartIcon} />
    <Resource name='musicMaster' list={ListGuesser} icon={ListAltIcon} />
  </Admin>
)
