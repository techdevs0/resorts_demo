import React from 'react';
import { Pannellum } from "pannellum-react";

const RoomVR360 = (props) => {
  return (
    <div className="room-360-wrapper">
      <h3>View in 360<sup>&deg;</sup> Panaroma</h3>
      {
        props.image &&
        <Pannellum
          width="100%"
          height="350px"
          image={props.image}
          pitch={0}
          yaw={180}
          hfov={110}
          autoLoad
          onLoad={() => {
            console.log("360 Image Loaded");
          }}
        >
        </Pannellum>
      }
    </div>
  );
}

export default RoomVR360;