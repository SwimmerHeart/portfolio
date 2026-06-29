export interface SkillCategory {
  title: string
  skills: { name: string; icon?: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Фреймворки',
    skills: [
      { name: 'Vue 3', icon: 'logos:vue' },
      { name: 'Nuxt', icon: 'logos:nuxt-icon' },
      { name: 'Vue 2', icon: 'logos:vue' }
    ]
  },
  {
    title: 'Языки',
    skills: [
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' }
    ]
  },
  {
    title: 'State Management',
    skills: [
      { name: 'Vuex', icon: 'material-icon-theme:vuex-store' },
      { name: 'Pinia', icon: 'logos:pinia' }
    ]
  },
  {
    title: 'UI-компоненты',
    skills: [
      { name: 'Ant Design Vue', icon: 'logos:ant-design' },
      { name: 'PrimeVue', icon: 'simple-icons:primevue' },
      { name: 'Buefy', icon: 'simple-icons:buefy' }
    ]
  },
  {
    title: 'Стилизация',
    skills: [
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Sass (SCSS)', icon: 'logos:sass' },
      { name: 'Less', icon: 'logos:less' },
      { name: 'Bulma', icon: 'logos:bulma' }
    ]
  },
  {
    title: 'Сборка',
    skills: [
      { name: 'Webpack', icon: 'logos:webpack' },
      { name: 'Vite', icon: 'logos:vitejs' }
    ]
  },
  {
    title: 'Инструменты',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Fastify', icon: 'simple-icons:fastify' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Axios', icon: 'logos:axios' },
      { name: 'dayjs', icon: '' }
    ]
  },
  {
    title: 'Библиотеки',
    skills: [
      { name: 'ECharts', icon: 'logos:chartjs' },
      { name: 'markdown-it', icon: 'simple-icons:markdown' },
      { name: 'DOMPurify', icon: '' },
      { name: 'Vuelidate', icon: '' }
    ]
  },
  {
    title: 'Работа с данными',
    skills: [
      { name: 'xlsx', icon: 'vscode-icons:file-type-excel' },
      { name: 'xlsx-js-style', icon: 'vscode-icons:file-type-excel' }
    ]
  },
  {
    title: 'Тестирование',
    skills: [
      { name: 'MSW', icon: 'logos:msw-icon' }
    ]
  }
]
