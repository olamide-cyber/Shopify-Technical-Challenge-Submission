const Omdb = {
    async search(term) {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=7eb1a471&s=${term}`);
        const jsonResponse = await response.json();
        if (jsonResponse.Search) {
            const results = jsonResponse.Search.map(search => {
                return{
                    id: search.imdbID,
                    title: search.Title,
                    year: search.Year,
                    img: search.Poster
                };
            });
            return results;
        }
        if (jsonResponse.Error) {
            throw new Error(jsonResponse.Error);
        }
        throw new Error('Unknown error, pls try again.');
    }
};

export default Omdb;
