class Cliente{
    #nome
    #email
    constructor(nome, telefoneCelular, email, endereco){
        this.#nome = nome;
        this.telefoneCelular = telefoneCelular;
        this.#email = email;
        this.endereco = endereco
    }
    get PegarNomeCliente(){
        return this.#nome
    }
    set NovoNomeCliente(novoNomeCliente){
        this.#nome = novoNomeCliente
    }
    get PegarNomeClienteMaiusculo(){
        return this.#nome.toUpperCase()
    }
    get PegarNomeClienteMinusculo(){
        return this.#nome.toLowerCase()
    }

    get PegarEmailCliente(){
        return this.#email
    }
    set NovoEmailCliente(novoEmail){
        this.#email = novoEmail
    }
    get PegarEmailClienteMaiuscula(){
        return this.#email.toUpperCase()
    }
    get PegarEmailClienteMinuscula(){
        return this.#email.toLowerCase()
    }



    get descricao(){
        return `
        -----------------------------
        Informações do Cliente: 
        ${this.PegarNomeCliente}
        -----------------------------
        -----------------------------
        Telefone:
        DDD: ${this.telefoneCelular.PegarDDDCliente}
        Telefone: ${this.telefoneCelular.PegarNumeroCliente}
        -----------------------------
        Endereço:
        Rua: ${this.endereco.PegarRuaCliente}
        Número: ${this.endereco.PegarNumeroEnderecoCliente}
        Cidade: ${this.endereco.PegarCidadeCliente}
        Estado: ${this.endereco.PegarEstadoCliente}
        -----------------------------`
    }
}

class TelefoneCelular{
    #codigoEstado
    #numeroTelefone
    constructor(ddd, numero){
        this.#codigoEstado = ddd;
        this.#numeroTelefone = numero
    }
    get PegarDDDCliente(){
        return this.#codigoEstado
    }
    set NovoDDDCliente(dddNovo){
        this.#codigoEstado = dddNovo
    }
    get PegarDDDClienteMaiusculo(){
        return this.#codigoEstado.toUpperCase()
    }
    get PegarDDDClienteMinusculo(){
        return this.#codigoEstado.toLowerCase()
    }

    get PegarNumeroCliente(){
        return this.#numeroTelefone
    }
    set NovoNumeroCliente(numeroNovo){
        this.#numeroTelefone = numeroNovo
    }
    get PegarNumeroClienteMaiusculo(){
        return this.#numeroTelefone.toUpperCase()
    }
    get PegarNumeroClienteMinusculo(){
        return this.#numeroTelefone.toLowerCase()
    } 
}

class Endereco{
    #estado
    #cidade
    #rua
    #numero
    constructor(estado, cidade, rua, numero){
        this.#estado = estado;
        this.#cidade = cidade;
        this.#rua = rua;
        this.#numero = numero
    }

    get PegarEstadoCliente(){
        return this.#estado
    }
    set NovoEstadoCliente(novoEstado){
        this.#estado = novoEstado
    }
    get PegarEstadoClienteMaiusculo(){
        return this.#estado.toUpperCase()
    }
    get PegarEstadoClienteMinusculo(){
        return this.#estado.toLowerCase()
    }

    get PegarCidadeCliente(){
        return this.#cidade
    }
    set NovaCidadeCliente(novaCidade){
        this.#cidade = novaCidade
    }
    get PegarCidadeClienteMaiscula(){
        return this.#cidade.toUpperCase()
    }
    get PegarCidadeClienteMinuscula(){
        return this.#cidade.toLowerCase()
    }

    get PegarRuaCliente(){
        return this.#rua
    }
    set NovaRuaCliente(novaRua){
        this.#rua = novaRua
    }
    get PegarRuaClienteMaiuscula(){
        return this.#rua.toUpperCase()
    }
    get PegarRuaClienteMinuscula(){
        return this.#rua.toLowerCase()
    }

    get PegarNumeroEnderecoCliente(){
        return this.#numero
    }
    set NovoNumeroEnderecoCliente(novoNumeroEndereco){
        this.#numero = novoNumeroEndereco
    }
    get PegarNumeroEnderecoClienteMaiuscula(){
        return this.#numero.toUpperCase()
    }
    get PegarNumeroEnderecoClienteMinuscula(){
        return this.#numero.toLowerCase()
    }
}
// PARTE 1
let telefone = new TelefoneCelular('11', '999999999')
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)

console.log(cliente.descricao)

// PARTE 2
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

function ordenarClientes(lista) {
    return lista.toSorted((a, b) => a.PegarNomeCliente.localeCompare(b.PegarNomeCliente));
}

const listaDeClientes = [
    new Cliente(
        'Rodolfo Carvalho', 
        new TelefoneCelular('11', '988887777'),
        'carvalho@email.com',
        new Endereco('PR', 'Curitiba', 'Rua Augusta', '123')),
    new Cliente(
        'Arthur Morgan',
        new TelefoneCelular('12', '977776666'),
        'arthurMorgan@email.com',
        new Endereco('SP', 'SJC', 'Av. Adhemar', '542')),
    new Cliente(
        'Vinícius Silva Lopes',
        new TelefoneCelular('21', '966665555'),
        'vini@email.com',
        new Endereco('MS', 'Três Lagoas', 'Av. Capitão', '412')),
    new Cliente(
        'Hilbert Hugo',
        new TelefoneCelular('11', '955554444'),
        'HilHugo@email.com',
        new Endereco('SP', 'Campinas', 'Rua Flores', '941'))
];

const ordenados = ordenarClientes(listaDeClientes);

console.log('----------------------------------------\n')
console.log('Ordem Alfabética de Clientes');
for (let i = 0; i < ordenados.length; i++) {
    console.log(ordenados[i].descricao);
}