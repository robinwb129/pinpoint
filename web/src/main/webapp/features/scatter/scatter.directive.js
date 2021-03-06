(function() {
	"use strict";
	/**
	 * (en)scatterDirective 
	 * @ko scatterDirective
	 * @group Directive
	 * @name scatterDirective
	 * @class
	 */
	pinpointApp.constant("scatterDirectiveConfig", {
		template: "<div id='scatter'></div>",
	    get: {
	        scatterData: "/getScatterData.pinpoint",
	        lastScatterData: "/getLastScatterData.pinpoint"
	    },
	    useIntervalForFetching: false,
	    nFetchingInterval: 2000,
	    nFetchLimit: 5000,
	    options: {
	        sContainerId: "",
	        nWidth: 400,
	        nHeight: 250,
	        nXMin: 0, nXMax: 1000,
	        nYMin: 0, nYMax: 10000,
	        nZMin: 0, nZMax: 5,
	        nBubbleSize: 3,
	        sXLabel: "",
	        sYLabel: "(ms)",
	        sTitle: "",
	        "htGuideLine": {
	            "nLineWidth": 1,
	            "aLineDash": [1, 0],
	            "nGlobalAlpha": 1,
	            "sLineColor" : "#e3e3e3"
	        },
	        htTypeAndColor: {
	            "Success": "#2ca02c",
	            "Failed": "#d62728"
	        },
	        htOption: {
	            headers: {
	                accept: "application/json"
	            },
	            dataType: "json"
	        },
	        index: {
	            x: 0,
	            y: 1,
	            transactionId: 2,
	            type: 3
	        },
	        type: {
	            "0": "Failed",
	            "1": "Success"
	        },
	        "htCheckBoxImage": {
	            "checked" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODk0MjRENUI2Qjk2MTFFM0E3NkNCRkIyQTkxMjZFQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODk0MjRENUM2Qjk2MTFFM0E3NkNCRkIyQTkxMjZFQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OTQyNEQ1OTZCOTYxMUUzQTc2Q0JGQjJBOTEyNkVCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OTQyNEQ1QTZCOTYxMUUzQTc2Q0JGQjJBOTEyNkVCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkJ02akAAAEfSURBVHjalJI/aoRQEMbnrU8RRVYsBAXJASxEtLGRXEDIJXKTpPcOHiDl1gsp1QvEIiD2AbGLmpm3f7Is68YMjOOb9/0Y/Rg2zzPEcTzDP6IsS7Y5QXTAsibFIH4BQVVVi1Mcx9liyTFN13W/+JpPI0iSpL1hGEHf9+E0TSBAxtifkGVZgSzLgBkMwwCbNZNOEIVpmo3v+78gigLMt+O/3IR0XW/yPH/uuu4AEqQoComeSIznhyUoDMP3cRwPoKZpLyjaqqoKJOacfy5B6Mc39QRYFMUrOtbQO4lt24Z70BlMkqSkSxJdmrMEiYiiSGwOrh6v6/oxTdMP6lGlM/Wv3RYMPY55hrMs292DKNn1kqOb4HketG0L5N5CsB8BBgCZjoUNsxfiYwAAAABJRU5ErkJggg==",
	            "unchecked" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQxQ0ZERUQ2Qjk2MTFFMzg5MjNGMjAzRjdCQ0FEMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQxQ0ZERUU2Qjk2MTFFMzg5MjNGMjAzRjdCQ0FEMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDFDRkRFQjZCOTYxMUUzODkyM0YyMDNGN0JDQUQyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDFDRkRFQzZCOTYxMUUzODkyM0YyMDNGN0JDQUQyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq1+Js8AAABTSURBVHjaYvz//z+DiYnJfwYSwJkzZxgZjY2NYZoYidQHVs9Eoia4WhY0JxDUBfQWA7KNRGlCVsfEQCYY1UhLjf9hEUtEAgAnOUZyEjlIH0CAAQDn/BlKI9rDJAAAAABJRU5ErkJggg=="
	        },
	        "sConfigImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTI2NzMzRDI2QTlGMTFFM0E1RENBRjZGODkwRDBCMEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTI2NzMzRDM2QTlGMTFFM0E1RENBRjZGODkwRDBCMEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjY3MzNEMDZBOUYxMUUzQTVEQ0FGNkY4OTBEMEIwQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjY3MzNEMTZBOUYxMUUzQTVEQ0FGNkY4OTBEMEIwQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn/ejkcAAAFwSURBVHjanFKxSsNQFE2CFEtaTNsMCbSQ4lA6GSghi2igo/o/GVz6AfmD/EFGJ7cKDiVLO0hFEByzpG1EA5LUxntC80jFKhi4LzfnnnPfzXmPz7KM+9ezT6iq6gnF+T4Nny88/110VK1WbwRB4OM4vgyC4PVXIQlW9JqRwGo2mzm2XC65zWYzplSnBo1CeFDu1Ov1XhaLhVWpVBimKAqXJInVarWmJGQ42xHjybIcQSSK4rNt29cgOI5jR1Gkk5gLw1DC2LkvWGBCu90eDwaDDOF53hXhhwjf908LHByYBo2ArqZpfnY6HbEYw3XdJ5riAzEajR4LHJxut6syhyhq5c6apt1hdER5EnCIKzFzqPM7fUwkSZrhf+r1+lmaphFqjUZuJIeaYRgT4q7ZqFvxmn7+GAQYBDcRyIGhBs6PN4dyjKLP5/OL4XA4RSAHhlpZs3OO1PF+W3ggwxQ6u7d+v3+7s9Nfd3VrQm3fXf0SYADyptv3yy4A0QAAAABJRU5ErkJggg==",
	        "sDownloadImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU3MjQyMUQ2QTlGMTFFM0IxRTY4MjI3MUU5MUUyMzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU3MjQyMUU2QTlGMTFFM0IxRTY4MjI3MUU5MUUyMzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRTcyNDIxQjZBOUYxMUUzQjFFNjgyMjcxRTkxRTIzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRTcyNDIxQzZBOUYxMUUzQjFFNjgyMjcxRTkxRTIzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlnySxAAAADPSURBVHjaxFLBDYMwDLQjMgEf4M8E4Y0YgzHaTTpGFuDfARAdoH3DiwmQSLmqRIZSpPLpSTH4krOjc9g5R0cQIDDzgozj2Ffrum6xOTcKtqolSUJCuNlR0UH8WTiZcpPGzEaB3xVWVXVO0/QhOeTgP1rKOU7/QdM0RZ7nd2OMwxc5eHkeixEm+71aKUVhGJLWmoZhoL7vaRxHX7xtW/ZzlHOTgDiKIirL8oTcWnuZ914dsyzbfXfoCuAmdV3z15ezBgRr8Nuc4ocRXhGeAgwAFHJVgfQ6KdUAAAAASUVORK5CYII=",
	        "sFullScreenImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkMwOTc3QTg2QTlGMTFFMzk5MzhBOTM4OEFCMzg3MTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkMwOTc3QTk2QTlGMTFFMzk5MzhBOTM4OEFCMzg3MTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQzA5NzdBNjZBOUYxMUUzOTkzOEE5Mzg4QUIzODcxNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQzA5NzdBNzZBOUYxMUUzOTkzOEE5Mzg4QUIzODcxNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvZjiPIAAAE/SURBVHjanFKxaoRAEHXhbM4UopViGWzv0C5VUvsJqdP7A/6Dfb7DMmCVSuRCunClaKUYSKUQM2+zY1SsMjDuuDtv9u3ME9M0af+xAz6u687opmnENslxnFX1uq6FhhvDMKRluofvVeczuMr9vREmhMhRmRy/F3IukhOjM7Mh4B9VNkqQq67rR9u25VnbtsdxHPkZ6zcWRfFAN2qGYVzx3/e9X1XVC2LLsnzTNK8MQK5kCL4AwcqylPTiOH4m8C1igNI0fUIcBEGu3rwGRlFkK3qvRM9XtD+I9h3iLMvaXaDneRdF78T0cHPXdW+Iif6ZgavmALClB9q0nBRw3RyMAa0mWnJzGIbvJEneOeb9hRgEK0e2mjtG9kX+qeJH8hs163lkh2UlVWAruYIlp8ShzeNYqEQqaE9ym638R4ABADZiqF446UJLAAAAAElFTkSuQmCC"
	    }
	});
	
	pinpointApp.directive("scatterDirective", ["scatterDirectiveConfig", "$rootScope", "$compile", "$timeout", "webStorage", "$window", "TooltipService", "AnalyticsService", "CONST_SET",
        function (cfg, $rootScope, $compile, $timeout, webStorage, $window, tooltipService, analyticsService, CONST_SET) {
            return {
                template: cfg.template,
                restrict: "EA",
                replace: true,
                link: function (scope, element, attrs) {
					var oNavbarVoService = null, htScatterSet = {}, htLastNode = null;

                    function makeScatter(target, application, w, h, scatterData) {
						var start = oNavbarVoService.getQueryStartTime();
						var end = oNavbarVoService.getQueryEndTime();
						var filter = oNavbarVoService.getFilter();
						var applicationName = application.split("^")[0];
						var options = {};
                        angular.copy(cfg.options, options);
                        options.sPrefix = "bigscatterchart-" + parseInt( Math.random() * 100000 ) + "-";
                        options.sContainerId = target;
                        options.nWidth = w ? w : 400;
                        options.nHeight = h ? h : 250;
                        options.nXMin = start;
                        options.nXMax = end;
                        options.fOnSelect = function (htPosition, htXY) {
                            var token = application + "|" + htXY.nXFrom + "|" + htXY.nXTo + "|" + htXY.nYFrom + "|" + htXY.nYTo;
                            $window.open("#/transactionList/" + oNavbarVoService.getPartialURL( true, false ), token);
                        };
                        options.fFullScreenMode = function () {
                            $window.open( "#/scatterFullScreenMode/" + htLastNode.applicationName + "@" + htLastNode.serviceType + "/" + oNavbarVoService.getPartialURL( false, true ) + "/" + getAgentList().join(","), "width=900, height=700, resizable=yes");
                        };

                        var oScatterChart = new BigScatterChart(options, getAgentList(scatterData), tooltipService, webStorage, analyticsService, CONST_SET);
                        $timeout(function () {
                            if (angular.isUndefined(scatterData)) {
                                oScatterChart.drawWithDataSource(getDataSource(applicationName, start, end, filter));
                            } else {
                                oScatterChart.addBubbleAndMoveAndDraw(scatterData.scatter, scatterData.resultFrom);
                            }
                            $window.htoScatter[application] = oScatterChart;
                        }, 100);

                        return oScatterChart;
                    }
                    function showScatter (application, w, h) {
                        element.children().hide();
                        pauseScatterAll();
                        if (angular.isDefined(htScatterSet[application])) {
                            htScatterSet[application].target.show();
                            htScatterSet[application].scatter.resume();
							htScatterSet[application].scatter.selectAgent(CONST_SET.AGENT_ALL, true);
                        } else {
							makeNewScatter( application, w, h );
                        }
                    }
					function showScatterWithData(application, w, h, data) {
						if (angular.isDefined(htScatterSet[application])) {
							htScatterSet[application].scatter.addBubbleAndMoveAndDraw(data.scatter, data.resultFrom);
						} else {
							makeNewScatter(application, w, h, data).hide();
						}
					}
					function makeNewScatter( application, w, h, data ) {
						var target = angular.element( cfg.template );
						var oScatter = makeScatter(target, application, w, h, data);
						htScatterSet[application] = {
						    target : target,
						    scatter : oScatter
						};
						element.append( target );
						return target;
					}

					function showScatterBy(application) {
                        element.children().hide();
                        if (angular.isDefined(htScatterSet[application])) {
                            htScatterSet[application].target.show();
							htScatterSet[application].scatter.selectAgent(CONST_SET.AGENT_ALL, true);
                        }
                    }


                    function pauseScatterAll() {
                        angular.forEach(htScatterSet, function (scatterSet, key) {
                            scatterSet.scatter.pause();
                        });
                    };
					function getDataSource(application, from, to, filter) {
						var bDrawOnceAll = false;
						var htDataSource = {
							sUrl: function (nFetchIndex) {
								return cfg.get.scatterData;
							},
							htParam: function (nFetchIndex, htLastFetchedData) {
								// calculate parameter
								var htData = {
									"v": 3,
									"to": nFetchIndex === 0 ? to : htLastFetchedData.resultFrom - 1,
									"from": from,
									"limit": cfg.nFetchLimit,
									"application": application
								};
								if (filter) {
									htData.filter = filter;
								}
								return htData;
							},
							nFetch: function (htLastFetchedData) {
								if (htLastFetchedData.resultFrom - 1 > from) {
									if (cfg.useIntervalForFetching) {
										bDrawOnceAll = true;
										return cfg.nFetchingInterval;
									}
									// TO THE NEXT
									return 0;
								}

								// STOP
								return -1;
							},
							htOption: {
								headers: {
									accept: "application/json"
								},
								dataType: "json"
							},
							index: {
								x: 0,
								y: 1,
								transactionId: 2,
								type: 3
							},
							type: {
								"0": "Failed",
								"1": "Success"
							}
						};
						return htDataSource;
					}
					function initScatterHash() {
						for (var p in htScatterSet) {
							htScatterSet[p].scatter.abortAjax();
						}
						htScatterSet = {};
					}
					function getAgentList( scatterData ) {
						var aAgentList = [], server;
						if ( typeof scatterData !== "undefined" ) {
							for( server in scatterData.scatter ) {
								aAgentList.push( server );
							}
							return aAgentList;
						}
						if ( htLastNode.agentList ) {
							return htLastNode.agentList;
						}

						if ( htLastNode.serverList ) {
							for ( server in htLastNode.serverList ) {
								var oInstanceList = htLastNode.serverList[server].instanceList;
								for (var agentName in oInstanceList) {
									aAgentList.push(oInstanceList[agentName].name);
								}
							}
						}
						return aAgentList;
					}

					scope.$on("scatterDirective.initialize", function (event, navbarVoService) {
                        oNavbarVoService = navbarVoService;
						initScatterHash();
                        element.empty();
                    });
                    scope.$on("scatterDirective.initializeWithNode", function (event, node, w, h) {
						scope.currentAgent = CONST_SET.AGENT_ALL;
						htLastNode = node;
                        showScatter(node.key, w, h);
                    });
                    scope.$on("scatterDirective.initializeWithData", function (event, application, data) {
						var aSplit = application.split("^");
                        htLastNode = {
                            applicationName: aSplit[0],
							serviceType: aSplit[1],
							key: application
                        };
                        showScatterWithData(application, null, null, data);
                    });
                    scope.$on("scatterDirective.showByNode", function (event, node) {
                        htLastNode = node;
                        showScatterBy(node.key);
                    });
                    scope.$on("responseTimeChartDirective.showErrorTransacitonList", function() {
                    	$window.htoScatter[htLastNode.key].selectFailedOnly().fireDragEvent({
							animate: function() {},
							css : function( param ) {
								return ( param === "left" ) ? "51px" : "40px";
							},
							width: function() {
								return 320;
							},
							height: function() {
								return 200;
							}
						});
                    });
					scope.$on("changedCurrentAgent", function( event, selectedAgentName ) {
						htScatterSet[htLastNode.key].scatter.selectAgent( selectedAgentName );
					});
                }
            };
        } 
    ]);
})();