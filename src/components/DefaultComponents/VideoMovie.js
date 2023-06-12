import React, { useMemo, useState, useRef } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { MovieDetailScreenStyle } from '../../styles';
import images from '../../index';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const VideoMovie = props => {
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const MovieDetailScreenStyles = useMemo(
    () => MovieDetailScreenStyle(Colors),
    [Colors],
  );

  const renderToolbar = () => (
    <View>
      <Text style={MovieDetailScreenStyles.toolbar}>{t('Movie_Tickets')}</Text>
    </View>
  );
  const onSeeking = currentTime => setCurrentTime(currentTime);

  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);

  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  const [screenType, setScreenType] = useState('content');

  const onSeek = seek => {
    videoPlayer.current.seek(seek);
  };
  const onPaused = playerState => {
    setPaused(!paused);
    setPlayerState(playerState);
  };
  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };
  const onProgress = data => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };
  const onLoad = data => {
    setDuration(data.duration);
    setIsLoading(false);
  };
  const onLoadStart = data => setIsLoading(true);
  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);
  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == 'content') setScreenType('cover');
    else setScreenType('content');
  };

  return (
    <View style={MovieDetailScreenStyles.MoviewheightSet}>
      <Video
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={paused}
        ref={videoPlayer}
        onFullScreen={isFullScreen}
        source={images.Video_1}
        style={[
          MovieDetailScreenStyles.mediaPlayer,
          {
            width: Dimensions.get('window').width,
          },
        ]}
        volume={10}
        resizeMode={'cover'}
      />
      <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor={Colors.gray_text_color}
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
        toolbar={renderToolbar()}
        fadeOutDelay={500}
      />
    </View>
  );
};
export default VideoMovie;
