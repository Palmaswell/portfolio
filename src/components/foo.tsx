import * as React from 'react';
import styled from "@emotion/styled"

// tslint:disable-next-line: no-any
const StyledFoo = styled.h1<any>`
  color: papayawhip;
  font-size: 42px;
`

export const Foo: React.FunctionComponent = (): JSX.Element => (
  <div>
    <StyledFoo>Hi Mom!!!!!!!</StyledFoo>
  </div>
);
