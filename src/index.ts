import { InvokeTapdata } from "./interface";

export class GoogleWebSignIn {

    private isLoaded = false;
    google: any;

    constructor() { this.uploadScript(); }

    private uploadScript = (): void => {
        try {
            const scriptUrl = 'https://accounts.google.com/gsi/client';
            if (window !== undefined) {
                const headTag = document.head;
                let isScriptExists = false;
                const allScripts = headTag.getElementsByTagName('script');
                for (let i = 0, l = allScripts.length; i < l; i++) {
                    if (allScripts[i].src === scriptUrl) {
                        isScriptExists = true;
                        break;
                    }
                }
    
                if (!isScriptExists) {
                    const scriptTag = document.createElement('script');
                    scriptTag.src = scriptUrl;
                    scriptTag.async = true;
                    scriptTag.onload = (ev: any) => {
                        console.log(ev);
                        this.isLoaded = true;
                    }
                    headTag.appendChild(scriptTag);
                } else {
                    this.isLoaded = true;
                }
            } else {
                throw new Error("Couldn't find [window]");
            }
        } catch (e) {
            throw e;
        }
    }

    invokeOneTap = (data: InvokeTapdata) => {
        try {
            if (this.isLoaded) {
                if (this.google) {
                    this.google.accounts.id.initialize({
                        client_id: data.clientId,
                        cancel_on_tap_outside: data.cancelTapOnClickingOutside ?? true,
                        ...(data.callback && { callback: data.callback })
                    });
                    this.google.accounts.id.prompt((notification: any) => {
                        data.notificationCallback && data.notificationCallback(notification);
                    });
                } else {
                    throw new Error("Couldn't find [google].");
                }
            } else {
                console.log("Script is not loaded yet.");
            }
        } catch (e) {
            throw e;
        }
    }

    cancelTap = () => this.google && this.google.accounts.id.cancel();
}