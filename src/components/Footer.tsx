import Link from 'next/link'
import { FC } from 'react'
import { Logo } from './Logo'
import { Icon } from './Icon'
import { Heading } from './Heading'

const isExternalUrl = (link: string): boolean => {
  return !link.startsWith('/')
}

const content = {
  note: (
    <p>
      MIT Licenced - Copyright © 2022 Stackbit Inc
      <br />
      Made with 💜 by{' '}
      <Link href="https://twitter.com/schickling">
        <a className="hover:text-slate-700 dark:hover:text-slate-300" target="_blank" rel="noreferrer">
          @schickling
        </a>
      </Link>{' '}
      & community
    </p>
  ),
  menus: [
    {
      title: 'Docs',
      elements: [
        { label: 'Getting Started', url: '/docs/getting-started' },
        { label: 'Concepts', url: '/docs/concepts' },
        { label: 'API', url: '/docs/api' },
      ],
    },
    {
      title: 'Examples',
      elements: [
        {
          label: 'Next.js (TypeScript)',
          url: 'https://github.com/contentlayerdev/next-contentlayer-example/tree/acba19596977752162275b7b1517664d872d5d9e',
        },
      ],
    },
    {
      title: 'Community',
      elements: [
        { label: 'Twitter', url: 'https://twitter.com/contentlayerdev' },
        { label: 'Discord', url: 'https://discord.gg/rytFErsARm' },
        { label: 'GitHub', url: 'https://github.com/contentlayerdev/contentlayer' },
      ],
    },
  ],
}

export const Footer: FC = () => {
  return (
    <div className="mt-16 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50 md:mt-24 lg:mt-32">
      <div className="mx-auto w-full max-w-screen-xl space-y-16 px-4 py-16 md:px-8 md:py-24 lg:flex lg:justify-between lg:space-y-0 lg:py-32">
        <div>
          <Link href="/">
            <a className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
              <Logo />
              <span>Contentlayer</span>
            </a>
          </Link>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{content.note}</div>
        </div>
        <div className="space-y-8 md:flex md:space-y-0 md:space-x-16">
          {content.menus.map(({ title, elements }, index) => (
            <div key={index}>
              <Heading level={4}>{title}</Heading>
              <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
                {elements.map(({ label, url }, index) => (
                  <li key={index}>
                    <Link href={url}>
                      <a
                        className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                        target={isExternalUrl(url) ? '_blank' : undefined}
                      >
                        <span>{label}</span>
                        {isExternalUrl(url) && (
                          <span className="inline-block w-4">
                            <Icon name="external-link" />
                          </span>
                        )}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
