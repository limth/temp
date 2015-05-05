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
        'img/quest-img-compressed/quest_base_2.png',
        'img/quest-img/q4_assembly_down.png',
        'img/quest-img/q4_assembly_up.png',
        'img/quest-img/q4_base.png',
        'img/quest-img/q4_up.png',
        'img/quest-img/q4_down.png',
        'images/q42.png',
        'images/q4.png',
        'images/q22.png',
        'images/q2.png',
        'img/quest-img/menuq2.png',
        'img/quest-img/menuq4.png'],
    Q2: {
        setHqImageSet: function () {
            questImages.topImage = '<img src="img/quest-img/quest_up_2.png" alt="quest-top-img" />';
            questImages.bottomImage = '<img src="img/quest-img/quest_down_2.png" alt="quest-bottom-img" />';
            questImages.assemblyImage = '<img src="img/quest-img/quest_down_assembly_2.png" alt="quest-assembly-img" />';
            questImages.baseImage = '<img src="img/quest-img/quest_base_2.png" alt="quest-base-img" />';
        },
        setCompressedImageSet: function () {
            questImages.topImage = '<img src="img/quest-img-compressed/quest_up_2.png" alt="quest-top-img" />';
            questImages.bottomImage = '<img src="img/quest-img-compressed/quest_down_2.png" alt="quest-bottom-img" />';
            questImages.assemblyImage = '<img src="img/quest-img-compressed/quest_down_assembly_2.png" alt="quest-assembly-img" />';
            questImages.baseImage = '<img src="img/quest-img-compressed/quest_base_2.png" alt="quest-base-img" />';
        },
    },
    Q4: {
        setHqImageSet: function () {
            questImages.topImage = '<img src="img/quest-img/q4_up.png" alt="quest-top-img" />';
            questImages.bottomImage = '<img src="img/quest-img/q4_down.png" alt="quest-bottom-img" />';
            questImages.assemblyImage = '<img src="img/quest-img/q4_assembly_down.png" alt="quest-assembly-img" />';
            questImages.baseImage = '<img src="img/quest-img/q4_base.png" alt="quest-base-img" />';
        },
        setCompressedImageSet: function () {
            questImages.topImage = '<img src="img/quest-img/q4_up.png" alt="quest-top-img" />';
            questImages.bottomImage = '<img src="img/quest-img/q4_down.png" alt="quest-bottom-img" />';
            questImages.assemblyImage = '<img src="img/quest-img/q4_assembly_down.png" alt="quest-assembly-img" />';
            questImages.baseImage = '<img src="img/quest-img/q4_base.png" alt="quest-base-img" />';
        },
    },
    preloadImages: function () {
        $(questImages.imageSources).each(function () {
            $('<img />').attr('src', this).appendTo('body').css('display','none');
        });
    }
}
