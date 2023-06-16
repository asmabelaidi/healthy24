import React, { ReactPropTypes } from 'react'

interface BrandTextProps {
  style?: React.CSSProperties;
  styleIcon?: React.CSSProperties;
}

export default function BrandText({ style, styleIcon }: BrandTextProps) {
  return (
    <span className="blue-bold" style={style}>Healthy 24.
      <span className="brand-text-icon" style={styleIcon}>
        <img src="/assets/icons/orange-plus.png" />
      </span>
    </span>
  )
}