"use strict";function o(r,e){const t=r;let i=e;this.getId=()=>t,this.getTimeoutId=()=>i,this.updateTimeoutId=u=>{i=u}}function c(){const r=[];this.updateRegistry=(e,t)=>{this.getRegistryItem(e).updateTimeoutId(t)},this.getRegistryItem=e=>{let[t]=r.filter(i=>i.getId()===e);return t||(t=new o(e,0),r.push(t)),t}}function g(){const r=new c;function e(t,i,u){const n=r.getRegistryItem(u);clearTimeout(n.getTimeoutId());const s=setTimeout(()=>{t()},i);n.updateTimeoutId(s)}return e}const m=g();exports.Debouncer=m;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRiOTFmN2YuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvanMvRGVib3VuY2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGVib3VuY2UgcmVnaXN0cnkgaXRlbS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbUlkICAgIGl0ZW0gaWRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0SWQgdGltZW91dCBpZFxuICogQGZ1bmN0aW9uIE9iamVjdCgpIHsgW25hdGl2ZSBjb2RlXSB9XG4gKi9cbmZ1bmN0aW9uIERlYm91bmNlUmVnaXN0cnlJdGVtKGl0ZW1JZCwgdGltZW91dElkKSB7XG5cdC8qKlxuXHQgKiBJdGVtIGlkLlxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0Y29uc3QgX2l0ZW1JZCA9IGl0ZW1JZDtcblxuXHQvKipcblx0ICogVGltZW91dCBvcGVyYXRpb24gaWRcblx0ICpcblx0ICogQHR5cGUge251bWJlcn1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdGxldCBfdGltZW91dElkID0gdGltZW91dElkO1xuXG5cdC8qKlxuXHQgKiBJdGVtIGlkLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IGlkXG5cdCAqL1xuXHR0aGlzLmdldElkID0gKCkgPT4gX2l0ZW1JZDtcblxuXHQvKipcblx0ICogVGltZW91dCBvcGVyYXRpb24gaWQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge251bWJlcn0gaWRcblx0ICovXG5cdHRoaXMuZ2V0VGltZW91dElkID0gKCkgPT4gX3RpbWVvdXRJZDtcblxuXHQvKipcblx0ICogVXBkYXRlIHRpbWVvdXQgaWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0SWQgdGltZW91dCBpZFxuXHQgKi9cblx0dGhpcy51cGRhdGVUaW1lb3V0SWQgPSAodElkKSA9PiB7XG5cdFx0X3RpbWVvdXRJZCA9IHRJZDtcblx0fTtcbn1cblxuLyoqXG4gKiBEZWJvdW5jZSByZWdpc3RyeS5cbiAqXG4gKiBAZnVuY3Rpb24gT2JqZWN0KCkgeyBbbmF0aXZlIGNvZGVdIH1cbiAqL1xuZnVuY3Rpb24gRGVib3VuY2VSZWdpc3RyeSgpIHtcblx0LyoqXG5cdCAqIFJlZ2lzdGVyZWQgaXRlbXMuXG5cdCAqXG5cdCAqIEB0eXBlIHtBcnJheTxEZWJvdW5jZVJlZ2lzdHJ5SXRlbT59XG5cdCAqL1xuXHRjb25zdCByZWdpc3RlcmVkSXRlbXMgPSBbXTtcblxuXHQvKipcblx0ICogVXBkYXRlIGFuIGl0ZW0gaW4gcmVnaXN0cnkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCAgICAgICAgcmVnaXN0cnkgaWRcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXRJZCB0aW1lb3V0IGlkXG5cdCAqL1xuXHR0aGlzLnVwZGF0ZVJlZ2lzdHJ5ID0gKGlkLCB0aW1lb3V0SWQpID0+IHtcblx0XHRjb25zdCB0YXJnZXRSZWdpc3RyeUl0ZW0gPSB0aGlzLmdldFJlZ2lzdHJ5SXRlbShpZCk7XG5cblx0XHR0YXJnZXRSZWdpc3RyeUl0ZW0udXBkYXRlVGltZW91dElkKHRpbWVvdXRJZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldCB0YXJnZXQgcmVnaXN0cnkgaXRlbS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIHJlZ2lzdHJ5IGlkXG5cdCAqIEByZXR1cm4ge0RlYm91bmNlUmVnaXN0cnlJdGVtfSByZWdpc3RyeSBpdGVtXG5cdCAqL1xuXHR0aGlzLmdldFJlZ2lzdHJ5SXRlbSA9IChpZCkgPT4ge1xuXHRcdGxldCBbdGFyZ2V0UmVnaXN0cnlJdGVtXSA9IHJlZ2lzdGVyZWRJdGVtcy5maWx0ZXIoKHJJdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gckl0ZW0uZ2V0SWQoKSA9PT0gaWQ7XG5cdFx0fSk7XG5cblx0XHQvKipcblx0XHQgKiBDcmVhdGUgbmV3IHJlZ2lzdHJ5IGl0ZW0gZm9yIG5vbi1leGlzdGVudCBvbmVzLlxuXHRcdCAqL1xuXHRcdGlmICghdGFyZ2V0UmVnaXN0cnlJdGVtKSB7XG5cdFx0XHR0YXJnZXRSZWdpc3RyeUl0ZW0gPSBuZXcgRGVib3VuY2VSZWdpc3RyeUl0ZW0oaWQsIDApO1xuXHRcdFx0cmVnaXN0ZXJlZEl0ZW1zLnB1c2godGFyZ2V0UmVnaXN0cnlJdGVtKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGFyZ2V0UmVnaXN0cnlJdGVtO1xuXHR9O1xufVxuXG4vKipcbiAqIERlYm91bmNlciBiYXNlIGNsYXNzLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBkZWJvdW5jZSBjbGllbnRcbiAqL1xuZnVuY3Rpb24gRGVib3VuY2VyKCkge1xuXHRjb25zdCByZWdpc3RyeSA9IG5ldyBEZWJvdW5jZVJlZ2lzdHJ5KCk7XG5cblx0LyoqXG5cdCAqIERlYm91bmNlIGNsaWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgICAgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICogQHBhcmFtIHtudW1iZXJ9ICAgZGVib3VuY2VMZW5ndGggZGVib3VuY2UgbGVuZ3RoIGluIG1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSAgIGRlYm91bmNlSWQgICAgIGRlYm91bmNlIG9wZXJhdGlvbiBpZFxuXHQgKiBAZnVuY3Rpb24gT2JqZWN0KCkgeyBbbmF0aXZlIGNvZGVdIH1cblx0ICovXG5cdGZ1bmN0aW9uIERlYm91bmNlQ2xpZW50KGNhbGxiYWNrLCBkZWJvdW5jZUxlbmd0aCwgZGVib3VuY2VJZCkge1xuXHRcdGNvbnN0IGRlYm91bmNlSXRlbSA9IHJlZ2lzdHJ5LmdldFJlZ2lzdHJ5SXRlbShkZWJvdW5jZUlkKTtcblxuXHRcdGNsZWFyVGltZW91dChkZWJvdW5jZUl0ZW0uZ2V0VGltZW91dElkKCkpO1xuXHRcdGNvbnN0IGN1cnJlbnRUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fSwgZGVib3VuY2VMZW5ndGgpO1xuXG5cdFx0ZGVib3VuY2VJdGVtLnVwZGF0ZVRpbWVvdXRJZChjdXJyZW50VGltZW91dElkKTtcblx0fVxuXG5cdHJldHVybiBEZWJvdW5jZUNsaWVudDtcbn1cblxuLyoqXG4gKiBAbW9kdWxlIERlYm91bmNlclxuICovXG5leHBvcnQgZGVmYXVsdCBEZWJvdW5jZXIoKTtcbiJdLCJuYW1lcyI6WyJEZWJvdW5jZVJlZ2lzdHJ5SXRlbSIsIml0ZW1JZCIsInRpbWVvdXRJZCIsIl9pdGVtSWQiLCJfdGltZW91dElkIiwidElkIiwiRGVib3VuY2VSZWdpc3RyeSIsInJlZ2lzdGVyZWRJdGVtcyIsImlkIiwidGFyZ2V0UmVnaXN0cnlJdGVtIiwickl0ZW0iLCJEZWJvdW5jZXIiLCJyZWdpc3RyeSIsIkRlYm91bmNlQ2xpZW50IiwiY2FsbGJhY2siLCJkZWJvdW5jZUxlbmd0aCIsImRlYm91bmNlSWQiLCJkZWJvdW5jZUl0ZW0iLCJjdXJyZW50VGltZW91dElkIiwiRGVib3VuY2VyJDEiXSwibWFwcGluZ3MiOiJhQU9BLFNBQVNBLEVBQXFCQyxFQUFRQyxFQUFXLENBT2hELE1BQU1DLEVBQVVGLEVBUWhCLElBQUlHLEVBQWFGLEVBT2pCLEtBQUssTUFBUSxJQUFNQyxFQU9uQixLQUFLLGFBQWUsSUFBTUMsRUFPMUIsS0FBSyxnQkFBbUJDLEdBQVEsQ0FDL0JELEVBQWFDLENBQ2YsQ0FDQSxDQU9BLFNBQVNDLEdBQW1CLENBTTNCLE1BQU1DLEVBQWtCLENBQUEsRUFReEIsS0FBSyxlQUFpQixDQUFDQyxFQUFJTixJQUFjLENBQ2IsS0FBSyxnQkFBZ0JNLENBQUUsRUFFL0IsZ0JBQWdCTixDQUFTLENBQzlDLEVBUUMsS0FBSyxnQkFBbUJNLEdBQU8sQ0FDOUIsR0FBSSxDQUFDQyxDQUFrQixFQUFJRixFQUFnQixPQUFRRyxHQUMzQ0EsRUFBTSxNQUFPLElBQUtGLENBQ3pCLEVBS0QsT0FBS0MsSUFDSkEsRUFBcUIsSUFBSVQsRUFBcUJRLEVBQUksQ0FBQyxFQUNuREQsRUFBZ0IsS0FBS0UsQ0FBa0IsR0FHakNBLENBQ1QsQ0FDQSxDQU9BLFNBQVNFLEdBQVksQ0FDcEIsTUFBTUMsRUFBVyxJQUFJTixFQVVyQixTQUFTTyxFQUFlQyxFQUFVQyxFQUFnQkMsRUFBWSxDQUM3RCxNQUFNQyxFQUFlTCxFQUFTLGdCQUFnQkksQ0FBVSxFQUV4RCxhQUFhQyxFQUFhLGFBQVksQ0FBRSxFQUN4QyxNQUFNQyxFQUFtQixXQUFXLElBQU0sQ0FDekNKLEdBQ0EsRUFBRUMsQ0FBYyxFQUVqQkUsRUFBYSxnQkFBZ0JDLENBQWdCLENBQzdDLENBRUQsT0FBT0wsQ0FDUixDQUtBLE1BQUFNLEVBQWVSLEVBQVcifQ==