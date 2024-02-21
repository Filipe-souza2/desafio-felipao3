class heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        if(this.tipo === "mago") {
            console.log("O " + this.tipo + " atacou usando magia")
        } else if (this.tipo === "guereiro") {
            console.log("O " + this.tipo + " atacou usando espada")
        }else if (this.tipo === "monge") {
            console.log("O " + this.tipo + " atacou usando artes marciais")
        }else if (this.tipo === "ninja") {
            console.log("O " + this.tipo + " atacou usando shuriken")
        }
    }

}

let meuNinja = new heroi("NinjaFilipe", 24, "ninja")
let meuMago = new heroi("MagoFilipe", 24, "mago")
let meuGuereiro = new heroi("GuerreiroFilipe", 24, "guereiro")
let meuMonge = new heroi("MongeFilipe", 24, "monge")

meuNinja.atacar()
meuMago.atacar()
meuGuereiro.atacar()
meuMonge.atacar()