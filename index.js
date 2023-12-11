// crear las clases Edificio, Piso y Departamento aquí
var Departamento = /** @class */ (function () {
    function Departamento(nombre) {
        this.nombre = nombre;
    }
    Departamento.prototype.getName = function () {
        return this.nombre;
    };
    return Departamento;
}());
var Piso = /** @class */ (function () {
    function Piso(nombre) {
        this.nombre = nombre;
    }
    Piso.prototype.pushDepartamento = function () {
        var piso = this.departamentos.push();
        return piso;
    };
    Piso.prototype.getDepartamentos = function () {
        return Piso;
    };
    return Piso;
}());
var Edificio = /** @class */ (function () {
    function Edificio(piso) {
    }
    Edificio.prototype.addDepartamentoToPiso = function (nombreDePiso, departamento) {
        return;
    };
    Edificio.prototype.getDepartamentosByPiso = function (nombreDePiso) {
        return;
    };
    return Edificio;
}());
// no modificar este test
function testClaseEdificio() {
    var unPiso = new Piso("planta baja");
    var otroPiso = new Piso("primer piso");
    var unEdificio = new Edificio([unPiso, otroPiso]);
    var deptoUno = new Departamento("depto uno");
    var deptoDos = new Departamento("depto dos");
    var deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
    var deptos = unEdificio.getDepartamentosByPiso("planta baja");
    var deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
    if (Array.isArray(deptosEmpty) &&
        deptosEmpty.length == 0 &&
        deptos.length == 3 &&
        deptos[2].getName() == "depto tres") {
        console.log("testClaseBandaApartment passed");
    }
    else {
        throw "testClaseBandaApartment not passed";
    }
}
function main() {
    testClaseEdificio();
}
main();
