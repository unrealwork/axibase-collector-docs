const githubSettings = {
    docsRepo: 'axibase/axibase-collector',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
};

const topNavMenu = [
    {text: 'Install', link: '/#installation', highlighted: true},
    {text: 'Configure', link: '/job-generic.md'},
    {
        text: 'Jobs',
        link: '/jobs',
        items: [
            {text: 'AWS', link: '/jobs/aws.md'},
            {text: 'Docker', link: '/jobs/docker.md'},
            {text: 'File', link: '/jobs/file.md'},
            {text: 'HTTP', link: '/jobs/http.md'},
            {text: 'ICMP', link: '/jobs/icmp.md'},
            {text: 'JDBC', link: '/jobs/jdbc.md'},
            {text: 'JMX', link: '/jobs/jmx.md'},
            {text: 'JSON', link: '/jobs/json.md'},
            {text: 'Kafka', link: '/jobs/kafka.md'},
            {text: 'OVPM', link: '/jobs/ovpm.md'},
            {text: 'PI', link: '/jobs/pi.md'},
            {text: 'SNMP', link: '/jobs/snmp.md'},
            {text: 'Socrata', link: '/jobs/socrata.md'},
            {text: 'TCP', link: '/jobs/tcp.md'}
        ],
        highlighted: true
    },
    {
        text: 'Administration',
        items: [
            {text: 'Monitoring', link: '/monitoring.md'},
            {text: 'Logging', link: '/logging.md'}
        ]
    },
    {text: 'Examples', link: '/#examples', highlighted: true},
];


const landingPageMenu = [
    ''
];

const administrationMenu = ['/monitoring.md', '/logging.md'];

const jobsMenu = [
    {
        title: 'Job Types', children: [
            ['/jobs/aws.md', 'AWS'],
            ['/jobs/docker.md', 'Docker'],
            ['/jobs/file.md', 'File'],
            ['/jobs/http.md', 'HTTP'],
            ['/jobs/icmp.md', 'ICMP'],
            ['/jobs/jdbc.md', 'JDBC'],
            ['/jobs/jmx.md', 'JMX'],
            ['/jobs/json.md', 'JSON'],
            ['/jobs/kafka.md', 'Kafka'],
            ['/jobs/ovpm.md', 'OVPM'],
            ['/jobs/pi.md', 'PI'],
            ['/jobs/snmp.md', 'SNMP'],
            ['/jobs/socrata.md', 'Socrata'],
            ['/jobs/tcp.md', 'TCP']
        ]
    }
];


const confMenu = [
    {
        title: 'General', children: [
            ['/configure-administrator-account.md', 'Administrator Account'],
            ['/atsd-server-connection.md', 'ATSD Connection']
        ]
    },
    {
        title: 'Job', children: [
            ['/job-generic.md', 'Generic'],
            ['/job-autostart.md', 'Autostart'],
            ['/scheduling.md', 'Scheduling'],
        ]
    }
];

module.exports = {
    base: '/docs/axibase-collector/',
    title: 'Collector',
    description: "User manual and API reference for Axibase® Time Series Database",
    head: [
        ['link', {rel: 'shortcut icon', href: '/favicon.ico'}]
    ],
    staticFilesExtensionsTest: /(?:tcollector|\.(?:pdf|xlsx?|xml|txt|csv|str|java|json|sql|sps|yxmd|htm|prpt|do|tdc|jsonld|ktr|service))$/,
    themeConfig: {
        nav: topNavMenu,
        logo: '/images/axibase_logo_green.gif',

        sidebarDepth: 1,
        sidebar: {
            // Keep it last
            '/collections.html': ['/collections.md'],
            '/monitoring.html': administrationMenu,
            '/logging.html': administrationMenu,
            '/job-generic.html': confMenu,
            '/job-autostart.html': confMenu,
            '/scheduling.html': confMenu,
            '/configure-administrator-account.html': confMenu,
            '/atsd-server-connection.html': confMenu,
            '/jobs': jobsMenu,
            '/': landingPageMenu,
            '': [],
        },

        searchMaxSuggestions: 10,

        ...githubSettings
    }
};

loadFromEnv("ga", "GA_API_KEY");
loadFromEnv("sc", "STATCOUNTER_ID");
loadFromEnv("scSec", "STATCOUNTER_SEC");

function loadFromEnv(setting, varName) {
    if (!(setting in module.exports)) {
        let value = require('process').env[varName];
        if (value) {
            module.exports[setting] = value;
        }
    }
}
