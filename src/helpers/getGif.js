export const getGif = async(category) => {
        
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=7&api_key=aqFsyAQsVAAVIBGQ0P7iyS5fvxK7IgXQ`;

    const request = await fetch(url);
    const { data } = await request.json();

    const gifs = data.map(({id, title, images}) => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url
        }
    });

    return gifs;
}