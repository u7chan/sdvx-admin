import { FC } from 'react'
import {
  AppBar as RaAppBar,
  AppBarClasses as RaAppBarClasses,
  useTranslate,
  UserMenu as RaUserMenu,
  Logout,
} from 'react-admin'
import { Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { I18nString } from '@/i18n/types'

const UserMenu: FC = () => {
  return (
    <RaUserMenu
      icon={
        <AccountCircle
          sx={{
            height: 30,
            width: 30,
          }}
        />
      }
    >
      <Logout />
    </RaUserMenu>
  )
}

export const AppBar: FC<{ title: I18nString }> = ({ title, ...rest }) => {
  const translate = useTranslate()
  return (
    <RaAppBar {...rest} color='secondary' userMenu={<UserMenu />}>
      <Typography variant='h6' color='inherit' className={RaAppBarClasses.title}>
        {translate(title)}
      </Typography>
    </RaAppBar>
  )
}
