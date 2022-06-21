/// <reference types="@workadventure/iframe-api-typings" />

import { getLayersMap } from "@workadventure/scripting-api-extra";

console.log("Script started successfully");

// Waiting for the API to be ready
WA.onInit()
    .then(async () => {
        console.log("Scripting API ready");
        console.log("Player tags: ", WA.player.tags);

        let layers = await getLayersMap();

        layers.forEach((layer, layerName) => {
            let onEnterLayer = WA.room.onEnterLayer(layerName);
            onEnterLayer.subscribe(async () => {
                console.log(layerName, layer);

                /**
                 * Room 2
                 * Case : toggle to show/hide and use layer.visible
                 * 
                 * Problem :
                 * After show the layer you can't hide them because l.visible is still false
                 * And property test doesn't exist
                 */
                if (layerName === "Room2/toggle") {
                    const lName = "Room2/layerToToggle";
                    let l = layers.get(lName);
                    if (l) {
                        // Create lName variable and define object with visible property
                        if(!WA.state.hasVariable(lName)){
                            WA.state.saveVariable(lName, {visible: l.visible});
                        }

                        // LoadVariable lName variable
                        const variableLName = WA.state.loadVariable(lName) as {visible: boolean};
                        console.log('variableLName', variableLName);
                        if (!variableLName.visible) {
                            WA.room.showLayer(lName);
                            WA.state.saveVariable(lName, {visible: 1});
                        } else {
                            // this case will never trigger because l.visible is not up-to-date
                            WA.room.hideLayer(lName);
                            WA.state.saveVariable(lName, {visible: 0});
                        }
                    }
                }

                /**
                 * Room 3
                 * Case : Move tile and don't trigger onEnterLayer old position
                 * 
                 * Problem :
                 * After move layer if you go on old position you still get onEnterLayer console.log
                 */
                if (layerName === "Room3/move") {
                    const lName = "Room3/layerToMove";
                    let l = layers.get(lName);
                    if (l) {
                        WA.room.setTiles([
                            { x: 26, y: 4, tile: "blue", layer: lName },
                            { x: 27, y: 4, tile: "blue", layer: lName },
                            { x: 28, y: 4, tile: "blue", layer: lName },
                            { x: 26, y: 5, tile: "blue", layer: lName },
                            { x: 27, y: 5, tile: "blue", layer: lName },
                            { x: 28, y: 5, tile: "blue", layer: lName },
                            { x: 26, y: 6, tile: "blue", layer: lName },
                            { x: 27, y: 6, tile: "blue", layer: lName },
                            { x: 28, y: 6, tile: "blue", layer: lName },

                            { x: 23, y: 4, tile: null, layer: lName },
                            { x: 24, y: 4, tile: null, layer: lName },
                            { x: 25, y: 4, tile: null, layer: lName },
                            { x: 23, y: 5, tile: null, layer: lName },
                            { x: 24, y: 5, tile: null, layer: lName },
                            { x: 25, y: 5, tile: null, layer: lName },
                            { x: 23, y: 6, tile: null, layer: lName },
                            { x: 24, y: 6, tile: null, layer: lName },
                            { x: 25, y: 6, tile: null, layer: lName },
                        ]);
                    }
                }
            });
        });
    })
    .catch((e) => console.error(e));

export {};
