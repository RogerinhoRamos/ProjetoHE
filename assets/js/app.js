
function avisarLideranca() {
  fetch('https://script.google.com/macros/s/SEU_DEPLOY_WEBAPP_URL/exec?action=avisarLideranca&turno=Manhã&lider=Claudenir')
    .then(r => r.json())
    .then(d => alert('Liderança avisada!'));
}

function enviarEscalacao() {
  fetch('https://script.google.com/macros/s/SEU_DEPLOY_WEBAPP_URL/exec?action=enviarEscalacao&turno=Manhã&lider=Claudenir')
    .then(r => r.json())
    .then(d => alert('Escalação confirmada!'));
}
