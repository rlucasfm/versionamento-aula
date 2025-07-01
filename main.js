// Aqui o contador de visitantes
const visitors = 10;

const btn_pedido = document.getElementById("btn-pedido");

btn_pedido.addEventListener("click", () => {
    alert("Pedido realizado com sucesso!");
    console.log(`Número de visitantes: ${visitors}`);
});