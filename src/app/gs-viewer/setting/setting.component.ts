import * as THREE from 'three';
import { Component, OnInit, Input } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { ViewerComponent } from '../viewer/viewer.component';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  viewer:ViewerComponent;
  scene:THREE.Scene;
  alight:Array<THREE.AmbientLight>;
  gridVisible: boolean; 
  axisVisible: boolean; 
  shadowVisible: boolean; 
  hue:number;
  saturation:number;
  lightness:number;
  frameVisible:boolean;
  gridisChecked:boolean;
  opacity:number;
  red:number;
  green:number;
  blue:number;
  _centerx:number;
  _centery:number;
  _centerz:number;

  ngOnInit(){
    if(this.hue == undefined) {
        this.hue = 160;
    } else {
      this.hue=this.dataService.hue;
    }
    if(this.saturation == undefined) {
        this.saturation = 0;
    } else {
      this.saturation=this.dataService.saturation;
    }
    if(this.lightness == undefined) {
        this.lightness = 0.47;
    } else {
      this.lightness=this.dataService.lightness;
    }
    if(this.opacity==undefined){
      this.opacity=1;
    }else{
      this.opacity=this.dataService.opacity;
    }
    this.gridVisible=this.dataService.grid;
    this.axisVisible=this.dataService.axis;
    this.shadowVisible=this.dataService.shadow;
    this.frameVisible=this.dataService.frame;
    if(this.red==undefined){
      this.red=0.8;
    }else{
      this.red=this.dataService.red;
    }
    if(this.green==undefined){
      this.green=0.8;
    }else{
      this.green=this.dataService.green;
    }
    if(this.blue==undefined){
      this.blue=0.8;
    }else{
      this.blue=this.dataService.blue;
    }
    if(this._centerx==undefined){
      this._centerx=0;
    }else{
      this._centerx=this.dataService.centerx;
    }
     if(this._centery==undefined){
      this._centery=0;
    }else{
      this._centery=this.dataService.centery;
    }
     if(this._centerz==undefined){
      this._centerz=0;
    }else{
      this._centerz=this.dataService.centerz;
    }
    
  }

  constructor(private dataService: DataService){

    // avoid manipulating the scene here
    // shift to dataservice
    this.scene = this.dataService.getScene();
    this.alight=[];
    this.alight=this.dataService.getalight();
    this.hue=this.dataService.hue;
    this.saturation=this.dataService.saturation;
    this.lightness=this.dataService.lightness;
    this.opacity=this.dataService.opacity;
    this.red=this.dataService.red;
    this.green=this.dataService.green;
    this.blue=this.dataService.blue;
    this._centerx=this.dataService.centerx;
    this._centery=this.dataService.centery;
    this._centerz=this.dataService.centerz;
  }

  changegrid(){
    this.gridVisible = !this.gridVisible;
    /*var max=8;
    var center=new THREE.Vector3(0,0,0);
    var radius:number=0
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j]["geometry"].boundingSphere.radius>radius){
            center=this.scene.children[i].children[j]["geometry"].boundingSphere.center;
            radius=this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
            max=Math.ceil(radius+Math.max(Math.abs(center.x),Math.abs(center.y),Math.abs(center.z)))*2;
            break;
          }
        }
      }
    }*/
    if(this.gridVisible){
      var gridhelper=new THREE.GridHelper( 100, 100);
      gridhelper.name="GridHelper";
      var vector=new THREE.Vector3(0,1,0);
      gridhelper.lookAt(vector);
      //gridhelper.position.set(center.x,center.y,0);
      this.scene.add( gridhelper);

    }else{
      this.scene.remove(this.scene.getObjectByName("GridHelper"));
    }
    this.dataService.addgrid(this.gridVisible);
  }

  changecenter(centerx,centery,centerz){
    if(this.gridVisible){
      var gridhelper=this.scene.getObjectByName("GridHelper");
      gridhelper.position.set(centerx,centery,centerz);
      this._centerx=centerx;
      this._centery=centery;
      this._centerz=centerz;
      this.dataService.getcenterx(centerx);
      this.dataService.getcentery(centery);
      this.dataService.getcenterz(centerz);
    }
  }

  changeaxis(){
    this.axisVisible = !this.axisVisible;
    /*var max=8;
    var center=new THREE.Vector3(0,0,0);
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        for(var j=0;j<this.scene.children[i].children.length;j++){
          if(this.scene.children[i].children[j]["geometry"].boundingSphere.radius!==0){
            center=this.scene.children[i].children[j]["geometry"].boundingSphere.center;
            var radius:number=this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
            max=radius;
            break;
          }
        }
      }
    }*/
    if(this.axisVisible){
      var axishelper = new THREE.AxisHelper( 10 );
      axishelper.name="AxisHelper";
      this.scene.add( axishelper);
    }else{
      this.scene.remove(this.scene.getObjectByName("AxisHelper"));
    }
    this.dataService.addaxis(this.axisVisible);
  }

  changeshadow(){
    this.shadowVisible = !this.shadowVisible;
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="DirectionalLight")
      {
        if(this.shadowVisible){
          this.scene.children[i].castShadow=true;
        }
        else{
          this.scene.children[i].castShadow=false;
        }
      }
    }
    this.dataService.addshadow(this.shadowVisible);
  }

  changelight(_hue,_saturation,_lightness){
    this.hue=_hue;
    this.saturation=_saturation;
    this.lightness=_lightness;
    var alight=this.alight;
    this.dataService.gethue(_hue);
    this.dataService.getsaturation(_saturation);
    this.dataService.getlightness(_lightness);
    for(var i=0;i<alight.length;i++) {
      var ambientLight=alight[i];
      ambientLight.color.setHSL( _hue, _saturation,_lightness );
    }
  }
  
  changeframe(){
   this.frameVisible = !this.frameVisible;
   if(this.frameVisible){
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        if(this.scene.children[i].children[0].type==="Mesh"){
          this.scene.children[i].children[0].visible=false;
        }
      }
    }
  }else{
    for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        if(this.scene.children[i].children[0].type==="Mesh"){
          this.scene.children[i].children[0].visible=true;
        }
      }
    }
  }
   this.dataService.addframe(this.frameVisible);
  }

  changeopa(_opacity){
   this.opacity=_opacity;
   this.dataService.getopacity(_opacity);   
   for(var i=0;i<this.scene.children.length;i++){
      if(this.scene.children[i].type==="Scene"){
        if(this.scene.children[i].children[0].type==="Mesh"){
          this.scene.children[i].children[0]["material"].opacity=_opacity;
        }
      }
    }
  }

  changeback(_red,_green,_blue){
    this.red=_red;
    this.green=_green;
    this.blue=_blue;
    this.dataService.getred(_red);
    this.dataService.getgreen(_green);
    this.dataService.getblue(_blue);
    this.scene.background=new THREE.Color(_red,_green,_blue);
  }

  setting(event){
    event.stopPropagation();
  }

}

