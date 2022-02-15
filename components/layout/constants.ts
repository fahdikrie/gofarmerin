export interface NavItemType {
  label: string;
  subLabel?: string;
  children?: Array<NavItemType>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItemType> = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Products',
    href: '#',
  },
  {
    label: 'Gallery',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];
