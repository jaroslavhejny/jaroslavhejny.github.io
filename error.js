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
            console.log('mount');
            const event = new CustomEvent('ring-mount', {
                detail: e.detail,
                bubbles: true
            });
            this.video.dispatchEvent(event);
            window.dispatchEvent(event);
        });
        this.video.on('RING_VIDEO_DETAILS_LOAD_ERROR', (e) => {
            console.log('RING_VIDEO_DETAILS_LOAD_ERROR', e.detail);
            const event = new CustomEvent('RING_VIDEO_DETAILS_LOAD_ERROR', {
                detail: e.detail,
                bubbles: true
            });
            this.video.dispatchEvent(event);
        });
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});