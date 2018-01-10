import { Injectable } from '@angular/core';
import * as THREE from 'three';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {

  _gsModel;

  scene:THREE.Scene;
  _renderer:THREE.WebGLRenderer;
  _saturation:any;
  _lightness:any;
  _alight:any;
  _hueValue:number;
  _saturationValue:number;
  _lightnessValue:number;
  _Geom:any;
  hue: number;
  saturation:number;
  lightness:number;
  scenechange:any;
  INTERSECTEDColor:any;
  selecting:any = [];
  object:any;
  axis:boolean;
  grid:boolean;
  shadow:boolean;
  frame:boolean;
  selectcheck:boolean;
  mouse:THREE.Vector2;
  raycaster:THREE.Raycaster;
  visible:string;


  constructor() { 
    this._alight=[];
    if(this.scene===undefined){
      this.scene=new THREE.Scene();
    }else{
      this.scene=this.getScene();
    }
  }

  // ---- 
  // Subscription Handling
  // 
  private subject = new Subject<any>();
  sendMessage(message?: string) {
      this.subject.next({ text: message });
  }
 
  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }


  //
  //  Normal functions
  //
  getGsModel(){
    return this._gsModel; 
  }

  setGsModel(model){
    this._gsModel = model;
    this.sendMessage("model_update");
  }


  
  addScene(scene): void{
  	this.scene = scene;
  }

  getScene(): any{
  	return this.scene;
  }

  addRender(renderer): void{
  	this._renderer = renderer;
  }

  getRender(): any{
  	return this._renderer;
  }

  addAmbientLight() {
    this._hueValue=160;
    this._saturationValue=0;
    this._lightnessValue=0.47;
    var light = new THREE.HemisphereLight( 0xffffff,0.5);
    this.scene.add( light );
    this._alight.push(light);
    var alight=this._alight;
    for(var i=0;i<alight.length;i++) {
      var ambientLight=alight[i];
      ambientLight.color.setHSL( this._hueValue, this._saturationValue, this._lightnessValue);
    }
  }
  getalight():any{
    return this._alight;
  }

  addlightvalue(hue,saturation,lightness){
    this._hueValue=hue;
    this._saturationValue=saturation;
    this._lightnessValue=lightness;
  }

  gethue(_hue):any{
    this.hue = _hue;
  }
  getsaturation(_saturation):any{
    this.saturation = _saturation;
  }
  getlightness(_lightness):any{
    this.lightness = _lightness;
  }

  addGeom(Geom): void{
    this._Geom = Geom;
  }

  getGeom(): any{
    return this._Geom;
  }
  addscenechange(scenechange){
    this.scenechange=scenechange;
  }
  getscenechange():any{
    return this.scenechange;
  }
  addINTERSECTEDColor(INTERSECTEDColor):void{
    if(this.INTERSECTEDColor==null){
      this.INTERSECTEDColor=INTERSECTEDColor;
    }
  }
  getINTERSECTEDColor():any{
    return this.INTERSECTEDColor
  }
  addselecting(selecting){
    if(selecting[selecting.length-1]==undefined){
      this.selecting=[];
    }
    this.sendMessage();
  }
  pushselecting(selecting){
    this.selecting.push(selecting);
    this.sendMessage();
  }
  spliceselecting(index,number){
    this.selecting.splice(index,number);
    this.sendMessage();
  }
  getselecting(){
    return this.selecting;
  }
  addgrid(grid){
    this.grid=grid;
  }
  addaxis(axis){
    this.axis=axis;
  }
  addshadow(shadow){
    this.shadow=shadow;
  }
  addframe(frame){
    this.frame=frame;
  }
  addselect(select){
    this.selectcheck=select;
  }
  getSelectingIndex(uuid):number {
   for(var i=0;i<this.selecting.length;i++){
     if(this.selecting[i].uuid==uuid){
       return i;
     }
   }
   return -1;
 }
}
