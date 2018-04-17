import { h } from 'hyperapp';
import Header from './Header';
import Recaptcha from '../..';

let recaptcha = null;

const onCaptchaResolved = () => {
  alert(`Captcha solved with response: ${recaptcha.getResponse()}`);
}

const executeCaptcha = () => {
  recaptcha.reset();
  recaptcha.execute();
}

export default ({}, {}) =>
  <div>
    <Header />
    <Recaptcha onInstanceCreated={instance => recaptcha = instance} sitekey="6LcbGj4UAAAAACOzp7aOXS6J4kTJBRPJNy5O3JBh" onResolved = {_ => onCaptchaResolved()}/>
    <section>
      <button onclick={_ => recaptcha && executeCaptcha()}>
        Validate Recaptcha
      </button>
    </section>
  </div>;
