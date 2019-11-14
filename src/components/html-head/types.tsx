export type Lang = 'en' | 'en-US' | 'en-UK' | 'es' | 'es-CR';

export interface HtmlHeadProps {
  title: string;
  description: string;
  lang: Lang;
}

export interface MetaAttributeProps {
  [key: string]: string
}
