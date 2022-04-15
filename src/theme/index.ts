import { extendTheme } from '@chakra-ui/react'

// extendThemeの中にオブジェクトで指定したいスタイルを当てていく
const theme = extendTheme({
  styles: {
    // グローバルで適用させたいため、globalと記述 ex)https://chakra-ui.com/docs/styled-system/features/global-styles
    global: {
      // body全体に適用させたいため、bodyと記述
      body: {
        // 色の指定はこちらを参照 https://chakra-ui.com/docs/styled-system/theming/theme
        backgroundColor: 'gray.100',
        color: 'gray.800',
      },
    },
  },
})

export default theme
