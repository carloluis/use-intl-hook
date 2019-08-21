import React, { createContext, useContext } from 'react';
import { injectIntl } from 'react-intl';

const IntlContext = createContext({});

const SetIntlContext = ({ intl, children }) =>
  React.createElement(IntlContext.Provider, { value: intl }, children);

/**
 * Use `InjectIntlContext` after the _react-intl_ `IntlProvider` to capture and set the Intl data
 *
 * E.g.:
 *
 * ```jsx
 * <IntlProvider {...} >
 *   <InjectIntlContext>
 *     {...}
 *   <InjectIntlContext/>
 * <IntlProvider/>
 * ```
 */
export const InjectIntlContext = injectIntl(SetIntlContext);

/**
 * Use react-intl `intl` object
 *
 * @returns intl
 * - formatDate(value: DateSource, options?: FormattedDate.PropsBase): string;
 * - formatTime(value: DateSource, options?: FormattedTime.PropsBase): string;
 * - formatRelative(value: DateSource, options?: FormattedRelative.PropsBase & { now?: any }): string;
 * - formatNumber(value: number, options?: FormattedNumber.PropsBase): string;
 * - formatPlural(value: number, options?: FormattedPlural.Base): keyof FormattedPlural.PropsBase;
 * - formatMessage(messageDescriptor: FormattedMessage.MessageDescriptor, values?: {[key: string]: MessageValue}): string;
 * - formatHTMLMessage(messageDescriptor: FormattedMessage.MessageDescriptor, values?: {[key: string]: MessageValue}): string;
 * - locale: string;
 * - formats: any;
 * - messages: { [id: string]: string };
 * - defaultLocale: string;
 * - defaultFormats: any;
 * - now(): number;
 * - onError(error: string): void;
 */
export const useIntl = () => useContext(IntlContext);
