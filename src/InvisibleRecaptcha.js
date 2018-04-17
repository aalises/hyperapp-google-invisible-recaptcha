import { h } from 'hyperapp';
import uuid from 'uuid/v4';

const renderers = [];
let container = null;

const injectScript = locale => {
  window.GoogleRecaptchaLoaded = () => {
    while ( renderers.length ) {
      const renderer = renderers.pop();
      renderer();
    }
};

const script = document.createElement( 'script' );
  script.id = 'recaptcha';
  script.src = `https://www.google.com/recaptcha/api.js?hl=${locale}&onload=GoogleRecaptchaLoaded&render=explicit`;
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;
  script.onerror = function( error ) { throw error; };
  document.body.appendChild( script );
};

const createRecaptcha = (props,el) => {
    let { sitekey, locale, badge, onResolved, onLoaded, onInstanceCreated } = props;
    /* Default prop values if undefined */
    if(!locale) locale = 'en';
    if(!badge) badge = 'bottomright';
    if(!onLoaded) onLoaded = function onLoaded() {};

    let callbackName = 'GoogleRecaptchaResolved-' + uuid();
    window[ callbackName ] = onResolved;

    /* Instantiates the recaptcha */
    const loaded = () => {
        if ( container ) {
          const recaptchaId = window.grecaptcha.render( container, {
            sitekey,
            size: 'invisible',
            badge,
            callback: callbackName
          });
          
          /* Recaptcha functions */
          onInstanceCreated({
            execute: () => window.grecaptcha.execute(recaptchaId),
            reset: () => window.grecaptcha.reset(recaptchaId),
            getResponse: () => window.grecaptcha.getResponse(recaptchaId)
          })

          onLoaded();
        }
    };

    if ( window.grecaptcha ) {
        loaded();
    } else {
        renderers.push( loaded );
        if ( !document.querySelector( '#recaptcha' ) ) {
          injectScript( locale );
        }
    }
}


export default (props) => (
  <div oncreate = {el => {
        container = el; //We store a reference to the node
        createRecaptcha(props,el); 
      }}>
  </div>
);
