function embedDeposits() {
    document.getElementById("vis3").innerHTML = ""
    const spec = "deposits_type.vl.json"
    vegaEmbed('#vis3', spec)
        .catch(console.warn);
}

function embedPublications() {
    document.getElementById("vis3").innerHTML = ""
    const spec = "publications_overview.vl.json"
    vegaEmbed('#vis3', spec)
        .catch(console.warn);
}

function embedScatterPlot() {
    document.getElementById("vis1").innerHTML = ""
    const spec = "overview_cyprus.vl.json"
    vegaEmbed('#vis1', spec)
        .catch(console.warn);
}

function embedTable() {
    document.getElementById("vis1").innerHTML = ""
    document.getElementById("vis1").innerHTML =
        "<img src= 'images/map_of_cyprus3.png' alt='Overview table' width='475' class='map'/>"
}

function embedFabricOverview() {
    document.getElementById("vis2").innerHTML = ""
    const spec = "fabrics_overview.vl.json"
    vegaEmbed('#vis2', spec)
        .catch(console.warn);
}

function embedSFUncertain() {
    document.getElementById("vis2").innerHTML = ""
    const spec = "sherds_uncertain.vl.json"
    vegaEmbed('#vis2', spec)
        .catch(console.warn);
}