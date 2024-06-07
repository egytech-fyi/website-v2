const defaultCodeIcon = {
  'package.json': 'vscode-icons:file-type-node',
  'tsconfig.json': 'vscode-icons:file-type-tsconfig',
  '.npmrc': 'vscode-icons:file-type-npm',
  '.editorconfig': 'vscode-icons:file-type-editorconfig',
  '.eslintrc': 'vscode-icons:file-type-eslint',
  '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
  '.eslintignore': 'vscode-icons:file-type-eslint',
  'eslint.config.js': 'vscode-icons:file-type-eslint',
  'eslint.config.mjs': 'vscode-icons:file-type-eslint',
  'eslint.config.cjs': 'vscode-icons:file-type-eslint',
  '.gitignore': 'vscode-icons:file-type-git',
  'yarn.lock': 'vscode-icons:file-type-yarn',
  '.env': 'vscode-icons:file-type-dotenv',
  '.env.example': 'vscode-icons:file-type-dotenv',
  '.vscode/settings.json': 'vscode-icons:file-type-vscode',
  nuxt: 'vscode-icons:file-type-nuxt',
  '.nuxtrc': 'vscode-icons:file-type-nuxt',
  '.nuxtignore': 'vscode-icons:file-type-nuxt',
  'nuxt.config.js': 'vscode-icons:file-type-nuxt',
  'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
  'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
  'tailwind.config.js': 'vscode-icons:file-type-tailwind',
  'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
  vue: 'vscode-icons:file-type-vue',
  ts: 'vscode-icons:file-type-typescript',
  tsx: 'vscode-icons:file-type-typescript',
  mjs: 'vscode-icons:file-type-js',
  cjs: 'vscode-icons:file-type-js',
  js: 'vscode-icons:file-type-js',
  jsx: 'vscode-icons:file-type-js',
  md: 'vscode-icons:file-type-markdown',
  mdc: 'vscode-icons:file-type-markdown',
  py: 'vscode-icons:file-type-python',
  npm: 'vscode-icons:file-type-npm',
  pnpm: 'vscode-icons:file-type-pnpm',
  npx: 'vscode-icons:file-type-npm',
  yarn: 'vscode-icons:file-type-yarn',
  bun: 'vscode-icons:file-type-bun',
  yml: 'vscode-icons:file-type-yaml',
  json: 'vscode-icons:file-type-json',
  terminal: 'lucide:terminal',
}

export default defineAppConfig({
  landing: {
    participation:{
      formLink:`https://docs.google.com/forms/d/e/1FAIpQLSfBAjjgs14SQ9i3Dgo6BDPp-m7sxqHaUt4kFOghV-44knIUPg/viewform`,
    },
    donation: {
      enabled: false,
      stripe: {
        link: 'https://buy.stripe.com/fZe17PcrCb5245G3cc'
      },
      instapay: {
        ipa: 'mahsayedsalem',
        link: '',
        qrImage: '',
        referenceNote: 'egytech',
      },
    },
    contribution: {
      formLink: `https://docs.google.com/forms/d/e/1FAIpQLSfKS-ZBzixfgOlsqpMEmn65_Em1Ek1-wOLXfhrXHORP9gsp0g/viewform?usp=sf_link`,
      contributors: [
        {
          name: 'Mahmoud Salem',
          link: 'https://www.linkedin.com/in/mahsayedsalem/',
          image: `https://media.licdn.com/dms/image/D4D03AQFrfwXJqWeyPQ/profile-displayphoto-shrink_200_200/0/1665492698888?e=2147483647&v=beta&t=Wae18SS9-9C1GM7ADQdZEiQbeq2S6mBZI6IVxvkosTc`,
        },
        {
          name: 'Muhammad Mahmoud',
          link: 'https://www.linkedin.com/in/MuhammadM1998/',
          image: `https://media.licdn.com/dms/image/C4E03AQGFkvkd_R_1iw/profile-displayphoto-shrink_200_200/0/1640044080035?e=1721260800&v=beta&t=HBlUZXznT7_Aeank0e6OI8lky6fF05Dvgwc9a7WS00M`,
        },
        {
          name: 'Abdelrahman El-Adawy',
          link: 'https://www.linkedin.com/in/abdelrahman-el-adawy/',
          image: `https://media.licdn.com/dms/image/D4E03AQFRhZTipZ7QfA/profile-displayphoto-shrink_800_800/0/1717713353227?e=1723075200&v=beta&t=hjevSlh6AldUEIwh-FaoFBiqjYTr46jxTcKCtXl9FGY`,
        },
        {
          name: 'Ahmed El-Adawy',
          link: 'https://www.linkedin.com/in/ahmed-eladawy-00b4a3115/',
          image: `https://media.licdn.com/dms/image/D4D35AQFUiU2YRcflJA/profile-framedphoto-shrink_800_800/0/1699922152531?e=1718370000&v=beta&t=3j9O3kklyv3n2F7YetBm38EaBxFaJoHcyI0n33u5D9s`,
        },
      ],
    },
  },

  // @ts-expect-error False positive as `shadcnDocs` isn't providing the correct types
  shadcnDocs: () => ({
    site: {
      name: 'egytech.fyi',
    },
    header: {
      title: 'egytech.fyi',
      showTitle: true,
      darkModeToggle: true,
      logo: { light: '/logo.svg', dark: '/logo.svg' },
      nav: [],
      links: [
        {
          icon: 'lucide:github',
          to: 'https://github.com/egytech-fyi',
          target: '_blank',
        },
      ],
    },
    search: { enable: true },
    aside: {
      extraLinks: [
        // {
        //   title: 'Title',
        //   icon: 'lucide:github',
        //   to: 'https://github.com/egytech-fyi',
        //   target: '_blank',
        // },
      ],
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeIcon: defaultCodeIcon,
    },
    toc: {
      enable: true,
      title: 'On This Page',
    },
  }),
})
