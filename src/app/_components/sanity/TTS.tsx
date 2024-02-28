'use client'
import textToSpeech from 'fireup/lib/tts';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { File, Timeline } from 'sanity';
import { useWavesurfer } from '@wavesurfer/react'
import { boolean } from 'zod';
import { Block, SPost } from 'fireup/lib/types';
import { blocksToText } from 'fireup/lib/utils';
import { PauseIcon, PlayIcon } from '@radix-ui/react-icons';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { URL, Url } from 'url';

const AudioPlayer = ({audioUrl}:{audioUrl:any}) => {
  // Define a state variable to hold the audio URL
  const containerRef = useRef(null)


  // const bodyText:string  = blocksToText(blogBody)
  // Define a function to fetch the audio data and set the URL state variable
  const handleAudioFetch = async () => {
    // Call the textToSpeech function to generate the audio data for the text "Hello welcome"
    // const data = await textToSpeech(bodyText.substring(0,1000))
    // // Create a new Blob object from the audio data with MIME type 'audio/mpeg'
    // const blob = new Blob([data], { type: 'audio/mpeg' });
    // // Create a URL for the blob object
    // const url = URL.createObjectURL(blob);

  };


  useEffect(()=>{
    handleAudioFetch()
  },[])



  
  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    /** HTML element or CSS selector (required) */
    container: containerRef,
    /** The height of the waveform in pixels */
    height: 60,
    /** The width of the waveform in pixels or any CSS value; defaults to 100% */
    width: '100%',
    /** Render each audio channel as a separate waveform */
  
    /** Stretch the waveform to the full height */
    // normalize: false,
    /** The color of the waveform */
    waveColor: '#ff4e00',
    /** The color of the progress mask */
    progressColor: '#dd5e98',
    /** The color of the playpack cursor */
    cursorColor: '#ddd5e9',
    /** The cursor width */
    cursorWidth: 2,
    /** Render the waveform with bars like this: ▁ ▂ ▇ ▃ ▅ ▂ */
    barWidth: 2,
    /** Spacing between bars in pixels */
    barGap: 4,
    /** Rounded borders for bars */
    barRadius: 5,
    /** A vertical scaling factor for the waveform */
    // barHeight: 10,
    /** Minimum pixels per second of audio (i.e. zoom level) */
    // minPxPerSec: 1,
    /** Stretch the waveform to fill the container, true by default */
    fillParent: true,
    /** Audio URL */
    url:audioUrl?.toString(),
    /** Whether to show default audio element controls */
    mediaControls: false,
    /** Play the audio on load */
    autoplay: false,
    /** Pass false to disable clicks on the waveform */
    interact: true,
    /** Allow to drag the cursor to seek to a new position */
    dragToSeek: false,
    /** Hide the scrollbar */
    hideScrollbar: true,
    /** Audio rate */
    audioRate: 1,
    /** Automatically scroll the container to keep the current position in viewport */
    autoScroll: true,
    /** If autoScroll is enabled, keep the cursor in the center of the waveform during playback */
    autoCenter: true,
    /** Decoding sample rate. Doesn't affect the playback. Defaults to 8000 */
    sampleRate: 8000,
    
  }
  )

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause()
  }, [wavesurfer])

  return (
    <div className='w-full flex flex-row-reverse justify-around items-center px-2 md:px-10 py-2 md:py-4 dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] dark:hover:bg-[rgb(12,11,11)] text-stone-900 dark:text-stone-200'>
      {audioUrl?(<div ref={containerRef} className='min-h-fit  w-[90%]'/>):(
        <div className="w-full text-start h-full">unabled to load audio_ {audioUrl+"mp3"} </div>
      )}

      <div className='w-[10%] text-2xl font-semibold text-center align-middle text-stone-700 dark:text-stone-300'>
        {/* <p className="">{bodyText.substring(0,2500)}</p> */}
        <button onClick={onPlayPause} style={{ minWidth: '5em' }}>
          {isPlaying ?  <FaPause/>:<FaPlay/>}
        </button>
      </div>
    </div>
  )
};

export default AudioPlayer;