import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Foo, HtmlHead } from '../components';

export const Index: React.FunctionComponent = (): JSX.Element => {
  // tslint:disable-next-line: no-void-expression
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
      <HtmlHead
        lang="en-US"
        title={meta.title}
        description={meta.description}
      />
      <Foo />
    </>
  );
};

export default Index;
