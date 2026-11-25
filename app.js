// SACRI premium : la vidéo d'ouverture ne se charge que sur grand écran (au téléphone, image fixe nette) et jamais si l'utilisateur préfère moins d'animation. Aucun contenu n'est masqué par script.
(function(){var v=document.querySelector('.open-v');if(!v||!window.matchMedia)return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(min-width: 701px)').matches)return;
v.src=v.getAttribute('data-src');v.autoplay=true;var p=v.play&&v.play();if(p&&p.catch)p.catch(function(){});})();
