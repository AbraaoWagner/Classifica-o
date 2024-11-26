class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes maciais",
            ninja: "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}!`)
    }
}

let newHero = new Hero("Karenyou", 45, "mago")
console.log(newHero)

newHero.atacar()