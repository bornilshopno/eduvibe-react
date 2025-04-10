import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {

    const {roomId}=useParams();
    const videoContainerRef=useRef(null);
    //zegocloud
    const myMeeting=()=>{
             // generate Kit Token
      const appID = Number(import.meta.env.VITE_zegoId);
      const serverSecret = import.meta.env.VITE_zegoSecret;
      console.log(appID, serverSecret)
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),  "Your Name");

        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
       
         // start the call
      zp.joinRoom({
        container: videoContainerRef.current,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname 
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }

       

    useEffect(()=>{
        myMeeting()
    },[])
    return (
        <div ref={videoContainerRef}>
         
        </div>
    );
};

export default Room;