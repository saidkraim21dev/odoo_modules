{
    'name': 'Advanced OWL Status Indicators & Visual Badges',
    'summary': 'Transform numeric fields into intuitive visual status icons (Check, Warning, Danger) using OWL.',
    'version': '19.0.1.0.0',
    'category': 'Technical Tools',
    'author': 'Said Kraim',
    'license': 'LGPL-3',
    'depends': ['web'],
    'data': [],
    'assets': {
        'web.assets_backend': [
            'owl_smart_indicator/static/src/widgets/**/*.js',
            'owl_smart_indicator/static/src/widgets/**/*.xml',
        ],
    },
    'images': ['static/description/banner.png'],
    'installable': True,
    'application': True,
    'price': 0.00,
    'currency': 'EUR',
}