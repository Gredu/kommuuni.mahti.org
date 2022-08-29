module.exports = {
  title: 'Kontulan Kommuuni',
  description: 'Koti kuudelle Kontulan keskiössä jo vuodesta 2014',
  themeConfig: {
    nav: [
      { text: 'Säännöt', link: '/saannot/' },
      { text: 'Sopimukset', link: '/sopimukset/' },
      { text: 'Ohjeet', link: '/ohjeet/' },
      // { text: 'Kokoukset', link: '/kokoukset/' },
    ],
    // sidebar: 'auto'
    sidebar: {
      '/saannot/': [
        '',
        'viestinta',
        'ohjeistukset',
        'vastuualueet',
      ],
      '/sopimukset/': [
        '',
      ],
      '/ohjeet/': [
        '',
        'vuorot',
        'muuttajille',
        // 'markatilojen-siivous',
        // 'kuivatilojen-siivous',
      ],
      '/kokoukset/': [
        '',
        '06-2021'
      ],
    }
  },

  head: [
    ['script', {src: 'https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js'}],
  ],

  plugins: {
    'git-log': {
      additionalProps: {
        subject: '%s',
        authorEmail: '%ae',
      },
    },

  }
}
