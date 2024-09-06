function updateTime() {
  // Seoul
  let SeoulElement = document.querySelector("#Seoul");
  if (SeoulElement) {
    let SeoulDateElement = SeoulElement.querySelector(".date");
    let SeoulTimeElement = SeoulElement.querySelector(".time");
    let SeoulTime = moment().tz("Asia/Seoul");

    SeoulDateElement.innerHTML = SeoulTime.format("MMMM	Do YYYY");
    SeoulTimeElement.innerHTML = SeoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Victoria
  let VictoriaElement = document.querySelector("#Victoria");
  if (VictoriaElement) {
    let VictoriaDateElement = VictoriaElement.querySelector(".date");
    let VictoriaTimeElement = VictoriaElement.querySelector(".time");
    let VictoriaTime = moment().tz("Australia/Victoria");

    VictoriaDateElement.innerHTML = VictoriaTime.format("MMMM	Do YYYY");
    VictoriaTimeElement.innerHTML = VictoriaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
