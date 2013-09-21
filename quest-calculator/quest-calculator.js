questCalculator = {
    selectedOption: 0,
    questWidth: 80,
    questHeight: 124,

    initialize: function () {
        $('input[name="calc-option"]').first().prop('checked', true);
        this.initializeOptions();
    },
    initializeOptions: function () {
        this.selectedOption = $('input[name="calc-option"][checked]').val();
        this.renderInputWrapper();
        $('input[name="calc-option"]').change(function (data) {
            var $target = $(data.target);
            questCalculator.selectedOption = $target.val();
            questCalculator.renderInputWrapper();
            questCalculator.initializeButtons();
        });

        this.initializeButtons();
    },
    initializeButtons: function () {
        $('input[type="button"][name="generateButton"]').click(function () {
            $('#table-wrapper').empty();
            questCalculator.generateWall(); 
        });
    },
    renderInputWrapper: function () {
        var $inputDiv = $('<div>').attr('id', 'input-wrapper');
        $('#calc-render').empty()
            .append('<br/>')
            .append($inputDiv);
        if (this.selectedOption == '1') {
            $('#input-wrapper').append(this.renderFirstOption());        
        } else if (this.selectedOption == '2') {
            $('#input-wrapper').append(this.renderSecondOption());
        }

        var $tableWrapper = $('<div>').attr('id', 'table-wrapper');
        $('#calc-render').append($tableWrapper);
    },
    renderFirstOption: function () {
        return '<span>Rozmiar ściany: szerokość </span>'
            + '<input type="text" name="widthInput" />'
            + '<span>[cm] x wysokość </span>'
            + '<input type="text" name="heightInput" />'
            + '<span>[cm].</span>'
            + '<input type="button" name="generateButton" value="Generuj" />';
    },
    renderSecondOption: function () {
        return '<span>Ściana Questów: liczba rzędów </span>'
            + '<input type="text" name="widthInput" />'
            + '<span> x liczba kolumn </span>'
            + '<input type="text" name="heightInput" />.'
            + '<input type="button" name="generateButton" value="Generuj" />';
    },
    generateWall: function () {
        var width = parseInt($('input[name="widthInput"]').val());
        var height = parseInt($('input[name="heightInput"]').val());

        if (this.selectedOption == '1') {
            this.generateQuestRectangeFitToWall(width, height);
        } else if (this.selectedOption == '2') {
            this.generateQuestWall(height, width);
        }
    },
    generateQuestWall: function (rows, columns) {
        $('#table-wrapper').append(generateQuestTable(rows, columns));
        $('#table-wrapper').append(questCalculator.generateQuestWallSummary());
    },
    generateQuestRectangeFitToWall: function (wallWidth, wallHeight) {
        alert('W budowie');
    },
    generateQuestWallSummary: function () {
    },
    generateQuestRectangleFitToWallSummary: function () {
    }
}

$(document).ready(function () {
    questCalculator.initialize();
});
