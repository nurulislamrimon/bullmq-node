const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");

async function init() {
  const res = await notificationQueue.add("email to push", {
    email: "nirimonpc@gmail.com",
    subject: "Welcome Message",
    body: "Hey Nuru, How are You?",
  });

  console.log("Job added to the queue ", res.id);
}

init();
