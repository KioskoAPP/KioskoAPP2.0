function LineaPedido(idProducto, title, owner) {
    this.id = 0;
    this.idProducto = idProducto;
    this.title = title;
    this.owner = owner;
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


    /***** Función para añadir productos al carrito *******/
    obj.add = function (title, owner) {
        var ln = new LineaPedido(title, owner);
        if (obj.lineas.length == 0) {
            ln.id = 1;
        } else {
            var old = obj.lineas.find(function (item) { return item.idProducto == idProducto; });
            ln.id = obj.lineas[obj.lineas.length - 1].id + 1;
        }
        obj.lineas.push(ln);
        guardaCarrito();
    };


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

    var obj = this;
    var listaProductos;

    obj.Refresca = function () {
        var tmpl = $('#tmplListadoCarrito').html();
        var rslt = Mustache.render(tmpl, { filas: carrito.lineas });
        $('#abm_carrito').html(rslt);
        //$('#abm_carrito').append(rslt);
    };
    function formateaProducto(prod) {
        return "<p>"+prod+"</p>";
    }
    obj.pintaProducto = function () {
        $('#abm_productos').empty();
        for (i = 0; i < listaProductos.length; i++) {
            $('#abm_productos').append(formateaProducto(listaProductos[i]));
        }

    };
    obj.mostrarProductos = function () {
        if (listaProductos) {
            obj.pintaProducto();
        } else
            $.ajax({
                url: 'http://localhost:43210/usuarios/' + id,
                dataType: 'json',
            }).then(
                function (resp) {
                    listaProductos = resp.cart;
                    obj.pintaProducto();
                },
                function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR, textStatus, errorThrown);
                }
            );
    };

}
