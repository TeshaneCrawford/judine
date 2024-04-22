export type SiteConfig = {
  name: string;
  title: string;
  address?: string;
  footerNavigationLinks?: {
    text: string;
    to: string;
  }[];
  socialLinks?: {
    title?: string;
    logo: string;
    to: string;
  }[];
}

export const useSiteConfig = (): Ref<SiteConfig> => {
  return ref<SiteConfig>({
    name: 'Judine Fiddler',
    title: 'Judine Fiddler - Artist',
    address: '1234 Main St, Bronx, NY 10456, USA',
    footerNavigationLinks: [
      {
        text: 'Terms of Use',
        to: '/terms-of-use'
      },
      {
        text: 'Privacy Policy',
        to: '/privacy-policy'
      },
      {
        text: 'Contact',
        to: '/contact'
      }
    ],
    socialLinks: [
      {
        title: 'Instagram',
        logo: 'i-ri-instagram-line',
        to: 'https://www.instagram.com/judinefiddler/'
      },
      {
        title: 'Facebook',
        logo: 'i-ri-facebook-fill',
        to: 'https://www.facebook.com/judinefiddler/'
      },
      {
        title: 'Twitter',
        logo: 'i-ri-twitter-x-fill',
        to: 'https://x.com/judinefiddler'
      },
      {
        title: 'Threads',
        logo: 'i-ri-threads-fill',
        to: 'https://www.threads.net/@judinefiddler'
      },
      {
        title: 'LinkedIn',
        logo: 'i-ri-linkedin-fill',
        to: 'https://www.linkedin.com/in/judinefiddler/'
      }
    ]
  });
}