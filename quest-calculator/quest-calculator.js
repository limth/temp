questCalculator = {
    initialize: function () {
        $('input[name="calc-option"]').first().prop('checked', true);
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

        var dimensions = questOptions.current.generateWall(height, width);

        this.adjustWallDimensions(dimensions);
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
        if (wallHeight > questConstants.MAX_WALL_HEIGHT) {
            var scalingFactor = questConstants.MAX_WALL_HEIGHT / wallHeight;
            var localWidth = questConstants.QUEST_IMG_WIDTH * scalingFactor;

            if (localWidth < newWidth) {
                newWidth = localWidth;
            }
        }

        $('#table-wrapper img').attr('width', newWidth + 'px');
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
    }
}

$(document).ready(function () {
    questCalculator.initialize();
});
