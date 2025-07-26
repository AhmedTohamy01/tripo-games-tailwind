import AboutTripo from '@/components/Home/AboutTripo/AboutTripo'
import GetInTouch from '@/components/Home/GetInTouch/GetInTouch'
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
      <GetInTouch />
    </>
  )
}

export default HomeCompound
