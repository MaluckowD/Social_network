import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
  _state: {
    messagesPage: {
      messagesData: [
        { text: "Винни чемпион" },
        { text: "Привет" },
        { text: "Винни чемпион" },
        { text: "Нельзя писать state" },
        { text: "Исправь блок схему" },
      ],
      dialogsData: [
        { id: 1, name: "IGOR" },
        { id: 2, name: "DIMA" },
        { id: 3, name: "ARTEM" },
        { id: 4, name: "KASHIRIN" },
        { id: 5, name: "ANTIPOV" },
      ],

      postMessage: ''
    },

    profilePage: {
      postData: [
        {
          title: "History", text: "Напиши просто текст. Это простое задание, которое не требует особых усилий или специальных знаний. Просто открой свой блокнот или любой другой текстовый редактор и начни писать.", likes: "1"
        },
        {
          title: "Задание", text: "Таким образом, ты сможешь развить свою письменную речь и станешь более уверенным в своих способностях.", likes: "5"
        },
        {
          title: "Удачи!", text: "Главное - просто писать и выражать свои мысли.", likes: "9"
        },
        {
          title: "Cтараемся!", text: "Пожалуйста, уделите немного времени, чтобы оценить результат.", likes: "100"
        },
        {
          title: "Defense", text: "It seems like you may have intended to write 'defense' or 'defeats,' but since the topic is ambiguous, I'll provide a brief overview of both concepts for a better understanding.", likes: "1000"
        },
        {
          title: "History", text: "Напиши просто текст. Это простое задание, которое не требует особых усилий или специальных знаний. Просто открой свой блокнот или любой другой текстовый редактор и начни писать.", likes: "1"
        }
      ],
      postTitle: "",
      postText: ""
    }
  },

  _renderElement() {
    console.log("GOOD")
  },

  /////////// эти функции автоматом уже находятся в библиотеке redux. Нужна только логика для dispatch
  getState(){
    return this._state
  },
  
  subscribe(observer){
    this._renderElement = observer
  },
  
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._renderElement(this._state) 
  }
  ////////
}

export default store
