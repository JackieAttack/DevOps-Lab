
const gallery = document.querySelector('#cat-gallery')
const abandon = document.querySelector('#abandon')


function updateGallery() {
    gallery.innerHTML = ''

    axios.get(`/cats`)
    .then(res => {
        for(i = 0; i < res.data.length ; i++) {
            let catCard = document.createElement('div')
            catCard.classList.add('cat-unit')
            let buttonId = (res.data[i].id).toString()
            catCard.innerHTML = `
                 <img src=${res.data[i].imageURL} />
                 <p>Name: ${res.data[i].name}</p>
                 <p>${res.data[i].description}</p>
                 <button id="${buttonId}">Adopt</button>`
            let button = document.getElementById(buttonId)
            console.log(button)
            gallery.appendChild(catCard)
            //buttonId.addEventListener("click", adoptCat)
        }
    })
}

function adoptCat(event) {


    axios.delete(`/adopt/${event.target.id}`)
    .then(res => {
        alert("Congratulations, hero!")
    })
}


updateGallery()

