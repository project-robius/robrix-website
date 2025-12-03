import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Technology',
      href: getPermalink('/#technology'),
    },
    {
      text: 'Getting Started',
      href: getPermalink('/#getting-started'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Documentation',
      href: 'https://github.com/project-robius/robrix#readme',
      target: '_blank',
    },
  ],
  actions: [{ variant: 'primary', text: 'GitHub', href: 'https://github.com/project-robius/robrix', icon: 'tabler:brand-github', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Project',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'GitHub', href: 'https://github.com/project-robius/robrix' },
        { text: 'Releases', href: 'https://github.com/project-robius/robrix/releases' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Matrix Chat', href: 'https://matrix.to/#/#robius:matrix.org' },
        { text: 'Project Robius', href: 'https://github.com/project-robius' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: 'https://github.com/project-robius/robrix#readme' },
        { text: 'License (MIT)', href: 'https://github.com/project-robius/robrix/blob/main/LICENSE' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/project-robius/robrix' },
    { ariaLabel: 'Matrix', icon: 'tabler:messages', href: 'https://matrix.to/#/#robius:matrix.org' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://github.com/project-robius/robrix">Robrix</a> is part of <a class="text-blue-600 underline dark:text-muted" href="https://github.com/project-robius">Project Robius</a> · Open source under MIT License
  `,
};
