export interface DocsSiteTheme {
  href: string;
  isDark?: boolean;
  isDefault?: boolean;
  name: string;
}
/**
 * isDefault ThemeService.updateDefaultThemeDefinition da güncellenmekte.
 */
export const DocSiteThemes: DocsSiteTheme[] = [
  {
    href: 'light.scss',
    isDark: false,
    isDefault: true,
    name: 'corporate',
  },
  {
    href: 'dark.scss',
    isDark: true,
    name: 'dark',
  },
];
