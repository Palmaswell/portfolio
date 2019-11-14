import * as React from 'react';
import Helmet from 'react-helmet';

import { HtmlHeadProps, MetaAttributeProps } from './';

export const createMetaTags = (desc: string): MetaAttributeProps[] => [
  {
    httpEquiv: 'Content-Type',
    content: 'text/html; charset=utf-8',
  },
  {
    name: 'description',
    content: desc,
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  },
];

export const HtmlHead: React.FunctionComponent<HtmlHeadProps> = (
  props
): JSX.Element => (
  <Helmet
    htmlAttributes={{ lang: props.lang }}
    title={props.title}
    meta={createMetaTags(props.description)}
  />
);
