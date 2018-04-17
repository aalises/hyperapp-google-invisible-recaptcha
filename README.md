# hyperapp-google-invisible-recaptcha

A Hyperapp component that implements the Google Invisible reCAPTCHA.

### [Demo][demo] ###


## Install ##

```sh
npm install hyperapp-google-invisible-recaptcha --save
```

## Usage ##

The library consists of a component that instantiates an invisible reCAPTCHA and provides some functions for performing validation actions. The component is declared as:

```js
import Recaptcha from 'react-google-invisible-recaptcha';

let recaptcha = null; //Stores a reference to the API functions

<Recaptcha
  onInstanceCreated={instance => recaptcha = instance}
  sitekey={ <sitekey> }
  onResolved={ () => console.log( 'Ah, I see you are human' ) } />
```


## Configuration ##

The component accepts the following props:

* **sitekey:** sitekey for your reCAPTCHA. **Required.**
* **onResolved:** callback function when the reCAPTCHA is resolved. **Required.**

Optional props that you can add to tweak the component.

* locale: the language of the reCAPTCHA. **Default: en.**
* badge: `bottomright`, `bottomleft`, or `inline`. Where the visual container is placed on the screen. **Default: bottomright.**
* onLoaded: callback when the recaptcha is loaded. **Default: noop.**


## APIs ##

The component provides functions to validate and obtain information from the reCAPTCHA. Those are:


* **execute:** function that invokes the reCAPTCHA check.
* **reset:** function which resets the reCAPTCHA widget.
* **getResponse:** function which returns the response token.

To access the functions you need to store a reference to the API functions via the `onInstanceCreated` prop.

```js
let recaptcha = null;
<Recaptcha onInstanceCreated={instance => recaptcha = instance} ... />

const executeCaptcha = () => {
  recaptcha.execute(); //API Function
}
```


## Usage Example ##

This minimal example can be found on the example folder of the project.
```js
import { h } from 'hyperapp';
import Recaptcha from 'hyperapp-google-invisible-recaptcha';

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
    <Recaptcha onInstanceCreated={instance => recaptcha = instance} sitekey="<sitekey>" onResolved = {_ => onCaptchaResolved()}/>
    <section>
      <button onclick={_ => recaptcha && executeCaptcha()}>
        Validate Recaptcha
      </button>
    </section>
  </div>;

```

## License

hyperapp-google-invisible-recaptcha is MIT licensed. See [LICENSE](LICENSE).

[demo]: https://aalises.github.io/hyperapp-google-invisible-recaptcha/
