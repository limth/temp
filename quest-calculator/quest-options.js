questOptions = {
    selectedOption: 1,
    setOption: function (option) {
        this.selectedOption = parseInt(option);
        this.current = this[this.selectedOption];
    },
    current: this[this.selectedOption],
    1: {
        renderOption: function () {
            return '<span>Regał Questsystem: szerokość </span>'
                + '<input type="text" name="widthInput" />'
                + '<span>[cm] x wysokość </span>'
                + '<input type="text" name="heightInput" />'
                + '<span>[cm].</span>'
                + '<input type="button" name="generateButton" value="Generuj" />';
        },   
        generateWall: function (height, width) {
            var dimensions = this._calculateDimensions(width, height);
            var rows = dimensions.rows;
            var columns = dimensions.columns;

            if (width >= (parseInt(questConstants.QUEST_WIDTH / 10)) &&
                    height >= (parseInt(questConstants.QUEST_HEIGHT)) / 10) {
                $('#table-wrapper').append(generateQuestTable(rows, columns));
                $('#summary').remove();
                $('#calc-render').append(this.generateWallSummary(width, height, rows, columns));
            } else {
                alert(this.measurementsError());
            }
            

            return { width: columns, height: rows };
        },
        generateWallSummary: function (width, height, rows, columns) {
            var $summary = $('<div>').attr('id', 'summary');
            var summaryText = '<span>Podsumowanie:' 
                + '<br/>Liczba wykorzystanych Questów: ' + rows * columns
                + ' - ' + columns + ' w poziomie, ' + rows + ' w pionie.'
                + '<br/>Szerokość ściany Questów: ' + (columns * questConstants.QUEST_WIDTH / 10) + 'cm' 
                + ' - pozostało ' + (((width * 10) - (columns * questConstants.QUEST_WIDTH)) / 10) + 'cm'
                + '<br/>Wysokość ściany Questów: ' + (rows * questConstants.QUEST_HEIGHT / 10) + 'cm'
                + ' - pozostało ' + (((height * 10) - (rows * questConstants.QUEST_HEIGHT)) / 10) + 'cm'
                + '</span>';

            return $summary.append(summaryText);
        },
        _calculateDimensions: function (width, height) {
            var rows = parseInt(height * 10 / questConstants.QUEST_HEIGHT);
            var columns = parseInt(width * 10 / questConstants.QUEST_WIDTH);

            return { rows: rows, columns: columns };
        },
        measurementsError: function () {
            var $summary = $('<div>').attr('id', 'summary');
            var errorText = 'Proszę podać szerokość >= 8cm, wysokość >= 13cm.';
            
            return errorText;
        }
    },
    2: {
        renderOption: function () {
            return '<span>Ściana Questów: ilość w poziomie </span>'
                + '<input type="text" name="widthInput" />'
                + '<span> x ilość w pionie </span>'
                + '<input type="text" name="heightInput" />&nbsp;'
                + '<input type="button" name="generateButton" value="Generuj" />';
        },
        generateWall: function (rows, columns) {
            $('#table-wrapper').append(generateQuestTable(rows, columns));
            $('#summary').remove();
            $('#calc-render').append(this.generateWallSummary(columns, rows));

            return { width: columns, height: rows };
        },
        generateWallSummary: function (width, height) {
            var dimensions = this._calculateDimensions(width, height);
            var $summary = $('<div>').attr('id', 'summary');
            var summaryText = '<span>Podsumowanie:' 
                + '<br/>Liczba wykorzystanych Questów: ' + width * height
                + '<br/>Szerokość ściany: ' + dimensions.totalWidth + 'cm' 
                + '<br/>Wysokość ściany: ' + dimensions.totalHeight + 'cm'
                + '</span>';

            return $summary.append(summaryText);
        },
        _calculateDimensions: function (widthCount, heightCount) {
            var width = widthCount * questConstants.QUEST_WIDTH / 10;
            var height = (heightCount - 1)
                * questConstants.QUEST_HEIGHT_rest
                + questConstants.QUEST_HEIGHT_1st;
            height = height / 10;

            return { totalWidth: width, totalHeight: height };
        }
    }
}

$(document).ready(function () {
    questCalculator.initialize();
});
