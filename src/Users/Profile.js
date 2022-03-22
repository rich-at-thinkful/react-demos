import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { userId } = useParams();
  const [ user, setUser ] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    <div>
      User Profile: { user.username } ({user.name})
    </div>
  );
}