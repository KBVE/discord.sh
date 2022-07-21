import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// @mui
import { styled, alpha } from '@mui/material/styles'
import { useMediaQuery, useTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
// @mui/icons-material
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from SearchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
})

export default function DSHApp({ Component, pageProps }) {
  /**
   * The following layout should persist across page changes.
   * StyledEngineProvider forces our theme to override any existing CSS
   * ThemeProvider injects the theme from above
   * CssBaseline makes sure the body and text by default are themed based on
   * our theme (without this the page was white but a lot of the internal colors were set for dark mode)
   * 
   * Then we have the AppBar with a search bar (will need to be turned into its own component later) and
   * a toolbar that includes a single button to open a drawer (needs implementation)
   */

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Fragment>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Discord.sh</title>
          </Head>
          <Box sx={{ flexGrow: 1, bgcolor: (theme) => theme.palette.paper }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  // This title disappears on mobile intentionally, should reappear somewhere else
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  Discord.sh
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
            <Component {...pageProps} />
          </Box>
        </React.Fragment>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}