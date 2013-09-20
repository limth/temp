questCalculator = {
    selectedOption: 0,
    questWidth: 80,
    questHeight: 124,

    initialize: function () {
        this.initializeOptions();
        this.initializeButtons();
    },
    initializeOptions: function () {
        this.selectedOption = $('input[name="calc-option"][checked]').val();
        this.renderInputWrapper(this.selectedOption);
        $('input[name="calc-option"]').change(function (data) {
            var $target = $(data.target);
            this.selectedOption = $target.val();
            questCalculator.renderInputWrapper(this.selectedOption);
        });
    },
    initializeButtons: function () {
        $('input[type="button"][name="generateButton"]').click(function () {
           this.generateWall(); 
        });
    },
    renderInputWrapper: function (option) {
        var $inputDiv = $('<div>').attr('id', 'inputWrapper');
        $('#calc-render').html('')
            .append('<br/>')
            .append($inputDiv);
        if (option == '1') {
            $('#inputWrapper').append(this.renderFirstOption);        
        } else if (option == '2') {
            $('#inputWrapper').append(this.renderSecondOption);
        }
    },
    renderFirstOption: function () {
        return '<span>Rozmiar ściany: szerokość </span>'
            + '<input type="text" name="widthInput" />'
            + '<span>[cm] x wysokość </span>'
            + '<input type="text" name="heightInput" />'
            + '<span>[cm].</span>'
            + '<input type="button" name="generateButton" value="Generuj">';
    },
    renderSecondOption: function () {
        return '<span>Ściana Questów: liczba rzędów </span>'
            + '<input type="text" name="widthInput" />'
            + '<span> x liczba kolumn </span>'
            + '<input type="text" name="heightInput" />.'
            + '<input type="button" name="generateButton" value="Generuj">';
    },
    generateWall: function () {
        var width = parseInt($('input[name="widthInput"').val());
        var height = parseInt($('input[name="heightInput"').val());
    },
    generateQuestWall: function (rows, columns) {
        $('#calc-render').append(generateQuestTable(rows, columns));
        $('#calc-render').append(questCalculator.generateQuestWallSummary());
    },
    generateQuestRectangeFitToWall: function (wallWidth, wallHeight) {
    },
    generateQuestWallSummary: function () {
    },
    generateQuestRectangleFitToWallSummary: function () {
    }
}

$(document).ready(function () {
    questCalculator.initialize();
});
