const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
const promptEvent = window.deferredPrompt;
// this is the event that is triggered when the user clicks the install button

if (!promptEvent) {
    // The event has already been handled or the browser is not supported.
    return;
}

// Show prompt
promptEvent.prompt();

// Reset the deferred prompt variable, it can only be used once.
window.deferredPrompt = null;


butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // this is the event that is triggered when the user installs the app
 // Clear prompt
 window.deferredPrompt = null;
});
