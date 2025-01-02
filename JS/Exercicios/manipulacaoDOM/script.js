const { jsPDF } = window.jspdf;

document.getElementById('gerarPdf').addEventListener('click', function () {
    const doc = new jsPDF();
    
    const marginLeft = 15;
    const marginTop = 15;
    const lineHeight = 7;
    let y = marginTop;

    // Cores
    const corTitulo = '#2c3e50'; // Azul escuro
    const corSubtitulo = '#3498db'; // Azul claro
    const corTexto = '#34495e'; // Cinza escuro

    // Função para adicionar texto ao PDF
    const adicionarTexto = (label, value, y, boldLabel = false, cor = corTexto) => {
        if (value) {
            doc.setFont("helvetica", boldLabel ? "bold" : "normal");
            doc.setTextColor(cor);
            doc.text(`${label}:`, marginLeft, y);
            doc.setFont("helvetica", "normal");
            doc.text(value, marginLeft + 50, y);
            return y + lineHeight + 5;
        }
        return y;
    };

    // Função para adicionar uma seção ao PDF
    const adicionarSecao = (titulo, y, cor = corTitulo) => {
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(cor);
        doc.text(titulo, marginLeft, y);
        doc.setDrawColor(200);
        doc.line(marginLeft, y + 2, 200, y + 2); // Linha divisória
        return y + lineHeight + 10;
    };

    // Cabeçalho do PDF
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(corTitulo);
    doc.text("Currículo Profissional", marginLeft, y);
    y += lineHeight + 15;

    // Dados pessoais
    y = adicionarSecao("Dados Pessoais", y, corSubtitulo);
    y = adicionarTexto("Nome Completo", document.getElementById('nomeCompleto').value, y, true);
    y = adicionarTexto("E-mail", document.getElementById('email').value, y);
    y = adicionarTexto("Telefone", document.getElementById('telefone').value, y);
    y = adicionarTexto("Data de Nascimento", document.getElementById('dataNascimento').value, y);
    y = adicionarTexto("Gênero", document.getElementById('genero').value, y);

    // Endereço
    y = adicionarSecao("Endereço", y, corSubtitulo);
    y = adicionarTexto("CEP", document.getElementById('cep').value, y);
    y = adicionarTexto("Endereço", document.getElementById('endereco').value, y);
    y = adicionarTexto("Cidade", document.getElementById('cidade').value, y);
    y = adicionarTexto("Estado", document.getElementById('estado').value, y);
    y = adicionarTexto("País", document.getElementById('pais').value, y);

    // Formação acadêmica
    y = adicionarSecao("Formação Acadêmica", y, corSubtitulo);
    y = adicionarTexto("Instituição de Ensino", document.getElementById('instituicao').value, y);
    y = adicionarTexto("Curso", document.getElementById('curso').value, y);
    y = adicionarTexto("Ano de Conclusão", document.getElementById('anoConclusao').value, y);

    // Experiência profissional
    y = adicionarSecao("Experiência Profissional", y, corSubtitulo);
    y = adicionarTexto("Empresa", document.getElementById('empresa').value, y);
    y = adicionarTexto("Cargo", document.getElementById('cargo').value, y);
    y = adicionarTexto("Área de Atuação", document.getElementById('areaAtuacao').value, y);
    y = adicionarTexto("Período de Atuação", document.getElementById('periodo').value, y);
    y = adicionarTexto("Responsabilidades", document.getElementById('responsabilidades').value, y);

    // Habilidades e Idiomas
    y = adicionarSecao("Habilidades & Idiomas", y, corSubtitulo);
    y = adicionarTexto("Habilidades Técnicas", document.getElementById('habilidades').value, y);
    y = adicionarTexto("Idiomas", document.getElementById('idiomas').value, y);

    // Certificações e Portfólio
    y = adicionarSecao("Certificações & Portfólio", y, corSubtitulo);
    y = adicionarTexto("Certificações", document.getElementById('certificacoes').value, y);
    y = adicionarTexto("Portfólio", document.getElementById('portfolio').value, y);

    // Redes Sociais e Objetivos
    y = adicionarSecao("Redes Sociais & Objetivos", y, corSubtitulo);
    y = adicionarTexto("Redes Sociais", document.getElementById('redesSociais').value, y);
    y = adicionarTexto("Objetivo Profissional", document.getElementById('objetivo').value, y);
    y = adicionarTexto("Área de Interesse", document.getElementById('areaInteresse').value, y);
    y = adicionarTexto("Disponibilidade", document.getElementById('disponibilidade').value, y);
    y = adicionarTexto("Tipo de Trabalho", document.getElementById('tipoTrabalho').value, y);

    // Referências
    y = adicionarSecao("Referências", y, corSubtitulo);
    y = adicionarTexto("Referência (Nome e Cargo)", document.getElementById('referenciaNome').value, y);
    y = adicionarTexto("Referência (Empresa)", document.getElementById('referenciaEmpresa').value, y);
    y = adicionarTexto("Referência (Contato)", document.getElementById('referenciaContato').value, y);

    // Alergias e Medicamentos
    y = adicionarSecao("Alergias & Medicamentos", y, corSubtitulo);
    y = adicionarTexto("Alergias", document.getElementById('alergias').value, y);
    y = adicionarTexto("Medicamentos", document.getElementById('medicamentos').value, y);

    // Rodapé
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(corTexto);
    doc.text("Gerado em: " + new Date().toLocaleDateString(), marginLeft, y + 10);

    // Salvar o PDF
    doc.save("curriculo_profissional.pdf");
});