import logo from './logo.svg';
import './App.scss';
import attachIcon from "./assets/attach.png";
import sendIcon from "./assets/send.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        Повідомлення викладачу у ПК і на електронну пошту.
      </div>
      <div className="links-list">
        Повідомлення: 
        {["Вхідні", "Групам", "Студентам", "Викладачам", "Надіслані"].map((a) => (
          <a href="#" className="links-list__link">
            {a}
          </a>
        ))}
      </div>
      <div className="to-whom">
        <input placeholder="кому" type="text" className="to-whom__input" />
      </div>
      <div className="message-text">
        <textarea style={{resize: "none"}} placeholder='Текст повідомлення' />
        <button className="message-text__button message-text__button--attach">
          <img src={attachIcon} className="message-text__button_icon message-text__button_icon--attach"/>
        </button>
        <button className="message-text__button message-text__button--send">
          <img src={sendIcon} className="message-text__button_icon message-text__button_icon--send"/>
        </button>
      </div>
    </div>
  );
}

export default App;
