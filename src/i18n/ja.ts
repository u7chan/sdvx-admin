import defaultJapanese from '@bicstone/ra-language-japanese'
import { RaAppTranslationMessages } from './types'

export const ja: RaAppTranslationMessages = {
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
    musicMaster: {
      name: '曲マスタ',
      fields: {
        id: 'ID',
        title: '曲名',
        artist: 'アーティスト',
        tags: 'タグ',
        pack: '収録パック',
        platforms: 'プラットフォーム',
        difficulties: '難易度',
      },
    },
  },
}
