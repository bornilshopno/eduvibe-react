import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Room = () => {

  const { roomId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [joined, setJoined] = useState(false);
  const [callType, setCallType] = useState("");

  const zpRef = useRef(null)
  const videoContainerRef = useRef(null);
  //zegocloud
  const myMeeting = (type) => {
    // generate Kit Token
    const APPID = import.meta.env.VITE_zegoId
    const appID = Number(APPID);
    const serverSecret = import.meta.env.VITE_zegoSecret;
    console.log(appID, serverSecret)
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Your Name");

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
zpRef.current=zp;
    // start the call
    zp.joinRoom({
      container: videoContainerRef.current,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname+"?type="+ encodeURIComponent(type),
        },
      ],
      scenario: {
        mode: type === "one-on-one-call" ? ZegoUIKitPrebuilt.OneONoneCall : ZegoUIKitPrebuilt.GroupCall,
      },

      maxUsers: type=== "one-on-one-call" ? 2 :10 ,
      onJoinRoom:()=>{
        setJoined(true)
      },
      onLeaveRoom:()=>{
        navigate("/")
      }
    });
  }

  // Handle exit from the room
  const handleExit = () => {
    if (zpRef.current) {
      zpRef.current.destroy();
    }
    navigate("/");
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get("type");

    setCallType(type); // Update state with call type
  }, [location.search]);

  useEffect(() => {
    if (callType) {
      myMeeting(callType);
    }
  
    return () => {
      try {
        if (zpRef.current) {
          zpRef.current.destroy();
        }
      } catch (error) {
        console.error("Error during zpRef cleanup:", error);
      }
    };
  }, [callType]);
  return (
    <div className="room-container flex flex-col h-[100vh] relative">
   {!joined && (
        <>
          <header className="room-header bg-[#282c34] p-4 text-center text-2xl text-white">
            {callType === "one-on-one"
              ? "One-on-One Video Call"
              : "Group Video Call"}
          </header>
          <button className="exit-button absolute top-4 right-4 px-4 py-2 bg-red-600 text-white border-none rounded-md cursor-pointer" onClick={handleExit}>
            Exit
          </button>
        </>
      )}

<div ref={videoContainerRef}>

</div>
    </div>
  );
};

export default Room;