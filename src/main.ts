/// <reference types="@workadventure/iframe-api-typings" />

WA.onInit()
    .then(async () => {
        // Disable meeting
        if (WA.controls && WA.controls.disablePlayerProximityMeeting) {
            console.log("disablePlayerProximityMeeting");
            WA.controls.disablePlayerProximityMeeting();
        }
    })
    .catch((e) => console.error(e));

export {};
