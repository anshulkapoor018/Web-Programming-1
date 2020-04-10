(function() {
    function is_Prime(phrase){
        if(phrase == null || phrase.length == 0) {
            console.log("Nothing found!");
            throw "Phrase Value can not be null"
        }
        if ((phrase.length) % 2 === 0) {
            total_chars = (phrase.length) / 2;
        } else {
            if (phrase.length === 1) {
              return true;
            } else {
              total_chars = (phrase.length - 1) / 2;
            }
        }
            
        for (var x = 0; x < total_chars; x++) {
            if (phrase[x] != phrase.slice(-1-x)[0]) {
              return false;
            }
        }
        return true;
    }
    const staticForm = document.getElementById("static-form");
    // document.write(document.getElementById("number1").value)

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
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");
                const firstStringValue = firstNumberElement.value
                const parsedfirstStringValue = String(firstStringValue);
                //var len = attempts.getElementsByClassName("LI").length;
                //document.getElementById("no_of_attempts").value = "NO of attempts made till now is " + len;
                var alphanumericInputString = (parsedfirstStringValue.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s/g,'')).toLowerCase();
                const check_is_Prime = is_Prime(alphanumericInputString);
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
                errorContainer.classList.remove("hidden");
            }
        });
}
})();

