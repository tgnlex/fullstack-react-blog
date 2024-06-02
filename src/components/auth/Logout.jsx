import {useSignOut} from 'react-auth-kit/hooks/useSignOut';

function LogoutForm() {
  const handleLogout = useSignOut();
  return (
    <div>
      <button 
        onClick={() => handleLogout()} 
        className="logoutBtn logout"
      >
        Log Out
      </button>
    </div>
  )
}

export {LogoutForm};