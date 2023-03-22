import fakeDataProvider from 'ra-data-fakerest'
import { fakeResources } from './resources'

const useLogging = true

export default fakeDataProvider(fakeResources, useLogging)
