var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/gsap/dist/gsap.js
var require_gsap = __commonJS({
  "node_modules/gsap/dist/gsap.js"(exports2, module2) {
    (function(global, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
    })(exports2, function(exports3) {
      "use strict";
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      var _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      }, _defaults2 = {
        duration: 0.5,
        overwrite: false,
        delay: 0
      }, _suppressOverwrites2, _reverting, _context3, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString3 = function _isString4(value) {
        return typeof value === "string";
      }, _isFunction3 = function _isFunction4(value) {
        return typeof value === "function";
      }, _isNumber3 = function _isNumber4(value) {
        return typeof value === "number";
      }, _isUndefined = function _isUndefined2(value) {
        return typeof value === "undefined";
      }, _isObject3 = function _isObject4(value) {
        return typeof value === "object";
      }, _isNotFalse = function _isNotFalse2(value) {
        return value !== false;
      }, _windowExists3 = function _windowExists4() {
        return typeof window !== "undefined";
      }, _isFuncOrString = function _isFuncOrString2(value) {
        return _isFunction3(value) || _isString3(value);
      }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
      }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win4, _coreInitted3, _doc4, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap5;
      }, _missingPlugin = function _missingPlugin2(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
      }, _warn = function _warn2(message, suppress) {
        return !suppress && console.warn(message);
      }, _addGlobal = function _addGlobal2(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
      }, _emptyFunc = function _emptyFunc2() {
        return 0;
      }, _startAtRevertConfig = {
        suppressEvents: true,
        isStart: true,
        kill: false
      }, _revertConfigNoKill = {
        suppressEvents: true,
        kill: false
      }, _revertConfig = {
        suppressEvents: true
      }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
        var target = targets[0], harnessPlugin, i;
        _isObject3(target) || _isFunction3(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i = _harnessPlugins.length;
          while (i-- && !_harnessPlugins[i].targetTest(target)) {
          }
          harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while (i--) {
          targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        }
        return targets;
      }, _getCache = function _getCache2(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      }, _getProperty = function _getProperty2(target, property, v) {
        return (v = target[property]) && _isFunction3(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      }, _forEachName = function _forEachName2(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      }, _round5 = function _round6(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      }, _roundPrecise = function _roundPrecise2(value) {
        return Math.round(value * 1e7) / 1e7 || 0;
      }, _parseRelative = function _parseRelative2(start, value) {
        var operator = value.charAt(0), end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
      }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
        var l = toFind.length, i = 0;
        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
        }
        return i < l;
      }, _lazyRender = function _lazyRender2() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i = 0; i < l; i++) {
          tween = a[i];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      }, _isRevertWorthy = function _isRevertWorthy2(animation) {
        return !!(animation._initted || animation._startAt || animation.add);
      }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
        _lazyTweens.length && !_reverting && _lazyRender();
        animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
        _lazyTweens.length && !_reverting && _lazyRender();
      }, _numericIfPossible = function _numericIfPossible2(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString3(value) ? value.trim() : value;
      }, _passThrough3 = function _passThrough4(p) {
        return p;
      }, _setDefaults3 = function _setDefaults4(obj, defaults) {
        for (var p in defaults) {
          p in obj || (obj[p] = defaults[p]);
        }
        return obj;
      }, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
        return function(obj, defaults) {
          for (var p in defaults) {
            p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
          }
        };
      }, _merge = function _merge2(base, toMerge) {
        for (var p in toMerge) {
          base[p] = toMerge[p];
        }
        return base;
      }, _mergeDeep = function _mergeDeep2(base, toMerge) {
        for (var p in toMerge) {
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject3(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }
        return base;
      }, _copyExcluding = function _copyExcluding2(obj, excluding) {
        var copy = {}, p;
        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }
        return copy;
      }, _inheritDefaults = function _inheritDefaults2(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults3;
        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }
        return vars;
      }, _arraysMatch = function _arraysMatch2(a1, a2) {
        var i = a1.length, match = i === a2.length;
        while (match && i-- && a1[i] === a2[i]) {
        }
        return i < 0;
      }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = parent[lastProp], t;
        if (sortBy) {
          t = child[sortBy];
          while (prev && prev[sortBy] > t) {
            prev = prev._prev;
          }
        }
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          parent[lastProp] = child;
        }
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      }, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = child._prev, next = child._next;
        if (prev) {
          prev._next = next;
        } else if (parent[firstProp] === child) {
          parent[firstProp] = next;
        }
        if (next) {
          next._prev = prev;
        } else if (parent[lastProp] === child) {
          parent[lastProp] = prev;
        }
        child._next = child._prev = child.parent = null;
      }, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
        child._act = 0;
      }, _uncache = function _uncache2(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
          var a = animation;
          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }
        return animation;
      }, _recacheAncestors = function _recacheAncestors2(animation) {
        var parent = animation.parent;
        while (parent && parent.parent) {
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }
        return animation;
      }, _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
        return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
      }, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
      }, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
      }, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
        var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
        return tTime && whole === tTime ? whole - 1 : whole;
      }, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
      }, _setEnd = function _setEnd2(animation) {
        return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
      }, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
          _setEnd(animation);
          parent._dirty || _uncache(parent, animation);
        }
        return animation;
      }, _postAddChecks = function _postAddChecks2(timeline, child) {
        var t;
        if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
          t = _parentToChildTotalTime(timeline.rawTime(), child);
          if (!child._dur || _clamp3(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
            child.render(t, true);
          }
        }
        if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
          if (timeline._dur < timeline.duration()) {
            t = timeline;
            while (t._dp) {
              t.rawTime() >= 0 && t.totalTime(t._tTime);
              t = t._dp;
            }
          }
          timeline._zTime = -_tinyNum;
        }
      }, _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _roundPrecise((_isNumber3(position) ? position : position || timeline !== _globalTimeline ? _parsePosition3(timeline, position, child) : timeline._time) + child._delay);
        child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
        _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
        _isFromOrFromStart(child) || (timeline._recent = child);
        skipChecks || _postAddChecks(timeline, child);
        timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
        return timeline;
      }, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
      }, _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
        _initTween(tween, time, tTime);
        if (!tween._initted) {
          return 1;
        }
        if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
          _lazyTweens.push(tween);
          tween._lazy = [tTime, suppressEvents];
          return 1;
        }
      }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
      }, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
        var data = _ref2.data;
        return data === "isFromStart" || data === "isStart";
      }, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
        if (repeatDelay && tween._repeat) {
          tTime = _clamp3(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
          if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
        if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
          if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
            return;
          }
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt = tween._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
          tween._onUpdate && !suppressEvents && _callback3(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback3(tween, "onRepeat");
          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
              _callback3(tween, ratio ? "onComplete" : "onReverseComplete", true);
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      }, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
        var child;
        if (time > prevTime) {
          child = animation._first;
          while (child && child._start <= time) {
            if (child.data === "isPause" && child._start > prevTime) {
              return child;
            }
            child = child._next;
          }
        } else {
          child = animation._last;
          while (child && child._start >= time) {
            if (child.data === "isPause" && child._start < prevTime) {
              return child;
            }
            child = child._prev;
          }
        }
      }, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
        animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      }, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
      }, _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc
      }, _parsePosition3 = function _parsePosition4(animation, position, percentAnimation) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
        if (_isString3(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i = position.indexOf("=");
          if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
          }
          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
          if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
          }
          return i > 1 ? _parsePosition4(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
      }, _createTweenType = function _createTweenType2(type, params, timeline) {
        var isLegacy = _isNumber3(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline;
        if (type) {
          irVars = vars;
          parent = timeline;
          while (parent && !("immediateRender" in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
        return new Tween(params[0], vars, params[varsIndex + 1]);
      }, _conditionalReturn = function _conditionalReturn2(value, func) {
        return value || value === 0 ? func(value) : func;
      }, _clamp3 = function _clamp4(min, max, value) {
        return value < min ? min : value > max ? max : value;
      }, getUnit = function getUnit2(value, v) {
        return !_isString3(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
      }, clamp2 = function clamp3(min, max, value) {
        return _conditionalReturn(value, function(v) {
          return _clamp3(min, max, v);
        });
      }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
        return value && _isObject3(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject3(value[0])) && !value.nodeType && value !== _win4;
      }, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
        return ar.forEach(function(value) {
          var _accumulator;
          return _isString3(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      }, toArray = function toArray2(value, scope, leaveStrings) {
        return _context3 && !scope && _context3.selector ? _context3.selector(value) : _isString3(value) && !leaveStrings && (_coreInitted3 || !_wake()) ? _slice.call((scope || _doc4).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      }, selector = function selector2(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function(v) {
          var el = value.current || value.nativeElement || value;
          return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc4.createElement("div") : value);
        };
      }, shuffle = function shuffle2(a) {
        return a.sort(function() {
          return 0.5 - Math.random();
        });
      }, distribute = function distribute2(v) {
        if (_isFunction3(v)) {
          return v;
        }
        var vars = _isObject3(v) ? v : {
          each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString3(from)) {
          ratioX = ratioY = {
            center: 0.5,
            edges: 0.5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
        return function(i, target, a) {
          var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
          if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
            if (!wrapAt) {
              max = -_bigNum;
              while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
              }
              wrapAt < l && wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for (j = 0; j < l; j++) {
              x = j % wrapAt - originX;
              y = originY - (j / wrapAt | 0);
              distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }
          l = (distances[i] - distances.min) / distances.max || 0;
          return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
      }, _roundModifier = function _roundModifier2(v) {
        var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
        return function(raw) {
          var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
          return (n - n % 1) / p + (_isNumber3(raw) ? 0 : getUnit(raw));
        };
      }, snap = function snap2(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject3(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber3(snapTo[0])) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction3(snapTo) ? function(raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
          var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
          while (i--) {
            if (is2D) {
              dx = snapTo[i].x - x;
              dy = snapTo[i].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i] - x);
            }
            if (dx < min) {
              min = dx;
              closest = i;
            }
          }
          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber3(raw) ? closest : closest + getUnit(raw);
        });
      }, random = function random2(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
          return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
      }, pipe = function pipe2() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
          functions[_key] = arguments[_key];
        }
        return function(value) {
          return functions.reduce(function(v, f) {
            return f(v);
          }, value);
        };
      }, unitize = function unitize2(func, unit) {
        return function(value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      }, normalize = function normalize2(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      }, _wrapArray = function _wrapArray2(a, wrapper, value) {
        return _conditionalReturn(value, function(index) {
          return a[~~wrapper(index)];
        });
      }, wrap = function wrap2(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
          return (range + (value2 - min) % range) % range + min;
        });
      }, wrapYoyo = function wrapYoyo2(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
          value2 = (total + (value2 - min) % total) % total || 0;
          return min + (value2 > range ? total - value2 : value2);
        });
      }, _replaceRandom = function _replaceRandom2(value) {
        var prev = 0, s = "", i, nums, end, isArray;
        while (~(i = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i);
          isArray = value.charAt(i + 7) === "[";
          nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
          prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
      }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function(value2) {
          return outMin + ((value2 - inMin) / inRange * outRange || 0);
        });
      }, interpolate = function interpolate2(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function(p2) {
          return (1 - p2) * start + p2 * end;
        };
        if (!func) {
          var isString = _isString3(start), master = {}, p, i, interpolators, l, il;
          progress === true && (mutate = 1) && (progress = null);
          if (isString) {
            start = {
              p: start
            };
            end = {
              p: end
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for (i = 1; i < l; i++) {
              interpolators.push(interpolate2(start[i - 1], start[i]));
            }
            l--;
            func = function func2(p2) {
              p2 *= l;
              var i2 = Math.min(il, ~~p2);
              return interpolators[i2](p2 - i2);
            };
            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }
          if (!interpolators) {
            for (p in end) {
              _addPropTween.call(master, start, p, "get", end[p]);
            }
            func = function func2(p2) {
              return _renderPropTweens(p2, master) || (isString ? start.p : start);
            };
          }
        }
        return _conditionalReturn(progress, func);
      }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
        var labels = timeline.labels, min = _bigNum, p, distance, label;
        for (p in labels) {
          distance = labels[p] - fromTime;
          if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
          }
        }
        return label;
      }, _callback3 = function _callback4(animation, type, executeLazyFirst) {
        var v = animation.vars, callback = v[type], prevContext = _context3, context = animation._ctx, params, scope, result;
        if (!callback) {
          return;
        }
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        context && (_context3 = context);
        result = params ? callback.apply(scope, params) : callback.call(scope);
        _context3 = prevContext;
        return result;
      }, _interrupt3 = function _interrupt4(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
        animation.progress() < 1 && _callback3(animation, "onInterrupt");
        return animation;
      }, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin2(config) {
        if (!config) return;
        config = !config.name && config["default"] || config;
        if (_windowExists3() || config.headless) {
          var name = config.name, isFunc = _isFunction3(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
          } : config, instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
          }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
          };
          _wake();
          if (config !== Plugin) {
            if (_plugins[name]) {
              return;
            }
            _setDefaults3(Plugin, _setDefaults3(_copyExcluding(config, instanceDefaults), statics));
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
            _plugins[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
              _harnessPlugins.push(Plugin);
              _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }
          _addGlobal(name, Plugin);
          config.register && config.register(gsap5, Plugin, PropTween);
        } else {
          _registerPluginQueue.push(config);
        }
      }, _255 = 255, _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
      }, _hue = function _hue2(h, m1, m2) {
        h += h < 0 ? 1 : h > 1 ? -1 : 0;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
      }, splitColor = function splitColor2(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber3(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
        if (!a) {
          if (v.substr(-1) === ",") {
            v = v.substr(0, v.length - 1);
          }
          if (_colorLookup[v]) {
            a = _colorLookup[v];
          } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
              a = parseInt(v.substr(1, 6), 16);
              return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
            }
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
          } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
              h = +a[0] % 360 / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
              r = l * 2 - g;
              a.length > 3 && (a[3] *= 1);
              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
          }
          a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;
          if (max === min) {
            h = s = 0;
          } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
          }
          a[0] = ~~(h + 0.5);
          a[1] = ~~(s * 100 + 0.5);
          a[2] = ~~(l * 100 + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }, _colorOrderData = function _colorOrderData2(v) {
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function(v2) {
          var a = v2.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
      }, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
        if (!colors) {
          return s;
        }
        colors = colors.map(function(color) {
          return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;
          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for (; i < l; i++) {
              result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result += shell[i] + colors[i];
          }
        }
        return result + shell[l];
      }, _colorExp = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
        for (p in _colorLookup) {
          s += "|" + p + "\\b";
        }
        return new RegExp(s + ")", "gi");
      }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
          return true;
        }
      }, _tickerActive, _ticker = function() {
        var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id2, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
          var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
          (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;
          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1e3;
            _self.time = time = time / 1e3;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }
          manual || (_id2 = _req(_tick2));
          if (dispatch) {
            for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
              _listeners3[_i2](time, _delta, frame, v);
            }
          }
        };
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1e3 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted3 && _windowExists3()) {
                _win4 = _coreInitted3 = window;
                _doc4 = _win4.document || {};
                _globals.gsap = gsap5;
                (_win4.gsapVersions || (_win4.gsapVersions = [])).push(gsap5.version);
                _install(_installScope || _win4.GreenSockGlobals || !_win4.gsap && _win4 || {});
                _registerPluginQueue.forEach(_createPlugin);
              }
              _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
              _id2 && _self.sleep();
              _req = _raf || function(f) {
                return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
              };
              _tickerActive = 1;
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? cancelAnimationFrame : clearTimeout)(_id2);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity;
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
          },
          fps: function fps(_fps) {
            _gap = 1e3 / (_fps || 240);
            _nextTime = _self.time * 1e3 + _gap;
          },
          add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
              callback(t, d, f, v);
              _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners3[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
          },
          remove: function remove(callback, i) {
            ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
          },
          _listeners: _listeners3
        };
        return _self;
      }(), _wake = function _wake2() {
        return !_tickerActive && _ticker.wake();
      }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
          key = val.substr(index + 1).trim();
        }
        return obj;
      }, _valueInParentheses = function _valueInParentheses2(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
      }, _configEaseFromString = function _configEaseFromString2(name) {
        var split = (name + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
      }, _invertEase = function _invertEase2(ease) {
        return function(p) {
          return 1 - ease(1 - p);
        };
      }, _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
        var child = timeline._first, ease;
        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase2(child, isYoyo);
          } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
              _propagateYoyoEase2(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }
          child = child._next;
        }
      }, _parseEase = function _parseEase2(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction3(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      }, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut2(p) {
            return 1 - easeIn(1 - p);
          };
        }
        if (easeInOut === void 0) {
          easeInOut = function easeInOut2(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
          };
        }
        var ease = {
          easeIn,
          easeOut,
          easeInOut
        }, lowercaseName;
        _forEachName(names, function(name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
          for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
          }
        });
        return ease;
      }, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
        return function(p) {
          return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
        };
      }, _configElastic = function _configElastic2(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
          return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function(amplitude2, period2) {
          return _configElastic2(type, amplitude2, period2);
        };
        return ease;
      }, _configBack = function _configBack2(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }
        var easeOut = function easeOut2(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        ease.config = function(overshoot2) {
          return _configBack2(type, overshoot2);
        };
        return ease;
      };
      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
        var power = i < 5 ? i + 1 : i;
        _insertEase(name + ",Power" + (power - 1), i ? function(p) {
          return Math.pow(p, power);
        } : function(p) {
          return p;
        }, function(p) {
          return 1 - Math.pow(1 - p, power);
        }, function(p) {
          return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
      });
      _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
      _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
      (function(n, c) {
        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
          return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
        _insertEase("Bounce", function(p) {
          return 1 - easeOut(1 - p);
        }, easeOut);
      })(7.5625, 2.75);
      _insertEase("Expo", function(p) {
        return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
      });
      _insertEase("Circ", function(p) {
        return -(_sqrt(1 - p * p) - 1);
      });
      _insertEase("Sine", function(p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
      });
      _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
      _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps3, immediateStart) {
          if (steps3 === void 0) {
            steps3 = 1;
          }
          var p1 = 1 / steps3, p2 = steps3 + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
          return function(p) {
            return ((p2 * _clamp3(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults2.ease = _easeMap["quad.out"];
      _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
        return _callbackNames += name + "," + name + "Params,";
      });
      var GSCache = function GSCache2(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
      };
      var Animation = function() {
        function Animation2(vars) {
          this.vars = vars;
          this._delay = +vars.delay || 0;
          if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
          }
          this._ts = 1;
          _setDuration(this, +vars.duration, 1, 1);
          this.data = vars.data;
          if (_context3) {
            this._ctx = _context3;
            _context3.data.push(this);
          }
          _tickerActive || _ticker.wake();
        }
        var _proto = Animation2.prototype;
        _proto.delay = function delay(value) {
          if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
          }
          return this._delay;
        };
        _proto.duration = function duration(value) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
        _proto.totalDuration = function totalDuration(value) {
          if (!arguments.length) {
            return this._tDur;
          }
          this._dirty = 0;
          return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
          _wake();
          if (!arguments.length) {
            return this._tTime;
          }
          var parent = this._dp;
          if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this);
            while (parent && parent.parent) {
              if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                parent.totalTime(parent._tTime, true);
              }
              parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
              _addToTimeline(this._dp, this, this._start - this._delay);
            }
          }
          if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            this._ts || (this._pTime = _totalTime);
            _lazySafeRender(this, _totalTime, suppressEvents);
          }
          return this;
        };
        _proto.time = function time(value, suppressEvents) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
        };
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
        };
        _proto.progress = function progress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
        };
        _proto.iteration = function iteration(value, suppressEvents) {
          var cycleDuration = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
        _proto.timeScale = function timeScale(value, suppressEvents) {
          if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts;
          }
          if (this._rts === value) {
            return this;
          }
          var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
          this._rts = +value || 0;
          this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
          this.totalTime(_clamp3(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
          _setEnd(this);
          return _recacheAncestors(this);
        };
        _proto.paused = function paused(value) {
          if (!arguments.length) {
            return this._ps;
          }
          if (this._ps !== value) {
            this._ps = value;
            if (value) {
              this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
              this._ts = this._act = 0;
            } else {
              _wake();
              this._ts = this._rts;
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
            }
          }
          return this;
        };
        _proto.startTime = function startTime(value) {
          if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
          }
          return this._start;
        };
        _proto.endTime = function endTime(includeRepeats) {
          return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        };
        _proto.rawTime = function rawTime(wrapRepeats) {
          var parent = this.parent || this._dp;
          return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
        _proto.revert = function revert(config) {
          if (config === void 0) {
            config = _revertConfig;
          }
          var prevIsReverting = _reverting;
          _reverting = config;
          if (_isRevertWorthy(this)) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
          }
          this.data !== "nested" && config.kill !== false && this.kill();
          _reverting = prevIsReverting;
          return this;
        };
        _proto.globalTime = function globalTime(rawTime) {
          var animation = this, time = arguments.length ? rawTime : animation.rawTime();
          while (animation) {
            time = animation._start + time / (Math.abs(animation._ts) || 1);
            animation = animation._dp;
          }
          return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
        };
        _proto.repeat = function repeat(value) {
          if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
          }
          return this._repeat === -2 ? Infinity : this._repeat;
        };
        _proto.repeatDelay = function repeatDelay(value) {
          if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
          }
          return this._rDelay;
        };
        _proto.yoyo = function yoyo(value) {
          if (arguments.length) {
            this._yoyo = value;
            return this;
          }
          return this._yoyo;
        };
        _proto.seek = function seek(position, suppressEvents) {
          return this.totalTime(_parsePosition3(this, position), _isNotFalse(suppressEvents));
        };
        _proto.restart = function restart(includeDelay, suppressEvents) {
          this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
          this._dur || (this._zTime = -_tinyNum);
          return this;
        };
        _proto.play = function play(from, suppressEvents) {
          from != null && this.seek(from, suppressEvents);
          return this.reversed(false).paused(false);
        };
        _proto.reverse = function reverse(from, suppressEvents) {
          from != null && this.seek(from || this.totalDuration(), suppressEvents);
          return this.reversed(true).paused(false);
        };
        _proto.pause = function pause(atTime, suppressEvents) {
          atTime != null && this.seek(atTime, suppressEvents);
          return this.paused(true);
        };
        _proto.resume = function resume() {
          return this.paused(false);
        };
        _proto.reversed = function reversed(value) {
          if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
            return this;
          }
          return this._rts < 0;
        };
        _proto.invalidate = function invalidate() {
          this._initted = this._act = 0;
          this._zTime = -_tinyNum;
          return this;
        };
        _proto.isActive = function isActive() {
          var parent = this.parent || this._dp, start = this._start, rawTime;
          return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
        };
        _proto.eventCallback = function eventCallback(type, callback, params) {
          var vars = this.vars;
          if (arguments.length > 1) {
            if (!callback) {
              delete vars[type];
            } else {
              vars[type] = callback;
              params && (vars[type + "Params"] = params);
              type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
          }
          return vars[type];
        };
        _proto.then = function then(onFulfilled) {
          var self2 = this;
          return new Promise(function(resolve) {
            var f = _isFunction3(onFulfilled) ? onFulfilled : _passThrough3, _resolve = function _resolve2() {
              var _then = self2.then;
              self2.then = null;
              _isFunction3(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
              resolve(f);
              self2.then = _then;
            };
            if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
              _resolve();
            } else {
              self2._prom = _resolve;
            }
          });
        };
        _proto.kill = function kill() {
          _interrupt3(this);
        };
        return Animation2;
      }();
      _setDefaults3(Animation.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
      });
      var Timeline = function(_Animation) {
        _inheritsLoose(Timeline2, _Animation);
        function Timeline2(vars, position) {
          var _this;
          if (vars === void 0) {
            vars = {};
          }
          _this = _Animation.call(this, vars) || this;
          _this.labels = {};
          _this.smoothChildTiming = !!vars.smoothChildTiming;
          _this.autoRemoveChildren = !!vars.autoRemoveChildren;
          _this._sort = _isNotFalse(vars.sortChildren);
          _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
          vars.reversed && _this.reverse();
          vars.paused && _this.paused(true);
          vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
          return _this;
        }
        var _proto2 = Timeline2.prototype;
        _proto2.to = function to(targets, vars, position) {
          _createTweenType(0, arguments, this);
          return this;
        };
        _proto2.from = function from(targets, vars, position) {
          _createTweenType(1, arguments, this);
          return this;
        };
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
          _createTweenType(2, arguments, this);
          return this;
        };
        _proto2.set = function set(targets, vars, position) {
          vars.duration = 0;
          vars.parent = this;
          _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
          vars.immediateRender = !!vars.immediateRender;
          new Tween(targets, vars, _parsePosition3(this, position), 1);
          return this;
        };
        _proto2.call = function call(callback, params, position) {
          return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
        };
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.duration = duration;
          vars.stagger = vars.stagger || stagger;
          vars.onComplete = onCompleteAll;
          vars.onCompleteParams = onCompleteAllParams;
          vars.parent = this;
          new Tween(targets, vars, _parsePosition3(this, position));
          return this;
        };
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.runBackwards = 1;
          _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
          toVars.startAt = fromVars;
          _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.render = function render2(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
          this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
          if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
              tTime += this._time - prevTime;
              totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
              dur || (prevTime = this._zTime);
              (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
              yoyo = this._yoyo;
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                prevIteration = _roundPrecise(tTime / cycleDuration);
                iteration = ~~prevIteration;
                if (iteration && iteration === prevIteration) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
              if (yoyo && iteration & 1) {
                time = dur - time;
                isYoyo = 1;
              }
              if (iteration !== prevIteration && !this._lock) {
                var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                iteration < prevIteration && (rewinding = !rewinding);
                prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
                this._lock = 1;
                this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                this._tTime = tTime;
                !suppressEvents && this.parent && _callback3(this, "onRepeat");
                this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                  return this;
                }
                dur = this._dur;
                tDur = this._tDur;
                if (doesWrap) {
                  this._lock = 2;
                  prevTime = rewinding ? dur : -1e-4;
                  this.render(prevTime, true);
                  this.vars.repeatRefresh && !isYoyo && this.invalidate();
                }
                this._lock = 0;
                if (!this._ts && !prevPaused) {
                  return this;
                }
                _propagateYoyoEase(this, isYoyo);
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
              pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
              if (pauseTween) {
                tTime -= time - (time = pauseTween._start);
              }
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale;
            if (!this._initted) {
              this._onUpdate = this.vars.onUpdate;
              this._initted = 1;
              this._zTime = totalTime;
              prevTime = 0;
            }
            if (!prevTime && tTime && !suppressEvents && !prevIteration) {
              _callback3(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            if (time >= prevTime && totalTime >= 0) {
              child = this._first;
              while (child) {
                next = child._next;
                if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = -_tinyNum);
                    break;
                  }
                }
                child = next;
              }
            } else {
              child = this._last;
              var adjustedTime = totalTime < 0 ? totalTime : time;
              while (child) {
                next = child._prev;
                if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                    break;
                  }
                }
                child = next;
              }
            }
            if (pauseTween && !suppressEvents) {
              this.pause();
              pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
              if (this._ts) {
                this._start = prevStart;
                _setEnd(this);
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._onUpdate && !suppressEvents && _callback3(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
              if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                if (!this._lock) {
                  (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                  if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                    _callback3(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                  }
                }
              }
            }
          }
          return this;
        };
        _proto2.add = function add(child, position) {
          var _this2 = this;
          _isNumber3(position) || (position = _parsePosition3(this, position, child));
          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function(obj) {
                return _this2.add(obj, position);
              });
              return this;
            }
            if (_isString3(child)) {
              return this.addLabel(child, position);
            }
            if (_isFunction3(child)) {
              child = Tween.delayedCall(0, child);
            } else {
              return this;
            }
          }
          return this !== child ? _addToTimeline(this, child, position) : this;
        };
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
          if (nested === void 0) {
            nested = true;
          }
          if (tweens === void 0) {
            tweens = true;
          }
          if (timelines === void 0) {
            timelines = true;
          }
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
          }
          var a = [], child = this._first;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              if (child instanceof Tween) {
                tweens && a.push(child);
              } else {
                timelines && a.push(child);
                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
              }
            }
            child = child._next;
          }
          return a;
        };
        _proto2.getById = function getById(id) {
          var animations = this.getChildren(1, 1, 1), i = animations.length;
          while (i--) {
            if (animations[i].vars.id === id) {
              return animations[i];
            }
          }
        };
        _proto2.remove = function remove(child) {
          if (_isString3(child)) {
            return this.removeLabel(child);
          }
          if (_isFunction3(child)) {
            return this.killTweensOf(child);
          }
          child.parent === this && _removeLinkedListItem(this, child);
          if (child === this._recent) {
            this._recent = this._last;
          }
          return _uncache(this);
        };
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
          if (!arguments.length) {
            return this._tTime;
          }
          this._forcing = 1;
          if (!this._dp && this._ts) {
            this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
          }
          _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
          this._forcing = 0;
          return this;
        };
        _proto2.addLabel = function addLabel(label, position) {
          this.labels[label] = _parsePosition3(this, position);
          return this;
        };
        _proto2.removeLabel = function removeLabel(label) {
          delete this.labels[label];
          return this;
        };
        _proto2.addPause = function addPause(position, callback, params) {
          var t = Tween.delayedCall(0, callback || _emptyFunc, params);
          t.data = "isPause";
          this._hasPause = 1;
          return _addToTimeline(this, t, _parsePosition3(this, position));
        };
        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition3(this, position);
          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }
            child = child._next;
          }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
          while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
          }
          return this;
        };
        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
          var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber3(onlyActive), children;
          while (child) {
            if (child instanceof Tween) {
              if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                a.push(child);
              }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
              a.push.apply(a, children);
            }
            child = child._next;
          }
          return a;
        };
        _proto2.tweenTo = function tweenTo(position, vars) {
          vars = vars || {};
          var tl = this, endTime = _parsePosition3(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults3({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
              tl.pause();
              if (!initted) {
                var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                initted = 1;
              }
              _onStart && _onStart.apply(tween, onStartParams || []);
            }
          }, vars));
          return immediateRender ? tween.render(0) : tween;
        };
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
          return this.tweenTo(toPosition, _setDefaults3({
            startAt: {
              time: _parsePosition3(this, fromPosition)
            }
          }, vars));
        };
        _proto2.recent = function recent() {
          return this._recent;
        };
        _proto2.nextLabel = function nextLabel(afterTime) {
          if (afterTime === void 0) {
            afterTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition3(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition3(this, beforeTime), 1);
        };
        _proto2.currentLabel = function currentLabel(value) {
          return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
          }
          var child = this._first, labels = this.labels, p;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              child._start += amount;
              child._end += amount;
            }
            child = child._next;
          }
          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }
          return _uncache(this);
        };
        _proto2.invalidate = function invalidate(soft) {
          var child = this._first;
          this._lock = 0;
          while (child) {
            child.invalidate(soft);
            child = child._next;
          }
          return _Animation.prototype.invalidate.call(this, soft);
        };
        _proto2.clear = function clear(includeLabels) {
          if (includeLabels === void 0) {
            includeLabels = true;
          }
          var child = this._first, next;
          while (child) {
            next = child._next;
            this.remove(child);
            child = next;
          }
          this._dp && (this._time = this._tTime = this._pTime = 0);
          includeLabels && (this.labels = {});
          return _uncache(this);
        };
        _proto2.totalDuration = function totalDuration(value) {
          var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
          if (arguments.length) {
            return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
          }
          if (self2._dirty) {
            parent = self2.parent;
            while (child) {
              prev = child._prev;
              child._dirty && child.totalDuration();
              start = child._start;
              if (start > prevStart && self2._sort && child._ts && !self2._lock) {
                self2._lock = 1;
                _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
              } else {
                prevStart = start;
              }
              if (start < 0 && child._ts) {
                max -= start;
                if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                  self2._start += start / self2._ts;
                  self2._time -= start;
                  self2._tTime -= start;
                }
                self2.shiftChildren(-start, false, -Infinity);
                prevStart = 0;
              }
              child._end > max && child._ts && (max = child._end);
              child = prev;
            }
            _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
            self2._dirty = 0;
          }
          return self2._tDur;
        };
        Timeline2.updateRoot = function updateRoot(time) {
          if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
          }
          if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
              if (_config.autoSleep && _ticker._listeners.length < 2) {
                while (child && !child._ts) {
                  child = child._next;
                }
                child || _ticker.sleep();
              }
            }
          }
        };
        return Timeline2;
      }(Animation);
      _setDefaults3(Timeline.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (hasRandom = ~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while (result = _complexStringNumExp.exec(end)) {
          endNum = result[0];
          chunk = end.substring(index, result.index);
          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
          }
          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              s: startNum,
              c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) {
          pt.e = 0;
        }
        this._pt = pt;
        return pt;
      }, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
        _isFunction3(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction3(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction3(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction3(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString3(end)) {
          if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) {
              end = pt;
            }
          }
        }
        if (!optional || parsedStart !== end || _forceAllPropTweens) {
          if (!isNaN(parsedStart * end) && end !== "") {
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
          }
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
      }, _processVars = function _processVars2(vars, index, target, targets, tween) {
        _isFunction3(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject3(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString3(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }
        var copy = {}, p;
        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }
        return copy;
      }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i = plugin._props.length;
            while (i--) {
              ptLookup[plugin._props[i]] = pt;
            }
          }
        }
        return plugin;
      }, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites2, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults2.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults2.ease)) : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
        tween._from = !tl && !!vars.runBackwards;
        if (!tl || keyframes && !vars.stagger) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1);
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
            prevStartAt._lazy = 0;
          }
          if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults3({
              data: "isStart",
              overwrite: false,
              parent,
              immediateRender: true,
              lazy: !prevStartAt && _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate: onUpdate && function() {
                return _callback3(tween, "onUpdate");
              },
              stagger: 0
            }, startAt)));
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
            if (immediateRender) {
              if (dur && time <= 0 && tTime <= 0) {
                time && (tween._zTime = time);
                return;
              }
            }
          } else if (runBackwards && dur) {
            if (!prevStartAt) {
              time && (immediateRender = false);
              p = _setDefaults3({
                overwrite: false,
                data: "isFromStart",
                lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                immediateRender,
                stagger: 0,
                parent
              }, cleanVars);
              harnessVars && (p[harness.prop] = harnessVars);
              _removeFromParent(tween._startAt = Tween.set(targets, p));
              tween._startAt._dp = 0;
              tween._startAt._sat = tween;
              time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
              tween._zTime = time;
              if (!immediateRender) {
                _initTween2(tween._startAt, _tinyNum, _tinyNum);
              } else if (!time) {
                return;
              }
            }
          }
          tween._pt = tween._ptCache = 0;
          lazy = dur && _isNotFalse(lazy) || lazy && !dur;
          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
              tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
              plugin._props.forEach(function(name) {
                ptLookup[name] = pt;
              });
              plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
              for (p in cleanVars) {
                if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
              }
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
              _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
        keyframes && time <= 0 && tl.render(_bigNum, true, true);
      }, _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
        var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i = tween._targets.length;
          while (i--) {
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
              pt = pt.d._pt;
              while (pt && pt.p !== property && pt.fp !== property) {
                pt = pt._next;
              }
            }
            if (!pt) {
              _forceAllPropTweens = 1;
              tween.vars[property] = "+=0";
              _initTween(tween, time);
              _forceAllPropTweens = 0;
              return skipRecursion ? _warn(property + " not eligible for reset") : 1;
            }
            ptCache.push(pt);
          }
        }
        i = ptCache.length;
        while (i--) {
          rootPT = ptCache[i];
          pt = rootPT._pt || rootPT;
          pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
          pt.c = value - pt.s;
          rootPT.e && (rootPT.e = _round5(value) + getUnit(rootPT.e));
          rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
        }
      }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
        if (!propertyAliases) {
          return vars;
        }
        copy = _merge({}, vars);
        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while (i--) {
              copy[aliases[i]] = copy[p];
            }
          }
        }
        return copy;
      }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
        var ease = obj.ease || easeEach || "power1.inOut", p, a;
        if (_isArray(obj)) {
          a = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function(value, i) {
            return a.push({
              t: i / (obj.length - 1) * 100,
              v: value,
              e: ease
            });
          });
        } else {
          for (p in obj) {
            a = allProps[p] || (allProps[p] = []);
            p === "ease" || a.push({
              t: parseFloat(prop),
              v: obj[p],
              e: ease
            });
          }
        }
      }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
        return _isFunction3(value) ? value.call(tween, i, target, targets) : _isString3(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
      }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
      _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
        return _staggerPropsToSkip[name] = 1;
      });
      var Tween = function(_Animation2) {
        _inheritsLoose(Tween2, _Animation2);
        function Tween2(targets, vars, position, skipInherit) {
          var _this3;
          if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
          }
          _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
          var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber3(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
          _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
          _this3._ptLookup = [];
          _this3._overwrite = overwrite;
          if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
              data: "nested",
              defaults: defaults || {},
              targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              l = parsedTargets.length;
              staggerFunc = stagger && distribute(stagger);
              if (_isObject3(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }
              for (i = 0; i < l; i++) {
                copy = _copyExcluding(vars, _staggerPropsToSkip);
                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }
                tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                tl._ease = _easeMap.none;
              }
              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            } else if (keyframes) {
              _inheritDefaults(_setDefaults3(tl.vars.defaults, {
                ease: "none"
              }));
              tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
              var time = 0, a, kf, v;
              if (_isArray(keyframes)) {
                keyframes.forEach(function(frame) {
                  return tl.to(parsedTargets, frame, ">");
                });
                tl.duration();
              } else {
                copy = {};
                for (p in keyframes) {
                  p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                }
                for (p in copy) {
                  a = copy[p].sort(function(a2, b) {
                    return a2.t - b.t;
                  });
                  time = 0;
                  for (i = 0; i < a.length; i++) {
                    kf = a[i];
                    v = {
                      ease: kf.e,
                      duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                    };
                    v[p] = kf.v;
                    tl.to(parsedTargets, v, time);
                    time += v.duration;
                  }
                }
                tl.duration() < duration && tl.to({}, {
                  duration: duration - tl.duration()
                });
              }
            }
            duration || _this3.duration(duration = tl.duration());
          } else {
            _this3.timeline = 0;
          }
          if (overwrite === true && !_suppressOverwrites2) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
          }
          _addToTimeline(parent, _assertThisInitialized(_this3), position);
          vars.reversed && _this3.reverse();
          vars.paused && _this3.paused(true);
          if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum;
            _this3.render(Math.max(0, -delay) || 0);
          }
          scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
          return _this3;
        }
        var _proto3 = Tween2.prototype;
        _proto3.render = function render2(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
          if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
          } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && isNegative) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                prevIteration = _roundPrecise(tTime / cycleDuration);
                iteration = ~~prevIteration;
                if (iteration && iteration === prevIteration) {
                  time = dur;
                  iteration--;
                } else if (time > dur) {
                  time = dur;
                }
              }
              isYoyo = this._yoyo && iteration & 1;
              if (isYoyo) {
                yoyoEase = this._yEase;
                time = dur - time;
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                this._tTime = tTime;
                return this;
              }
              if (iteration !== prevIteration) {
                timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
                  this._lock = force = 1;
                  this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                }
              }
            }
            if (!this._initted) {
              if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                this._tTime = 0;
                return this;
              }
              if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
                return this;
              }
              if (dur !== this._dur) {
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
              this._act = 1;
              this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) {
              this.ratio = ratio = 1 - ratio;
            }
            if (!prevTime && tTime && !suppressEvents && !prevIteration) {
              _callback3(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            pt = this._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
              isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
              _callback3(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback3(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                _callback3(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
          return this;
        };
        _proto3.targets = function targets() {
          return this._targets;
        };
        _proto3.invalidate = function invalidate(soft) {
          (!soft || !this.vars.runBackwards) && (this._startAt = 0);
          this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
          this._ptLookup = [];
          this.timeline && this.timeline.invalidate(soft);
          return _Animation2.prototype.invalidate.call(this, soft);
        };
        _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
          _tickerActive || _ticker.wake();
          this._ts || this.play();
          var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
          this._initted || _initTween(this, time);
          ratio = this._ease(time / this._dur);
          if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
            return this.resetTo(property, value, start, startIsRelative, 1);
          }
          _alignPlayhead(this, 0);
          this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
          return this.render(0);
        };
        _proto3.kill = function kill(targets, vars) {
          if (vars === void 0) {
            vars = "all";
          }
          if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            this.parent ? _interrupt3(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
            return this;
          }
          if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt3(this);
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
            return this;
          }
          var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt3(this);
          }
          overwrittenProps = this._op = this._op || [];
          if (vars !== "all") {
            if (_isString3(vars)) {
              p = {};
              _forEachName(vars, function(name) {
                return p[name] = 1;
              });
              vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
          }
          i = parsedTargets.length;
          while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
              curLookup = propTweenLookup[i];
              if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
              }
              for (p in props) {
                pt = curLookup && curLookup[p];
                if (pt) {
                  if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                    _removeLinkedListItem(this, pt, "_pt");
                  }
                  delete curLookup[p];
                }
                if (curOverwriteProps !== "all") {
                  curOverwriteProps[p] = 1;
                }
              }
            }
          }
          this._initted && !this._pt && firstPT && _interrupt3(this);
          return this;
        };
        Tween2.to = function to(targets, vars) {
          return new Tween2(targets, vars, arguments[2]);
        };
        Tween2.from = function from(targets, vars) {
          return _createTweenType(1, arguments);
        };
        Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
          return new Tween2(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
          });
        };
        Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
          return _createTweenType(2, arguments);
        };
        Tween2.set = function set(targets, vars) {
          vars.duration = 0;
          vars.repeatDelay || (vars.repeat = 0);
          return new Tween2(targets, vars);
        };
        Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          return _globalTimeline.killTweensOf(targets, props, onlyActive);
        };
        return Tween2;
      }(Animation);
      _setDefaults3(Tween.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });
      _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
        Tween[name] = function() {
          var tl = new Timeline(), params = _slice.call(arguments, 0);
          params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
          return tl[name].apply(tl, params);
        };
      });
      var _setterPlain = function _setterPlain2(target, property, value) {
        return target[property] = value;
      }, _setterFunc = function _setterFunc2(target, property, value) {
        return target[property](value);
      }, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
        return target[property](data.fp, value);
      }, _setterAttribute = function _setterAttribute2(target, property, value) {
        return target.setAttribute(property, value);
      }, _getSetter = function _getSetter2(target, property) {
        return _isFunction3(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
      }, _renderPlain = function _renderPlain2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
      }, _renderBoolean = function _renderBoolean2(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      }, _renderComplexString = function _renderComplexString2(ratio, data) {
        var pt = data._pt, s = "";
        if (!ratio && data.b) {
          s = data.b;
        } else if (ratio === 1 && data.e) {
          s = data.e;
        } else {
          while (pt) {
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
            pt = pt._next;
          }
          s += data.c;
        }
        data.set(data.t, data.p, s, data);
      }, _renderPropTweens = function _renderPropTweens2(ratio, data) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      }, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
        var pt = this._pt, next;
        while (pt) {
          next = pt._next;
          pt.p === property && pt.modifier(modifier, tween, target);
          pt = next;
        }
      }, _killPropTweensOf = function _killPropTweensOf2(property) {
        var pt = this._pt, hasNonDependentRemaining, next;
        while (pt) {
          next = pt._next;
          if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
          } else if (!pt.dep) {
            hasNonDependentRemaining = 1;
          }
          pt = next;
        }
        return !hasNonDependentRemaining;
      }, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
      }, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
        var pt = parent._pt, next, pt2, first, last;
        while (pt) {
          next = pt._next;
          pt2 = first;
          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }
          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }
          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }
          pt = next;
        }
        parent._pt = first;
      };
      var PropTween = function() {
        function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
          this.t = target;
          this.s = start;
          this.c = change;
          this.p = prop;
          this.r = renderer || _renderPlain;
          this.d = data || this;
          this.set = setter || _setterPlain;
          this.pr = priority || 0;
          this._next = next;
          if (next) {
            next._prev = this;
          }
        }
        var _proto4 = PropTween2.prototype;
        _proto4.modifier = function modifier(func, tween, target) {
          this.mSet = this.mSet || this.set;
          this.set = _setterWithModifier;
          this.m = func;
          this.mt = target;
          this.tween = tween;
        };
        return PropTween2;
      }();
      _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
        return _reservedProps[name] = 1;
      });
      _globals.TweenMax = _globals.TweenLite = Tween;
      _globals.TimelineLite = _globals.TimelineMax = Timeline;
      _globalTimeline = new Timeline({
        sortChildren: false,
        defaults: _defaults2,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      var _media = [], _listeners2 = {}, _emptyArray2 = [], _lastMediaTime = 0, _contextID = 0, _dispatch3 = function _dispatch4(type) {
        return (_listeners2[type] || _emptyArray2).map(function(f) {
          return f();
        });
      }, _onMediaChange = function _onMediaChange2() {
        var time = Date.now(), matches = [];
        if (time - _lastMediaTime > 2) {
          _dispatch3("matchMediaInit");
          _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for (p in queries) {
              match = _win4.matchMedia(queries[p]).matches;
              match && (anyMatch = 1);
              if (match !== conditions[p]) {
                conditions[p] = match;
                toggled = 1;
              }
            }
            if (toggled) {
              c.revert();
              anyMatch && matches.push(c);
            }
          });
          _dispatch3("matchMediaRevert");
          matches.forEach(function(c) {
            return c.onMatch(c, function(func) {
              return c.add(null, func);
            });
          });
          _lastMediaTime = time;
          _dispatch3("matchMedia");
        }
      };
      var Context = function() {
        function Context2(func, scope) {
          this.selector = scope && selector(scope);
          this.data = [];
          this._r = [];
          this.isReverted = false;
          this.id = _contextID++;
          func && this.add(func);
        }
        var _proto5 = Context2.prototype;
        _proto5.add = function add(name, func, scope) {
          if (_isFunction3(name)) {
            scope = func;
            func = name;
            name = _isFunction3;
          }
          var self2 = this, f = function f2() {
            var prev = _context3, prevSelector = self2.selector, result;
            prev && prev !== self2 && prev.data.push(self2);
            scope && (self2.selector = selector(scope));
            _context3 = self2;
            result = func.apply(self2, arguments);
            _isFunction3(result) && self2._r.push(result);
            _context3 = prev;
            self2.selector = prevSelector;
            self2.isReverted = false;
            return result;
          };
          self2.last = f;
          return name === _isFunction3 ? f(self2, function(func2) {
            return self2.add(null, func2);
          }) : name ? self2[name] = f : f;
        };
        _proto5.ignore = function ignore(func) {
          var prev = _context3;
          _context3 = null;
          func(this);
          _context3 = prev;
        };
        _proto5.getTweens = function getTweens() {
          var a = [];
          this.data.forEach(function(e) {
            return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
          });
          return a;
        };
        _proto5.clear = function clear() {
          this._r.length = this.data.length = 0;
        };
        _proto5.kill = function kill(revert, matchMedia2) {
          var _this4 = this;
          if (revert) {
            (function() {
              var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
              while (i2--) {
                t = _this4.data[i2];
                if (t.data === "isFlip") {
                  t.revert();
                  t.getChildren(true, true, false).forEach(function(tween) {
                    return tweens.splice(tweens.indexOf(tween), 1);
                  });
                }
              }
              tweens.map(function(t2) {
                return {
                  g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
                  t: t2
                };
              }).sort(function(a, b) {
                return b.g - a.g || -Infinity;
              }).forEach(function(o) {
                return o.t.revert(revert);
              });
              i2 = _this4.data.length;
              while (i2--) {
                t = _this4.data[i2];
                if (t instanceof Timeline) {
                  if (t.data !== "nested") {
                    t.scrollTrigger && t.scrollTrigger.revert();
                    t.kill();
                  }
                } else {
                  !(t instanceof Tween) && t.revert && t.revert(revert);
                }
              }
              _this4._r.forEach(function(f) {
                return f(revert, _this4);
              });
              _this4.isReverted = true;
            })();
          } else {
            this.data.forEach(function(e) {
              return e.kill && e.kill();
            });
          }
          this.clear();
          if (matchMedia2) {
            var i = _media.length;
            while (i--) {
              _media[i].id === this.id && _media.splice(i, 1);
            }
          }
        };
        _proto5.revert = function revert(config) {
          this.kill(config || {});
        };
        return Context2;
      }();
      var MatchMedia = function() {
        function MatchMedia2(scope) {
          this.contexts = [];
          this.scope = scope;
          _context3 && _context3.data.push(this);
        }
        var _proto6 = MatchMedia2.prototype;
        _proto6.add = function add(conditions, func, scope) {
          _isObject3(conditions) || (conditions = {
            matches: conditions
          });
          var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
          _context3 && !context.selector && (context.selector = _context3.selector);
          this.contexts.push(context);
          func = context.add("onMatch", func);
          context.queries = conditions;
          for (p in conditions) {
            if (p === "all") {
              active = 1;
            } else {
              mq = _win4.matchMedia(conditions[p]);
              if (mq) {
                _media.indexOf(context) < 0 && _media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
              }
            }
          }
          active && func(context, function(f) {
            return context.add(null, f);
          });
          return this;
        };
        _proto6.revert = function revert(config) {
          this.kill(config || {});
        };
        _proto6.kill = function kill(revert) {
          this.contexts.forEach(function(c) {
            return c.kill(revert, true);
          });
        };
        return MatchMedia2;
      }();
      var _gsap = {
        registerPlugin: function registerPlugin() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          args.forEach(function(config) {
            return _createPlugin(config);
          });
        },
        timeline: function timeline(vars) {
          return new Timeline(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
          return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
          _isString3(target) && (target = toArray(target)[0]);
          var getter = _getCache(target || {}).get, format = unit ? _passThrough3 : _numericIfPossible;
          unit === "native" && (unit = "");
          return !target ? target : !property ? function(property2, unit2, uncache2) {
            return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);
          if (target.length > 1) {
            var setters = target.map(function(t) {
              return gsap5.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
              var i = l;
              while (i--) {
                setters[i](value);
              }
            };
          }
          target = target[0] || {};
          var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
            var p2 = new Plugin();
            _quickTween._pt = 0;
            p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p2.render(1, p2);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
          } : cache.set(target, p);
          return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
        },
        quickTo: function quickTo(target, property, vars) {
          var _setDefaults22;
          var tween = gsap5.to(target, _setDefaults3((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
          func.tween = tween;
          return func;
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults2.ease));
          return _mergeDeep(_defaults2, value || {});
        },
        config: function config(value) {
          return _mergeDeep(_config, value || {});
        },
        registerEffect: function registerEffect(_ref3) {
          var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
          (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
          });
          _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults3(vars || {}, defaults), tl);
          };
          if (extendTimeline) {
            Timeline.prototype[name] = function(targets, vars, position) {
              return this.add(_effects[name](targets, _isObject3(vars) ? vars : (position = vars) && {}, this), position);
            };
          }
        },
        registerEase: function registerEase(name, ease) {
          _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
          return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
          return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
          if (vars === void 0) {
            vars = {};
          }
          var tl = new Timeline(vars), child, next;
          tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
          _globalTimeline.remove(tl);
          tl._dp = 0;
          tl._time = tl._tTime = _globalTimeline._time;
          child = _globalTimeline._first;
          while (child) {
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
              _addToTimeline(tl, child, child._start - child._delay);
            }
            child = next;
          }
          _addToTimeline(_globalTimeline, tl, 0);
          return tl;
        },
        context: function context(func, scope) {
          return func ? new Context(func, scope) : _context3;
        },
        matchMedia: function matchMedia2(scope) {
          return new MatchMedia(scope);
        },
        matchMediaRefresh: function matchMediaRefresh() {
          return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for (p in cond) {
              if (cond[p]) {
                cond[p] = false;
                found = 1;
              }
            }
            found && c.revert();
          }) || _onMediaChange();
        },
        addEventListener: function addEventListener(type, callback) {
          var a = _listeners2[type] || (_listeners2[type] = []);
          ~a.indexOf(callback) || a.push(callback);
        },
        removeEventListener: function removeEventListener(type, callback) {
          var a = _listeners2[type], i = a && a.indexOf(callback);
          i >= 0 && a.splice(i, 1);
        },
        utils: {
          wrap,
          wrapYoyo,
          distribute,
          random,
          snap,
          normalize,
          getUnit,
          clamp: clamp2,
          splitColor,
          toArray,
          selector,
          mapRange,
          pipe,
          unitize,
          interpolate,
          shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
          PropTween,
          globals: _addGlobal,
          Tween,
          Timeline,
          Animation,
          getCache: _getCache,
          _removeLinkedListItem,
          reverting: function reverting() {
            return _reverting;
          },
          context: function context(toAdd) {
            if (toAdd && _context3) {
              _context3.data.push(toAdd);
              toAdd._ctx = _context3;
            }
            return _context3;
          },
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites2 = value;
          }
        }
      };
      _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
        return _gsap[name] = Tween[name];
      });
      _ticker.add(Timeline.updateRoot);
      _quickTween = _gsap.to({}, {
        duration: 0
      });
      var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
        var pt = plugin._pt;
        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
          pt = pt._next;
        }
        return pt;
      }, _addModifiers = function _addModifiers2(tween, modifiers) {
        var targets = tween._targets, p, i, pt;
        for (p in modifiers) {
          i = targets.length;
          while (i--) {
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
              if (pt._pt) {
                pt = _getPluginPropTween(pt, p);
              }
              pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
          }
        }
      }, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
        return {
          name,
          headless: 1,
          rawVars: 1,
          init: function init(target, vars, tween) {
            tween._onInit = function(tween2) {
              var temp, p;
              if (_isString3(vars)) {
                temp = {};
                _forEachName(vars, function(name2) {
                  return temp[name2] = 1;
                });
                vars = temp;
              }
              if (modifier) {
                temp = {};
                for (p in vars) {
                  temp[p] = modifier(vars[p]);
                }
                vars = temp;
              }
              _addModifiers(tween2, vars);
            };
          }
        };
      };
      var gsap5 = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
          var p, pt, v;
          this.tween = tween;
          for (p in vars) {
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v;
            this._props.push(p);
          }
        },
        render: function render2(ratio, data) {
          var pt = data._pt;
          while (pt) {
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }
      }, {
        name: "endArray",
        headless: 1,
        init: function init(target, value) {
          var i = value.length;
          while (i--) {
            this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap5.version = "3.13.0";
      _coreReady = 1;
      _windowExists3() && _wake();
      var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
      var _win$1, _doc$1, _docElement2, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting$1, _windowExists$1 = function _windowExists4() {
        return typeof window !== "undefined";
      }, _transformProps = {}, _RAD2DEG2 = 180 / Math.PI, _DEG2RAD2 = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp2 = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      }, _renderCSSProp = function _renderCSSProp2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      }, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
      }, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
      }, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      }, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
        return target.style[property] = value;
      }, _setterCSSProp = function _setterCSSProp2(target, property, value) {
        return target.style.setProperty(property, value);
      }, _setterTransform = function _setterTransform2(target, property, value) {
        return target._gsap[property] = value;
      }, _setterScale = function _setterScale2(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
      }, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      }, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      }, _transformProp3 = "transform", _transformOriginProp2 = _transformProp3 + "Origin", _saveStyle = function _saveStyle2(property, isNotCSS) {
        var _this = this;
        var target = this.target, style = target.style, cache = target._gsap;
        if (property in _transformProps && style) {
          this.tfm = this.tfm || {};
          if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
              return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
            property === _transformOriginProp2 && (this.tfm.zOrigin = cache.zOrigin);
          } else {
            return _propertyAliases.transform.split(",").forEach(function(p) {
              return _saveStyle2.call(_this, p, isNotCSS);
            });
          }
          if (this.props.indexOf(_transformProp3) >= 0) {
            return;
          }
          if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp2, isNotCSS, "");
          }
          property = _transformProp3;
        }
        (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
      }, _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
        if (style.translate) {
          style.removeProperty("translate");
          style.removeProperty("scale");
          style.removeProperty("rotate");
        }
      }, _revertStyle = function _revertStyle2() {
        var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
        for (i = 0; i < props.length; i += 3) {
          if (!props[i + 1]) {
            props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp2, "-$1").toLowerCase());
          } else if (props[i + 1] === 2) {
            target[props[i]](props[i + 2]);
          } else {
            target[props[i]] = props[i + 2];
          }
        }
        if (this.tfm) {
          for (p in this.tfm) {
            cache[p] = this.tfm[p];
          }
          if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
          }
          i = _reverting$1();
          if ((!i || !i.isStart) && !style[_transformProp3]) {
            _removeIndependentTransforms(style);
            if (cache.zOrigin && style[_transformOriginProp2]) {
              style[_transformOriginProp2] += " " + cache.zOrigin + "px";
              cache.zOrigin = 0;
              cache.renderTransform();
            }
            cache.uncache = 1;
          }
        }
      }, _getStyleSaver2 = function _getStyleSaver3(target, properties) {
        var saver = {
          target,
          props: [],
          revert: _revertStyle,
          save: _saveStyle
        };
        target._gsap || gsap5.core.getCache(target);
        properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
          return saver.save(p);
        });
        return saver;
      }, _supports3D, _createElement = function _createElement2(type, ns) {
        var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
        return e && e.style ? e : _doc$1.createElement(type);
      }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp2, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
      }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
        var e = element || _tempDiv, s = e.style, i = 5;
        if (property in s && !preferPrefix) {
          return property;
        }
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i-- && !(_prefixes[i] + property in s)) {
        }
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
      }, _initCore3 = function _initCore4() {
        if (_windowExists$1() && window.document) {
          _win$1 = window;
          _doc$1 = _win$1.document;
          _docElement2 = _doc$1.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp3 = _checkPropPrefix(_transformProp3);
          _transformOriginProp2 = _transformProp3 + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _reverting$1 = gsap5.core.reverting;
          _pluginInitted = 1;
        }
      }, _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
        var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
        clone.style.display = "block";
        svg.appendChild(clone);
        _docElement2.appendChild(svg);
        try {
          bbox = clone.getBBox();
        } catch (e) {
        }
        svg.removeChild(clone);
        _docElement2.removeChild(svg);
        return bbox;
      }, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
        var i = attributesArray.length;
        while (i--) {
          if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
          }
        }
      }, _getBBox = function _getBBox2(target) {
        var bounds, cloned;
        try {
          bounds = target.getBBox();
        } catch (error) {
          bounds = _getReparentedCloneBBox(target);
          cloned = 1;
        }
        bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
          x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
          y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        } : bounds;
      }, _isSVG = function _isSVG2(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
      }, _removeProperty = function _removeProperty2(target, property) {
        if (property) {
          var style = target.style, first2Chars;
          if (property in _transformProps && property !== _transformOriginProp2) {
            property = _transformProp3;
          }
          if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp2, "-$1").toLowerCase());
          } else {
            style.removeAttribute(property);
          }
        }
      }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
      }, _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
      }, _nonStandardLayouts = {
        grid: 1,
        flex: 1
      }, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
          return curValue;
        }
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
          px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
          return _round5(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
        if (isSVG) {
          parent = (target.ownerSVGElement || {}).parentNode;
        }
        if (!parent || parent === _doc$1 || !parent.appendChild) {
          parent = _doc$1.body;
        }
        cache = parent._gsap;
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
          return _round5(curValue / cache.width * amount);
        } else {
          if (toPercent && (property === "height" || property === "width")) {
            var v = target.style[property];
            target.style[property] = amount + unit;
            px = target[measureProperty];
            v ? target.style[property] = v : _removeProperty(target, property);
          } else {
            (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
          }
          if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
          }
        }
        return _round5(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      }, _get = function _get2(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore3();
        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];
          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }
        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp2)) + " " + value.zOrigin + "px";
        } else {
          value = target.style[property];
          if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
          }
        }
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
      }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
        if (!start || start === "none") {
          var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
          if (s && s !== start) {
            prop = p;
            start = s;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor");
          }
        }
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (end.substring(0, 6) === "var(--") {
          end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
        }
        if (end === "auto") {
          startValue = target.style[prop];
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
        }
        a = [start, end];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
          while (result = _numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
              color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
              if (!endUnit) {
                endUnit = endUnit || _config.units[prop] || startUnit;
                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }
              if (startUnit !== endUnit) {
                startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
              }
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                s: startNum,
                c: endNum - startNum,
                m: color && color < 4 || prop === "zIndex" ? Math.round : 0
              };
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else {
          pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        }
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
      }, _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
          value = x;
          x = y;
          y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
      }, _renderClearProps = function _renderClearProps2(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i = props.length;
            while (--i > -1) {
              prop = props[i];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp2 : _transformProp3;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp3);
            if (cache) {
              cache.svg && target.removeAttribute("transform");
              style.scale = style.rotate = style.translate = "none";
              _parseTransform(target, 1);
              cache.uncache = 1;
              _removeIndependentTransforms(style);
            }
          }
        }
      }, _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
          if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
          }
        }
      }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
      }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
        var matrixString = _getComputedProperty(target, _transformProp3);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round5);
      }, _getMatrix = function _getMatrix2(target, force2D) {
        var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement2 && !cache.svg) {
          temp = style.display;
          style.display = "block";
          parent = target.parentNode;
          if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
            addedToDOM = 1;
            nextSibling = target.nextElementSibling;
            _docElement2.appendChild(target);
          }
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? style.display = temp : _removeProperty(target, "display");
          if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement2.removeChild(target);
          }
        }
        return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
      }, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
          yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }
        if (smooth || smooth !== false && cache.smooth) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp2] = "0px 0px";
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      }, _parseTransform = function _parseTransform2(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }
        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp2) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        if (cs.translate) {
          if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
            style[_transformProp3] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp3] !== "none" ? cs[_transformProp3] : "");
          }
          style.scale = style.rotate = style.translate = "none";
        }
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
          if (cache.uncache) {
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
          } else {
            t1 = !uncache && target.getAttribute("data-svg-origin");
          }
          _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
          a = matrix[0];
          b = matrix[1];
          c = matrix[2];
          d = matrix[3];
          x = a12 = matrix[4];
          y = a22 = matrix[5];
          if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG2 : 0;
            skewX = c || d ? _atan2(c, d) * _RAD2DEG2 + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD2)));
            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG2;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG2;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            }
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG2;
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
            scaleX = _round5(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round5(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG2 : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp3));
            t1 && target.setAttribute("transform", t1);
          }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }
        uncache = uncache || cache.uncache;
        cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round5(scaleX);
        cache.scaleY = _round5(scaleY);
        cache.rotation = _round5(rotation) + deg;
        cache.rotationX = _round5(rotationX) + deg;
        cache.rotationY = _round5(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
          style[_transformOriginProp2] = _firstTwoOnly(origin);
        }
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      }, _firstTwoOnly = function _firstTwoOnly2(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      }, _addPxTranslate = function _addPxTranslate2(target, start, value) {
        var unit = getUnit(start);
        return _round5(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
      }, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
      }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD2, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
          angle = parseFloat(rotationX) * _DEG2RAD2;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }
        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
          transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        }
        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }
        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }
        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }
        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }
        target.style[_transformProp3] = transforms || "translate(0, 0)";
      }, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
        if (rotation || skewX) {
          rotation *= _DEG2RAD2;
          skewX *= _DEG2RAD2;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
          if (skewX) {
            skewY *= _DEG2RAD2;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
          a11 = _round5(a11);
          a21 = _round5(a21);
          a12 = _round5(a12);
          a22 = _round5(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
          tx = _convertToUnit(target, "x", x, "px");
          ty = _convertToUnit(target, "y", y, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round5(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round5(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round5(tx + xPercent / 100 * temp.width);
          ty = _round5(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp3] = temp);
      }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
        var cap = 360, isString = _isString3(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG2 : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
        if (isString) {
          direction = endValue.split("_")[1];
          if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
          if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
          }
        }
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
        plugin._props.push(property);
        return pt;
      }, _assign = function _assign2(target, source) {
        for (var p in source) {
          target[p] = source[p];
        }
        return target;
      }, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
        var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        if (startCache.svg) {
          startValue = target.getAttribute("transform");
          target.setAttribute("transform", "");
          style[_transformProp3] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp3);
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp3];
          style[_transformProp3] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp3] = startValue;
        }
        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];
          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
          }
        }
        _assign(endCache, startCache);
      };
      _forEachName("padding,margin,Width,Radius", function(name, index) {
        var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
          return index < 2 ? name + side : "border" + side + name;
        });
        _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
          var a, vars;
          if (arguments.length < 4) {
            a = props.map(function(prop) {
              return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
          }
          a = (endValue + "").split(" ");
          vars = {};
          props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });
      var CSSPlugin = {
        name: "css",
        register: _initCore3,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init(target, vars, tween, index, targets) {
          var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
          _pluginInitted || _initCore3();
          this.styles = this.styles || _getStyleSaver2(target);
          inlineProps = this.styles.props;
          this.tween = tween;
          for (p in vars) {
            if (p === "autoRound") {
              continue;
            }
            endValue = vars[p];
            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
              continue;
            }
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
              endValue = endValue.call(tween, index, target, targets);
              type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) {
              endValue = _replaceRandom(endValue);
            }
            if (specialProp) {
              specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
              startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
              endValue += "";
              _colorExp.lastIndex = 0;
              if (!_colorExp.test(startValue)) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
              }
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
              this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
              props.push(p);
              inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
              if (startAt && p in startAt) {
                startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                _isString3(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
              } else {
                startValue = _get(target, p);
              }
              startNum = parseFloat(startValue);
              relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
              relative && (endValue = endValue.substr(2));
              endNum = parseFloat(endValue);
              if (p in _propertyAliases) {
                if (p === "autoAlpha") {
                  if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                    startNum = 0;
                  }
                  inlineProps.push("visibility", 0, style.visibility);
                  _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                }
                if (p !== "scale" && p !== "transform") {
                  p = _propertyAliases[p];
                  ~p.indexOf(",") && (p = p.split(",")[0]);
                }
              }
              isTransformRelated = p in _transformProps;
              if (isTransformRelated) {
                this.styles.save(p);
                if (type === "string" && endValue.substring(0, 6) === "var(--") {
                  endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
                  endNum = parseFloat(endValue);
                }
                if (!transformPropTween) {
                  cache = target._gsap;
                  cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                  smooth = vars.smoothOrigin !== false && cache.smooth;
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp3, 0, 1, cache.renderTransform, cache, 0, -1);
                  transformPropTween.dep = 1;
                }
                if (p === "scale") {
                  this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                  this._pt.u = 0;
                  props.push("scaleY", p);
                  p += "X";
                } else if (p === "transformOrigin") {
                  inlineProps.push(_transformOriginProp2, 0, style[_transformOriginProp2]);
                  endValue = _convertKeywordsToPercentages(endValue);
                  if (cache.svg) {
                    _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                  } else {
                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                  }
                  continue;
                } else if (p === "svgOrigin") {
                  _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                  continue;
                } else if (p in _rotationalProperties) {
                  _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                  continue;
                } else if (p === "smoothOrigin") {
                  _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                  continue;
                } else if (p === "force3D") {
                  cache[p] = endValue;
                  continue;
                } else if (p === "transform") {
                  _addRawTransformPTs(this, endValue, target);
                  continue;
                }
              } else if (!(p in style)) {
                p = _checkPropPrefix(p) || p;
              }
              if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                startUnit = (startValue + "").substr((startNum + "").length);
                endNum || (endNum = 0);
                endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                this._pt.u = endUnit || 0;
                if (startUnit !== endUnit && endUnit !== "%") {
                  this._pt.b = startValue;
                  this._pt.r = _renderCSSPropWithBeginning;
                }
              } else if (!(p in style)) {
                if (p in target) {
                  this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                } else if (p !== "parseTransform") {
                  _missingPlugin(p, endValue);
                  continue;
                }
              } else {
                _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
              }
              isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
              props.push(p);
            }
          }
          hasPriority && _sortPropTweensByPriority(this);
        },
        render: function render2(ratio, data) {
          if (data.tween._time || !_reverting$1()) {
            var pt = data._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
          } else {
            data.styles.revert();
          }
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
          var p = _propertyAliases[property];
          p && p.indexOf(",") < 0 && (property = p);
          return property in _transformProps && property !== _transformOriginProp2 && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
          _removeProperty,
          _getMatrix
        }
      };
      gsap5.utils.checkPrefix = _checkPropPrefix;
      gsap5.core.getStyleSaver = _getStyleSaver2;
      (function(positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
          _transformProps[name] = 1;
        });
        _forEachName(rotation, function(name) {
          _config.units[name] = "deg";
          _rotationalProperties[name] = 1;
        });
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
        _forEachName(aliases, function(name) {
          var split = name.split(":");
          _propertyAliases[split[1]] = all[split[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
      _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
        _config.units[name] = "px";
      });
      gsap5.registerPlugin(CSSPlugin);
      var gsapWithCSS = gsap5.registerPlugin(CSSPlugin) || gsap5, TweenMaxWithCSS = gsapWithCSS.core.Tween;
      exports3.Back = Back;
      exports3.Bounce = Bounce;
      exports3.CSSPlugin = CSSPlugin;
      exports3.Circ = Circ;
      exports3.Cubic = Cubic;
      exports3.Elastic = Elastic;
      exports3.Expo = Expo;
      exports3.Linear = Linear;
      exports3.Power0 = Power0;
      exports3.Power1 = Power1;
      exports3.Power2 = Power2;
      exports3.Power3 = Power3;
      exports3.Power4 = Power4;
      exports3.Quad = Quad;
      exports3.Quart = Quart;
      exports3.Quint = Quint;
      exports3.Sine = Sine;
      exports3.SteppedEase = SteppedEase;
      exports3.Strong = Strong;
      exports3.TimelineLite = Timeline;
      exports3.TimelineMax = Timeline;
      exports3.TweenLite = Tween;
      exports3.TweenMax = TweenMaxWithCSS;
      exports3.default = gsapWithCSS;
      exports3.gsap = gsapWithCSS;
      if (typeof window === "undefined" || window !== exports3) {
        Object.defineProperty(exports3, "__esModule", { value: true });
      } else {
        delete window.default;
      }
    });
  }
});

// src/server.jsx
var server_exports = {};
__export(server_exports, {
  render: () => render
});
module.exports = __toCommonJS(server_exports);
var import_server = require("react-dom/server");

// src/Layout.jsx
var import_react = require("react");

// src/content.js
var contact = {
  email: "info.websqr@gmail.com",
  phone: "+91 88248 39582",
  whatsapp: "https://wa.me/918824839582",
  instagram: "https://www.instagram.com/websqr/",
  facebook: "https://www.facebook.com/profile.php?id=61593875295853"
};
var featuredSlugs = ["doms", "house-of-chikankari", "the-misfits", "tangelos", "niluk", "balance-breens", "spunkies", "navyas-fashion"];
var services = [
  { name: "Websites & ecommerce", short: "Stores that sell.", body: "Distinctive websites with clear journeys, considered product discovery and a short path to checkout or enquiry.", items: ["Shopify, Wix & Squarespace", "WordPress & Hostinger Builder", "Custom-coded websites", "Store migrations & integrations", "Speed & conversion fixes"] },
  { name: "Performance marketing", short: "Ads that pay back.", body: "Paid acquisition, retargeting and lead generation, with creative testing, conversion tracking and reporting built in.", items: ["Google Search, Shopping & YouTube", "Meta: Facebook & Instagram", "LinkedIn & Microsoft Ads", "Pinterest, Snapchat & TikTok", "Amazon Ads, X & Reddit", "GA4 & conversion tracking"] },
  { name: "Social media", short: "A feed worth following.", body: "A consistent voice and a content plan that covers everyday posting and your next big launch.", items: ["Strategy & content calendars", "Reels, posts & stories", "Creative production", "Community management"] },
  { name: "UI/UX & creative", short: "Look right, work right.", body: "Digital experiences and brand visuals that connect function with personality across screens and campaigns.", items: ["Figma wireframes & prototypes", "User journeys & design systems", "3D visuals & product renders", "Campaign & brand graphics"] },
  { name: "SEO & discovery", short: "Get found on Google.", body: "Technical foundations, relevant content and better on-page experiences that compound over time.", items: ["Technical audits & indexing", "Keyword & content strategy", "On-page & ecommerce SEO", "Core Web Vitals & schema", "Local SEO & Search Console"] },
  { name: "Shopify apps & products", short: "Beyond the theme.", body: "Shopify apps, custom store features and our own digital products for growing businesses.", items: ["Shopify plugins & apps", "Custom store functionality", "Workflow integrations", "Ready-made digital products"] }
];
var steps = [
  { title: "Discover", text: "We learn your business and audience, and agree on what the project has to achieve.", tags: "Goals, audience, scope" },
  { title: "Design", text: "Strategy becomes structure, wireframes and a visual direction built around your brand.", tags: "Journeys, Figma, prototypes" },
  { title: "Develop", text: "We build, integrate and test across devices with speed and usability in mind.", tags: "Code, commerce, QA" },
  { title: "Launch & grow", text: "We launch, hand over, then plan the improvements and campaigns that come next.", tags: "Launch, measure, improve" }
];
var industries = {
  ecommerce: ["Clothing", "Jewellery", "Food & protein", "Eyewear", "Homeware", "Digital products", "Footwear", "Stationery", "Gifting & hampers", "Wellness"],
  leads: ["Real estate", "Hotels", "Restaurants", "Salons", "Caf\xE9s", "Clinics", "B2B brands", "Professional services"]
};
var platforms = ["Shopify", "WordPress", "Wix", "Squarespace", "Hostinger", "Custom code"];
var faqs = [
  { q: "Can you redesign our existing website?", a: "Yes. We can refresh the design, improve the shopping journey, rebuild custom features or move you to a better-suited platform. We start by understanding what already works." },
  { q: "Which platform should we choose?", a: "It depends on your catalogue, content, integrations and budget. We work with Shopify, Wix, Squarespace, WordPress, Hostinger Builder and custom code, and we\u2019ll recommend one with reasons." },
  { q: "Can you run marketing after launch?", a: "Yes. Performance marketing, social media and SEO can be planned alongside the website, so the campaigns and the store work towards the same numbers." },
  { q: "How do we get a timeline and quote?", a: "Send your goals, current website, the features you need and your target launch date. We\u2019ll talk through scope, then propose an approach, timeline and cost." }
];
var sheetEndpoint = "https://script.google.com/macros/s/AKfycbwzvEfNCJjHPBCZ_MsL_osfkZeVkgKk56i9oMAo8hjyRLrF0t8CRoeLS1vazHQvEyxN/exec";
var formEndpoint = "https://formsubmit.co/ajax/info.websqr@gmail.com";
var downloads = [
  { key: "brand", title: "Brand portfolio", file: "/downloads/WebSqr-Brand-Portfolio.pdf", meta: "PDF \xB7 21 pages \xB7 11 MB", points: ["71 live websites", "Fashion to B2B", "Links to every site"] },
  { key: "perf", title: "Performance marketing portfolio", file: "/downloads/WebSqr-Performance-Marketing-Portfolio.pdf", meta: "PDF \xB7 12 slides \xB7 0.6 MB", points: ["Meta Ads case studies", "ROAS by brand", "Funnel numbers"] }
];
var perf = {
  glance: [
    { value: "20+", label: "brands on paid ads" },
    { value: "\u20B91.5Cr+", label: "monthly Meta budget handled" },
    { value: "3.6\u20134.9X", label: "ROAS on featured cases" }
  ],
  // ROAS by brand, ad spend in lakh. Source: Meta Ads Manager (from the performance deck).
  cases: [
    { name: "Moms Colorful Magic", cat: "Wall decor", spend: "\u20B93L", roas: 4.89 },
    { name: "Paancho", cat: "Ethnic wear", spend: "\u20B95L", roas: 4.17, url: "https://paancho.com/" },
    { name: "The Copper Story", cat: "Utensils", spend: "\u20B93L", roas: 3.81 },
    { name: "Shuddhi Clothing", cat: "Fashion", spend: "\u2248\u20B99.2L", roas: 3.74, url: "https://shuddhiclothing.com/" },
    { name: "Label Saymo", cat: "Fashion", spend: "\u20B96L", roas: 3.74, url: "https://labelsaymo.com/" },
    { name: "VJR", cat: "Fashion", spend: "\u20B91.5L", roas: 3.65 },
    { name: "Bless Gifters", cat: "Gifting", spend: "\u20B92.5L", roas: 3.61 }
  ],
  shuddhi: {
    period: "1 Jan \u2013 31 Aug 2026",
    stats: [{ v: "\u2248\u20B99.2L", l: "Ad spend" }, { v: "\u20B934.4L", l: "Conversion value" }, { v: "2,514", l: "Purchases" }, { v: "\u20B91,367", l: "Average order" }],
    funnel: [{ l: "Landing page views", n: 88028 }, { l: "Adds to cart", n: 16283 }, { l: "Checkouts", n: 4801 }, { l: "Payment info", n: 2766 }, { l: "Purchases", n: 2514 }]
  },
  extra: [
    { name: "VJR", points: ["\u20B91.5L spend", "4,206 adds to cart", "942 checkouts", "381 purchases"] },
    { name: "Bless Gifters", points: ["\u20B92.5L spend", "1,130 checkouts", "279 purchases", "4.95X best ad ROAS"] }
  ],
  brands: ["Paancho", "Shuddhi Clothing", "Label Saymo", "The Copper Story", "Athletica Physio", "Moms Colorful Magic", "Bless Gifters", "Renu Bhagwat Design", "Gifts by Komal", "VJR"],
  channels: ["Meta: Facebook & Instagram", "Google Search & Shopping", "YouTube", "LinkedIn", "Microsoft Ads", "Pinterest", "Snapchat", "Amazon Ads", "X & Reddit"],
  how: [
    { t: "Audit", p: ["Pixel & CAPI check", "Account structure", "Creative review"] },
    { t: "Build", p: ["Audiences & offers", "Ad creatives & UGC", "Landing page fixes"] },
    { t: "Scale", p: ["Weekly testing", "Budget shifts to winners", "Clear monthly report"] }
  ]
};
var whyUs = [
  { t: "One team", p: "Design, development, ads and social under one roof." },
  { t: "Official partners", p: "Shopify, GoKwik and FlexiPay." },
  { t: "200+ websites", p: "Built over 4+ years across India, the UK and the US." },
  { t: "Ads that pay back", p: "3.6\u20134.9X ROAS on our featured Meta cases." },
  { t: "Custom when needed", p: "Shopify apps and features beyond the theme." },
  { t: "Tracked properly", p: "GA4, Meta pixel and conversion reporting set up." }
];
var engagements = [
  { t: "New launch", p: ["Brand & audience discovery", "Design + development", "Launch checklist"] },
  { t: "Redesign or migration", p: ["Review what works", "Rebuild or move platform", "Custom features"] },
  { t: "Monthly growth", p: ["Ads + social + SEO", "Ongoing site updates", "Monthly reporting"] }
];
var principles = [
  { t: "Talk like people", p: "Clear updates, shared decisions, no jargon." },
  { t: "Sweat the small stuff", p: "The mobile menu and the button copy matter." },
  { t: "Think past launch", p: "Sites built for the team that runs them next." }
];
var tools = ["Shopify", "WordPress", "Wix", "Squarespace", "Hostinger", "Figma", "Adobe CC", "CorelDRAW", "GA4", "Meta Ads Manager", "Google Ads", "Search Console"];
var nextSteps = [
  { t: "We read it", p: "A real person goes through your brief." },
  { t: "We reply", p: "By email or WhatsApp, usually with a few questions." },
  { t: "We plan", p: "A short call, then scope, timeline and cost." }
];

// src/data/brands.json
var brands_default = [
  {
    slug: "doms",
    name: "DOMS",
    category: "Art Supplies & Stationery",
    group: "Industry & tech",
    description: "A colorful retail experience built for product discovery across creative tools, school essentials and stationery.",
    url: "https://doms.shop/",
    logo: "/logos/doms.webp",
    logoRatio: 2.615,
    accent: "#24549c"
  },
  {
    slug: "broadway-live",
    name: "Broadway Live",
    category: "Fashion Beauty & Wellness Marketplace",
    group: "Fashion",
    description: "A high-volume multi-category storefront designed around fast discovery, brand-led merchandising and two- hour delivery.",
    url: "https://shop.broadwaylive.in/",
    logo: "/logos/broadway-live.webp",
    logoRatio: 2.333,
    accent: null
  },
  {
    slug: "house-of-chikankari",
    name: "House of Chikankari",
    category: "Indian Ethnic Fashion",
    group: "Ethnic & craft",
    description: "A premium fashion storefront presenting Lucknowi chikankari through editorial collections, clear navigation and conversion-focused shopping.",
    url: "https://www.houseofchikankari.in/",
    logo: "/logos/house-of-chikankari.webp",
    logoRatio: 2.289,
    accent: "#0c8484"
  },
  {
    slug: "tangelos",
    name: "Tangelos",
    category: "Luxury Home & Bedding",
    group: "Home & gifting",
    description: "A refined UK ecommerce experience for organic cotton bedding, balancing premium storytelling with calm product presentation.",
    url: "https://www.tangelos.co.uk/",
    logo: "/logos/tangelos.webp",
    logoRatio: 3.75,
    accent: null
  },
  {
    slug: "merch-ice",
    name: "Merch & Ice",
    category: "Fashion & Jewellery Marketplace",
    group: "Fashion",
    description: "A curated destination for fashion, demi-fine and fine jewellery with a contemporary editorial shopping experience.",
    url: "https://merchandice.co/",
    logo: "/logos/merch-ice.webp",
    logoRatio: 2.929,
    accent: null
  },
  {
    slug: "the-misfits",
    name: "The Misfits",
    category: "Healthy and Upcycled Food",
    group: "Food",
    description: "A playful food-commerce platform that makes better-for-you snacks, spreads and sustainability stories easy to explore.",
    url: "https://mymisfits.in/",
    logo: "/logos/the-misfits.webp",
    logoRatio: 3.936,
    accent: null
  },
  {
    slug: "the-luxury-one",
    name: "The Luxury One",
    category: "Pre-loved Luxury Fashion",
    group: "Fashion",
    description: "A trust-led resale marketplace for authenticated pre-loved and new luxury fashion, built around browsability and confidence.",
    url: "https://theluxuryone.com/",
    logo: "/logos/the-luxury-one.webp",
    logoRatio: 1.647,
    accent: null
  },
  {
    slug: "dohr",
    name: "Dohr",
    category: "Contemporary Indian Wear",
    group: "Ethnic & craft",
    description: "An Indian wear label backed by the Kapsons Group, bringing decades of apparel experience to a new generation of Indian dressing.",
    url: "https://dohrindia.com/",
    logo: "/logos/dohr.webp",
    logoRatio: 4.443,
    accent: null
  },
  {
    slug: "showoffff",
    name: "Showoffff",
    category: "Affordable Fashion",
    group: "Fashion",
    description: "A trend-forward men\u2019s and women\u2019 s fashion store with energetic merchandising and direct paths from discovery to purchase.",
    url: "https://showoffff.in/",
    logo: "/logos/showoffff.webp",
    logoRatio: 6.686,
    accent: "#0c54b4"
  },
  {
    slug: "paancho",
    name: "Paancho",
    category: "Contemporary Fashion",
    group: "Fashion",
    description: "A visual-first fashion storefront using collection-led storytelling and streamlined ecommerce journeys.",
    url: "https://paancho.com/",
    logo: "/logos/paancho.webp",
    logoRatio: 5.238,
    accent: "#6c0c0c"
  },
  {
    slug: "har-rozz",
    name: "Har Rozz",
    category: "Everyday Fashion",
    group: "Fashion",
    description: "A broad apparel store organized for frequent discovery, seasonal edits and frictionless catalogue shopping.",
    url: "https://harrozz.com/",
    logo: "/logos/har-rozz.webp",
    logoRatio: 4.273,
    accent: null
  },
  {
    slug: "malverra",
    name: "Malverra",
    category: "Women\u2019s Contemporary Fashion",
    group: "Fashion",
    description: "A clean, product-led storefront for cotton dresses, tops and co-ord sets, combining modern styling with simple navigation.",
    url: "https://malverra.com/",
    logo: "/logos/malverra.webp",
    logoRatio: 2.603,
    accent: null
  },
  {
    slug: "wearenativ",
    name: "WeAreNativ",
    category: "Lifestyle & Apparel",
    group: "Fashion",
    description: "A distinctive brand experience combining visual storytelling, curated collections and an expressive digital identity.",
    url: "https://wearenativ.com/",
    logo: "/logos/wearenativ.webp",
    logoRatio: 1.128,
    accent: null
  },
  {
    slug: "geroo-jaipur",
    name: "Geroo Jaipur",
    category: "Designer Ethnic Wear",
    group: "Ethnic & craft",
    description: "An elegant ecommerce experience for women\u2019 s designer ethnic wear, shaped around collections, craft and occasion-based discovery.",
    url: "https://geroojaipur.com/",
    logo: "/logos/geroo-jaipur.webp",
    logoRatio: 1.068,
    accent: null
  },
  {
    slug: "the-bridge-boxe",
    name: "The Bridge Boxe",
    category: "Sustainable Gifting",
    group: "Home & gifting",
    description: "A purpose-led gifting store that communicates sustainable choices through thoughtful curation and clear product journeys",
    url: "https://www.thebridgeboxe.com/",
    logo: "/logos/the-bridge-boxe.webp",
    logoRatio: 0.995,
    accent: null
  },
  {
    slug: "kor-life",
    name: "Kor Life",
    category: "Wellness & Lifestyle",
    group: "Health & wellness",
    description: "A modern direct-to-consumer storefront designed to make wellness products approachable, credible and easy to shop.",
    url: "https://korlife.in/",
    logo: "/logos/kor-life.webp",
    logoRatio: 1.485,
    accent: "#9c6c54"
  },
  {
    slug: "maya",
    name: "Maya",
    category: "Nightlife & Hospitality",
    group: "Hospitality",
    description: "An immersive destination website for a premium nightlife concept, combining atmosphere, event discovery and consultation pathways.",
    url: "https://mayyaa.com/",
    logo: "/logos/maya.webp",
    logoRatio: 0.833,
    accent: null
  },
  {
    slug: "craftnyou",
    name: "craftNyou",
    category: "Handicraft Products",
    group: "Home & gifting",
    description: "A discovery-rich storefront for crafted products, balancing artisanal character with practical ecommerce usability.",
    url: "https://www.craftnyou.com/",
    logo: "/logos/craftnyou.webp",
    logoRatio: 5.264,
    accent: "#54243c"
  },
  {
    slug: "salona-bichona",
    name: "Salona Bichona",
    category: "Home Furnishings",
    group: "Home & gifting",
    description: "A warm home-lifestyle store built to showcase bedding and decor through inviting imagery and collection-first navigation.",
    url: "https://www.salonabichona.com/",
    logo: "/logos/salona-bichona.webp",
    logoRatio: 5.261,
    accent: null
  },
  {
    slug: "tangerine-jewelry",
    name: "Tangerine Jewelry",
    category: "Handcrafted Jewellery",
    group: "Jewellery",
    description: "A vibrant jewellery storefront highlighting Indian artisanship, lifetime warranty messaging and product-led storytelling.",
    url: "https://www.thetangerinejewelry.com/",
    logo: "/logos/tangerine-jewelry.webp",
    logoRatio: 6.228,
    accent: null
  },
  {
    slug: "carpet-planet",
    name: "Carpet Planet",
    category: "Rugs & Carpets",
    group: "Home & gifting",
    description: "A catalogue-focused home decor store that helps shoppers browse rugs and carpets by style, size and visual character.",
    url: "https://carpetplanet.in/",
    logo: "/logos/carpet-planet.webp",
    logoRatio: 1.698,
    accent: null
  },
  {
    slug: "je-amour-clinic",
    name: "Je Amour Clinic",
    category: "Skin & Hair Clinic",
    group: "Health & wellness",
    description: "A service-led clinic website for Chandigarh that supports treatment discovery, credibility and appointment intent.",
    url: "https://jeamourclinic.com/",
    logo: "/logos/je-amour-clinic.webp",
    logoRatio: 2.982,
    accent: "#243c3c"
  },
  {
    slug: "vari-jaipur",
    name: "Vari Jaipur",
    category: "Women\u2019s Ethnic Fashion",
    group: "Ethnic & craft",
    description: "A contemporary ethnic-wear storefront for dresses and kurta sets with collection-led browsing and clear product detail.",
    url: "https://varijaipur.com/",
    logo: "/logos/vari-jaipur.webp",
    logoRatio: 2.871,
    accent: "#9c240c"
  },
  {
    slug: "gubbachhi",
    name: "Gubbachhi",
    category: "Fashion & Lifestyle",
    group: "Fashion",
    description: "A characterful retail website with strong brand expression and a straightforward path from collections to checkout.",
    url: "https://gubbachhi.com/",
    logo: "/logos/gubbachhi.webp",
    logoRatio: 1.708,
    accent: "#fc9c3c"
  },
  {
    slug: "spunkies",
    name: "Spunkies",
    category: "Kids Wear",
    group: "Kids",
    description: "A bright, parent-friendly kidswear store organized for shopping by age, gender and category across boys\u2019 and girls\u2019 clothing.",
    url: "https://spunkies.com/",
    logo: "/logos/spunkies.webp",
    logoRatio: 3.54,
    accent: "#fccc0c"
  },
  {
    slug: "fateh-collection",
    name: "Fateh Collection",
    category: "Luxury Hospitality",
    group: "Hospitality",
    description: "A destination-led hospitality website presenting resorts in Udaipur and Kumbhalgarh through immersive storytelling and booking intent.",
    url: "https://www.fatehcollection.com/",
    logo: "/logos/fateh-collection.webp",
    logoRatio: 1.968,
    accent: "#ccb484"
  },
  {
    slug: "jamsha-store",
    name: "Jamsha Store",
    category: "Sustainable Fashion",
    group: "Fashion",
    description: "A conscious fashion storefront presenting organic drapes and sustainability-led design through a calm, editorial shopping experience.",
    url: "https://jamshastore.com/",
    logo: "/logos/jamsha-store.webp",
    logoRatio: 2.849,
    accent: null
  },
  {
    slug: "marwar-rootss",
    name: "Marwar Rootss",
    category: "Kids Ethnic Wear",
    group: "Kids",
    description: "A vibrant kidswear store for designer lehengas, kurta sets and festive styles, organized for easy family shopping.",
    url: "https://marwarrootss.com/",
    logo: "/logos/marwar-rootss.webp",
    logoRatio: 2.314,
    accent: "#9c5424"
  },
  {
    slug: "lmc-healthcare",
    name: "LMC Healthcare",
    category: "Healthcare Products",
    group: "Health & wellness",
    description: "A focused healthcare storefront designed to present products clearly and support confident purchase decisions.",
    url: "https://lmchealthcare.store/",
    logo: "/logos/lmc-healthcare.webp",
    logoRatio: 1.858,
    accent: "#e4cc6c"
  },
  {
    slug: "mabish-store",
    name: "Mabish Store",
    category: "Fashion & Lifestyle",
    group: "Fashion",
    description: "A contemporary ecommerce experience with clear product discovery, collection-led navigation and a streamlined purchase journey.",
    url: "https://www.mabishstore.com/",
    logo: "/logos/mabish-store.webp",
    logoRatio: 1.745,
    accent: "#e43c9c"
  },
  {
    slug: "salt-earth",
    name: "Salt Earth",
    category: "Home Textiles",
    group: "Home & gifting",
    description: "A warm home-lifestyle store for bedsheets, blankets, towels and everyday textiles, shaped around material and craft.",
    url: "https://thesaltearth.com/",
    logo: "/logos/salt-earth.webp",
    logoRatio: 6.282,
    accent: null
  },
  {
    slug: "rezen",
    name: "Rezen",
    category: "Fashion & Lifestyle",
    group: "Fashion",
    description: "A minimal direct-to-consumer storefront with a clean identity, focused collections and simple product journeys.",
    url: "https://www.rezen.shop/",
    logo: "/logos/rezen.webp",
    logoRatio: 1.072,
    accent: "#543c24"
  },
  {
    slug: "house-of-ayana",
    name: "House of Ayana",
    category: "Silk Sarees",
    group: "Ethnic & craft",
    description: "A boutique ecommerce experience for silk sarees, combining heritage presentation with structured online shopping.",
    url: "https://www.houseofayana.com/",
    logo: "/logos/house-of-ayana.webp",
    logoRatio: 2.51,
    accent: null
  },
  {
    slug: "label-saymo",
    name: "Label Saymo",
    category: "Designer Fashion",
    group: "Fashion",
    description: "A visual-first fashion storefront built around the label\u2019 s collections, product detail and contemporary identity.",
    url: "https://labelsaymo.com/",
    logo: "/logos/label-saymo.webp",
    logoRatio: 3.75,
    accent: null
  },
  {
    slug: "oodeypore",
    name: "Oodeypore",
    category: "Women\u2019s Fashion",
    group: "Fashion",
    description: "An Udaipur-inspired women\u2019 s clothing store for dresses, kurta sets and co-ords with editorial collection discovery.",
    url: "https://oodeypore.in/",
    logo: "/logos/oodeypore.webp",
    logoRatio: 2.791,
    accent: "#0c2454"
  },
  {
    slug: "nimisha-khandelwal",
    name: "Nimisha Khandelwal",
    category: "Designer Fashion",
    group: "Fashion",
    description: "A premium designer portfolio and commerce experience that foregrounds collections, silhouettes and brand craft.",
    url: "https://nimishakhandelwal.com/",
    logo: "/logos/nimisha-khandelwal.webp",
    logoRatio: 4.436,
    accent: null
  },
  {
    slug: "shuddhi-clothing",
    name: "Shuddhi Clothing",
    category: "Ethnic Fashion",
    group: "Ethnic & craft",
    description: "A catalogue-rich ethnic fashion store for kurtas, sets and separates, designed for direct category-to-product journeys.",
    url: "https://shuddhiclothing.com/",
    logo: "/logos/shuddhi-clothing.webp",
    logoRatio: 0.728,
    accent: "#9c543c"
  },
  {
    slug: "bassino-impex",
    name: "Bassino Impex",
    category: "Sanitaryware",
    group: "Home & gifting",
    description: "A product-led B2B and retail website for wash basins and sanitaryware, balancing specification clarity with visual appeal.",
    url: "https://bassinoimpex.com/",
    logo: "/logos/bassino-impex.webp",
    logoRatio: 3.23,
    accent: "#24546c"
  },
  {
    slug: "niluk",
    name: "Niluk",
    category: "Luxury Jewellery",
    group: "Jewellery",
    description: "A refined jewellery storefront shaped around premium product storytelling, collections and high-intent shopping.",
    url: "https://niluk.in/",
    logo: "/logos/niluk.webp",
    logoRatio: 3.63,
    accent: null
  },
  {
    slug: "bahi-official",
    name: "Bahi Official",
    category: "Fashion & Lifestyle",
    group: "Fashion",
    description: "A brand-forward ecommerce experience with clean collection navigation and a polished product discovery flow.",
    url: "https://bahiofficial.com/",
    logo: "/logos/bahi-official.webp",
    logoRatio: 1.525,
    accent: "#e4cc6c"
  },
  {
    slug: "kameezy",
    name: "Kameezy",
    category: "Fashion & Lifestyle",
    group: "Fashion",
    description: "A contemporary retail website designed for strong brand expression and straightforward mobile-first shopping.",
    url: "https://kameezy.com/",
    logo: "/logos/kameezy.webp",
    logoRatio: 3.972,
    accent: "#243c54"
  },
  {
    slug: "the-frost-india",
    name: "The Frost India",
    category: "Fine Jewellery",
    group: "Jewellery",
    description: "A luxury jewellery storefront for pendants, rings, earrings and bespoke work, built around craftsmanship and trust.",
    url: "https://frostind.com/",
    logo: "/logos/the-frost-india.webp",
    logoRatio: 0.938,
    accent: "#e4cc9c"
  },
  {
    slug: "guddee",
    name: "Guddee",
    category: "Artisan Gifts & Decor",
    group: "Home & gifting",
    description: "A handcrafted Indian gifting and decor store that connects artisan stories with personalized product discovery.",
    url: "https://www.guddee.in/",
    logo: "/logos/guddee.webp",
    logoRatio: 3.689,
    accent: "#846c0c"
  },
  {
    slug: "wibrion",
    name: "Wibrion",
    category: "Consumer Technology",
    group: "Industry & tech",
    description: "A product-driven store for automotive, grooming and everyday technology with benefit-led merchandising.",
    url: "https://wibrion.com/",
    logo: "/logos/wibrion.webp",
    logoRatio: 5.402,
    accent: "#84e424"
  },
  {
    slug: "balance-breens",
    name: "Balance Breens",
    category: "Supplements & Wellness",
    group: "Health & wellness",
    description: "A US-focused supplements storefront for vitamins and fitness products, combining clear benefits with conversion-led PDPs.",
    url: "https://balancebreens.com/",
    logo: "/logos/balance-breens.webp",
    logoRatio: 4.265,
    accent: null
  },
  {
    slug: "satyagiri-jaipur",
    name: "Satyagiri Jaipur",
    category: "Fashion & Lifestyle",
    group: "Fashion",
    description: "A Jaipur-rooted ecommerce experience with a refined identity, curated collections and streamlined shopping.",
    url: "https://satyagirijaipur.com/",
    logo: "/logos/satyagiri-jaipur.webp",
    logoRatio: 1.151,
    accent: "#840c0c"
  },
  {
    slug: "the-yellow-bow",
    name: "The Yellow Bow",
    category: "Women\u2019s Fashion",
    group: "Fashion",
    description: "A cheerful women\u2019s fashion store for cotton, floral and block-printed styles with occasion-led collection browsing.",
    url: "https://www.theyellowbow.com/",
    logo: "/logos/the-yellow-bow.webp",
    logoRatio: 3.174,
    accent: "#e4e46c"
  },
  {
    slug: "urban-basta",
    name: "Urban Basta",
    category: "Bags & Accessories",
    group: "Fashion",
    description: "A practical, product-first storefront for bags and accessories with direct navigation and clear shopping journeys.",
    url: "https://urbanbasta.com/",
    logo: "/logos/urban-basta.webp",
    logoRatio: 2.879,
    accent: null
  },
  {
    slug: "urban-boys-club",
    name: "Urban Boys Club",
    category: "Men\u2019s Fashion",
    group: "Fashion",
    description: "A youth-focused menswear destination with bold brand presentation and fast collection-to-product discovery.",
    url: "https://ubclub.co.in/",
    logo: "/logos/urban-boys-club.webp",
    logoRatio: 3.817,
    accent: null
  },
  {
    slug: "tooniverse",
    name: "Tooniverse",
    category: "Kids Toys & Learning",
    group: "Kids",
    description: "A colorful ecommerce store for educational toys, books and backpacks, designed for easy parent-led discovery.",
    url: "https://tooniverse.in/",
    logo: "/logos/tooniverse.webp",
    logoRatio: 7.823,
    accent: "#fccc84"
  },
  {
    slug: "the-bijou-box",
    name: "The Bijou Box",
    category: "Jewellery & Accessories",
    group: "Jewellery",
    description: "A polished accessories storefront that keeps product discovery visual, approachable and easy to shop.",
    url: "https://thebijoubox.in/",
    logo: "/logos/the-bijou-box.webp",
    logoRatio: 2.247,
    accent: null
  },
  {
    slug: "the-bug-buddy",
    name: "The Bug Buddy",
    category: "Kids & Lifestyle",
    group: "Kids",
    description: "A friendly ecommerce experience with playful brand presentation and simple product-focused navigation.",
    url: "https://thebugbuddy.com/",
    logo: "/logos/the-bug-buddy.webp",
    logoRatio: 2.137,
    accent: null
  },
  {
    slug: "renu-bhagwat-design",
    name: "Renu Bhagwat Design",
    category: "Design Fashion",
    group: "Fashion",
    description: "A portfolio-led designer website that presents collections and signature work through a clean editorial system.",
    url: "https://renubhagwat.com/",
    logo: "/logos/renu-bhagwat-design.webp",
    logoRatio: 1.025,
    accent: null
  },
  {
    slug: "ashnam",
    name: "Ashnam",
    category: "Home Decor",
    group: "Home & gifting",
    description: "A rich home decor catalogue for sculptures, artefacts and gifting, organized for visual browsing and purchase confidence.",
    url: "https://ashnam.com/",
    logo: "/logos/ashnam.webp",
    logoRatio: 4.307,
    accent: "#cc6c3c"
  },
  {
    slug: "navyas-fashion",
    name: "Navyas Fashion",
    category: "Block Printed Fashion",
    group: "Ethnic & craft",
    description: "A broad storefront for block-printed women\u2019 s wear, fabrics, scarves and home decor with category-led discovery.",
    url: "https://navyasfashion.com/",
    logo: "/logos/navyas-fashion.webp",
    logoRatio: 1,
    accent: null
  },
  {
    slug: "akera-health",
    name: "Akera Health",
    category: "Health & Wellness",
    group: "Health & wellness",
    description: "A modern health website designed to explain the problem, solution and product journey with clarity and trust.",
    url: "https://akerahealth.com/",
    logo: "/logos/akera-health.webp",
    logoRatio: 5.083,
    accent: null
  },
  {
    slug: "london-chiropody-clinic",
    name: "London Chiropody Clinic",
    category: "Clinic Services",
    group: "Health & wellness",
    description: "A professional clinic website built around treatment information, credibility and appointment intent.",
    url: "https://londonchiropodyclinic.co.uk/",
    logo: "/logos/london-chiropody-clinic.webp",
    logoRatio: 2.481,
    accent: "#243c54"
  },
  {
    slug: "the-osteopathic-clinics",
    name: "The Osteopathic Clinics",
    category: "Clinical Services",
    group: "Health & wellness",
    description: "A patient-focused osteopathy website that makes treatments, advice and clinic access clear and reassuring.",
    url: "https://theosteopathicclinics.co.uk/",
    logo: "/logos/the-osteopathic-clinics.webp",
    logoRatio: 1.957,
    accent: "#24b4b4"
  },
  {
    slug: "mura-gifts",
    name: "Mura Gifts",
    category: "Marble Gifts & Decor",
    group: "Home & gifting",
    description: "A crafted gifting storefront for marble-led products, balancing visual presentation with clear catalogue shopping.",
    url: "https://muragifts.com/",
    logo: "/logos/mura-gifts.webp",
    logoRatio: 1.947,
    accent: null
  },
  {
    slug: "the-nourish-code",
    name: "The Nourish Code",
    category: "Better For You Food",
    group: "Food",
    description: "A clean food-commerce experience for thoughtfully formulated products, emphasizing ingredients and better choices.",
    url: "https://nourishcode.in/",
    logo: "/logos/the-nourish-code.webp",
    logoRatio: 1.025,
    accent: "#e49c9c"
  },
  {
    slug: "woven-riches-india",
    name: "Woven Riches India",
    category: "Textiles & Lifestyle",
    group: "Home & gifting",
    description: "A refined textile and lifestyle storefront with collection-led navigation and a craft-conscious visual identity.",
    url: "https://wovenrichesindia.com/",
    logo: "/logos/woven-riches-india.webp",
    logoRatio: 2.176,
    accent: null
  },
  {
    slug: "wasundari",
    name: "Wasundari",
    category: "Women\u2019s Fashion",
    group: "Fashion",
    description: "A collection-led fashion store designed around feminine styling, visual merchandising and mobile shopping.",
    url: "https://www.wasundari.com/",
    logo: "/logos/wasundari.webp",
    logoRatio: 4.252,
    accent: "#b46c3c"
  },
  {
    slug: "shreenath-flexotech",
    name: "Shreenath Flexotech",
    category: "Printing & Packaging",
    group: "Industry & tech",
    description: "A B2B website for photopolymer printing plates and packaging services, structured around capability and enquiry.",
    url: "https://shreenathflexotech.com/",
    logo: "/logos/shreenath-flexotech.webp",
    logoRatio: 3.302,
    accent: "#0c54b4"
  },
  {
    slug: "stellar-inks",
    name: "Stellar Inks",
    category: "Printing Solutions",
    group: "Industry & tech",
    description: "A business website presenting printing products and services through clear information architecture and enquiry paths.",
    url: "https://stellarinks.in/",
    logo: "/logos/stellar-inks.webp",
    logoRatio: 2.31,
    accent: "#0c9ce4"
  },
  {
    slug: "kelwa-marbles",
    name: "Kelwa Marbles",
    category: "Marble & Natural Stone",
    group: "Home & gifting",
    description: "A premium stone website showcasing family-owned mines and marble collections through material-led storytelling.",
    url: "https://kelwamarbles.com/",
    logo: "/logos/kelwa-marbles.webp",
    logoRatio: 2.674,
    accent: "#e4cc84"
  },
  {
    slug: "divjot-fine-bags",
    name: "Divjot Fine Bags",
    category: "Bags & Corporate Gifting",
    group: "Fashion",
    description: "A multi-category bag and gifting store serving retail and corporate customers with organized product discovery.",
    url: "https://divjotfinebags.com/",
    logo: "/logos/divjot-fine-bags.webp",
    logoRatio: 0.73,
    accent: "#e40c84"
  },
  {
    slug: "simply-soho",
    name: "Simply Soho",
    category: "Fashion & Lifestyle",
    group: "Fashion",
    description: "A minimal lifestyle storefront with a contemporary visual identity and smooth collection-to-checkout flow.",
    url: "https://simplysoho.in/",
    logo: "/logos/simply-soho.webp",
    logoRatio: 2.536,
    accent: null
  },
  {
    slug: "fitaari",
    name: "Fitaari",
    category: "Activewear & Fitness",
    group: "Fashion",
    description: "An energetic fitness-fashion storefront built for gym-focused audiences and direct product discovery.",
    url: "https://fitaari.com/",
    logo: "/logos/fitaari.webp",
    logoRatio: 1.168,
    accent: null
  },
  {
    slug: "raphelite",
    name: "Raphelite",
    category: "B2B Glucose Products",
    group: "Food",
    description: "A professional B2B product website presenting glucose solutions, quality and business enquiry pathways.",
    url: "https://raphelite.com/",
    logo: "/logos/raphelite.webp",
    logoRatio: 7.742,
    accent: "#3cb4fc"
  },
  {
    slug: "jaipur-basta",
    name: "Jaipur Basta",
    category: "Printed Handbags",
    group: "Fashion",
    description: "A lively handbag store for premium cotton prints, combining product variety with direct ecommerce navigation.",
    url: "https://jaipurbasta.com/",
    logo: "/logos/jaipur-basta.webp",
    logoRatio: 1.805,
    accent: "#cc9c84"
  },
  {
    slug: "naree-clothing",
    name: "Naree Clothing",
    category: "Responsible Fashion",
    group: "Fashion",
    description: "A slow-fashion storefront presenting conscious women\u2019 s clothing through refined visuals and thoughtful product stories.",
    url: "https://nareeclothing.com/",
    logo: "/logos/naree-clothing.webp",
    logoRatio: 2.098,
    accent: null
  }
];

// src/url.js
var cfg = { base: "", rel: false };
var setUrlConfig = (base, rel) => {
  cfg.base = base;
  cfg.rel = rel;
};
var PAGES = ["/", "/portfolio/", "/services/", "/performance/", "/about/", "/contact/", "/thank-you/"];
var pages = Object.fromEntries(PAGES.map((p) => [p, p === "/" ? "index.html" : p.slice(1) + "index.html"]));
function u(path) {
  if (!cfg.rel) return path;
  const [p, hash] = path.split("#");
  const mapped = pages[p] ?? p.replace(/^\//, "");
  return cfg.base + mapped + (hash !== void 0 ? "#" + hash : "");
}

// src/Card.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var bySlug = Object.fromEntries(brands_default.map((b) => [b.slug, b]));
var domain = (url) => url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : null;
function ArrowIcon({ size = 18 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: size, height: size, viewBox: "0 0 20 20", "aria-hidden": "true", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 15 15 5M7 5h8v8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square" }) });
}
function Card({ brand, size = "grid", eager = false }) {
  const Tag = brand.url ? "a" : "div";
  const linkProps = brand.url ? { href: brand.url, target: "_blank", rel: "noopener noreferrer" } : {};
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Tag,
    {
      className: `tile tile-${size}`,
      "data-group": brand.group,
      "data-slug": brand.slug,
      ...linkProps,
      "aria-label": brand.url ? `${brand.name}, ${brand.category}. Opens ${domain(brand.url)} in a new tab` : `${brand.name}, ${brand.category}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tile-inner", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tile-face tile-front", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: u(brand.logo), alt: "", loading: eager ? "eager" : "lazy", decoding: "async", style: { "--ratio": brand.logoRatio }, className: brand.logoRatio < 1.6 ? "is-tall" : "" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tile-cat", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { className: "tile-name", children: brand.name }),
            brand.category
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tile-face tile-back", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tile-cat", children: brand.category }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: brand.name }),
          size !== "stack" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: brand.description }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tile-link", children: brand.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            domain(brand.url),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowIcon, { size: 16 })
          ] }) : "Launching soon" })
        ] })
      ] })
    }
  );
}

// src/Sections.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function DownloadIcon({ size = 20 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10 3v10m0 0-4-4m4 4 4-4M4 16h12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "square" }) });
}
function PageHero({ title, lines, lede, children, tone = "blue" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: `page-hero tone-${tone}`, id: "top", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: (lines || [title]).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: l }) }, i)) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "page-hero-side", children: [
      lede && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: lede }),
      children
    ] })
  ] });
}
function StatsBand({ items, tone = "ink" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("section", { className: `stats-band tone-${tone}`, "aria-label": "Key numbers", children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { "data-countup": true, children: s.value }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: s.label })
  ] }, s.label)) });
}
var homeStats = [
  { value: "200+", label: "websites built" },
  { value: String(brands_default.length), label: "live brands in our portfolio" },
  { value: "\u20B91.5Cr+", label: "monthly Meta ad budget handled" },
  { value: "3.6\u20134.9X", label: "ROAS on featured cases" }
];
function Downloads({ id = "downloads", compact = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "downloads" + (compact ? " is-compact" : ""), id, "aria-labelledby": id + "-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "downloads-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { id: id + "-title", children: "Take the portfolios with you" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "Two PDFs to share with your team." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "dl-grid", children: downloads.map((d) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", { className: `dl-card dl-${d.key}`, href: u(d.file), download: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "dl-kind", children: d.meta }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: d.title }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { children: d.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: p }, p)) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "dl-btn", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DownloadIcon, {}),
        " Download PDF"
      ] })
    ] }, d.key)) })
  ] });
}
function RoasChart() {
  const max = 5;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("figure", { className: "roas", "aria-labelledby": "roas-cap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("figcaption", { id: "roas-cap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("b", { children: "Return on ad spend by brand" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Meta Ads. Ad spend in brackets." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ol", { className: "roas-list", children: perf.cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: "roas-row", tabIndex: 0, "aria-label": `${c.name}: ${c.roas}X ROAS on ${c.spend} spend`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "roas-name", children: [
        c.name,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { children: c.spend })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "roas-track", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "roas-bar", style: { "--w": (c.roas / max * 100).toFixed(1) + "%" } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "roas-val", children: [
        c.roas.toFixed(2),
        "X"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "roas-tip", role: "tooltip", children: [
        c.cat,
        " \xB7 ",
        c.spend,
        " spend"
      ] })
    ] }, c.name)) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "roas-axis", "aria-hidden": "true", children: [0, 1, 2, 3, 4, 5].map((t) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: { "--x": t / max * 100 + "%" }, children: [
      t,
      "X"
    ] }, t)) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "roas-src", children: "Source: Meta Ads Manager" })
  ] });
}
function PerfTeaser() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "perf-teaser", "aria-labelledby": "perf-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "perf-teaser-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { id: "perf-title", children: "Ad spend that comes back." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "glance", children: perf.glance.map((g) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: g.value }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: g.label })
      ] }, g.label)) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "row-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: "btn btn-lime", href: u("/performance/"), children: "See case studies" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", { className: "btn btn-line", href: u(downloads[1].file), download: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DownloadIcon, { size: 18 }),
          " Deck (PDF)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RoasChart, {})
  ] });
}
function WhyUs() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "why", "aria-labelledby": "why-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { id: "why-title", children: "Why brands pick WebSqr" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "why-grid", children: whyUs.map((w) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "why-sq", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: w.t }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: w.p })
    ] }, w.t)) })
  ] });
}
function ServiceGrid({ onPick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "svc-grid-wrap", id: "services", "aria-labelledby": "svc-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "svc-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { id: "svc-title", children: "Everything online, one team." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: "btn btn-ink", href: u("/services/"), children: "All services" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "svc-grid", children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: "svc-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: s.name }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "svc-short", children: s.short }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { children: s.items.slice(0, 4).map((x) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: x }, x)) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: "svc-link", href: u("/contact/"), onClick: () => onPick?.(s.name), "aria-label": `Ask about ${s.name}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ArrowIcon, { size: 20 }) })
    ] }, s.name)) })
  ] });
}
function Process() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "process", id: "process", "aria-labelledby": "process-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "process-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { id: "process-title", children: "From first call to launch day" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "Four stages. One team." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ol", { className: "steps", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "steps-line", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {}) }),
      steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: "step", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "step-sq", "aria-hidden": "true", children: i + 1 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: s.title }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: s.text }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { children: s.tags })
      ] }, s.title))
    ] })
  ] });
}
function CtaBand({ title = "Ready when you are.", text = "Tell us about your brand. We\u2019ll take it from there." }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "cta-band", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: text }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "row-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: "btn btn-ink", href: u("/contact/"), "data-magnetic": true, children: "Start a project" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: "btn btn-line-ink", href: u("/portfolio/"), children: "See the work" })
    ] })
  ] });
}

// src/Layout.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Header({ page }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const toggle = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const close = () => setOpen(false);
  const link = (key, path, label, extra) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: u(path), onClick: close, "aria-current": page === key ? "page" : void 0, children: [
    label,
    extra
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "site-header" + (open ? " is-open" : ""), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: "logo", href: u("/"), "aria-label": "WebSqr home", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: u("/brand/main.png"), alt: "WebSqr", width: "1080", height: "260" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { id: "site-nav", "aria-label": "Main", children: [
      link("portfolio", "/portfolio/", "Work", /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("sup", { children: brands_default.length })),
      link("services", "/services/", "Services"),
      link("performance", "/performance/", "Performance"),
      link("about", "/about/", "About"),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: "nav-cta", href: u("/contact/"), onClick: close, children: "Start a project" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { ref: toggle, className: "menu-btn", "aria-controls": "site-nav", "aria-expanded": open, onClick: () => setOpen(!open), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "visually-hidden", children: open ? "Close menu" : "Open menu" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", {})
    ] })
  ] });
}
function ContactForm({ brief, light = false }) {
  const form = (0, import_react.useRef)(null);
  const [state, setState] = (0, import_react.useState)("idle");
  const [ready, setReady] = (0, import_react.useState)("");
  const [copied, setCopied] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    let pre = brief;
    try {
      pre = pre || sessionStorage.getItem("ws-service");
    } catch {
    }
    const el = pre && form.current?.querySelector(`input[name="service"][value="${CSS.escape(pre)}"]`);
    if (el) el.checked = true;
  }, [brief]);
  const submit = async (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (d.get("_honey")) return;
    const data = Object.fromEntries(["name", "email", "phone", "brand", "service", "message"].map((k) => [k, d.get(k) || ""]));
    const msg = `Hello WebSqr, I'd like to discuss a project.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "\u2014"}
Brand: ${data.brand || "\u2014"}
Interested in: ${data.service}

${data.message}`;
    try {
      sessionStorage.setItem("ws-name", data.name);
    } catch {
    }
    const thanks = u("/thank-you/");
    if (sheetEndpoint) {
      setState("sending");
      try {
        await fetch(sheetEndpoint, { method: "POST", mode: "no-cors", body: new URLSearchParams({ ...data, page: location.pathname, source: document.referrer || "direct" }) });
        window.location.href = thanks;
        return;
      } catch {
      }
    } else if (formEndpoint) {
      setState("sending");
      try {
        const r = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, _subject: `Website enquiry: ${data.brand || data.name}`, _template: "table", _captcha: "false" })
        });
        const j = await r.json().catch(() => ({}));
        if (r.ok && String(j.success) !== "false") {
          window.location.href = thanks;
          return;
        }
      } catch {
      }
    }
    setReady(msg);
    setCopied(false);
    setState("fallback");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Project enquiry: " + (data.brand || data.name))}&body=${encodeURIComponent(msg)}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { ref: form, className: "contact-form" + (light ? " is-light" : ""), onSubmit: submit, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "text", name: "_honey", tabIndex: -1, autoComplete: "off", className: "visually-hidden", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
        "Name",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { name: "name", autoComplete: "name", required: true, maxLength: "100" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
        "Email",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { name: "email", type: "email", autoComplete: "email", required: true, maxLength: "200" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
        "Brand",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { name: "brand", autoComplete: "organization", maxLength: "150" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
        "Phone / WhatsApp",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { name: "phone", type: "tel", autoComplete: "tel", maxLength: "30", placeholder: "+91" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("fieldset", { className: "svc-pick", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("legend", { children: "What do you need?" }),
      [...services.map((s) => s.name), "Everything"].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "pick", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "radio", name: "service", value: n, required: true, defaultChecked: i === 0 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: n })
      ] }, n))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { children: [
      "About the project",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { name: "message", rows: "4", required: true, maxLength: "3000", placeholder: "Goals, current website, launch date\u2026" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "btn btn-lime", type: "submit", disabled: state === "sending", children: state === "sending" ? "Sending\u2026" : "Send enquiry" }),
    state === "fallback" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "form-ready", "aria-live": "polite", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "We couldn\u2019t send it from here. Your email app should open \u2014 or copy it, or send it on WhatsApp." }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "btn btn-ghost", onClick: async () => {
          try {
            await navigator.clipboard.writeText(ready);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }, children: copied ? "Copied" : "Copy enquiry" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: "btn btn-ghost", href: `${contact.whatsapp}?text=${encodeURIComponent(ready)}`, target: "_blank", rel: "noopener noreferrer", children: "Send on WhatsApp" })
      ] })
    ] })
  ] });
}
function Contact({ brief }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { id: "contact", className: "contact", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "contact-intro", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h2", { className: "contact-title", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Got a brand" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "worth building?" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "contact-points", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: "Free first call" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: "Clear scope and cost" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: "One team from design to ads" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "contact-lines", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: `mailto:${contact.email}`, children: contact.email }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: contact.whatsapp, target: "_blank", rel: "noopener noreferrer", children: [
          "WhatsApp ",
          contact.phone
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ContactForm, { brief })
  ] });
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { className: "site-footer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-cols", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col footer-about", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Websites, ecommerce and growth for good brands." }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "footer-dl", children: downloads.map((d) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: u(d.file), download: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DownloadIcon, { size: 16 }),
          " ",
          d.title
        ] }, d.key)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Pages" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: u("/portfolio/"), children: "Work" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: u("/services/"), children: "Services" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: u("/performance/"), children: "Performance" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: u("/about/"), children: "About" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: u("/contact/"), children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Services" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: u("/services/") + "#" + s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, ""), children: s.name }) }, s.name)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: "Say hello" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: `mailto:${contact.email}`, children: contact.email }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: contact.whatsapp, target: "_blank", rel: "noopener noreferrer", children: contact.phone }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: contact.instagram, target: "_blank", rel: "noopener noreferrer", children: "Instagram" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: contact.facebook, target: "_blank", rel: "noopener noreferrer", children: "Facebook" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "footer-mark", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: u("/brand/inverted.png"), alt: "", width: "1080", height: "260", loading: "lazy" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " WebSqr. Strategy, quality, results."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Official partner of Shopify, GoKwik and FlexiPay" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "#top", children: "Back to top" })
    ] })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: "wa-btn", href: `${contact.whatsapp}?text=${encodeURIComponent("Hi WebSqr, I'd like to discuss a project.")}`, target: "_blank", rel: "noopener noreferrer", "aria-label": "Chat with WebSqr on WhatsApp", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8.2 7.4c-.8.3-1 1.7-.3 3.1.9 1.9 2.7 3.6 4.8 4.3 1.5.5 2.5-.1 2.7-.8l.1-.8-2.5-1.1-.8 1c-1.4-.6-2.5-1.7-3.1-3l.9-.8-1-2.1-.8.2Z", fill: "currentColor" })
  ] }) });
}

// src/Home.jsx
var import_react2 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var featured = featuredSlugs.map((s) => bySlug[s]).filter(Boolean);
function Hero() {
  const stack = featured.slice(0, 5);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "hero", id: "top", "aria-label": "Introduction", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "hero-band", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h1", { className: "hero-title", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Good brands." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Great websites." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Real growth." }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "hero-partners", children: [
        "Official partner of ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { children: "Shopify" }),
        ", ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { children: "GoKwik" }),
        " and ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { children: "FlexiPay" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "hero-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { className: "hero-points", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Shopify & custom websites" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Meta & Google ads" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: "Social, SEO & design" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "hero-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { className: "btn btn-lime", href: u("/contact/"), "data-magnetic": true, children: "Start a project" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { className: "btn btn-line", href: u("/portfolio/"), children: "See all work" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("dl", { className: "hero-stats", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dt", { children: "Websites built" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "data-count": "200", children: "200" }),
            "+"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("dt", { children: "Years in business" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "data-count": "4", children: "4" }),
            "+"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "hero-square", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "hero-stack", "aria-hidden": "true", children: stack.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "stack-item", style: { "--i": i }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, { brand: b, size: "stack", eager: i < 2 }) }, b.slug)) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "hero-square-note", children: "Recent launches" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "hero-scroll", "aria-hidden": "true", children: "Scroll" })
    ] })
  ] });
}
function Work() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: "work", id: "work", "aria-labelledby": "work-title", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "work-pin", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "work-track", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "work-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h2", { id: "work-title", children: [
        "Stores we\u2019ve",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("br", {}),
        "put online"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Hover a tile to see what we built." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", { className: "btn btn-ink", href: u("/portfolio/"), children: [
        "All ",
        brands_default.length,
        " projects"
      ] })
    ] }),
    featured.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, { brand: b, size: "feature", eager: i < 2 }, b.slug)),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", { className: "work-more", href: u("/portfolio/"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { children: [
        brands_default.length - featured.length,
        " more brands"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArrowIcon, { size: 40 })
    ] })
  ] }) }) });
}
function Clients() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "clients", "aria-labelledby": "clients-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "clients-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h2", { id: "clients-title", children: [
        brands_default.length,
        " brands, from Jaipur to London."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Every logo is a live site we built." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "logo-wall", children: brands_default.map((b) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: b.url ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: b.url, target: "_blank", rel: "noopener noreferrer", title: `${b.name} \u2014 ${b.category}`, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: u(b.logo), alt: b.name, loading: "lazy", decoding: "async", style: { "--ratio": b.logoRatio } }) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { title: b.name, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: u(b.logo), alt: b.name, loading: "lazy", style: { "--ratio": b.logoRatio } }) }) }, b.slug)) })
  ] });
}
function Fit() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "fit", "aria-labelledby": "fit-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { id: "fit-title", className: "visually-hidden", children: "Industries and platforms" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "fit-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { children: "Online stores" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "tags", children: industries.ecommerce.map((t) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: t }, t)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "fit-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { children: "Lead generation" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "tags", children: industries.leads.map((t) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: t }, t)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "platforms", "aria-label": "Platforms we build on", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "platforms-track", children: [...platforms, ...platforms].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "aria-hidden": i >= platforms.length, children: p }, i)) }) })
  ] });
}
function FAQ() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "faq", id: "faq", "aria-labelledby": "faq-title", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { id: "faq-title", children: "Questions we hear a lot" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "faq-list", children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("details", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("summary", { children: [
        f.q,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: f.a })
    ] }, f.q)) })
  ] });
}
function Home({ onPick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Hero, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Work, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StatsBand, { items: homeStats }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ServiceGrid, { onPick }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PerfTeaser, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Clients, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WhyUs, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Process, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Downloads, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Fit, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FAQ, {})
  ] });
}

// src/Portfolio.jsx
var import_react3 = require("react");

// src/gsap.js
var import_gsap = __toESM(require_gsap(), 1);

// node_modules/gsap/Observer.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var gsap;
var _coreInitted;
var _clamp;
var _win;
var _doc;
var _docEl;
var _body;
var _isTouch;
var _pointerType;
var ScrollTrigger;
var _root;
var _normalizer;
var _eventTypes;
var _context;
var _getGSAP = function _getGSAP2() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
};
var _startup = 1;
var _observers = [];
var _scrollers = [];
var _proxies = [];
var _getTime = Date.now;
var _bridge = function _bridge2(name, value) {
  return value;
};
var _integrate = function _integrate2() {
  var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;
  _bridge = function _bridge3(name, value) {
    return data[name](value);
  };
};
var _getProxyProp = function _getProxyProp2(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
};
var _isViewport = function _isViewport2(el) {
  return !!~_root.indexOf(el);
};
var _addListener = function _addListener2(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== false,
    capture: !!capture
  });
};
var _removeListener = function _removeListener2(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
};
var _scrollLeft = "scrollLeft";
var _scrollTop = "scrollTop";
var _onScroll = function _onScroll2() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
};
var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
  var cachingFunc = function cachingFunc2(value) {
    if (value || value === 0) {
      _startup && (_win.history.scrollRestoration = "manual");
      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
      f(value);
      cachingFunc2.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value);
    } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
      cachingFunc2.cacheID = _scrollers.cache;
      cachingFunc2.v = f();
    }
    return cachingFunc2.v + cachingFunc2.offset;
  };
  cachingFunc.offset = 0;
  return f && cachingFunc;
};
var _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
};
var _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
};
var _getTarget = function _getTarget2(t, self2) {
  return (self2 && self2._ctx && self2._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
};
var _isWithin = function _isWithin2(element, list) {
  var i = list.length;
  while (i--) {
    if (list[i] === element || list[i].contains(element)) {
      return true;
    }
  }
  return false;
};
var _getScrollFunc = function _getScrollFunc2(element, _ref) {
  var s = _ref.s, sc = _ref.sc;
  _isViewport(element) && (element = _doc.scrollingElement || _docEl);
  var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
  var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
  return func;
};
var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
  var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
    var t = _getTime();
    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value2;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value2;
    } else {
      v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
    }
  }, reset = function reset2() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  }, getVelocity = function getVelocity2(latestValue) {
    var tOld = t2, vOld = v2, t = _getTime();
    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
  };
  return {
    update,
    reset,
    getVelocity
  };
};
var _getEvent = function _getEvent2(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
};
var _getAbsoluteMax = function _getAbsoluteMax2(a) {
  var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
};
var _setScrollTrigger = function _setScrollTrigger2() {
  ScrollTrigger = gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
};
var _initCore = function _initCore2(core) {
  gsap = core || _getGSAP();
  if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    _root = [_win, _doc, _docEl, _body];
    _clamp = gsap.utils.clamp;
    _context = gsap.core.context || function() {
    };
    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
    _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function() {
      return _startup = 0;
    }, 500);
    _setScrollTrigger();
    _coreInitted = 1;
  }
  return _coreInitted;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /* @__PURE__ */ function() {
  function Observer2(vars) {
    this.init(vars);
  }
  var _proto = Observer2.prototype;
  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce2 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce2 = debounce2 !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
    var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
      return onClickTime = _getTime();
    }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
      return (self2.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    }, onStopFunc = function onStopFunc2() {
      self2._vx.reset();
      self2._vy.reset();
      onStopDelayedCall.pause();
      onStop && onStop(self2);
    }, update = function update2() {
      var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
      onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
      if (changedX) {
        onRight && self2.deltaX > 0 && onRight(self2);
        onLeft && self2.deltaX < 0 && onLeft(self2);
        onChangeX && onChangeX(self2);
        onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
        prevDeltaX = self2.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }
      if (changedY) {
        onDown && self2.deltaY > 0 && onDown(self2);
        onUp && self2.deltaY < 0 && onUp(self2);
        onChangeY && onChangeY(self2);
        onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
        prevDeltaY = self2.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }
      if (moved || dragged) {
        onMove && onMove(self2);
        if (dragged) {
          onDragStart && dragged === 1 && onDragStart(self2);
          onDrag && onDrag(self2);
          dragged = 0;
        }
        moved = false;
      }
      locked && !(locked = false) && onLockAxis && onLockAxis(self2);
      if (wheeled) {
        onWheel(self2);
        wheeled = false;
      }
      id = 0;
    }, onDelta = function onDelta2(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;
      self2._vx.update(x);
      self2._vy.update(y);
      debounce2 ? id || (id = requestAnimationFrame(update)) : update();
    }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
      if (lockAxis && !axis) {
        self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }
      if (axis !== "y") {
        deltaX[2] += x;
        self2._vx.update(x, true);
      }
      if (axis !== "x") {
        deltaY[2] += y;
        self2._vy.update(y, true);
      }
      debounce2 ? id || (id = requestAnimationFrame(update)) : update();
    }, _onDrag = function _onDrag2(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
      self2.x = x;
      self2.y = y;
      if (isDragging || (dx || dy) && (Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum)) {
        dragged = isDragging ? 2 : 1;
        isDragging || (self2.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
      }
    }, _onPress = self2.onPress = function(e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }
      self2.axis = axis = null;
      onStopDelayedCall.pause();
      self2.isPressed = true;
      e = _getEvent(e);
      prevDeltaX = prevDeltaY = 0;
      self2.startX = self2.x = e.clientX;
      self2.startY = self2.y = e.clientY;
      self2._vx.reset();
      self2._vy.reset();
      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
      self2.deltaX = self2.deltaY = 0;
      onPress && onPress(self2);
    }, _onRelease = self2.onRelease = function(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
      var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
      if (!isDragNotClick && isTrackingDrag) {
        self2._vx.reset();
        self2._vy.reset();
        if (preventDefault && allowClicks) {
          gsap.delayedCall(0.08, function() {
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
      dragged && update();
      onDragEnd && wasDragging && onDragEnd(self2);
      onRelease && onRelease(self2, isDragNotClick);
    }, _onGestureStart = function _onGestureStart2(e) {
      return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
    }, _onGestureEnd = function _onGestureEnd2() {
      return (self2.isGesturing = false) || onGestureEnd(self2);
    }, onScroll = function onScroll2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = scrollFuncX(), y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    }, _onWheel = function _onWheel2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    }, _onMove = function _onMove2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
      self2.x = x;
      self2.y = y;
      moved = true;
      onStop && onStopDelayedCall.restart(true);
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    }, _onHover = function _onHover2(e) {
      self2.event = e;
      onHover(self2);
    }, _onHoverEnd = function _onHoverEnd2(e) {
      self2.event = e;
      onHoverEnd(self2);
    }, _onClick = function _onClick2(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
    };
    onStopDelayedCall = self2._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self2.deltaX = self2.deltaY = 0;
    self2._vx = _getVelocityProp(0, 50, true);
    self2._vy = _getVelocityProp(0, 50, true);
    self2.scrollX = scrollFuncX;
    self2.scrollY = scrollFuncY;
    self2.isDragging = self2.isGesturing = self2.isPressed = false;
    _context(this);
    self2.enable = function(e) {
      if (!self2.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, passive, capture);
          _addListener(ownerDoc, _eventTypes[2], _onRelease);
          _addListener(ownerDoc, _eventTypes[3], _onRelease);
          allowClicks && _addListener(target, "click", clickCapture, true, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }
        self2.isEnabled = true;
        self2.isDragging = self2.isGesturing = self2.isPressed = moved = dragged = false;
        self2._vx.reset();
        self2._vy.reset();
        scrollX = scrollFuncX();
        scrollY = scrollFuncY();
        e && e.type && _onPress(e);
        onEnable && onEnable(self2);
      }
      return self2;
    };
    self2.disable = function() {
      if (self2.isEnabled) {
        _observers.filter(function(o) {
          return o !== self2 && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        if (self2.isPressed) {
          self2._vx.reset();
          self2._vy.reset();
          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }
        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
        _removeListener(target, "wheel", _onWheel, capture);
        _removeListener(target, _eventTypes[0], _onPress, capture);
        _removeListener(ownerDoc, _eventTypes[2], _onRelease);
        _removeListener(ownerDoc, _eventTypes[3], _onRelease);
        _removeListener(target, "click", clickCapture, true);
        _removeListener(target, "click", _onClick);
        _removeListener(ownerDoc, "gesturestart", _onGestureStart);
        _removeListener(ownerDoc, "gestureend", _onGestureEnd);
        _removeListener(target, _pointerType + "enter", _onHover);
        _removeListener(target, _pointerType + "leave", _onHoverEnd);
        _removeListener(target, _pointerType + "move", _onMove);
        self2.isEnabled = self2.isPressed = self2.isDragging = false;
        onDisable && onDisable(self2);
      }
    };
    self2.kill = self2.revert = function() {
      self2.disable();
      var i = _observers.indexOf(self2);
      i >= 0 && _observers.splice(i, 1);
      _normalizer === self2 && (_normalizer = 0);
    };
    _observers.push(self2);
    isNormalizer && _isViewport(target) && (_normalizer = self2);
    self2.enable(event);
  };
  _createClass(Observer2, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);
  return Observer2;
}();
Observer.version = "3.13.0";
Observer.create = function(vars) {
  return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function() {
  return _observers.slice();
};
Observer.getById = function(id) {
  return _observers.filter(function(o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP() && gsap.registerPlugin(Observer);

// node_modules/gsap/ScrollTrigger.js
var gsap2;
var _coreInitted2;
var _win2;
var _doc2;
var _docEl2;
var _body2;
var _root2;
var _resizeDelay;
var _toArray;
var _clamp2;
var _time2;
var _syncInterval;
var _refreshing;
var _pointerIsDown;
var _transformProp;
var _i;
var _prevWidth;
var _prevHeight;
var _autoRefresh;
var _sort;
var _suppressOverwrites;
var _ignoreResize;
var _normalizer2;
var _ignoreMobileResize;
var _baseScreenHeight;
var _baseScreenWidth;
var _fixIOSBug;
var _context2;
var _scrollRestoration;
var _div100vh;
var _100vh;
var _isReverted;
var _clampingMax;
var _limitCallbacks;
var _startup2 = 1;
var _getTime2 = Date.now;
var _time1 = _getTime2();
var _lastScrollTime = 0;
var _enabled = 0;
var _parseClamp = function _parseClamp2(value, type, self2) {
  var clamp2 = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self2["_" + type + "Clamp"] = clamp2;
  return clamp2 ? value.substr(6, value.length - 7) : value;
};
var _keepClamp = function _keepClamp2(value, clamp2) {
  return clamp2 && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
};
var _rafBugFix = function _rafBugFix2() {
  return _enabled && requestAnimationFrame(_rafBugFix2);
};
var _pointerDownHandler = function _pointerDownHandler2() {
  return _pointerIsDown = 1;
};
var _pointerUpHandler = function _pointerUpHandler2() {
  return _pointerIsDown = 0;
};
var _passThrough = function _passThrough2(v) {
  return v;
};
var _round = function _round2(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
};
var _windowExists = function _windowExists2() {
  return typeof window !== "undefined";
};
var _getGSAP3 = function _getGSAP4() {
  return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
};
var _isViewport3 = function _isViewport4(e) {
  return !!~_root2.indexOf(e);
};
var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win2["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
};
var _getBoundsFunc = function _getBoundsFunc2(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
    _winOffsets.width = _win2.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function() {
    return _getBounds(element);
  });
};
var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
  var d = _ref.d, d2 = _ref.d2, a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
    return a()[d];
  } : function() {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
};
var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
    return _winOffsets;
  };
};
var _maxScroll = function _maxScroll2(element, _ref2) {
  var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
};
var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
};
var _isString = function _isString2(value) {
  return typeof value === "string";
};
var _isFunction = function _isFunction2(value) {
  return typeof value === "function";
};
var _isNumber = function _isNumber2(value) {
  return typeof value === "number";
};
var _isObject = function _isObject2(value) {
  return typeof value === "object";
};
var _endAnimation = function _endAnimation2(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
};
var _callback = function _callback2(self2, func) {
  if (self2.enabled) {
    var result = self2._ctx ? self2._ctx.add(function() {
      return func(self2);
    }) : func(self2);
    result && result.totalTime && (self2.callbackAnimation = result);
  }
};
var _abs = Math.abs;
var _left = "left";
var _top = "top";
var _right = "right";
var _bottom = "bottom";
var _width = "width";
var _height = "height";
var _Right = "Right";
var _Left = "Left";
var _Top = "Top";
var _Bottom = "Bottom";
var _padding = "padding";
var _margin = "margin";
var _Width = "Width";
var _Height = "Height";
var _px = "px";
var _getComputedStyle = function _getComputedStyle2(element) {
  return _win2.getComputedStyle(element);
};
var _makePositionable = function _makePositionable2(element) {
  var position = _getComputedStyle(element).position;
  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
};
var _setDefaults = function _setDefaults2(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }
  return obj;
};
var _getBounds = function _getBounds2(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap2.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
};
var _getSize = function _getSize2(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
};
var _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
  var a = [], labels = timeline.labels, duration = timeline.duration(), p;
  for (p in labels) {
    a.push(labels[p] / duration);
  }
  return a;
};
var _getClosestLabel = function _getClosestLabel2(animation) {
  return function(value) {
    return gsap2.utils.snap(_getLabelRatioArray(animation), value);
  };
};
var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
  var snap = gsap2.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
    return a2 - b;
  });
  return a ? function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var i;
    if (!direction) {
      return snap(value);
    }
    if (direction > 0) {
      value -= threshold;
      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }
      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;
      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }
    return a[0];
  } : function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
};
var _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
  return function(value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
};
var _multiListener = function _multiListener2(func, element, types, callback) {
  return types.split(",").forEach(function(type) {
    return func(element, type, callback);
  });
};
var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
};
var _removeListener3 = function _removeListener4(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
};
var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;
  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
};
var _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
};
var _defaults = {
  toggleActions: "play",
  anticipatePin: 0
};
var _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
};
var _offsetToPx = function _offsetToPx2(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }
    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }
  return value;
};
var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
  var e = _doc2.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];
  _positionMarker(e, 0, direction, isStart);
  return e;
};
var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap2.set(marker, vars);
};
var _triggers = [];
var _ids = {};
var _rafID;
var _sync = function _sync2() {
  return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
};
var _onScroll3 = function _onScroll4() {
  if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
    _scrollers.cache++;
    if (_normalizer2) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll();
    }
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime2();
  }
};
var _setBaseDimensions = function _setBaseDimensions2() {
  _baseScreenWidth = _win2.innerWidth;
  _baseScreenHeight = _win2.innerHeight;
};
var _onResize = function _onResize2(force) {
  _scrollers.cache++;
  (force === true || !_refreshing && !_ignoreResize && !_doc2.fullscreenElement && !_doc2.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win2.innerWidth || Math.abs(_win2.innerHeight - _baseScreenHeight) > _win2.innerHeight * 0.25)) && _resizeDelay.restart(true);
};
var _listeners = {};
var _emptyArray = [];
var _softRefresh = function _softRefresh2() {
  return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
};
var _dispatch = function _dispatch2(type) {
  return _listeners[type] && _listeners[type].map(function(f) {
    return f();
  }) || _emptyArray;
};
var _savedStyles = [];
var _revertRecorded = function _revertRecorded2(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
};
var _revertAll = function _revertAll2(kill, media) {
  var trigger;
  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];
    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }
  _isReverted = true;
  media && _revertRecorded(media);
  media || _dispatch("revert");
};
var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
  _scrollers.cache++;
  (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
    return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString(scrollRestoration) && (_win2.history.scrollRestoration = _scrollRestoration = scrollRestoration);
};
var _refreshingAll;
var _refreshID = 0;
var _queueRefreshID;
var _queueRefreshAll = function _queueRefreshAll2() {
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function() {
      return id === _refreshID && _refreshAll(true);
    });
  }
};
var _refresh100vh = function _refresh100vh2() {
  _body2.appendChild(_div100vh);
  _100vh = !_normalizer2 && _div100vh.offsetHeight || _win2.innerHeight;
  _body2.removeChild(_div100vh);
};
var _hideAllMarkers = function _hideAllMarkers2(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
    return el.style.display = hide ? "none" : "block";
  });
};
var _refreshAll = function _refreshAll2(force, skipRevert) {
  _docEl2 = _doc2.documentElement;
  _body2 = _doc2.body;
  _root2 = [_win2, _doc2, _docEl2, _body2];
  if (_lastScrollTime && !force && !_isReverted) {
    _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
    return;
  }
  _refresh100vh();
  _refreshingAll = ScrollTrigger2.isRefreshing = true;
  _scrollers.forEach(function(obj) {
    return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  });
  var refreshInits = _dispatch("refreshInit");
  _sort && ScrollTrigger2.sort();
  skipRevert || _revertAll();
  _scrollers.forEach(function(obj) {
    if (_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto");
      obj(0);
    }
  });
  _triggers.slice(0).forEach(function(t) {
    return t.refresh();
  });
  _isReverted = false;
  _triggers.forEach(function(t) {
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });
  _clampingMax = 1;
  _hideAllMarkers(true);
  _triggers.forEach(function(t) {
    var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
  });
  _hideAllMarkers(false);
  _clampingMax = 0;
  refreshInits.forEach(function(result) {
    return result && result.render && result.render(-1);
  });
  _scrollers.forEach(function(obj) {
    if (_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function() {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });
  _clearScrollMemory(_scrollRestoration, 1);
  _resizeDelay.pause();
  _refreshID++;
  _refreshingAll = 2;
  _updateAll(2);
  _triggers.forEach(function(t) {
    return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });
  _refreshingAll = ScrollTrigger2.isRefreshing = false;
  _dispatch("refresh");
};
var _lastScroll = 0;
var _direction = 1;
var _primary;
var _updateAll = function _updateAll2(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    ScrollTrigger2.isUpdating = true;
    _primary && _primary.update(0);
    var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);
    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;
        _dispatch("scrollEnd");
      }
      _time2 = _time1;
      _time1 = time;
    }
    if (_direction < 0) {
      _i = l;
      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
    ScrollTrigger2.isUpdating = false;
  }
  _rafID = 0;
};
var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
  _setState(state);
  var cache = pin._gsap;
  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;
    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
  pin._gsap.swappedIn = false;
};
var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }
    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
    _setState(spacerState);
    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }
    pin._gsap.swappedIn = true;
  }
};
var _capsExp = /([A-Z])/g;
var _setState = function _setState2(state) {
  if (state) {
    var style = state.t.style, l = state.length, i = 0, p, value;
    (state.t._gsap || gsap2.core.getCache(state.t)).uncache = 1;
    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];
      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
};
var _getState = function _getState2(element) {
  var l = _stateProps.length, style = element.style, state = [], i = 0;
  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }
  state.t = element;
  return state;
};
var _copyState = function _copyState2(state, override, omitOffsets) {
  var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }
  result.t = state.t;
  return result;
};
var _winOffsets = {
  left: 0,
  top: 0
};
var _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction(value) && (value = value(self2));
  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }
  var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value);
  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self2));
    var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
    element = _getTarget(trigger, self2) || _body2;
    bounds = _getBounds(element) || {};
    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }
    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset;
  } else {
    containerAnimation && (value = gsap2.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }
  if (clampZeroProp) {
    self2[clampZeroProp] = value || -1e-3;
    value < 0 && (value = 0);
  }
  if (marker) {
    var position = value + scrollerSize, isStart = marker._isStart;
    p1 = "scroll" + direction.d2;
    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }
  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }
  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
};
var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
var _reparent = function _reparent2(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style, p, cs;
    if (parent === _body2) {
      element._stOrig = style.cssText;
      cs = _getComputedStyle(element);
      for (p in cs) {
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }
      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }
    gsap2.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
};
var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue, last2 = last1;
  return function(value) {
    var current = Math.round(getValueFunc());
    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      value = current;
      onInterrupt && onInterrupt();
    }
    last2 = last1;
    last1 = Math.round(value);
    return last1;
  };
};
var _shiftMarker = function _shiftMarker2(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap2.set(marker, vars);
};
var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
    initialValue = initialValue || getScroll();
    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
      tween.kill();
      getTween2.tween = 0;
    });
    change2 = change1 && change2 || 0;
    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.inherit = false;
    vars.modifiers = modifiers;
    modifiers[prop] = function() {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };
    vars.onUpdate = function() {
      _scrollers.cache++;
      getTween2.tween && _updateAll();
    };
    vars.onComplete = function() {
      getTween2.tween = 0;
      onComplete && onComplete.call(tween);
    };
    tween = getTween2.tween = gsap2.to(scroller, vars);
    return tween;
  };
  scroller[prop] = getScroll;
  getScroll.wheelHandler = function() {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };
  _addListener3(scroller, "wheel", getScroll.wheelHandler);
  ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};
var ScrollTrigger2 = /* @__PURE__ */ function() {
  function ScrollTrigger3(vars, animation) {
    _coreInitted2 || ScrollTrigger3.register(gsap2) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    _context2(this);
    this.init(vars, animation);
  }
  var _proto = ScrollTrigger3.prototype;
  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true);
    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }
    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);
    var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win2), scrollerCache = gsap2.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
      return vars.onRefreshInit(self2);
    }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
    self2._startClamp = self2._endClamp = false;
    self2._dir = direction;
    anticipatePin *= 45;
    self2.scroller = scroller;
    self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self2.vars = vars;
    animation = animation || vars.animation;
    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self2);
    }
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    self2.scrubDuration = function(value) {
      scrubSmooth = _isNumber(value) && value;
      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap2.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self2);
          }
        });
      }
    };
    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
      self2.animation = animation.pause();
      animation.scrollTrigger = self2;
      self2.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }
    if (snap) {
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }
      "scrollBehavior" in _body2.style && gsap2.set(isViewport ? [_body2, _docEl2] : scroller, {
        scrollBehavior: "auto"
      });
      _scrollers.forEach(function(o) {
        return _isFunction(o) && o.target === (isViewport ? _doc2.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
      });
      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap2.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp2(snapDurClamp.min, snapDurClamp.max) : _clamp2(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap2.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
        var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
        if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap2.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self2);
          _isNumber(endValue) || (endValue = naturalEnd);
          endScroll = Math.max(0, Math.round(start + endValue * change));
          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              return;
            }
            if (snap.inertia === false) {
              change1 = endValue - progress;
            }
            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
              },
              onComplete: function onComplete() {
                self2.update();
                lastSnap = scrollFunc();
                if (animation && !isToggle) {
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                onSnapComplete && onSnapComplete(self2);
                _onComplete && _onComplete(self2);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self2, tweenTo.tween);
          }
        } else if (self2.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }
    id && (_ids[id] = self2);
    trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self2));
    pin = pin === true ? trigger : _getTarget(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });
    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
      self2.pin = pin;
      pinCache = gsap2.core.getCache(pin);
      if (!pinCache.spacer) {
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }
        pinCache.spacer = spacer = pinSpacer || _doc2.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }
      vars.force3D !== false && gsap2.set(pin, {
        force3D: true
      });
      self2.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap2.getProperty(pin);
      pinSetter = gsap2.quickSetter(pin, direction.a, _px);
      _swapPinIn(pin, spacer, cs);
      pinState = _getState(pin);
    }
    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap2.quickSetter([markerStart, markerEnd], direction.a, _px));
      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body2 : scroller);
        gsap2.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap2.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap2.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function() {
        self2.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }
    self2.previous = function() {
      return _triggers[_triggers.indexOf(self2) - 1];
    };
    self2.next = function() {
      return _triggers[_triggers.indexOf(self2) + 1];
    };
    self2.revert = function(revert, temp) {
      if (!temp) {
        return self2.kill(true);
      }
      var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
      if (r !== self2.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
          prevProgress = self2.progress;
          prevAnimProgress = animation && animation.progress();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.style.display = r ? "none" : "block";
        });
        if (r) {
          _refreshing = self2;
          self2.update(r);
        }
        if (pin && (!pinReparent || !self2.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }
        r || self2.update(r);
        _refreshing = prevRefreshing;
        self2.isReverted = r;
      }
    };
    self2.refresh = function(soft, force, position, pinOffset) {
      if ((_refreshing || !self2.enabled) && !force) {
        return;
      }
      if (pin && soft && _lastScrollTime) {
        _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
        return;
      }
      !_refreshingAll && onRefreshInit && onRefreshInit(self2);
      _refreshing = self2;
      if (tweenTo.tween && !position) {
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }
      scrubTween && scrubTween.pause();
      if (invalidateOnRefresh && animation) {
        animation.revert({
          kill: false
        }).invalidate();
        animation.getChildren && animation.getChildren(true, true, false).forEach(function(t) {
          return t.vars.immediateRender && t.render(0, true, true);
        });
      }
      self2.isReverted || self2.revert(true, true);
      self2._subPinOffset = false;
      var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
      if (markers && _isObject(position)) {
        markerStartOffset = gsap2.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap2.getProperty(markerEndTrigger, direction.p);
      }
      while (i-- > 0) {
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
        curPin = curTrigger.pin;
        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger);
          curTrigger.revert(true, true);
        }
        if (curTrigger !== _triggers[i]) {
          triggerIndex--;
          i--;
        }
      }
      _isFunction(parsedStart) && (parsedStart = parsedStart(self2));
      parsedStart = _parseClamp(parsedStart, "start", self2);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset2 = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap2.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
          parsedEndTrigger = trigger;
        }
      }
      parsedEnd = _parseClamp(parsedEnd, "end", self2);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
      offset2 = 0;
      i = triggerIndex;
      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;
        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            offset2 += cs2 * (1 - curTrigger.progress);
          }
          curPin === pin && (otherPinOffset += cs2);
        }
      }
      start += offset2;
      end += offset2;
      self2._startClamp && (self2._startClamp += offset2);
      if (self2._endClamp && !_refreshingAll) {
        self2._endClamp = end || -1e-3;
        end = Math.min(end, _maxScroll(scroller, direction));
      }
      change = end - start || (start -= 0.01) && 1e-3;
      if (isFirstRefresh) {
        prevProgress = gsap2.utils.clamp(0, 1, gsap2.utils.normalize(start, end, prevScroll));
      }
      self2._pinPush = otherPinOffset;
      if (markerStart && offset2) {
        cs2 = {};
        cs2[direction.a] = "+=" + offset2;
        pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
        gsap2.set([markerStart, markerEnd], cs2);
      }
      if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
        cs2 = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc();
        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        if (!max && end > 1) {
          forcedOverflow = (isViewport ? _doc2.scrollingElement || _docEl2 : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };
          if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }
        _swapPinIn(pin, spacer, cs2);
        pinState = _getState(pin);
        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          if (i) {
            spacerState.push(direction.d, i + _px);
            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }
          _setState(spacerState);
          if (pinnedContainer) {
            _triggers.forEach(function(t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }
          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }
        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs2[_padding];
          override[_padding + _Top] = cs2[_padding + _Top];
          override[_padding + _Right] = cs2[_padding + _Right];
          override[_padding + _Bottom] = cs2[_padding + _Bottom];
          override[_padding + _Left] = cs2[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }
        if (animation) {
          initted = animation._initted;
          _suppressOverwrites(1);
          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime());
          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        bounds = trigger.parentNode;
        while (bounds && bounds !== _body2) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }
          bounds = bounds.parentNode;
        }
      }
      revertedPins && revertedPins.forEach(function(t) {
        return t.revert(false, true);
      });
      self2.start = start;
      self2.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self2.scroll.rec = 0;
      }
      self2.revert(false, true);
      lastRefresh = _getTime2();
      if (snapDelayedCall) {
        lastSnap = -1;
        snapDelayedCall.restart(true);
      }
      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
      if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
        animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap2.utils.normalize(start, end, 0) : prevProgress, true);
        self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }
      pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
      scrubTween && scrubTween.invalidate();
      if (!isNaN(markerStartOffset)) {
        markerStartOffset -= gsap2.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap2.getProperty(markerEndTrigger, direction.p);
        _shiftMarker(markerStartTrigger, direction, markerStartOffset);
        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
        _shiftMarker(markerEndTrigger, direction, markerEndOffset);
        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }
      isFirstRefresh && !_refreshingAll && self2.update();
      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        executingOnRefresh = true;
        onRefresh(self2);
        executingOnRefresh = false;
      }
    };
    self2.getVelocity = function() {
      return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
    };
    self2.endAnimation = function() {
      _endAnimation(self2.callbackAnimation);
      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
      }
    };
    self2.labelToScroll = function(label) {
      return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };
    self2.getTrailing = function(name) {
      var i = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString(name) ? a.filter(function(t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function(t) {
        return self2.direction > 0 ? t.end <= start : t.start >= end;
      });
    };
    self2.update = function(reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }
      var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;
        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      }
      if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
          clipped = 1e-4;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }
      if (clipped !== prevProgress2 && self2.enabled) {
        isActive = self2.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress2 && prevProgress2 < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress2;
        self2.direction = clipped > prevProgress2 ? 1 : -1;
        self2.progress = clipped;
        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }
        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
          return t.endAnimation();
        }));
        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup2) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }
        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true), _offset = scroll - start;
                _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }
            _setState(isActive || isAtMax ? pinActiveState : pinState);
            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }
        snap && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        });
        onUpdate && !isToggle && !reset && onUpdate(self2);
        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }
            onUpdate && onUpdate(self2);
          }
          if (toggled || !_limitCallbacks) {
            onToggle && toggled && _callback(self2, onToggle);
            callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
            once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
            if (!toggled) {
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
            }
          }
          if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self2.callbackAnimation);
            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self2);
        }
      }
      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }
      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };
    self2.enable = function(reset, refresh) {
      if (!self2.enabled) {
        self2.enabled = true;
        _addListener3(scroller, "resize", _onResize);
        isViewport || _addListener3(scroller, "scroll", _onScroll3);
        onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
        if (reset !== false) {
          self2.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }
        refresh !== false && self2.refresh();
      }
    };
    self2.getTween = function(snap3) {
      return snap3 && tweenTo ? tweenTo.tween : scrubTween;
    };
    self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
      if (containerAnimation) {
        var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }
      self2.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
      }, pinOffset);
      self2.update();
    };
    self2.adjustPinSpacing = function(amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
        _setState(spacerState);
      }
    };
    self2.disable = function(reset, allowAnimation) {
      if (self2.enabled) {
        reset !== false && self2.revert(true, true);
        self2.enabled = self2.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }
        if (!isViewport) {
          var i = _triggers.length;
          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self2) {
              return;
            }
          }
          _removeListener3(scroller, "resize", _onResize);
          isViewport || _removeListener3(scroller, "scroll", _onScroll3);
        }
      }
    };
    self2.kill = function(revert, allowAnimation) {
      self2.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];
      var i = _triggers.indexOf(self2);
      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--;
      i = 0;
      _triggers.forEach(function(t) {
        return t.scroller === self2.scroller && (i = 1);
      });
      i || _refreshingAll || (self2.scroll.rec = 0);
      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }
      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self2 && (_primary = 0);
      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;
        _triggers.forEach(function(t) {
          return t.pin === pin && i++;
        });
        i || (pinCache.spacer = 0);
      }
      vars.onKill && vars.onKill(self2);
    };
    _triggers.push(self2);
    self2.enable(false, false);
    customRevertReturn && customRevertReturn(self2);
    if (animation && animation.add && !change) {
      var updateFunc = self2.update;
      self2.update = function() {
        self2.update = updateFunc;
        _scrollers.cache++;
        start || end || self2.refresh();
      };
      gsap2.delayedCall(0.01, self2.update);
      change = 0.01;
      start = end = 0;
    } else {
      self2.refresh();
    }
    pin && _queueRefreshAll();
  };
  ScrollTrigger3.register = function register(core) {
    if (!_coreInitted2) {
      gsap2 = core || _getGSAP3();
      _windowExists() && window.document && ScrollTrigger3.enable();
      _coreInitted2 = _enabled;
    }
    return _coreInitted2;
  };
  ScrollTrigger3.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }
    return _defaults;
  };
  ScrollTrigger3.disable = function disable(reset, kill) {
    _enabled = 0;
    _triggers.forEach(function(trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });
    _removeListener3(_win2, "wheel", _onScroll3);
    _removeListener3(_doc2, "scroll", _onScroll3);
    clearInterval(_syncInterval);
    _removeListener3(_doc2, "touchcancel", _passThrough);
    _removeListener3(_body2, "touchstart", _passThrough);
    _multiListener(_removeListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
    _multiListener(_removeListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
    _resizeDelay.kill();
    _iterateAutoRefresh(_removeListener3);
    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
      _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
    }
  };
  ScrollTrigger3.enable = function enable() {
    _win2 = window;
    _doc2 = document;
    _docEl2 = _doc2.documentElement;
    _body2 = _doc2.body;
    if (gsap2) {
      _toArray = gsap2.utils.toArray;
      _clamp2 = gsap2.utils.clamp;
      _context2 = gsap2.core.context || _passThrough;
      _suppressOverwrites = gsap2.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win2.history.scrollRestoration || "auto";
      _lastScroll = _win2.pageYOffset || 0;
      gsap2.core.globals("ScrollTrigger", ScrollTrigger3);
      if (_body2) {
        _enabled = 1;
        _div100vh = document.createElement("div");
        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";
        _refresh100vh();
        _rafBugFix();
        Observer.register(gsap2);
        ScrollTrigger3.isTouch = Observer.isTouch;
        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        _ignoreMobileResize = Observer.isTouch === 1;
        _addListener3(_win2, "wheel", _onScroll3);
        _root2 = [_win2, _doc2, _docEl2, _body2];
        if (gsap2.matchMedia) {
          ScrollTrigger3.matchMedia = function(vars) {
            var mm = gsap2.matchMedia(), p;
            for (p in vars) {
              mm.add(p, vars[p]);
            }
            return mm;
          };
          gsap2.addEventListener("matchMediaInit", function() {
            return _revertAll();
          });
          gsap2.addEventListener("matchMediaRevert", function() {
            return _revertRecorded();
          });
          gsap2.addEventListener("matchMedia", function() {
            _refreshAll(0, 1);
            _dispatch("matchMedia");
          });
          gsap2.matchMedia().add("(orientation: portrait)", function() {
            _setBaseDimensions();
            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }
        _setBaseDimensions();
        _addListener3(_doc2, "scroll", _onScroll3);
        var bodyHasStyle = _body2.hasAttribute("style"), bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap2.core.Animation.prototype, bounds, i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        });
        bodyStyle.borderTopStyle = "solid";
        bounds = _getBounds(_body2);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
        if (!bodyHasStyle) {
          _body2.setAttribute("style", "");
          _body2.removeAttribute("style");
        }
        _syncInterval = setInterval(_sync, 250);
        gsap2.delayedCall(0.5, function() {
          return _startup2 = 0;
        });
        _addListener3(_doc2, "touchcancel", _passThrough);
        _addListener3(_body2, "touchstart", _passThrough);
        _multiListener(_addListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_addListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
        _transformProp = gsap2.utils.checkPrefix("transform");
        _stateProps.push(_transformProp);
        _coreInitted2 = _getTime2();
        _resizeDelay = gsap2.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc2, "visibilitychange", function() {
          var w = _win2.innerWidth, h = _win2.innerHeight;
          if (_doc2.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc2, "DOMContentLoaded", _refreshAll, _win2, "load", _refreshAll, _win2, "resize", _onResize];
        _iterateAutoRefresh(_addListener3);
        _triggers.forEach(function(trigger) {
          return trigger.enable(0, 1);
        });
        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
        }
      }
    }
  };
  ScrollTrigger3.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };
  ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }
    if (vars) {
      isViewport ? _proxies.unshift(_win2, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
    }
  };
  ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function(t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };
  ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win2.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win2.innerHeight;
  };
  ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win2.innerWidth : (bounds.top + offset) / _win2.innerHeight;
  };
  ScrollTrigger3.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function(t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });
    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function(f) {
        return f();
      });
    }
  };
  return ScrollTrigger3;
}();
ScrollTrigger2.version = "3.13.0";
ScrollTrigger2.saveStyles = function(targets) {
  return targets ? _toArray(targets).forEach(function(target) {
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5);
      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap2.core.getCache(target), _context2());
    }
  }) : _savedStyles;
};
ScrollTrigger2.revert = function(soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger2.create = function(vars, animation) {
  return new ScrollTrigger2(vars, animation);
};
ScrollTrigger2.refresh = function(safe) {
  return safe ? _onResize(true) : (_coreInitted2 || ScrollTrigger2.register()) && _refreshAll(true);
};
ScrollTrigger2.update = function(force) {
  return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
ScrollTrigger2.maxScroll = function(element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger2.getScrollFunc = function(element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger2.getById = function(id) {
  return _ids[id];
};
ScrollTrigger2.getAll = function() {
  return _triggers.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
ScrollTrigger2.isScrolling = function() {
  return !!_lastScrollTime;
};
ScrollTrigger2.snapDirectional = _snapDirectional;
ScrollTrigger2.addEventListener = function(type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger2.removeEventListener = function(type, callback) {
  var a = _listeners[type], i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger2.batch = function(targets, vars) {
  var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
    var elements = [], triggers = [], delay = gsap2.delayedCall(interval, function() {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function(self2) {
      elements.length || delay.restart(true);
      elements.push(self2.trigger);
      triggers.push(self2);
      batchMax <= elements.length && delay.progress(1);
    };
  }, p;
  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }
  if (_isFunction(batchMax)) {
    batchMax = batchMax();
    _addListener3(ScrollTrigger2, "refresh", function() {
      return batchMax = vars.batchMax();
    });
  }
  _toArray(targets).forEach(function(target) {
    var config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    result.push(ScrollTrigger2.create(config));
  });
  return result;
};
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
};
var _allowNativePanning = function _allowNativePanning2(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
  }
  target === _docEl2 && _allowNativePanning2(_body2, direction);
};
var _overflow = {
  auto: 1,
  scroll: 1
};
var _nestedScroll = function _nestedScroll2(_ref5) {
  var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
  var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap2.core.getCache(node), time = _getTime2(), cs;
  if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
    while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }
    cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }
  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
};
var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
  return Observer.create({
    target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener3(_doc2, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener3(_doc2, Observer.eventTypes[0], _captureInputs, true);
    }
  });
};
var _inputExp = /(input|label|select|textarea)/i;
var _inputIsFocused;
var _captureInputs = function _captureInputs2(e) {
  var isInput = _inputExp.test(e.target.tagName);
  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
};
var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";
  var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap2.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win2.visualViewport ? _win2.visualViewport.scale * _win2.visualViewport.width : _win2.outerWidth) / _win2.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
    return momentum(self2);
  } : function() {
    return momentum || 2.8;
  }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
    return skipTouchMove = false;
  }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = _clamp2(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp2(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  }, removeContentOffset = function removeContentOffset2() {
    content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  }, ignoreDrag = function ignoreDrag2() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);
      var offset = _round(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;
        var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _scrollers.cache;
        _updateAll();
      }
      return true;
    }
    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
    updateClamps();
    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };
  content && gsap2.set(content, {
    y: "+=0"
  });
  vars.ignoreCheck = function(e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
  };
  vars.onPress = function() {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round((_win2.visualViewport && _win2.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };
  vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
    scrollFuncY.offset && removeContentOffset();
    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _scrollers.cache++;
      var dur = resolveMomentumDuration(), currentScroll, endScroll;
      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }
      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);
      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        gsap2.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }
    onRelease && onRelease(self3);
  };
  vars.onWheel = function() {
    tween._ts && tween.pause();
    if (_getTime2() - wheelRefresh > 1e3) {
      lastRefreshID = 0;
      wheelRefresh = _getTime2();
    }
  };
  vars.onChange = function(self3, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }
    (dy || dx) && _updateAll();
  };
  vars.onEnable = function() {
    _allowNativePanning(target, normalizeScrollX ? false : "x");
    ScrollTrigger2.addEventListener("refresh", onResize);
    _addListener3(_win2, "resize", onResize);
    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }
    inputObserver.enable();
  };
  vars.onDisable = function() {
    _allowNativePanning(target, true);
    _removeListener3(_win2, "resize", onResize);
    ScrollTrigger2.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };
  vars.lockAxis = vars.lockAxis !== false;
  self2 = new Observer(vars);
  self2.iOS = _fixIOSBug;
  _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
  _fixIOSBug && gsap2.ticker.add(_passThrough);
  onStopDelayedCall = self2._dc;
  tween = gsap2.to(self2, {
    ease: "power4",
    paused: true,
    inherit: false,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  });
  return self2;
};
ScrollTrigger2.sort = function(func) {
  if (_isFunction(func)) {
    return _triggers.sort(func);
  }
  var scroll = _win2.pageYOffset || 0;
  ScrollTrigger2.getAll().forEach(function(t) {
    return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win2.innerHeight;
  });
  return _triggers.sort(func || function(a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger2.observe = function(vars) {
  return new Observer(vars);
};
ScrollTrigger2.normalizeScroll = function(vars) {
  if (typeof vars === "undefined") {
    return _normalizer2;
  }
  if (vars === true && _normalizer2) {
    return _normalizer2.enable();
  }
  if (vars === false) {
    _normalizer2 && _normalizer2.kill();
    _normalizer2 = vars;
    return;
  }
  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
  _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
  return normalizer;
};
ScrollTrigger2.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp,
  _inputObserver,
  _scrollers,
  _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime2();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP3() && gsap2.registerPlugin(ScrollTrigger2);

// node_modules/gsap/utils/matrix.js
var _doc3;
var _win3;
var _docElement;
var _body3;
var _divContainer;
var _svgContainer;
var _identityMatrix;
var _gEl;
var _transformProp2 = "transform";
var _transformOriginProp = _transformProp2 + "Origin";
var _hasOffsetBug;
var _setDoc = function _setDoc2(element) {
  var doc = element.ownerDocument || element;
  if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
    _transformProp2 = "msTransform";
    _transformOriginProp = _transformProp2 + "Origin";
  }
  while (doc.parentNode && (doc = doc.parentNode)) {
  }
  _win3 = window;
  _identityMatrix = new Matrix2D();
  if (doc) {
    _doc3 = doc;
    _docElement = doc.documentElement;
    _body3 = doc.body;
    _gEl = _doc3.createElementNS("http://www.w3.org/2000/svg", "g");
    _gEl.style.transform = "none";
    var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
    if (root && root.appendChild) {
      root.appendChild(d1);
      d1.appendChild(d2);
      d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
      _hasOffsetBug = d2.offsetParent !== d1;
      root.removeChild(d1);
    }
  }
  return doc;
};
var _forceNonZeroScale = function _forceNonZeroScale2(e) {
  var a, cache;
  while (e && e !== _body3) {
    cache = e._gsap;
    cache && cache.uncache && cache.get(e, "x");
    if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
      cache.scaleX = cache.scaleY = 1e-4;
      cache.renderTransform(1, cache);
      a ? a.push(cache) : a = [cache];
    }
    e = e.parentNode;
  }
  return a;
};
var _svgTemps = [];
var _divTemps = [];
var _getDocScrollTop = function _getDocScrollTop2() {
  return _win3.pageYOffset || _doc3.scrollTop || _docElement.scrollTop || _body3.scrollTop || 0;
};
var _getDocScrollLeft = function _getDocScrollLeft2() {
  return _win3.pageXOffset || _doc3.scrollLeft || _docElement.scrollLeft || _body3.scrollLeft || 0;
};
var _svgOwner = function _svgOwner2(element) {
  return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
};
var _isFixed = function _isFixed2(element) {
  if (_win3.getComputedStyle(element).position === "fixed") {
    return true;
  }
  element = element.parentNode;
  if (element && element.nodeType === 1) {
    return _isFixed2(element);
  }
};
var _createSibling = function _createSibling2(element, i) {
  if (element.parentNode && (_doc3 || _setDoc(element))) {
    var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
    if (i) {
      if (!svg) {
        if (!_divContainer) {
          _divContainer = _createSibling2(element);
          _divContainer.style.cssText = css;
        }
        e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
        _divContainer.appendChild(e);
      } else {
        _svgContainer || (_svgContainer = _createSibling2(element));
        e.setAttribute("width", 0.01);
        e.setAttribute("height", 0.01);
        e.setAttribute("transform", "translate(" + x + "," + y + ")");
        _svgContainer.appendChild(e);
      }
    }
    return e;
  }
  throw "Need document and parent.";
};
var _consolidate = function _consolidate2(m) {
  var c = new Matrix2D(), i = 0;
  for (; i < m.numberOfItems; i++) {
    c.multiply(m.getItem(i).matrix);
  }
  return c;
};
var _getCTM = function _getCTM2(svg) {
  var m = svg.getCTM(), transform;
  if (!m) {
    transform = svg.style[_transformProp2];
    svg.style[_transformProp2] = "none";
    svg.appendChild(_gEl);
    m = _gEl.getCTM();
    svg.removeChild(_gEl);
    transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
  }
  return m || _identityMatrix.clone();
};
var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
  var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, appendToEl = parent && !svg && parent.shadowRoot && parent.shadowRoot.appendChild ? parent.shadowRoot : parent, container, m, b, x, y, cs;
  if (element === _win3) {
    return element;
  }
  siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
  container = svg ? _svgContainer : _divContainer;
  if (svg) {
    if (isRootSVG) {
      b = _getCTM(element);
      x = -b.e / b.a;
      y = -b.f / b.d;
      m = _identityMatrix;
    } else if (element.getBBox) {
      b = element.getBBox();
      m = element.transform ? element.transform.baseVal : {};
      m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
      x = m.a * b.x + m.c * b.y;
      y = m.b * b.x + m.d * b.y;
    } else {
      m = new Matrix2D();
      x = y = 0;
    }
    if (adjustGOffset && element.tagName.toLowerCase() === "g") {
      x = y = 0;
    }
    (isRootSVG ? svg : parent).appendChild(container);
    container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
  } else {
    x = y = 0;
    if (_hasOffsetBug) {
      m = element.offsetParent;
      b = element;
      while (b && (b = b.parentNode) && b !== m && b.parentNode) {
        if ((_win3.getComputedStyle(b)[_transformProp2] + "").length > 4) {
          x = b.offsetLeft;
          y = b.offsetTop;
          b = 0;
        }
      }
    }
    cs = _win3.getComputedStyle(element);
    if (cs.position !== "absolute" && cs.position !== "fixed") {
      m = element.offsetParent;
      while (parent && parent !== m) {
        x += parent.scrollLeft || 0;
        y += parent.scrollTop || 0;
        parent = parent.parentNode;
      }
    }
    b = container.style;
    b.top = element.offsetTop - y + "px";
    b.left = element.offsetLeft - x + "px";
    b[_transformProp2] = cs[_transformProp2];
    b[_transformOriginProp] = cs[_transformOriginProp];
    b.position = cs.position === "fixed" ? "fixed" : "absolute";
    appendToEl.appendChild(container);
  }
  return container;
};
var _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
  m.a = a;
  m.b = b;
  m.c = c;
  m.d = d;
  m.e = e;
  m.f = f;
  return m;
};
var Matrix2D = /* @__PURE__ */ function() {
  function Matrix2D2(a, b, c, d, e, f) {
    if (a === void 0) {
      a = 1;
    }
    if (b === void 0) {
      b = 0;
    }
    if (c === void 0) {
      c = 0;
    }
    if (d === void 0) {
      d = 1;
    }
    if (e === void 0) {
      e = 0;
    }
    if (f === void 0) {
      f = 0;
    }
    _setMatrix(this, a, b, c, d, e, f);
  }
  var _proto = Matrix2D2.prototype;
  _proto.inverse = function inverse() {
    var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
    return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
  };
  _proto.multiply = function multiply(matrix) {
    var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
    return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
  };
  _proto.clone = function clone() {
    return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
  };
  _proto.equals = function equals(matrix) {
    var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
    return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
  };
  _proto.apply = function apply(point, decoratee) {
    if (decoratee === void 0) {
      decoratee = {};
    }
    var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
    decoratee.x = x * a + y * c + e || 0;
    decoratee.y = x * b + y * d + f || 0;
    return decoratee;
  };
  return Matrix2D2;
}();
function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
  if (!element || !element.parentNode || (_doc3 || _setDoc(element)).documentElement === element) {
    return new Matrix2D();
  }
  var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
  parent.removeChild(container);
  if (zeroScales) {
    b1 = zeroScales.length;
    while (b1--) {
      b2 = zeroScales[b1];
      b2.scaleX = b2.scaleY = 0;
      b2.renderTransform(1, b2);
    }
  }
  return inverse ? m.inverse() : m;
}

// node_modules/gsap/Flip.js
var _id = 1;
var _toArray2;
var gsap3;
var _batch;
var _batchAction;
var _body4;
var _closestTenth;
var _getStyleSaver;
var _forEachBatch = function _forEachBatch2(batch, name) {
  return batch.actions.forEach(function(a) {
    return a.vars[name] && a.vars[name](a);
  });
};
var _batchLookup = {};
var _RAD2DEG = 180 / Math.PI;
var _DEG2RAD = Math.PI / 180;
var _emptyObj = {};
var _dashedNameLookup = {};
var _memoizedRemoveProps = {};
var _listToArray = function _listToArray2(list) {
  return typeof list === "string" ? list.split(" ").join("").split(",") : list;
};
var _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt");
var _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight");
var _getEl = function _getEl2(target) {
  return _toArray2(target)[0] || console.warn("Element not found:", target);
};
var _round3 = function _round4(value) {
  return Math.round(value * 1e4) / 1e4 || 0;
};
var _toggleClass = function _toggleClass2(targets, className, action) {
  return targets.forEach(function(el) {
    return el.classList[action](className);
  });
};
var _reserved = {
  zIndex: 1,
  kill: 1,
  simple: 1,
  spin: 1,
  clearProps: 1,
  targets: 1,
  toggleClass: 1,
  onComplete: 1,
  onUpdate: 1,
  onInterrupt: 1,
  onStart: 1,
  delay: 1,
  repeat: 1,
  repeatDelay: 1,
  yoyo: 1,
  scale: 1,
  fade: 1,
  absolute: 1,
  props: 1,
  onEnter: 1,
  onLeave: 1,
  custom: 1,
  paused: 1,
  nested: 1,
  prune: 1,
  absoluteOnLeave: 1
};
var _fitReserved = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
};
var _camelToDashed = function _camelToDashed2(p) {
  return p.replace(/([A-Z])/g, "-$1").toLowerCase();
};
var _copy = function _copy2(obj, exclude) {
  var result = {}, p;
  for (p in obj) {
    exclude[p] || (result[p] = obj[p]);
  }
  return result;
};
var _memoizedProps = {};
var _memoizeProps = function _memoizeProps2(props) {
  var p = _memoizedProps[props] = _listToArray(props);
  _memoizedRemoveProps[props] = p.concat(_removeProps);
  return p;
};
var _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
  var cache = el._gsap || gsap3.core.getCache(el);
  if (cache.gmCache === gsap3.ticker.frame) {
    return cache.gMatrix;
  }
  cache.gmCache = gsap3.ticker.frame;
  return cache.gMatrix = getGlobalMatrix(el, true, false, true);
};
var _getDOMDepth = function _getDOMDepth2(el, invert, level) {
  if (level === void 0) {
    level = 0;
  }
  var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l = invert ? -inc * 900 : 0;
  while (el) {
    l += inc;
    el = el.previousSibling;
  }
  return parent ? l + _getDOMDepth2(parent, invert, level + 1) : l;
};
var _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
  comps.forEach(function(comp) {
    return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
  });
  comps.sort(function(c1, c2) {
    return c1.d - c2.d;
  });
  return comps;
};
var _recordInlineStyles = function _recordInlineStyles2(elState, props) {
  var style = elState.element.style, a = elState.css = elState.css || [], i = props.length, p, v;
  while (i--) {
    p = props[i];
    v = style[p] || style.getPropertyValue(p);
    a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
  }
  return style;
};
var _applyInlineStyles = function _applyInlineStyles2(state) {
  var css = state.css, style = state.element.style, i = 0;
  state.cache.uncache = 1;
  for (; i < css.length; i += 2) {
    css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
  }
  if (!css[css.indexOf("transform") + 1] && style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
};
var _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
  comps.forEach(function(c) {
    return c.a.cache.uncache = 1;
  });
  onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
};
var _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(",");
var _makeAbsolute = function _makeAbsolute2(elState, fallbackNode, ignoreBatch) {
  var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i = 4, result, displayIsNone, cs;
  typeof fallbackNode !== "object" && (fallbackNode = elState);
  if (_batch && ignoreBatch !== 1) {
    _batch._abs.push({
      t: element,
      b: elState,
      a: elState,
      sd: 0
    });
    _batch._final.push(function() {
      return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
    });
    return element;
  }
  displayIsNone = getProp("display") === "none";
  if (!elState.isVisible || displayIsNone) {
    displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
    elState.matrix = fallbackNode.matrix;
    elState.width = width = elState.width || fallbackNode.width;
    elState.height = height = elState.height || fallbackNode.height;
  }
  _recordInlineStyles(elState, _absoluteProps);
  cs = window.getComputedStyle(element);
  while (i--) {
    style[_absoluteProps[i]] = cs[_absoluteProps[i]];
  }
  style.gridArea = "1 / 1 / 1 / 1";
  style.transition = "none";
  style.position = "absolute";
  style.width = width + "px";
  style.height = height + "px";
  style.top || (style.top = "0px");
  style.left || (style.left = "0px");
  if (uncache) {
    result = new ElementState(element);
  } else {
    result = _copy(elState, _emptyObj);
    result.position = "absolute";
    if (elState.simple) {
      var bounds = element.getBoundingClientRect();
      result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
    } else {
      result.matrix = getGlobalMatrix(element, false, false, true);
    }
  }
  result = _fit(result, elState, true);
  elState.x = _closestTenth(result.x, 0.01);
  elState.y = _closestTenth(result.y, 0.01);
  return element;
};
var _filterComps = function _filterComps2(comps, targets) {
  if (targets !== true) {
    targets = _toArray2(targets);
    comps = comps.filter(function(c) {
      if (targets.indexOf((c.sd < 0 ? c.b : c.a).element) !== -1) {
        return true;
      } else {
        c.t._gsap.renderTransform(1);
        if (c.b.isVisible) {
          c.t.style.width = c.b.width + "px";
          c.t.style.height = c.b.height + "px";
        }
      }
    });
  }
  return comps;
};
var _makeCompsAbsolute = function _makeCompsAbsolute2(comps) {
  return _orderByDOMDepth(comps, true).forEach(function(c) {
    return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b, 1);
  });
};
var _findElStateInState = function _findElStateInState2(state, other) {
  return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
};
var _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
  return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
};
var _recordProps = function _recordProps2(elState, props) {
  var getProp = gsap3.getProperty(elState.element, null, "native"), obj = elState.props = {}, i = props.length;
  while (i--) {
    obj[props[i]] = (getProp(props[i]) + "").trim();
  }
  obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
  return elState;
};
var _applyProps = function _applyProps2(element, props) {
  var style = element.style || element, p;
  for (p in props) {
    style[p] = props[p];
  }
};
var _getID = function _getID2(el) {
  var id = el.getAttribute("data-flip-id");
  id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
  return id;
};
var _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
  return elStates.map(function(elState) {
    return elState.element;
  });
};
var _handleCallback = function _handleCallback2(callback, elStates, tl) {
  return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
};
var _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
  var element = fromState.element, cache = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver && _getStyleSaver(element, "transform,width,height"), dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
  if (simple || !parent) {
    scaleX = scaleY = 1;
    rotation = skewX = 0;
  } else {
    parentMatrix = _getInverseGlobalMatrix(parent);
    matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
    rotation = _round3(Math.atan2(matrix.b, matrix.a) * _RAD2DEG);
    skewX = _round3(Math.atan2(matrix.c, matrix.d) * _RAD2DEG + rotation) % 360;
    scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
    scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD);
    if (fitChild) {
      fitChild = _toArray2(fitChild)[0];
      getProp = gsap3.getProperty(fitChild);
      bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
      dimensionState = {
        scaleX: getProp("scaleX"),
        scaleY: getProp("scaleY"),
        width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
        height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
      };
    }
    cache.rotation = rotation + "deg";
    cache.skewX = skewX + "deg";
  }
  if (scale) {
    scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
    scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
    cache.scaleX = scaleX;
    cache.scaleY = scaleY;
  } else {
    width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
    height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
    element.style.width = width + "px";
    element.style.height = height + "px";
  }
  applyProps && _applyProps(element, toState.props);
  if (simple || !parent) {
    x += e - fromState.matrix.e;
    y += f - fromState.matrix.f;
  } else if (deep || parent !== toState.parent) {
    cache.renderTransform(1, cache);
    matrix = getGlobalMatrix(fitChild || element, false, false, true);
    fromPoint = parentMatrix.apply({
      x: matrix.e,
      y: matrix.f
    });
    toPoint = parentMatrix.apply({
      x: e,
      y: f
    });
    x += toPoint.x - fromPoint.x;
    y += toPoint.y - fromPoint.y;
  } else {
    parentMatrix.e = parentMatrix.f = 0;
    toPoint = parentMatrix.apply({
      x: e - fromState.matrix.e,
      y: f - fromState.matrix.f
    });
    x += toPoint.x;
    y += toPoint.y;
  }
  x = _closestTenth(x, 0.02);
  y = _closestTenth(y, 0.02);
  if (vars && !(vars instanceof ElementState)) {
    styles && styles.revert();
  } else {
    cache.x = x + "px";
    cache.y = y + "px";
    cache.renderTransform(1, cache);
  }
  if (vars) {
    vars.x = x;
    vars.y = y;
    vars.rotation = rotation;
    vars.skewX = skewX;
    if (scale) {
      vars.scaleX = scaleX;
      vars.scaleY = scaleY;
    } else {
      vars.width = width;
      vars.height = height;
    }
  }
  return vars || cache;
};
var _parseState = function _parseState2(targetsOrState, vars) {
  return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
};
var _getChangingElState = function _getChangingElState2(toState, fromState, id) {
  var to1 = toState.idLookup[id], to2 = toState.alt[id];
  return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
};
var _bodyMetrics = [];
var _bodyProps = "width,height,overflowX,overflowY".split(",");
var _bodyLocked;
var _lockBodyScroll = function _lockBodyScroll2(lock) {
  if (lock !== _bodyLocked) {
    var s = _body4.style, w = _body4.clientWidth === window.outerWidth, h = _body4.clientHeight === window.outerHeight, i = 4;
    if (lock && (w || h)) {
      while (i--) {
        _bodyMetrics[i] = s[_bodyProps[i]];
      }
      if (w) {
        s.width = _body4.clientWidth + "px";
        s.overflowY = "hidden";
      }
      if (h) {
        s.height = _body4.clientHeight + "px";
        s.overflowX = "hidden";
      }
      _bodyLocked = lock;
    } else if (_bodyLocked) {
      while (i--) {
        _bodyMetrics[i] ? s[_bodyProps[i]] = _bodyMetrics[i] : s.removeProperty(_camelToDashed(_bodyProps[i]));
      }
      _bodyLocked = lock;
    }
  }
};
var _fromTo = function _fromTo2(fromState, toState, vars, relative) {
  fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
  vars = vars || {};
  var _vars = vars, clearProps = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap3.timeline({
    delay,
    paused,
    repeat,
    repeatDelay,
    yoyo,
    data: "isFlip"
  }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
    return spinNum;
  }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b;
  for (p in toState.idLookup) {
    toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
    el = toNode.element;
    fromNode = fromState.idLookup[p];
    fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
    if (fromNode) {
      comp = {
        t: el,
        b: fromNode,
        a: toNode,
        sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
      };
      comps.push(comp);
      if (comp.sd) {
        if (comp.sd < 0) {
          comp.b = toNode;
          comp.a = fromNode;
        }
        interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
        fade && comps.push(comp.swap = {
          t: fromNode.element,
          b: comp.b,
          a: comp.a,
          sd: -comp.sd,
          swap: comp
        });
      }
      el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
    } else if (toNode.isVisible) {
      comps.push({
        t: el,
        b: _copy(toNode, {
          isVisible: 1
        }),
        a: toNode,
        sd: 0,
        entering: 1
      });
      el._flip = _batch ? _batch.timeline : animation;
    }
  }
  props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p2) {
    return tweenVars[p2] = function(i2) {
      return comps[i2].a.props[p2];
    };
  });
  comps.finalStates = finalStates = [];
  run = function run2() {
    _orderByDOMDepth(comps);
    _lockBodyScroll(true);
    for (i = 0; i < comps.length; i++) {
      comp = comps[i];
      a = comp.a;
      b = comp.b;
      if (prune && !a.isDifferent(b) && !comp.entering) {
        comps.splice(i--, 1);
      } else {
        el = comp.t;
        nested && !(comp.sd < 0) && i && (a.matrix = getGlobalMatrix(el, false, false, true));
        if (b.isVisible && a.isVisible) {
          if (comp.sd < 0) {
            state = new ElementState(el, props, fromState.simple);
            _fit(state, a, scale, 0, 0, state);
            state.matrix = getGlobalMatrix(el, false, false, true);
            state.css = comp.b.css;
            comp.a = a = state;
            fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
            stagger && swapOutTargets.push(el);
          } else if (comp.sd > 0 && fade) {
            el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
          }
          _fit(a, b, scale, props);
        } else if (b.isVisible !== a.isVisible) {
          if (!b.isVisible) {
            a.isVisible && entering.push(a);
            comps.splice(i--, 1);
          } else if (!a.isVisible) {
            b.css = a.css;
            leaving.push(b);
            comps.splice(i--, 1);
            absolute && nested && _fit(a, b, scale, props);
          }
        }
        if (!scale) {
          el.style.maxWidth = Math.max(a.width, b.width) + "px";
          el.style.maxHeight = Math.max(a.height, b.height) + "px";
          el.style.minWidth = Math.min(a.width, b.width) + "px";
          el.style.minHeight = Math.min(a.height, b.height) + "px";
        }
        nested && toggleClass && el.classList.add(toggleClass);
      }
      finalStates.push(a);
    }
    var classTargets;
    if (toggleClass) {
      classTargets = finalStates.map(function(s) {
        return s.element;
      });
      nested && classTargets.forEach(function(e) {
        return e.classList.remove(toggleClass);
      });
    }
    _lockBodyScroll(false);
    if (scale) {
      tweenVars.scaleX = function(i2) {
        return comps[i2].a.scaleX;
      };
      tweenVars.scaleY = function(i2) {
        return comps[i2].a.scaleY;
      };
    } else {
      tweenVars.width = function(i2) {
        return comps[i2].a.width + "px";
      };
      tweenVars.height = function(i2) {
        return comps[i2].a.height + "px";
      };
      tweenVars.autoRound = vars.autoRound || false;
    }
    tweenVars.x = function(i2) {
      return comps[i2].a.x + "px";
    };
    tweenVars.y = function(i2) {
      return comps[i2].a.y + "px";
    };
    tweenVars.rotation = function(i2) {
      return comps[i2].a.rotation + (spin ? spinFunc(i2, targets[i2], targets) * 360 : 0);
    };
    tweenVars.skewX = function(i2) {
      return comps[i2].a.skewX;
    };
    targets = comps.map(function(c) {
      return c.t;
    });
    if (_zIndex || _zIndex === 0) {
      tweenVars.modifiers = {
        zIndex: function zIndex() {
          return _zIndex;
        }
      };
      tweenVars.zIndex = _zIndex;
      tweenVars.immediateRender = vars.immediateRender !== false;
    }
    fade && (tweenVars.opacity = function(i2) {
      return comps[i2].sd < 0 ? 0 : comps[i2].sd > 0 ? comps[i2].a.opacity : "+=0";
    });
    if (swapOutTargets.length) {
      stagger = gsap3.utils.distribute(stagger);
      var dummyArray = targets.slice(swapOutTargets.length);
      tweenVars.stagger = function(i2, el2) {
        return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i2].swap.t) : i2, el2, dummyArray);
      };
    }
    _callbacks.forEach(function(name) {
      return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
    });
    if (custom && targets.length) {
      remainingProps = _copy(tweenVars, _reserved);
      if ("scale" in custom) {
        custom.scaleX = custom.scaleY = custom.scale;
        delete custom.scale;
      }
      for (p in custom) {
        v = _copy(custom[p], _fitReserved);
        v[p] = tweenVars[p];
        !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
        v.stagger = tweenVars.stagger;
        addFunc.call(animation, targets, v, 0);
        delete remainingProps[p];
      }
    }
    if (targets.length || leaving.length || entering.length) {
      toggleClass && animation.add(function() {
        return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
      }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
      targets.length && addFunc.call(animation, targets, remainingProps, 0);
    }
    _handleCallback(onEnter, entering, animation);
    _handleCallback(onLeave, leaving, animation);
    var batchTl = _batch && _batch.timeline;
    if (batchTl) {
      batchTl.add(animation, 0);
      _batch._final.push(function() {
        return _setFinalStates(comps, !clearProps);
      });
    }
    endTime = animation.duration();
    animation.call(function() {
      var forward = animation.time() >= endTime;
      forward && !batchTl && _setFinalStates(comps, !clearProps);
      toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
    });
  };
  absoluteOnLeave && (absolute = comps.filter(function(comp2) {
    return !comp2.sd && !comp2.a.isVisible && comp2.b.isVisible;
  }).map(function(comp2) {
    return comp2.a.element;
  }));
  if (_batch) {
    var _batch$_abs;
    absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
    _batch._run.push(run);
  } else {
    absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
    run();
  }
  var anim = _batch ? _batch.timeline : animation;
  anim.revert = function() {
    return _killFlip(anim, 1, 1);
  };
  return anim;
};
var _interrupt = function _interrupt2(tl) {
  tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
  tl.getChildren(true, false, true).forEach(_interrupt2);
};
var _killFlip = function _killFlip2(tl, action, force) {
  if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
    if (action) {
      _interrupt(tl);
      action < 2 && tl.progress(1);
      tl.kill();
    }
    return true;
  }
};
var _createLookup = function _createLookup2(state) {
  var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i = elStates.length, elState;
  while (i--) {
    elState = elStates[i];
    lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
  }
};
var FlipState = /* @__PURE__ */ function() {
  function FlipState2(targets, vars, targetsAreElementStates) {
    this.props = vars && vars.props;
    this.simple = !!(vars && vars.simple);
    if (targetsAreElementStates) {
      this.targets = _elementsFromElementStates(targets);
      this.elementStates = targets;
      _createLookup(this);
    } else {
      this.targets = _toArray2(targets);
      var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
      _batch && !soft && _batch._kill.push(this);
      this.update(soft || !!_batch);
    }
  }
  var _proto = FlipState2.prototype;
  _proto.update = function update(soft) {
    var _this = this;
    this.elementStates = this.targets.map(function(el) {
      return new ElementState(el, _this.props, _this.simple);
    });
    _createLookup(this);
    this.interrupt(soft);
    this.recordInlineStyles();
    return this;
  };
  _proto.clear = function clear() {
    this.targets.length = this.elementStates.length = 0;
    _createLookup(this);
    return this;
  };
  _proto.fit = function fit(state, scale, nested) {
    var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i = 0, fromNode, toNode;
    for (; i < elStatesInOrder.length; i++) {
      fromNode = elStatesInOrder[i];
      nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
      toNode = toElStates[fromNode.id];
      toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
      fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
    }
    return this;
  };
  _proto.getProperty = function getProperty(element, property) {
    var es = this.getElementState(element) || _emptyObj;
    return (property in es ? es : es.props || _emptyObj)[property];
  };
  _proto.add = function add(state) {
    var i = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
    while (i--) {
      es = state.elementStates[i];
      es2 = lookup[es.id];
      if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
        index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
        this.targets.splice(index, 1, state.targets[i]);
        this.elementStates.splice(index, 1, es);
      } else {
        this.targets.push(state.targets[i]);
        this.elementStates.push(es);
      }
    }
    state.interrupted && (this.interrupted = true);
    state.simple || (this.simple = false);
    _createLookup(this);
    return this;
  };
  _proto.compare = function compare(state) {
    var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place2(s12, s22, el2) {
      return (s12.isVisible !== s22.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
    }, placeIfDoesNotExist = function placeIfDoesNotExist2(s12, s22, el2) {
      return targets.indexOf(el2) < 0 && place(s12, s22, el2);
    }, s1, s2, p, el, s1Alt, s2Alt, c1, c2;
    for (p in l1) {
      s1Alt = a1[p];
      s2Alt = a2[p];
      s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
      el = s1.element;
      s2 = l2[p];
      if (s2Alt) {
        c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
        c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
        if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
          (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
          targets.push(c1.element, c2.element);
        } else {
          place(c1, c2, c1.element);
        }
        s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
        placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
        placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
        s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
      } else {
        !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
        s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
      }
    }
    for (p in l2) {
      if (!l1[p]) {
        leave.push(l2[p].element);
        a2[p] && leave.push(a2[p].element);
      }
    }
    return {
      changed,
      unchanged,
      enter,
      leave
    };
  };
  _proto.recordInlineStyles = function recordInlineStyles() {
    var props = _memoizedRemoveProps[this.props] || _removeProps, i = this.elementStates.length;
    while (i--) {
      _recordInlineStyles(this.elementStates[i], props);
    }
  };
  _proto.interrupt = function interrupt(soft) {
    var _this2 = this;
    var timelines = [];
    this.targets.forEach(function(t) {
      var tl = t._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
      soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
        return _this2.updateVisibility();
      });
      foundInProgress && timelines.push(tl);
    });
    !soft && timelines.length && this.updateVisibility();
    this.interrupted || (this.interrupted = !!timelines.length);
  };
  _proto.updateVisibility = function updateVisibility() {
    this.elementStates.forEach(function(es) {
      var b = es.element.getBoundingClientRect();
      es.isVisible = !!(b.width || b.height || b.top || b.left);
      es.uncache = 1;
    });
  };
  _proto.getElementState = function getElementState(element) {
    return this.elementStates[this.targets.indexOf(_getEl(element))];
  };
  _proto.makeAbsolute = function makeAbsolute() {
    return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
  };
  return FlipState2;
}();
var ElementState = /* @__PURE__ */ function() {
  function ElementState2(element, props, simple) {
    this.element = element;
    this.update(props, simple);
  }
  var _proto2 = ElementState2.prototype;
  _proto2.isDifferent = function isDifferent(state) {
    var b1 = this.bounds, b2 = state.bounds;
    return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
  };
  _proto2.update = function update(props, simple) {
    var self2 = this, element = self2.element, getProp = gsap3.getProperty(element), cache = gsap3.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
    cache.uncache = 1;
    self2.getProp = getProp;
    self2.element = element;
    self2.id = _getID(element);
    self2.matrix = m;
    self2.cache = cache;
    self2.bounds = bounds;
    self2.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
    self2.display = getProp("display");
    self2.position = getProp("position");
    self2.parent = element.parentNode;
    self2.x = getProp("x");
    self2.y = getProp("y");
    self2.scaleX = cache.scaleX;
    self2.scaleY = cache.scaleY;
    self2.rotation = getProp("rotation");
    self2.skewX = getProp("skewX");
    self2.opacity = getProp("opacity");
    self2.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
    self2.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
    props && _recordProps(self2, _memoizedProps[props] || _memoizeProps(props));
    self2.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
    self2.simple = simple || _round3(m.a) === 1 && !_round3(m.b) && !_round3(m.c) && _round3(m.d) === 1;
    self2.uncache = 0;
  };
  return ElementState2;
}();
var FlipAction = /* @__PURE__ */ function() {
  function FlipAction2(vars, batch) {
    this.vars = vars;
    this.batch = batch;
    this.states = [];
    this.timeline = batch.timeline;
  }
  var _proto3 = FlipAction2.prototype;
  _proto3.getStateById = function getStateById(id) {
    var i = this.states.length;
    while (i--) {
      if (this.states[i].idLookup[id]) {
        return this.states[i];
      }
    }
  };
  _proto3.kill = function kill() {
    this.batch.remove(this);
  };
  return FlipAction2;
}();
var FlipBatch = /* @__PURE__ */ function() {
  function FlipBatch2(id) {
    this.id = id;
    this.actions = [];
    this._kill = [];
    this._final = [];
    this._abs = [];
    this._run = [];
    this.data = {};
    this.state = new FlipState();
    this.timeline = gsap3.timeline();
  }
  var _proto4 = FlipBatch2.prototype;
  _proto4.add = function add(config) {
    var result = this.actions.filter(function(action) {
      return action.vars === config;
    });
    if (result.length) {
      return result[0];
    }
    result = new FlipAction(typeof config === "function" ? {
      animate: config
    } : config, this);
    this.actions.push(result);
    return result;
  };
  _proto4.remove = function remove(action) {
    var i = this.actions.indexOf(action);
    i >= 0 && this.actions.splice(i, 1);
    return this;
  };
  _proto4.getState = function getState(merge) {
    var _this3 = this;
    var prevBatch = _batch, prevAction = _batchAction;
    _batch = this;
    this.state.clear();
    this._kill.length = 0;
    this.actions.forEach(function(action) {
      if (action.vars.getState) {
        action.states.length = 0;
        _batchAction = action;
        action.state = action.vars.getState(action);
      }
      merge && action.states.forEach(function(s) {
        return _this3.state.add(s);
      });
    });
    _batchAction = prevAction;
    _batch = prevBatch;
    this.killConflicts();
    return this;
  };
  _proto4.animate = function animate() {
    var _this4 = this;
    var prevBatch = _batch, tl = this.timeline, i = this.actions.length, finalStates, endTime;
    _batch = this;
    tl.clear();
    this._abs.length = this._final.length = this._run.length = 0;
    this.actions.forEach(function(a) {
      a.vars.animate && a.vars.animate(a);
      var onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets, s, result;
      if (targets && targets.length && (onEnter || onLeave)) {
        s = new FlipState();
        a.states.forEach(function(state) {
          return s.add(state);
        });
        result = s.compare(Flip.getState(targets));
        result.enter.length && onEnter && onEnter(result.enter);
        result.leave.length && onLeave && onLeave(result.leave);
      }
    });
    _makeCompsAbsolute(this._abs);
    this._run.forEach(function(f) {
      return f();
    });
    endTime = tl.duration();
    finalStates = this._final.slice(0);
    tl.add(function() {
      if (endTime <= tl.time()) {
        finalStates.forEach(function(f) {
          return f();
        });
        _forEachBatch(_this4, "onComplete");
      }
    });
    _batch = prevBatch;
    while (i--) {
      this.actions[i].vars.once && this.actions[i].kill();
    }
    _forEachBatch(this, "onStart");
    tl.restart();
    return this;
  };
  _proto4.loadState = function loadState(done) {
    done || (done = function done2() {
      return 0;
    });
    var queue = [];
    this.actions.forEach(function(c) {
      if (c.vars.loadState) {
        var i, f = function f2(targets) {
          targets && (c.targets = targets);
          i = queue.indexOf(f2);
          if (~i) {
            queue.splice(i, 1);
            queue.length || done();
          }
        };
        queue.push(f);
        c.vars.loadState(f);
      }
    });
    queue.length || done();
    return this;
  };
  _proto4.setState = function setState() {
    this.actions.forEach(function(c) {
      return c.targets = c.vars.setState && c.vars.setState(c);
    });
    return this;
  };
  _proto4.killConflicts = function killConflicts(soft) {
    this.state.interrupt(soft);
    this._kill.forEach(function(state) {
      return state.interrupt(soft);
    });
    return this;
  };
  _proto4.run = function run(skipGetState, merge) {
    var _this5 = this;
    if (this !== _batch) {
      skipGetState || this.getState(merge);
      this.loadState(function() {
        if (!_this5._killed) {
          _this5.setState();
          _this5.animate();
        }
      });
    }
    return this;
  };
  _proto4.clear = function clear(stateOnly) {
    this.state.clear();
    stateOnly || (this.actions.length = 0);
  };
  _proto4.getStateById = function getStateById(id) {
    var i = this.actions.length, s;
    while (i--) {
      s = this.actions[i].getStateById(id);
      if (s) {
        return s;
      }
    }
    return this.state.idLookup[id] && this.state;
  };
  _proto4.kill = function kill() {
    this._killed = 1;
    this.clear();
    delete _batchLookup[this.id];
  };
  return FlipBatch2;
}();
var Flip = /* @__PURE__ */ function() {
  function Flip2() {
  }
  Flip2.getState = function getState(targets, vars) {
    var state = _parseState(targets, vars);
    _batchAction && _batchAction.states.push(state);
    vars && vars.batch && Flip2.batch(vars.batch).state.add(state);
    return state;
  };
  Flip2.from = function from(state, vars) {
    vars = vars || {};
    "clearProps" in vars || (vars.clearProps = true);
    return _fromTo(state, _parseState(vars.targets || state.targets, {
      props: vars.props || state.props,
      simple: vars.simple,
      kill: !!vars.kill
    }), vars, -1);
  };
  Flip2.to = function to(state, vars) {
    return _fromTo(state, _parseState(vars.targets || state.targets, {
      props: vars.props || state.props,
      simple: vars.simple,
      kill: !!vars.kill
    }), vars, 1);
  };
  Flip2.fromTo = function fromTo(fromState, toState, vars) {
    return _fromTo(fromState, toState, vars);
  };
  Flip2.fit = function fit(fromEl, toEl, vars) {
    var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps, ctx = gsap3.context();
    props && _applyProps(v, before.props);
    _recordInlineStyles(after, inlineProps);
    if (runBackwards) {
      "immediateRender" in v || (v.immediateRender = true);
      v.onComplete = function() {
        _applyInlineStyles(after);
        onComplete && onComplete.apply(this, arguments);
      };
    }
    absolute && _makeAbsolute(after, before);
    v = _fit(after, before, scale || fitChild, !v.duration && props, fitChild, v.duration || getVars ? v : 0);
    typeof vars === "object" && "zIndex" in vars && (v.zIndex = vars.zIndex);
    ctx && !getVars && ctx.add(function() {
      return function() {
        return _applyInlineStyles(after);
      };
    });
    return getVars ? v : v.duration ? gsap3.to(after.element, v) : null;
  };
  Flip2.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
    return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
  };
  Flip2.batch = function batch(id) {
    id || (id = "default");
    return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
  };
  Flip2.killFlipsOf = function killFlipsOf(targets, complete) {
    (targets instanceof FlipState ? targets.targets : _toArray2(targets)).forEach(function(t) {
      return t && _killFlip(t._flip, complete !== false ? 1 : 2);
    });
  };
  Flip2.isFlipping = function isFlipping(target) {
    var f = Flip2.getByTarget(target);
    return !!f && f.isActive();
  };
  Flip2.getByTarget = function getByTarget(target) {
    return (_getEl(target) || _emptyObj)._flip;
  };
  Flip2.getElementState = function getElementState(target, props) {
    return new ElementState(_getEl(target), props);
  };
  Flip2.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
    var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
    return point ? m.apply(point) : m;
  };
  Flip2.register = function register(core) {
    _body4 = typeof document !== "undefined" && document.body;
    if (_body4) {
      gsap3 = core;
      _setDoc(_body4);
      _toArray2 = gsap3.utils.toArray;
      _getStyleSaver = gsap3.core.getStyleSaver;
      var snap = gsap3.utils.snap(0.1);
      _closestTenth = function _closestTenth2(value, add) {
        return snap(parseFloat(value) + add);
      };
    }
  };
  return Flip2;
}();
Flip.version = "3.13.0";
typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

// src/gsap.js
if (typeof window !== "undefined") import_gsap.default.registerPlugin(ScrollTrigger2, Flip);

// src/Portfolio.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var order = ["Fashion", "Ethnic & craft", "Jewellery", "Home & gifting", "Health & wellness", "Food", "Kids", "Hospitality", "Industry & tech"];
var useIso = typeof window === "undefined" ? import_react3.useEffect : import_react3.useLayoutEffect;
function Portfolio() {
  const [group, setGroup] = (0, import_react3.useState)("All");
  const [q, setQ] = (0, import_react3.useState)("");
  const grid = (0, import_react3.useRef)(null);
  const flipState = (0, import_react3.useRef)(null);
  const counts = (0, import_react3.useMemo)(() => Object.fromEntries(order.map((g) => [g, brands_default.filter((b) => b.group === g).length])), []);
  const visible = brands_default.filter((b) => (group === "All" || b.group === group) && (!q || (b.name + " " + b.category).toLowerCase().includes(q.toLowerCase())));
  const capture = () => {
    if (!grid.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    flipState.current = Flip.getState(grid.current.querySelectorAll(".tile"));
  };
  useIso(() => {
    if (!flipState.current) return;
    Flip.from(flipState.current, {
      duration: 0.6,
      ease: "expo.out",
      scale: true,
      absolute: true,
      stagger: 0.015,
      onEnter: (els) => import_gsap.default.fromTo(els, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: "expo.out" }),
      onLeave: (els) => import_gsap.default.to(els, { opacity: 0, scale: 0.9, duration: 0.3 })
    });
    flipState.current = null;
  }, [group, q]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "pf-hero", id: "top", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h1", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
          brands_default.length,
          " brands."
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "All live, all ours." }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Every project below is a working website or store we designed and built. Filter by industry or search by name. Each tile opens the live site." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "pf", "aria-label": "Portfolio", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pf-bar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "pf-filters", role: "group", "aria-label": "Filter by industry", children: ["All", ...order].map((g) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { "aria-pressed": group === g, onClick: () => {
          capture();
          setGroup(g);
        }, children: [
          g,
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: g === "All" ? brands_default.length : counts[g] })
        ] }, g)) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "pf-search", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "visually-hidden", children: "Search brands" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "search", placeholder: "Search brands", value: q, onChange: (e) => {
            capture();
            setQ(e.target.value);
          } })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "pf-count", "aria-live": "polite", children: [
        visible.length,
        " ",
        visible.length === 1 ? "brand" : "brands"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "pf-grid", ref: grid, children: visible.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card, { brand: b, eager: i < 3 }, b.slug)) }),
      !visible.length && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "pf-empty", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
          "No brand matches \u201C",
          q,
          "\u201D."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "btn btn-ink", onClick: () => {
          setQ("");
          setGroup("All");
        }, children: "Show all brands" })
      ] })
    ] })
  ] });
}

// src/Pages.jsx
var import_react4 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function ServicesPage({ onPick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PageHero, { lines: ["Six services.", "One team."], lede: "Build the store, fill it with buyers, keep them coming back.", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "hero-chips", children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: "#" + slug(s.name), children: s.name }) }, s.name)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "svc-detail", children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("article", { className: "svc-row", id: slug(s.name), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "svc-row-num", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "svc-mark" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "svc-row-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: s.name }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "svc-row-short", children: s.short }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: s.body })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "svc-row-list", children: s.items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: x }, x)) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { className: "btn btn-ink", href: u("/contact/"), onClick: () => onPick(s.name), children: "Ask about this" })
    ] }, s.name)) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "engage", "aria-labelledby": "engage-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "engage-title", children: "Ways to work with us" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "engage-grid", children: engagements.map((e) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: e.t }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: e.p.map((x) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: x }, x)) })
      ] }, e.t)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Process, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "tools", "aria-labelledby": "tools-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "tools-title", children: "Tools we use daily" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "tags", children: tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: t }, t)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CtaBand, {})
  ] });
}
var slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
function PerformancePage() {
  const f = perf.shuddhi.funnel, top = f[0].n;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PageHero, { lines: ["Ads that", "pay back."], lede: "Meta Ads case studies across 20+ brands. Numbers straight from Ads Manager.", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { className: "btn btn-lime", href: u(downloads[1].file), download: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DownloadIcon, { size: 18 }),
      " Download the deck"
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StatsBand, { items: perf.glance, tone: "lime" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "perf-chart", "aria-labelledby": "pc-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "pc-title", className: "visually-hidden", children: "ROAS by brand" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(RoasChart, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "case-grid-wrap", "aria-labelledby": "cases-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "cases-title", children: "Case studies" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "case-grid", children: perf.cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { className: "case", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "case-cat", children: c.cat }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: c.url ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { href: c.url, target: "_blank", rel: "noopener noreferrer", children: [
          c.name,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ArrowIcon, { size: 14 })
        ] }) : c.name }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "case-nums", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("strong", { children: [
              c.roas.toFixed(2),
              "X"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "ROAS" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("strong", { children: c.spend }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Ad spend" })
          ] })
        ] })
      ] }, c.name)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "funnel-wrap", "aria-labelledby": "funnel-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "funnel-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "funnel-title", children: "Shuddhi Clothing, start to sale" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { children: [
          perf.shuddhi.period,
          " \xB7 Meta Ads \xB7 3.74X ROAS"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "mini-stats", children: perf.shuddhi.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("strong", { children: s.v }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ol", { className: "funnel", children: f.map((s) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { style: { "--w": Math.max(s.n / top * 100, 6).toFixed(1) + "%" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "funnel-bar" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "funnel-l", children: s.l }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "funnel-n", children: s.n.toLocaleString("en-IN") })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "extra-cases", "aria-label": "More results", children: perf.extra.map((e) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "extra", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: e.name }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: e.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: p }, p)) })
    ] }, e.name)) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "perf-how", "aria-labelledby": "how-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "how-title", children: "How we run your ads" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ol", { className: "how-grid", children: perf.how.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "step-sq", children: i + 1 }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: h.t }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: h.p.map((x) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: x }, x)) })
      ] }, h.t)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "perf-lists", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: "Brands on our ad accounts" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", { className: "tags", children: [
          perf.brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: b }, b)),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { className: "tag-lime", children: "+10 more" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: "Channels we run" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "tags", children: perf.channels.map((b) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: b }, b)) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CtaBand, { title: "Let\u2019s scale your brand.", text: "Share your current ROAS and monthly budget. We\u2019ll show you where the growth is." })
  ] });
}
function AboutPage() {
  const faces = ["doms", "the-misfits", "niluk", "tangelos", "spunkies", "house-of-chikankari", "balance-breens", "navyas-fashion", "akera-health"].map((s) => bySlug[s]).filter(Boolean);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PageHero, { lines: ["One stop for", "everything", "a brand needs."], lede: "A full-service digital team. Strategy, quality, results." }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StatsBand, { items: homeStats }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "about-story", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: "What we do" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", { className: "story-points", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { children: "Build" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Websites and online stores on Shopify, WordPress, Wix and custom code." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { children: "Grow" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Meta and Google ads, SEO and social media." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { children: "Design" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "UI/UX, brand graphics, 3D renders and campaign creative." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { children: "Extend" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Shopify apps and our own digital products." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(WhyUs, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "principles", "aria-labelledby": "pr-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "pr-title", children: "How we work" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { children: principles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: p.t }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: p.p })
      ] }, p.t)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "about-wall", "aria-label": "A few brands we\u2019ve built", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "about-wall-grid", children: faces.map((b) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Card, { brand: b }, b.slug)) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { className: "btn btn-ink", href: u("/portfolio/"), children: [
        "All ",
        brands_default.length,
        " brands"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "fit fit-about", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "fit-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Online stores" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "tags", children: industries.ecommerce.map((t) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: t }, t)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "fit-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Lead generation" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "tags", children: industries.leads.map((t) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: t }, t)) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Downloads, { compact: true })
  ] });
}
function ContactPage({ brief }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PageHero, { lines: ["Let\u2019s talk", "about your brand."], lede: "Fill the form, or reach us directly.", tone: "lime" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "contact-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("aside", { className: "contact-aside", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: "Reach us" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", { className: "reach", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: `mailto:${contact.email}`, children: contact.email })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "WhatsApp" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: contact.whatsapp, target: "_blank", rel: "noopener noreferrer", children: contact.phone })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Instagram" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: contact.instagram, target: "_blank", rel: "noopener noreferrer", children: "@websqr" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Facebook" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: contact.facebook, target: "_blank", rel: "noopener noreferrer", children: "WebSqr" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: "What happens next" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ol", { className: "next-list", children: nextSteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "step-sq", children: i + 1 }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { children: s.t }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: s.p })
          ] })
        ] }, s.t)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ContactForm, { brief, light: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "faq", id: "faq", "aria-labelledby": "faq-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { id: "faq-title", children: "Before you ask" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "faq-list", children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("details", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("summary", { children: [
          f.q,
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: f.a })
      ] }, f.q)) })
    ] })
  ] });
}
function ThankYouPage() {
  const [name, setName] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    try {
      setName(sessionStorage.getItem("ws-name") || "");
    } catch {
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "thanks", id: "top", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { className: "thanks-mark", viewBox: "0 0 512 512", "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M0 170C0 76 76 0 170 0h342v170H170v342H0z", fill: "currentColor" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M272 272h240v170c0 39-31 70-70 70H272z", fill: "#B8FF3D" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h1", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
          "Thank you",
          name ? `, ${name.split(" ")[0]}` : "",
          "."
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "line", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "We\u2019ve got your brief." }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ol", { className: "next-list next-row", children: nextSteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "step-sq", children: i + 1 }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { children: s.t }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: s.p })
        ] })
      ] }, s.t)) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "row-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { className: "btn btn-lime", href: `${contact.whatsapp}?text=${encodeURIComponent("Hi WebSqr, I just sent an enquiry from your website.")}`, target: "_blank", rel: "noopener noreferrer", children: "Chat on WhatsApp" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { className: "btn btn-line", href: u("/portfolio/"), children: "Browse our work" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { className: "btn btn-line", href: u("/"), children: "Back to home" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Downloads, {})
  ] });
}

// src/motion.js
var import_react5 = require("react");

// node_modules/lenis/dist/lenis.mjs
var version = "1.3.4";
function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max));
}
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}
function damp(x, y, lambda, deltaTime) {
  return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
function modulo(n, d) {
  return (n % d + d) % d;
}
var Animate = class {
  isRunning = false;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  // These are instanciated in the fromTo method
  lerp;
  duration;
  easing;
  onUpdate;
  /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */
  advance(deltaTime) {
    if (!this.isRunning) return;
    let completed = false;
    if (this.duration && this.easing) {
      this.currentTime += deltaTime;
      const linearProgress = clamp(0, this.currentTime / this.duration, 1);
      completed = linearProgress >= 1;
      const easedProgress = completed ? 1 : this.easing(linearProgress);
      this.value = this.from + (this.to - this.from) * easedProgress;
    } else if (this.lerp) {
      this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
      if (Math.round(this.value) === this.to) {
        this.value = this.to;
        completed = true;
      }
    } else {
      this.value = this.to;
      completed = true;
    }
    if (completed) {
      this.stop();
    }
    this.onUpdate?.(this.value, completed);
  }
  /** Stop the animation */
  stop() {
    this.isRunning = false;
  }
  /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */
  fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
    this.from = this.value = from;
    this.to = to;
    this.lerp = lerp2;
    this.duration = duration;
    this.easing = easing;
    this.currentTime = 0;
    this.isRunning = true;
    onStart?.();
    this.onUpdate = onUpdate;
  }
};
function debounce(callback, delay) {
  let timer;
  return function(...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = void 0;
      callback.apply(context, args);
    }, delay);
  };
}
var Dimensions = class {
  constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
    this.wrapper = wrapper;
    this.content = content;
    if (autoResize) {
      this.debouncedResize = debounce(this.resize, debounceValue);
      if (this.wrapper instanceof Window) {
        window.addEventListener("resize", this.debouncedResize, false);
      } else {
        this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
        this.wrapperResizeObserver.observe(this.wrapper);
      }
      this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
      this.contentResizeObserver.observe(this.content);
    }
    this.resize();
  }
  width = 0;
  height = 0;
  scrollHeight = 0;
  scrollWidth = 0;
  // These are instanciated in the constructor as they need information from the options
  debouncedResize;
  wrapperResizeObserver;
  contentResizeObserver;
  destroy() {
    this.wrapperResizeObserver?.disconnect();
    this.contentResizeObserver?.disconnect();
    if (this.wrapper === window && this.debouncedResize) {
      window.removeEventListener("resize", this.debouncedResize, false);
    }
  }
  resize = () => {
    this.onWrapperResize();
    this.onContentResize();
  };
  onWrapperResize = () => {
    if (this.wrapper instanceof Window) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    } else {
      this.width = this.wrapper.clientWidth;
      this.height = this.wrapper.clientHeight;
    }
  };
  onContentResize = () => {
    if (this.wrapper instanceof Window) {
      this.scrollHeight = this.content.scrollHeight;
      this.scrollWidth = this.content.scrollWidth;
    } else {
      this.scrollHeight = this.wrapper.scrollHeight;
      this.scrollWidth = this.wrapper.scrollWidth;
    }
  };
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
};
var Emitter = class {
  events = {};
  /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */
  emit(event, ...args) {
    let callbacks = this.events[event] || [];
    for (let i = 0, length = callbacks.length; i < length; i++) {
      callbacks[i]?.(...args);
    }
  }
  /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */
  on(event, cb) {
    this.events[event]?.push(cb) || (this.events[event] = [cb]);
    return () => {
      this.events[event] = this.events[event]?.filter((i) => cb !== i);
    };
  }
  /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */
  off(event, callback) {
    this.events[event] = this.events[event]?.filter((i) => callback !== i);
  }
  /**
   * Remove all event listeners and clean up
   */
  destroy() {
    this.events = {};
  }
};
var LINE_HEIGHT = 100 / 6;
var listenerOptions = { passive: false };
var VirtualScroll = class {
  constructor(element, options = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    this.element = element;
    this.options = options;
    window.addEventListener("resize", this.onWindowResize, false);
    this.onWindowResize();
    this.element.addEventListener("wheel", this.onWheel, listenerOptions);
    this.element.addEventListener(
      "touchstart",
      this.onTouchStart,
      listenerOptions
    );
    this.element.addEventListener(
      "touchmove",
      this.onTouchMove,
      listenerOptions
    );
    this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
  }
  touchStart = {
    x: 0,
    y: 0
  };
  lastDelta = {
    x: 0,
    y: 0
  };
  window = {
    width: 0,
    height: 0
  };
  emitter = new Emitter();
  /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */
  on(event, callback) {
    return this.emitter.on(event, callback);
  }
  /** Remove all event listeners and clean up */
  destroy() {
    this.emitter.destroy();
    window.removeEventListener("resize", this.onWindowResize, false);
    this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
    this.element.removeEventListener(
      "touchstart",
      this.onTouchStart,
      listenerOptions
    );
    this.element.removeEventListener(
      "touchmove",
      this.onTouchMove,
      listenerOptions
    );
    this.element.removeEventListener(
      "touchend",
      this.onTouchEnd,
      listenerOptions
    );
  }
  /**
   * Event handler for 'touchstart' event
   *
   * @param event Touch event
   */
  onTouchStart = (event) => {
    const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
    this.touchStart.x = clientX;
    this.touchStart.y = clientY;
    this.lastDelta = {
      x: 0,
      y: 0
    };
    this.emitter.emit("scroll", {
      deltaX: 0,
      deltaY: 0,
      event
    });
  };
  /** Event handler for 'touchmove' event */
  onTouchMove = (event) => {
    const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
    const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
    const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
    this.touchStart.x = clientX;
    this.touchStart.y = clientY;
    this.lastDelta = {
      x: deltaX,
      y: deltaY
    };
    this.emitter.emit("scroll", {
      deltaX,
      deltaY,
      event
    });
  };
  onTouchEnd = (event) => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event
    });
  };
  /** Event handler for 'wheel' event */
  onWheel = (event) => {
    let { deltaX, deltaY, deltaMode } = event;
    const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
    const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
    deltaX *= multiplierX;
    deltaY *= multiplierY;
    deltaX *= this.options.wheelMultiplier;
    deltaY *= this.options.wheelMultiplier;
    this.emitter.emit("scroll", { deltaX, deltaY, event });
  };
  onWindowResize = () => {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };
};
var defaultEasing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
var Lenis = class {
  _isScrolling = false;
  // true when scroll is animating
  _isStopped = false;
  // true if user should not be able to scroll - enable/disable programmatically
  _isLocked = false;
  // same as isStopped but enabled/disabled when scroll reaches target
  _preventNextNativeScrollEvent = false;
  _resetVelocityTimeout = null;
  __rafID = null;
  /**
   * Whether or not the user is touching the screen
   */
  isTouching;
  /**
   * The time in ms since the lenis instance was created
   */
  time = 0;
  /**
   * User data that will be forwarded through the scroll event
   *
   * @example
   * lenis.scrollTo(100, {
   *   userData: {
   *     foo: 'bar'
   *   }
   * })
   */
  userData = {};
  /**
   * The last velocity of the scroll
   */
  lastVelocity = 0;
  /**
   * The current velocity of the scroll
   */
  velocity = 0;
  /**
   * The direction of the scroll
   */
  direction = 0;
  /**
   * The options passed to the lenis instance
   */
  options;
  /**
   * The target scroll value
   */
  targetScroll;
  /**
   * The animated scroll value
   */
  animatedScroll;
  // These are instanciated here as they don't need information from the options
  animate = new Animate();
  emitter = new Emitter();
  // These are instanciated in the constructor as they need information from the options
  dimensions;
  // This is not private because it's used in the Snap class
  virtualScroll;
  constructor({
    wrapper = window,
    content = document.documentElement,
    eventsTarget = wrapper,
    smoothWheel = true,
    syncTouch = false,
    syncTouchLerp = 0.075,
    touchInertiaMultiplier = 35,
    duration,
    // in seconds
    easing,
    lerp: lerp2 = 0.1,
    infinite = false,
    orientation = "vertical",
    // vertical, horizontal
    gestureOrientation = "vertical",
    // vertical, horizontal, both
    touchMultiplier = 1,
    wheelMultiplier = 1,
    autoResize = true,
    prevent,
    virtualScroll,
    overscroll = true,
    autoRaf = false,
    anchors = false,
    autoToggle = false,
    // https://caniuse.com/?search=transition-behavior
    allowNestedScroll = false,
    __experimental__naiveDimensions = false
  } = {}) {
    window.lenisVersion = version;
    if (!wrapper || wrapper === document.documentElement) {
      wrapper = window;
    }
    if (typeof duration === "number" && typeof easing !== "function") {
      easing = defaultEasing;
    } else if (typeof easing === "function" && typeof duration !== "number") {
      duration = 1;
    }
    this.options = {
      wrapper,
      content,
      eventsTarget,
      smoothWheel,
      syncTouch,
      syncTouchLerp,
      touchInertiaMultiplier,
      duration,
      easing,
      lerp: lerp2,
      infinite,
      gestureOrientation,
      orientation,
      touchMultiplier,
      wheelMultiplier,
      autoResize,
      prevent,
      virtualScroll,
      overscroll,
      autoRaf,
      anchors,
      autoToggle,
      allowNestedScroll,
      __experimental__naiveDimensions
    };
    this.dimensions = new Dimensions(wrapper, content, { autoResize });
    this.updateClassName();
    this.targetScroll = this.animatedScroll = this.actualScroll;
    this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
    this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: true
    });
    if (this.options.anchors && this.options.wrapper === window) {
      this.options.wrapper.addEventListener(
        "click",
        this.onClick,
        false
      );
    }
    this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown,
      false
    );
    this.virtualScroll = new VirtualScroll(eventsTarget, {
      touchMultiplier,
      wheelMultiplier
    });
    this.virtualScroll.on("scroll", this.onVirtualScroll);
    if (this.options.autoToggle) {
      this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
        passive: true
      });
    }
    if (this.options.autoRaf) {
      this.__rafID = requestAnimationFrame(this.raf);
    }
  }
  /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */
  destroy() {
    this.emitter.destroy();
    this.options.wrapper.removeEventListener(
      "scroll",
      this.onNativeScroll,
      false
    );
    this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
      capture: true
    });
    this.options.wrapper.removeEventListener(
      "pointerdown",
      this.onPointerDown,
      false
    );
    if (this.options.anchors && this.options.wrapper === window) {
      this.options.wrapper.removeEventListener(
        "click",
        this.onClick,
        false
      );
    }
    this.virtualScroll.destroy();
    this.dimensions.destroy();
    this.cleanUpClassName();
    if (this.__rafID) {
      cancelAnimationFrame(this.__rafID);
    }
  }
  on(event, callback) {
    return this.emitter.on(event, callback);
  }
  off(event, callback) {
    return this.emitter.off(event, callback);
  }
  onScrollEnd = (e) => {
    if (!(e instanceof CustomEvent)) {
      if (this.isScrolling === "smooth" || this.isScrolling === false) {
        e.stopPropagation();
      }
    }
  };
  dispatchScrollendEvent = () => {
    this.options.wrapper.dispatchEvent(
      new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        // cancelable: false,
        detail: {
          lenisScrollEnd: true
        }
      })
    );
  };
  onTransitionEnd = (event) => {
    if (event.propertyName.includes("overflow")) {
      const property = this.isHorizontal ? "overflow-x" : "overflow-y";
      const overflow = getComputedStyle(this.rootElement)[property];
      if (["hidden", "clip"].includes(overflow)) {
        this.stop();
      } else {
        this.start();
      }
    }
  };
  setScroll(scroll) {
    if (this.isHorizontal) {
      this.options.wrapper.scrollTo({ left: scroll, behavior: "instant" });
    } else {
      this.options.wrapper.scrollTo({ top: scroll, behavior: "instant" });
    }
  }
  onClick = (event) => {
    const path = event.composedPath();
    const anchor = path.find(
      (node) => node instanceof HTMLAnchorElement && (node.getAttribute("href")?.startsWith("#") || node.getAttribute("href")?.startsWith("/#") || node.getAttribute("href")?.startsWith("./#"))
    );
    if (anchor) {
      const id = anchor.getAttribute("href");
      if (id) {
        const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
        let target = `#${id.split("#")[1]}`;
        if (["#", "/#", "./#", "#top", "/#top", "./#top"].includes(id)) {
          target = 0;
        }
        this.scrollTo(target, options);
      }
    }
  };
  onPointerDown = (event) => {
    if (event.button === 1) {
      this.reset();
    }
  };
  onVirtualScroll = (data) => {
    if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false)
      return;
    const { deltaX, deltaY, event } = data;
    this.emitter.emit("virtual-scroll", { deltaX, deltaY, event });
    if (event.ctrlKey) return;
    if (event.lenisStopPropagation) return;
    const isTouch = event.type.includes("touch");
    const isWheel = event.type.includes("wheel");
    this.isTouching = event.type === "touchstart" || event.type === "touchmove";
    const isClickOrTap = deltaX === 0 && deltaY === 0;
    const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked;
    if (isTapToStop) {
      this.reset();
      return;
    }
    const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
    if (isClickOrTap || isUnknownGesture) {
      return;
    }
    let composedPath = event.composedPath();
    composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
    const prevent = this.options.prevent;
    if (!!composedPath.find(
      (node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(node, { deltaX, deltaY }))
    ))
      return;
    if (this.isStopped || this.isLocked) {
      event.preventDefault();
      return;
    }
    const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
    if (!isSmooth) {
      this.isScrolling = "native";
      this.animate.stop();
      event.lenisStopPropagation = true;
      return;
    }
    let delta = deltaY;
    if (this.options.gestureOrientation === "both") {
      delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
    } else if (this.options.gestureOrientation === "horizontal") {
      delta = deltaX;
    }
    if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
      event.lenisStopPropagation = true;
    }
    event.preventDefault();
    const isSyncTouch = isTouch && this.options.syncTouch;
    const isTouchEnd = isTouch && event.type === "touchend";
    const hasTouchInertia = isTouchEnd && Math.abs(delta) > 5;
    if (hasTouchInertia) {
      delta = this.velocity * this.options.touchInertiaMultiplier;
    }
    this.scrollTo(this.targetScroll + delta, {
      programmatic: false,
      ...isSyncTouch ? {
        lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
        // immediate: !hasTouchInertia,
      } : {
        lerp: this.options.lerp,
        duration: this.options.duration,
        easing: this.options.easing
      }
    });
  };
  /**
   * Force lenis to recalculate the dimensions
   */
  resize() {
    this.dimensions.resize();
    this.animatedScroll = this.targetScroll = this.actualScroll;
    this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  onNativeScroll = () => {
    if (this._resetVelocityTimeout !== null) {
      clearTimeout(this._resetVelocityTimeout);
      this._resetVelocityTimeout = null;
    }
    if (this._preventNextNativeScrollEvent) {
      this._preventNextNativeScrollEvent = false;
      return;
    }
    if (this.isScrolling === false || this.isScrolling === "native") {
      const lastScroll = this.animatedScroll;
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.lastVelocity = this.velocity;
      this.velocity = this.animatedScroll - lastScroll;
      this.direction = Math.sign(
        this.animatedScroll - lastScroll
      );
      if (!this.isStopped) {
        this.isScrolling = "native";
      }
      this.emit();
      if (this.velocity !== 0) {
        this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity;
          this.velocity = 0;
          this.isScrolling = false;
          this.emit();
        }, 400);
      }
    }
  };
  reset() {
    this.isLocked = false;
    this.isScrolling = false;
    this.animatedScroll = this.targetScroll = this.actualScroll;
    this.lastVelocity = this.velocity = 0;
    this.animate.stop();
  }
  /**
   * Start lenis scroll after it has been stopped
   */
  start() {
    if (!this.isStopped) return;
    this.reset();
    this.isStopped = false;
    this.emit();
  }
  /**
   * Stop lenis scroll
   */
  stop() {
    if (this.isStopped) return;
    this.reset();
    this.isStopped = true;
    this.emit();
  }
  /**
   * RequestAnimationFrame for lenis
   *
   * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
   */
  raf = (time) => {
    const deltaTime = time - (this.time || time);
    this.time = time;
    this.animate.advance(deltaTime * 1e-3);
    if (this.options.autoRaf) {
      this.__rafID = requestAnimationFrame(this.raf);
    }
  };
  /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */
  scrollTo(target, {
    offset = 0,
    immediate = false,
    lock = false,
    duration = this.options.duration,
    easing = this.options.easing,
    lerp: lerp2 = this.options.lerp,
    onStart,
    onComplete,
    force = false,
    // scroll even if stopped
    programmatic = true,
    // called from outside of the class
    userData
  } = {}) {
    if ((this.isStopped || this.isLocked) && !force) return;
    if (typeof target === "string" && ["top", "left", "start"].includes(target)) {
      target = 0;
    } else if (typeof target === "string" && ["bottom", "right", "end"].includes(target)) {
      target = this.limit;
    } else {
      let node;
      if (typeof target === "string") {
        node = document.querySelector(target);
      } else if (target instanceof HTMLElement && target?.nodeType) {
        node = target;
      }
      if (node) {
        if (this.options.wrapper !== window) {
          const wrapperRect = this.rootElement.getBoundingClientRect();
          offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
        }
        const rect = node.getBoundingClientRect();
        target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
      }
    }
    if (typeof target !== "number") return;
    target += offset;
    target = Math.round(target);
    if (this.options.infinite) {
      if (programmatic) {
        this.targetScroll = this.animatedScroll = this.scroll;
        const distance = target - this.animatedScroll;
        if (distance > this.limit / 2) {
          target = target - this.limit;
        } else if (distance < -this.limit / 2) {
          target = target + this.limit;
        }
      }
    } else {
      target = clamp(0, target, this.limit);
    }
    if (target === this.targetScroll) {
      onStart?.(this);
      onComplete?.(this);
      return;
    }
    this.userData = userData ?? {};
    if (immediate) {
      this.animatedScroll = this.targetScroll = target;
      this.setScroll(this.scroll);
      this.reset();
      this.preventNextNativeScrollEvent();
      this.emit();
      onComplete?.(this);
      this.userData = {};
      requestAnimationFrame(() => {
        this.dispatchScrollendEvent();
      });
      return;
    }
    if (!programmatic) {
      this.targetScroll = target;
    }
    if (typeof duration === "number" && typeof easing !== "function") {
      easing = defaultEasing;
    } else if (typeof easing === "function" && typeof duration !== "number") {
      duration = 1;
    }
    this.animate.fromTo(this.animatedScroll, target, {
      duration,
      easing,
      lerp: lerp2,
      onStart: () => {
        if (lock) this.isLocked = true;
        this.isScrolling = "smooth";
        onStart?.(this);
      },
      onUpdate: (value, completed) => {
        this.isScrolling = "smooth";
        this.lastVelocity = this.velocity;
        this.velocity = value - this.animatedScroll;
        this.direction = Math.sign(this.velocity);
        this.animatedScroll = value;
        this.setScroll(this.scroll);
        if (programmatic) {
          this.targetScroll = value;
        }
        if (!completed) this.emit();
        if (completed) {
          this.reset();
          this.emit();
          onComplete?.(this);
          this.userData = {};
          requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          this.preventNextNativeScrollEvent();
        }
      }
    });
  }
  preventNextNativeScrollEvent() {
    this._preventNextNativeScrollEvent = true;
    requestAnimationFrame(() => {
      this._preventNextNativeScrollEvent = false;
    });
  }
  checkNestedScroll(node, { deltaX, deltaY }) {
    const time = Date.now();
    const cache = node._lenis ??= {};
    let hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
    const gestureOrientation = this.options.gestureOrientation;
    if (time - (cache.time ?? 0) > 2e3) {
      cache.time = Date.now();
      const computedStyle = window.getComputedStyle(node);
      cache.computedStyle = computedStyle;
      const overflowXString = computedStyle.overflowX;
      const overflowYString = computedStyle.overflowY;
      hasOverflowX = ["auto", "overlay", "scroll"].includes(overflowXString);
      hasOverflowY = ["auto", "overlay", "scroll"].includes(overflowYString);
      cache.hasOverflowX = hasOverflowX;
      cache.hasOverflowY = hasOverflowY;
      if (!hasOverflowX && !hasOverflowY) return false;
      if (gestureOrientation === "vertical" && !hasOverflowY) return false;
      if (gestureOrientation === "horizontal" && !hasOverflowX) return false;
      scrollWidth = node.scrollWidth;
      scrollHeight = node.scrollHeight;
      clientWidth = node.clientWidth;
      clientHeight = node.clientHeight;
      isScrollableX = scrollWidth > clientWidth;
      isScrollableY = scrollHeight > clientHeight;
      cache.isScrollableX = isScrollableX;
      cache.isScrollableY = isScrollableY;
      cache.scrollWidth = scrollWidth;
      cache.scrollHeight = scrollHeight;
      cache.clientWidth = clientWidth;
      cache.clientHeight = clientHeight;
    } else {
      isScrollableX = cache.isScrollableX;
      isScrollableY = cache.isScrollableY;
      hasOverflowX = cache.hasOverflowX;
      hasOverflowY = cache.hasOverflowY;
      scrollWidth = cache.scrollWidth;
      scrollHeight = cache.scrollHeight;
      clientWidth = cache.clientWidth;
      clientHeight = cache.clientHeight;
    }
    if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) {
      return false;
    }
    if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY))
      return false;
    if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX))
      return false;
    let orientation;
    if (gestureOrientation === "horizontal") {
      orientation = "x";
    } else if (gestureOrientation === "vertical") {
      orientation = "y";
    } else {
      const isScrollingX = deltaX !== 0;
      const isScrollingY = deltaY !== 0;
      if (isScrollingX && hasOverflowX && isScrollableX) {
        orientation = "x";
      }
      if (isScrollingY && hasOverflowY && isScrollableY) {
        orientation = "y";
      }
    }
    if (!orientation) return false;
    let scroll, maxScroll, delta, hasOverflow, isScrollable;
    if (orientation === "x") {
      scroll = node.scrollLeft;
      maxScroll = scrollWidth - clientWidth;
      delta = deltaX;
      hasOverflow = hasOverflowX;
      isScrollable = isScrollableX;
    } else if (orientation === "y") {
      scroll = node.scrollTop;
      maxScroll = scrollHeight - clientHeight;
      delta = deltaY;
      hasOverflow = hasOverflowY;
      isScrollable = isScrollableY;
    } else {
      return false;
    }
    const willScroll = delta > 0 ? scroll < maxScroll : scroll > 0;
    return willScroll && hasOverflow && isScrollable;
  }
  /**
   * The root element on which lenis is instanced
   */
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  /**
   * The limit which is the maximum scroll value
   */
  get limit() {
    if (this.options.__experimental__naiveDimensions) {
      if (this.isHorizontal) {
        return this.rootElement.scrollWidth - this.rootElement.clientWidth;
      } else {
        return this.rootElement.scrollHeight - this.rootElement.clientHeight;
      }
    } else {
      return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
  }
  /**
   * Whether or not the scroll is horizontal
   */
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  /**
   * The actual scroll value
   */
  get actualScroll() {
    const wrapper = this.options.wrapper;
    return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
  }
  /**
   * The current scroll value
   */
  get scroll() {
    return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  /**
   * The progress of the scroll relative to the limit
   */
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  /**
   * Current scroll state
   */
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(value) {
    if (this._isScrolling !== value) {
      this._isScrolling = value;
      this.updateClassName();
    }
  }
  /**
   * Check if lenis is stopped
   */
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(value) {
    if (this._isStopped !== value) {
      this._isStopped = value;
      this.updateClassName();
    }
  }
  /**
   * Check if lenis is locked
   */
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(value) {
    if (this._isLocked !== value) {
      this._isLocked = value;
      this.updateClassName();
    }
  }
  /**
   * Check if lenis is smooth scrolling
   */
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  /**
   * The class name applied to the wrapper element
   */
  get className() {
    let className = "lenis";
    if (this.options.autoToggle) className += " lenis-autoToggle";
    if (this.isStopped) className += " lenis-stopped";
    if (this.isLocked) className += " lenis-locked";
    if (this.isScrolling) className += " lenis-scrolling";
    if (this.isScrolling === "smooth") className += " lenis-smooth";
    return className;
  }
  updateClassName() {
    this.cleanUpClassName();
    this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
  }
};

// src/motion.js
var HEADER = 72;
function smoothScroll() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger2.update);
  const tick = (t) => lenis.raf(t * 1e3);
  import_gsap.default.ticker.add(tick);
  import_gsap.default.ticker.lagSmoothing(0);
  const onClick = (e) => {
    const a = e.target.closest('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href);
    if (url.pathname !== location.pathname) return;
    const target = url.hash === "#top" ? 0 : document.querySelector(url.hash);
    if (target === null) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: target === 0 ? 0 : -HEADER });
    history.replaceState(null, "", url.hash);
  };
  document.addEventListener("click", onClick);
  return () => {
    import_gsap.default.ticker.remove(tick);
    lenis.destroy();
    document.removeEventListener("click", onClick);
  };
}
function header() {
  const el = document.querySelector(".site-header");
  if (!el) return;
  ScrollTrigger2.create({ start: 0, end: "max", onUpdate: (self2) => {
    el.classList.toggle("is-scrolled", self2.scroll() > 20);
    el.classList.toggle("is-hidden", self2.direction === 1 && self2.scroll() > 400 && !document.documentElement.classList.contains("menu-open"));
  } });
}
function heroIntro() {
  const tl = import_gsap.default.timeline({ defaults: { ease: "expo.out" } });
  tl.from(".hero-band", { clipPath: "inset(0 100% 0 0 round 0)", duration: 1.1, ease: "expo.inOut" }).from(".hero-col", { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "expo.inOut" }, "-=.45").from(".hero-square", { clipPath: "inset(100% 0% 0% 100%)", duration: 1.1, ease: "expo.inOut", clearProps: "clipPath" }, "-=.5").from(".hero-title .line > span", { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.55).from(".hero-col > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.07 }, "-=.7").from(".stack-item", { y: 140, rotation: (i) => 8 - i * 4, opacity: 0, duration: 1.1, stagger: 0.08 }, "-=.8");
  document.querySelectorAll("[data-count]").forEach((n) => {
    const end = +n.dataset.count, o = { v: 0 };
    tl.to(o, { v: end, duration: 1.6, ease: "power3.out", onUpdate: () => {
      n.textContent = Math.round(o.v);
    } }, 1);
  });
  return tl;
}
function heroStack() {
  const items = import_gsap.default.utils.toArray(".stack-item");
  if (items.length < 2) return;
  let order2 = items.slice();
  const place = (animate) => order2.forEach((el, i) => {
    const vars = { x: i * 22, y: i * -18, rotation: i === 0 ? -3 : i * 2.5, scale: 1 - i * 0.06, zIndex: items.length - i, opacity: i > 3 ? 0 : 1 };
    animate ? import_gsap.default.to(el, { ...vars, duration: 0.9, ease: "expo.inOut" }) : import_gsap.default.set(el, vars);
  });
  place(false);
  const cycle = () => {
    const first = order2.shift();
    import_gsap.default.timeline().to(first, { y: "-=60", x: "-=80", rotation: -14, duration: 0.45, ease: "power2.in" }).add(() => {
      order2.push(first);
      place(true);
    });
  };
  const id = setInterval(() => {
    if (!document.hidden) cycle();
  }, 2800);
  return () => clearInterval(id);
}
function heroZoom() {
  const hero = document.querySelector(".hero");
  const sq = document.querySelector(".hero-square");
  if (!hero || !sq) return;
  const geo = () => {
    const h = hero.getBoundingClientRect(), r = sq.getBoundingClientRect();
    const top = HEADER + (r.top - h.top);
    return {
      s: Math.max(innerWidth / r.width, innerHeight / r.height) * 1.04,
      x: innerWidth / 2 - (r.left + r.width / 2),
      y: innerHeight / 2 - (top + r.height / 2)
    };
  };
  const work = document.querySelector(".work");
  hero.style.position = "relative";
  hero.style.zIndex = "3";
  hero.style.background = "var(--paper)";
  if (work) {
    work.style.marginTop = `calc(-100svh + ${HEADER}px)`;
    work.style.zIndex = "1";
  }
  let g = geo();
  const tl = import_gsap.default.timeline({ scrollTrigger: { trigger: hero, start: `top ${HEADER}px`, end: "+=110%", pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true, onRefreshInit: () => {
    g = geo();
  } } });
  tl.to(".hero-square > *", { opacity: 0, duration: 0.25 }, 0).to(".hero-band", { yPercent: -60, opacity: 0, duration: 0.6, ease: "power2.in" }, 0).to(".hero-col", { xPercent: -70, opacity: 0, duration: 0.6, ease: "power2.in" }, 0).to(sq, { x: () => g.x, y: () => g.y, scale: () => g.s, borderRadius: 0, duration: 1, ease: "power2.inOut" }, 0);
}
function workScroll() {
  const pin = document.querySelector(".work-pin");
  const track = document.querySelector(".work-track");
  if (!pin || !track) return;
  pin.style.overflow = "hidden";
  const dist = () => Math.max(0, track.scrollWidth - innerWidth + parseFloat(getComputedStyle(pin).paddingLeft) + 48);
  const hold = () => innerHeight * 0.9;
  const tl = import_gsap.default.timeline({ scrollTrigger: { trigger: pin, start: "top top", end: () => "+=" + (dist() + hold()), pin: true, scrub: 0.7, invalidateOnRefresh: true } });
  tl.to({}, { duration: () => hold() }).to(track, { x: () => -dist(), ease: "none", duration: () => dist() });
}
function steps2() {
  const list = document.querySelector(".steps");
  if (!list) return;
  const horizontal = matchMedia("(min-width: 900px)").matches;
  import_gsap.default.fromTo(".steps-line span", horizontal ? { scaleX: 0 } : { scaleY: 0 }, { scaleX: 1, scaleY: 1, ease: "none", scrollTrigger: { trigger: list, start: "top 70%", end: "bottom 55%", scrub: true } });
  import_gsap.default.utils.toArray(".step").forEach((step) => ScrollTrigger2.create({ trigger: step, start: horizontal ? "top 45%" : "top 60%", onToggle: (s) => step.classList.toggle("is-on", s.isActive || s.progress === 1), end: "max" }));
}
function marquee() {
  const track = document.querySelector(".platforms-track");
  if (!track) return;
  const loop = import_gsap.default.to(track, { xPercent: -50, ease: "none", duration: 22, repeat: -1 });
  ScrollTrigger2.create({ start: 0, end: "max", onUpdate: (s) => {
    const v = import_gsap.default.utils.clamp(-4, 4, s.getVelocity() / 400);
    import_gsap.default.to(loop, { timeScale: (s.direction || 1) * Math.max(1, Math.abs(v)), duration: 0.3, overwrite: true });
    import_gsap.default.to(loop, { timeScale: s.direction || 1, duration: 1.2, delay: 0.3 });
  } });
}
function bars() {
  import_gsap.default.utils.toArray(".roas").forEach((chart) => {
    import_gsap.default.from(chart.querySelectorAll(".roas-bar"), { scaleX: 0, duration: 1.2, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: chart, start: "top 75%", once: true } });
    import_gsap.default.from(chart.querySelectorAll(".roas-val"), { opacity: 0, x: -10, duration: 0.6, stagger: 0.08, delay: 0.5, scrollTrigger: { trigger: chart, start: "top 75%", once: true } });
  });
  import_gsap.default.utils.toArray(".funnel").forEach((f) => import_gsap.default.from(f.querySelectorAll(".funnel-bar"), { scaleX: 0, duration: 1.2, ease: "expo.out", stagger: 0.12, scrollTrigger: { trigger: f, start: "top 75%", once: true } }));
  [[".svc-grid", ".svc-card"], [".why-grid", "li"], [".case-grid", ".case"], [".dl-grid", ".dl-card"], [".story-points", "li"], [".engage-grid", ":scope > li"]].forEach(([wrap, item]) => {
    import_gsap.default.utils.toArray(wrap).forEach((w) => import_gsap.default.from(w.querySelectorAll(item), { y: 50, opacity: 0, duration: 0.9, ease: "expo.out", stagger: 0.07, scrollTrigger: { trigger: w, start: "top 80%", once: true } }));
  });
  import_gsap.default.utils.toArray(".stats-band").forEach((b) => import_gsap.default.from(b.querySelectorAll("strong"), { yPercent: 60, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: b, start: "top 85%", once: true } }));
}
function revealOnce() {
  import_gsap.default.utils.toArray(".work-head h2, .clients-head h2, .svc-head h2, .process-head h2, .faq h2, .contact-title, .why h2, .downloads-head h2, .perf-teaser h2, .engage h2, .case-grid-wrap h2, .perf-how h2, .about-story h2, .cta-band h2, .svc-row h2").forEach((h) => {
    import_gsap.default.from(h, { yPercent: 30, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 85%", once: true } });
  });
  if (document.querySelector(".logo-wall")) import_gsap.default.from(".logo-wall li", { opacity: 0, scale: 0.6, duration: 0.6, ease: "back.out(2)", stagger: { each: 0.012, from: "random" }, scrollTrigger: { trigger: ".logo-wall", start: "top 80%", once: true } });
}
function magnetic() {
  const els = document.querySelectorAll("[data-magnetic]");
  const offs = [];
  els.forEach((el) => {
    const xTo = import_gsap.default.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1,.4)" }), yTo = import_gsap.default.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1,.4)" });
    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.3);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    offs.push(() => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    });
  });
  return () => offs.forEach((f) => f());
}
function useSiteMotion(page) {
  (0, import_react5.useEffect)(() => {
    const cleanups = [];
    const mm = import_gsap.default.matchMedia();
    mm.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 900px)", fine: "(pointer: fine)" }, (ctx) => {
      const { motion, desktop, fine } = ctx.conditions;
      header();
      if (!motion) return;
      cleanups.push(smoothScroll());
      if (page === "home") {
        heroIntro();
        cleanups.push(heroStack());
        if (desktop) {
          heroZoom();
          workScroll();
        }
        marquee();
      } else if (page === "portfolio") {
        import_gsap.default.from(".pf-hero .line > span", { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.1 });
        import_gsap.default.from(".pf-grid .tile", { y: 60, opacity: 0, duration: 0.8, ease: "expo.out", stagger: 0.04, delay: 0.3 });
      } else {
        const tl = import_gsap.default.timeline({ defaults: { ease: "expo.out" } });
        if (document.querySelector(".page-hero")) tl.from(".page-hero", { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "expo.inOut" });
        tl.from(".page-hero .line > span, .thanks .line > span", { yPercent: 110, duration: 1.1, stagger: 0.08 }, 0.35).from(".page-hero-side > *, .thanks .next-list li, .thanks .row-actions", { y: 24, opacity: 0, duration: 0.8, stagger: 0.07 }, 0.6);
      }
      steps2();
      revealOnce();
      bars();
      if (fine) cleanups.push(magnetic());
      return () => {
        cleanups.splice(0).forEach((f) => f && f());
      };
    });
    document.documentElement.classList.add("js-ready");
    const fontsReady = document.fonts?.ready.then(() => ScrollTrigger2.refresh());
    return () => mm.revert();
  }, [page]);
}

// src/App.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var pick = (name) => {
  try {
    sessionStorage.setItem("ws-service", name);
  } catch {
  }
};
function App({ page = "home" }) {
  useSiteMotion(page);
  const body = {
    home: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Home, { onPick: pick }),
    portfolio: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Portfolio, {}),
    services: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ServicesPage, { onPick: pick }),
    performance: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PerformancePage, {}),
    about: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AboutPage, {}),
    contact: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ContactPage, {}),
    "thank-you": /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ThankYouPage, {})
  }[page];
  const showContact = !["contact", "thank-you"].includes(page);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "site page-" + page, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { className: "skip", href: "#main", children: "Skip to content" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Header, { page }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("main", { id: "main", children: body }),
    showContact && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Contact, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Footer, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(WhatsAppButton, {})
  ] });
}

// src/server.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var render = (page, base = "", rel = false) => {
  setUrlConfig(base, rel);
  return (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_runtime8.jsx)(App, { page }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  render
});
/*! Bundled license information:

gsap/dist/gsap.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
