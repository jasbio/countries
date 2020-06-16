import React, { FunctionComponent, useLayoutEffect, useRef } from 'react'
import { css } from 'linaria'
import gsap from 'gsap'
import { DDConst } from './drop_down_constants'

interface DropDownFlagProp {
  srcFlag: string
  className?: string
}

const container = css`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  opacity: 0;
  border: 2px solid ${DDConst.primaryColor}1a;
`

const image = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const DropDownFlag: FunctionComponent<DropDownFlagProp> = props => {
  const ref = useRef<HTMLImageElement>()
  useLayoutEffect(() => {
    // gsap.to(`.${image}`, { duration: 0.5, opacity: 0 })
    // gsap.fromTo(
    //   ref.current,
    //   { opacity: 1, scale: 1 },
    //   {
    //     duration: 0.3,
    //     opacity: 0,
    //     scale: 0.7,
    //     ease: 'expo',
    // }
    // )
    gsap.set(ref.current, { opacity: 0 })
  }, [props.srcFlag])
  return (
    <div className={`${container} ${props.className}`} ref={ref}>
      <img
        className={image}
        key={props.srcFlag}
        src={props.srcFlag}
        alt=""
        onLoad={() => {
          gsap.fromTo(
            ref.current,
            { opacity: 0, scale: 0.7 },
            {
              duration: 0.6,
              opacity: 1,
              scale: 1,
              ease: 'expo',
            }
          )
        }}
      />
    </div>
  )
}
