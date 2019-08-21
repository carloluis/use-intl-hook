# use-intl-hook

> React `use-intl-hook` for [react-intl](https://github.com/formatjs/react-intl).

## Install

```bash
yarn add use-intl-hook
```

## Usage

```jsx
import 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { InjectIntlContext, useIntl } from 'use-intl-hook';

import { locale, messages } from './i18n';

const Example = () => {
  // call the useIntl hook to get the intl object from react-intl
  const intl = useIntl();
  return <h1>{intl.formatMessage({ id: 'salutation' })}</h1>;
};

// Include `InjectIntlContext` up in the tree to store the intl object from react-intl
ReactDOM.render(
  <IntlProvider key={locale} locale={locale} messages={messages}>
    <InjectIntlContext>
      <Example />
    </InjectIntlContext>
  </IntlProvider>,
  document.querySelector('#app')
);
```
