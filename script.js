const contrastButton = document.getElementById('toggle-contrast');
const contrastStatus = document.getElementById('contrast-status');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

const storageKey = 'ux-accessibility-contrast';

function setContrast(enabled) {
  document.body.classList.toggle('theme-high-contrast', enabled);
  contrastButton.setAttribute('aria-pressed', String(enabled));
  contrastButton.textContent = enabled ? 'Desativar alto contraste' : 'Ativar alto contraste';
  contrastStatus.textContent = enabled
    ? 'Alto contraste ativado.'
    : 'Alto contraste desativado.';
  localStorage.setItem(storageKey, enabled ? 'true' : 'false');
}

const savedPreference = localStorage.getItem(storageKey);
if (savedPreference === 'true') {
  setContrast(true);
}

contrastButton.addEventListener('click', () => {
  const isEnabled = !document.body.classList.contains('theme-high-contrast');
  setContrast(isEnabled);
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('nome').value.trim();
  formMessage.textContent = name
    ? `Obrigado, ${name}! Sua mensagem foi recebida.`
    : 'Obrigado! Sua mensagem foi recebida.';
});