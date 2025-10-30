import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Platforms',
      href: getPermalink('/#platforms'),
    },
    {
      text: 'Documentation',
      href: 'https://github.com/project-robius/robrix#readme',
      target: '_blank',
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/project-robius/robrix', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Project',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Platforms', href: getPermalink('/#platforms') },
        { text: 'GitHub', href: 'https://github.com/project-robius/robrix' },
        { text: 'Releases', href: 'https://github.com/project-robius/robrix/releases' },
      ],
    },
    {
      title: 'Documentation',
      links: [
        { text: 'README', href: 'https://github.com/project-robius/robrix#readme' },
        { text: 'Building Guide', href: 'https://github.com/project-robius/robrix#building-robrix' },
        { text: 'Contributing', href: 'https://github.com/project-robius/robrix/blob/main/CONTRIBUTING.md' },
        { text: 'Issues', href: 'https://github.com/project-robius/robrix/issues' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Matrix Chat', href: 'https://matrix.to/#/#robius:matrix.org' },
        { text: 'Project Robius', href: 'https://github.com/project-robius' },
        { text: 'Makepad', href: 'https://github.com/makepad/makepad' },
        { text: 'Matrix.org', href: 'https://matrix.org' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Rust Lang', href: 'https://www.rust-lang.org' },
        { text: 'Matrix SDK', href: 'https://github.com/matrix-org/matrix-rust-sdk' },
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
