render = (function(){
	this.state = {};
	this.canvasSize = {width: 0, height: 0};

	var self = this;

	this.setState = function(newState) {
		self.state = newState;
	};

	this.updateState = function(stateDiff) {
		if (typeof(stateDiff.newCamera) != 'undefined') {
			self.state.camera = stateDiff.newCamera;
		}

		for (var i = 0; i < stateDiff.objects.length; i++) {
			var newObject = stateDiff.objects[i];
			state.objects[newObject.idx].dynamic = newObject.newContent;
		}
	};

	this.setCanvasSize = function(width, height) {
		self.canvasSize.width = width;
		self.canvasSize.height = height;
	};

	this.render = function(state, ctx) {
		ctx.clearRect(0, 0, self.canvasSize.width, self.canvasSize.height);

		var min_x = self.camera.x - self.canvasSize.width / 2;
		var max_x = self.camera.x + self.canvasSize.width / 2;
		var min_y = self.camera.y - self.canvasSize.height / 2;
		var max_y = self.camera.y + self.canvasSize.height / 2;

		for (var i = 0; i < self.state.objects.length; i++) {
			var object = self.state.objects[i];

			//skip the object if it's outside the canvas
			if (object.dynamic.x > max_x || object.dynamic.x + object._static.width < min_x ||
			    object.dynamic.y > may_y || object.dynamic.y + object._static.width < min_y) {
				continue;
			}

			ctx.drawImage(object.static.images[object.dynamic.animationFrame], object.dynamic.x - min_x, object.dynamic.y - min_y);
		}
	};

	return {
		'render': this.render,
		'setState': this.setState,
		'updateState': this.updateState,
		'setCanvasSize': this.setCanvasSize
	};
})();
