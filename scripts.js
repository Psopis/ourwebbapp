// Инициализация переменных
let base_url = 'https://9b33-95-55-136-152.ngrok-free.app';


async function parse() {

    try {
        obj = await axios.get(base_url + '/api/projects/categories/');
        localStorage.setItem('respdata', JSON.stringify(obj.data));
    } catch (e) {
        console.log("ERROR axios cant parse", e)
        obj = {
            "freelance.ru": [
                {
                    "id": 7,
                    "name": "Я хуесос",
                    "children": [{
                        "id": 12,
                        "name": "Верстка",
                        "children": [
                            {
                                "id": 15,
                                "name": "Сверстать большой хуй",
                                "children": []
                            }
                        ]
                    }]
                }
            ],
            "freelance.habr.com": [
                {
                    "id": 6,
                    "name": "Написать сайт",
                    "children": [{
                        "id": 12,
                        "name": "Верстка",
                        "children": [
                            {
                                "id": 15,
                                "name": "Сверстать большой хуй",
                                "children": []
                            }
                        ]
                    }]
                }
            ],
            "kwork.ru": [
                {
                    "id": 3,
                    "name": "Копирайтинг",
                    "children": [{
                        "id": 12,
                        "name": "Верстка",
                        "children": [
                            {
                                "id": 15,
                                "name": "Сверстать большой хуй",
                                "children": []
                            }
                        ]
                    }]
                },
                {
                    "id": 5,
                    "name": "Английский язык",
                    "children": [{
                        "id": 12,
                        "name": "Верстка",
                        "children": [
                            {
                                "id": 15,
                                "name": "Сверстать большой хуй",
                                "children": []
                            }
                        ]
                    }]
                },
                {
                    "id": 8,
                    "name": "Дизайн",
                    "children": [
                        {
                            "id": 9,
                            "name": "Арт и иллюстрации",
                            "children": []
                        },
                        {
                            "id": 10,
                            "name": "Веб и мобильный дизайн",
                            "children": []
                        }
                    ]
                },
                {
                    "id": 11,
                    "name": "Разработка и IT",
                    "children": [
                        {
                            "id": 12,
                            "name": "Верстка",
                            "children": [
                                {
                                    "id": 15,
                                    "name": "Сверстать большой хуй",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 13,
                            "name": "Десктоп программирование",
                            "children": []
                        },
                        {
                            "id": 14,
                            "name": "Доработка и настройка сайта",
                            "children": []
                        }
                    ]
                }
            ],
            "fl.ru": [
                {
                    "id": 1,
                    "name": "Дизайн",
                    "children": [{
                        "id": 4,
                        "name": "Ui/Ux",
                        "children": []
                    }, {
                        "id": 4,
                        "name": "Ui/Ux",
                        "children": []
                    }, {
                        "id": 4,
                        "name": "Ui/Ux",
                        "children": []
                    }, {
                        "id": 4,
                        "name": "Ui/Ux",
                        "children": []
                    }, {
                        "id": 4,
                        "name": "Ui/Ux",
                        "children": []
                    },]
                },
                {
                    "id": 2,
                    "name": "Программирование",
                    "children": [
                        {
                            "id": 4,
                            "name": "Python",
                            "children": []
                        }, {
                            "id": 4,
                            "name": "Ui/Ux",
                            "children": []
                        }, {
                            "id": 4,
                            "name": "Ui/Ux",
                            "children": []
                        }, {
                            "id": 4,
                            "name": "Ui/Ux",
                            "children": []
                        }, {
                            "id": 4,
                            "name": "Ui/Ux",
                            "children": []
                        }, {
                            "id": 4,
                            "name": "Ui/Ux",
                            "children": []
                        }
                    ]
                }
            ]
        }
        localStorage.removeItem('respdata')
        localStorage.setItem('respdata', JSON.stringify(obj));
    }


}

function clickPicture(category = "") {
    console.log("click_pic");
    localStorage.setItem('data', category);

    window.location.href = "freelancecategory.html";


}

let src = "";

function set_picture_category() {
    let img_fl = document.getElementById("img_fl")
    let img_free = document.getElementById("img_free")
    let img_habr = document.getElementById("img_habr")
    let img_kwork = document.getElementById("img_kwork")

    let f = localStorage.getItem('data');


    switch (f) {

        case 'freelance.ru':
            img_free.style.display = "block"

            break;

        case 'freelance.habr.com':
            img_habr.style.display = "block"

            break;

        case 'kwork.ru':
            img_kwork.style.display = "block"

            break;

        case 'fl.ru':

            img_fl.style.display = "block"

            break;


    }


}

function add_category_list(category = '', birzha = '') {

}

function backButton() {
    window.location.href = 'index.html';// Используется для перехода назад в истории браузера

}


let list = document.querySelector("ul");
let section = 0;


function money_add() {
    if (document.querySelector(".search-setup")) {
        let e = document.querySelector(".budget__input-block input");

        t = e.parentElement;
        e.addEventListener("mouseenter", (function () {
            t.classList.add("budget__input-active")

        }));
        e.addEventListener("mouseleave", (function () {
            e.value.trim() || t.classList.remove("budget__input-active")
            if (e.value && !isNaN(e.value)) {
                console.log(e.value.trim())
            }
        }));
        e.addEventListener("input", (function () {
            e.value.trim() ? t.classList.add("budget__input-active") : t.classList.remove("budget__input-active")

        }))

    }

}

let i = 0;

function check_switch_toggle() {
    document.querySelectorAll(".switch input").forEach((function (e) {

        e.addEventListener("click", (function () {
            let t = e.closest(".toggle");
            t && t.classList.toggle("toggle__active")
            if (e.checked) {

                console.log('checked')

            }
        }))
    }))
}

function add_button_for_words(word = '', array = ['']) {
    let input1 = document.getElementById("key_word_placeholder_1").value
    let input2 = document.getElementById("key_word_placeholder_2").value
    let input3 = document.getElementById("key_word_placeholder_3").value


    switch (word) {
        case "bad":
            if (input2 === '') {
                break;
            }
            console.log("1 ", input2)
            break;
        case "key":
            if (input1 === '') {
                break;
            }
            console.log("2 ", input1)
            break;
        case "money":
            if (input3 === '') {

                break;
            }
            console.log("3 ", input3)
            break;
    }


}

let obj = {}

function displayCategories() {
    set_picture_category();
    obj = JSON.parse(localStorage.getItem('respdata'))


    const categoryList = document.getElementById("listContainer");
    const data = localStorage.getItem('data');
    console.log("Данные с предыдущей страницы:", data);

    if (!categoryList) {
        console.error("Элемент listContainer не найден на странице.");
        return;
    }

    categoryList.innerHTML = "";

    if (data && obj[data]) {
        createList(obj[data], categoryList);
    }

    localStorage.removeItem('data');
}

function createList(data, parentElement) {
    const listContainer = document.createElement('ul');
    listContainer.className = "listContainer"
    data.forEach(category => {
        const listItem = document.createElement('li');
        listItem.className = "listItem"
        const titleElement = document.createElement('span');
        titleElement.className = "titleElement"
        titleElement.textContent = category.name;

        if (category.children && category.children.length > 0) {
            const expandButton = createExpandButton(category.name);
            listItem.appendChild(expandButton);


            const subList = document.createElement('ul');
            subList.className = 'sublistUl';
            subList.style.display = 'none';

            createList(category.children, subList);
            listItem.appendChild(subList);
        } else {
            const detailsButton = createDetailsButton(category);

            listItem.appendChild(detailsButton);

            console.log('btn', detailsButton)
            detailsButton.style.paddingRight = '10px';
        }

        listContainer.appendChild(listItem);
    });

    parentElement.appendChild(listContainer);
}

function createExpandButton(category = '') {

    const expandButton = document.createElement('button');

    expandButton.className = 'slide-checkbox'
    expandButton.textContent = category;

    expandButton.addEventListener('click', function () {
        const subList = this.parentNode.querySelector('ul');
        subList.className = "sublist"
        if (subList.style.display === 'none') {
            subList.style.display = 'block';

            console.log('sub', subList)
        } else {

            subList.style.display = 'none';
        }
    });
    return expandButton;
}

function createDetailsButton(category) {

    const detailsButton = document.createElement('button');

    detailsButton.className = 'details';

    detailsButton.innerHTML = category.name;
    detailsButton.addEventListener('click', function () {
        if (detailsButton.style.background === 'seagreen') {
            detailsButton.style.background = 'floralwhite'

            detailsButton.style.scale = "1"


        } else {
            detailsButton.style.background = 'seagreen'


            detailsButton.style.scale = "0.99"
        }
        detailsButton.style.transition = "background 0.3s,  scale 0.5s";


    });
    return detailsButton;
}


function e(e, n, o, i) {
    let r = o.value.trim();
    if (r) {
        let s = document.createElement("div");
        s.classList.add("keywords__result");
        let l = document.createElement("div");
        l.classList.add("keywords__text");
        l.textContent = r;
        let c = document.createElement("span");
        c.classList.add("delete-button");
        c.textContent = "×";
        c.addEventListener("click", (function () {
            s.remove();
            rt(e, n, o);
        }));
        s.appendChild(l);
        s.appendChild(c);
        i.appendChild(s);
        o.value = "";
        rt(e, n, o)

    }

}

function rt(e, t, n) {
    t.style.display = n.value.trim() ? "inline-block" : "none"
}

function add_to() {

    document.querySelectorAll(".choices-setup").forEach((function (n) {
        var o = n.querySelector(".choices__input"), i = n.querySelector(".choices__input input"),
                        r = n.querySelector(".add-button"), s = n.querySelector(".keywords__container");
        o.addEventListener("mouseenter", (function () {
            o.classList.add("choices__input-active")
        }));
        o.addEventListener("mouseleave", (function () {
            i.value.trim() || o.classList.remove("choices__input-active")
        }));
        i.addEventListener("input", (function () {
            rt(0, r, i)
        }));
        r.addEventListener("click", (function () {
            e(o, r, i, s)
        }));
        i.addEventListener("keyup", (function (t) {
            "Enter" === t.key && e(o, r, i, s)
        }))
    }))
}








