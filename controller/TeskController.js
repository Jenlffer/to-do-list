//fazendo uma rota

const getAll = (req, res) => {
    return res.render("index");
} //criando variavel que recebe uma arrowfuction (função)

module.exports = {
    getAll,
}//controller metodo da rota