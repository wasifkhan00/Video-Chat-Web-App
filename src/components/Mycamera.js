import React from "react";
import Webcam from "react-webcam";
import "../styles/Mycamera.css";

const Mycamera = () => {

  let x = 15 * 5;
debugger;
console.log(x)


  const videoConstraints = {
    width: 4000,
    height: 1080,
    facingMode: "user"

  };
// debugger;

  return (
    <div className="cameraParent">
 
      <Webcam
        height={300}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
        audio={true}
      />
      {/* <Webcam
        height={300}
        screenshotFormat="image/jpeg"
        width={500}
        audio={true}
      /> */}
    </div>
  );
};

export default Mycamera;
