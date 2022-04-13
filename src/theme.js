import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  colors: {
    gris: { 0: "#F2F3F4", 50: "#A0AEC0", 100: "#718096", },
    negro: { 0: "#1F2022", 50: "#2d3436", 800: "#08090D", 900: "#08080B" },
    blanco: "white",
    violeta: { 0: "#d33aec", 100: "#9F3AEC", 200: "#be2edd" },
    blancoN: { 0: "#fafafa", },
    naranja: "orange",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "2px"
      },
    }
  }
})