const form = document.querySelector('#searchForm');
const lis = document.createElement('li');
const uls = document.createElement('ul');
document.body.append(lis);
lis.append(uls);
uls.append("검색해주세요!");

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    deleteImage();
    const uls = document.createElement('ul');
    lis.append(uls);
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            uls.append(img);
        }
    }
}

const deleteImage = () => {
    // 여기서 찾아야 내가 의도한대로 된다.
    const ulss = document.querySelector('ul');
    console.log(ulss);
    lis.removeChild(ulss);
    // ulss.removeChild(img);
}