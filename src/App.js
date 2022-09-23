import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [data,setdata] = useState("inputlang")
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    <>
       <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en">English</option>
        <option value="hn">Hindi</option>
        <option value="fr">French</option>
        <option value="ar">Arabic</option>
      </select>
    <input value = {t(data)} onChange={(e)=>setdata(e.target.value)}/>

      <h1>{t('title')}</h1> 
      <h1>{t('blogdata')}</h1> 
    </>
  );
}

export default App;
