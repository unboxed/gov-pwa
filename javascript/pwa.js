// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

document.getElementById('install').addEventListener("click", async () => {
  if(deferredPrompt === undefined) {
    alert('Sorry, not allowed to install');
  }

  // Hide the app provided install promotion
  document.getElementById('install').remove();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
});

document.getElementById('permissions').addEventListener("click", async () => {
    for (const permission of [
        "accelerometer", 
        "accessibility-events", 
        "ambient-light-sensor", 
        "background-sync", 
        "camera", 
        "clipboard-read",
        "clipboard-write", 
        "geolocation", 
        "gyroscope", 
        "local-fonts", 
        "magnetometer", 
        "microphone", 
        "midi", 
        "notifications", 
        "payment-handler", 
        "persistent-storage", 
        "push", 
        "speaker-selection",
    ]) {
    navigator.permissions.query({ name: permission }).then((result) => {
        if (result.state === "granted") {
            addToList(permission + ' granted');
        } else if (result.state === "prompt") {
            addToList(permission + ' prompted');
        } else {
            addToList(permission + ' denied');
        }
    })}
});

function addToList(text) {
    let li = document.createElement("li");
    li.textContent = text;
    document.getElementById('permissions-list').appendChild(li);
}
