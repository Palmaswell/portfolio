import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';



export const Index = () => {
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
        htmlAttributes={{lang:'en-US'}}
        title={meta.title}
        meta={[

          {
            httpEquiv: 'Content-Type',
            content: 'text/html; charset=utf-8'
          },
          {
            name: 'description',
            content: meta.description,
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ]}
      />
      <div>
        <h1>Hi Mom!!!!!!!</h1>
      </div>
    </>
  );
};

export default Index;
