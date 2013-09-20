Number.prototype.times = function(fn) {
    for(var r = [], i = 0; i < this; i++)
        r.push(fn(i));
    return r;
}

function GenerateTablejQuery(numRows, numCols) {

    var header = numCols.times(function(c) {
        return $("<th/>").text("Column " + c);
    });

    var row = function(r) {
        return $("<tr/>").append(numCols.times(function(c) {
            return $("<td/>").text([c, r].join(""));
        }));
    };

    return $("<table/>")
            .append(header)
            .append(numRows.times(row))
            .attr("border", 1);
}

