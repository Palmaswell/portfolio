import { createMetaTags, MetaAttributeProps } from '..';

describe('Html Head', () => {
  let metaTagsMock: MetaAttributeProps[] | undefined;

  beforeAll(() => {
    metaTagsMock = [
      {
        httpEquiv: 'Content-Type',
        content: 'text/html; charset=utf-8',
      },
      {
        name: 'description',
        content: 'result description',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ];
  });
  afterAll(() => {
    metaTagsMock = undefined;
  });

  describe('createMetaTags()', () => {
    it('should return an array containing the meta tags containing the passed description', () => {
      expect(createMetaTags('result description')).toEqual(metaTagsMock);
    });
  });
});
