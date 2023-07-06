function getCountries() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.net/v3.1/all");
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log("Succes!");
            let countries =  JSON.parse(this.response);
            console.log(countries);
        }
    }
    xhr.send();
}

// let countryCard = document.createElement("div");
// countryCard.style.width = "200px";
// countryCard.style.height = "300px";
// countryCard.style.border = "solid black"
// document.getElementById("country-card-event").appendChild(countryCard);

let body = document.getElementsByTagName("body")[0];
body.style.display=`flex`;
    // body[0].style.display = `flex`

document.getElementById("country-card-event").onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.net/v3.1/all");
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log("Succes!");
            let countries = JSON.parse(this.response);
            // let countryCard = document.createElement("div");
            // countryCard.style.width = "200px";
            // countryCard.style.height = "300px";
            // countryCard.style.border = "solid black";
            // document.body.style.display = "flex";
            // for(let i = 0; i< countries.length; i++) {
            //     console.log(countries[i].name.common);
            //     let cardContent = document.createTextNode(countries[i].name.common);
            //     countryCard.appendChild(cardContent);
            //     document.getElementsByTagName("div")[0].appendChild(countryCard);
            // }
            countries.forEach(country => {
                let countryCard = document.createElement("div");
                countryCard.style.width = "200px";
                countryCard.style.height = "300px";
                countryCard.style.border = "solid black";
                countryCard.style.margin = "20px"
                countryCard.style.display = "grid"
                countryCard.style.gridTemplateColumns = "1fr 1fr 1fr"
                console.log(country);
                let cardContent = document.createTextNode(country.name.common);
                document.getElementsByTagName("body")[0].appendChild(countryCard);
                countryCard.appendChild(cardContent);
                let flag = document.createElement("img");
                flag.style.width = "160px"
                flag.style.height = "80px"
                flag.style.backgroundImage = "url(country.coatOfArms.png)";
                countryCard.appendChild(flag);
            });

            // for(let i = 0; i< xhr.response.length; i++) {
            //     let countryCard = document.createElement("div");
            //     countryCard.style.width = "200px";
            //     countryCard.style.height = "300px";
            //     countryCard.style.border = "solid black";
            //     document.body.style.display = "flex";
            //     document.getElementsByTagName("body")[0].appendChild(countryCard);
            // }
        }
    }
    xhr.send();

    // console.log(xhr.response.length);
    // setTimeout(() => {
    //     console.log(xhr.response.length);
    // }, "3000");
    
    // for(let i = 0; i< xhr.response.length; i++) {
    //     let countryCard = document.createElement("div");
    //     countryCard.style.width = "200px";
    //     countryCard.style.height = "300px";
    //     countryCard.style.border = "solid black";
    //     document.body.style.display = "flex";
    //     document.getElementsByTagName("body")[0].appendChild(countryCard);
    // }

    // let countryCard = document.createElement("div");
    // countryCard.style.width = "200px";
    // countryCard.style.height = "300px";
    // countryCard.style.border = "solid black";
    // document.body.style.display = "flex";
    // // document.getElementsByTagName("body")[0].style.cssText = `display:flex`;
    // // let body = document.querySelector("body")[0];
    // // body.style.display = `flex`
    // document.getElementsByTagName("body")[0].appendChild(countryCard);
    
}


