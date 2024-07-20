import { useTranslation } from 'react-i18next';
import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react';
import { useAsyncInitialize } from '../hooks/useAsyncInitialize';
import i18n from '../i18n';
import { BASE_URL } from "../config/Config";
import { fetchDataFromApi } from '../hooks/callBackend';
import { useQuery } from "react-query";
import axios from "axios";

export default function About() {
  const { t } = useTranslation();
  i18n.changeLanguage(WebApp.initDataUnsafe.user?.language_code);

  const [memberships, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDataFromApi("memberships", {});
      setData(response);
    };

    fetchData();
  }, []);

  console.log(memberships);
  return (
    <div>
      <h2> {t('membership.title')} </h2>
      {memberships.map(function(membership) {
        return (
          <div key={membership.id}>
            <div>Membership name:  {membership.name}</div>
            <div><img src={membership.image_url}></img></div>
            <div>Money:  {membership.short_money}</div>
            <br/>
          </div>
        )
      })}
    </div>
  );
}