import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'fi-FI',
  title: 'Kontulan Kommuuni',
  description: 'Koti kuudelle Kontulan keskiössä jo vuodesta 2014',

  // Keep repo docs out of the site
  pagePatterns: ['**/*.md', '!CLAUDE.md', '!.vuepress', '!node_modules'],

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      { text: 'Säännöt', link: '/saannot/' },
      { text: 'Sopimukset', link: '/sopimukset/' },
      { text: 'Ohjeet', link: '/ohjeet/' },
    ],
    sidebar: {
      '/saannot/': [
        '/saannot/',
        '/saannot/viestinta.md',
        '/saannot/ohjeistukset.md',
        '/saannot/vastuualueet.md',
      ],
      '/sopimukset/': [
        '/sopimukset/',
      ],
      '/ohjeet/': [
        '/ohjeet/',
        // '/ohjeet/vuorot.md',
        // '/ohjeet/juhlien-ja-tapahtumien-pitaminen.md',
        '/ohjeet/kulttuuri.md',
        '/ohjeet/muuttajille.md',
        '/ohjeet/palvelut.md',
        '/ohjeet/sanakirja.md',
        // '/ohjeet/markatilojen-siivous.md',
        // '/ohjeet/kuivatilojen-siivous.md',
      ],
    },
    // VuePress 1 showed neither of these; the v2 default theme enables both
    lastUpdated: false,
    contributors: false,
  }),

  plugins: [
    // Searches page titles and headings; the placeholder picks up Finnish from `lang`
    searchPlugin(),
  ],
})
