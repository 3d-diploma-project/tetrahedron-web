import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTranslation } from 'react-i18next'

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
    <Select data-testid="languageSelector" onValueChange={changeLanguage}>
      <SelectTrigger className="w-16 border-transparent bg-background font-semibold uppercase hover:border-input">
        <SelectValue placeholder={currentLanguage} />
      </SelectTrigger>
      <SelectContent className="min-w-20 bg-background font-semibold uppercase">{languageItems}</SelectContent>
    </Select>
  )
}
