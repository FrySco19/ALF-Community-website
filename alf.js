
    document.addEventListener("DOMContentLoaded", function() {
        // Funzione per gestire il click sui link nel menu di navigazione
        function handleNavLinkClick(event) {
            event.preventDefault(); // Impedisci il comportamento predefinito del link
            var targetId = this.getAttribute("href").substring(1); // Ottieni l'ID della sezione di destinazione
            var targetSection = document.getElementById(targetId); // Trova la sezione di destinazione
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" }); // Scorrimento fluido fino alla sezione di destinazione
            }
        }

        // Seleziona tutti i link nel menu di navigazione
        var navLinks = document.querySelectorAll("nav a.scroll-link");

        // Aggiungi un gestore di eventi a ciascun link nel menu di navigazione
        navLinks.forEach(function(navLink) {
            navLink.addEventListener("click", handleNavLinkClick);
        });
    });

 var recensioni = document.querySelectorAll('.recensione');
    var currentSlide = 0;

    function mostraProssimaRecensione() {
        // Nascondi tutte le recensioni
        recensioni.forEach(function(recensione) {
            recensione.style.display = 'none';
        });
        // Mostra la prossima recensione
        currentSlide = (currentSlide + 1) % recensioni.length;
        recensioni[currentSlide].style.display = 'block';
    }

    setInterval(mostraProssimaRecensione, 3000);








