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
        this.video.on('mount', (e) => {
            window.parent.postMessage('ring-mount','*');
        });
        this.video.on('pause', (e) => {
            window.parent.postMessage('ring-pause','*');
        });
        this.video.on('playing', (e) => {
            window.parent.postMessage('ring-playing','*');
        });
        this.video.on('RING_VIDEO_DETAILS_LOAD_ERROR', (e) => {
            window.parent.postMessage('RING_VIDEO_DETAILS_LOAD_ERROR','*');
        });
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});