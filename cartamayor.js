'use strict'
function Carta(apodo, vidas, valor) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valor = valor;
    this.reducirVidas = function() {
      this.vidas;
    };
    this.mostrarApodoYVidas = function() {
      alert(`El apodo es ${this.apodo} y las vidas restantes son ${this.vidas-1}.`);
    };
  }

  
  let Cartam = new Carta('calincho', 3, 4 );

  Cartam.mostrarApodoYVidas();





