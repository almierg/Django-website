(function ($) {
    $(document).ready(function () {
        $('#toggle-switcher').click(function () {
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $('#style-switcher').animate({ 'right': '-175px' });
            } else {
                $(this).addClass('opened');
                $('#style-switcher').animate({ 'right': '-15px' });
            }
        });
        $('#bluetheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo.png');
        });
        $('#greentheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-green.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-green.png');
        });
        $('#redtheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-red.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-red.png');
        });
        $('#gardentheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-garden.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-garden.png');
        });
        $('#aquatheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-aqua.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-aqua.png');
        });
        $('#lilactheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-lilac.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-lilac.png');
        });
        $('#ambertheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-amber.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-amber.png');
        });
        $('#browntheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-brown.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-brown.png');
        });
        $('#cyantheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-cyan.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-cyan.png');
        });
        $('#dorangetheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-deep-orange.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-deep-orange.png');
        });
        $('#dpurpletheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-deep-purple.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-deep-purple.png');
        });
        $('#indigotheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-indigo.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-indigo.png');
        });
        $('#limetheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-lime.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-lime.png');
        });
        $('#pinktheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-pink.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-pink.png');
        });
        $('#purpletheme').click(function (e) {
            e.preventDefault();
            $('#theme').attr('href', 'assets/css/main-purple.css');
            $('.navbar-brand img').attr('src', 'assets/img/logo-purple.png');
        });
    });
})(jQuery);
