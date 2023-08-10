# Google Auth Companinon

This plugin concentrated on usage of [google identity authentication](https://developers.google.com/identity/gsi/web/guides/overview).
Each methods are created to reduce code size of the developer end.

- [Document](https://developers.google.com/identity/gsi/web/guides/overview)


## Available Methods
- invokeOneTap
- cancelTap
- disableAutoSelect
- storeCredential
- revoke
- renderGoogleButton

## Install

`npm install google-auth-companinon`

## Usage

```
    import { GoogleAuthCompanion } from 'google-auth-companinon';

    const googleAuth = new GoogleAuthCompanion();

    googleAuth.initialize({
        clientId: 'YOUR_CLIENT_ID',
        callback: this['YOUR_RESPONSE_HANDLER_METHOD'],
        ...
    });

    googleAuth.invokeOneTap();

    googleAuth.cancelTap();

    googleAuth.disableAutoSelect();

    googleAuth.storeCredential();

    googleAuth.revoke(loginHint);

    googleAuth.renderGoogleButton({
        clickListener: this['YOUR_METHOD_NAME'];
        buttonContainer: document.getElementById('personalizedButton');
        style: {
            type: 'standard';
            theme: 'outline';
            size: 'large';
            text: 'signin_with';
            shape: 'rectangular';
            logoAlignment: 'left';
            width: 400;
            locale: 'en';
        }
    });

```