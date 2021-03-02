var apiKey = 'a4b7c4298a415cb0ef93f54cf9f6ec29';

document.addEventListener('DOMContentLoaded', forecast);

function forecast() {
    var req = new XMLHttpRequest();
    //opens a GET request with the provided city name and country code
    req.open("GET", "api.openweathermap.org/data/2.5/forecast/daily?q=norfolk,va&cnt=7&units=imperial&appid=" + apiKey, true);
    //adds an event listener for the request's load event; when loaded, it parses and utilizes the returned data
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            var listItem = document.createElement("li");
            var weather = document.createElement("span");
            //adds text to the newly created weather span
            console.log(response.city.name)
            weather.appendChild(document.createTextNode("The current temperature in " + response.name + ", " + response.sys.country + " is " + response.main.temp + " degrees."));
            listItem.appendChild(weather); //appends the weather span to the newly created list item
            document.getElementById("forecast").appendChild(listItem); //appends the list item to the list "forecast"
        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(null);

    /*document.getElementById('zipcodeSubmit').addEventListener('click', function (event) {
        //adds an event listener to the submit button for Zipcode/Country Code
        var req = new XMLHttpRequest();
        var zipcode = document.getElementById('zipcode').value;
        var zipcodeCC = document.getElementById('zipCountry').value;
        //opens a GET request with the provided zipcode and country code
        req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "," + zipcodeCC + "&units=imperial&appid=" + apiKey, true);
        //adds an event listener for the request's load event; when loaded, it parses and utilizes the returned data
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                var listItem = document.createElement("li");
                var weather = document.createElement("span");
                //adds text to the newly created weather span
                weather.appendChild(document.createTextNode("The current temperature in " + zipcode + ", " + response.sys.country + " is " + response.main.temp + " degrees."));
                listItem.appendChild(weather); //appends the weather span to the newly created list item
                document.getElementById("forecast").appendChild(listItem); //appends the list item to the list "forecast"
            } else {
                console.log("Error in network request: " + req.statusText);
            }
        });
        req.send(null);
        event.preventDefault();
    });

    document.getElementById('binSubmit').addEventListener('click', function (event) {
        //adds an event listener to the submit button for the httpbin.org text
        var req = new XMLHttpRequest();
        var payload = {
            binText: null
        };
        payload.binText = document.getElementById('binText').value; //stores the text that is typed into the submission box
        req.open('POST', 'http://httpbin.org/post', true); //opens the POST request
        req.setRequestHeader('Content-Type', 'application/json'); //lets the server know JSON data is being sent
        //adds an event listener for the request's load event; when loaded, it parses and utilizes the returned data
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById('submittedText').textContent = '"' + payload.binText + '"';
                document.getElementById('responseText').textContent = response.data.slice(11, -1); //slices out only the user's string that was submitted, including quotations
            } else {
                console.log("Error in network request: " + req.statusText);
            }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });*/
}