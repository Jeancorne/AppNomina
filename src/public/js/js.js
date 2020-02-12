$(document).ready(() => {

    $('#form_ingreso').on('submit', (e) => {
        e.preventDefault();
        var usuario = $('#txtusuario').val();
        var password = $('#txtcontra').val();
        $.ajax({
            url: '/loggin',
            type: 'post',
            data: { usuario: usuario, password: password },
            success: (data) => {
                if (data.ok) {
                    var fetch = new Date();
                    swal("Conectado!", "Correcto, usuario logueado el " +
                        fetch.getFullYear() + "/" +
                        (fetch.getMonth() + 1) + "/" +
                        fetch.getDate() + " a las " +
                        fetch.getHours() + ":" +
                        fetch.getMinutes() + "", "success")
                    setTimeout(function () {
                        var url = "/InicioUsuario/" + usuario;
                        $(location).attr('href', url);
                    }, 2000);
                } else {
                    var text = data.error;
                    if (text.length > 0) {
                        swal("Error!", "" + text + "", "error");
                    }
                }

            }
        })
    })
})