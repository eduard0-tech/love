  function mostrarMensagem() {
      const msg = document.getElementById('mensagem');
      msg.style.display = 'block';
      msg.innerHTML = `
        <p style="font-size: 1.2em; line-height: 1.6em; color: #b30059;">
          Meu amor,
          <br><br>
          Eu pensei em mil maneiras de te dizer o quanto você é especial pra mim... e mesmo assim, nenhuma palavra parece suficiente. 💖<br><br>
          Você é a luz que ilumina os meus dias, a paz que acalma o meu coração e o sorriso que me faz acreditar que o mundo pode ser um lugar melhor. Estar com você é como viver dentro de um sonho bom — e eu não quero acordar nunca. ✨<br><br>
          Cada gesto seu, cada carinho, cada olhar... tudo em você me faz sentir que encontrei o amor verdadeiro. Obrigado por existir, por ser tão você, por me permitir fazer parte da sua vida. <br><br>
          Eu te amo com toda a intensidade do meu ser. E enquanto eu existir, vou cuidar de você, te respeitar, te apoiar e te amar cada vez mais. 🌹<br>
          <br>
          Você é o meu mundo inteiro 💘 Obrigado por existir, meu amor! <br> Te amo infinitamente! 💖 <br>
        </p>`;
    }
    // Criar corações flutuando
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (4 + Math.random() * 3) + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }

    setInterval(createHeart, 400);