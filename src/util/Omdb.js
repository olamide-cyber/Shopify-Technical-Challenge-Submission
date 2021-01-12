const Omdb = {
    async search(term) {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7eb1a471&s=${term}`);
        const jsonResponse = await response.json();
        console.log('JsonResponse>>', jsonResponse)
        const results = jsonResponse.Search.map(search => {
            return{
                id: search.imdbID,
                title: search.Title,
                year: search.Year
            }
        })
        return results;
    }
};

export default Omdb;