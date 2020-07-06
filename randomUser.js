

let field = document.querySelector("#field");
let button = document.querySelector("#button");


button.addEventListener("click",function(){
    let newRequest = new XMLHttpRequest();
    let nameUrl = "https://randomuser.me/api?results=" + field.value;

    newRequest.open("GET", nameUrl);
    newRequest.addEventListener("load",function(event){
        let newObjectApi = JSON.parse(newRequest.responseText);

        event.preventDefault();

        for(let i=0; i<newObjectApi.results.length; i++){

            let blankLine = document.createElement("br");
            document.body.appendChild(blankLine);
            let nome = document.createElement("p");
            nome.classList.add("distance");
            document.body.appendChild(nome);
        
            nome.textContent= newObjectApi.results[i].name.first+ " " +newObjectApi.results[i].name.last;
        
            let gender = document.createElement("p");
            document.body.appendChild(gender);
        
            gender.textContent= newObjectApi.results[i].gender;
        
            let picture = document.createElement("img");
            document.body.appendChild(picture);
            picture.src= newObjectApi.results[i].picture.medium;
            picture.classList.add("picture");
        
        
            let country = document.createElement("p");
            document.body.appendChild(country);
        
            country.textContent= newObjectApi.results[i].location.country; 
        }

    });

    newRequest.send();
});