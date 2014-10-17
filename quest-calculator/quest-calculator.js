questCalculator = {
    initialize: function () {
        $('input[name="calc-option"]').first().prop('checked', true);
        //$('#calc-option-label-1').text('Dopasowanie Questów do ściany.');
        //$('#calc-option-label-2').text('Zbudowanie ściany z Questów.');
        this.initializeOptions();
    },
    initializeOptions: function () {
        questOptions.setOption($('input[name="calc-option"][checked]').val());
        this.renderInputWrapper();
        $('input[name="calc-option"]').change(function (data) {
            var $target = $(data.target);
            questOptions.setOption($target.val());
            questCalculator.renderInputWrapper();
            questCalculator.initializeButtons();
        });

        this.initializeButtons();
    },
    initializeButtons: function () {
        $('input[type="button"][name="generateButton"]').click(function () {
            $('#table-wrapper').empty();
            $('#summary').empty();
            questCalculator.generateWall(); 
            //alert($('#table-wrapper table').height());
        });
    },
    renderInputWrapper: function () {
        var $inputDiv = $('<div>').attr('id', 'input-wrapper');
        $('#calc-render').empty()
            .append('<br/>')
            .append($inputDiv);
        $('#input-wrapper').append(questOptions.current.renderOption());        

        var $tableWrapper = $('<div>').attr('id', 'table-wrapper');
        $('#calc-render').append($tableWrapper);
    },
    generateWall: function () {
        var width = parseInt($('input[name="widthInput"]').val());
        var height = parseInt($('input[name="heightInput"]').val());

        //10000 value input cap.
        if (!this._areInputsValid(width, height)) {
            return;
        }

        var dimensions = questOptions.current.generateWall(height, width);

        this.adjustWallDimensions(dimensions);
        
        //wait for all images to load
        $(window).load(function () { alert(); });
        var $calcChoiceDiv = $('#calc-choice');
        var targetContentHeight = '750px';
        if (parseInt($calcChoiceDiv.css('height')) > 700) {
            targetContentHeight = parseInt($calcChoiceDiv.css('height')) + 100 + 'px'; 
        }

        //stretching window to fit quest-calculator
        $('#imPage').css('height', targetContentHeight);
    },
    adjustWallDimensions: function (dimensions) {
        var width = dimensions.width;
        var height = dimensions.height;
        var totalWidth = width * questConstants.QUEST_IMG_WIDTH;
        var newWidth = questConstants.QUEST_IMG_WIDTH;

        if (totalWidth > questConstants.MAX_WALL_WIDTH) {
            newWidth = questConstants.MAX_WALL_WIDTH / width;
        }

        var wallHeight = this.calculateQuestWallHeight(height);
        var maxWallHeight = questConstants.MAX_WALL_HEIGHT; 
        if (wallHeight > maxWallHeight) {
            var scalingFactor = maxWallHeight / wallHeight;
            var localWidth = questConstants.QUEST_IMG_WIDTH * scalingFactor;

            if (localWidth < newWidth) {
                newWidth = localWidth;
            }
        }

        $('#table-wrapper td').attr('width', newWidth + 'px');
    },
    calculateQuestWallHeight: function (height) {
        var totalHeight = questConstants.QUEST_BORDER_IMG_HEIGHT_TOP +
            questConstants.QUEST_BORDER_IMG_HEIGHT_BOTTOM;
        if (height == 1) {
            return totalHeight + questConstants.QUEST_BASE_IMG_HEIGHT;
        }

        totalHeight = totalHeight
            + (height * questConstants.QUEST_BASE_IMG_HEIGHT)
            + ((height - 1) * questConstants.QUEST_ASSEMBLY_IMG_HEIGHT);

        return totalHeight;
    },
    _areInputsValid: function (val1, val2) {
        var x = parseInt(val1);
        var y = parseInt(val2);

        if (x > 10000 || y > 10000) {
            alert('Maksymalna wartość dla pola to 10000');

            return false;
        }

        return true;
    }
}

$(document).ready(function () {
    questImages.preloadImages();
    questCalculator.initialize();
});
