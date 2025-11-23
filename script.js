// script.js - lógica do formulário e geração de PDF
function generatePDF() {
	const form = document.getElementById('form-locacao');
	const formData = {};
	Array.from(form.elements).forEach(el => {
		if (el.name) formData[el.name] = el.value;
	});

	const htmlContent = `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="UTF-8">
			<title>Formulário de Locação - ${formData.nomeCompleto || ''}</title>
			<style>
				body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; color: #333; }
				h1 { color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px; }
				h2 { color: #1e40af; margin-top: 30px; margin-bottom: 15px; font-size: 18px; }
				.campo { margin-bottom: 15px; }
				.label { font-weight: bold; color: #555; }
				.valor { margin-left: 10px; color: #000; }
				.secao { margin-bottom: 30px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb; }
				.rodape { margin-top: 50px; padding-top: 20px; border-top: 2px solid #ddd; text-align: center; color: #666; font-size: 12px; }
			</style>
		</head>
		<body>
			<h1>🏡 Formulário de Locação de Imóvel</h1>
			<p style="color: #666; margin-bottom: 30px;">Data de preenchimento: ${new Date().toLocaleDateString('pt-BR')}</p>
			<div class="secao">
				<h2>1️⃣ Informações Básicas</h2>
				<div class="campo"><span class="label">Nome Completo:</span><span class="valor">${formData.nomeCompleto || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Telefone:</span><span class="valor">${formData.telefone || 'Não informado'}</span></div>
				<div class="campo"><span class="label">E-mail:</span><span class="valor">${formData.email || 'Não informado'}</span></div>
			</div>
			<div class="secao">
				<h2>2️⃣ Situação Profissional e Financeira</h2>
				<div class="campo"><span class="label">Ocupação:</span><span class="valor">${formData.ocupacao || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Tipo de Vínculo:</span><span class="valor">${formData.tipoVinculo || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Tempo no Emprego Atual:</span><span class="valor">${formData.tempoEmprego || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Renda Mensal:</span><span class="valor">${formData.rendaMensal || 'Não informado'}</span></div>
			</div>
			<div class="secao">
				<h2>3️⃣ Composição Familiar</h2>
				<div class="campo"><span class="label">Número de Pessoas:</span><span class="valor">${formData.numeroPessoas || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Crianças:</span><span class="valor">${formData.temCriancas || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Idosos:</span><span class="valor">${formData.temIdosos || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Pets:</span><span class="valor">${formData.temPets || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Detalhes:</span><span class="valor">${formData.detalhesComposicao || 'Não informado'}</span></div>
			</div>
			<div class="secao">
				<h2>4️⃣ Histórico de Aluguel</h2>
				<div class="campo"><span class="label">Atualmente mora de aluguel:</span><span class="valor">${formData.moraAluguel || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Possui referências:</span><span class="valor">${formData.temReferencias || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Problemas anteriores:</span><span class="valor">${formData.problemaAnterior || 'Não informado'}</span></div>
			</div>
			<div class="secao">
				<h2>5️⃣ Motivo da Mudança</h2>
				<div class="campo"><span class="valor">${formData.motivoMudanca || 'Não informado'}</span></div>
			</div>
			<div class="secao">
				<h2>6️⃣ Garantias para o Contrato</h2>
				<div class="campo"><span class="label">Tipo de Garantia:</span><span class="valor">${formData.tipoGarantia || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Detalhes:</span><span class="valor">${formData.detalhesGarantia || 'Não informado'}</span></div>
			</div>
			<div class="secao">
				<h2>7️⃣ Tempo Desejado de Permanência</h2>
				<div class="campo"><span class="valor">${formData.tempoPermanencia || 'Não informado'}</span></div>
			</div>
			<div class="secao">
				<h2>8️⃣ Situações Específicas</h2>
				<div class="campo"><span class="label">Possui veículo:</span><span class="valor">${formData.temVeiculo || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Quantidade de veículos:</span><span class="valor">${formData.quantosVeiculos || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Trabalha em casa:</span><span class="valor">${formData.trabalhaEmCasa || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Necessita adaptação:</span><span class="valor">${formData.necessitaAdaptacao || 'Não informado'}</span></div>
				<div class="campo"><span class="label">Detalhes da adaptação:</span><span class="valor">${formData.detalhesAdaptacao || 'Não informado'}</span></div>
			</div>
			<div class="rodape">
				<p>Todas as informações fornecidas são verdadeiras e serão utilizadas exclusivamente para análise da locação.</p>
				<p>Documento gerado automaticamente em ${new Date().toLocaleString('pt-BR')}</p>
			</div>
		</body>
		</html>
	`;
	const printWindow = window.open('', '_blank');
	printWindow.document.write(htmlContent);
	printWindow.document.close();
	setTimeout(() => {
		printWindow.print();
	}, 500);
}
