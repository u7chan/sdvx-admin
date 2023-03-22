import { DataProvider } from 'react-admin'
import fakeDataProvider from './fake'

export * from './resources'
export const defaultDataProvider: DataProvider = fakeDataProvider
