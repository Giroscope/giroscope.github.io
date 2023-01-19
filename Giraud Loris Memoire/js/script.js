function addHoverDefinition(def) {

	let defID = def.dataset.def;
	let definition = def.parentElement
	definition = definition.querySelector("#def_"+defID);

	definition.style.display = "none";
	
	def.addEventListener('mouseover', function(event) {
		definition.style.display = "block";
	});

	def.addEventListener('mouseout', function(event) {
		definition.style.display = "none";
	});

}

function initDefinitons() {
	let elems = document.getElementsByClassName("defhover");

	for (let i=0 ; i<elems.length ; i++) {
		addHoverDefinition(elems[i]);
	}
}

initDefinitons();