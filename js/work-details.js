function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadWorkDetails(workId) {
	const workDetails = {
		oggetto: {
			name: "Oggetto",
			subName: "Fotografia istantanea, 46x62mm ognuna, 2021",
            text: "Al giorno d’oggi ha luogo la scomparsa di ciò che ci sta di fronte: la totale assenza di un “essere contro” non rappresenta una condizione ideale, poichè senza questo scontro si ricade dolorosamente su sé stessi. L’essere di fronte avviene come incontro con il totalmente Altro, ma il sovraccarico narcisistico rischia di renderci sordi e ciechi di fronte all’Altro. Ma l’Altro mina la presenza a Sé. Apre una profonda crepa nel soggetto, attraverso la quale il totalmente Altro irrompe nel Sè; solo una debolezza rende ricettivi alla voce dell’Altro. È nell’apertura, nel rendere fragili e vulnerabili le fotografie che lì si mostra la loro vera essenza; ciò che le compone, elemento per elemento, rivelando una bellezza non visibile nella totalità della loro apparenza. Un Oggetto fisico con cui avere un’altrettanto fisico riscontro.<br><br><br>Federica Zandomeneghi",
            images: [
                "./asset/images/oggetto/0.jpg",
                "./asset/images/oggetto/1.jpg",
                "./asset/images/oggetto/2.jpg",
                "./asset/images/oggetto/3.jpg",
                "./asset/images/oggetto/4.jpg",
                "./asset/images/oggetto/5.jpg",
                "./asset/images/oggetto/6.jpg",
                "./asset/images/oggetto/7.jpg",
                "./asset/images/oggetto/8.jpg",
                "./asset/images/oggetto/9.jpg",
            ], 
        },
		puntoDiDomanda: {
			name: "Punto di Domanda",
			subName: "Fotografia istantanea, 20x30cm ognuna, 2022",
            text: "In questo lavoro non si vede nessuna immagine, non c’è nessuna rappresentazione, qualcosa che esiste al di fuori della fotografia e che la fotografia rappresenta: potremmo dire che queste stampe non rappresentano nulla nonostante un soggetto ci sia, nonostante e proprio perchè nascosto. Nella misura in cui non è rappresentato nulla, queste rielaborazioni fotografiche mostrano semplicemente sé stesse. Cosa è presente? L’indagine che ho affrontato mi ha permesso di arrivare a creare un limite aperto, una ferita che nello stesso tempo in cui assume il compito di apertura e rivelatrice nasconde, protegge, obbliga ad un personale lavoro di scoperta e di domanda. Il titolo nasce proprio da questo: venti stampe che attraggono, seducono la vista, ma non basta. Il mio desiderio è stato quello di creare un’opportunità di silenzio. Un punto di riflessione, di indagine personale da cui possa fiorire il sé. Un punto di domanda.<br><br><br>Federica Zandomeneghi",
            images: [
                "./asset/images/puntoDiDomanda/12.jpg",
                "./asset/images/puntoDiDomanda/12.jpg",
                "./asset/images/puntoDiDomanda/13.jpg",
                "./asset/images/puntoDiDomanda/14.jpg",
                "./asset/images/puntoDiDomanda/10.jpg",
            ], 
        },
		sindone: {
			name: "Sindone",
			subName: "Chimigramma stampato su raso, 115x160cm, 2022-23",
            text: "“Perché non possiamo restare chiusi in noi stessi? Perché perseguiamo l’espressione e la forma, cercando di svuotarci di ogni contenuto e di disciplinare un processo caotico e ribelle? (…) Essere pieni di sé - non nel senso dell’orgoglio, ma della ricchezza -, essere travagliati da un’infinità interiore e da una estrema tensione significa vivere con una tale intensità da sentirsi morire di vita (…) ma il crollo nascerà allora da un eccesso di pienezza”.<br> E. Cioran, Al culmine della disperazione, 1934 <br><br>I chimigrammi sono una continua interferenza tra intenzione e casualità. Non solo durante, ma anche nel loro successivo sviluppo non sono padrona dell’esecuzione: sono oggetti che prendono effettivamente vita, divengono una vita ferita, e se non fermati chimicamente, la fase di sviluppo non ha un termine, bensì è continua; i fotogrammi assumono un colore progressivamente più scuro, fino al nero, fino a raggiungere l’oscurazione totale. Morte. Nulla di più umano, per quanto sia la cosa che ci dimentichiamo più spesso. Così la fotografia diventa un atto generativo, e non più rappresentativo o imitativo: rafforza l’idea di essa come oggetto piuttosto che di sola immagine. Lo scorrere delle gocce dei bagni di sviluppo sulla carta diventano radici, vasi sanguigni, elementi vitali e di vita. I toni di colore non sono molti, sono quelli della cancrena, una carne lacerata dalla vita - e non dalla morte - che giorno dopo giorno giunge al suo termine. Accanto a queste, un momento fermato, un istante di vita colto nella sua pienezza e immortalato: letteralmente, il suo carattere di mortalità viene annullato, consegnando questo frammento all’eternità.<br><br><br>Federica Zandomeneghi",
            images: [
                "./asset/images/sindone/15.png",
                "./asset/images/sindone/15.png",
                "./asset/images/sindone/15.png",
            ], 
        },
    }

	const work = workDetails[workId];
	if (work) {
		const workDetailsContainer = document.getElementById("workDetailsContainer");

        let imagesHtml = '';

        // Genera il markup HTML per le immagini
        if (work.images && work.images.length > 0) {
            for (let i = 0; i < work.images.length; i++) {
                imagesHtml += `
                <div class="workCont ratio ratio-1x1">
                    <img src="${work.images[i]}" class="imgFit">
                </div>`;
            }
        }

		workDetailsContainer.innerHTML = `
        <div class="pb-1 w-100 text-center instrumentalSerif workTitle">${work.name}</div>
        <div class="w-100 text-center fs-6 mb-5">${work.subName}</div>
        <div class="d-flex row mt-5">
            <div class="col-12 col-md-6 d-flex flex-column gap-3">
                ${imagesHtml}
            </div>
            <div class="mt-4 mt-md-0 col-12 col-md-6 fs-5 sticky-column">
                ${work.text}
            </div>
        </div>
        `
	}
}

// Chiamata alla funzione di caricamento dei dettagli del lavoro quando il documento è pronto
document.addEventListener("DOMContentLoaded", () => {
    const workId = getUrlParameter('work');
    loadWorkDetails(workId);
});
