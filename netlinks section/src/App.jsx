import NavBar from './navbar/NavBar'
import Hero from './hero/Hero'
import ClientLogos from './client-logos/ClientLogos'
import Services from './services/Services'
import Platform from './platform/Platform'
import Industries from './industries/Industries'
import Quote from './quote/Quote'
import Faq from './faq/Faq'
import CallToAction from './cta/CallToAction'
import Footer from './footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <main id="main">
        <Hero />
        <ClientLogos />
        <Services />
        <Platform />
        <Industries />
        <Quote />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
