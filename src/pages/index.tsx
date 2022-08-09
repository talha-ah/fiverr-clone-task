import React from "react"
import Head from "next/head"
import type { NextPage } from "next"
import { useEffect, useState } from "react"

import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Drawer from "@mui/material/Drawer"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import useMediaQuery from "@mui/material/useMediaQuery"
import { styled, useTheme } from "@mui/material/styles"

import { Logo } from "@components/Logo"

const pages = ["Products", "Pricing", "Blog", "Contact"]

const Button = styled("button")(({ theme }) => ({
  fontWeight: 400,
  cursor: "pointer",
  textTransform: "none",
  padding: "0.5rem 1.5rem",
  fontFamily: "monospace",
  border: "2px solid #fff",
  marginLeft: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.contrastText,

  transition: "all 200ms ease-in-out",

  "&:hover": {
    color: theme.palette.common.black,
  },
}))

const Button2 = styled("button")(({ theme }) => ({
  border: 0,
  fontWeight: 400,
  cursor: "pointer",
  whiteSpace: "nowrap",
  textTransform: "none",
  padding: "1rem 1.5rem",
  fontFamily: "monospace",
  color: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,

  transition: "all 200ms ease-in-out",

  "&:hover": {
    color: theme.palette.common.black,
  },
}))

const Input = styled("input")(({ theme }) => ({
  border: 0,
  width: "100%",
  maxWidth: 400,
  outline: "none",
  fontWeight: "bold",
  padding: "1rem 1.5rem",
  fontFamily: "monospace",
  color: theme.palette.common.white,
  transition: "all 200ms ease-in-out",
  backgroundColor: "rgba(255, 255, 255, 0.2)",

  "&::placeholder": {
    color: theme.palette.common.white,
  },
}))

const Link = styled("a")(({ theme }) => ({
  fontWeight: 400,
  cursor: "pointer",
  textTransform: "none",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  fontFamily: "monospace",
  marginLeft: theme.spacing(2),
  border: "1px solid transparent",
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.contrastText,

  transition: "all 200ms ease-in-out",

  "&:hover": {
    color: theme.palette.common.black,
  },
}))

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Neil Patel</title>
        <meta name="description" content="Neil Patel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />
    </>
  )
}

const NavBar = () => {
  const theme = useTheme()

  const [open, setOpen] = useState(true)
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.md}px)`)

  useEffect(() => {
    setOpen(false)
  }, [isMobile])

  const toggleDrawer = () => setOpen((s) => !s)

  return (
    <div>
      {isMobile ? (
        <Box
          sx={{
            color: "inherit",
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
      ) : (
        <Box
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <Link key={page} href="/">
              {page}
            </Link>
          ))}
          <Button style={{ backgroundColor: "transparent" }}>Log In</Button>
        </Box>
      )}

      <Drawer open={open} anchor="right" onClose={() => toggleDrawer()}>
        <Box
          sx={{
            gap: 3,
            width: 300,
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "primary.main",
          }}
        >
          {pages.map((page) => (
            <Link key={page} href="/" sx={{ marginLeft: 0 }}>
              {page}
            </Link>
          ))}
          <Button style={{ backgroundColor: "transparent", marginLeft: 0 }}>
            Log In
          </Button>
        </Box>
      </Drawer>
    </div>
  )
}

export default Home

function Content() {
  const theme = useTheme()

  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.md}px)`)

  return (
    <Box
      sx={{ backgroundColor: "primary.main", height: "100vh", width: "100vw" }}
    >
      <AppBar
        elevation={0}
        color="inherit"
        position="static"
        sx={{
          backgroundColor: "transparent",
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Container maxWidth="xl" component="main">
          <Toolbar disableGutters sx={{ flexWrap: "wrap" }}>
            <Logo />
            <Box sx={{ flex: 1 }} />
            <NavBar />
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          mb={4}
          mt={10}
          component="p"
          align="center"
          color="text.white"
          sx={{
            fontSize: isMobile ? 46 : 60,
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
        >
          Do you want more guaranteed work?
        </Typography>
        <Typography mb={8} component="p" align="center" color="text.white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Ipsum is simply dummy
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Input placeholder="Search here" />

          <Button2>Get Started</Button2>
        </Box>
      </Container>
    </Box>
  )
}
