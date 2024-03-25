let currentDate = moment().format("ddd, MMMM D, YYYY");
let theDate = document.querySelector("#current-date");
theDate.innerHTML = currentDate;

document
  .getElementById("timezone")
  .addEventListener("change", function (event) {
    const selectedOption = event.target; // Access the selected option directly

    switch (selectedOption.value) {
      case "current-location":
        setInterval(currentLocation, 100);
        break;
      case "charlyn":
        displayFamilyMember(
          "🇫🇮 Charlyn",
          "Europe/Helsinki",
          "Espoo, Finland",
          "charlyn",
          "charlyn-city",
          "charlyn-hour",
          "charlyn-am-pm"
        );
        break;
      case "grace":
        displayFamilyMember(
          "🇮🇪 Grace",
          "Europe/Nicosia",
          "Limassol, Cyprus",
          "grace",
          "grace-city",
          "grace-hour",
          "grace-am-pm"
        );
        break;
      case "christine":
        displayFamilyMember(
          "🇸🇪 Christine",
          "Europe/Stockholm",
          "Gothenburg, Sweden",
          "christine",
          "christine-city",
          "christine-hour",
          "christine-am-pm"
        );
        break;
      case "jonathan":
        displayFamilyMember(
          "🇦🇺 Jonathan",
          "Australia/Melbourne",
          "Mildura, Australia",
          "jonathan",
          "jonathan-city",
          "jonathan-hour",
          "jonathan-am-pm"
        );
        break;
      case "ryan":
        displayFamilyMember(
          "🇮🇪 Ryan",
          "Europe/Dublin",
          "Dublin, Ireland",
          "ryan",
          "ryan-city",
          "ryan-hour",
          "ryan-am-pm"
        );
        break;
      case "mark":
        displayFamilyMember(
          "🇵🇭 Mark",
          "Asia/Manila",
          "Iligan, Philippines",
          "mark",
          "mark-city",
          "mark-hour",
          "mark-am-pm"
        );
        break;
      default:
        console.log("Invalid option");
    }
  });

function currentLocation() {
  let currentLocation = document.querySelector("#current-location");
  let myLocation = moment()
    .tz(moment.tz.guess())
    .format("dddd, MMMM Do YYYY, h:mm:ss A");
  currentLocation.innerHTML = `It is ${myLocation} in my location, right now. 😌 `;
}

function displayFamilyMember(
  personName,
  timezone,
  city,
  nameId,
  cityId,
  hourId,
  amPmId
) {
  let personElement = document.querySelector(".person");
  let cityElement = document.querySelector(`#${cityId}`);
  let nameElement = document.querySelector(`#${nameId}`);
  let hourElement = document.querySelector(`#${hourId}`);
  let amPmElement = document.querySelector(`#${amPmId}`);

  let theHour = moment().tz(timezone).format("HH:mm:ss");
  let theAmPm = moment().tz(timezone).format("A");

  personElement.innerHTML = personName; // Set the selected option's text content
  cityElement.innerHTML = city;
  nameElement.innerHTML = personName; // Update nameElement with person name and flag emoji
  hourElement.innerHTML = theHour;
  amPmElement.innerHTML = theAmPm;
}
