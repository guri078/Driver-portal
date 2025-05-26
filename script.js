function showMessage() {

    alert("Welcome to My Website!");
    
}




// Example: Show alert when file is uploaded
document.querySelector("input[type='file']").addEventListener("change", function() {
    alert("File selected: " + this.files[0].name);
});

