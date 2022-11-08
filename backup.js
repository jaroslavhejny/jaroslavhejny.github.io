class ExamplePlugin {
    constructor(opts, root, video) {
        this.opts = opts;
        this.root = root;
        this.video = video;
    }

    init() {
        this.video.on('mount', (e) => {
            console.log('playing');
            window.postMessage({data: 'video-mounted'}, '*');
        });
        this.video.on('RING_VIDEO_DETAILS_LOAD_ERROR', (e) => {
            console.log('playing');
            window.postMessage('RING_VIDEO_DETAILS_LOAD_ERROR', '*');
        });
        this.video.on('pause', (e) => {
            console.log('playing');
            window.postMessage('pause', '*');
        });
        this.video.on('seeked', (e) => {
            console.log('playing');
            window.postMessage('seeked', '*');
        });
        this.video.on('playing', (e) => {
            console.log('playing');
            window.postMessage('ended', '*');
        });
    }
}

lowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});