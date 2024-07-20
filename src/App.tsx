import './App.css';
import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';
import Home from './routes/Home';
import About from './routes/About';
import Connect from './routes/Connect';
import NoMatch from './routes/NoMatch';
import { useTranslation } from 'react-i18next';
import { postDataToApi } from './hooks/callBackend';
import i18n from './i18n';
postDataToApi
function App() {
  const { t } = useTranslation();
  i18n.changeLanguage(WebApp.initDataUnsafe.user?.language_code);

  const [count] = useState(0);
  useEffect(() => {
    postDataToApi("users/check", {}).then((res) => console.log(res));
  }, []);

  return (
    <div className='App'>
      <h1>{t('home.title')} Hamster Kombat</h1>
      <h3> {t('home.hello')} {WebApp.initDataUnsafe.user?.first_name}</h3>

      {t('home.description')}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
          Show Alert
        </button>
      </div>

      {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="membership" element={<About />} />
          <Route path="connect" element={<Connect />} />

          {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
