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
        this.video.on('pause', (e) => {
            window.postMessage('pause','*');
        });
        this.video.on('seeked', (e) => {
            window.postMessage('seeked','*');
        });
        this.video.on('playing', (e) => {
            window.postMessage('ended','*');
        });
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});