declare namespace MDN {
  interface Property {
    syntax: string;
    media: string;
    inherited: boolean;
    animationType: string;
    percentages: string;
    groups: string[];
    initial: string;
    appliesto: string;
    computed: string | string[];
    order: string;
    status: string;
    mdn_url?: string;
  }

  interface Properties {
    [property: string]: Property;
  }

  interface Syntax {
    syntax: string;
  }

  interface Syntaxes {
    [property: string]: Syntax;
  }

  interface Selector {
    syntax: string;
    groups: string[];
    status: string;
  }

  interface Selectors {
    [selector: string]: Selector;
  }

  interface Types {
    [name: string]: any;
  }

  interface Descriptor {
    syntax: string;
    media: string;
    percentages: string | string[];
    initial: string | string[];
    computed: string | string[];
    order: string;
  }

  interface Descriptors {
    [descriptor: string]: Descriptor;
  }

  interface AtRule {
    syntax: string;
    interfaces: string[];
    groups: string[];
    descriptors: Descriptors;
    status: string;
  }

  interface AtRules {
    [name: string]: AtRule;
  }

  interface L10N {
    [key: string]: {
      'en-US': string;
    };
  }
}

declare module 'mdn-data/css/properties.json' {
  var cssProperties: MDN.Properties;
  export = cssProperties;
}
