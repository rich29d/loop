(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 233,
	height: 193,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// P1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFECFD").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgMgNg");
	this.shape.setTransform(96.6,101.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF0FD").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgNAQAAQARAAANANQAMAMAAAQQAAARgMAMQgNANgRAAQgQAAgMgNg");
	this.shape_1.setTransform(112.8,101.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF4FE").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgMAQAAQARAAAMAMQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_2.setTransform(129.1,101.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF7FE").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgMAQgBQARABAMAMQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_3.setTransform(145.4,101.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgNAQAAQARAAANANQAMAMgBAQQABARgMAMQgNANgRAAQgQAAgMgNg");
	this.shape_4.setTransform(161.6,101.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANQAMAMABAQQgBARgMAMQgMANgRAAQgQAAgMgNg");
	this.shape_5.setTransform(177.9,101.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgQAMgNQAMgMAQABQARgBANAMQAMANgBAQQABARgMAMQgNAMgRAAQgQAAgMgMg");
	this.shape_6.setTransform(172,101.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgNAQAAQARAAANANQAMAMgBAQQABARgMAMQgNANgRAAQgQAAgMgNg");
	this.shape_7.setTransform(166.1,101.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAdQgNgMAAgRQAAgQANgNQAMgMAQABQARgBAMAMQANANAAAQQAAARgNAMQgMAMgRAAQgQAAgMgMg");
	this.shape_8.setTransform(160.2,101.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgMgNg");
	this.shape_9.setTransform(160.2,101.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9CEQgHgCgGgDIAAAAIgDgBIAAgDQAEgYAIgYIAHgRQAMgZAOgUIgzgPIgBAAIAAgBIgDgqIAAgCIAAgBIABAAIAJgBIAKgCIAKgBIALgBQAJgDATgBQAIAAAGgDQAIgEAFgIIABAAQgIAAgCACIgBgBIAAAAIABgTIAAgOQgBgJgCgGIAAgBIABAAIADACQAHADAIAAIgDgIIgCgBIgMgDIgKAAIAAgBIAEgBIABgBQAHgCAGABQAFACADAFQADAEAAAFIAGABQACABAJgBIALAAQAQAAAMANIAEAGQALAPgCAUIgBAIIgBAJIgDASIAAAAIgDAJIAAABIAAAAIgEAJIgCAEIgFAJQgIAMgLAFQgGACgHABQgCANgFAMIgEALQgKAagNANIAAABQgMASgRAGIgIACQgJADgJAAIgIAAg");
	this.shape_10.setTransform(164.8,104.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah3D6IgBAAIgBABIgFgBIAAgCIAThKIAHgbIAahTQALgWAJgqIhVgRIgBAAIgCgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABghgDglIgBgDIABgCIABAAIASAAIATAAIATAAIAUAAQASAAAkACQANABALgDQAQgFAJgOIAGgKQAEgMgBgPIAAgiQgCgPgIgJQgIgKgNgBQgOgDgXAGIgEABIgKADIgCABIATAAQAMABAIAEQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAFAgIAIA7IABADIgCAAIgPgBIgSgEQgUgBgLABIgBgBIgBgBIgBgvIgDglQgDgVgEgRIAAgBIACAAIAJACQAVACAdgEQABAAATgEIAYgEQAjgFAdAXIAKAJQAaAaACAmIAAAPIABAPIgCAjIAAABIgBASIgBABIAAABIgEASIgCAHQgCANgGAKQgKAXgTAKQgRAJgXABIgXgBIgKgCQgDAYgEAXIgBAEIgBAJIgEASQgJArgKAaIAAACQgNAlgYATIgLAKQgUAOgWAFIgNABIgKgBg");
	this.shape_11.setTransform(170.6,107.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AixF8IAAgBQANguAMg1IAIglQANg4ALg+QAKgmAIhQIABgEIAAAAIAAgDIABgJIhggRIgBAAIgEgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQACgvgFg1IgBgEIABgCIACAAIAcABIAcABIAdACIAcACQAbABA0AGQAUACAQgEQAYgFAMgUQAFgHACgIQAGgSgBgVIgEgxQgEgXgNgNQgNgNgVgCQgYgDgkAIIgIACIgRAEIgCABIAaABQASABAOAFQAEABABAEIAEAwIAFBVIAAAEIgEAAIgYgDIgbgFQgegEgRAAIgCgBIgCgCIgEhLIgFg8QgEghgHgaQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIACABIAOABQAfACArgKIAigIIAjgHQA3gLAuAgIAQANQAoAlAHA4IACAWIABAXIAAAzIABACIgCAbIgBABIABACIgEAaIgCAKQgEAUgGAPQgNAjgcAQQgXAPgiACQgOABgRgCIgfgFIgQgCQgDAxgGAwIgDAZQgGA8gLAoIAAADQgNA3gdAhQgIAJgIAHQgaAaggALQgQAFgRAAIgCAAIAAABIgJgBg");
	this.shape_12.setTransform(176.5,109.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AhwEGIAAgBQASg5ANhDIAJgvQANhGAJhRQAIgyAHhwIACgnQAwAGAsAIIAPADIAiAGIAEABQAAABAAAAQAAAAABABQAAAAAAABQAAAAgBABQgCA+gFA/IgDAfQgHBNgJA0IgBADQgNBKgjAvQgJAMgKAKQgfAlgpARQgVAJgXABIgCAAIgBACIgLgBg");
	this.shape_13.setTransform(170.8,136.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABQEGIgpgGIhCgKIjkgkIgBAAQgDAAgCgBIgBgFQAEg9gHhEIAAgGQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIADAAIAlAEIAmACQAQAAAWADIAlAEQAjACBGAKQAaADAWgEQAfgGAPgZQAGgKADgLQAGgXgBgaQgDgqgEgWQgFgegTgRQgSgRgdgDQghgEgzALIgKADIgYAFIgDACIAhABQAYACASAGQAGACAAAFIADA+IAGBuIAAAFQAAABgFAAIgjgGIgkgGQgpgGgXgBIgEgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgIhmIgHhSQgGgugJgjQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIADAAIATABQAoABA6gOIAxgMQAbgIATgDQBKgQA+ApIAWARQA3AwALBJIAEAeIACAeQACAiAAAgQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIgBAkQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAACQgBATgDAPIgCAOQgEAagHAVQgRAvgjAXQgeAVgsAEIgQABIgZgCg");
	this.shape_14.setTransform(182.5,87.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AiBFFIgBgBQAXhEAPhRIAJg5QANhVAHhmQAGg+AFiOIACgzQA6AEA4AIIASADIArAGIAEABQABABAAAAQAAABAAAAQABABAAAAQAAABgBABIgHCWIgCAmQgFBfgJBAIgBAFQgMBcgpA9QgLAQgLAOQgmAugyAYQgbAMgcADIgCAAQAAAAgBABQAAAAAAAAQAAAAAAABQgBAAAAAAIgNAAg");
	this.shape_15.setTransform(173.5,145.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABlFGQgRgBghgGIhSgMIkagoIgCAAQgEAAgBgBQgCgDAAgEQAFhKgIhTIgBgIQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAAAIADAAIAvAEIAuAEQAUABAcAEIAuAFQAsAFBXAMQAgAFAbgFQAngGASggQAHgLAEgOQAHgcgCgjQgFgygFgbQgHglgXgWQgYgVglgDQgrgFhAAOIgOADIgdAHIgFACIApACQAdACAXAHQAGACAAAHIADBOIAFCIIAAAGQgBABgFgBIgtgHIgugIQgzgIgegCIgEgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIgKiBQgGhHgFgiQgHg6gKguQAAgBgBgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAFAAIAWAAQAzAABJgTIA9gQQAigKAYgFQBdgVBQAzQAOAJAOAMQBGA6APBbIAFAlIADAlQAEAqAAApQAAAAAAABQABAAAAAAQAAABAAAAQAAAAABAAIgBAtIgBADIAAADIgEAqIgCARQgEAhgKAaQgTA7grAeQglAag2AFIgVABIgegCg");
	this.shape_16.setTransform(188.5,82.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AkHK1QAviMAeirQAmjdANkwQAFh/AGlIIAChWQAAgFACgCQACgBAFAAIDqAcQBCAIBCAHQAHABACACQACACAAAHIgOGJQgIDMgPCPQgVDFhVCFQhgCXiHBFQg4Acg9AJIgEAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABg");
	this.shape_17.setTransform(176.1,154.6,0.563,0.563);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ADbK3QgmgDhEgKIsGhpIgDAAQgJAAgEgDQgDgEAAgLQANiigVi4QAAgGACgCQABgBAGABIBjALQA6AHApADQArACA6AIIBkANQBcALC4AcQBIALA4gJQBvgSAfhzQAQg7gHhKQgJhrgMg8QgQhNgzguQgzgthQgIQhfgIiKAdIhfAXIgKAEIBXADQA9AEAvAQQAOAEAAAOIAEClIAIEjQABALgCACQgDACgLgCIhggPIhhgSQhvgShAgEQgHgBgCgCQgEgDAAgHIgYkYQgNiYgKhLQgPh9gXhjQgCgHAEgCQABgBAIAAIAxAAQBsgBCcgpICBgkQBPgWAxgMQDsg3DECfQCXB7AiDBQAGAhAFAtIAHBPQAJBaADBYQAAAFADAAIAABgQgDACAAAEIAAAGQgEBOgHAyQgJBFgSA4QgpB9hbBAQhNA4hyALQgYACgaAAQgbAAgdgCg");
	this.shape_18.setTransform(194.5,78.5,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},11).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},4).wait(1));

	// O2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF5658").s().p("AgdAdQgLgMgBgRQABgQALgMQANgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_19.setTransform(96.6,101.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF5658").s().p("AgdAdQgMgMABgRQgBgQAMgMQANgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_20.setTransform(102.6,101.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgMAQAAQARAAAMAMQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_21.setTransform(108.6,101.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF5658").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQgBQARABAMAMQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_22.setTransform(114.5,101.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF5658").s().p("AgcAdQgMgMgBgRQABgQAMgMQAMgNAQAAQARAAAMANQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_23.setTransform(120.5,101.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgNQAMgMAQABQARgBAMAMQANANAAAQQAAARgNAMQgMAMgRAAQgQAAgMgMg");
	this.shape_24.setTransform(124.3,101.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_25.setTransform(122.1,101.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF5658").s().p("AgdAdQgMgMABgRQgBgQAMgNQANgMAQABQARgBAMAMQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgNgMg");
	this.shape_26.setTransform(119.9,101.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF5658").s().p("AgdAdQgMgMABgRQgBgQAMgMQANgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_27.setTransform(119.9,101.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF5658").s().p("AAZBuQgLAAgKgGIAAgBQADgIAAgNIAAgEIgBgDIABADQADAFACADQADAEAEAAQADAAADgDQADgEAAgKIgDgJIgCgMQgFgRgLgSQgHgOgKgIQgGgGgGgDIgBAAQgKgDgIADQgFACgEAFIgBACIgDgHQgIgVgLgSIgDgIIAAgBQAEgLAFgIQAFgKAIgHQALgKAOgDQAMgCAMAEIACABQALAEAMALQARANAMAWIAFADQAGALAFANQAGAOADAPQADAPAAAPQABAMgCALQgDATgIAOQgHAMgKAHIgEACQgHAEgIAAIgEgBg");
	this.shape_28.setTransform(119.7,100.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF5658").s().p("AAADLQgRgGgTgRQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAMgWAEgfIAAgJIABgHIADAEQAGAKAHAFQAGAGAJAAQAJgBAHgHQAKgKAFgUIABgTIgBgXQgDgigPgeQgMgbgQgRQgKgKgLgDIgCgBQgQgEgPAKQgJAGgHALIgBADIgFgLQgPgmgUgbIgEgKIgBgCQAIgSAJgOQALgQANgKQAWgRAYgBQAWgBATAMIAEADQAWAMASAYQAaAeAQAtIAFAHQAIAWAFAZQAGAbABAXQACAfgEAcQgDAUgFASQgKAhgRAWQgQAUgUAIIgJACQgIACgIAAQgLAAgLgEg");
	this.shape_29.setTransform(120.4,99.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF5658").s().p("AgXEnQgdgMgbgcQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAUgkAIgwIABgPIACgMIAFAHQAKAOAKAGQAOAJAMgBQAPgBAMgLQAQgPAKgeQADgOABgQQACgQAAgSQgCgzgTgtQgPgngYgXQgNgOgRgFIgDAAQgXgGgUAQQgOAKgJATIgDADIgFgQQgWg1gdgmIgHgLIgBgEQAMgZANgTQARgWATgOQAfgWAkABQAfAAAcATIAGAEQAeAVAaAlQAiAwAVBDIAFAKQAJAhAFAlQAGAmAAAlQAAAtgJAoQgFAcgIAZQgSAvgaAeQgZAcgdAJIgPADIgPABQgSAAgUgJg");
	this.shape_30.setTransform(121.2,99);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF5658").s().p("AgxGDQgmgRgjgnQgCgDACgCQAbgyAMhBIAEgVIACgQIAHAJQAOASAOAIQATAMAUgCQASgCARgOQAXgVANgpQAGgTADgVQADgVABgYQAAhCgXg+QgUgygegeQgRgTgWgFIgEgBQgegGgaAWQgSAOgNAZIgDAFIgHgVQgbhEgngxIgJgNIgCgFQAQghASgXQAVgcAbgSQAogdAvADQAoACAlAaIAIAGQAnAdAhAyQArBCAZBZIAEAOQALAsAGAxQAFAygBAxQgDA7gLA0QgIAkgNAhQgYA9gkAmQgiAjgnAKQgJADgKABIgPABQgbAAgegPg");
	this.shape_31.setTransform(122,98.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF5658").s().p("AhLHgQgwgXgqgyQgDgDACgEQAkg/AQhSIAFgbIADgUIAIALQATAVASALQAYAOAagCQAXgDAVgSQAfgbARgzQAIgYAEgaQAFgaABgeQAChTgchMQgXg/glgkQgVgXgbgHIgFgBQglgHggAcQgVASgRAgIgDAGIgJgZQghhVgxg7IgLgOIgCgGQAUgoAXgdQAagiAggWQAzgiA5AEQAxAEAvAhIAKAIQAwAlAnA/QA0BTAdBwIAEASQANA3AFA8QAGBAgDA8QgEBJgQBAQgLAsgQAoQgeBLguAuQgrArgxALQgMADgMABIgPAAQgkAAgngTg");
	this.shape_32.setTransform(122.8,97.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF5658").s().p("Ai1P6Qhlg0hahsQgGgHAFgIQBYidAkjVIAHgsIATAXQAoAuAnAWQA0AeA3gGQA1gFAtgoQBDg6AmhtQAlhlAFh+QAHiyg4iiQgviFhOhMQg0g1g9gLQhQgOhEA8QgtAngjBGIgGANIgUg2QhFizhmh7IgageQgGgFADgGQAqhVAwg8QA4hHBFguQBshIB5ALQBpAKBkBJQByBTBaCUQBsCzA5DvQAhCGALCWQAKCJgIB/QgSEIhYDNQhCCchiBgQhbBahqAXQglAIgjAAQhXAAhWgsg");
	this.shape_33.setTransform(123.7,97.3,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20,p:{x:102.6,y:101.4}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_20,p:{x:126.5,y:101.8}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},11).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(5));

	// O1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgMgNg");
	this.shape_34.setTransform(96.6,101.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAANANQALAMAAAQQAAARgLAMQgNANgRAAQgQAAgMgNg");
	this.shape_35.setTransform(92.4,101.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgMAQAAQARAAAMAMQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_36.setTransform(88.2,101.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgMAQgBQARABAMAMQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_37.setTransform(84.1,101.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF5658").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgNAQAAQARAAANANQALAMABAQQgBARgLAMQgNANgRAAQgQAAgMgNg");
	this.shape_38.setTransform(79.9,101.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF5658").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANQAMAMABAQQgBARgMAMQgMANgRAAQgQAAgMgNg");
	this.shape_39.setTransform(75.7,101.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF5658").s().p("AgcAdQgMgMAAgRQAAgQAMgNQAMgMAQABQARgBANAMQALANABAQQgBARgLAMQgNAMgRAAQgQAAgMgMg");
	this.shape_40.setTransform(77.2,101.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF5658").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgNAQAAQARAAANANQAMAMgBAQQABARgMAMQgNANgRAAQgQAAgMgNg");
	this.shape_41.setTransform(78.6,101.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF5658").s().p("AgcAdQgMgMAAgRQAAgQAMgNQAMgMAQABQARgBANAMQAMANgBAQQABARgMAMQgNAMgRAAQgQAAgMgMg");
	this.shape_42.setTransform(80.1,101.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF5658").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAANAMQALAMABAQQgBARgLAMQgNANgRAAQgQAAgMgNg");
	this.shape_43.setTransform(80.1,101.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF5658").s().p("AAcBrQgLgCgKgHQgKgJgLgPIgBgDIgEgHIAAgBIABAAQAHAAALgBIAAAAIAAABQAAANACAJQACAEACADQADADAEAAIgCgBIAEgDQADgFAAgLQAAgKgDgMQgEgTgJgRIgFgLIgFgGQgFgFgEgDQgFgDgGgBQgGgBgEADQgHADgEAGIgBABIgBAAIgcgGIgBgBQABgXAGgTQAHgUALgOQAKgNAMgGQARgIAQAFQANAEAMAKQAMAJAKAMIAKAOQAIANAGAQQADAIADAMQADANABAPQABANgBAMQgDATgHAPQgGAMgIAIQgGAEgFACQgFACgGAAIgHgBg");
	this.shape_44.setTransform(78.9,100.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF5658").s().p("AAKDAQgTgHgSgUQgWgYgQglIgCgFIgGgQIABgCIABgBIAqgHIACAAIABABQAEAZAJAQQAGAJAGAFQAGAFAJgBIADgBQAFgCAEgFQAKgKAEgUQAEgUgCgXQgDgigNgcQgFgLgGgJIgKgNQgFgJgIgFQgKgGgKABQgKAAgIAGQgMAIgIAQIgBACIgCABIg3ABIgCgBQADgoALggQALgjATgXQARgWAWgJQAegNAcAOQAWAKAUAVQASATAOAaQAHAMAGAPQALAZAGAdQAEAQADASQACAdgCAaQgBAXgFAVQgIAhgPAYQgNAUgRALQgLAGgLACIgKAAQgNAAgMgFg");
	this.shape_45.setTransform(78.3,101.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF5658").s().p("AgIEVQgfgOgaggQgggogVg6IgCgIIgIgZIAAgDIADgBIBBgNIADAAIACACQAIAkAQAXQAJANALAIQALAIAOgCQAEAAAEgCQAIgDAHgHQAQgQAIgdQAHgdgBgiQgBgxgSgrQgGgPgJgNQgGgKgHgJQgLgMgJgHQgOgIgPABQgOABgNAKQgRANgLAaIgBADIgEACQgsADglAFIgCgCQAEg4APguQARgxAaggQAYgfAfgMQArgRApAWQAfAQAbAhQAYAcATAnQAJATAHAWQAOAmAHApQAEAXACAcQABAqgEAlQgDAigIAeQgOAvgYAhQgUAcgaAOQgQAIgRABIgIABQgWAAgUgLg");
	this.shape_46.setTransform(77.8,101.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF5658").s().p("AgdFqQgogVgigsQgqg3gahPIgDgLIgJgiQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAIADgCIBagTIADAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQANAvAWAeQANARAQAKQASALARgCQAGgBAHgDQAKgEAKgJQAWgVAMgnQAMgmgBgtQAAg/gWg6QgIgUgLgRQgIgNgJgLQgOgQgPgIQgQgKgTABQgTACgQANQgXATgOAjIgCAEQgCACgDAAQg6AHgxAJIgDgCQAGhJATg7QAWg/AhgqQAggoAogPQA3gVA3AeQAoAWAiAsQAeAnAXAzQALAaAJAdQAQAyAIA3QAEAeACAmQABA2gHAxQgFAsgMAnQgTA9ggAqQgdAkgiAQQgWAKgWACIgHAAQgfAAgegQg");
	this.shape_47.setTransform(77.4,102.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF5658").s().p("AgxG+Qgygagpg5Qg0hGgghlIgEgOIgLgrQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQABgBAAAAQABAAABgBQAsgLBFgOQABAAABAAQABgBAAAAQABAAAAABQABAAAAAAQACABAAADQAQA7AeAlQAQAWAUALQAXAOAWgDQAKAAAIgEQAOgFAMgLQAdgbAQgxQAPguABg4QABhPgbhHQgKgZgMgVQgKgQgMgOQgQgTgTgKQgVgNgXADQgYACgUARQgcAYgRAtQgBAEgCABQgCACgEABQhHAKg+ANIgEgDQAHhZAYhJQAbhNApgzQAngxAxgSQBEgaBEAnQAxAcApA4QAlAwAaBBQAOAgAKAkQATA+AIBEQAFAmABAuQAABEgJA8QgIA2gPAwQgZBLgoAzQgkAtgrATQgbAMgcABIgGAAQgmAAgpgWg");
	this.shape_48.setTransform(76.9,102.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF5658").s().p("Ah7OxQhrg7hYh7QhuiYhBjZQgMgogThRQgCgHACgDQACgDAHgCQBfgYCWggQAHgCADACQADACACAHQAkB9BABPQAjAtArAZQAyAdAzgFQA0gGArgnQA/g5AjhnQAihjADh2QAFiqg4iWQgkhhg3hAQgkgpgngVQgugagyAGQgyAGgqAkQg7A1gkBgQgDAIgEAEQgEADgJACQiYAYiDAfQgFACgCgBQgCgCAAgGQAQi7AziaQA3ijBXhrQBThnBmgmQCRg1CRBUQBnA8BWB3QBzCfBBDkQAmCGAQCQQAIBPACBmQgBEPhIDWQg2CehXBrQhMBehbAnQhAAbhBAAQhVAAhXgxg");
	this.shape_49.setTransform(76.5,103.4,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},11).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).wait(5));

	// L
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFE6FC").s().p("AgdAdQgLgMgBgRQABgQALgMQANgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_50.setTransform(96.6,101.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFEBFD").s().p("AgdAdQgLgMgBgRQABgQALgMQANgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_51.setTransform(82.6,101.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFF0FD").s().p("AgdAdQgLgMgBgRQABgQALgMQANgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_52.setTransform(68.7,101.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFF5FE").s().p("AgdAdQgLgMAAgRQAAgQALgMQANgMAQgBQARABAMAMQAMAMABAQQgBARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_53.setTransform(54.8,101.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFAFE").s().p("AgdAdQgLgMAAgRQAAgQALgMQANgNAQAAQARAAAMANQAMAMABAQQgBARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_54.setTransform(40.8,101.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgNAQAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgMgNg");
	this.shape_55.setTransform(26.9,101.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgcAdQgNgMAAgRQAAgQANgNQAMgMAQABQARgBAMAMQANANAAAQQAAARgNAMQgMAMgRAAQgQAAgMgMg");
	this.shape_56.setTransform(32,101.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgNAQAAQARAAAMANQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_57.setTransform(37.1,101.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgcAdQgMgMgBgRQABgQAMgNQAMgMAQABQARgBAMAMQANANAAAQQAAARgNAMQgMAMgRAAQgQAAgMgMg");
	this.shape_58.setTransform(42.2,101.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgMQANgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMANgRAAQgQAAgNgNg");
	this.shape_59.setTransform(42.2,101.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AiQCAIAFgOIADgPIAHgqIAJgyQAFgYAHgYQAFgUAGgMQACgIADgFIADgFIAEgGQAMgSAUgKQALgFANABIABAAIAAgBIAEABIgBAfIABAOIAEA4IABAsIAAAEQAAAagEAWIAAACQAAAEgDADQgHAHgGAJIgBABIAAABIABgBQAIgGAJgDQAGgCAIgBIAUgBIAWgBIABAAIABABIgCAJIgBAPIgCAIIAAABIgBAAIgxACIglAAIgEAAIgSABIgQACQgIABgJADQgRAFgPACIgBABgABHBxIgCAAIgCgBQgLgJgJgQQgLgTgCgWIAAgBIAAgCQALgOAQgKQAWgJAVAAIAIABQAPAKAIANQALAUgBAXIAAADIAAABQgLAOgQAIQgTAKgXAAIgFAAg");
	this.shape_60.setTransform(46.2,94.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Aj4DvQAGgLADgNIAHgZQAGgeAFgrIAJhZIAAgBIAMhYQAFglAGgZQADgQADgJIAEgKIAFgNQASgkAigVQATgLAWgBIABAAIAAgBIAHABQgGAZgDAfIgBAZIABBjIABBMIAAAGQgBAtgFAmIAAAFQgBAGgEAEQgNALgLARIgBACIAAAAIACgBQASgPAXgKQAOgGAQgEQAXgEAcgEIA4gDQABgBAAAAQAAAAABAAQAAAAAAABQAAAAABAAIABACIACARQACAOgBARIAAAPIgBABIgBACQgxADgnAFQggADggAFIgGAAIghAGIgfAIQgOAEgQAIQggARgdALIgDABgACSCnIgEAAIgCgCQgIgPgJgWQgJgZgEgcIAAgBIAAgCQAUgMAXgHQAdgIAaABIAKABQAQARAHATQAKAagCAeIgBACIAAADQgTAKgWAGQgbAHgcAAIgGAAg");
	this.shape_61.setTransform(50.3,89.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AlgFhIAAgCQAJgPAFgTQAFgPAEgWQAJgpAGg/QAGgyAFhOIAAAAIALiCQAFg2AGglIAHgkIAFgRIAGgRQAYg4AvgfQAbgSAggEIABAAIAAgBIAKABQgLAlgFAsIgEAlQgDA3ABBXIAABtIAAAIQgBBAgGA2IAAAHQgBAIgHAGQgSAQgPAXIgBADIAAABIACgCQAcgZAkgQQAWgKAagHQAlgJAtgFIBagIQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABIACADIAFAZQAEAWAAAYIAAAYIAAACQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQhFAGg5AJQgtAGguAKIgJABIguALQgaAGgUAHQgVAHgXAOQgvAcgsAUIgEACIAAgBgADYDeQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIgOgyQgIgfgGgiIAAgBIAAgDQAegIAcgGQAlgFAgABIAMABQAQAZAGAXQAIAigDAjIAAAEIgBACQgcAHgbAEQgiAFghAAIgJAAIgCAAIgCAAg");
	this.shape_62.setTransform(54.3,84.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AktHQIAAgBQALgTAIgaQAGgTAGgcQALg1AHhSQAHhBAFhmIAAAAQAFhVAGhXQAEhHAHgxQAEgeAEgRIAFgXIAIgXQAdhKA9grQAjgZApgFIABAAIABgBIANAAQgPAxgJA6QgDAYgCAZQgGBHAAByIAACMIAAALQgCBTgHBGIgBAIQAAALgKAIQgYAUgTAeIgBAEIAAABIACgCQAmgjAygXQAcgOAjgJQAzgNBAgIQAlgEBXgHQADgBACABIADAFIAIAhQAGAdACAhIAAAfQABABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQhaAJhNANQg7AJg7AOIgLADIg7APQgiAJgaAKQgdALgdATQg+Ang7AdIgFACIAAgBg");
	this.shape_63.setTransform(42.9,79.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEFEFE").s().p("AhEBPQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQgFgegGghIgPhLQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIBJgJQArgDAkABIAOABQARAgAFAdQAHAmgEAqIgBAEIgBADQgkAEghACQgnACgnAAIgKAAIgCAAIgDAAg");
	this.shape_64.setTransform(94.3,99);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Al0I/QAOgYAJgfQAIgYAHgjQAOhAAIhlQAIhPAFh/IAAgBIAKjUQAFhZAHg9QAEgmAEgVIAHgcQAEgQAFgOQAjhcBKg2QArgfAygHIACAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAPAAQgUA9gLBHIgIA7QgIBYgBCMIAACtIAAANQgCBmgJBWIgBALQAAANgMAJQgdAZgYAlIgCAEIAAABIAEgBQAwgtA/gdQAmgTAqgMQBAgQBSgLQAvgGBvgIQAEgBACABQACABACAEQAHAVAEAVQAIAkADAqQABAIAAAeQABABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQhvALheARQhJAMhJATIgNADQgxANgZAIQgpALghAMQgjAPglAYQhNAzhJAmIgGADg");
	this.shape_65.setTransform(43.7,74.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FEFEFE").s().p("AhVBYIgBgFQgDglgFgmQgHgqgJgtIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAxgDAngBQAyAAAqABIAQABQARAnAEAiQAGAtgFAwIgBAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAIhTABIhaAAIgMAAIgCAAIgEgBg");
	this.shape_66.setTransform(107.4,98.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FEFEFE").s().p("ADMC5QjRgPilACQgIAAgCgDQgDgCAAgIQgCinglinQgBgHACgBIAIgBQBuAABZACIDGAIQAMABADAMQAmCpgWCoQAAAGgDACQgBABgEAAIgDAAg");
	this.shape_67.setTransform(120.5,97.9,0.563,0.563);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AsUTFQAdgzAVhBQAQgzAPhIQAciIASjXQAOimAKkNIARnFQAIi8ANiCQAJhQAIguQAMhFATg2QBIjFCdh1QBbhCBpgQIAEAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAIAfAAQg9C0gZDiQgUC4gCEqQgBFKgBBAQgEDVgSC2IgCAWQgBAcgYATQg/A0gxBPIgEAJIAAACQACAAAFgEQCoieD2hEQCLglCvgXQBogODugUQAJAAAEACQAFADADAKQApBzALCLQABASABBAQABAGgCADQgCADgHAAQjpAYjIAlQilAeiqAuQhpAdg0APQhZAbhEAbQhLAghOA0QikBvibBTQgKAGgDAAg");
	this.shape_68.setTransform(44.4,68.9,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},11).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(208.9,193.6,8.4,8.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;