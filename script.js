// alert("Hola mundo!!");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString('Fernanda Magaña💖')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR 🌷🎀')
  .pauseFor(1000)
  .start();

  let frase = document.getElementById('frase');

let typewriterfrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterfrase
  .pauseFor(1500)
  .typeString('"Cuando todo el mundo está en silencio, incluso una sola voz se vuelve poderosa"')
  .pauseFor(300)
  .deleteAll()
  .typeString('- Malala Yousafzai')
  .pauseFor(1000)
  .start();

  document.addEventListener('DOMContentLoaded', function() {
    const cancion = document.getElementById('miCancion');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    
    // Establecer volumen bajo
    cancion.volume = 0.2;

    playBtn.addEventListener('click', function() {
        cancion.play();
    });

    pauseBtn.addEventListener('click', function() {
        cancion.pause();
    });
});