export interface InvokeTapdata {
    clientId: string;
    cancelTapOnClickingOutside: boolean;
    callback: (data: any) => void;
    notificationCallback: (data: any) => void;
}