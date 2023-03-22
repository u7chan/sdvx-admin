import { defaultTheme, RaThemeOptions } from 'react-admin'
import { colors } from './colors'

const defaultOverrideTheme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    secondary: {
      main: colors.palette.secondary.main
    }
  },
  components: {
    ...defaultTheme.components,
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        sx: {
          marginBottom: 2
        }
      }
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          backgroundColor: colors.input.background.enable
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'outlined'
      }
    }
  }
}

export const theme = {
  ...defaultOverrideTheme,
  components: {
    ...defaultOverrideTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          '& svg': {
            width: 20
          },
          height: 50
        }
      }
    },
    RaLayout: {
      styleOverrides: {
        root: {
          '& #main-content': {
            paddingTop: 12
          }
        }
      }
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          '& .RaDatagrid-tbody': {
            '& .RaDatagrid-row': {
              height: 54
            }
          }
        }
      }
    }
  }
}
