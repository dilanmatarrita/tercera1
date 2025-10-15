console.log('hamburger icon cargado');

(function() {
    const MAIN_OBJ = {
        init: function() {
            this.eventHandler();
        },
        eventHandler: function() {
            document.querySelector('.hamburger-icon').addEventListener('click',function() {
            document.querySelector('.menu-container').classList.toggle('menu-open');
        });
      }
    };

    MAIN_OBJ.init();
})();