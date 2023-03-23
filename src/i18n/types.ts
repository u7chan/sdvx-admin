import { TranslationMessages } from 'react-admin'
import { ResourceMessage } from '@/data'

type AppTranslationMessages = {
  header: {
    title: string
  }
  resources: {
    example: ResourceMessage<'example'>
  }
}

export type RaAppTranslationMessages = TranslationMessages & AppTranslationMessages

type RecursiveRecord = {
  // eslint-disable-next-line no-unused-vars
  [key in string]: string | RecursiveRecord
}

type PickKeys<T extends RecursiveRecord, K = keyof T> = K extends string
  ? T[K] extends string
    ? K
    : `${K}.${PickKeys<Extract<T[K], RecursiveRecord>>}`
  : never

export type I18nString = PickKeys<AppTranslationMessages>
