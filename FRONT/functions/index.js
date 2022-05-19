const candidateContainer = document.getElementById('candidateContainer');



const getCandidatesAPI = async ()=>{
    let url = `http://localhost:3000/api/candidates`;
    let response = await fetch(url, {method:'GET'});
    let candidates = await response.json();
    /*
    const candidates=[
        {   
            photo:"https://www.semana.com/resizer/rx2kPkCPen4JDaD80erPjCgbApw=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/TJFANV7KUNBEJMOAIPJZIAL5QY.jpg",
            president:'RODOLFO HERNÁNDEZ',
            vice_president:'MARELEN CASTILLO',
            political_party:'LIGA de Gobernantes Anticorrupción',

        },
        {   
            photo:"https://www.portafolio.co/files/article_content/uploads/2022/02/20/6212adc9910de.jpeg",
            president:'FEDERICO GUTIÉRREZ',
            vice_president:'RODRIGO LARA',
            political_party:'EQUIPO POR COLOMBIA',

        }
         
    ];


    */
 candidates.data.forEach(element => {
    let candidate = new Candidate(element.photo,element.president,element.vice_president,element.political_party);
    let component = new CandidateComponent(candidate);
    component.render(candidateContainer);
 });



}

getCandidatesAPI();



