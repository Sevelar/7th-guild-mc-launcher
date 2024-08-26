import { en_EN } from './en-EN'

export const t = (key: string, ...args: string[]) => {
  const translations = en_EN
  const translation = translations[key]

  if (!translation) return 'MISSING_TRANSLATION'

  if (typeof translation === 'function') {
    return translation[key](...args)
  }

  return translations[key]
}
