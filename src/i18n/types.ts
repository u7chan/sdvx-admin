import { TranslationMessages } from 'react-admin'
import { ResourceMessage } from '@/data'

export type AppTranslationMessages = TranslationMessages & {
  header: {
    title: string
  }
  resources: {
    example: ResourceMessage<'example'>
  }
}
