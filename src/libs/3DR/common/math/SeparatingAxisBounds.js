function _0x1b3d(_0x1ad04d,_0x2aa4f6){const _0x5aaa9c=_0x5aaa();return _0x1b3d=function(_0x1b3d6f,_0x213e6c){_0x1b3d6f=_0x1b3d6f-0x121;let _0x475dc3=_0x5aaa9c[_0x1b3d6f];return _0x475dc3;},_0x1b3d(_0x1ad04d,_0x2aa4f6);}const _0x8b9ea5=_0x1b3d;(function(_0x3748c0,_0x16320e){const _0x2170b6=_0x1b3d,_0x149155=_0x3748c0();while(!![]){try{const _0x22f062=parseInt(_0x2170b6(0x124))/0x1+parseInt(_0x2170b6(0x12c))/0x2*(-parseInt(_0x2170b6(0x135))/0x3)+parseInt(_0x2170b6(0x126))/0x4+parseInt(_0x2170b6(0x12d))/0x5*(-parseInt(_0x2170b6(0x123))/0x6)+-parseInt(_0x2170b6(0x134))/0x7+parseInt(_0x2170b6(0x125))/0x8*(-parseInt(_0x2170b6(0x121))/0x9)+parseInt(_0x2170b6(0x128))/0xa*(parseInt(_0x2170b6(0x12a))/0xb);if(_0x22f062===_0x16320e)break;else _0x149155['push'](_0x149155['shift']());}catch(_0x127c36){_0x149155['push'](_0x149155['shift']());}}}(_0x5aaa,0x594b5));import{Vector3}from'../../libs/build/three.module.js';export class SeparatingAxisBounds{constructor(){const _0x4da10f=_0x1b3d;this[_0x4da10f(0x131)]=Infinity,this[_0x4da10f(0x132)]=-Infinity;}[_0x8b9ea5(0x127)](_0x1263b1,_0xab5b99){const _0x123db7=_0x8b9ea5;let _0x327129=Infinity,_0x3bda5d=-Infinity;for(let _0x2b4808=0x0,_0x34de3f=_0x1263b1[_0x123db7(0x130)];_0x2b4808<_0x34de3f;_0x2b4808++){const _0x598756=_0x1263b1[_0x2b4808],_0x13659a=_0x598756[_0xab5b99];_0x327129=_0x13659a<_0x327129?_0x13659a:_0x327129,_0x3bda5d=_0x13659a>_0x3bda5d?_0x13659a:_0x3bda5d;}this[_0x123db7(0x131)]=_0x327129,this[_0x123db7(0x132)]=_0x3bda5d;}[_0x8b9ea5(0x12f)](_0x35d9f6,_0x463088){const _0x377d97=_0x8b9ea5;let _0x4c37b5=Infinity,_0x3db889=-Infinity;for(let _0x3349cb=0x0,_0x2e35b4=_0x463088['length'];_0x3349cb<_0x2e35b4;_0x3349cb++){const _0x33e975=_0x463088[_0x3349cb],_0x1bfdd7=_0x35d9f6['dot'](_0x33e975);_0x4c37b5=_0x1bfdd7<_0x4c37b5?_0x1bfdd7:_0x4c37b5,_0x3db889=_0x1bfdd7>_0x3db889?_0x1bfdd7:_0x3db889;}this[_0x377d97(0x131)]=_0x4c37b5,this[_0x377d97(0x132)]=_0x3db889;}['isSeparated'](_0x35b623){const _0x551b71=_0x8b9ea5;return this[_0x551b71(0x131)]>_0x35b623[_0x551b71(0x132)]||_0x35b623[_0x551b71(0x131)]>this[_0x551b71(0x132)];}}function _0x5aaa(){const _0x400365=['55NlZbfL','setFromBox','setFromPoints','length','min','max','satBounds','3150014eIxsEl','1044DpHnou','342918WimYPX','isSeparated','391074cNTJGj','95496uZwfLr','8jOfaPL','595988yZATyQ','setFromPointsField','710tjMLgA','points','228833IaoATf','prototype','866XvqsId'];_0x5aaa=function(){return _0x400365;};return _0x5aaa();}SeparatingAxisBounds[_0x8b9ea5(0x12b)][_0x8b9ea5(0x12e)]=(function(){const _0x47b6f4=new Vector3();return function _0x31888b(_0x4088cb,_0x3319af){const _0x2be86f=_0x1b3d,_0x2d8065=_0x3319af[_0x2be86f(0x131)],_0x294019=_0x3319af[_0x2be86f(0x132)];let _0x500b07=Infinity,_0x148da9=-Infinity;for(let _0x5a33fa=0x0;_0x5a33fa<=0x1;_0x5a33fa++){for(let _0x2a0585=0x0;_0x2a0585<=0x1;_0x2a0585++){for(let _0x163c24=0x0;_0x163c24<=0x1;_0x163c24++){_0x47b6f4['x']=_0x2d8065['x']*_0x5a33fa+_0x294019['x']*(0x1-_0x5a33fa),_0x47b6f4['y']=_0x2d8065['y']*_0x2a0585+_0x294019['y']*(0x1-_0x2a0585),_0x47b6f4['z']=_0x2d8065['z']*_0x163c24+_0x294019['z']*(0x1-_0x163c24);const _0x32bf22=_0x4088cb['dot'](_0x47b6f4);_0x500b07=Math[_0x2be86f(0x131)](_0x32bf22,_0x500b07),_0x148da9=Math[_0x2be86f(0x132)](_0x32bf22,_0x148da9);}}}this[_0x2be86f(0x131)]=_0x500b07,this[_0x2be86f(0x132)]=_0x148da9;};}());export const areIntersecting=(function(){const _0x322ae5=new SeparatingAxisBounds();return function _0x59ce37(_0x376d1a,_0x3bae2b){const _0x4fe666=_0x1b3d,_0x350392=_0x376d1a[_0x4fe666(0x129)],_0x4a5de8=_0x376d1a['satAxes'],_0x1e1555=_0x376d1a['satBounds'],_0x2afe55=_0x3bae2b[_0x4fe666(0x129)],_0x9ebf68=_0x3bae2b['satAxes'],_0x2a9286=_0x3bae2b[_0x4fe666(0x133)];for(let _0x3bd242=0x0;_0x3bd242<0x3;_0x3bd242++){const _0x54e44d=_0x1e1555[_0x3bd242],_0x2ab33d=_0x4a5de8[_0x3bd242];_0x322ae5[_0x4fe666(0x12f)](_0x2ab33d,_0x2afe55);if(_0x54e44d[_0x4fe666(0x122)](_0x322ae5))return![];}for(let _0x380c98=0x0;_0x380c98<0x3;_0x380c98++){const _0x100cd8=_0x2a9286[_0x380c98],_0x4f069a=_0x9ebf68[_0x380c98];_0x322ae5['setFromPoints'](_0x4f069a,_0x350392);if(_0x100cd8[_0x4fe666(0x122)](_0x322ae5))return![];}};}());