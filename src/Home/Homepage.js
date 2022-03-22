import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      Homepage
      <p>You can change your Settings anytime on the <Link to="/settings">Settings Page</Link></p>
    </div>
  );
}