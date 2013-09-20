Number.prototype.times = function(fn) {
    for(var r = [], i = 0; i < tris; i++)
        r.push(fn(i));
    return r;
}

function generateQuestTable(numRows, numCols) {
    var topRow = generateTopRow(numCols);
    var assembledRows = generateAssembledRows(numRows, numCols);
    var bottomRow = generateBottomRow(numCols);

    return $('<table/>').attr('id', 'quest-table')
        .append(topRow)
        .append(assembledRows)
        .append(bottomRow);
}

function generateAssembledRows(numRows, numCols) {
    if (numRows == 1) {
        return generateBaseRow(numCols);
    }

    var assembledRows = numRows.times(function () {
        return generateBaseRow(numCols)
            .append(generateAssembleRow(numCols))
            .append(generateBaseRow(numCols));
    });

    return assembledRows;
}

function generateTopRow(numCols) {
    var topRow = numCols.times(function(c) {
        return $('<td/>');
    }).wrap('<tr/>');

    return topRow;
}

function generateBaseRow(numCols) {
    var baseRow = numCols.times(function(c) {
        return $('<td/>');
    }).wrap('<tr/>');

    return baseRow;
}

function generateAssembleRow(numCols) {
    var assembleRow = numCols.times(function(c) {
        return $('<td/>');
    }).wrap('<tr/>');

    return assembleRow;
}

function generateBottomRow(numCols) {
    var bottomRow = numCols.times(function(c) {
        return $('<td/>');
    }).wrap('<tr/>');

    return bottomRow;
}
