# yoo-recorder

## How to run the project
``
npm install @cyberlabsai/yoonit-recorder
npm run serve
``

## How to build locally and use it on another project
After installing the project:

1- At the root of Yoo Recorder directory, run: `npm link`

2- In the project that you want to use Yoo Recorder, run: `npm link @cyberlabsai/yoonit-recorder`

3- Then, run `npm run watch` on Yoo Recorder directory

## How to use it

```
import YooRecorder from '@cyberlabs/yoo-recorder'

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
const media = recorder.getMedia()

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

