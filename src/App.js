import FooterComponent from './Components/Footer'
import HeaderComponent from './Components/Header'
import AboutMePage from './Pages/AboutMe'
import ContactPage from './Pages/Contact'
import HardSkillsPage from './Pages/HardSkills'
import HomePage from './Pages/Home'
import ProjectsPage from './Pages/Projects'

export const App = () => {
    return (
        <div className='container'>
            <HeaderComponent />
            <HomePage />
            <AboutMePage />
            <HardSkillsPage />
            <ProjectsPage />
            <ContactPage />
            <FooterComponent />
        </div>
    )
}

export default App
