import s from "./Main.module.css"
import СardContainer from "./Card/СardContainer"
import News from "./News/News"
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import {Routes, Route} from "react-router-dom"
import MessagesContainer from "./Messages/MessagesContainer"
import ProfileContainer from "./Profile/ProfileContainer"
import UsersContainer from "./Users/UsersContainer"
const Main = (props) => {
  return (
      <main className={s.main}>
        <div className={s.container}>
          <div className={s.content}>
            <Routes>
              <Route path="/Profile/:userId?" element={<ProfileContainer store = {props.store}/> }/>
              <Route path="/Messages" element={<MessagesContainer store = {props.store} />} />
              <Route path="/News" element={<News />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Users" element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </main>
  )
}
export default Main