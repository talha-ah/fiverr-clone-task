import * as React from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Link from "@components/Link"

export const Logo = () => {
  return (
    <Box display="flex" alignItems="center" gap={1.2}>
      <Typography
        href="/"
        variant="h5"
        component={Link}
        sx={{
          textDecoration: "none",
          color: "text.primary",
          "&:hover": { textDecoration: "none" },
        }}
      >
        Neil Patel
      </Typography>
      |<Typography variant="body2">EN</Typography>
    </Box>
  )
}
