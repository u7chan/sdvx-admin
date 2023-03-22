import defaultJapanese from '@bicstone/ra-language-japanese'
import { AppTranslationMessages } from './types'

export const ja: AppTranslationMessages = {
  ...defaultJapanese,
  ra: {
    ...defaultJapanese.ra,
    action: {
      ...defaultJapanese.ra.action,
    },
    page: {
      ...defaultJapanese.ra.page,
      create: '%{name}',
    },
  },
  header: {
    title: 'SDVX-ADMIN',
  },
  resources: {
    example: {
      name: 'Example',
      fields: {
        id: 'ID',
        name: '名前',
        role: 'ロール',
        lastUpdated: '最終更新日',
      },
    },
  },
}
