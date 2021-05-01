module.exports = {
  title: 'Kontulan Kommuuni',
  description: 'Koti kuudelle Kontulan keskiössä jo vuodesta 2014',
  themeConfig: {
    nav: [
      { text: 'Säännöt', link: '/saannot/' },
      { text: 'Sopimukset', link: '/sopimukset/' },
      { text: 'Ohjeet', link: '/ohjeet/' },
      { text: 'Kokoukset', link: '/kokoukset/' },
      { text: 'Muutosloki', link: '/muutosloki/' },
    ],
    // sidebar: 'auto'
    sidebar: {
      '/saannot/': [
        '',
        'viestinta',
        'ohjeistukset',
      ],
      '/sopimukset/': [
        '',
      ],
      '/ohjeet/': [
        '',
      ],
      '/kokoukset/': [
        '',
      ],
      '/muutosloki/': [
        '',
      ],
    }
  },
  plugins: [
    [
      'vuepress-plugin-git-log',
      {
        additionalArgs: '--no-merge',
        onlyFirstAndLastCommit: true,
      },
    ],
  ],
}


