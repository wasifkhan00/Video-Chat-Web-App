import React from "react";

const Notifications = () => {

  const requestNotificationPermission = () =>{
  
  }
  
    //     if (Notification.permission === "granted" ) {
    //         new Notification('ANdee d taal kae?');
    //       } else {
    //         console.log("Notifications are disabled or permission not granted.");
    //       }
    //     if ("Notification" in window) {
    //       if (Notification.permission === "default") {
    //         try {
    //           const permission = await Notification.requestPermission();
    //           if (permission === "granted") {
    //             console.log("Notification permission granted.");
    //           } else {
    //             console.log("Notification permission denied.");
    //           }
    //         } catch (error) {
    //           console.error("Notification permission request failed:", error);
    //         }
    //       } else {
    //         console.log("Notification permission already granted or denied.");
    //       }
    //     } else {
    //       console.warn("This browser does not support notifications.");
    //     }
    //     console.log('Notifications Requested')
      

  return <div className="cameraParent">
    <button onClick={requestNotificationPermission}>Notifications check</button>
  </div>;
}
export default Notifications;
