import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import jaLocale from './ja'
import koLocale from './ko'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  },
  ja: {
    ...jaLocale
  },
  ko: {
    ...koLocale
  }
}

// 从localStorage获取语言设置，如果没有则使用浏览器语言或默认中文
const i18n = new VueI18n({
  locale: localStorage.getItem('language') || (navigator.language === 'en-US' || navigator.language === 'en' ? 'en' : navigator.language === 'ja' || navigator.language === 'ja-JP' ? 'ja' : navigator.language === 'ko' || navigator.language === 'ko-KR' ? 'ko' : 'zh'),
  messages,
  silentTranslationWarn: true
})

export default i18n
