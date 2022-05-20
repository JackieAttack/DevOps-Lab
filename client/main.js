
const gallery = document.querySelector('#cat-gallery')
const abandon = document.querySelector('#abandon')


function updateGallery(res) {
    gallery.innerHTML = ''

    axios.get(`/cats`)
    .then(res => {
        for(i = 0; i < res.data.length ; i++) {
            let catCard = document.createElement('div')
            catCard.classList.add('cat-unit')
            catCard.innerHTML = `
                 <img src=${res.data[i].imageURL} />
                 <p>Name: ${res.data[i].name}</p>
                 <p>${res.data[i].description}</p>
                 <button id="${res.data[i].id}">Adopt</button>`

            gallery.appendChild(catCard)
        }
    })
}

updateGallery()
abandon.addEventListener("click", updateGallery)