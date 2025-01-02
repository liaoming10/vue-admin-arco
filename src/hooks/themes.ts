import { ref } from 'vue'

export default function useThemes() {
  const isDark = ref(false)

  return {
    isDark,
  }
}
