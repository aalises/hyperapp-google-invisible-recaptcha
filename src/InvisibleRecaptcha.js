import { h } from 'hyperapp';
import uuid from 'uuid/v4';

const renderers = [];
let container = null;

const injectScript = (locale) => {
  window.GoogleRecaptchaLoaded = () => {
    while (renderers.length) {
      const renderer = renderers.pop();
      renderer();
    }
  };

  const script = document.createElement('script');
  script.id = 'recaptcha';
  script.src = `https://www.google.com/recaptcha/api.js?hl=${locale}&onload=GoogleRecaptchaLoaded&render=explicit`;
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;
  script.onerror = function (error) { throw error; };
  document.body.appendChild(script);
};

const createRecaptcha = (props) => {
  const {
    sitekey, locale = 'en', badge = 'bottomright', onResolved, onLoaded = function onLoaded() {}, onInstanceCreated,
  } = props;

  const callbackName = `GoogleRecaptchaResolved-${uuid()}`;
  window[callbackName] = onResolved;

  /* Instantiates the recaptcha */
  const loaded = () => {
    if (container) {
      const recaptchaId = window.grecaptcha.render(container, {
        sitekey,
        size: 'invisible',
        badge,
        callback: callbackName,
      });

      /* Recaptcha functions */
      onInstanceCreated({
        execute: () => window.grecaptcha.execute(recaptchaId),
        reset: () => window.grecaptcha.reset(recaptchaId),
        getResponse: () => window.grecaptcha.getResponse(recaptchaId),
      });

      onLoaded();
    }
  };

  if (window.grecaptcha) {
    loaded();
  } else {
    renderers.push(loaded);
    if (!document.querySelector('#recaptcha')) {
      injectScript(locale);
    }
  }
};


export default props => (
  h('div', { oncreate: (el) => { container = el; createRecaptcha(props); } }, [])
);
