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
                + '<input type="button" name="generateButton" value="Generuj" />'
                + '<p>W budowie.</p>'
        },   
        generateWall: function (rows, columns) {
            $('#table-wrapper').append(generateQuestTable(rows, columns));
            $('#summary').remove();
            $('#calc-render').append(this.generateWallSummary(columns, rows));
        },
        generateWallSummary: function (width, height) {
            var $summary = $('<div>').attr('id', 'summary');
            var summaryText = '<span>Podsumowanie:' 
                + '<br/>Liczba wykorzystanych Questów: ' + width * height
                + '<br/>Szerokość ściany: ' + width * questConstants.QUEST_WIDTH + 'cm' 
                + '<br/>Wysokość ściany: ' + height * questConstants.QUEST_HEIGHT + 'cm'
                + '</span>';

            return $summary.append(summaryText);
        }
    },
    2: {
        renderOption: function () {
            return '<span>Ściana Questów: liczba kolumn </span>'
                + '<input type="text" name="widthInput" />'
                + '<span> x liczba rzędów </span>'
                + '<input type="text" name="heightInput" />'
                + '<input type="button" name="generateButton" value="Generuj" />';
        },
        generateWall: function (rows, columns) {
            $('#table-wrapper').append(generateQuestTable(rows, columns));
            $('#summary').remove();
            $('#calc-render').append(this.generateWallSummary(columns, rows));
        },
        generateWallSummary: function (width, height) {
            var $summary = $('<div>').attr('id', 'summary');
            var summaryText = '<span>Podsumowanie:' 
                + '<br/>Liczba wykorzystanych Questów: ' + width * height
                + '<br/>Szerokość ściany: ' + width * questConstants.QUEST_WIDTH + 'cm' 
                + '<br/>Wysokość ściany: ' + height * questConstants.QUEST_HEIGHT + 'cm'
                + '</span>';

            return $summary.append(summaryText);
        }
    }
}

$(document).ready(function () {
    questCalculator.initialize();
});
