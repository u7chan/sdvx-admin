import { Example } from './Example'
import { MusicMaster } from './MusicMaster'

type Resources = {
  example: Example
  musicMaster: MusicMaster
}

export type ResourceName = keyof Resources
export type Resource<T extends ResourceName> = Resources[T]
export type ResourceField<T extends ResourceName> = keyof Resources[T]
export type ResourceMessage<T extends ResourceName> = {
  name: string
  fields:
    | {
        // eslint-disable-next-line no-unused-vars
        [K in ResourceField<T>]: string
      }
    | Record<string, string>
}
