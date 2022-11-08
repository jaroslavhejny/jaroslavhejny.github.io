import EVENT_TYPES from './event_types'
class ExamplePlugin {
    constructor(opts, root, video) {
        this.opts = opts;
        this.root = root;
        this.video = video;
    }

    init() {
        console.log('loadPlugin');
        // small jQuery-compatible utility built inside the player

        var $ = flowplayer.mq;

        // render a custom button when the player is mounted
        this.video.on(EVENT_TYPES.MOUNT, (e) => {
            window.parent.postMessage('ring-mount','*');
        });
        this.video.on(EVENT_TYPES.PAUSE, (e) => {
            window.parent.postMessage('ring-pause','*');
        });
        this.video.on(EVENT_TYPES.PLAYING, (e) => {
            window.parent.postMessage('ring-playing','*');
        });
        this.video.on(EVENT_TYPES.ENDED, (e) => {
            window.parent.postMessage('ring-ended','*');
        });
        this.video.on(EVENT_TYPES.SEEKED, (e) => {
            window.parent.postMessage('ring-seeked','*');
        });
        this.video.on(EVENT_TYPES.PROGRESS, (e) => {
            window.parent.postMessage('ring-progress','*');
        });
        this.video.on(EVENT_TYPES.VOLUME_CHANGE, (e) => {
            window.parent.postMessage('ring-volumechange','*');
        });
        this.video.on(EVENT_TYPES.RING_VIDEO_DETAILS_LOAD_ERROR, (e) => {
            window.parent.postMessage('RING_VIDEO_DETAILS_LOAD_ERROR','*');
        });
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});