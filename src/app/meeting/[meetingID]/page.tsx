'use client'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef } from 'react';

export default function Page({ params }: { params: { meetingID: string } }) {
  const roomID = params.meetingID;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startMeeting = async () => {
      if (containerRef.current) {
        // Generate Kit Token
        const appID = Number(process.env.NEXT_PUBLIC_APP_ID);
        const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRET as string;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          Math.floor(Math.random() * 10000 +1).toString(),
          "Enter Your name or Nickname"
        );

        console.log('Generated Kit Token:', kitToken); // Log the token for debugging

        // Create instance object from Kit Token
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        console.log('ZegoUIKitPrebuilt Instance:', zp); // Log the instance for debugging

        // Start the call
        zp.joinRoom({
          container: containerRef.current,
          sharedLinks: [
            {
              name: 'Personal link',
              url: window.location.protocol + '//' + 
                   window.location.host + window.location.pathname +
                   '?roomID=' + roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // Change to ZegoUIKitPrebuilt.OneONoneCall for 1-on-1 calls
          },
        });
      }
    };

    startMeeting();
  }, [roomID]);

  return (
    <div ref={containerRef} className='w-[100vw] h-[100vh]'>
      {/* Meeting UI will be rendered here */}
    </div>
  );
}
