(function() {
  // Seleciona o elemento que exibirá o relógio
  const relogioEl = document.getElementById('relogio');

  function adicionarZero(numero) {
    return numero < 10 ? '0' + numero : String(numero);
  }

  function atualizarRelogio() {
    const now = new Date();
    const horas = adicionarZero(now.getHours());
    const minutos = adicionarZero(now.getMinutes());
    const segundos = adicionarZero(now.getSeconds());

    relogioEl.textContent = `${horas}:${minutos}:${segundos}`;
  }

  // Atualiza imediatamente e depois a cada segundo
  atualizarRelogio();
  setInterval(atualizarRelogio, 1000);
})();
