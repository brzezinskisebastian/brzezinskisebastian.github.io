// Pobranie paska nawigacyjnego
var topBar = document.querySelector(".top-bar");
// Pobranie wysokości paska nawigacyjnego
var topBarHeight = topBar.offsetHeight;
// Zmienna do przechowywania pozycji pionowej ostatniego przewinięcia
var lastScrollTop = 0;

// Funkcja do obsługi zdarzenia przewijania strony
window.addEventListener("scroll", function() {
    // Pobierz aktualną pozycję pionową przewijania strony względem paska nawigacyjnego
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Sprawdź, czy użytkownik przewija stronę w dół i czy jest na dół wystarczająco, aby schować pasek
    if (scrollTop > lastScrollTop && scrollTop > topBarHeight) {
        // Schowaj pasek nawigacyjny
        topBar.style.top = "-" + topBarHeight + "px";
    } else {
        // Pokaż pasek nawigacyjny
        topBar.style.top = "0";
    }

    // Zaktualizuj pozycję pionową ostatniego przewinięcia
    lastScrollTop = scrollTop;
});
