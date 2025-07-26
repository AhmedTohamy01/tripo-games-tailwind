import AboutTripo from '@/components/Home/AboutTripo/AboutTripo'
import JoinTeam from '@/components/Home/JoinTeam/JoinTeam'
import MainContent from '@/components/Home/MainContent/MainContent'
import OurGames from '@/components/Home/OurGames/OurGames'

/*---> Component <---*/
function HomeCompound() {
  return (
    <>
      <MainContent />
      <AboutTripo />
      <OurGames />
      <JoinTeam />
    </>
  )
}

export default HomeCompound
