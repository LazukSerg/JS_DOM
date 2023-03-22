const cats = [
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
        "age": 8,
        "rate": 7,
        "favourite": false,
        "description": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
        "id": 1
    },
    {
        "name": "Базиль",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
        "age": 2,
        "rate": 10,
        "favourite": false,
        "description": "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
        "id": 2
    },
    {
        "name": "Риш",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
        "age": 1,
        "rate": 10,
        "favourite": true,
        "description": "Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.",
        "id": 3
    },
    {
        "name": "Элли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
        "age": 4,
        "rate": 8,
        "favourite": false,
        "description": "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке",
        "id": 4
    },
    {
        "name": "Чарли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 8,
        "favourite": false,
        "description": "Чёрно-белый юный котофилософ очень любит размышлять и быть наедине. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке",
        "id": 5
    },
    {
        "name": "Стефани",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
        "age": 6,
        "rate": 9,
        "favourite": false,
        "description": "Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке",
        "id": 6
    },
    {
        "name": "Дуся",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BA4-97F7-2F9666AE2F63.jpeg",
        "age": 1,
        "rate": 9,
        "favourite": false,
        "description": "Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.",
        "id": 7
    },
    {
        "name": "Бруно",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg",
        "age": 1,
        "rate": 10,
        "favourite": false,
        "description": "Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.",
        "id": 8
    },
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA4_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 9,
        "favourite": true,
        "description": "Немного боязливый, но очень добрый и нежный кот Светлячок. Приучен к лотку и когтеточке, ладит с детьми, привит. Станет вам хорошим другом",
        "id": 9
    }
]

let script = document.getElementById('script')
for(let i = 0; i < cats.length; i++) {
	createCat(cats[i], script)
}

function createCat(cat, script) {
	let div = document.createElement("div")
	let h2 = document.createElement("h2")
	h2.textContent = cat.id
	h2.style.cssText += 'text-align: center'
	div.append(h2)

	let innerDiv = document.createElement("div")
	innerDiv.style.cssText += 'display: flex; column-gap: 10px; padding: 20px;'

	let img = document.createElement("img")
	img.src = cat.img_link
	img.height = "300"
	innerDiv.append(img)

	let p = document.createElement("p")
	innerDiv.append(p)
	let favourite = cat.favourite ? "Да" : "Нет"
	p.innerHTML = `Name: ${cat.name} <br/>Age: ${cat.age}
		<br/>Rate: ${cat.rate} <br/>Favourite: ${favourite}
	<br/>Description: ${cat.description}`

	div.append(innerDiv)

	document.getElementById('body').insertBefore(div, script)
}