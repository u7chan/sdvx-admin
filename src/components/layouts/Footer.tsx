import { FC } from 'react'
import { Typography } from '@mui/material'

export const Footer: FC<{ title: string }> = ({ title }) => {
  if (title === '') return null
  return (
    <Typography
      style={{
        fontSize: '0.8rem',
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        padding: 6,
        color: '#999999',
        backgroundColor: '#efefef',
        textAlign: 'center',
      }}
    >
      <strong>
        `(c) ${new Date().getFullYear()} ${title}`
      </strong>
    </Typography>
  )
}
