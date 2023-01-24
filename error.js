class ExamplePlugin {
  constructor(opts, root, video) {
    this.opts = opts;
    this.root = root;
    this.video = video;
  }

  init() {
    console.log(this.video);
    this.video.on("mount", (e) => {
      window.parent.postMessage("ring-mount", "*");
      console.log(document.getElementById("playerContainer"));
      const fullScrnWrapper = document.getElementById("playerContainer");
      if (fullScrnWrapper) {
        fullScrnWrapper.style.backgroundColor = black;
      }
    });
    this.video.on("pause", (e) => {
      window.parent.postMessage("ring-pause", "*");
    });
    this.video.on("playing", (e) => {
      window.parent.postMessage("ring-playing", "*");
    });
    this.video.on("ended", (e) => {
      window.parent.postMessage("ring-ended", "*");
    });
    this.video.on("seeked", (e) => {
      // window.parent.postMessage('ring-seeked','*');
    });
    this.video.on("progress", (e) => {
      // window.parent.postMessage('ring-progress','*');
    });
    this.video.on("volume_change", (e) => {
      window.parent.postMessage("ring-volumechange", "*");
    });
    this.video.on("RING_VIDEO_DETAILS_LOAD_ERROR", (e) => {
      window.parent.postMessage("RING_VIDEO_DETAILS_LOAD_ERROR", "*");
    });
  }
}

flowplayer((opts, root, video) => {
  const plugin = new ExamplePlugin(opts, root, video);
  plugin.init();
});
