const petArray = [
    {
        "name": "Jennifer",
        "img": "../../assets/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": [
            "none"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Sophia",
        "img": "../../assets/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": [
            "parvovirus"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Woody",
        "img": "../../assets/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": [
            "adenovirus",
            "distemper"
        ],
        "diseases": [
            "right back leg mobility reduced"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": [
            "parainfluenza"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Katrine",
        "img": "../../assets/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": [
            "panleukopenia"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Timmy",
        "img": "../../assets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": [
            "calicivirus",
            "viral rhinotracheitis"
        ],
        "diseases": [
            "kidney stones"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Freddie",
        "img": "../../assets/freddle.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": [
            "rabies"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Charly",
        "img": "../../assets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": [
            "bordetella bronchiseptica",
            "leptospirosis"
        ],
        "diseases": [
            "deafness",
            "blindness"
        ],
        "parasites": [
            "lice",
            "fleas"
        ]
    }
]
let fullPetsArray = []

fullPetArray = (() => {
    let tempArr = [];
    for (let i = 0; i < 6; i++) {
        let newPets = petArray;

        for (let j = petArray.length; j > 0; j--) {
            let randomIndex = Math.floor(Math.random() * j);
            const randomElement = newPets.splice(randomIndex, 1)[0];
            newPets.push(randomElement);
        }

        tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
})();

const sort6recursuvely = (list) => {
    const length = list.length;

    for (let i = 0; i < (length / 6); i++) {
        const stepList = list.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            const duplicatedItem = stepList.find((item, ind) => {
                return item.name === stepList[j].name && (ind !== j);
            });

            if (duplicatedItem !== undefined) {
                const ind = (i * 6) + j;
                const which8OfList = Math.trunc(ind / 8);

                list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

                sort6recursuvely(list);
            }
        }
    }

    return list;
}
fullPetArray = sort6recursuvely(fullPetArray)

let slider = document.querySelector('.cards-container');

function addPetsInPage(list) {
    let str = ''
    for (let i = 0; i < list.length; i++) {
        let pet = `<div class="slider_item slider_item_disabled">
        <img src="${fullPetArray[i].img}" >
        <h4>${fullPetArray[i].name}</h4>
        <div class="slider__link">Learn more</div>
    </div>`
        str = str + pet;
    }
    slider.innerHTML = str;
}

addPetsInPage(fullPetArray)

let cards = document.querySelectorAll('.slider_item');
counter = document.querySelector('.counter')
prevAllBtn = document.querySelector('.button_prev_all')
prevBtn = document.querySelector('.button_prev')
nextAllBtn = document.querySelector('.button_next_all')
nextBtn = document.querySelector('.button_next')

prevAllBtn.addEventListener('click', prevAllFunc)
prevBtn.addEventListener('click', prevFunc)
nextAllBtn.addEventListener('click', nextAllFunc)
nextBtn.addEventListener('click', nextFunc)

let itemsPerPage = 8

function checkItemsPerPage() {
    if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
        itemsPerPage = 6;
    }
    if (document.querySelector("body").offsetWidth >= 320 && document.querySelector("body").offsetWidth < 768) {
        itemsPerPage = 3;
    }
}

function showOnLoad() {
    for (i = 0; i < itemsPerPage; i++) {
        cards[i].classList.toggle('slider_item_disabled')
    }
}

let page = 1;
function nextFunc() {

    for (let i = (page * itemsPerPage) - itemsPerPage; i < (itemsPerPage * page) + itemsPerPage; i++) {
        cards[i].classList.toggle('slider_item_disabled')
    }
    page++
    counter.innerText = page;

    if (page > 1) {
        prevBtn.disabled = false;
        prevBtn.classList.remove('disabled')
        prevAllBtn.disabled = false;
        prevAllBtn.classList.remove('disabled')
    }

    if (page === fullPetArray.length / itemsPerPage) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled')
        nextAllBtn.disabled = true;
        nextAllBtn.classList.add('disabled')
    }
}

function prevFunc() {
    page--
    for (let i = (itemsPerPage * page) + itemsPerPage - 1; i >= (page * itemsPerPage) - itemsPerPage; i--) {
        cards[i].classList.toggle('slider_item_disabled')
    }

    counter.innerText = page;

    if (page < fullPetArray.length / itemsPerPage) {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled')
        nextAllBtn.disabled = false;
        nextAllBtn.classList.remove('disabled')
    }

    if (page === 1) {
        prevBtn.disabled = true;
        prevBtn.classList.add('disabled')
        prevAllBtn.disabled = true;
        prevAllBtn.classList.add('disabled')
    }
}

function prevAllFunc() {
    for (let i = 0; i < itemsPerPage; i++) {
        cards[i].classList.remove('slider_item_disabled')
    }
    for (let i = itemsPerPage; i < fullPetArray.length; i++) {
        cards[i].classList.add('slider_item_disabled')
    }
    page = 1;
    counter.innerText = page
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled')
    nextAllBtn.disabled = false;
    nextAllBtn.classList.remove('disabled')
    prevBtn.disabled = true;
    prevBtn.classList.add('disabled')
    prevAllBtn.disabled = true;
    prevAllBtn.classList.add('disabled')
}

function nextAllFunc() {
    for (let i = (fullPetArray.length - 1); i >= (fullPetArray.length - itemsPerPage); i--) {
        cards[i].classList.remove('slider_item_disabled')
    }
    for (let i = 0; i < fullPetArray.length - itemsPerPage; i++) {
        cards[i].classList.add('slider_item_disabled')
    }
    page = fullPetArray.length / itemsPerPage;
    counter.innerText = page
    prevBtn.disabled = false;
    prevBtn.classList.remove('disabled')
    prevAllBtn.disabled = false;
    prevAllBtn.classList.remove('disabled')
    nextBtn.disabled = true;
    nextBtn.classList.add('disabled')
    nextAllBtn.disabled = true;
    nextAllBtn.classList.add('disabled')
}


checkItemsPerPage()
showOnLoad()
