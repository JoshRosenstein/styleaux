module.exports = {
  types: [
    {
      value: '🎨format',
      name: 'art: Improving structure / format of the code.',
    },
    {
      value: '🔥del',
      name: 'del: Removing code or files.',
    },
    {
      value: '🚚move',
      name: 'move: Moving or renaming files.',
    },
    {
      value: '😒chore',
      name: 'chore: Build process or auxiliary tool changes',
    },
    {
      value: '📝docs',
      name: 'docs: Documentation only changes',
    },
    {value: '✨feat', name: 'feat: Introducing new features.'},
    {value: '🐛fix', name: 'fix: A bug fix'},

    {
      value: '💄style',
      name: 'style: Updating the UI and style files.',
    },
    {
      value: '♻️refactor',
      name:
        'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: '⚡️perf',
      name: 'perf: A code change that improves performance',
    },
    {value: '✅tests', name: 'test:     Updating tests'},
    {value: '😵revert', name: 'revert: Revert to a commit'},
    {value: '🚧WIP', name: 'WIP: Work in progress'},
    {value: '💚CIFIX', name: 'CI: Fixing CI Build.'},
    {value: '⬆️updeps', name: 'updeps: Upgrading dependencies.'},
    {value: '➕adddeps', name: 'adddeps: Adding a dependency.'},
    {value: '✏️fixtypos', name: 'fixtypos: Fixing typos.'},
    {
      value: '🙈gitignore',
      name: 'gitignore: Adding or updating a .gitignore file',
    },
    {
      value: '🏷️types',
      name: 'types: Adding or updating types (Flow, TypeScript)',
    },
    {value: '🎉init', name: 'init: Initial commit'},
  ],

  scopes: [
    {name: 'mono'},
    {name: 'core'},
    {name: 'styles-base'},
    {name: 'styles-ss'},
    {name: 'csstype'},
    {name: 'all'},
    {name: 'playground'},
    {name: 'tools'},
    {name: 'generators'},
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a short, imperative mood description of the change:\n',
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want //['body', 'footer']
  skipQuestions: [],

  // limit subject length
  subjectLimit: 100,
}
