class ExamplePlugin {
    constructor(opts, root, video) {
        this.opts = opts;
        this.root = root;
        this.video = video;
    }

    init() {
        // small jQuery-compatible utility built inside the player
        var $ = flowplayer.mq

        // render a custom button when the player is mounted
        this.video.on('mount', () => {
            var btn = $('<button>').txt('A custom mute button').css("background-color", "red").on('click', () => {
                this.video.toggleMute();
            })
            $('.fp-primary', this.root).prepend(btn);
        })
    }
}

flowplayer((opts, root, video) => {
    const plugin = new ExamplePlugin(opts, root, video);
    plugin.init();
});