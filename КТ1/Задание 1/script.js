let array = [];
for(let i = 0; i < 30; i++) {
	array.push(Math.floor(Math.random() * 100));
}

let table = document.createElement("table");
table.style.cssText += 'border-collapse: collapse;'

let tbody = document.createElement("tbody");
table.append(tbody);

for(let i = 0; i < 5; i++) {
	let tr = document.createElement("tr");
	for(let k = 0; k < 6; k++) {
		let td = document.createElement("td")
		td.style.cssText += 'border: 1px solid #000; padding: 10px 20px;'
		let number = array.shift()
		td.innerHTML = number
		tr.append(td)
		if(number >= 50) {
			td.style.cssText += 'background-color: orange'
		}
	}
	tbody.append(tr)
}

document.getElementById('body').prepend(table)