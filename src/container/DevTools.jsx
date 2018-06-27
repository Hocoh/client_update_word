import React from "react" ;
// importing devtools 
import {createDevTools} from "redux-devtools";

// import monitors 
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

// createDevTools helper function in order to create a 
// DevTools component 
export const DevTools=createDevTools( 
    <DockMonitor 
        toggleVisibilityKey="shift-q"
        changePositionKey="shift-h"
        defaultIsVisible={true}>
    <LogMonitor theme="tomorrow" />
    </DockMonitor>
)
 
export default DevTools