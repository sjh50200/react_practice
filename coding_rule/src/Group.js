import React, { useState, useEffect } from "react";

export default function Group({ userId }) {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   getUserApi(userId).then(data => setUser(data));
  // }, [userId]);
  const user = useUser(userId); // Custom hook으로 분리했을 때

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  //...
}
