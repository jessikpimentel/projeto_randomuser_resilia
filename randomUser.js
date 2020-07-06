let request = new XMLHttpRequest();

request.open("GET", "https://randomuser.me/api/");

request.addEventListener("load",function(){
    let nome = document.createElement("p");
    document.body.appendChild(nome);
    let objetoApi = JSON.parse(request.responseText);

    nome.textContent= objetoApi.results[0].name.first+ " " +objetoApi.results[0].name.last;

    let gender = document.createElement("p");
    document.body.appendChild(gender);

    gender.textContent= objetoApi.results[0].gender;

    let picture = document.createElement("img");
    document.body.appendChild(picture);
    picture.src= objetoApi.results[0].picture.medium;
    picture.classList.add("picture");


    let country = document.createElement("p");
    document.body.appendChild(country);

    country.textContent= objetoApi.results[0].location.country;


});
request.send();