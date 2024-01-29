(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"match shape game1_atlas_1", frames: [[0,770,1297,579],[0,0,1024,768]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2481,1670);


(lib.CachedBmp_1 = function() {
	this.initialize(ss["match shape game1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.puzzlehard = function() {
	this.initialize(ss["match shape game1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TriangleSlot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AncHmQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACQADACACAEQABAEgCADIgZAyIgCAEQgCAEgEACIgDAAIgEgBgAmxHkQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABIg8AAQgEAAgDgDgAGdHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFQAAAEgDADQgDACgEABgAElHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgACtHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAA1HnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAhCHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAACADQADACAAAFIAAAAQAAAEgDADQgCACgEABgAi6HnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAkyHnQgEgBgDgCQgDgDAAgEIAAAAQAAgFADgCQADgDAEAAIA8AAQAEAAADADQADACAAAFIAAAAQAAAEgDADQgDACgEABgAHSHCQgEgBgCgEIgag2QgCgEABgEQABgDAEgCIAAAAQAEgCAEABQAEABACAEIAaA2QACAEgBAEQgCAEgDACIgBAAIgEABIgDgBgAmmF6QgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAGcFXQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIAAAAIgFABIgDAAgAlwEOQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAFmDrQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAk6CiIAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAEwB/QgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAkEA2IAAAAQgEgCgBgEQgCgEACgEIAbg1QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA1QgCAEgEACIgDAAIgEgBgAD6ATQgEgCgBgEIgbg1QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA1QABAEgBAEQgBAEgEACIgEABIgEAAgAjOg1IAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgADEhYQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAiYihIAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgACOjEQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAhikNIAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgABYkwQgEgCgBgEIgbg2QgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAgAgsl5IAAAAQgEgCgBgEQgCgEACgEIAbg2QACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADIgbA2QgCAEgEACIgDAAIgEgBgAAimcQgEgCgBgEIgbg1IAAgBQgCgDABgEQABgEAEgCQAEgCAEACQAEABACADIAbA2QABAEgBAEQgBAEgEACIgEABIgEAAg");
	this.shape.setTransform(-0.703,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AiBHaIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgYAAIAYgxQACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgCIASgkQAEACAEgBQAEgBABgEIAbg1QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIASgkQAEABAEgBQAEgBABgEIAbg2QACgEgBgEQgBgEgEgBIALgWIAaA1QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA1QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBAEACAEIAbA2QACAEAEABQAEABADgCIASAkQgDACgCAEQgBADACAEIAaA2QACAEAEABQAEACAEgCIAAAAIANAbIgEAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgoAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAIgnAAIAAAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIAAAAg");
	this.shape_1.setTransform(0.5625,0.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TriangleSlot, new cjs.Rectangle(-49,-48.4,97,97.4), null);


(lib.Triangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnfHgIHgu/IHfO/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66FF00").ss(2,1,1).p("AnfHgIHgu/IHfO/g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF00").s().p("AABnfIHfO/Iu/AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AAAnfIHgO/Iu/AAg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49.5,107.5,107.5);


(lib.StarSlot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AEdHlIg0gdQgEgCgBgEQgBgEACgDIAAgBQACgDAEgBQAEgBADACIA1AdQADACACAEQABADgCAEIAAAAQgCAEgEABIgDABIgFgCgAkhHbQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCIA0gdQADgCAEABQAEABACAEIAAAAQACAEgBADQgBAEgEACIg0AdIgEACIgDgBgAk8HWIAAAAQgEAAgDgEQgCgDABgEIALg7QAAgEAEgDQADgCAEABIABAAQAEABACADQACADgBAEIgLA7QAAAEgEADQgCABgDAAIgCAAgAEjHBQgEgCgBgEIgMg7QgBgFADgDQACgDAEgBIABAAQADgBAEACQADADABAEIAMA7QABAEgDADQgCADgEABIgBAAIgBAAQgDAAgCgBgAC1GrIg1gdQgEgCgBgEQgBgEACgDIAAgBQACgDAEgBQAEgBADACIA1AdQAEACABAEQABAEgCADIAAAAQgCAEgEABIgDABIgEgCgAi4GhQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCIA0gdQADgCAEABQAEABACAEIABAAQABAEgBADQgBAEgEACIg0AdIgEACIgDgBgABMFxIg1gdQgEgCgBgEQgBgEACgDIAAgBQACgDAEgBQAEgBADACIA1AdQAEACABAEQABAEgCADIAAAAQgCAEgEABIgDABIgEgCgAhPFnQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCIA1gdQADgCAEABQAEABACAEIAAAAQACAEgBADQgBAEgEACIg1AdIgEACIgDgBgAklFhIgBgBQgFgBgCgDQgCgDABgEIAMg7QABgEADgDQADgCAEABIABAAQAEABACADQACADgBAFIgMA7QgBAEgDACQgDACgDAAIAAAAgAELFLQgDgCgBgEIgMg7QgBgFADgDQACgDAEgBIABAAQAEgBACACQAEADABAEIAMA7QABAEgDADQgCADgEABIgCABQgDAAgDgCgAkPDqIgBAAQgEgBgCgDQgCgDABgEIAMg7QABgEADgDQADgCAEABIABAAQAEABACADQACADgBAFIgMA7QgBAEgDACQgCABgDAAIgCAAgAD0DVQgDgDgBgEIgLg7QgBgEADgDQACgEAEAAIABAAQADgBAEACQADADABAEIALA7QABAEgDADQgCADgEABIAAAAIgCABQgDAAgDgCgAkVB7IgsgpQgDgDgBgEQAAgEADgDQADgDAEAAQAEgBADADIAsApQADADAAAEQABAEgDADIAAABQgDACgEABIgBAAQgDAAgDgDgAEQBvQgEgBgDgCQgDgEAAgEQAAgEADgDIArgpQADgDAEAAQAEAAADADIABABQACADAAADQAAAEgDADIgrAqQgDADgEAAIAAAAgAltApIgsgpQgDgCgBgEQAAgEADgDIABAAQACgDAEAAQAEgBADADIAsAoQADADABAEQAAAEgDADQgDADgEABIgBAAQgDAAgDgDgAFnAcQgEAAgCgCIgBgBQgDgDAAgEQAAgEADgDIAsgoQADgDAEAAQAEAAADADIABABQACADAAADQAAAEgDADIgsAoQgDADgEAAIAAAAgAnFgoIgsgpQgDgDAAgEQAAgEADgDQADgDAEAAQAEgBADADIArApQADADABAEQAAAEgDADIAAAAQgDADgEABIgBAAQgDAAgDgDgAG/g1QgEAAgDgDIAAAAQgDgDAAgEQAAgEADgDIAsgpIAAAAQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgsApQgDADgEAAIAAAAgAnohpQgDgDgBgDIAAgBQAAgEACgDQADgDAEgBIA8gHQAEAAADACQAEADAAAEQAAAEgCADQgDAEgEAAIg8AHIgBAAQgDAAgDgCgAG6hqIg7gHQgEAAgDgEQgCgDAAgEQAAgEAEgDQADgCAEAAIA7AHQAEABADADQACADAAAEIAAABQgBADgDADQgDACgDAAIgBAAgAlwh3QgDgDgBgEIAAAAQAAgEACgDQADgDAEgBIA8gIQAEAAADACQADADABAEQABAEgDADQgDADgEABIg8AIIgBAAQgDAAgDgCgAFEh5Ig7gHQgEAAgDgEQgCgDAAgEIAAAAQAAgEAEgDQADgCAEAAIA7AHQAEABADADQACADAAAEIAAABQgBAEgDACQgDACgDAAIgBAAgAj4iGQgDgDgBgEIAAAAQAAgEACgDQADgDAEgBIA8gIQAEAAADACQADADABAEQABAEgDADQgDADgEABIg8AIIgBAAQgDAAgDgCgADOiIIg8gHQgEAAgCgEQgDgDABgEQAAgEACgCIABgBQAEgCAEAAIA7AHQAEABADADQACADAAAEIAAABQgBAEgDACQgDACgDAAIgBAAgAiUiuQgEgCgCgDQgBgEACgEIAZg2QACgEAEgBQAEgCAEACQAEACABAEQABADgCAEIgZA2QgCAEgDACIgEAAIgEgBgAB0jDQgEgCgBgEIgag2QgCgDABgEQABgEAEgCIAAAAQAEgCAEACQAEABACAEIAaA2QABADgBAEQgBAEgEACIgBAAIgDABIgEAAgAhgkaIgBAAQgDgCgCgDQgBgEABgEIAag3QABgDAEgCQAEgBADACIABAAQADABACAEQABAEgBAEIgaA2QgBAEgEABIgDABIgEgBgABBkwQgEgBgCgEIgag2QgBgEABgEQABgEAEgBIABgBQADgBAEABQAEACABADIAbA2QABAEgBAEQgBAEgEACIgBAAIgEABIgDgBgAgumGIAAgBQgDgCgCgDQgBgEACgEIAYg3QACgDAEgCQAEgBAEACIAAAAIAAAAIAAgBIgDgHQgCgEABgEQABgEAEgBQAEgCAEABQADACACADIAYA2QACAEgBAEQgBAEgEACIAAAAQgEABgEgBQgEgBgCgEIgPgjIgBACIgYA3QgCADgEACIgDAAIgFAAg");
	this.shape.setTransform(0.8,-0.3553);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AE6HXQABgDgBgEQgBgEgEgCIg0gdQgEgCgEACQgDABgCADIgjgTQACgEgBgEQgCgEgDgCIg1gdQgEgCgEACQgDABgCADIgjgTQACgEgBgEQgCgEgDgCIg1gdQgEgCgEACQgDABgCADIgbgPIgHAFIAAgBQgCgDgEgBQgEgCgEACIg1AdQgDACgBAEQgCAEACAEIABAAIgkAUIAAgBQgCgDgEgBQgEgCgEACIg0AdQgDACgBAEQgCAEACAEIABAAIgkAUIAAgBQgCgDgEgBQgEgCgEACIg0AdQgDACgBAEQgCAEACAEIABAAIgYANIADgNQAEABADgDQADgCABgEIALg7QABgEgDgEQgCgDgDAAIAHgoQAEAAADgCQADgCABgEIAMg7QABgEgDgDQgCgEgEgBIAIgnQADAAAEgCQADgCABgEIAMg7QABgEgDgDQgCgEgEgBIAAAAIAEgWIgMgLIAAAAQADgDAAgEQAAgEgDgDIgsgpQgDgDgEAAQgEAAgDADIgegbQADgDAAgEQAAgEgDgDIgsgoQgDgDgEAAQgEAAgDADIgdgbQACgDAAgEQAAgEgDgDIgsgpQgDgDgEAAQgEAAgDADIgOgNIAUgDQAAAEADACQAEADAEAAIA8gHQAEgBACgDQADgDAAgFIAogFIAAABQAAAEAEADQADACAEAAIA8gIQAEgBADgDQACgEAAgEIAogFIAAABQAAAEAEADQADACAEAAIA8gIQAEgBADgDQACgEAAgEIAOgBIAJgVQAEABAEgBQAEgBACgEIAZg2QACgEgBgEQgCgEgEgBIARglIABABQAEABAEgBQADgBACgEIAZg3QACgDgCgEQgBgEgEgCIARgkIABAAQAEACAEgCQADgBACgEIAYg3IABgCIAQAjQACAEAEACQAEABADgCIABAAIAQAkIAAAAQgEACgBAEQgCAEACADIAaA2QACAEAEACQAEABADgCIARAkIAAABQgEABgBAEQgCAEACAEIAaA2QACAEAEABQAEABADgBIARAkQgCACgBADQAAAFACADQADADAEABIA7AHQAFAAADgDQADgCAAgDIAoAFQgBAEADADQACADAEABIA7AHQAFAAADgDQADgCABgDIAnAEQgBAFADADQACADAEABIA7AHQAFAAADgDQADgCABgEIAeAEIgrAoQgDADAAAEQAAAEACADIABABIgeAbIAAAAQgDgDgEAAQgEAAgDACIgsAoQgDADAAAEQAAAEACADIABABIgdAcIgBgBQgDgDgEAAQgEAAgDACIgrAqQgDADAAAEQAAAEACADIgbAaIAAACIAAAAQgEABgDADQgCAEABAEIALA7QABAEADACQADADAEgBIABAAIAIAnIgBAAQgEABgDAEQgCADABAEIAMA7QABAEADACQAEADAEgBIAHAnIAAAAQgEABgDAEQgCADABAEIAMA7QABAEADACQADADAEgBIAHAhgAABnZIABAAIAAABIgBgBg");
	this.shape_1.setTransform(-0.6625,0.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StarSlot, new cjs.Rectangle(-50.5,-49,101.4,97.3), null);


(lib.Star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AABnfICXFCIFhAsIkEDzIBDFeIk3isIk4CsIBDleIkEjzIFigsg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(2,1,1).p("AABnfICXFCIFhAsIkEDzIBDFeIk3isIk4CsIBDleIkEjzIFigsg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AABE0Ik3CsIBCleIkEjyIFigtICXlCICWFCIFiAtIkEDyIBDFeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AAAE0Ik2CsIBCleIkEjzIFigsICWlCICXFCIFiAsIkEDzIBDFeg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-49.5,112.5,107.5);


(lib.SquareSlot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AGkHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAEsHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAC0HqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAA8HqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAg7HqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAizHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAkrHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAmjHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnmHnQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZGrQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmFvQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZEzQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmD3QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZC7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmB/QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZBDQgDgDAAgEIAAg8QAAgDADgDQADgDAEAAQAEAAADADQADADAAADIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmAHQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAHZg0QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmhwQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZisQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmjoQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZkkQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmlgQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZmcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAFonVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgADwnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAB4nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAAAnVQgDAAgDgDQgDgDAAgEQAAgEADgDQADgDADAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAh3nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAjvnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAlnnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnfnVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AFyHgQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg7AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg7QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADADAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAADIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoIg8AAQgEAAgDADQgDADAAAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SquareSlot, new cjs.Rectangle(-49,-49,98,98), null);


(lib.Square = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnfnfIO/AAIAAO/Iu/AAg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF66FF").ss(2,1,1).p("AnfnfIO/AAIAAO/Iu/AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF66FF").s().p("AnfHgIAAu/IO/AAIAAO/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49,107,107);


(lib.RoundedSquareSlot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("ABlHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAgSHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAiKHqQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAjGHpQgggBgegIQgDgBgCgDQgDgEABgEIAAAAQACgEADgCQAEgCADABQAcAHAeABQAEABADADQADADgBAEQAAAEgDADQgDADgDAAIgBgBgADYHmQgDgDgBgEIAAgBQAAgDACgEQADgDAEgBQAegDAbgJQAEgCADACQAEACABADIABABQABAEgCADQgCAEgEACQgdAJgfAEIgCABQgDAAgDgCgAk+HKQgagOgZgTQgEgDAAgEQAAgEACgDQADgEAEAAQAEAAADACQAXATAZANQAEACABAEQACADgCADIAAABQgCAEgEABIgDABIgFgCgAFMHAQgEgBgCgEIAAAAQgCgDABgEQABgEADgCQAYgPAWgVQADgDAEABQAEAAADADQADADAAAEQAAAEgDADQgXAVgaARQgDABgCAAIgDAAgAmXGCQgEgBgDgDQgVgYgPgZQgCgEABgEQABgEAEgCIAAAAQAEgCADABQAFABACAEQAOAYATAWQADADgBAEQAAAEgDADIAAAAQgDADgEAAIAAAAgAGiFsIgBAAQgDgDgBgDQAAgFACgDQASgYALgaQACgDAEgCQAEgBADABIABABQADABACAEQABAEgBADQgNAdgTAZQgCADgEABIgBAAQgEAAgCgCgAnWEaQgDgCgCgEQgJgegEggQAAgEADgDQACgEAEAAIABAAQAEAAADACQADADAAAEQADAeAKAcQABAEgCAEQgCADgEABIAAAAIgDABIgFgBgAHWECQgEgBgCgDQgCgEABgEQAGgbABgeQAAgEADgDQADgDAEAAIAAAAQAEAAADADQADADAAAEQgBAggHAeQgBAEgDACQgDACgCAAIgDgBgAnmCgQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZCIQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnmAoQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAHZAQQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAnmhPQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAHZhnQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAnfjEIAAAAQgEAAgDgDQgCgDAAgEQADggAIgdQABgEAEgCQADgCAEACQAEABACADQACAEgBAEQgIAbgCAdQAAAEgEADQgCADgEAAIgBgBgAHWjfQgDgCgBgEQgFgdgKgbQgBgDABgEQACgEAEgBIAAAAQAEgCADACQAEACACAEQALAcAFAfQAAAEgCADQgCAEgEAAIgBAAIgBAAQgDAAgDgCgAnCk2QgDgCgBgEQgCgEACgEQAPgaAUgZQACgDAEAAQAFAAADACQADADABAEQAAAEgDAEQgTAWgNAZQgCADgEACIgDAAIgFgBgAGulMQgEgBgCgDQgPgYgVgVQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADQAWAXARAZQACADgBAEQgBAFgDACQgDABgCAAIgDAAgAlxmSQgEAAgDgDIAAgBQgCgDAAgEQAAgEAEgDQAYgUAagOQAEgCAEABQAEACACADQACAEgBAEQgCAEgDACQgZANgXATQgCACgEAAIgBAAgAFZmiQgYgRgcgMQgDgBgCgEQgBgEABgEIAAAAQACgEAEgBQAEgCAEACQAcAMAaATQAEACAAAEQABAEgDAEQgCADgEABIgCAAQgDAAgCgCgAkNnLQgDgCgBgEIAAAAQgBgEACgEQACgEAEgBQAegIAggCQAEAAADACQAEADAAAEIAAABQAAADgDAEQgCADgEAAQgfACgcAIIgCAAIgGgBgADunQQgcgFgeAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAQAgAAAeAGQAEAAACAEQADADgBAEIAAABQgBADgDADQgDABgDAAIgCAAgAA8nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAg7nVQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAiznVQgEAAgDgDQgDgDAAgEIAAAAQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(0.0002,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("ACrHgQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg7AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgfAAIgJAAQABgEgDgDQgDgDgEgBQgegBgbgHQgEgBgEACQgDACgCAEQgTgGgSgJQACgDgCgDQgBgEgDgCQgagNgXgTQgDgCgEAAQgEAAgDAEIgUgTIgJgJQADgDAAgEQABgEgDgDQgTgWgOgYQgCgEgFgBQgDgBgEACQgJgSgHgTQAEgBACgDQACgEgBgEQgKgcgDgeQAAgEgDgDQgDgCgEAAIgBgXIAAgRQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg7QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgXIAAgRQAEABAEgDQADgDAAgEQACgdAIgbQABgEgCgEQgCgDgEgBQAGgTAJgSQAEACAEgBQAEgCACgDQANgZATgWQADgEAAgEQgBgEgDgDIAOgPIAPgOQADADAEAAQAEAAADgCQAXgTAZgNQADgCACgEQABgEgCgEQASgJATgGQABAEADACQAEACAEgBQAcgIAfgCQAEAAACgDQADgEAAgDIAEgBQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA7AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAQAeAAAcAFQAEABAEgCQADgDABgDQAUAEASAHQgBAEABAEQACAEAEABQAbAMAYARQADACAEAAQAEgBACgDQAQALAOAOQgDADAAAEQAAAEADADQAVAVAPAYQACADAEABQAFABADgCQALARAIATQgEABgCAEQgBAEABADQAKAbAFAdQABAEADACQAEADADgBQADAUAAAVQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA7QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEQgBAegGAbQgBAEACAEQACADAEABQgFATgHATIgBgBQgDgBgEABQgEACgCADQgLAagSAYQgCADAAAFQABADADADQgLAOgOAOIgDADQgDgDgEAAQgEgBgDADQgWAVgYAPQgDACgBAEQgBAEACADQgRAKgTAHQgBgDgEgCQgDgCgEACQgbAJgeADQgEABgDADQgCAEABADQgQACgRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RoundedSquareSlot, new cjs.Rectangle(-49,-49,98,98), null);


(lib.RoundedSquare = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiznfIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAIlnAAQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("AiznfIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAIlnAAQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AizHgQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AizHgQh8AAhYhYQhYhYAAh8IAAlnQAAh8BYhYQBYhYB8AAIFnAAQB8AABYBYQBYBYAAB8IAAFnQAAB8hYBYQhYBYh8AAg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49.5,107.5,107.5);


(lib.RestoreIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEC/IgEgDIgBgFIgDgyIABgFIADgEIAFgCIAZgBQAtgDAhghQAkgjAAgyQAAgygkgkIgCgCQgggfgsgDIAAAAIgIAAQgxAAgkAkIAAABIgGAGIAvANQAEABACADQACAEgBAEQgBAEgEACIhwBAQgEACgEgBQgEgBgCgEIhBhwQgCgDABgEQABgEAEgCQADgCAEABIA6APQAMgTASgRIAAAAQA3g4BPgBIAKAAIABAAIABAAQBIAFA0A0QA4A4AABPQAABPg4A3IgBABQgzA0hIAEIgZABIgBABIgEgCgACgCAIAAABIABgCg");
	this.shape.setTransform(-0.006,0.0014);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-19.2,42.7,38.5);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFDF06").ss(10,1,0,3).p("A2hoRMAtDAAAQBWAAA9A9QA9A9AABWIAAKDQAABWg9A9Qg9A9hWAAMgtDAAAQhWAAg9g9Qg9g9AAhWIAAqDQAAhWA9g9QA9g9BWAAg");
	this.shape.setTransform(165.025,53.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjSmlIGlGlImlGmg");
	this.shape_1.setTransform(173.075,52.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FF9814","#FFFF00"],[0,1],0,0,0,0,0,168.7).s().p("A2hISQhWAAg9g9Qg9g9AAhWIAAqDQAAhWA9g9QA9g9BWAAMAtDAAAQBWAAA9A9QA9A9AABWIAAKDQAABWg9A9Qg9A9hWAAgAiBGdIGlmmImmmmg");
	this.shape_2.setTransform(165.025,53.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,340.1,116.1);


(lib.CircleSlot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgTHqQgEgBgDgDQgCgDAAgEIAAAAQAAgEADgDQADgDAEABIASAAIAmgBQAEgBADADQADADABAEQAAAEgDADQgCADgEABQgUABgUAAIAAAAIgTAAgAhPHkQgegFgdgIQgEgBgCgEQgCgDABgEQABgEADgCQAEgCAEABQAcAIAdAEQAEABACADQADADgBAEQAAAFgEACQgDACgDAAIgBAAgABdHfQgEgCAAgEIAAAAQgBgEACgEQACgDAEgBQAdgGAbgJQAEgBAEACQAEABABAEIAAAAQACAEgCAEQgCAEgEABQgdAKgeAGIgCAAQgDAAgCgCgAjEHCQgcgMgbgQQgDgCgBgEQgBgEACgEIABAAQACgDAEgBQADgBAEACQAZAPAbAMQAEABABAEQACAEgCAEQgCAEgEABIgDABIgEgBgADQG6QgEgBgCgEIAAAAQgCgEACgEQABgEAEgBQAagNAYgRQAEgCAEABQAEABACADIAAAAQACADAAAEQgBAEgEADQgZARgbAOIgFABIgDgBgAktGDQgWgTgWgVQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAVAVAWARQADADAAAEQABAEgDADIAAAAQgDAEgEAAIgBAAQgDAAgDgCgAE2F4QgFAAgCgDQgDgEAAgEQABgEADgDIAcgaIAAgBIAKgJQADgDAEAAQAEgBAEADQADADAAAEQAAAEgDADIgLAMIAAgBIgdAcQgDACgEAAIAAAAgAl7ExQgEAAgDgDQgSgYgQgaQgCgDAAgEQABgEAEgCQAEgDAEABQAEABACAEQAPAYASAXQADAEgBAEQAAAEgDACQgDADgEAAIgBgBgAF/EiIAAgBQgDgCgBgEQAAgEACgDQASgYAOgaQACgDAEgBQAEgCAEACQADACABAEQABAEgBAEQgPAagTAZQgCAEgEABIgCAAQgDAAgDgCgAm7DMQgEgCgBgDQgNgcgJgeQgBgEACgEQACgDAEgBQAEgCAEACQADACABAEQAJAcAMAbQABAEgBAEQgBAEgEACIAAAAIgEAAIgEAAgAG8C6QgEgCgBgDQgCgEACgEQAKgcAHgcQABgEADgCQAEgDAEABIAAAAQAEABACAEQACADAAAEQgIAfgLAcQgBAEgEACIgEABIgEgBgAnfBXQgEgCAAgEQgFgegBgeQAAgEADgDQADgDAEAAIAAAAQAEgBADADQADADAAAEQABAeAFAcQAAAEgCAEQgDADgEAAIgBABQgDAAgDgDgAHbBFIAAAAQgEAAgDgDQgCgEAAgEQAEgcAAgeIAAAAIgBgVQAAgFADgDQADgDAEAAQAEAAADADQADACAAAFIABAWIAAAAQAAAfgEAeQAAAEgDACQgDADgEAAIgBgBgAnegfIAAAAQgFAAgDgDQgCgEAAgEQADgeAGgeQABgEADgCQAEgDAEABQAEABACAEQACADAAAEQgGAcgDAeQAAAEgDADQgDACgDAAIgBAAgAHThKQgDgCAAgFQgFgegJgcQgBgEABgEQACgDAEgBQAEgCAEACQAEACABAEQAJAeAFAgQABADgDAEQgCADgEABIgCAAQgDAAgDgCgAnJiUQgEgBgCgEQgCgEACgEQAJgdAOgcQACgDAEgBQAEgCAEACIAAAAQADACACAEQABAEgCADQgNAbgJAcQgCAEgDACIgFABIgDgBgAGyi9QgEgBgBgEQgNgbgPgZQgCgDABgEQAAgEAEgCIAAgBQAEgCAEABQAEABACAEQAQAaANAbQACAEgCAEQgBAEgEABIgEACIgEgBgAmWkAQgDgCgBgFQgBgEADgDQAQgaAVgXQADgEAEAAQAEAAADADIABAAQACACABAEQAAAEgDADQgUAYgQAYQgCADgEABIgCAAQgDAAgDgBgAF1kiQgEgBgDgDQgQgUgSgSIgGgGQgDgDAAgEQAAgEADgDIAAAAQADgDAEAAQAEAAADADIAGAGQATATARAUQACADAAAFQgBADgDADIAAAAQgDADgDAAIgBAAgAlBlaQgEgBgDgCIAAgBQgDgDAAgEQAAgEAEgDQAWgVAZgRQADgDAFABQAEABACADIAAABQACADAAAEQgBAEgEACQgXARgWAUQgDADgEAAIAAAAgAEbl3QgYgTgZgOQgEgDgBgEQgBgDACgEIAAAAQACgEAEgBQAEgBAEADQAaAPAZATQADACABAEQAAAEgCADIgBABQgCADgEABIgBAAQgEAAgCgCgAjimgQgEgBgCgDIAAgBQgCgDABgEQABgEAEgCQAbgPAdgKQAEgCADACQAEACABAEIAAAAQACADgCAEQgBAEgEABQgcALgZANIgFABIgDAAgAC0mzQgagLgdgHQgEgBgCgEQgCgEABgDQABgEAEgCQADgDAEABQAeAIAcAMQAEABACAEQABAEgBAEIAAAAQgCAEgEABIgEABIgEgBgAh1nLQgEgCAAgDIAAgBQgBgEACgDQACgEAEgBQAegGAggEQAEAAADADQAEACAAAEQABAFgDADQgDADgEABQgfACgcAHIgDAAQgDAAgCgCgABDnQQgdgEgegBQgEAAgDgDQgBgDAAgEIAAAAQAAgEACgDQADgDAEAAQAfAAAeAFQAEAAACAEQADADgBAEQAAAEgEADQgCACgEAAIgBAAg");
	this.shape.setTransform(0.0248,-0.0002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AhDHcQABgEgDgEQgCgDgFgBQgcgEgcgIQgEgBgEACQgDACgBAEQgUgGgSgIQABgDgBgEQgCgEgEgCQgagMgZgPQgEgCgEABQgEABgCADQgRgKgQgNQACgDAAgEQAAgEgEgCQgVgSgVgVQgDgDgEAAQgEAAgDADIgbgdQAEgDAAgEQAAgEgCgDQgSgXgQgZQgCgDgEgBQgEgBgDACQgKgRgJgSIABAAQADgCACgEQABgEgCgDQgMgbgIgcQgBgEgEgCQgDgCgEABQgFgTgEgUQAEgBACgDQADgEgBgEQgEgcgBgdQAAgFgDgCQgDgDgEAAIAAAAIAAgLIABgfQADABAEgDQADgDAAgEQACgdAGgdQABgEgCgDQgCgEgFAAQAFgUAGgTQAEACADgCQAEgCACgEQAJgcANgaQACgEgCgEQgBgEgDgBQAJgSALgRQADACAFAAQAEgBACgEQAQgYAUgXQADgDAAgEQgBgEgDgDIASgTIALgKQADADADAAQAFAAADgDQAWgUAXgQQAEgDAAgEQABgEgCgDQARgLARgKQACADAEABQAEACADgCQAagOAcgKQADgCACgEQACgDgCgEQATgGATgFQABAEAEACQADACAEgBQAdgGAfgDQAEgBADgDQACgDAAgEIAogCQAAAEACADQADADAEAAQAeABAdAEQAEAAADgCQADgDABgEQAUADAUAFQgBAEACADQACAEAEABQAcAHAbAMQAEABAEgBQADgCACgEQATAJASAKQgCADABAEQABAEADACQAZAPAYASQAEACAEAAQAEgBACgDIAeAaQgDACAAAEQAAAEADADIAGAGQASATAQATQACADAEABQAFAAADgCIAAgBQANARALARIAAAAQgEACgBAEQgBAEADAEQAPAZANAaQABAEAEABQAEACAEgCQAIATAGATQgEABgCAEQgCADACAEQAIAdAFAeQABAEADACQAEADAEgBQACAUABAUQgEABgCADQgDADAAAEIAAAVIAAABQAAAdgDAdQAAAEACADQADADAEABIAAAAQgDAUgEAUIAAAAQgEgBgEACQgDACgBAEQgHAdgLAbQgBAEABAEQACAEAEABQgIATgKASQgDgCgEABQgEABgCAEQgOAZgSAYQgDADABAEQABAEADADQgNAQgOAPQgDgCgEAAQgEAAgDADIgKAKIAAAAIgcAbQgEADAAAEQAAAEADADQgQANgQALQgDgDgEgBQgEgBgDADQgZAQgaANQgDACgCAEQgBADACAEQgSAJgTAGQgBgDgEgCQgEgCgEABQgbAKgdAGQgEAAgCAEQgCADAAAEQgTADgVACQAAgEgDgDQgDgCgEAAIgmABIgSAAQgEAAgDACQgDADAAAEIAAABQgVgBgTgDg");
	this.shape_1.setTransform(-0.05,-0.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircleSlot, new cjs.Rectangle(-48.9,-49,97.9,98), null);


(lib.Circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AHgAAQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHQAAjGCMiNQCNiMDGAAQDHAACNCMQCMCNAADGg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// icon
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF33").ss(2,1,1).p("AHgAAQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHQAAjGCMiNQCNiMDGAAQDHAACNCMQCMCNAADGg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF33").s().p("AlSFTQiNiNAAjGQAAjGCNiNQCMiMDGAAQDHAACMCMQCNCNAADGQAADGiNCNQiMCNjHAAQjGAAiMiNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AlSFTQiNiNAAjGQAAjGCNiNQCMiMDGAAQDHAACMCMQCNCNAADGQAADGiNCNQiMCNjHAAQjGAAiMiNg");
	this.shape_3.setTransform(-10,10);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-49.5,107.5,107.5);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.puzzlehard();
	this.instance.setTransform(0,0,0.9514,0.8546);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,974.3,656.3);


(lib.Slots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slots
	this.star = new lib.StarSlot();
	this.star.name = "star";
	this.star.setTransform(773.6,370);

	this.roundedSquare = new lib.RoundedSquareSlot();
	this.roundedSquare.name = "roundedSquare";
	this.roundedSquare.setTransform(624.3,370);

	this.triangle = new lib.TriangleSlot();
	this.triangle.name = "triangle";
	this.triangle.setTransform(477.5,370);

	this.circle = new lib.CircleSlot();
	this.circle.name = "circle";
	this.circle.setTransform(330.7,370);

	this.square = new lib.SquareSlot();
	this.square.name = "square";
	this.square.setTransform(183.9,370);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.square},{t:this.circle},{t:this.triangle},{t:this.roundedSquare},{t:this.star}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(134.9,321,689.6,98), null);


(lib.Restart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.instance = new lib.RestoreIcon("single",0);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({rotation:-15},0).to({_off:true},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AjkDlIAAnJIHJAAIAAHJg");
	this.shape.setTransform(-0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-22.9,46.2,45.9);


(lib.Pieces = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pieces
	this.star = new lib.Star();
	this.star.name = "star";
	this.star.setTransform(760.7,154.5);
	new cjs.ButtonHelper(this.star, 0, 1, 2);

	this.circle = new lib.Circle();
	this.circle.name = "circle";
	this.circle.setTransform(617.85,201.5);
	new cjs.ButtonHelper(this.circle, 0, 1, 2);

	this.square = new lib.Square();
	this.square.name = "square";
	this.square.setTransform(477.5,154.5);
	new cjs.ButtonHelper(this.square, 0, 1, 2);

	this.triangle = new lib.Triangle();
	this.triangle.name = "triangle";
	this.triangle.setTransform(337.15,201.5);
	new cjs.ButtonHelper(this.triangle, 0, 1, 2);

	this.roundedSquare = new lib.RoundedSquare();
	this.roundedSquare.name = "roundedSquare";
	this.roundedSquare.setTransform(196.8,154.5);
	new cjs.ButtonHelper(this.roundedSquare, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.roundedSquare},{t:this.triangle},{t:this.square},{t:this.circle},{t:this.star}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(138.8,105,673.9000000000001,154.5), null);


// stage content:
(lib.matchshapegame1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.p1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_1 = function() {
		var root = this;
		var pieces = root.pieces;
		var slots = root.slots;
		var restart = root.restart;
		var winMessage = root.winMessage;
		var positions = [];
		
		root.setup = function()
		{
			document.body.style.backgroundColor = lib.properties.color;
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			root.drawStart = stage.on("drawstart", root.start, null, true);
		};
		
		root.start = function(e)
		{
			stage.off("drawstart", root.drawStart);
			winMessage.originalY = winMessage.y;
			
			pieces.children.forEach(function(child, index)
			{
				positions[index] = {x:child.x, y:child.y};
			});
			
			slots.children.forEach(function(child, index)
			{
				child.mouseChildren = false;
			});
		
			root.restartHandler(null);	
			restart.on("click", root.restartHandler);
			pieces.on("mousedown", root.mouseDownHandler);	
		};
		
		root.restartHandler = function(e)
		{
			pieces.count = 0;
			winMessage.text = "";
			root.shuffle();
			
		};
		
		root.mouseDownHandler = function(e)
		{
			e.currentTarget.setChildIndex(e.target, e.currentTarget.children.length - 1);
			e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x;
			e.target.offsetY = (e.stageY / stage.scaleY) - e.target.y;
			pieces.target = e.target;
			root.stageMouseMove = stage.on("stagemousemove", root.stageMouseMoveHandler);
			root.stageMouseUp = stage.on("stagemouseup", root.stageMouseUpHandler);
		};
		
		root.stageMouseMoveHandler = function(e)
		{
			if (pieces.target)
			{
				pieces.target.x = (e.stageX / stage.scaleX) - pieces.target.offsetX;
				pieces.target.y = (e.stageY / stage.scaleY) - pieces.target.offsetY;
			}	
		};
		
		root.stageMouseUpHandler = function(e)
		{
			stage.off("stagemousemove", root.stageMouseMove);
			stage.off("stagemouseup", root.stageMouseUp);
			
			if (pieces.target)
			{
				root.check();
				pieces.target = null;
			}	
		};
		
		root.shuffle = function()
		{	
			positions.sort(function(a, b)
			{
				return 0.5 - Math.random();
			});
			
			pieces.children.forEach(function(child, index)
			{
				child.originalX = positions[index].x;
				child.originalY = positions[index].y;		
				child.mouseEnabled = true;		
				createjs.Tween.get(child).to({x:child.originalX, y:child.originalY}, 350, createjs.Ease.backInOut);
			});
		};
		
		
		root.check = function()
		{
			var spot = slots.getObjectUnderPoint(pieces.target.x, pieces.target.y);
			
			if (!spot)
			{
				root.onMiss();
				return;
			}
			
			root.slot = spot.parent;
				
			if (root.slot)
			{		
				if (pieces.target.name === root.slot.name)
				{
					root.onMatch();
					
					if (pieces.count === pieces.children.length)
						root.onWin();
				}
				else
					root.onMiss();
				
				root.slot = null;
			}
			else
				root.onMiss();
		};
		
		root.onMatch = function()
		{	
			pieces.target.mouseEnabled = false;
			pieces.count++;
			createjs.Tween.get(pieces.target).to({x:root.slot.x, y:root.slot.y}, 350, createjs.Ease.backInOut);
		};
		
		root.onWin = function()
		{
			winMessage.text = "YOU WIN!";
			winMessage.alpha = 0;
			winMessage.y = winMessage.originalY + 60;
			createjs.Tween.get(winMessage).to({alpha:1, y:winMessage.originalY}, 500, createjs.Ease.backInOut);
		};
		
		root.onMiss = function()
		{	
			createjs.Tween.get(pieces.target).to({x:pieces.target.originalX, y:pieces.target.originalY}, 350, createjs.Ease.backInOut);
		};
		
		root.setup();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4));

	// restartButton
	this.restart = new lib.Restart();
	this.restart.name = "restart";
	this.restart.setTransform(915.85,37.3);
	this.restart._off = true;
	new cjs.ButtonHelper(this.restart, 0, 1, 2, false, new lib.Restart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.restart).wait(1).to({_off:false},0).wait(4));

	// pieces
	this.pieces = new lib.Pieces();
	this.pieces.name = "pieces";
	this.pieces.setTransform(-98.2,-33.65,1.2046,1.2046);
	this.pieces._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pieces).wait(1).to({_off:false},0).wait(4));

	// div
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.098)").ss(1,1,1).p("EhGdAAAMCM7AAA");
	this.shape.setTransform(480.025,270);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(4));

	// slots
	this.slots = new lib.Slots();
	this.slots.name = "slots";
	this.slots.setTransform(-98.2,-33.65,1.2046,1.2046);
	this.slots._off = true;

	this.timeline.addTween(cjs.Tween.get(this.slots).wait(1).to({_off:false},0).wait(4));

	// win
	this.winMessage = new cjs.Text("", "96px 'Arial'", "#FFFFFF");
	this.winMessage.name = "winMessage";
	this.winMessage.textAlign = "center";
	this.winMessage.lineHeight = 109;
	this.winMessage.lineWidth = 931;
	this.winMessage.parent = this;
	this.winMessage.setTransform(480,134.25);
	this.winMessage._off = true;

	this.timeline.addTween(cjs.Tween.get(this.winMessage).wait(1).to({_off:false},0).wait(4));

	// play_idn
	this.p1 = new lib.play();
	this.p1.name = "p1";
	this.p1.setTransform(477.6,435.1,1,1,0,0,0,165,53);
	new cjs.ButtonHelper(this.p1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.p1).to({_off:true},1).wait(4));

	// TEXT
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(153.35,47.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// bg
	this.instance_1 = new lib.bg("synched",0);
	this.instance_1.setTransform(481.2,269.2,1,1,0,0,0,487.2,328.2);
	this.instance_1.alpha = 0.1484;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181E1C").s().p("EhMGAs3MAAAhZtMCYNAAAMAAABZtg");
	this.shape_1.setTransform(477.125,271.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(5));

	// burung
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("ABfiWQAjA/AJA1QADAXgCAUIhiguAhWhAQAKAPAHAPQAaAzgFAqQgEAtg/AvAgwA7IhcAoAgwA7IhNglACMAJQgFA7hRA7ACMAJIh1A1");
	this.shape_2.setTransform(595.7864,242.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3AF26").s().p("AJIIEIhcBcIguhwIhoBVIAAhoIimAAIAAhUIihAAIAAhRIiOAAIA2hNIi1AAIBgg/IjIgxIBZgzIj2AAICOhjIjvgxIC1hNIkRg+ICWgqIjqhzIC4AAIjbhpIDXAAIjIidIEPAkQKeMmIkA2QAdAXAgAVQAgAUAjAQQAsCvhQBuIhNhUIhJBcg");
	this.shape_3.setTransform(86.7306,103.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B5915").s().p("AhBAfIgBgIQgLhHBKhSQAmAGAaAKQgzBNA6B8IAAABIhEArQg2gwgLg0g");
	this.shape_4.setTransform(112.0598,74.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A0007").s().p("Ah7AxIAAgBQg6h8AzhNQBsAohlChQDYAkgUjGQBLBKAGAtIgEAbQgEAUgIAQQgmBSh6AEQg8gLgpheg");
	this.shape_5.setTransform(131.2569,77.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEF5EA").s().p("AhnCXQBliihsgoQgagKgngFQAYgnAcgVQBnhQCyCMQAWBngGBGQgGgthLhKQARCoiYAAQgcAAghgFgAAThOQgHACgGAGQgFAHgBAHQAAAIADAFIAHAIQAGAEAJAAQAIAAAGgFQAGgGACgHQACgIgEgIQgDgGgHgEQgGgDgGAAIgEAAg");
	this.shape_6.setTransform(129.2643,67.7136);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD147").s().p("ApgmuINGBwQgcAWgYAmQhKBSALBIIABAIQALA0A3AvIBEgqQApBdA8ALQBoDxCaB9Qokg2qdsng");
	this.shape_7.setTransform(93.875,86.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D3E55").s().p("AC7CKIjmDfICdksIjyC9IBhieIBficIiXBRIh2A/IBbhjICHiWIjbAxIDFiJIkGAAIDMh7IjjAAIEOhkQA/E2DwFxQhbBYA4AvIi4CTg");
	this.shape_8.setTransform(174.975,77.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#52CCEB").s().p("ADDH/QklBVB6lAQg4gwBahXQjvlxhAk3QEjhZDISWQgcgqgXAHg");
	this.shape_9.setTransform(197.825,83.0583);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#351600").s().p("Ahhg7QA9AYAYAbQAGgkAdg3QCtArhzBqQg6ANgXgSQgGAVgYAXQgfALgVAAQhQAABBifg");
	this.shape_10.setTransform(199.0047,152.9684);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E98F10").s().p("AAoGVIg/hPIBLEWQB+HKj8qmIhYjrQAYgXAHgVQAXASA6gNQByhrisgqQgeA2gGAkQgYgbg9gYQh/gxhZgoQgjgQgggUQgggVgdgXQiah9hojxQB7gEAmhSQAHgQAFgUIAEgbQAGhHgWhoQBRASASAXQBgAzgMAzIhaBkIB1hAIA4BLIhhCeIDzi8IieEsIDnjgIh3FXIC5iSQh7FAElhVIAzAjIAAAAIIbF4QEBCzkQhyInKjzIIyG3QDYDJjwiGIlWi+IDSEaQCwDtjkjQQixiikRkzID/G0QBdCggQAAQgaAAlSnHg");
	this.shape_11.setTransform(212.2283,146.9594);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("Ah1BoQhfjqh3jKQgvhQgyhLIjQmwQFkHJDQHhQBQC8A6DAQA6C7AjDAQCeg1B7AIQByAHBTA9QhCgfg/AYQhfAOgSADQiSAch8BRQhdnAiVlwg");
	this.shape_12.setTransform(622.925,98.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#593A27").s().p("Ag4A+QhHh7CjgyQBHBrgwB0QgshMhHAag");
	this.shape_13.setTransform(688.4077,196.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FEF5").s().p("AhtCQIgBAAQhQiCCTiTQA+gYBCAfQAgAfAWAhQijAyBGB7IhsAhgAgUhUQgHABgGAHQgFAGgBAIQAAAIAEAFIAGAHQAGAFAJAAQAIAAAGgGQAFgFACgIQACgIgEgHQgDgHgGgEQgFgDgGAAIgFABg");
	this.shape_14.setTransform(678.1008,191.1137);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DE9741").s().p("AgFh5QAQgDBfgOQiSCTBQCCQkKhZDdirg");
	this.shape_15.setTransform(663.0708,191.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5D547").s().p("AlNMVIACgCQCRh1CZiVQBIhaBJALQizk5BrviQB3DLBfDrQiMKLDpCXQCgBhj3BYQk5BvlkDDIBMhNg");
	this.shape_16.setTransform(585.7358,151.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F18A07").s().p("AkCGdQFjjCE6hvQD3hYighgQjpiXCMqNQCWFwBdHAQB8hRCSgcQjdCsELBYIABAAIpqDcImSCQQoYFhl1BNQFkh8FelYg");
	this.shape_17.setTransform(570.625,196.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DF9E08").s().p("ABJNXIhuAAIBIhRIhfAAIAyhNIhJAAIBJhFIhkAAIBQhcIhYAAIBohoIiLAAIB7hJIh7hCIBohVIhogmIB0grIhwh3ICDAAIhchMIBuAAIiNihICKBFIiZkhICKCPIiSkRIBJA5Ih/j6ICKB/IhnkZIDpE4QAzBLAvBQQhsPiCzE5QhJgLhJBag");
	this.shape_18.setTransform(574.975,110.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#191F4F").s().p("AzPVwIBCg5IiqhFIC5AAQG7AAIbmxIhMBMQleFYlkB8QhmAUhaAAQguAAgrgFgAHQnVIBlAFIgiiPIBvAqIgqiHIBkAAIgyhcIB/AAIg9hgICtBFIh0jPIDcCKIh8kGIDJDFIhok4ICpDfIhNlHICSEXIgykyQCUDeAiD5QoIFOjVH2Qg6jAhRi8g");
	this.shape_19.setTransform(569.225,147.2445);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1AACC4").s().p("AlyDkQDUn1IHlNQBHIMmuKFQh5gIieA0Qgki/g5i8g");
	this.shape_20.setTransform(666.6781,115.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9D1500").s().p("AlfAxQBuhYCBgQQDVgcD7BHIguBMQlfhTkyBEg");
	this.shape_21.setTransform(914.2,131.5439);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#110502").s().p("AAuhlQB8AOg9BVQh/APhuBZQBCiJBshCg");
	this.shape_22.setTransform(891.928,126.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F29A0D").s().p("AjIA6QA9hUh9gOQDFh3FMBzIAACRQj8hHjVAcg");
	this.shape_23.setTransform(922.95,120.1181);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4E3C8").s().p("AgeGhICKhQIA2AAIgPBkQhfhKhxBpgADbG1IBbh/IBHAAIAACDQgcimiGCigAk6hDQAYiPhaghIAuhOIAAiRQEIBWhjBlQiMCOAoCbQgZglgUgwgAkFl3QgIACgFAGQgGAHAAAIQAAAHAEAGIAFAHQAHAFAIgBQAJABAGgGQAFgFADgIQABgIgDgHQgDgHgIgEQgFgDgGAAIgEAAg");
	this.shape_24.setTransform(982.9,162.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1A281F").s().p("AERDWQgTBGiHhGQAtBAgtAVIhHAAIhGAAIAAhCQgVAZg4gZQAoBDgoAaIg2AAQhegLACgzIAAhVQi2gMhoigQgnicCLiNQBjhlkIhXQEngMgNDzQGpBDC/FSQDdCKA+B8QAlAzhQAIg");
	this.shape_25.setTransform(1009.0742,163.5194);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AUbJ5IgGgHQgEgGAAgHQABgIAFgHQAGgGAHgCQAIgBAIAEQAHAEADAGQAEAIgCAIQgCAHgGAGQgGAFgIAAIgCAAQgHAAgGgEgEBARAA3IgGgHQgDgFAAgIQAAgIAGgGQAFgHAIgBQAIgCAHAEQAIAEADAHQADAHgCAIQgCAIgFAFQgHAGgIAAIgBAAQgIAAgGgFgEhAtgJSIgGgHQgDgFAAgIQAAgIAGgGQAFgHAIgBQAHgCAIAEQAHAEAEAHQADAHgCAIQgCAIgGAFQgGAGgIAAQgJAAgGgFg");
	this.shape_26.setTransform(544.4114,123.5568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},1).wait(4));

	// daun
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(-112.95,-33.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(4));

	// tanah
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AlGaRQgnhjgPhuQgIhAAAhDQAAl9ENkOQANgNAOgNQDQjCESgnAjR6QIAiBN");
	this.shape_27.setTransform(1003.6,600.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#08390F").s().p("EBK4AQnQiMiMhDiqQgnhjgOhtQgJhAAAhEQAAl9ENkMIAcgaQDQjDESgmQBEgKBIAAQF9AAENENQEOEMAAF9QAAF9kOENQkNEOl9AAQl8AAkOkOgEhjZALxIDN9WIWZC6IHiBEIP9CCMA9PAIQIEZApIHOA8IVqDBIAAg4IBzAMIAAteINIn7IChCnICaRrIGyJDQAOBtAnBjg");
	this.shape_28.setTransform(512.35,693.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#88B137").s().p("EA0WAT5QqShEqUhGIsrhkMg9OgIRIv9iBInihEI2Zi7Ii+gZICvgUIivgYIDcgaIQkhzMCJ5gQpISXiDIFwf0QkSAnjRDCIo0C4IifxrIjDjBIh3BIItHH6IAANeIh0gMg");
	this.shape_29.setTransform(460.1,568.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#81D681").s().p("EhOEgHEUBRMAAkBROgEVIAhBNIvQCBMiJ5AQoIwkB1g");
	this.shape_30.setTransform(442.825,502.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).to({state:[]},1).wait(4));

	// silhouette
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A1E8A4").s().p("EAqeAqJIihyzIhthgIgXBgIhCisIAagQIgmhJIgzA4Igmi9Qh9BrgnC8QgLAygFA4IgDAuIjQhYIDYChIANBJQAUB8gCBYQgBBCgNAvQgKAlgSAYIkuiYIgvAcIFyDMQASB6gnBJIoDllIiKq4QExlUJLBjQmdlBn+AjIgJiHIhEB9QlLg3goBUQwgj3MrmeIJ5kAIB2A5Ih4E/ICkj2IBdAkIh9EuIC6j7QhAjJAiilINPn3IALCWIkIBOIEXgRIgICMIi7ATQAIBkC+gGQFerkL8AtQgsgiDxBaIkvLAImzjPIFkD+Ij6DbIj0h7IC2CuQiTAdhwBHQj3CfhNFyQFspxNRDfIhRDoICWjgQEdBSCgCcQhoAlg2CVIDXiAQDxB+hVgGQgkBzhyBcQgPA4hPBCIgnAcQhBAuhMAoIhJkhIgEE6Qg9gxiYAiIAnkXIhmD2QgtgDgkgLQgegJgXgMQgpgWgcgjIAwjxIhZDDIkmhmIAikSIhtEMQhJgYhDgOQgfgGgegFQjYghiOBUIBuApIgpAYIAsA0ICQA+IhUAlIANB3ICsCfQhRgihRABIgKBjIByOvIA3EaQADCjgoAAQgmAAhNiUgEAlQABPQAIgvALguIj/g0gEg14AjdILa7wIhJjZIhrByIAtkhIAwgBIAHiAIhyAiIBhkgQj/AwjMDiQg2A7gzBJIgoA9IjYkcICpGHQgUA5gUA1QhHC4hIB4Qg2Bag2A3QgrApgsAUIkmnAIhWABIFYI9QhHC1hvBEImnt/IFpwmQKvjgLVJYQk3sArWlhIBejCIi/B2QmclSh4BVIC7xMIQuCWIB2CrImjFXIGkjPIBiB7ImZE6IHFjDQBHlJCyjGIYWgUIhmDVImphlIGNDGIh7C4IkOh5QhFCREJCNQQoriPyKaQghhRECE7IvLLUImvp1IEfJ3IoGBnIjrlqIBvF/QjghNjSAKQnQAWmOG+QPho4PaPQIkmD8IF+i6QFEFQBhFUQitgfi+ChIGKgFQDnFrhwhNQiLCCjlAlQhCBAieAcIhMAIQh+AMiGgGICAnGIj+GqQgthyjshKIESleIlND+Qg7gngqgrQghgigXglQgng+gKhHIEAkkIkUDFIlCl0IEIlcIlpEaQhShbhRhIQglghglgeQkPjYkDACIB2CPIhNABIAVBpICTDHIiQgQIhMCtIBuFiQhUhuhvg/IhdCAIlBL6IkMJrIiUGvQhtDFg3AAQhEAAAMkpgA8t4sQAxg6A1g5Ik1kQg");
	this.shape_31.setTransform(416.1831,255.067);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).to({_off:true},1).wait(4));

	// langit
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#326403").ss(5,1,1).p("EBR8AAAMij3AAA");
	this.shape_32.setTransform(492,643.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C6F9C1").s().p("EhR7AzmMAAAhnLMCj3AAAMAAABnLg");
	this.shape_33.setTransform(492,312.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[]},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(356.2,211,792.3999999999999,616);
// library properties:
lib.properties = {
	id: 'DCCA5A04F9E9EB49A3DF1304FD62D849',
	width: 960,
	height: 540,
	fps: 60,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png?1706501666445", id:"CachedBmp_2"},
		{src:"images/match shape game1_atlas_1.png?1706501666409", id:"match shape game1_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DCCA5A04F9E9EB49A3DF1304FD62D849'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;