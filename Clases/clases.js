"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.metodoStatico = function () {
        return 10;
    };
    return Persona;
}());
var persona1 = new Persona("Manuel");
console.log(persona1.getNombre());
console.log(Persona.metodoStatico());
