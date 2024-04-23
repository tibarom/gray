"use client"
import React from 'react';
import { usePathname } from 'next/navigation';

interface VideoComponentProps {
  children: React.ReactNode;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ children }) => {
  const router = usePathname();
  const isRoot = router === '/';

  return (
    <div className="relative z-0 h-full w-full">
      {isRoot ? (
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-30"
        >
          <source src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/c74791d0-75d2-48e6-acae-96d13bc97c56/paper-planes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-background"></div>
      )}
      <div className="relative z-10 flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  );
};

export default VideoComponent;
