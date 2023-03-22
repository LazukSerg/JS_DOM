let table = document.createElement("table");
table.style.cssText += 'border-collapse: collapse;'

let tbody = document.createElement("tbody");
tbody.id = "tbody"
table.append(tbody)

let script = document.getElementById('script')
document.getElementById('body').insertBefore(table, script)

function addNumber() {
	let tbody = document.getElementById('tbody')
	
	let tr = tbody.lastElementChild
	if(tr == null) {
		tr = document.createElement("tr")
		tbody.append(tr)
	}
	if(tr.children.length < 6) {
		let td = createTd()
		tr.append(td)
	} else {
		if(tbody.children.length == 5) {
			return
		}	
		let tr = document.createElement("tr")
		let td = createTd()
		tr.append(td)
		tbody.append(tr)
	}
}

function createTd() {
	let td = document.createElement("td")
	td.style.cssText += 'border: 1px solid #000; padding: 10px 20px;'
	let number = Math.floor(Math.random() * 100)
	td.innerHTML = number
	if(number >= 50) {
		td.style.cssText += 'background-color: orange'
	}
	return td
}