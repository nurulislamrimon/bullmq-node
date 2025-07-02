const { Worker } = require("bullmq");

const sendEmail = (ms) =>
  new Promise((res) => {
    setTimeout(() => {
      res();
      console.log("Mail sent successfully to", ms.email);
    }, 5 * 1000);
  });

// Pass the Redis connection to the Worker
const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(
      "Message rec id:",
      job.id,
      "\nProcessing message",
      "\nSending email to",
      job.data.email
    );

    return await sendEmail(job.data);
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);
