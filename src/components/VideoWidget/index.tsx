import React from 'react';
import { VideoWidgetProps } from './types';
import { getYoutubeId, getVimeoId } from '../../utils/helpers';

const aspectRatioMap: Record<string, string> = {
  '16/9': '56.25%',
  '4/3': '75%',
  '1/1': '100%',
  '9/16': '177.78%',
  '21/9': '42.86%',
};

const VideoWidget: React.FC<VideoWidgetProps> = ({
  url,
  autoplay = false,
  loop = false,
  muted = false,
  poster,
  controls = true,
  aspectRatio = '16/9',
  borderRadius = '8px',
  boxShadow,
  className = '',
  style = {},
}) => {
  const youtubeId = getYoutubeId(url);
  const vimeoId = getVimeoId(url);
  const paddingTop = aspectRatioMap[aspectRatio] || '56.25%';

  const wrapperDynamicStyle: React.CSSProperties = {
    paddingTop,
    ...(borderRadius ? { borderRadius } : {}),
    ...(boxShadow ? { boxShadow } : {}),
    ...style,
  };

  const innerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  if (youtubeId) {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      loop: loop ? '1' : '0',
      mute: muted || autoplay ? '1' : '0',
      controls: controls ? '1' : '0',
      rel: '0',
      ...(loop ? { playlist: youtubeId } : {}),
    });
    return (
      <div className={`eru-video position-relative width-full overflow-hidden ${className}`} style={wrapperDynamicStyle}>
        <iframe
          style={innerStyle}
          src={`https://www.youtube.com/embed/${youtubeId}?${params.toString()}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (vimeoId) {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      loop: loop ? '1' : '0',
      muted: muted || autoplay ? '1' : '0',
      controls: controls ? '1' : '0',
    });
    return (
      <div className={`eru-video position-relative width-full overflow-hidden ${className}`} style={wrapperDynamicStyle}>
        <iframe
          style={innerStyle}
          src={`https://player.vimeo.com/video/${vimeoId}?${params.toString()}`}
          title="Vimeo video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={`eru-video position-relative width-full overflow-hidden ${className}`} style={wrapperDynamicStyle}>
      <video
        style={innerStyle}
        src={url}
        poster={poster}
        autoPlay={autoplay}
        loop={loop}
        muted={muted || autoplay}
        controls={controls}
        playsInline
      />
    </div>
  );
};

export default VideoWidget;
