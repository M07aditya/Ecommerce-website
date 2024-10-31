// function UnauthPage() {
//   return <h1>You don't have access to view this page</h1>;
// }

// export default UnauthPage;

import { Link } from 'react-router-dom';

function UnauthPage() {
  return (
    <div>
      <h1>You do not have access to view this page</h1>
      <Link to="/auth/login">Go to Login</Link>
    </div>
  );
}

export default UnauthPage;
