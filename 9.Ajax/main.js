let body = document.getElementsByTagName("body")[0];
body.style.display = `flex`;
body.style.flexDirection = `row`;
body.style.flexWrap = `nowrap`;
body.style.display = "grid";
body.style.alignItems = "center";

body.style.gridTemplateColumns = "1fr 1fr 1fr";

//document.getElementById("country-card-event").onclick =
function getCountryData() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.net/v3.1/all");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Succes!");
      let countries = JSON.parse(this.response);

      countries.forEach((country) => {
        let countryCard = document.createElement("div");
        let br = document.createElement("br");
        countryCard.style.width = "250px";
        countryCard.style.height = "auto";
        countryCard.style.border = "solid black";
        countryCard.style.margin = "20px";
        countryCard.style.display = "flex";
        countryCard.style.flexDirection = "column";
        countryCard.style.alignItems = "center";
        // countryCard.style.justifyContent = "space-evenly";
        countryCard.style.padding = "10px";

        console.log(country);

        let countryName = document.createTextNode(
          `Country name: ${country.name.common}`
        );
        let countryPopulation = document.createTextNode(
          `Population: ${country.population}`
        );
        let countryCapital = document.createTextNode(
          `Capital: ${country.capital}`
        );

        let info = document.createElement("div");
        info.style.display = "flex";
        info.style.flexDirection = "column";
        info.append(countryName);
        info.innerHTML = info.innerHTML + "<br>";
        info.append(countryPopulation);
        info.innerHTML = info.innerHTML + "<br>";
        info.append(countryCapital);

        document.getElementsByTagName("body")[0].appendChild(countryCard);
        let emblem = document.createElement("img");
        emblem.style.width = "auto";
        emblem.style.height = "200px";
        emblem.setAttribute("src", `${country.coatOfArms.svg}`);
        emblem.style.margin = "15px";
        countryCard.appendChild(emblem);
        countryCard.appendChild(info);

        let flag = document.createElement("img");
        flag.style.height = "50px";
        flag.style.width = "auto";
        flag.style.margin = "15px";
        flag.setAttribute("src", `${country.flags.svg}`);
        countryCard.appendChild(flag);

        // let obj={};
        // obj={country.currencies:{name}};

        // let currency = document.createTextNode(
        //   `Currency: ${JSON.stringify(country.currencies)}`
        // );
        // countryCard.appendChild(currency);
      });
    }
  };
  xhr.send();
}

getCountryData();
