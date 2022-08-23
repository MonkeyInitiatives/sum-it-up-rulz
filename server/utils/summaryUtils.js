const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");


var getClient = function () {
  if (!process.env.apikey) {
    throw "No apikey in process.env";
  }

  if (!process.env.endpoint) {
    throw "No endpoint in process.env";
  }

  const key = process.env.apikey;
  const endpoint = process.env.endpoint;
  // Authenticate the client with your key and endpoint
  const textAnalyticsClient = new TextAnalyticsClient(
    endpoint,
    new AzureKeyCredential(key)
  );
  return textAnalyticsClient;
};

module.exports = {
  getAzSummary: async function (text, sentnum) {
    var client = getClient();
    const documents = [text];
    // const documents = [`The extractive summarization feature uses natural language processing techniques to locate key sentences in an unstructured text document.
    // These sentences collectively convey the main idea of the document. This feature is provided as an API for developers.
    // They can use it to build intelligent solutions based on the relevant information extracted to support various use cases.
    // In the public preview, extractive summarization supports several languages. It is based on pretrained multilingual transformer models, part of our quest for holistic representations.
    // It draws its strength from transfer learning across monolingual and harness the shared nature of languages to produce models of improved quality and efficiency.`];

    const actions = {
      extractSummaryActions: [
        { modelVersion: "latest", orderBy: "Rank", maxSentenceCount: sentnum },
      ],
    };
    const poller = await client.beginAnalyzeActions(documents, actions, "en");

    const resultPages = await poller.pollUntilDone();
    var r = [];

    for await (const page of resultPages) {
      const extractSummaryAction = page.extractSummaryResults[0];
      if (!extractSummaryAction.error) {
        for (const doc of extractSummaryAction.results) {
          console.log(`- Document ${doc.id}`);
          if (!doc.error) {
            console.log("\tSummary:");
            for (const sentence of doc.sentences) {
              r.push(sentence.text);
            }
          } else {
            console.error("\tError:", doc.error);
          }
        }
      }
    }

    return r.join(" ");
  },
};
