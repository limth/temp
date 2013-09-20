questCalculator = {
    selectedOption: 0,
    questWidth: 80,
    questHeight: 124,

    initialize: function () {
        this.selectedOption = $('input[name="calc-option"][checked]').val();
        this.generateInputDiv(this.selectedOption);
        $('input[name="calc-option"]').change(function (data) {
            $target = $(data.target);
            this.selectedOption = $target.val();
            questCalculator.generateInputDiv(this.selectedOption);
        });
    },
    generateInputDiv: function (option) {
        $inputDiv = $('<div>').attr('id', 'inputWrapper');
        $('#calc-render').html('')
            .append('<br/>')
            .append($inputDiv);
        if (option == '1') {
            $('#inputWrapper').append(this.generateFirstOption);        
        } else if (option == '2') {
            $('#inputWrapper').append(this.generateSecondOption);
        }
    },
    generateFirstOption: function () {
        return '<span>Rozmiar ściany: szerokość </span>'
            + '<input type="text" name="widthInput" />'
            + '<span>[cm] x wysokość </span>'
            + '<input type="text" name="heightInput" />'
            + '<span>[cm].</span>';
    },
    generateSecondOption: function () {
        return '<span>Ściana Questów: liczba rzędów </span>'
            + '<input type="text" name="widthInput" />'
            + '<span> x liczba kolumn </span>'
            + '<input type="text" name="heightInput" />.'
    },
}

$(document).ready(function () {
    questCalculator.initialize();
});
