function LineaPedido(idProducto, name) {
    this.id = 0;
    this.idProducto = idProducto;
    this.name = name;
}

/** Elementos en el carrito **/
var carrito = new (function () {
    var obj = this;
    obj.lineas = [];
    if (localStorage && localStorage['CarritoCompra'])
        obj.lineas = JSON.parse(localStorage['CarritoCompra']);

    function carritoAlmacenado() {
        if (localStorage)
            localStorage['CarritoCompra'] = JSON.stringify(obj.lineas);
    }

    /** Función para eliminar UNA LÍNEA **/
    obj.removeLine = function (id) {
        var ind = obj.lineas.findIndex(function (item) {
            return item.id == id;
        });
        if (ind !== -1) {
            obj.lineas.splice(ind, 1);
            carritoAlmacenado();
        } else {
            console.warn('Elemento no encontrado');
        }
    };

    /** Función eliminar TODO el contenido del carrito**/
    obj.removeAll = function () {
        obj.lineas = [];
        if (localStorage) {
            localStorage.removeItem('CarritoCompra');
        }
    };
})();


function productosEnCarrito(id) {
    var tmpl = $('#tmplListadoCarrito').html();
    var rslt = Mustache.render(tmpl, { filas: carrito.lineas });
    $('#abm_carrito').html(rslt);

    var obj = this;
    var listaProductos;
    obj.mostrarProductos = function () {
        if (listaProductos) {
            productosEnCarrito(listaProductos);
        } else
            $.ajax({
                url: 'http://localhost:43210/usuarios/' + id,
                dataType: 'json',
            }).then(
                function (resp) {
                    listaProductos = resp.cart;
                    console.log(listaProductos);
                    productosEnCarrito(listaProductos);
                },
                function (jqXHR, textStatus, errorThrown) {
                    //reject(jqXHR, textStatus, errorThrown);
                }
            );
    };
}
