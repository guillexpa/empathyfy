
const spotifyAPI = 'https://api.spotify.com/v1/';
const clientId = 'a69257f142c64a2ebfebfe9a14b2ba1d';

class Artist {
    constructor(id, name, type, genres, images, href) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.genres = genres;
        this.pic = images.length > 0 ? images[0].url : null;
        this.href = href;
    }
}

class Album {
    constructor(id, name, type, images, release_date, artists) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.pic = images.length > 0 ? images[0].url : null;
        this.release_date = release_date;
        this.artist = artists[0].name;
    }
}

function fetchInfo (url, token) {
    return new Promise((resolve, reject) => {
        fetch(url, 
            { 
                method: 'GET',
                headers: {"Authorization": `Bearer ${token}`}
            }
        ).then(resp => {return resp.json()}
        ).then(resp => {
            if(resp.hasOwnProperty('error') && resp.error.status === 401){
                window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=http://localhost:8080/&response_type=token`;
                reject();
            } else {
                // eslint-disable-next-line no-console
                console.log(resp);
                resolve(resp);
            }
        });
    })
}

export async function onSubmit(search) {
    this.results = [];
    const {artists: {items}} = await fetchInfo(`${spotifyAPI}search?q=${search}&type=artist`, this.token);
    items && items.map(({id, name, type, genres, images, href}) => {
        this.results.push(new Artist(id, name, type, genres, images, href));
    })
}
      
export async function onSelect({id}) {
    this.selected = true;
    this.selectedAlbums = [];
    const {items} = await fetchInfo(`${spotifyAPI}artists/${id}/albums`, this.token)
    items && items.map(({id, name, type, images, release_date, artists}) => {
        this.selectedAlbums.push(new Album(id, name, type, images, release_date, artists));
    })
}