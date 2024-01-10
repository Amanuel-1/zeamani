import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import YouTubePlayer from 'react-player/youtube'
import React from 'react'
import { Tweet } from 'react-tweet'
import { extractTweetId } from 'fireup/lib/utils'
interface PreviewTwitterrops extends PreviewProps {
  selection?: {
    url: string
  }
}

export function twitterPreview(props:any):React.ReactNode {

  return (
    <div data-theme="dark">
      {props.url && <Tweet id={extractTweetId(props.url) as string}/>
      }
    </div>

  )
}