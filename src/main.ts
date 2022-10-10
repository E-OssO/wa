/// <reference types="@workadventure/iframe-api-typings" />

import { getLayersMap } from "@workadventure/scripting-api-extra";

console.log("Script started successfully");

console.log('Problem : \n\
After a setTiles, the "unset" tile with "null" still here and if you go on the position of a "null" tile you got the event onEnterLayer. \n\
\n\
Actions to reproduce : \n\
 - First go on blue carpet. You got the console.log onEnterLayer for tile "layerToMove" \n\
 - Go on the red carpet. The blue carpet are moved \n\
 - Go on the old position of the blue carpet (tile set to null) and you got the console.log onEnterLayer for tile "layerToMove"');

// Waiting for the API to be ready
WA.onInit()
    .then(async () => {
        let layers = await getLayersMap();

        layers.forEach((layer, layerName) => {
            let onEnterLayer = WA.room.onEnterLayer(layerName);
            onEnterLayer.subscribe(async () => {
                console.log("onEnterLayer", layerName, layer);

                if (layerName === "move") {
                    const lName = "layerToMove";
                    let l = layers.get(lName);
                    console.log(l);
                    if (l) {
                        console.log("setTiles");
                        WA.room.setTiles([
                            { x: 5, y: 4, tile: "blue", layer: lName },
                            { x: 6, y: 4, tile: "blue", layer: lName },
                            { x: 7, y: 4, tile: "blue", layer: lName },
                            { x: 5, y: 5, tile: "blue", layer: lName },
                            { x: 6, y: 5, tile: "blue", layer: lName },
                            { x: 7, y: 5, tile: "blue", layer: lName },
                            { x: 5, y: 6, tile: "blue", layer: lName },
                            { x: 6, y: 6, tile: "blue", layer: lName },
                            { x: 7, y: 6, tile: "blue", layer: lName },

                            { x: 1, y: 4, tile: null, layer: lName },
                            { x: 2, y: 4, tile: null, layer: lName },
                            { x: 3, y: 4, tile: null, layer: lName },
                            { x: 1, y: 5, tile: null, layer: lName },
                            { x: 2, y: 5, tile: null, layer: lName },
                            { x: 3, y: 5, tile: null, layer: lName },
                            { x: 1, y: 6, tile: null, layer: lName },
                            { x: 2, y: 6, tile: null, layer: lName },
                            { x: 3, y: 6, tile: null, layer: lName },
                        ]);
                    }
                }
            });
        });
    })
    .catch((e) => console.error(e));

export {};
