(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{21:function(module,exports,__webpack_require__){"use strict";eval('\r\nfunction sw2() {\r\n    if (navigator.serviceWorker.controller) {\r\n        console.log("[PWA Builder] active service worker found, no need to register");\r\n    }\r\n    else {\r\n        navigator.serviceWorker\r\n            .register("sw2.js", {\r\n            scope: "."\r\n        })\r\n            .then(function (reg) {\r\n            console.log("Service worker has been registered for scope:" + reg.scope);\r\n        });\r\n    }\r\n}\r\nsw2();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi9yZWdpc3RlclNlcnZpY2VXb3JrZXIudHM/OTNhMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxHQUFHO0lBSVgsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUNWLGdFQUFnRSxDQUNoRSxDQUFDO0tBQ0Y7U0FBTTtRQUVOLFNBQVMsQ0FBQyxhQUFhO2FBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxFQUFFLEdBQUc7U0FDVixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQVMsR0FBRztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUNWLCtDQUErQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQzNELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0YsQ0FBQztBQUVELEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3cyKCkge1xyXG5cdC8vVGhpcyBpcyB0aGUgXCJPZmZsaW5lIGNvcHkgb2YgcGFnZXNcIiBzZXJ2aWNlIHdvcmtlclxyXG5cclxuXHQvL0FkZCB0aGlzIGJlbG93IGNvbnRlbnQgdG8geW91ciBIVE1MIHBhZ2UsIG9yIGFkZCB0aGUganMgZmlsZSB0byB5b3VyIHBhZ2UgYXQgdGhlIHZlcnkgdG9wIHRvIHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXHJcblx0aWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcclxuXHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcIltQV0EgQnVpbGRlcl0gYWN0aXZlIHNlcnZpY2Ugd29ya2VyIGZvdW5kLCBubyBuZWVkIHRvIHJlZ2lzdGVyXCJcclxuXHRcdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vUmVnaXN0ZXIgdGhlIFNlcnZpY2VXb3JrZXJcclxuXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcblx0XHRcdC5yZWdpc3RlcihcInN3Mi5qc1wiLCB7XHJcblx0XHRcdFx0c2NvcGU6IFwiLlwiXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlZykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0XCJTZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiByZWdpc3RlcmVkIGZvciBzY29wZTpcIiArIHJlZy5zY29wZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuc3cyKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n')}},[[21,0]]]);