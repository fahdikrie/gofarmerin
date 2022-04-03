import Router from 'next/router';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NavItemType {
  label: string;
  subLabel?: string;
  children?: Array<NavItemType>;
  href?: string;
  onClick?: any;
}

export const NAV_ITEMS: Array<NavItemType> = [
  {
    label: 'Home',
    href: '/',
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
  {
    label: 'About',
    href: '/#about',
    onClick: () =>
      window.scrollTo({
        top: (60 * window.innerHeight) / 100,
        behavior: 'smooth',
      }),
  },
  {
    label: 'Products',
    onClick: () => Router.push('/products'),
  },
  // {
  //   label: 'Gallery',
  //   onClick: () => Router.push('/gallery'),
  // },
  {
    label: 'Contact',
    href: '/#contact',
    onClick: () =>
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }),
  },
];
