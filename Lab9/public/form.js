(function() {
    function is_Prime(phrase){
        if(phrase == null || phrase.length == 0) {
            throw "Phrase Value can not be null"
        }
        var alphanumericInputString = (phrase.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s/g,'')).toLowerCase();
        if(alphanumericInputString.length == 0){
            return false
        } else{
            if ((alphanumericInputString.length) % 2 === 0) {
                total_chars = (alphanumericInputString.length) / 2;
            } else {
                if (alphanumericInputString.length === 1) {
                  return true;
                } else {
                  total_chars = (alphanumericInputString.length - 1) / 2;
                }
            }
            for (var x = 0; x < total_chars; x++) {
                if (alphanumericInputString[x] != alphanumericInputString.slice(-1-x)[0]) {
                  return false;
                }
            }
            return true;
        }
    }
    const staticForm = document.getElementById("static-form");

    if (staticForm) {
        const firstNumberElement = document.getElementById("phrase");
        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];
        const resultContainer = document.getElementById("result-container");
        const resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];
        staticForm.addEventListener("submit", event => {
            event.preventDefault();
            try {
                var li = document.createElement("li");
                var attempts = document.getElementById("attempts");
                errorContainer.hidden = true;
                resultContainer.hidden = true;
                const firstStringValue = firstNumberElement.value
                const parsedfirstStringValue = String(firstStringValue);
                const check_is_Prime = is_Prime(parsedfirstStringValue);
                if(check_is_Prime){
                    li.className = "is-palindrome"
                    li.appendChild(document.createTextNode( parsedfirstStringValue + " is a Palindrome" ))
                    attempts.appendChild(li)
                }
                else{
                    li.className="not-palindrome"
                    li.appendChild(document.createTextNode(parsedfirstStringValue + " is not a Palindrome" ))
                    attempts.appendChild(li)
                }
                resultContainer.classList.remove("hidden");

            } catch (e) {
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.hidden = false;
            }
        });
}
})();

