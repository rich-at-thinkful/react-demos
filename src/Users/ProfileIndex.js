import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileIndex() {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => 
        <li key={user.id}><Link to={`/users/${user.id}`}>{user.username}</Link></li>
      )}
    </ul>
  )
}