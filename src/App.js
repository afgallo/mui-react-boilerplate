import React, { Suspense } from 'react'
import { Container, Typography, Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopBar from './components/TopBar'
import ProTip from './components/ProTip'
import Copyright from './components/Copyright'

const HomePage = React.lazy(() => import('./pages/Home'))
const Page01 = React.lazy(() => import('./pages/Page01'))
const Page02 = React.lazy(() => import('./pages/Page02'))

export default function App() {
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <TopBar />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            React + Material UI Boilerplate
          </Typography>
          <Suspense fallback={<div>Loading ...</div>}>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/page01" exact element={<Page01 />} />
              <Route path="/page02" exact element={<Page02 />} />
            </Routes>
          </Suspense>
          <ProTip />
          <Copyright />
        </Box>
      </BrowserRouter>
    </Container>
  )
}
