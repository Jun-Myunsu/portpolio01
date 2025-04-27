import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div style={{ background: '#181818', minHeight: '100vh' }}>
      <Header />
      <main style={{ paddingTop: 80 }}>
        <Hero />
        <AboutMe />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
