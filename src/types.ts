export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
}

export interface SiteContent {
  brandName: string;
  phoneNumber: string;
  heroHeadline: string;
  heroSubtext: string;
  heroImage: string;
  promiseHeadline: string;
  promiseText: string;
  promiseImage: string;
  navLinks: NavItem[];
  services: ServiceItem[];
}
