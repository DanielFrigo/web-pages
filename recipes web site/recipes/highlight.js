document.querySelectorAll("tbody tr").forEach(row => {
    row.addEventListener("click", () => {
        row.classList.toggle("selected"); 
    });
});
