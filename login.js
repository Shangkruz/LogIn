document.addEventListener("DOMContentLoaded", function() {
    const validUsername = "user";
    const validPassword = "pass";
            
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
                
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
                
        if (username === validUsername && password === validPassword) {
            document.getElementById("downloadBtn").classList.remove("hidden");
        } else {
            alert("Invalid username or password");
        }
    });
                
    document.getElementById("downloadBtn").addEventListener("click", function() {
        var fileUrl = "https://drive.google.com/uc?export=download&id=1V6AZVIXxhFVgGgalj8PK7R28ka8wdM96";
    
        var link = document.createElement("a");
        link.href = fileUrl;
        link.download = "file.txt";
    
        document.body.appendChild(link);
    
        link.click();
    
        document.body.removeChild(link);

        setTimeout(function() {
            window.location.href = "https://shangkruz.github.io/IAS-PUPSIS/";
        }, 2000);
    });
});
