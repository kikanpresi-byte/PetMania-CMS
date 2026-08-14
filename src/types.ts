export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
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
  services: ServiceItem[];
}
