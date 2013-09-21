Number.prototype.times = function(fn) {
    for(var r = [], i = 0; i < this; i++)
        r.push(fn(i));
    return r;
}

function generateQuestTable(numRows, numCols) {
    var topRow = generateTopRow(numCols);
    var assembledRows = generateAssembledRows(numRows, numCols);
    var baseRow = generateBaseRow(numCols);
    var bottomRow = generateBottomRow(numCols);

    return $('<table/>').attr('id', 'quest-table')
        .append(topRow)
        .append(assembledRows)
        .append(baseRow)
        .append(bottomRow);
}

function generateAssembledRows(numRows, numCols) {
    if (numRows == 1) {
        return;
    }

    numRows = numRows - 1;

    var assembledRows = numRows.times(function () {
        return generateBaseRow(numCols)
            .add(generateAssemblyRow(numCols));
    });

    return assembledRows;
}

function generateTopRow(numCols) {
    var topRow = $('<tr/>').append(numCols.times(function(c) {
        return $('<td/>').append(getTopQuestImage());
    }));

    return topRow;
}

function generateBaseRow(numCols) {
    var baseRow = $('<tr/>').append(numCols.times(function(c) {
        return $('<td/>').append(getBaseQuestImage());
    }));

    return baseRow;
}

function generateAssemblyRow(numCols) {
    var assemblyRow = $('<tr/>').append(numCols.times(function(c) {
        return $('<td/>').append(getAssemblyQuestImage());
    }));

    return assemblyRow;
}

function generateBottomRow(numCols) {
    var bottomRow = $('<tr/>').append(numCols.times(function(c) {
        return $('<td/>').append(getBottomQuestImage());
    }));
    
    return bottomRow;
}
