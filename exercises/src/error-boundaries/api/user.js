export const getUser = username => {
  return fetch(`https://api.github.com/users2/${username}`)
    .then(response => response.json())
    .then(data => {
      return null;
    })
    .catch(error => {
      return { error };
    });
};
