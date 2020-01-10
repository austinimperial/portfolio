import React from 'react';
import Header from 'components/header/index'
import Intro from 'components/intro/index'
import Skills from 'components/skills/index'
import Projects from 'components/projects/index'
import Contact from 'components/contact/index'
import Footer from 'components/footer/index'
import { ThemeProvider } from 'styled-components'
import mainTheme from 'styles/mainTheme'
import { StyledAppContainer } from './styles/AppStyles'
import ScreenSizesProvider from 'globalState/screenSizes'

function App() {
   return (
      <ThemeProvider theme={mainTheme}>
      <ScreenSizesProvider>
         <StyledAppContainer>
            <Header />
            <Intro />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
         </StyledAppContainer>
      </ScreenSizesProvider>
      </ThemeProvider>
  );
}

export default App;
