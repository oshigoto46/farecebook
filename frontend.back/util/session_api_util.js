export const signup = (user) =>{
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  });
};

export const login = (user) => {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  });
};
export const _logoutAction = () =>{
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
