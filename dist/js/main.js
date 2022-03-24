/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animation.ts":
/*!*****************************!*\
  !*** ./src/js/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Snowflake_1 = __webpack_require__(/*! ./Snowflake */ \"./src/js/Snowflake.ts\");\n\nvar Animation = function () {\n  function Animation(ctx, canvasElement, center, snowflakes, sky) {\n    this.ctx = ctx;\n    this.canvasElement = canvasElement;\n    this.center = center;\n    this.snowflakes = snowflakes;\n    this.sky = sky;\n    this.animate();\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.sky.draw();\n    this.snowflakes.forEach(function (snowflake) {\n      snowflake.update();\n    });\n    window.requestAnimationFrame(function () {\n      _this.snowflakes.push(new Snowflake_1.Snowflake(_this.canvasElement, _this.ctx, _this.center));\n\n      _this.randomNumber = Math.random();\n\n      if (_this.randomNumber > 0.5) {} else {}\n\n      _this.animate();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBSUE7QUFRSSxxQkFBWUEsR0FBWixFQUEyQ0MsYUFBM0MsRUFBNkVDLE1BQTdFLEVBQStHQyxVQUEvRyxFQUF3SUMsR0FBeEksRUFBZ0o7QUFDNUksU0FBS0osR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE9BQUw7QUFDSDs7QUFFREM7QUFBQTs7QUFDSSxTQUFLTixHQUFMLENBQVNPLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS04sYUFBTCxDQUFtQk8sS0FBNUMsRUFBbUQsS0FBS1AsYUFBTCxDQUFtQlEsTUFBdEU7QUFDQSxTQUFLTCxHQUFMLENBQVNNLElBQVQ7QUFDQSxTQUFLUCxVQUFMLENBQWdCUSxPQUFoQixDQUF3QixVQUFDQyxTQUFELEVBQXFCO0FBQ3pDQSxlQUFTLENBQUNDLE1BQVY7QUFDSCxLQUZEO0FBSUFDLFVBQU0sQ0FBQ0MscUJBQVAsQ0FBNkI7QUFDekJDLFdBQUksQ0FBQ2IsVUFBTCxDQUFnQmMsSUFBaEIsQ0FBcUIsSUFBSUMscUJBQUosQ0FBY0YsS0FBSSxDQUFDZixhQUFuQixFQUFrQ2UsS0FBSSxDQUFDaEIsR0FBdkMsRUFBNENnQixLQUFJLENBQUNkLE1BQWpELENBQXJCOztBQUNBYyxXQUFJLENBQUNHLFlBQUwsR0FBb0JDLElBQUksQ0FBQ0MsTUFBTCxFQUFwQjs7QUFDQSxVQUFJTCxLQUFJLENBQUNHLFlBQUwsR0FBb0IsR0FBeEIsRUFBNkIsQ0FFNUIsQ0FGRCxNQUVPLENBRU47O0FBQ0RILFdBQUksQ0FBQ1gsT0FBTDtBQUNILEtBVEQ7QUFVSCxHQWpCRDs7QUFrQko7QUFBQyxDQW5DRDs7QUFBYWlCLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL0FuaW1hdGlvbi50cz83Y2VjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U25vd2ZsYWtlfSBmcm9tIFwiLi9Tbm93Zmxha2VcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge1NreX0gZnJvbSBcIi4vU2t5XCI7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNlbnRlcjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByaXZhdGUgc25vd2ZsYWtlczogU25vd2ZsYWtlW107XG4gICAgcHJpdmF0ZSBza3k6IFNreTtcbiAgICBwcml2YXRlIHJhbmRvbU51bWJlcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjZW50ZXI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgc25vd2ZsYWtlczogU25vd2ZsYWtlW10sIHNreTogU2t5KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcbiAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gc25vd2ZsYWtlcztcbiAgICAgICAgdGhpcy5za3kgPSBza3k7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGgsIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNreS5kcmF3KCk7XG4gICAgICAgIHRoaXMuc25vd2ZsYWtlcy5mb3JFYWNoKChzbm93Zmxha2U6IFNub3dmbGFrZSkgPT4ge1xuICAgICAgICAgICAgc25vd2ZsYWtlLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbm93Zmxha2VzLnB1c2gobmV3IFNub3dmbGFrZSh0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMuY3R4LCB0aGlzLmNlbnRlcikpO1xuICAgICAgICAgICAgdGhpcy5yYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmFuZG9tTnVtYmVyID4gMC41KSB7XG4gICAgICAgICAgICAgICAgLy8gR8OpbsOpcmVyIHVuIG5vdXZlYXUgZmxvY29uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVmZmFjZXIgdW4gZGVzIGZsb2NvbnMgYXUgc29sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbImN0eCIsImNhbnZhc0VsZW1lbnQiLCJjZW50ZXIiLCJzbm93Zmxha2VzIiwic2t5IiwiYW5pbWF0ZSIsIkFuaW1hdGlvbiIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhdyIsImZvckVhY2giLCJzbm93Zmxha2UiLCJ1cGRhdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyIsInB1c2giLCJTbm93Zmxha2VfMSIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Animation.ts\n");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/js/Sky.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/js/Animation.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvasElement = document.getElementById('my-canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.sky = new Sky_1.Sky(this.canvasElement, this.ctx);\n    this.center = {\n      x: this.canvasElement.width / 2,\n      y: this.canvasElement.height / 2\n    };\n    this.newX = this.center.x;\n    this.addEventListeners();\n    this.snowflakes = [];\n    this.animation = new Animation_1.Animation(this.ctx, this.canvasElement, this.center, this.snowflakes, this.sky);\n  }\n\n  Main.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('mousemove', function (event) {\n      _this.oldX = _this.newX;\n      _this.newX = event.x;\n      console.log(_this.newX, _this.oldX);\n    });\n  };\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBR0E7O0FBRUE7QUFVSTtBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLElBQUlDLFNBQUosQ0FBUSxLQUFLTixhQUFiLEVBQTRCLEtBQUtHLEdBQWpDLENBQVg7QUFDQSxTQUFLSSxNQUFMLEdBQWM7QUFDVkMsT0FBQyxFQUFFLEtBQUtSLGFBQUwsQ0FBbUJTLEtBQW5CLEdBQTJCLENBRHBCO0FBRVZDLE9BQUMsRUFBRSxLQUFLVixhQUFMLENBQW1CVyxNQUFuQixHQUE0QjtBQUZyQixLQUFkO0FBSUEsU0FBS0MsSUFBTCxHQUFZLEtBQUtMLE1BQUwsQ0FBWUMsQ0FBeEI7QUFDQSxTQUFLSyxpQkFBTDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWMsS0FBS2IsR0FBbkIsRUFBd0IsS0FBS0gsYUFBN0IsRUFBNEMsS0FBS08sTUFBakQsRUFBeUQsS0FBS08sVUFBOUQsRUFBMEUsS0FBS1QsR0FBL0UsQ0FBakI7QUFDSDs7QUFFRFk7QUFBQTs7QUFDSUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDQyxLQUFELEVBQWtCO0FBQ25EQyxXQUFJLENBQUNDLElBQUwsR0FBWUQsS0FBSSxDQUFDVCxJQUFqQjtBQUNBUyxXQUFJLENBQUNULElBQUwsR0FBWVEsS0FBSyxDQUFDWixDQUFsQjtBQUNBZSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBSSxDQUFDVCxJQUFqQixFQUF1QlMsS0FBSSxDQUFDQyxJQUE1QjtBQUNILEtBSkQ7QUFLSCxHQU5EOztBQU9KO0FBQUMsQ0EvQkQ7O0FBaUNBLElBQUlMLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9NYWluLnRzPzAxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTa3l9IGZyb20gXCIuL1NreVwiO1xuaW1wb3J0IHtTbm93Zmxha2V9IGZyb20gXCIuL1Nub3dmbGFrZVwiO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tIFwiLi9BbmltYXRpb25cIjtcblxuY2xhc3MgTWFpbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2t5OiBTa3k7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZW50ZXI6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNub3dmbGFrZXM6IFNub3dmbGFrZVtdO1xuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBBbmltYXRpb247XG4gICAgcHJpdmF0ZSBvbGRYOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBuZXdYOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnNreSA9IG5ldyBTa3kodGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuY2VudGVyID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXNFbGVtZW50LndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgLyAyXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubmV3WCA9IHRoaXMuY2VudGVyLng7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gW107XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbih0aGlzLmN0eCwgdGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmNlbnRlciwgdGhpcy5zbm93Zmxha2VzLCB0aGlzLnNreSk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub2xkWCA9IHRoaXMubmV3WDtcbiAgICAgICAgICAgIHRoaXMubmV3WCA9IGV2ZW50Lng7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld1gsIHRoaXMub2xkWCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5uZXcgTWFpbigpOyJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJza3kiLCJTa3lfMSIsImNlbnRlciIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJuZXdYIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzbm93Zmxha2VzIiwiYW5pbWF0aW9uIiwiQW5pbWF0aW9uXzEiLCJNYWluIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX3RoaXMiLCJvbGRYIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/Sky.ts":
/*!***********************!*\
  !*** ./src/js/Sky.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Sky = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Sky = function () {\n  function Sky(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.resize();\n    this.addEventListeners();\n    this.generateGradient();\n    this.draw();\n  }\n\n  Sky.prototype.resize = function () {\n    this.canvasElement.width = window.innerWidth;\n    this.canvasElement.height = window.innerHeight;\n    this.generateGradient();\n    this.draw();\n  };\n\n  Sky.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resize();\n    });\n  };\n\n  Sky.prototype.generateGradient = function () {\n    this.gradient = this.ctx.createLinearGradient(this.canvasElement.height / 2, 0, this.canvasElement.height / 2, this.canvasElement.height);\n    this.gradient.addColorStop(0, settings_1.settings.sky.gradient[0]);\n    this.gradient.addColorStop(1, settings_1.settings.sky.gradient[1]);\n  };\n\n  Sky.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.ctx.closePath();\n  };\n\n  return Sky;\n}();\n\nexports.Sky = Sky;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFLSSxlQUFZQSxhQUFaLEVBQThDQyxHQUE5QyxFQUEyRTtBQUN2RSxTQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUw7QUFDQSxTQUFLQyxpQkFBTDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUNIOztBQUVEQztBQUNJLFNBQUtOLGFBQUwsQ0FBbUJPLEtBQW5CLEdBQTJCQyxNQUFNLENBQUNDLFVBQWxDO0FBQ0EsU0FBS1QsYUFBTCxDQUFtQlUsTUFBbkIsR0FBNEJGLE1BQU0sQ0FBQ0csV0FBbkM7QUFDQSxTQUFLUCxnQkFBTDtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQUxEOztBQU9BQztBQUFBOztBQUNJRSxVQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQzlCQyxXQUFJLENBQUNYLE1BQUw7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFNQUk7QUFDSSxTQUFLUSxRQUFMLEdBQWdCLEtBQUtiLEdBQUwsQ0FBU2Msb0JBQVQsQ0FBOEIsS0FBS2YsYUFBTCxDQUFtQlUsTUFBbkIsR0FBNEIsQ0FBMUQsRUFBNkQsQ0FBN0QsRUFBZ0UsS0FBS1YsYUFBTCxDQUFtQlUsTUFBbkIsR0FBNEIsQ0FBNUYsRUFBK0YsS0FBS1YsYUFBTCxDQUFtQlUsTUFBbEgsQ0FBaEI7QUFDQSxTQUFLSSxRQUFMLENBQWNFLFlBQWQsQ0FBMkIsQ0FBM0IsRUFBOEJDLG9CQUFTQyxHQUFULENBQWFKLFFBQWIsQ0FBc0IsQ0FBdEIsQ0FBOUI7QUFDQSxTQUFLQSxRQUFMLENBQWNFLFlBQWQsQ0FBMkIsQ0FBM0IsRUFBOEJDLG9CQUFTQyxHQUFULENBQWFKLFFBQWIsQ0FBc0IsQ0FBdEIsQ0FBOUI7QUFDSCxHQUpEOztBQU1BUjtBQUNJLFNBQUtMLEdBQUwsQ0FBU2tCLFNBQVQ7QUFDQSxTQUFLbEIsR0FBTCxDQUFTbUIsU0FBVCxHQUFxQixLQUFLTixRQUExQjtBQUNBLFNBQUtiLEdBQUwsQ0FBU29CLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBS3JCLGFBQUwsQ0FBbUJPLEtBQTNDLEVBQWtELEtBQUtQLGFBQUwsQ0FBbUJVLE1BQXJFO0FBQ0EsU0FBS1QsR0FBTCxDQUFTcUIsU0FBVDtBQUNILEdBTEQ7O0FBTUo7QUFBQyxDQXZDRDs7QUFBYUMsV0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9Ta3kudHM/ZGUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgU2t5IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBncmFkaWVudDogQ2FudmFzR3JhZGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmFkaWVudCgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVHcmFkaWVudCgpIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgLyAyLCAwLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHNldHRpbmdzLnNreS5ncmFkaWVudFswXSk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIHNldHRpbmdzLnNreS5ncmFkaWVudFsxXSk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCwgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImN0eCIsInJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZ2VuZXJhdGVHcmFkaWVudCIsImRyYXciLCJTa3kiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJzZXR0aW5nc18xIiwic2t5IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Sky.ts\n");

/***/ }),

/***/ "./src/js/Snowflake.ts":
/*!*****************************!*\
  !*** ./src/js/Snowflake.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Snowflake = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar math_1 = __webpack_require__(/*! ./helpers/math */ \"./src/js/helpers/math.ts\");\n\nvar Snowflake = function () {\n  function Snowflake(canvasElement, ctx, center) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.center = center;\n    this.generate();\n    this.generateRadialGradient();\n  }\n\n  Snowflake.prototype.generate = function () {\n    this.radius = (0, math_1.random)(settings_1.settings.snowflake.radius.min, settings_1.settings.snowflake.radius.max);\n    this.speedX = (0, math_1.random)(settings_1.settings.snowflake.speedX.min, settings_1.settings.snowflake.speedX.max);\n    this.speedY = (0, math_1.random)(settings_1.settings.snowflake.speedY.min, settings_1.settings.snowflake.speedY.max);\n    this.position = {\n      x: this.radius + Math.random() * (this.canvasElement.width - this.radius),\n      y: -this.radius * 2\n    };\n    this.opacity = (0, math_1.random)(settings_1.settings.snowflake.opacity.min, settings_1.settings.snowflake.opacity.max);\n    this.color = 'white';\n    this.hasFell = false;\n  };\n\n  Snowflake.prototype.generateRadialGradient = function () {\n    this.gradient = this.ctx.createRadialGradient(this.position.x, this.position.y, this.radius / 2, this.position.x, this.position.y, this.radius);\n    this.gradient.addColorStop(0, 'red');\n    this.gradient.addColorStop(1, 'white');\n  };\n\n  Snowflake.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fill();\n  };\n\n  Snowflake.prototype.update = function () {\n    if (!this.hasFell) {\n      this.position.x += this.speedX;\n      this.position.y += this.speedY;\n    }\n\n    this.draw();\n\n    if (this.position.y > this.canvasElement.height - this.radius) {\n      this.hasFell = true;\n      this.position.y = this.canvasElement.height - this.radius;\n    }\n  };\n\n  return Snowflake;\n}();\n\nexports.Snowflake = Snowflake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF2RCxFQUErRDtBQUMzRCxXQUFLZSxPQUFMLEdBQWUsSUFBZjtBQUNBLFdBQUtSLFFBQUwsQ0FBY0ssQ0FBZCxHQUFrQixLQUFLbEIsYUFBTCxDQUFtQitCLE1BQW5CLEdBQTRCLEtBQUt6QixNQUFuRDtBQUVIO0FBQ0osR0FiRDs7QUFjSjtBQUFDLENBM0REOztBQUFhMEIsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvU25vd2ZsYWtlLnRzP2Y1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7cmFuZG9tfSBmcm9tIFwiLi9oZWxwZXJzL21hdGhcIjtcblxuZXhwb3J0IGNsYXNzIFNub3dmbGFrZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByaXZhdGUgc3BlZWRYOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzcGVlZFk6IG51bWJlcjtcbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyO1xuICAgIHByaXZhdGUgaGFzRmVsbDogYm9vbGVhbjtcbiAgICBwcml2YXRlIG9wYWNpdHk6IG51bWJlcjtcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBncmFkaWVudDogQ2FudmFzR3JhZGllbnQ7XG5cblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2VudGVyOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICAgICAgICB0aGlzLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSYWRpYWxHcmFkaWVudCgpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlKCkge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhbmRvbShzZXR0aW5ncy5zbm93Zmxha2UucmFkaXVzLm1pbiwgc2V0dGluZ3Muc25vd2ZsYWtlLnJhZGl1cy5tYXgpO1xuICAgICAgICB0aGlzLnNwZWVkWCA9IHJhbmRvbShzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRYLm1pbiwgc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWC5tYXgpO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IHJhbmRvbShzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRZLm1pbiwgc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWS5tYXgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6IHRoaXMucmFkaXVzICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggLSB0aGlzLnJhZGl1cyksIHk6IC10aGlzLnJhZGl1cyAqIDJ9O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSByYW5kb20oc2V0dGluZ3Muc25vd2ZsYWtlLm9wYWNpdHkubWluLCBzZXR0aW5ncy5zbm93Zmxha2Uub3BhY2l0eS5tYXgpO1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgdGhpcy5oYXNGZWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVSYWRpYWxHcmFkaWVudCgpIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cy8yLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmVkJyk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICd3aGl0ZScpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGZWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZFk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXcoKTtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ID4gdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZlbGwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCAtIHRoaXMucmFkaXVzO1xuXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJjdHgiLCJjZW50ZXIiLCJnZW5lcmF0ZSIsImdlbmVyYXRlUmFkaWFsR3JhZGllbnQiLCJTbm93Zmxha2UiLCJyYWRpdXMiLCJzZXR0aW5nc18xIiwic25vd2ZsYWtlIiwibWluIiwibWF4Iiwic3BlZWRYIiwic3BlZWRZIiwicG9zaXRpb24iLCJ4IiwiTWF0aCIsInJhbmRvbSIsIndpZHRoIiwieSIsIm9wYWNpdHkiLCJjb2xvciIsImhhc0ZlbGwiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhdyIsImhlaWdodCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Snowflake.ts\n");

/***/ }),

/***/ "./src/js/helpers/math.ts":
/*!********************************!*\
  !*** ./src/js/helpers/math.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVscGVycy9tYXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBZ0JBLE1BQWhCLENBQXVCQyxHQUF2QixFQUFtQ0MsR0FBbkMsRUFBK0NDLElBQS9DLEVBQW1FO0FBQXBCO0FBQUFBO0FBQW9COztBQUMvRCxNQUFJQSxJQUFKLEVBQVU7QUFDTixXQUFPQyxJQUFJLENBQUNELElBQUwsQ0FBVUYsR0FBRyxHQUFHRyxJQUFJLENBQUNKLE1BQUwsTUFBaUJFLEdBQUcsR0FBQ0QsR0FBckIsQ0FBaEIsQ0FBUDtBQUNIOztBQUNELFNBQU9HLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLEdBQUdHLElBQUksQ0FBQ0osTUFBTCxNQUFpQkUsR0FBRyxHQUFDRCxHQUFyQixDQUFqQixDQUFQO0FBQ0g7O0FBTERLLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvaGVscGVycy9tYXRoLnRzP2MyMjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46bnVtYmVyLCBtYXg6bnVtYmVyLCBjZWlsOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChjZWlsKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSk7XG4gICAgfVxuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikpO1xufSJdLCJuYW1lcyI6WyJyYW5kb20iLCJtaW4iLCJtYXgiLCJjZWlsIiwiTWF0aCIsImZsb29yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/helpers/math.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: [\"hsl(219,93%,11%)\", \"hsl(219,100%,19%)\"]\n  },\n  snowflake: {\n    radius: {\n      min: 2,\n      max: 12\n    },\n    opacity: {\n      min: 0.5,\n      max: 0.9\n    },\n    speedX: {\n      min: 1,\n      max: 4\n    },\n    speedY: {\n      min: 1,\n      max: 6\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLG1CQUFyQjtBQURULEdBRGU7QUFJcEJDLFdBQVMsRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FERDtBQUVQQyxXQUFPLEVBQUU7QUFBQ0YsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCLEtBRkY7QUFHUEUsVUFBTSxFQUFFO0FBQUNILFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkLEtBSEQ7QUFJUEcsVUFBTSxFQUFFO0FBQUNKLFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkO0FBSkQ7QUFKUyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgc2t5OiB7XG4gICAgICAgIGdyYWRpZW50OiBbXCJoc2woMjE5LDkzJSwxMSUpXCIsIFwiaHNsKDIxOSwxMDAlLDE5JSlcIl1cbiAgICB9LFxuICAgIHNub3dmbGFrZToge1xuICAgICAgICByYWRpdXM6IHttaW46IDIsIG1heDogMTJ9LFxuICAgICAgICBvcGFjaXR5OiB7bWluOiAwLjUsIG1heDogMC45fSxcbiAgICAgICAgc3BlZWRYOiB7bWluOiAxLCBtYXg6IDR9LFxuICAgICAgICBzcGVlZFk6IHttaW46IDEsIG1heDogNn0sXG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJzbm93Zmxha2UiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklet_it_snow"] = self["webpackChunklet_it_snow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;