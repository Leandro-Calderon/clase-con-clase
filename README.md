# Pisos y deptos

## Para este desafío, te proponemos que pases este test. Para eso, tenés que crear tres clases que se relacionen entre sí de esta forma

**class Departamento**
Debe tener:
El constructor debe recibir el nombre de ese departamento con formato de texto. Por ejemplo: "mi depto".
Debe tener un método getName() que devuelva el nombre del departamento.

**class Piso**
Debe tener:
un constructor debe recibir el nombre de ese piso con formato de texto. Por ejemplo: "primer piso" y guardarlo en una propiedad nombre para poder usarla posteriormente.
un método pushDepartamento y getDepartamentos para agregar departamentos y obtener el listado completo de los departamentos de ese piso (ambos usan una propiedad interna departamentos para guardar y leer).

**class Edificio**
Debe tener:
Un constructor que reciba un array de Piso y lo guarde en una propiedad.
Un método addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento) que reciba un Departamento y lo ubique en el piso con el nombre indicado, si no existe un piso con ese nombre debe mostrar un error.
Un método getDepartamentosByPiso(nombreDePiso:string):Departamento[] que devuelva todos los departamentos de ese piso. Este método debe devolver un array de Departamento.

Importante: recordá que las palabras escritas con la inicial en mayúsculas indican que se trata de una clase Edificio, Piso, Departamento
