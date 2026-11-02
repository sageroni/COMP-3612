/* add code below this */
const companiesArray = JSON.parse(companies);

// constructor for accounting calculations
function AcctCalculations(company) {
    const currency = function(num) { 
        return new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'}).format(num); 
    };
    this.day50 = function() {
        return currency(company.stats.day50MovingAvg);
    };
    this.day200 = function() {
        return currency(company.stats.day200MovingAvg);
    };
    this.marketCap50 = function() {
        return currency(company.stats.day50MovingAvg * company.stats.sharesOutstanding);
    };
    this.marketCap200 = function() {
        return currency(company.stats.day200MovingAvg * company.stats.sharesOutstanding);
    };
    this.revenue = function() {
        return currency(company.stats.operatingRevenue - company.stats.costOfRevenue);
    };
    this.shareholderEquity = function() {
        return currency(company.stats.totalAssets - company.stats.totalLiabilities);
    };
}

function outputCard(company) {
    const calc = new AcctCalculations(company);

    document.write(`<article class="card">`);
    document.write(`<h2>${company.symbol} - ${company.companyName}</h2>`);
    document.write(`<div>`);
    document.write(`<p>Share Price (50day avg): <span>${calc.day50()}</span></p>`);
    document.write(`<p>Share Price (200day avg): <span>${calc.day200()}</span></p>`);
    document.write(`<p>Market Cap (50day avg): <span>${calc.marketCap50()}</span></p>`);
    document.write(`<p>Market Cap (200day avg): <span>${calc.marketCap200()}</span></p>`);
    document.write(`<p>Net Revenue: <span>${calc.revenue()}</span></p>`);
    document.write(`<p>Shareholder Equity: <span>${calc.shareholderEquity()}</span></p>`);
    document.write(`</div>`);
    
    document.write(`<footer>`);
    // outputting a single tag with func expr
    const outputTag = function(tag) {
        document.write(`<small>${tag}</small>`);
    };
    // looping through company tags with function expression
    company.tags.forEach(function(tag) {
        outputTag(tag);
    });
    document.write(`</footer>`);
    document.write(`</article>`);
}
companiesArray.forEach(function(company) {
    outputCard(company);
});