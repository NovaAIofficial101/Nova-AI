export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt, duration } = req.body;

  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Backend is working!",
    prompt,
    duration,
    status: "Ready for Hugging Face API connection"
  });
}
