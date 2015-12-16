var tl = tl || {};
tl.register = function(t, e) {
    var i = t.split(".");
    e && tl.setRouteClass(e, t), "tl" === i[0] && (i = i.slice(1));
    for (var s = 0, n = i.length, o = this; n > s; s++)
        o[i[s]] === void 0 && (o[i[s]] = {}), o = o[i[s]]
}, tl.register("tl.ui.Gallery"), tl.ui.Gallery = function(t) {
    this.el = $(t), this.interaction = $(".interaction", this.el), this.images = $(".contents img:not(.spacer)", this.el), this.caption = $(".caption .text", this.el), this.count = $(".caption .count", this.el), this.fullscreen = $(".fullscreen", this.el), this.mouseHandlerRef = $.proxy(this._mouseHandler, this), this.keyboardHandlerRef = $.proxy(this._keyboardHandler, this), this.interaction.hammer().bind("swipe", $.proxy(this._swipeHandler, this)), this.interaction.on("mousemove", this.mouseHandlerRef), this.interaction.on("click", this.mouseHandlerRef), $(document).on("keydown", this.keyboardHandlerRef), this.fullscreen.on("click", $.proxy(this._fullscreenHandler, this)), this.setCaption($(this.images[0]).attr("data-caption")), this.setCount()
}, tl.ui.Gallery.prototype._currIndex = 0, tl.ui.Gallery.prototype._animating=!1, tl.ui.Gallery.prototype._mouseHandler = function(t) {
    var e = void 0 === t.offsetX ? t.originalEvent.layerX : t.offsetX, i = this.interaction.width(), s = e > i / 2 ? "next" : "prev";
    "click" === t.type && ("next" === s ? this.next() : this.previous()), this.interaction.removeClass("next prev").addClass(s)
}, tl.ui.Gallery.prototype._keyboardHandler = function(t) {
    if (39 === t.keyCode || 37 === t.keyCode) {
        var e = this.el.offset().top, i = this.el.height(), s = $(document).scrollTop(), n = $(window).height();
        e > s && s + n > e + i && (39 === t.keyCode ? this.next() : 37 === t.keyCode && this.previous())
    }
}, tl.ui.Gallery.prototype._swipeHandler = function(t) {
    "right" === t.direction ? this.previous() : "left" === t.direction && this.next()
}, tl.ui.Gallery.prototype._fullscreenHandler = function() {
    tl.Fullscreen.open(this.images, this._currIndex)
}, tl.ui.Gallery.prototype.next = function() {
    var t = this._currIndex + 1 === this.images.length ? 0: this._currIndex + 1;
    this.goTo(t, "prev")
}, tl.ui.Gallery.prototype.previous = function() {
    var t = 0 === this._currIndex ? this.images.length - 1: this._currIndex - 1;
    this.goTo(t, "next")
}, tl.ui.Gallery.prototype.goTo = function(t, e) {
    if (!this._animating) {
        this._animating=!0;
        var i = $(this.images[t]), s = $(this.images[this._currIndex]), n = e, o = this;
        this.images.removeClass("super"), i.addClass(n + " super"), setTimeout(function() {
            i.addClass("active")
        }, 100), setTimeout(function() {
            i.removeClass(n)
        }, 110), setTimeout(function() {
            s.removeClass("active"), o._animating=!1
        }, 600), this._currIndex = t, this.setCaption(i.attr("data-caption")), this.setCount()
    }
}, tl.ui.Gallery.prototype.setCaption = function(t) {
    var e = this, i = t || "&nbsp;";
    this.caption.addClass("hide"), setTimeout(function() {
        e.caption.html(i).removeClass("hide")
    }, 250)
}, tl.ui.Gallery.prototype.setCount = function() {
    var t = this._currIndex + 1;
    this.count.text(t + "/" + this.images.length)
}, tl.ui.Gallery.prototype.deactivate = function() {
    this.interaction.unbind("swipe"), this.interaction.off("mousemove click"), this.fullscreen.off("click"), $(document).off("keydown", this.keyboardHandlerRef)
}, $(document).on("scroll", function() {
    var t = $(window).scrollTop(), e = $("#top-bar");
    t > 352 ? e.addClass("minified") : e.removeClass("minified")
});

