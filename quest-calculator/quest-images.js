questImages = {
    topImage: null,
    bottomImage: null,
    assemblyImage: null,
    baseImage: null,
    imageSources: [
        'img/quest-img/quest_up_2.png',
        'img/quest-img/quest_down_2.png',
        'img/quest-img/quest_down_assembly_2.png',
        'img/quest-img/quest_base_2.png',
        'img/quest-img-compressed/quest_up_2.png',
        'img/quest-img-compressed/quest_down_2.png',
        'img/quest-img-compressed/quest_down_assembly_2.png',
        'img/quest-img-compressed/quest_base_2.png' ],
    setHqImageSet: function () {
        this.topImage = '<img src="img/quest-img/quest_up_2.png" alt="quest-top-img" />';
        this.bottomImage = '<img src="img/quest-img/quest_down_2.png" alt="quest-bottom-img" />';
        this.assemblyImage = '<img src="img/quest-img/quest_down_assembly_2.png" alt="quest-assembly-img" />';
        this.baseImage = '<img src="img/quest-img/quest_base_2.png" alt="quest-base-img" />';
    },
    setCompressedImageSet: function () {
        this.topImage = '<img src="img/quest-img-compressed/quest_up_2.png" alt="quest-top-img" />';
        this.bottomImage = '<img src="img/quest-img-compressed/quest_down_2.png" alt="quest-bottom-img" />';
        this.assemblyImage = '<img src="img/quest-img-compressed/quest_down_assembly_2.png" alt="quest-assembly-img" />';
        this.baseImage = '<img src="img/quest-img-compressed/quest_base_2.png" alt="quest-base-img" />';
    },
    preloadImages: function () {
        $(questImages.imageSources).each(function () {
            $('<img />').attr('src', this).appendTo('body').css('display','none');
        });
    }
}
