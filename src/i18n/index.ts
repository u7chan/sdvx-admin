import polyglotI18nProvider from 'ra-i18n-polyglot'
import { ja } from './ja'

const supportTranslations = {
  ja,
}
const defaultLang = 'ja'

export const i18nProvider = polyglotI18nProvider(() => supportTranslations[defaultLang], defaultLang)
