import React, { useEffect } from "react";
import image from "../assets/images/icon.png";

import $ from "jquery";
import "./menu.css";

function Menu() {
  const const1 = value1;
  (function (param1, param2) {
    const const2 = value1,
      var1 = param1();
    while (!![]) {
      try {
        const const3 =
          (parseInt(const2(0x1ad)) / 1) *
            (-parseInt(const2(0x1b8)) / 2) +
          (-parseInt(const2(0x1b1)) / 3) *
            (parseInt(const2(0x1b5)) / 4) +
          -parseInt(const2(0x1bb)) / 5 +
          (parseInt(const2(0x1b2)) / 6) *
            (-parseInt(const2(0x1b7)) / 7) +
          (parseInt(const2(0x1bd)) / 8) *
            (parseInt(const2(0x1b0)) / 9) +
          parseInt(const2(0x1b4)) / 10 +
          (-parseInt(const2(0x1c1)) / 11) *
            (-parseInt(const2(0x1bf)) / 12);
        if (const3 === param2) break;
        else var1["push"](var1["shift"]());
      } catch (param3) {
        var1["push"](var1["shift"]());
      }
    }
  })(param4, 0xb87f5);
  let accel = 0.8,
    convert = 0.2,
    _x = 0,
    _y = 0,
    released = 0,
    drag = 0,
    xstart = _x,
    ystart = _y,
    targetx = xstart,
    targety = ystart,
    r = 5,
    xpos = 0,
    ypos = 0,
    imgWidth = 100,
    imgHeight = 100,
    _xmouse = 0,
    _ymouse = 0;
  function value1(param5, param6) {
    const const4 = param4();
    return (
      (value1 = function (param7, _0x4097c6) {
        param7 = param7 - 0x1ad;
        let let1 = const4[param7];
        return let1;
      }),
      value1(param5, param6)
    );
  }
  useEffect(() => {
    const const5 = value1; 
	// 상수 const5를 정의하고 해당 값을 value1 함수 호출 결과로 설정합니다.
    let let2 = $(const5(0x1bc)); 
	// 변수 let2를 정의하고 그 값을 const5 함수가 반환한 값 0x1bc의 인수로 jQuery 함수를 호출한 결과로 설정합니다.
    (_x = let2[const5(0x1ae)]()["left"]), 
    console.log(_x);
	// 전역 변수 _x를 let2의 "offset" 메서드 호출에 의해 반환된 개체의 "left" 속성으로 설정합니다.
      (_y = let2[const5(0x1ae)]()[const5(0x1be)]), 
	  // 전역 변수 _y를 동일한 개체의 const5(0x1be) 속성 값으로 설정합니다.
      (xstart = _x), 
	  // 전역 변수 xstart를 현재 _x 값으로 설정합니다.
      (ystart = _y), 
	  // 전역 변수 ystart를 현재 _y 값으로 설정합니다.
      (targetx = _x), 
	  // 전역 변수 targetx를 현재 _x 값으로 설정합니다.
      (targety = _y), 
	  // 전역 변수 targety를 현재 _y 값으로 설정합니다.
      animate(); 
	  // 객체 애니메이션을 시작하기 위해 animate 함수를 호출합니다.
  }, []) 
  // useEffect의 두 번째 인수인 빈 배열 []은 구성 요소가 마운트된 후 이 효과가 한 번만 실행되어야 함을 나타냅니다.

    window["addEventListener"](const1(0x1b6), (_0x137ac9) => {
      const const6 = const1;
      (xstart = window["innerWidth"] / 2 - imgWidth / 2),
        (ystart = window[const6(0x1c0)] / 2 - imgHeight / 2);
    }),
    window["addEventListener"](const1(0x1ba), (param8) => {
      const const7 = const1;
      (_xmouse = param8[const7(0x1b3)] - imgWidth / 2),
        (_ymouse = param8["clientY"] - imgWidth / 2);
    }),
    window[const1(0x1c2)](const1(0x1b9), (param9) => {
      const const8 = const1;
      hitTest(param9)
        ? ((r = 10),
          (_xmouse = param9[const8(0x1b3)]),
          (_ymouse = param9["clientY"]),
          (drag = 1))
        : ((drag = 0), (released = 0));
    }),
    window[const1(0x1c2)](const1(0x1af), (_0x4aeb15) => {
      (released = 0), (drag = 0);
    }),
    window[const1(0x1c2)]("mousemove", (param10) => {
      const const9 = const1;
      hitTest(param10) &&
        ((_xmouse = param10[const9(0x1b3)]),
        (_ymouse = param10["clientY"]));
    });
  function param4() {
    const const10 = [
      "mousemove",
      "1941280mKyhwW",
      "#myimg",
      "8751896YFuhiP",
      "top",
      "636SqrbWw",
      "innerHeight",
      "363836JxPHUf",
      "addEventListener",
      "93542GbFfQw",
      "offset",
      "mouseup",
      "9RsNNHd",
      "15ZhyUdT",
      "6LQLZxj",
      "clientX",
      "8317630GYeXOE",
      "959996Whcjbl",
      "resize",
      "6724606YJuNOZ",
      "8lobwAZ",
      "mousedown",
    ];
    param4 = function () {
      return const10;
    };
    return param4();
  }

  function fn1(param11, param12) {
    var var2 = fn2();
    return (
      (fn1 = function (param13, _0x564f4d) {
        param13 = param13 - 0xef;
        var var3 = var2[param13];
        return var3;
      }),
      fn1(param11, param12)
    );
  }
  (function (param14, param15) {
    var var4 = fn1,
      var5 = param14();
    while (!![]) {
      try {
        var var11 =
          -parseInt(var4(0xfc)) / 1 +
          parseInt(var4(0xf5)) / 2 +
          (-parseInt(var4(0xf7)) / 3) *
            (-parseInt(var4(0xf2)) / 4) +
          -parseInt(var4(0xf9)) / 5 +
          (-parseInt(var4(0xfa)) / 6) *
            (-parseInt(var4(0xf8)) / 7) +
          -parseInt(var4(0xfd)) / 8 +
          parseInt(var4(0xfb)) / 9;
        if (var11 === param15) break;
        else var5["push"](var5["shift"]());
      } catch (_0x5f5a60) {
        var5["push"](var5["shift"]());
      }
    }
  })(fn2, 0xf3cc5);
  function fn2() {
    var var6 = [
      "top",
      "62676ZzORZj",
      "offset",
      "#myimg",
      "1259858rFqDGg",
      "width",
      "93lORWOd",
      "2233007NwSvCc",
      "1130105QrYPZw",
      "24rKrIyV",
      "13702869sBYyUZ",
      "1073735oqrKgO",
      "12926880swWUll",
      "left",
      "height",
    ];
    fn2 = function () {
      return var6;
    };
    return fn2();
  }
  function hitTest(param16) { 
    console.log(param16);
    // param16이라는 하나의 매개변수를 사용하는 hitTest라는 함수를 정의합니다.
    var var7 = fn1; 
    // fn1이라는 함수의 값을 var7이라는 변수에 할당합니다.
    let let3 = $(var7(0xf4)); 
    // let3이라는 변수를 정의하고 fn1(0xf4) 인수로 jQuery 함수 $를 호출한 결과를 할당합니다.
    var var8 = param16["clientX"], 
    // var8이라는 변수를 정의하고 여기에 param16 매개변수의 clientX 속성 값을 할당합니다.
        var9 = param16["clientY"]; 
        // var9라는 변수를 정의하고 여기에 param16 매개변수의 clientY 속성 값을 할당합니다.
    if (
      var8 >= let3[var7(0xf3)]()[var7(0xef)] && 
      // var8이 let3으로 표시된 요소의 왼쪽 가장자리보다 크거나 같은지 확인합니다.
      var8 <= let3[var7(0xf3)]()[var7(0xef)] + let3[var7(0xf6)]() && 
      // var8이 let3으로 표시된 요소의 오른쪽 가장자리보다 작거나 같은지 확인합니다.
      var9 >= let3[var7(0xf3)]()["top"] && 
      // var9가 let3으로 표시된 요소의 위쪽 가장자리보다 크거나 같은지 확인합니다.
      var9 <= let3["offset"]()[var7(0xf1)] + let3[var7(0xf0)]() 
      // var9가 let3으로 표시된 요소의 아래쪽 가장자리보다 작거나 같은지 확인합니다.
    )
      return !![]; 
      // 점이 요소와 교차하면 true를 반환합니다
    return ![]; 
    // 그렇지 않으면 false를 반환합니다.
  }
  function fn3() {
    const const11 = [
      "7445526RNEDwO",
      "6734403aJeEwk",
      "offset",
      "8ipbUjF",
      "4VZihEj",
      "5583630BtVtoW",
      "5256965vGzzik",
      "103386PWLkSt",
      "3622947YMaIYF",
      "9713312ZTnXJH",
      "#myimg",
      "10cNOuCc",
      "top",
    ];
    fn3 = function () {
      return const11;
    };
    return fn3();
  }
  (function (param17, param18) {
    const const12 = fn4,
      var10 = param17();
    while (!![]) {
      try {
        const const13 =
          (-parseInt(const12(0xc0)) / 1) *
            (-parseInt(const12(0xbc)) / 2) +
          -parseInt(const12(0xbd)) / 3 +
          (parseInt(const12(0xb9)) / 4) *
            (parseInt(const12(0xbb)) / 5) +
          -parseInt(const12(0xc2)) / 6 +
          (-parseInt(const12(0xbe)) / 7) *
            (-parseInt(const12(0xb8)) / 8) +
          parseInt(const12(0xb6)) / 9 +
          -parseInt(const12(0xba)) / 10;
        if (const13 === param18) break;
        else var10["push"](var10["shift"]());
      } catch (_0x108d48) {
        var10["push"](var10["shift"]());
      }
    }
  })(fn3, 0xaa3b9);
  function fn4(param19, param20) {
    const const14 = fn3();
    return (
      (fn4 = function (param21, _0x182e1f) {
        param21 = param21 - 0xb6;
        let let4 = const14[param21];
        return let4;
      }),
      fn4(param19, param20)
    );
  }
function animate() {
    const const15 = fn4; 
	  // 상수 const15를 정의하고 해당 값을 fn4 함수 호출 결과로 설정합니다.
    let let5 = $(const15(0xbf)), 
	    // 변수 let5를 정의하고 그 값을 fn4 함수가 반환한 값 0xbf의 인수로 jQuery 함수를 호출한 결과로 설정합니다.
      var12 = {
        clientX: let5[const15(0xb7)]()["left"], 
		    // 변수 var12를 정의하고 클라이언트X 속성을 let5의 "offset" 메서드 호출에 의해 반환된 개체의 "left" 속성으로 설정합니다.
        clientY: let5[const15(0xb7)]()[const15(0xc1)], 
		    // var12의 clientY 속성을 동일한 개체의 const15(0xc1) 속성 값으로 설정합니다.
      };
    hitTest(var12) && drag == 1 && released == 0
	  // 마우스가 개체 위에 있는지, 드래그 중이지만 놓지 않았는지 확인합니다.
      ? ((targetx = _xmouse - 50), (targety = _ymouse - 50)) 
	  // targetx 및 targety를 마우스 위치에서 50픽셀을 뺀 값으로 설정합니다.
      : ((targetx = xstart), (targety = ystart)), 
	  // targetx 및 targety를 초기값으로 설정합니다.
      (xpos = xpos * accel + (targetx - _x) * convert), 
	  // 현재 위치, 목표 위치, 일부 가속 및 변환 계수를 기반으로 새 xpos를 계산합니다.
      (ypos = ypos * accel + (targety - _y) * convert), 
	  // 동일한 요소를 기반으로 새 ypos를 계산합니다.
      (_x += xpos), 
	  // 현재 _x 값에 새 xpos를 추가합니다.
      (_y += ypos), 
	  // 현재 _y 값에 새 ypos를 추가합니다.
      let5["offset"]({ top: _y, left: _x }), 
	  // let5의 "offset" 속성을 새로운 _x 및 _y 값으로 설정합니다.
      requestAnimationFrame(animate); 
	  // 다음 애니메이션 프레임에서 animate 함수가 다시 호출되도록 요청합니다.
  }

  return (
    <div id="mydiv">
      <img id="myimg" src={image} width={imgWidth} height={imgHeight} />
    </div>
  );
}

export default Menu;
