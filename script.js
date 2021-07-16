var current_page = 1;
var records_per_page = 5;

async function getData(){
    try {
        var data = await fetch("https://api.openbrewerydb.org/breweries");
    var resp = await data.json();

    resp.forEach(element => {
        //create the element
        var div = document.createElement("div");
        div.setAttribute('class' , 'design');
        var nametd = document.createElement("h1");
        var typetd = document.createElement("h2");
        var addresstd = document.createElement("h3");
        var websiturltd = document.createElement("h2");
        var phonenotd = document.createElement("h2");

        //assign values
        
nametd.innerText =` 🍺 Brewery Name: ${element.name}`;
typetd.innerText =`Brewery Type : ${ element.brewery_type}`;
addresstd.innerText = `Brewery address: City:${element.city} State :${element.state} Postal_code: ${element.postal_code} Country: ${element.country}`;
websiturltd.innerText = ` Website Url : ${element.website_url}`;
phonenotd.innerText = `Brewery Phone no : ${element.phone}`;

    
//append the element to div
div.appendChild(nametd);
div.appendChild(typetd);
div.appendChild(addresstd);
div.appendChild(websiturltd);
div.appendChild(phonenotd);
document.getElementById("datatab").appendChild(div);
        
});
    } catch (error) {
        console.log(error);
    }
}
getData();


