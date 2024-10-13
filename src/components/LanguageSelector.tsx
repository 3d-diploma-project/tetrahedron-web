import { useTranslation } from 'react-i18next'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

export function LanguageSelector() {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ua', name: 'Українська' },
    { code: 'de', name: 'Deutsche' },
    { code: 'nl', name: 'Nederlands' }
  ]

  const currentLanguage = languages.find(({ code }) => code === i18n.language)?.code ?? 'en'

  const languageItems = languages.map(({ code }) => (
    <SelectItem key={code} value={code}>
      {code}
    </SelectItem>
  ))

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <Select onValueChange={changeLanguage}>
      <SelectTrigger className="w-16 font-semibold uppercase">
        <SelectValue placeholder={currentLanguage} />
      </SelectTrigger>
      <SelectContent className="min-w-20 font-semibold uppercase">{languageItems}</SelectContent>
    </Select>
  )
}