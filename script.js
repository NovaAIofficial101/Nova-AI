const button = document.getElementById("generateBtn");
const progress = document.getElementById("progress");
const downloadBtn = document.getElementById("downloadBtn");
const promptInput = document.getElementById("prompt");
const imageInput = document.getElementById("image");
const durationInput = document.getElementById("duration");

button.addEventListener("click", () => {
  const prompt = promptInput.value.trim();

  if (prompt === "") {
    alert("Please enter a video prompt.");
    return;
  }

  button.disabled = true;
  button.innerText = "Generating...";
  progress.value = 0;

  let value = 0;

  const timer = setInterval(() => {
    value += 5;
    progress.value = value;
    if (value >= 100) {
      clearInterval(timer);

      button.disabled = false;
      button.innerText = "Generate Video";

      downloadBtn.style.display = "inline-block";
      downloadBtn.innerText = "Download Demo";

      if (imageInput.files.length > 0) {
        downloadBtn.href = URL.createObjectURL(imageInput.files[0]);
      } else {
        downloadBtn.href = "#";
      }

      alert(
        "Demo completed successfully!\n\n" +
        "Prompt: " + prompt + "\n" +
        "Duration: " + durationInput.value + "\n\n" +
        "Next step: Connect Hugging Face AI Video API."
      );
    }
  }, 200);
});
      } else {
        downloadBtn.removeAttribute("href");
        downloadBtn.onclick = () => {
          alert("Demo complete! Connect an AI API to generate real videos.");
        };
      }

      alert("Video generation completed successfully!");
    }
  }, 100);

});
