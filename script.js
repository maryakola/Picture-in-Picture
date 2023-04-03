const videoElement = document.getElementById("video")
const button = document.getElementById("button")

// Prompt user to select media stream, pass to video element, then plan
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata =() => {
            videoElement.play()
        }
    } catch(error){
        // catch errors
    }
}


button.addEventListener("click", async() => {
    // Disable
    button.disabled = true
    // Start PIcture in Picture
    await videoElement.requestPictureInPicture()
    // Reset Button
    button.disabled = false
})
// on load
selectMediaStream()