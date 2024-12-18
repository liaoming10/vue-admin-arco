import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Message } from '@arco-design/web-vue'

export default function useLocale() {
  const i18n = useI18n()

  const currentLocale = computed(() => {
    return i18n.locale.value
  })

  const changeLocale = (locale: string) => {
    if (locale == currentLocale.value) {
      return
    }

    i18n.locale.value = locale
    localStorage.setItem('locale', locale)
    Message.success(i18n.t('navbar.aciton.locale'))
  }

  return {
    currentLocale,
    changeLocale,
  }
}
