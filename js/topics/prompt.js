// ============ HOW WORK PROMPT ============

// -------------- Case 1 --------------
checkRegistered = () => {
  const users = ['Mango', 'Ajax', 'Poly'];
  const login = prompt('Enter login!');
  const isRegistered = users.includes(login);

  return isRegistered ? 'Welcome!' : 'Password is not correct';
}

// console.log(checkRegistered())
