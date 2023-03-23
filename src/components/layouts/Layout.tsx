import { FC } from 'react'
import { Layout as RaLayout, LayoutProps as RaLayoutProps } from 'react-admin'
import { Typography } from '@mui/material'
import { Footer } from './Footer'

export const Layout: FC<RaLayoutProps> = ({ appBar, children, ...rest }) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <RaLayout {...rest} appBar={appBar}>
      <Typography id='react-admin-title' />
      {children}
    </RaLayout>
    <Footer title='' />
  </>
)
