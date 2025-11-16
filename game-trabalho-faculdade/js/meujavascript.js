    document.getElementById('quizForm').addEventListener('submit', function(event) {
      event.preventDefault();

      let score = 0;
      let total = 3;

     
      const q1 = document.querySelector('input[name="q1"]:checked');
      if (q1) score += Number(q1.value);

      
      const q2 = document.querySelectorAll('input[name="q2"]:checked');
      q2.forEach(item => score += Number(item.value));

     
      const q3 = document.querySelector('select[name="q3"]').value;
      if (q3 !== "") score += Number(q3);

     
      const resultDiv = document.getElementById('resultado');
      resultDiv.innerHTML = '';

      const box = document.createElement('div');
      box.className = 'alert alert-info p-3 mt-3';
      box.innerHTML = `<h4>Resultado:</h4><p>Você fez <strong>${score}</strong> pontos de 4 possíveis!</p>`;

      if (score >= 4) {
        box.innerHTML += '<p class="text-success fw-bold">Excelente! Você sabe muito sobre Cultura Pop!</p>';
      } else {
        box.innerHTML += '<p class="text-danger fw-bold">Continue tentando! Você pode melhorar!</p>';
      }

      resultDiv.appendChild(box);
    });
