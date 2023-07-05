
export const transformMoviesData = (data) => { 
    return data.map(({id, title, release_date}) => {
       const year = new Date(release_date).getFullYear();
       return {id, title, year};
    })
};
  