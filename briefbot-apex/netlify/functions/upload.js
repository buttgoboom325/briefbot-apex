const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

exports.handler = async (event) => {
  const { text } = JSON.parse(event.body);

  const response = await openai.createChatCompletion({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: `Summarize and create flashcards from:\n${text}` }],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ summary: response.data.choices[0].message.content }),
  };
};
