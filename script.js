  AOS.init({
    duration: 1000,
  });

  let videoCard = document.querySelectorAll('.gallery__video__card');
  let overlay = document.getElementById('overlay');
  let modal = document.getElementById('modal');
  let modalVideo = document.getElementById('modalVideo');
  let modalTitle = document.querySelector('#modal h4');
  let midalDescription = document.querySelector('#modal p');
  let closeBtn = document.getElementById('closeBtn');

  
  videoCard.forEach(card => {    
    card.addEventListener('click', function() {
      console.log(card.dataset.video);
      
      let videoSrc = 'https://drive.google.com/file/d/'+card.dataset.video+'/preview'; // Remplacez par la source réelle de la vidéo
      let videoTitle = card.childNodes[3].innerHTML; // Titre de la vidéo depuis le h4
      modalVideo.src = videoSrc;
      modalTitle.textContent = videoTitle;
      midalDescription.textContent = card.childNodes[5].innerHTML;
      if(card.dataset.format === "vertical"){
        modalVideo.id = "modalVideo-vetical";
      }else{
        modalVideo.id = "modalVideo";
      }
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
     
    });
  });

  closeBtn.addEventListener('click', function() {
    overlay.classList.add('hidden');
    modalVideo.src = '';
          document.body.style.overflow = 'initial';

  });
// Fermer si on clique en dehors
overlay.addEventListener("click", (e) => {
  // Vérifie : 
  // 1) l’overlay n'est pas hidden
  // 2) le clic n'est PAS dans le modal
  if (!overlay.classList.contains("hidden") && !modal.contains(e.target)) {
overlay.classList.add('hidden');
    modalVideo.src = '';
          document.body.style.overflow = 'initial';
  }
});
const headerHeight = 80; // hauteur de ton header en px

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Scroll to top when clicking the site title (header h1)
const siteTitle = document.querySelector('header h1');
if (siteTitle) {
  siteTitle.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

 const vid = document.getElementById("myVideo");
  vid.playbackRate = 4; // 1.0 = normal, 1.5 = 50% plus rapide