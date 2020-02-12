

async function login(req, res) {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;
        var error = [];
        var ok = [];
        if (!usuario && password) {
            error.push("El campo usuario es obligatorio");
        }
        if (!password && usuario) {
            error.push("El campo contraseña es obligatorio");
        }
        if (!password && !usuario) {
            error.push("Por favor llene los dos campos");
        }
        if (error.length > 0) {
            res.json({ error });
        } else {
            res.json({ ok });
        }
    } catch (error) {
        res.json(error);
    }

}
async function InicioUsuario(req, res) {
    try {
        var usuario = req.params.usuario;
        var fech = new Date();
        var columnas = (30 - fech.getDate() + 2) + 1;
        var myData = [];
        var sumatoriahoras = 0;
        var salario = numeroAleatorio(1000000, 2000000);
        console.log(total);
        for (let i = 1; i < columnas; i++) {
            var aleatorio = numeroAleatorio(1, 9);
            sumatoriahoras = sumatoriahoras + aleatorio;
            myData.push({
                dia: i,
                hora: aleatorio
            })
        }
        var total = (sumatoriahoras * salario);
        res.render('../views/datos.ejs', {
            layout: '../layaout/layaout_logeado', usuario, myData, sumatoriahoras, total
        });
    } catch (error) {
        res.json(error);
    }
}

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


module.exports = {
    login,
    InicioUsuario
};