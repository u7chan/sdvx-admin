import { RaRecord } from 'react-admin'
import { example } from './example'
import { musicMaster } from './musicMaster'

const fakeResources: { [key: string]: RaRecord[] } = {
  example,
  musicMaster,
}

export { fakeResources }
