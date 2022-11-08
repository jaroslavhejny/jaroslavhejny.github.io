class ExamplePlugin {
    constructor(opts, root, video) {
        this.opts = opts;
        this.root = root;
        this.video = video;
    }

    init() {
        this.video.on('mount', (e) => {
            console.log('mount');
            window.postMessage({data: 'video-mounted'},'*');
        });
        this.video.on('RING_VIDEO_DETAILS_LOAD_ERROR', (e) => {
            console.log('RING_VIDEO_DETAILS_LOAD_ERROR');
            window.postMessage('RING_VIDEO_DETAILS_LOAD_ERROR','*');
        });
        this.video.on('pause', (e) => {
            console.log('pause');
            window.postMessage('pause','*');
        });
        this.video.on('seeked', (e) => {
            console.log('seeked');
            window.postMessage('seeked','*');
        });
        this.video.on('playing', (e) => {
            console.log('playing');
            window.postMessage('ended','*');
        });
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});