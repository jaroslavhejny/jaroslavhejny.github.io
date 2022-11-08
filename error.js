class ExamplePlugin {
    constructor(opts, root, video) {
        this.opts = opts;
        this.root = root;
        this.video = video;
    }

    init() {
        this.video.on('mount', (e) => {
            window.postMessage({data: 'video-mounted'},'*');
        });
        this.video.on('RING_VIDEO_DETAILS_LOAD_ERROR', (e) => {
            window.postMessage('RING_VIDEO_DETAILS_LOAD_ERROR','*');
        });
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});