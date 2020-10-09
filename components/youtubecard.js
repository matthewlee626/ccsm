import YouTube from 'react-youtube'

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
};

export const YoutubeCard = props => (
    <YouTube 
        videoId = {props.videoId}
        opts={opts}
    />
)