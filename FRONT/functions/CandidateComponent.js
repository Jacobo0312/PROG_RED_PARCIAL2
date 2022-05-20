class CandidateComponent{


    //State
    constructor(candidate){
        this.candidate = candidate;
    }

    render(container){
        let html = `
            <div class="card text-center" style="width: 25rem;">
            <img src="${this.candidate.photo}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><b> PRESIDENTE</b><br>${this.candidate.president}</h5>
            <p class="card-subtitle mb-2 text-muted"><b> VICEPRESIDENTE</b><br> ${this.candidate.vice_president}</p>
            <p class="card-text text-primary"><b> PARTIDO</b><br> ${this.candidate.political_party}</p>
            <a href="#" id="button${this.candidate.id}" class="btn btn-primary">VOTAR</a>
            </div>
        </div>
        `;


        if (this.candidate.president=="VOTO EN BLANCO"){
             html = `
            <div class="card text-center" style="width: 25rem;">
            <img src="${this.candidate.photo}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title align-center">VOTAR EN BLANCO</h5>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
            <a href="#" id="button${this.candidate.id}" class="btn btn-primary">VOTAR</a>
            </div>
        </div>
        `;
        }


        let root = document.createElement('div');
        root.innerHTML = html.trim();
        container.appendChild(root.firstChild);

        let button = document.getElementById(`button${this.candidate.id}`);
        button.addEventListener('click', this.action.bind(this));
    }

    action(event){
   
        event.preventDefault();
        let url = `http://localhost:3000/api/candidates/${this.candidate.id}/vote`;
        fetch(url, {method:'PUT'})
        .then(response => response.json())
        .then(data => {
            if(data.data.status == 'success'){
                alert('Voto registrado');
                window.location.href = "statistics.html";
            }
        })
        .catch(error => console.log(error));
    }



}