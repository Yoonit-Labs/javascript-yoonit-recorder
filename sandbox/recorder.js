$recorder = null

window.onload = async function () {
  $recorder = await YooRecorder()
}

document.getElementById('rec').addEventListener('click', async () => {
  document.getElementById('feedback').style.display = 'flex'
  $recorder.start()
})

document.getElementById('stop').addEventListener('click', async () => {
  $recorder.stop()
  document.getElementById('feedback').style.display = 'none'

  const media = await $recorder.getMedia()

  document.getElementById('result').src = media.audioUrl
})

document.getElementById('pause').addEventListener('click', async () => {
  document.getElementById('feedback').style.display = 'none'

  $recorder.pause()
})
