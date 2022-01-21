(function() {
    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
    Galleria.run('.slideshow-list', {
        autoplay: 2000,
        dataSelector: '.slideshow-list-item',
        dataConfig: function(el) {
            return {
                image: $(el).data('img')
            }
        },
        extend: function(options) {
            var gallery = this;
            $('.slideshow-btn').on('click', function() {
                var btnAction = $(this).text();
                if (btnAction == 'Pause') {
                    gallery.pause();
                    $(this).text('Play');
                } else {
                    gallery.play();
                    $(this).text('Pause');
                }
            });
        }
    })
}());