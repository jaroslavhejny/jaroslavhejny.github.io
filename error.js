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
        this.video.on('mount', () => {
            console.log('mount');
        });
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});