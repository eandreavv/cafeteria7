function doClickAgregarElemnto(e){
    $("#tblPedido tbody").append(
        "<tr>" +
            "<td>" +
                $("txtCantidad").val() +
            "</td>" +
            "<td>" +
                $("#slcComida option[value='" + 
                    $("#slcComida").val() + "']").text() +
            "</td>" +
            "<td>" +
                $("#slcComida option[value='" + 
                    $("#slcComida").val() + "']").attr("precio") +
            "</td>" +
            "<td>" +
                "subtotal" +
            "</td>" +
            "<td>" +
                '<button type="button" class="btn btn-danger">X</button>' +
            "</td>" +
        "</tr>");
}

function inicializar(){
    //capacidades extra para el select
    $("#slcComida").select2();

    $("#btnAgregarElemento").click(doClickAgregarElemnto);
}

$(function (){
    inicializar();

});