# yoonit-recorder

## How to run the project
``
npm install @yoonit/javascript-recorder
``

## How to use it

```
import YooRecorder from '@yoonit/javascript-recorder'

const recorder = await YooRecorder()
```

It's important to allow microphone, to audio capture be possible.

### Methods

## start

- It starts recording audio.

```
recorder.start()

```

<br>

## pause

- Pauses current audio record.

```
recorder.pause()

```

## stop

- It stops recording and clear it.

```
recorder.stop()

```

## clear

- It clears recorded data.

```
recorder.clear()

```

## getMedia

- Returns captured media.
```
const media = await recorder.getMedia()

sendAudio(media.audioBlob)

```
<br>
Returns:

| Property      | Description                                    | Type    |
| ------------- |:----------------------------------------------:| -------:|
| audio         | Audio file type                                | wmv     |
| audioBlob     | Audio blob                                     | binary  |
| audioUrl      | Audio URL                                      | string  |
| file          | Audio file object                              | File    |
| play          | Function to play recorded audio                | Function|

