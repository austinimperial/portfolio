import React from 'react';
import Header from 'components/header/index'
import Intro from 'components/intro/index'
import Skills from 'components/skills/index'
import Projects from 'components/projects/index'
import Contact from 'components/contact/index'
import Footer from 'components/footer/index'
import About from 'components/about/index'
import { ThemeProvider } from 'styled-components'
import mainTheme from 'styles/mainTheme'
import { StyledAppContainer } from './styles/AppStyles'
import ScreenSizesProvider from 'globalState/screenSizes'
import ContactFormProvider from 'globalState/contactForm/index'
import SectionRefsForScrollProvider from 'globalState/sectionRefsForScroll/index'

function App() {
   return (
      <ThemeProvider theme={mainTheme}>
      <ScreenSizesProvider>
      <ContactFormProvider>
      <SectionRefsForScrollProvider>
            <StyledAppContainer>
               <Header />
               <Intro />
               <Skills />
               <Projects />
               <About />
               <Contact />
               <Footer />
            </StyledAppContainer>
      </SectionRefsForScrollProvider>
      </ContactFormProvider>
      </ScreenSizesProvider>
      </ThemeProvider>
  );
}

export default App;