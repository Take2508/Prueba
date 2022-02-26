//GUARDAMOS LA INSCRIPCION
$("#enviar").off("click");
$("#enviar").on("click", function(e) {
    $('enviar').attr("disabled", true);
    var nombre = $("#nombres").val();
    var costo = $("#apellidos").val();
    var precio = $("#codigo").val();
   
   
    parametros = {
        'nombres': nombre,
        'apellidos': costo,
        'codigo': precio       
    };
    $.ajax({
        type: "POST",
        url: "Recibe_Alumnos.php",
        data: parametros,
        beforeSend: function(objeto) {
            $("#Msg").html('Cargando...');
        },
        success: function(datos) {
            $("#Msg").html(datos);
            $('#enviar').attr("disabled", false);
            $('#nombres').val(''),
            $('#apellidos').val(''),
            $('#codigo').val('')
        }
    });
    event.preventDefault();
});
