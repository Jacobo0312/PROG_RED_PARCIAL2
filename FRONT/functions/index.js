const candidateContainer = document.getElementById('candidateContainer');



const getCandidatesAPI = async ()=>{
    let url = `https://typescript-api-parcial2.herokuapp.com/api/candidates`;
    let response = await fetch(url, {method:'GET'});
    let candidates = await response.json();

 candidates.data.forEach(element => {
    let candidate = new Candidate(element.id,element.photo,element.president,element.vice_president,element.political_party);
    let component = new CandidateComponent(candidate);
    component.render(candidateContainer);
 });



}

getCandidatesAPI();



