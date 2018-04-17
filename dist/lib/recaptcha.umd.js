(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('uuid/v4'), require('hyperapp')) :
  typeof define === 'function' && define.amd ? define(['uuid/v4', 'hyperapp'], factory) :
  (global.hyperappInvRecaptcha = factory(global.uuid,global.hyperapp));
}(this, (function (uuid,hyperapp) { 'use strict';

  uuid = uuid && uuid.hasOwnProperty('default') ? uuid['default'] : uuid;

  var renderers = [];
  var container = null;

  var injectScript = function injectScript(locale) {
    window.GoogleRecaptchaLoaded = function () {
      while (renderers.length) {
        var renderer = renderers.pop();
        renderer();
      }
    };

    var script = document.createElement('script');
    script.id = 'recaptcha';
    script.src = 'https://www.google.com/recaptcha/api.js?hl=' + locale + '&onload=GoogleRecaptchaLoaded&render=explicit';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.onerror = function (error) {
      throw error;
    };
    document.body.appendChild(script);
  };

  var createRecaptcha = function createRecaptcha(props, el) {
    var sitekey = props.sitekey,
        locale = props.locale,
        badge = props.badge,
        onResolved = props.onResolved,
        onLoaded = props.onLoaded,
        onInstanceCreated = props.onInstanceCreated;
    /* Default prop values if undefined */

    if (!locale) locale = 'en';
    if (!badge) badge = 'bottomright';
    if (!onLoaded) onLoaded = function onLoaded() {};

    var callbackName = 'GoogleRecaptchaResolved-' + uuid();
    window[callbackName] = onResolved;

    /* Instantiates the recaptcha */
    var loaded = function loaded() {
      if (container) {
        var recaptchaId = window.grecaptcha.render(container, {
          sitekey: sitekey,
          size: 'invisible',
          badge: badge,
          callback: callbackName
        });

        /* Recaptcha functions */
        onInstanceCreated({
          execute: function execute() {
            return window.grecaptcha.execute(recaptchaId);
          },
          reset: function reset() {
            return window.grecaptcha.reset(recaptchaId);
          },
          getResponse: function getResponse() {
            return window.grecaptcha.getResponse(recaptchaId);
          }
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

  var InvisibleRecaptcha = (function (props) {
    return hyperapp.h("div", { oncreate: function oncreate(el) {
        container = el;createRecaptcha(props, el);
      } }, []);
  });

  return InvisibleRecaptcha;

})));
