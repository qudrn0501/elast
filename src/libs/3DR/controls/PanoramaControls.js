function _0x4d1e(){const _0x21d741=['position','5qHHIbc','setFromMatrixColumn','716442JSUtoz','domElement','connect','moveRight','8203943pNcxDa','mousedown','body','warn','moveForward','dispose','41288vLuSOH','verticalRotation','addScaledVector','addEventListener','1184312aiLrqk','73549uqBzWm','282pOhIlw','_directionOffset','min','mozMovementY','isReverse','mousemove','2540228FQlmDF','mouseup','isPressed','quaternion','disconnect','minPolarAngle','removeEventListener','setMouseReverse','477160AbbEVu','dispatchEvent','maxPolarAngle','matrix','movementX','webkitMovementX','ownerDocument','change','8hADjfd','27kKVuKe','mozMovementX','setFromQuaternion'];_0x4d1e=function(){return _0x21d741;};return _0x4d1e();}const _0xa6c77e=_0x3b50;(function(_0x5cf47d,_0x536f58){const _0x5adcd9=_0x3b50,_0x4b8899=_0x5cf47d();while(!![]){try{const _0x175713=-parseInt(_0x5adcd9(0x108))/0x1*(parseInt(_0x5adcd9(0xf7))/0x2)+parseInt(_0x5adcd9(0xfe))/0x3+parseInt(_0x5adcd9(0xe7))/0x4*(-parseInt(_0x5adcd9(0xfc))/0x5)+parseInt(_0x5adcd9(0xe1))/0x6*(parseInt(_0x5adcd9(0xe0))/0x7)+-parseInt(_0x5adcd9(0xdf))/0x8+parseInt(_0x5adcd9(0xf8))/0x9*(-parseInt(_0x5adcd9(0xef))/0xa)+parseInt(_0x5adcd9(0x102))/0xb;if(_0x175713===_0x536f58)break;else _0x4b8899['push'](_0x4b8899['shift']());}catch(_0x1f5c8d){_0x4b8899['push'](_0x4b8899['shift']());}}}(_0x4d1e,0x5e7f4));import{THREE}from'../3DR.js';import{Euler,EventDispatcher,Vector3}from'../libs/build/three.module.js';function _0x3b50(_0x15b91b,_0xec8d22){const _0x4d1eb9=_0x4d1e();return _0x3b50=function(_0x3b5012,_0x5b26ba){_0x3b5012=_0x3b5012-0xdd;let _0x17a9b6=_0x4d1eb9[_0x3b5012];return _0x17a9b6;},_0x3b50(_0x15b91b,_0xec8d22);}const _euler=new Euler(0x0,0x0,0x0,'YXZ'),_vector=new Vector3(),_changeEvent={'type':_0xa6c77e(0xf6)},_PI_2=Math['PI']/0x2;class PanoramaControls extends EventDispatcher{constructor(_0xcadab8,_0x2c370a){const _0x259ae7=_0xa6c77e;super();_0x2c370a===undefined&&(console[_0x259ae7(0x105)]('THREE.PointerLockControls:\x20The\x20second\x20parameter\x20\x22domElement\x22\x20is\x20now\x20mandatory.'),_0x2c370a=document[_0x259ae7(0x104)]);this[_0x259ae7(0xff)]=_0x2c370a,this['minPolarAngle']=0x0,this[_0x259ae7(0xf1)]=Math['PI'],this[_0x259ae7(0xe9)]=![];const _0x3d4694=this;function _0x20e957(){const _0x2f52b2=_0x259ae7;_0x3d4694[_0x2f52b2(0xe9)]=!![];}function _0xdc69c7(){const _0x1d94db=_0x259ae7;_0x3d4694[_0x1d94db(0xe9)]=![];}function _0x4e84a8(_0x978a77){const _0xd769cf=_0x259ae7;if(_0x3d4694['isPressed']){const _0x5c6583=_0x978a77[_0xd769cf(0xf3)]||_0x978a77[_0xd769cf(0xf9)]||_0x978a77[_0xd769cf(0xf4)]||0x0,_0x29cd64=_0x978a77['movementY']||_0x978a77[_0xd769cf(0xe4)]||_0x978a77['webkitMovementY']||0x0;_euler[_0xd769cf(0xfa)](_0xcadab8[_0xd769cf(0xea)]),_0x3d4694[_0xd769cf(0xe5)]?(_euler['y']+=_0x5c6583*0.002,_euler['x']+=_0x29cd64*0.002):(_euler['y']-=_0x5c6583*0.002,_euler['x']-=_0x29cd64*0.002),_euler['x']=Math['max'](_PI_2-_0x3d4694[_0xd769cf(0xf1)],Math[_0xd769cf(0xe3)](_PI_2-_0x3d4694[_0xd769cf(0xec)],_euler['x'])),_0xcadab8[_0xd769cf(0xea)]['setFromEuler'](_euler),_0x3d4694[_0xd769cf(0xf0)](_changeEvent);}}this[_0x259ae7(0xee)]=function(_0x2c3119){const _0x171410=_0x259ae7;_0x3d4694[_0x171410(0xe5)]=_0x2c3119;},this[_0x259ae7(0x100)]=function(){const _0x637288=_0x259ae7;_0x3d4694['domElement'][_0x637288(0xf5)]['addEventListener'](_0x637288(0x103),_0x20e957),_0x3d4694['domElement'][_0x637288(0xf5)][_0x637288(0xde)](_0x637288(0xe8),_0xdc69c7),_0x3d4694[_0x637288(0xff)][_0x637288(0xf5)][_0x637288(0xde)](_0x637288(0xe6),_0x4e84a8);},this[_0x259ae7(0xeb)]=function(){const _0x4a031a=_0x259ae7;_0x3d4694[_0x4a031a(0xff)][_0x4a031a(0xf5)][_0x4a031a(0xed)](_0x4a031a(0x103),_0x20e957),_0x3d4694[_0x4a031a(0xff)][_0x4a031a(0xf5)][_0x4a031a(0xed)](_0x4a031a(0xe8),_0xdc69c7),_0x3d4694['domElement'][_0x4a031a(0xf5)][_0x4a031a(0xed)](_0x4a031a(0xe6),_0x4e84a8);},this[_0x259ae7(0x107)]=function(){const _0x4ce72a=_0x259ae7;this[_0x4ce72a(0xeb)]();},this['getObject']=function(){return _0xcadab8;},this['getDirection']=(function(){const _0xb718fe=new Vector3(0x0,0x0,-0x1);return function(_0x5765d8){const _0x1bd961=_0x3b50;return _0x5765d8['copy'](_0xb718fe)['applyQuaternion'](_0xcadab8[_0x1bd961(0xea)]);};}()),this[_0x259ae7(0x106)]=function(_0x304381){const _0x10ccc1=_0x259ae7;_vector[_0x10ccc1(0xfd)](_0xcadab8['matrix'],0x0),_vector['crossVectors'](_0xcadab8['up'],_vector),_0xcadab8['position'][_0x10ccc1(0xdd)](_vector,_0x304381);},this[_0x259ae7(0x101)]=function(_0x5e2cb8){const _0x24b1bc=_0x259ae7;_vector[_0x24b1bc(0xfd)](_0xcadab8[_0x24b1bc(0xf2)],0x0),_0xcadab8[_0x24b1bc(0xfb)][_0x24b1bc(0xdd)](_vector,_0x5e2cb8);},this[_0x259ae7(0x109)]=function(_0x5d591b){_0xcadab8['rotateOnWorldAxis'](new Vector3(0x0,_0x5d591b,0x0),0.01);},this[_0x259ae7(0xe2)]=function(_0x4966c4){let _0x810ec1=Math['PI'];if(_0x4966c4>0x0)_0x810ec1=-Math['PI']/0x2;else _0x4966c4<0x0&&(_0x810ec1=Math['PI']/0x2);return _0x810ec1;},this[_0x259ae7(0x100)]();}}export{PanoramaControls};