const masks = {
  cpf (value) {
        return value
        .replace(/\D/g, '') //RegEx /§/ | '\D' faz uma busca por qualquer caractere que não seja número, 'g' atributo global
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },

  cnpj (value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
  },
  
  telefone (value) {
      return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  },

  cep (value) {
      return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  },

  pis (value) {
      return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{5})(\d)/, '$1.$2')
      .replace(/(\d{2})(\d)/, '$1-$2')
      .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
      .replace(/(-\d)\d+?$/, '$1')
  },

  nascimento (value) {
      return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1')
  }


}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js
    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})