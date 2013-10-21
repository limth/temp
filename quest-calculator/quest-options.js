questOptions = {
    selectedOption: 1,
    setOption: function (option) {
        this.selectedOption = parseInt(option);
        this.current = this[this.selectedOption];
    },
    current: this[this.selectedOption],
    1: {
        renderOption: function () {
            return '<span>Rozmiar ściany: szerokość </span>'
                + '<input type="text" name="widthInput" />'
                + '<span>[cm] x wysokość </span>'
                + '<input type="text" name="heightInput" />'
                + '<span>[cm].</span>'
                + '<input type="button" name="generateButton" value="Generuj" />';
        },   
        generateWall: function (height, width) {
            var dimensions = this.calculateDimensions(width, height);
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
        calculateDimensions: function (width, height) {
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
            return '<span>Ściana Questów: liczba kolumn </span>'
                + '<input type="text" name="widthInput" />'
                + '<span> x liczba rzędów </span>'
                + '<input type="text" name="heightInput" />&nbsp;'
                + '<input type="button" name="generateButton" value="Generuj" />';
        },
        generateWall: function (rows, columns) {
            $('#table-wrapper').append(generateQuestTable(rows, columns));
            $('#summary').remove();
            $('#calc-render').append(this.generateWallSummary(columns, rows));

            return { width: rows, height: columns };
        },
        generateWallSummary: function (width, height) {
            var $summary = $('<div>').attr('id', 'summary');
            var summaryText = '<span>Podsumowanie:' 
                + '<br/>Liczba wykorzystanych Questów: ' + width * height
                + '<br/>Szerokość ściany: ' + width * questConstants.QUEST_WIDTH / 10 + 'cm' 
                + '<br/>Wysokość ściany: ' + height * questConstants.QUEST_HEIGHT / 10 + 'cm'
                + '</span>';

            return $summary.append(summaryText);
        }
    }
}

$(document).ready(function () {
    questCalculator.initialize();
});
