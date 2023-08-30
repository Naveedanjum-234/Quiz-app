console.clear();

document.addEventListener("DOMContentLoaded", function () {
    const bookmarkButton = document.querySelector(".bookmark-btn");
    const answerButton = document.querySelector(".show-answer-btn");
    const answerText = document.querySelector(".answer");

    bookmarkButton.addEventListener("click", function () {
        bookmarkButton.classList.toggle("bookmarked");
    });

    answerButton.addEventListener("click", function () {
        answerButton.textContent = answerText.classList.contains("hidden") ? "Hide Answer" : "Show Answer";
        answerText.classList.toggle("hidden");
    });
});
