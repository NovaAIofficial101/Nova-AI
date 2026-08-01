document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const textarea = document.querySelector("textarea");

  button.addEventListener("click", () => {
    const prompt = textarea.value.trim();

    if (!prompt) {
      alert("Please enter a video prompt.");
      return;
    }

    button.disabled = true;
    button.innerText = "Generating...";

    setTimeout(() => {
      alert("AI Video Generator is under development.\n\nPrompt:\n" + prompt);
      button.disabled = false;
      button.innerText = "Generate Video";
    }, 2000);
  });
});
