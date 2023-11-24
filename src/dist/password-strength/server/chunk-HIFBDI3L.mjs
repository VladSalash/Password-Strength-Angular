import './polyfills.server.mjs';
import{A as ge,B as F,C as me,D as S,E as ve,F as T,G,N as ye,O as Q,Q as _e,R as Ce,S as Ve,T as be,W as De,a as ue,aa as Me,b as de,c as ce,d as x,e as k,f as he,g as M,h as m,i as N,j as A,k as c,l as w,m as fe,n as Y,o as K,p as u,q as a,r as v,s as y,t as _,u as C,v as J,w as pe,x as h,y as f,z as E}from"./chunk-ZDCGC72E.mjs";import{a as d,b as g}from"./chunk-KRLCULJA.mjs";var ke=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(a(K),a(Y))},e.\u0275dir=c({type:e});let t=e;return t})(),pt=(()=>{let e=class e extends ke{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=fe(e)))(o||e)}})(),e.\u0275dir=c({type:e,features:[y]});let t=e;return t})(),Ne=new m("NgValueAccessor");var gt={provide:Ne,useExisting:x(()=>z),multi:!0};function mt(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var vt=new m("CompositionEventMode"),z=(()=>{let e=class e extends ke{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!mt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(a(K),a(Y),a(vt,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&F("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[T([gt]),y]});let t=e;return t})();function p(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Te(t){return t!=null&&typeof t.length=="number"}var Ge=new m("NgValidators"),je=new m("NgAsyncValidators"),yt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,U=class{static min(e){return _t(e)}static max(e){return Ct(e)}static required(e){return Vt(e)}static requiredTrue(e){return bt(e)}static email(e){return Dt(e)}static minLength(e){return Mt(e)}static maxLength(e){return At(e)}static pattern(e){return wt(e)}static nullValidator(e){return Be(e)}static compose(e){return We(e)}static composeAsync(e){return ze(e)}};function _t(t){return e=>{if(p(e.value)||p(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function Ct(t){return e=>{if(p(e.value)||p(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function Vt(t){return p(t.value)?{required:!0}:null}function bt(t){return t.value===!0?null:{required:!0}}function Dt(t){return p(t.value)||yt.test(t.value)?null:{email:!0}}function Mt(t){return e=>p(e.value)||!Te(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function At(t){return e=>Te(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function wt(t){if(!t)return Be;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(p(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function Be(t){return null}function Ue(t){return t!=null}function Re(t){return ge(t)?ue(t):t}function He(t){let e={};return t.forEach(i=>{e=i!=null?d(d({},e),i):e}),Object.keys(e).length===0?null:e}function Le(t,e){return e.map(i=>i(t))}function Et(t){return!t.validate}function $e(t){return t.map(e=>Et(e)?e:i=>e.validate(i))}function We(t){if(!t)return null;let e=t.filter(Ue);return e.length==0?null:function(i){return He(Le(i,e))}}function qe(t){return t!=null?We($e(t)):null}function ze(t){if(!t)return null;let e=t.filter(Ue);return e.length==0?null:function(i){let n=Le(i,e).map(Re);return ce(n).pipe(de(He))}}function Ze(t){return t!=null?ze($e(t)):null}function Ae(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Xe(t){return t._rawValidators}function Ye(t){return t._rawAsyncValidators}function ee(t){return t?Array.isArray(t)?t:[t]:[]}function R(t,e){return Array.isArray(t)?t.includes(e):t===e}function we(t,e){let i=ee(e);return ee(t).forEach(r=>{R(i,r)||i.push(r)}),i}function Ee(t,e){return ee(e).filter(i=>!R(t,i))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=qe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},b=class extends H{get formDirective(){return null}get path(){return null}},P=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ft={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},_n=g(d({},Ft),{"[class.ng-submitted]":"isSubmitted"}),Ke=(()=>{let e=class e extends L{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(a(P,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})(),Je=(()=>{let e=class e extends L{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(a(b,10))},e.\u0275dir=c({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[y]});let t=e;return t})();var I="VALID",j="INVALID",V="PENDING",O="DISABLED";function ie(t){return(Z(t)?t.validators:t)||null}function St(t){return Array.isArray(t)?qe(t):t||null}function re(t,e){return(Z(e)?e.asyncValidators:t)||null}function It(t){return Array.isArray(t)?Ze(t):t||null}function Z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Qe(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new k(1e3,"");if(!n[i])throw new k(1001,"")}function et(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new k(1002,"")})}var D=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===j}get pending(){return this.status==V}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(we(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ee(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(n=>{n.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let i=Re(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(j)?j:I}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=St(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=It(this._rawAsyncValidators)}},$=class extends D{constructor(e,i,n){super(ie(i),re(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){et(this,!0,e),Object.keys(e).forEach(n=>{Qe(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var te=class extends ${};var oe=new m("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function Ot(t,e){return[...e.path,t]}function Fe(t,e,i=X){se(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),xt(t,e),Nt(t,e),kt(t,e),Pt(t,e)}function Se(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),q(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function W(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Pt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function se(t,e){let i=Xe(t);e.validator!==null?t.setValidators(Ae(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Ye(t);e.asyncValidator!==null?t.setAsyncValidators(Ae(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();W(e._rawValidators,r),W(e._rawAsyncValidators,r)}function q(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=Xe(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(i=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=Ye(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(i=!0,t.setAsyncValidators(o))}}}let n=()=>{};return W(e._rawValidators,n),W(e._rawAsyncValidators,n),i}function xt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&tt(t,e)})}function kt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&tt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function tt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Nt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Tt(t,e){t==null,se(t,e)}function Gt(t,e){return q(t,e)}function jt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Bt(t){return Object.getPrototypeOf(t.constructor)===pt}function Ut(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Rt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===z?i=o:Bt(o)?n=o:r=o}),r||n||i||null}function Ht(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ie(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Oe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var B=class extends D{constructor(e=null,i,n){super(ie(i),re(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ie(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ie(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Lt=t=>t instanceof B;var nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var $t=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=M({});let t=e;return t})();var it=new m("NgModelWithFormControlWarning");var Wt={provide:b,useExisting:x(()=>ae)},ae=(()=>{let e=class e extends b{constructor(n,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new v,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let r=this.form.get(n.path);return Fe(r,n,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){Se(n.control||null,n,!1),Ht(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this.submitted=!0,Ut(this.form,this.directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{let r=n.control,o=this.form.get(n.path);r!==o&&(Se(r||null,n),Lt(o)&&(Fe(o,n,this.callSetDisabledState),n.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let r=this.form.get(n.path);Tt(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let r=this.form.get(n.path);r&&Gt(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){se(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Ge,10),a(je,10),a(oe,8))},e.\u0275dir=c({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&F("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([Wt]),y,w]});let t=e;return t})();var qt={provide:P,useExisting:x(()=>le)},le=(()=>{let e=class e extends P{set isDisabled(n){}constructor(n,r,o,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new v,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Rt(this,s)}ngOnChanges(n){this._added||this._setUpControl(),jt(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return Ot(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(b,13),a(Ge,10),a(je,10),a(Ne,10),a(it,8))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[T([qt]),y,w]});let t=e;return t})();var rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=M({imports:[$t]});let t=e;return t})(),ne=class extends D{constructor(e,i,n){super(ie(i),re(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,i={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}insert(e,i,n={}){this.controls.splice(e,0,i),this._registerControl(i),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,i={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:i.emitEvent})}setControl(e,i,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),i&&(this.controls.splice(r,0,i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,i={}){et(this,!1,e),e.forEach((n,r)=>{Qe(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e=[],i={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(i=>i._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((i,n)=>n._syncPendingControls()?!0:i,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((i,n)=>{e(i,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(i=>i.enabled&&e(i))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Pe(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var ot=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let n=new e;return n.useNonNullable=!0,n}group(n,r=null){let o=this._reduceControls(n),s={};return Pe(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new $(o,s)}record(n,r=null){let o=this._reduceControls(n);return new te(o,r)}control(n,r,o){let s={};return this.useNonNullable?(Pe(r)?s=r:(s.validators=r,s.asyncValidators=o),new B(n,g(d({},s),{nonNullable:!0}))):new B(n,r,o)}array(n,r,o){let s=n.map(l=>this._createControl(l));return new ne(s,r,o)}_reduceControls(n){let r={};return Object.keys(n).forEach(o=>{r[o]=this._createControl(n[o])}),r}_createControl(n){if(n instanceof B)return n;if(n instanceof D)return n;if(Array.isArray(n)){let r=n[0],o=n.length>1?n[1]:null,s=n.length>2?n[2]:null;return this.control(r,o,s)}else return this.control(n)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var st=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:oe,useValue:n.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=M({imports:[rt]});let t=e;return t})(),at=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:it,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:oe,useValue:n.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=A({type:e}),e.\u0275inj=M({imports:[rt]});let t=e;return t})();function Zt(t,e){if(t&1&&(h(0,"p",4),S(1),f()),t&2){let i=me();C("color",i.messageColor),u(1),ve(i.message)}}var lt=(()=>{let e=class e{constructor(){this.bar=["","","",""],this.passwordToCheck="",this.passwordStrength=new v,this.colors=["gray","red","yellow","green"],this.message="",this.messageColor=""}static checkStrength(n){let r=/[a-zA-Z]/.test(n),o=/\d/.test(n),s=/[^a-zA-Z\d]/.test(n),l=[r,o,s].filter(ft=>ft).length;return n.length<8||l===1?10:l===2?20:l===3?30:0}ngOnChanges(n){let r=n.passwordToCheck.currentValue;if(this.setBarColors(4,"gray"),r){let o=e.checkStrength(r);this.passwordStrength.emit(o>=20);let s=this.getColor(o);this.setBarColors(s.index,s.color),this.message=this.getPasswordStrengthMessage(o)}else this.message=""}getColor(n){let r=Math.min(Math.floor(n/10),this.colors.length-1);return this.messageColor=this.colors[r],{index:r+1,color:this.colors[r]}}setBarColors(n,r){if(!this.passwordToCheck||this.passwordToCheck.trim().length===0)this.bar=Array(n).fill("gray");else if(this.passwordToCheck.length<8){this.bar[1]=r;for(let s=0;s<n;s++)this.bar[s]="red"}else if(this.passwordToCheck.length<=8){this.bar[0]=r;for(let s=1;s<n;s++)this.bar[s]="gray"}let o=e.checkStrength(this.passwordToCheck);if(o===20){this.bar[2]=r;for(let s=0;s<n;s++)this.bar[s]="yellow";this.bar[n]="gray"}if(o===30){this.bar[3]=r;for(let s=0;s<n;s++)this.bar[s]="green"}}getPasswordStrengthMessage(n){return n===10?"Easy Password":n===20?"Medium Password":n===30?"Strong Password":""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=N({type:e,selectors:[["app-password-strength"]],inputs:{passwordToCheck:"passwordToCheck"},outputs:{passwordStrength:"passwordStrength"},standalone:!0,features:[w,G],decls:7,vars:9,consts:[[1,"strength"],[1,"strengthBar","mt-2"],[1,"point"],["class","text-center mb-0",3,"color",4,"ngIf"],[1,"text-center","mb-0"]],template:function(r,o){r&1&&(h(0,"div",0)(1,"ul",1),E(2,"li",2)(3,"li",2)(4,"li",2)(5,"li",2),f(),pe(6,Zt,2,3,"p",3),f()),r&2&&(u(2),C("background-color",o.bar[0]),u(1),C("background-color",o.bar[1]),u(1),C("background-color",o.bar[2]),u(1),C("background-color",o.bar[3]),u(1),_("ngIf",o.passwordToCheck==null?null:o.passwordToCheck.length))},dependencies:[Ce,_e],styles:[".strengthBar[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]:last-of-type{margin:0!important}.point[_ngcontent-%COMP%]{background:#DDD;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:62px}"]});let t=e;return t})();var ut=(()=>{let e=class e{onPasswordStrengthChanged(n){this.strongPassword=n}constructor(n){this.fb=n,this.title="password-strength",this.strongPassword=!1}ngOnInit(){this.initForm()}initForm(){this.passwordForm=this.fb.group({password:["",[U.required]]})}};e.\u0275fac=function(r){return new(r||e)(a(ot))},e.\u0275cmp=N({type:e,selectors:[["app-root"]],standalone:!0,features:[G],decls:12,vars:3,consts:[[1,"container"],[1,"row"],[1,"col","mt-5","col-xs-6","col-md-6","col-lg-6"],[3,"formGroup"],[1,"form-group"],["type","password","formControlName","password","placeholder","Choose a password","autocomplete","new-password",1,"form-control"],[3,"passwordToCheck","passwordStrength"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(r,o){r&1&&(h(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),S(4,"Check Password Strength"),f(),E(5,"br"),h(6,"form",3)(7,"div",4),E(8,"input",5),h(9,"app-password-strength",6),F("passwordStrength",function(l){return o.onPasswordStrengthChanged(l)}),f()(),h(10,"button",7),S(11," Submit "),f()()()()()),r&2&&(u(6),_("formGroup",o.passwordForm),u(3),_("passwordToCheck",o.passwordForm.value.password),u(1),_("disabled",o.passwordForm.invalid||!o.onPasswordStrengthChanged))},dependencies:[lt,st,nt,z,Ke,Je,at,ae,le],styles:[".col[_ngcontent-%COMP%]{margin:0 auto;text-align:center}",`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]});let t=e;return t})();var dt=[];var ct={providers:[Me(dt),be()]};var Xt={providers:[De()]},ht=ye(ct,Xt);var Yt=()=>Ve(ut,ht),Wn=Yt;export{Wn as a};