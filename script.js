function simularCompra() {
 
    function obterQuantidade(nomeProduto, precoTexto) {
        let entrada = prompt(`Quantas unidades de ${nomeProduto}? ${precoTexto}`);
        
        
        if (entrada === null) return null;
        
        let qtd = Number(entrada.trim());

        
        if (!Number.isFinite(qtd) || qtd < 0 || !Number.isInteger(qtd)) {
            alert(`Por favor, digite uma quantidade inteira válida para o ${nomeProduto} (ex: 0, 1, 2...).`);
            return -1; 
        }
        
        return qtd;
    }

    let whey = obterQuantidade("Whey Protein", "R$ 99,90");
    if (whey === null || whey === -1) return;

    let creatina = obterQuantidade("Creatina", "R$ 69,90");
    if (creatina === null || creatina === -1) return;

    let preTreino = obterQuantidade("Pré-treino", "R$ 79,90");
    if (preTreino === null || preTreino === -1) return;


    if (whey === 0 && creatina === 0 && preTreino === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    
    let valorWhey = whey * 99.90;
    let valorCreatina = creatina * 69.90;
    let valorPreTreino = preTreino * 79.90;
    let total = valorWhey + valorCreatina + valorPreTreino;


    alert(
        "RESUMO DA COMPRA\n\n" +
        `Whey Protein: ${whey} unidade(s) -${valorWhey.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n` +
        `Creatina: ${creatina} unidade(s) -${valorCreatina.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n` +
        `Pré-treino: ${preTreino} unidade(s) -${valorPreTreino.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n\n` +
        `TOTAL: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
    );
}