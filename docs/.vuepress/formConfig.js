import { de } from '@formkit/i18n'
//import '@formkit/themes/genesis'
import { generateClasses } from '@formkit/themes'

const formClasses = {
  global: { // applies to all input types
    outer: '$reset o-field o-field--mobile', // __body'
  },
  text: { // only applies to text input type
    outer: '$reset o-input__wrapper',
    input: '$reset o-input'
  },
  email: { // only applies to email input type
    outer: '$reset o-input__wrapper',
    input: '$reset o-input',
    messages: "$reset",  // goes to list
    message: "$reset o-field__message"    // goes to list item => no decoration
  },
  checkbox: {
    outer: '$reset o-field o-field--mobile',
    input: '$reset', // o-chk__input',
    inner: '$reset o-field',
    label: '$reset ',
  },
  submit: {
    outer: '$reset o-btn_wrapper',
    input: '$reset o-btn o-btn--medium o-btn--warning',
    label: '$reset o-btn__label',
  },
}

const config = {
  locales: { de },
  locale: 'de',
  config: {
    classes: generateClasses(formClasses)
  }
}

export default config
