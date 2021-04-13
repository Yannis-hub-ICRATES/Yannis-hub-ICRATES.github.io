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