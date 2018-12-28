HTMLElement.prototype.onScrollToBottom = function (callback, threshold) {
    this.addEventListener("scroll", function () {
        var sub = this.scrollHeight - this.clientHeight - this.scrollTop;
        if (sub <= (threshold || 0)) {
            callback.call(this, sub);
        }
    }, false);
};
window.onScrollToBottom = function (callback, threshold) {
	var sub = document.documentElement.offsetHeight - window.innerHeight - window.pageYOffset;
	if (sub <= (threshold || 0)) {
    	callback.call(this, sub);
    }
};