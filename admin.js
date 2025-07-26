const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");
  await admin.createTopics({
    topics: [
      {
        topic: "some-topic",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [some-topic]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();
