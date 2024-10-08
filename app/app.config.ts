const defaultCodeIcon = {
  'package.json': 'vscode-icons:file-type-node',
  'tsconfig.json': 'vscode-icons:file-type-tsconfig',
  '.npmrc': 'vscode-icons:file-type-npm',
  '.editorconfig': 'vscode-icons:file-type-editorconfig',
  'eslint.config.ts': 'vscode-icons:file-type-eslint',
  '.eslintcache': 'vscode-icons:file-type-eslint',
  '.gitignore': 'vscode-icons:file-type-git',
  '.env': 'vscode-icons:file-type-dotenv',
  '.env.example': 'vscode-icons:file-type-dotenv',
  '.vscode/settings.json': 'vscode-icons:file-type-vscode',
  'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
  'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
  nuxt: 'vscode-icons:file-type-nuxt',
  vue: 'vscode-icons:file-type-vue',
  ts: 'vscode-icons:file-type-typescript',
  md: 'vscode-icons:file-type-markdown',
  pnpm: 'vscode-icons:file-type-pnpm',
  yml: 'vscode-icons:file-type-yaml',
  json: 'vscode-icons:file-type-json',
  terminal: 'lucide:terminal',
}

export default defineAppConfig({
  landing: {
    participation: {
      formLink: `https://docs.google.com/forms/d/e/1FAIpQLSfBAjjgs14SQ9i3Dgo6BDPp-m7sxqHaUt4kFOghV-44knIUPg/viewform`,
    },
    donation: {
      enabled: false,
      stripe: {
        link: 'https://buy.stripe.com/fZe17PcrCb5245G3cc',
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
        // Placeholder object for types only
        // {
        //   name: 'Muhammad Mahmoud',
        //   link: 'https://www.linkedin.com/in/MuhammadM1998/',
        //   image: `https://media.licdn.com/dms/image/C4E03AQGFkvkd_R_1iw/profile-displayphoto-shrink_200_200/0/1640044080035?e=1721260800&v=beta&t=HBlUZXznT7_Aeank0e6OI8lky6fF05Dvgwc9a7WS00M`,
        // },
      ],
    },
  },

  openAPISpecUrl: `https://api.egytech.fyi/doc`,

  shadcnDocs: {
    header: {
      title: 'egytech.fyi',
      showTitle: true,
      darkModeToggle: true,
      logo: { light: '/logo.svg', dark: '/logo.svg' },
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
      // Placeholder for how to show extra links in aside
      // extraLinks: [
      //   // {
      //   //   title: 'Title',
      //   //   icon: 'lucide:github',
      //   //   to: 'https://github.com/egytech-fyi',
      //   //   target: '_blank',
      //   // },
      // ],
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
    site: { ogImage: '/og-image.png' },
  },
})
