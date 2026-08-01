
const button = document.getElementById("generateBtn");
const progress = document.getElementById("progress");
const downloadBtn = document.getElementById("downloadBtn");
const promptInput = document.getElementById("prompt");
const durationInput = document.getElementById("duration");

button.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Please enter a video prompt.");
    return;
  }

  button.disabled = true;
  button.innerText = "Generating...";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt,
        duration: durationInput.value
      })
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    downloadBtn.href = url;
    downloadBtn.download = "video.mp4";
    downloadBtn.style.display = "inline-block";
    downloadBtn.innerText = "Download Video";

    alert("Video generated successfully!");
  } catch (err) {
    alert("Error: " + err.message);
  }

  button.disabled = false;
  button.innerText = "Generate Video";
});
