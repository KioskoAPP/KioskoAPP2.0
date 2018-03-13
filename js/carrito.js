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

    /** Funcióna añadir **/
    obj.add = function (idProducto, name) {
        var ln = new LineaPedido(idProducto, name);
        if (obj.lineas.length == 0) {
            ln.id = 1;
        } else {
            var old = obj.lineas.find(function (item) {
                return item.idProducto == idProducto;
            });

            ln.id = obj.lineas[obj.lineas.length - 1].id + 1;
        }
        obj.lineas.push(ln);
        carritoAlmacenado();
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


function CarritoManager(id) {
    var obj = this;
    var listaProductos;

    function productosEnCarrito() {
        var tmpl = $('#tmplListadoCarrito').html();
        var rslt = Mustache.render(tmpl, { filas: carrito.lineas });
        $('#abm_carrito').html(rslt);
    }    

    obj.Refresca = function () {
        productosEnCarrito();
    };

    obj.mostrarProductos = function () {
        if (listaProductos) {
            revistasEnCarrito(listaProductos);
        } else {
            $.ajax({
                url: 'http://localhost:43210/usuarios/' + id,
                dataType: 'json',
            }).then(
                function (resp) {
                    listaProductos = resp.cart;
                    console.log(listaProductos);
                    revistasEnCarrito(listaProductos);
                },
                function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR, textStatus, errorThrown);
                }
            );
        }
    };
}
