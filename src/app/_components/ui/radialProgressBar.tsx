import clsx from 'clsx'
import React from 'react'

type RadialProgressBarProps ={
    value:number,
    label:string,
    status?:string
}
const RadialProgressBar = (props:RadialProgressBarProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
    <div className={clsx("radial-progress ",{"text-[#1e4e1be7]":props.value>=70,"text-[#d4bd1092]":props.value>30&&props.value<70,"text-[#ab090978]":props.value<=30})} style={{"--value":props.value} as any} role="progressbar">{props.value}%</div>
    <span className=''>{props.label}</span>
    </div>
  )
}

export default RadialProgressBar