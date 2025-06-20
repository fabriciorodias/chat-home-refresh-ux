
export const getMockResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  // FNE related questions
  if (message.includes('fne') && (message.includes('requisito') || message.includes('pessoa física'))) {
    return "Para aprovar um financiamento FNE para pessoa física, é necessário: renda comprovada, CPF regular, idade entre 18 e 70 anos, e análise de capacidade de pagamento. O valor máximo varia conforme a linha de crédito específica.";
  }

  if (message.includes('fne') && message.includes('limite')) {
    return "Os limites do FNE variam por categoria: Microempresas até R$ 300 mil, Pequenas empresas até R$ 4,8 milhões, e Médias empresas até R$ 20 milhões. O limite específico depende da análise de crédito e garantias apresentadas.";
  }

  if (message.includes('análise') && message.includes('crédito')) {
    return "A análise de crédito para empresas industriais inclui: demonstrações financeiras dos últimos 3 anos, fluxo de caixa projetado, certidões negativas, análise setorial, visita técnica e avaliação das garantias oferecidas.";
  }

  if (message.includes('capacidade') && message.includes('pagamento')) {
    return "Para avaliar a capacidade de pagamento de pessoa jurídica, analisamos: faturamento médio, margem de lucro, endividamento atual, fluxo de caixa, histórico no SPC/Serasa e relacionamento bancário anterior.";
  }

  // General banking questions
  if (message.includes('microempresa') || message.includes('micro empresa')) {
    return "Para microempresas, oferecemos linhas especiais com taxa preferencial, prazo de até 120 meses e carência de até 24 meses. É necessário apresentar CNPJ ativo há pelo menos 2 anos.";
  }

  if (message.includes('garantia')) {
    return "As garantias aceitas incluem: hipoteca, alienação fiduciária, aval, fiança, seguro garantia e penhor. O tipo de garantia influencia na taxa de juros e prazo do financiamento.";
  }

  if (message.includes('taxa') || message.includes('juros')) {
    return "As taxas variam conforme o produto: FNE Industrial de 6% a 8,5% a.a., FNE Comercial de 7% a 9% a.a., e FNE Rural de 5% a 7,5% a.a. Taxas menores para projetos inovadores e sustentáveis.";
  }

  // Default responses
  const defaultResponses = [
    "Entendi sua pergunta. Para te dar uma resposta mais precisa, você poderia especificar sobre qual produto ou linha de crédito está interessado?",
    "Essa é uma excelente pergunta! Com base nos normativos do banco, posso te orientar melhor se você me disser o porte da empresa e a finalidade do crédito.",
    "Para te ajudar de forma mais assertiva, você poderia me dar mais detalhes sobre sua situação específica? Por exemplo, o valor aproximado e o prazo desejado."
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
