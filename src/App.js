import React, { lazy, Suspense} from 'react';
import './styles/App.scss';

import Intro from './Components/intro/Intro';
const Experience = lazy(() => import('./Components/experience/Experience'));
const About = lazy(() => import('./Components/about/About'));
const Social = lazy(() => import('./Components/social/social'));
const Project = lazy(() => import('./Components/project/Project'));

function App() {
  return (
    <main>
    <Intro/>
    <Suspense fallback={<div>Loading...</div>}>
    <About />
    <Experience/>
    <Project />
    <Social />
    </Suspense>
    
    </main>
  );
}

export default App;
