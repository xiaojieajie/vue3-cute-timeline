import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ]
      }
    })
  ],

  shortcuts: [
    ['p-c', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
    ['p-x', 'absolute left-1/2 -translate-x-1/2'],
    ['p-y', 'absolute top-1/2 -translate-y-1/2'],
    ['f-c', 'flex justify-center items-center'],
    ['f-col', 'flex flex-col'],
    ['f-a', 'flex items-center'],
    ['f-j', 'flex justify-center']
  ]
})
