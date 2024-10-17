import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import de from './de/index'
import en from './en/index'
import nl from './nl/index'
import ua from './ua/index'

const resources = {
  en,
  ua,
  nl,
  de
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
