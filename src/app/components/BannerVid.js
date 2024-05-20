import React from 'react'

export const BannerVid = () => {
  return (
    <div>
        <video  className="absolute -z-10 ban-vv w-full opacity-5"
        autoplay="true"
        loop="true"
        muted="true"
        src="banner.mp4"
        type="video/mp4"
      />
    </div>
  )
}
