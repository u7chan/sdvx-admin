import { DataProvider } from 'react-admin'
import fakeDataProvider from './fake'

export * from './types'
export const defaultDataProvider: DataProvider = fakeDataProvider
