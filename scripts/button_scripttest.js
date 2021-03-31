function embedDeposits() {
    document.getElementById("vis2").innerHTML = ""
    const spec4 = "deposits_selector.vl.json"
    vegaEmbed('#vis2', spec4)
        .catch(console.warn);
}

function embedPublications() {
    document.getElementById("vis2").innerHTML = ""
    const spec4 = "publications_selectors.vl.json"
    vegaEmbed('#vis2', spec4)
        .catch(console.warn);
}