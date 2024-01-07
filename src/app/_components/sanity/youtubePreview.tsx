import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import YouTubePlayer from 'react-player/youtube'
import React from 'react'

interface PreviewYouTubeProps extends PreviewProps {
  selection?: {
    url: string
  }
}

export function YouTubePreview(props:any):React.ReactNode {

  return (
    <YouTubePlayer url={props.url} />
  )
}