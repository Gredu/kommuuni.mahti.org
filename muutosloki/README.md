# Muutosloki

Teknillinen loki, josta voi ehkä päätellä, mitä muutoksia on tapahtunut.

- Author of this page: {{ $page.git.author }}
- Contributors of this page: {{ $page.git.contributors.join(', ') }}
- Last commit of this page: {{ $page.git.commits[0].fullHash }}

{{ $page.git.commits }}
