import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

import Home        from './pages/Home'
import VPR         from './pages/VPR'
import VPRResults  from './pages/VPRResults'
import TopicsList  from './pages/TopicsList'
import TopicsGraph from './pages/TopicsGraph'
import TopicDetail from './pages/TopicDetail'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/vpr_math5">
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/vpr/:part"      element={<VPR />} />
          <Route path="/vpr/results"    element={<VPRResults />} />
          <Route path="/topics"         element={<TopicsList />} />
          <Route path="/topics/:id"     element={<TopicDetail />} />
          <Route path="/graph"          element={<TopicsGraph />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
