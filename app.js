// SACRI premium : seul comportement, couper la vidéo si l'utilisateur préfère moins d'animation. Aucun contenu n'est masqué par script.
(function(){var v=document.querySelector('.open-v');if(!v)return;
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){v.removeAttribute('autoplay');v.pause();}
else{var p=v.play&&v.play();if(p&&p.catch)p.catch(function(){});}})();
