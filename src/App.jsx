import logo from './logo.svg';
import './App.scss';
import attachIcon from "./assets/attach.png";
import sendIcon from "./assets/send.png";

import Babiuk from "./assets/teachers/babiuk.jpeg"
import Denysiuk from "./assets/teachers/denysiuk.jpeg"
import Kyrylaschuk from "./assets/teachers/kyrylaschuk.jpeg"
import Radomska from "./assets/teachers/radomska.jpeg"
import Voitko from "./assets/teachers/voitko.jpeg"
import { useState } from 'react';
import { useEffect } from 'react';

const teachers = [
  {
    img: Kyrylaschuk,
    name: "Кирилащук Світлана Аналоліївна",
    position: "декан",
  },
  {
    img: Babiuk,
    name: "Бабюк Наталя Петрівна",
    position: "доцент",
  },
  {
    img: Denysiuk,
    name: "Денисюк Алла Василівна",
    position: "асистент"
  },
  {
    img: Voitko,
    name: "Войтко Вікторія Володимирівна",
    position: "доцент"
  },
  {
    img: Radomska,
    name: "Радомська Людмила Анатоліївна",
    position: "доцент"
  }
]

function Teachers() {
  const [value, setValue] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [teachersToDisplay, setTeachersToDisplay] = useState([]);

  useEffect(() => {
    setTeachersToDisplay(
      teachers.filter((teacher) => (
        teacher.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || teacher.position.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ))
    )
  }, [value])

  return (
    <div className="to-whom">
      <input
        value={value}
        onChange={(event) => {setValue(event.target.value)}}
        placeholder="кому"
        type="text"
        className="to-whom__input"
        onBlur={() => {
          setTimeout(() => {
            setFocused(false)
          }, 700)
        }}
        onFocus={() => {
          setFocused(true)
        }}
      />
      {(value && teachersToDisplay && isFocused) &&
        <ul className="to-whom__teachers-list">
          {teachersToDisplay.map((teacher) => (
            <div
              onClick={() => {
                setValue(teacher.name)
              }}
              className="to-whom__teacher">
              <img src={teacher.img} alt="" className="to-whom__teacher-img" />
              <div className="to-whom__teacher-details">
                <div className="to-whom__teacher-name">{teacher.name}</div>
                <div className="to-whom__teacher-position">{teacher.position}</div>
              </div>
            </div>
          ))}
        </ul>
      }
    </div>
  )
}

function MessageTextField() {
  return (
    <div className="message-text">
      <Teachers/>
      <textarea style={{resize: "none"}} placeholder='Текст повідомлення' className='what-whom__area'/>
      <div className="message-text__buttons-list">
        <div className="message-text__button-group">
          <button className="message-text__icon-button">
            <img src={attachIcon} className="message-text__icon-button_icon"/>
          </button>
          <button className="message-text__button">
            Надіслати
            <img src={sendIcon} className="message-text__button_icon message-text__button_icon--send"/>
          </button>
        </div>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <div className="massage-footer">
      <div className="Our-githubs">
        Our Githubs
      </div>
      <div className="links-footer__list">
          {[
            {name: "Vlad`s GitHub", href: "https://github.com/VladIshchuk"}, 
            {name: "Goga`s GitHub", href: "https://github.com/georgy-dzumenko"}].map((a) => (
            <a href={a.href} className="links-footer__link">
              {a.name}
            </a>
          ))}
        </div>
        <div className="footer-massage">
          Саме так може виглядати JetIQ в майбутьному, при умові якщо ви погодитесь співпрацювати з нами
        </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <div className="header">
          <div className="header__text">
            Повідомлення викладачу у ПК і на електронну пошту.
          </div>
        </div>
        <div className="links-list">
          <div className="links-list__label">
            Повідомлення
          </div>
          <div className="links-list__list">
            {["Вхідні", "Групам", "Студентам", "Викладачам", "Надіслані"].map((a) => (
              <a href="#" className="links-list__link">
                {a}
              </a>
            ))}
          </div>
        </div>
        <MessageTextField/>
      </div>
      <Footer></Footer>
    </div>
  );


}


export default App;
