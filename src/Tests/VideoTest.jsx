import React from 'react'

const VideoTest = () => {
  return (
      <div className="aspect-video">
      <iframe
        className="rounded-md w-full"
        src="https://youtube.com/shorts/0zuHYgAMUVo?si=M4lxBgurmNQyDRSb"
        title="video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoTest