const mainController = {
    index: (request, response) => {
        response.render('index');
    },
    show: (request, response) => {
        response.render('detalheMenu');
    }
}

module.exports = mainController;