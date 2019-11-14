import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { Foo } from '../components';



export const Index: React.FunctionComponent = (): JSX.Element => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const meta = site.siteMetadata;

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en-US' }}
        title={meta.title}
        meta={[
          {
            httpEquiv: 'Content-Type',
            content: 'text/html; charset=utf-8',
          },
          {
            name: 'description',
            content: meta.description,
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
      />
      <Foo />
    </>
  );
};

export default Index;
