import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LiveClass = () => {
    const [roomId,setRoomId]=useState("");
    console.log(roomId);
    const navigate=useNavigate()

    const handleRoomIdGenerate=()=>{
        const randomId=Math.random().toString(36).substring(2,9);
        const timestamp=Date.now().toString().substring(-4);
        setRoomId(randomId+timestamp);
    }
    const handleOneAndOneCall=()=>{
        if(!roomId){
            alert("Please GENERATE roomId first");
            return
        }
        navigate(`/room/${roomId}?type=one-on-one-call`)
    }

    const handleGroupCall=()=>{
        if(!roomId){
            alert("Please GENERATE roomId first");
            return
        }
        navigate(`/room/${roomId}?type=group-call`)
    }

    return (
        <div className='homepage-container flex justify-center items-center h-[100vh] bg-gray-100 text-gray-500'>
            <div className="hompage-content text-center">
                <h1 className="homepage-title text-4xl mb-3 text-gray-700">
                    Welcome to the Online Classroom
                </h1>
                <p className="homepage-subtitle text-lg mb-5 text-gray-500">
                    Stat a video call with randomly generated Room ID
                </p>
                <div className="room-id-containter flex justify-center items-center mb-5">
                    <input type="text" name="" id=""
                    className='p-3 mr-1 border rounded-lg w-56 text-lg text-center'
                    placeholder='Generated Room ID'
                    value={roomId}
                    readOnly />
                    <button className='generate-button px-3 py-3 bg-blue-500 text-white rounded-xl border-none text-lg cursor-pointer hover:bg-green-400'
                    onClick={handleRoomIdGenerate}>Generate</button>
                </div>
                <div className="call-buttons flex justify-center mt-5">
                    <button className="call-button px-8 py-2 mx-3 bg-blue-500 text-white rounded-xl border-none text-lg cursor-pointer hover:bg-green-500" disabled={!roomId} onClick={handleOneAndOneCall}>
                        One-on-One Call
                    </button>
                    <button className="call-button call-button px-8 py-2 mx-3 bg-blue-500 text-white rounded-xl border-none text-lg cursor-pointer hover:bg-green-500" disabled={!roomId} onClick={handleGroupCall}>
                        Group-Call
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LiveClass;