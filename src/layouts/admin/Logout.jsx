function Logout() {
  localStorage.removeItem('token');
  return window.location.replace('/');
}

export default Logout;
