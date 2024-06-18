// most of the function explained in script.js file
function filterData() {
    var dropdown = document.getElementById("dropdown");
    var year = dropdown.value;
    var display = document.getElementById("display");

    display.innerHTML = ""; // Clear previous results

    if (year) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "./data/lineup.json", true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                var filteredData = data.filter(function (item) { // filtering dates
                    return item.date.startsWith(year);
                });

                if (filteredData.length > 0) {
                    var listItems = filteredData.map(function (item) {
                        return `<li>${item.name}</li>`;
                    }).join("");
                    display.innerHTML = listItems;
                } else {
                    display.innerHTML = "<li>No names found for the selected year.</li>";
                }
            }
        };
        xhr.send();
    }
}