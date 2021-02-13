export const signup = (user) =>{
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  });
};

export const loginAPI = (user) =>{
    return $.ajax({
        url: 'api/session',
        method : 'POS',
        data: {user}
     }
   )
}

export const login = (user) => {
  console.log("JSON.stringify(user))API 発信");
  console.log(JSON.stringify(user));
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  });
};
export const logout = () =>{
   return $.ajax( {
        url: 'api/session',
        method : 'DELETE'
   }
   )
}
export const logoutAction = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE'
  });
};
