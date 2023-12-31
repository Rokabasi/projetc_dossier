
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(){	
	
	//Create new div with scroll property into root container
	$("#commonMediaText").append("<div id='canvasId' style='top:0px;left:0px;position:absolute;width:470px;overflow-x:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 0;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='1811' height='385'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 0;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "7_3_1_4.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [{compId:"ID_txt01",x:"45.1",y:"139.45",width:"98.45",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt02",x:"272.2",y:"143.45",width:"85.35",expand:"up+down",align:"center",class:"moveLeft10"},						
						{compId:"ID_txt03",x:"491.9",y:"146.45",width:"84.6",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt04",x:"701.2",y:"143.45",width:"92.8",expand:"up+down",align:"center",class:"moveLeft10"},
						
						{compId:"ID_txt20",x:"99.95",y:"195.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt22",x:"760.7",y:"195.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt21",x:"539.7",y:"195.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						
						{compId:"ID_txt23",x:"1357.2",y:"195.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt07",x:"1089.55",y:"144.45",width:"85.35",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt08",x:"1311.15",y:"146.45",width:"84.6",expand:"up+down",align:"center",class:"moveLeft10"},
						{compId:"ID_txt09",x:"1521.8",y:"143.45",width:"92.8",expand:"up+down",align:"center",class:"moveLeft10"},
						
						{compId:"ID_txt14",x:"181.15",y:"135.45",width:"50.65",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt15",x:"401.05",y:"134",width:"47.8",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt16",x:"619.95",y:"134",width:"45.75",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt17",x:"841.1",y:"134",width:"48.75",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt18",x:"1437.95",y:"134",width:"45.75",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt19",x:"1661.1",y:"134",width:"55.3",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt28",x:"1219.05",y:"134",width:"47.8",expand:"up",align:"left",class:"moveLeft10"},
						{compId:"ID_txt24",x:"1581.7",y:"195.85",width:"68.3",expand:"right",align:"left",class:"moveLeft10"},
						
						{compId:"ID_txt26",x:"321.55",y:"86.5",width:"47.8",expand:"right",align:"left",class:"moveLeft10"},
						{compId:"ID_txt27",x:"1139.55",y:"86.5",width:"47.8",expand:"right",align:"left",class:"moveLeft10"},
						
						
						{compId:"ID_txt05",x:"878",y:"127",width:"110.5",expand:"down",align:"center",class:"seagreenCallOut"},
						{compId:"ID_txt06",x:"446",y:"232",width:"140.7",expand:"down",align:"center",class:"seagreenCallOut"},
						{compId:"ID_txt10",x:"1270",y:"234",width:"128.4",expand:"down",align:"center",class:"seagreenCallOut"},
						{compId:"ID_txt11",x:"1641",y:"240",width:"110.55",expand:"down",align:"center",class:"seagreenCallOut"},
						{compId:"ID_txt25",x:"7.05",y:"58",width:"152",expand:"up",align:"center",class:"seagreenCallOut"}					
						
						];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId");
			childStage.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage.update();
	}	
});