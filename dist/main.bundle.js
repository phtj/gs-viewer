webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  font-family: 'Open Sans', sans-serif;\r\n  text-align: justify;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n#appdiv {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  overflow: hidden;\r\n}\r\n\r\na { text-decoration: none; color: #fff; text-transform: uppercase; }\r\n.toolbar { background-color: #333; }\r\n.toolbar ul { list-style: none; overflow: hidden; margin-bottom: 0px; z-index: 1; }\r\n.toolbar div > ul > li { display:inline-block; float: left; }\r\n.toolbar div > ul > li:hover { background-color: #fff; }\r\n.toolbar div > ul > li:hover a { color: #333; }\r\n.toolbar div > ul > li > a { \r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  display: block; float: left;\r\n  padding: 0 16px;\r\n}\r\n/**\r\n * Carets\r\n */\r\n.toolbar div ul li i.icon-sort { display: none; }\r\n.toolbar div ul li:hover i.icon-sort { display: inline; }\r\n.toolbar div ul li:hover i.icon-caret-down { display: none; }\r\n.toolbar .dropdown i {\r\n  margin: 0px;\r\n}\r\n.toolbar div > ul > li > a:hover {\r\n  background-color: #fff; \r\n  color: #333\r\n} \r\n.dropdown { float: left; }\r\n/**\r\n * Sub navigaton\r\n **/\r\n.sub { \r\n  min-width: 180px; margin: 20px;\r\n  display: none; position: absolute; \r\n  border-left: 1px solid #ebebeb;\r\n  border-right: 1px solid #ebebeb;\r\n  border-bottom: 1px solid #ebebeb\r\n}\r\n.sub li a { \r\n  display: block; \r\n  background-color: #fff;\r\n  color: #333 !important;\r\n  border-left: 4px solid #fff;\r\n  padding: 4px 12px;\r\n  font-size: 12px;\r\n  line-height: 26px;\r\n}\r\n.sub li a:hover { \r\n  border-left: 4px solid #ff0000;\r\n  float: top;\r\n}\r\n.toolbar div > ul > li:hover .sub { display: block; }\r\n.sub li a { transition: all .5s linear ; overflow: hidden; }\r\n\r\n#toolwindow {\r\n    position: relative;\r\n    background-color: slategrey;\r\n}\r\n\r\n.sidebar {\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    height: 100%;\r\n}\r\n\r\n.tool-form {\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    color: white;\r\n}\r\n.tool-form-heading{ \r\n    border-bottom: 2px solid #ddd;\r\n    margin: 0px;\r\n    padding-bottom: 3px;\r\n}\r\n.tool-form label{\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    color:black;\r\n    display: block;\r\n    margin: 0px 0px 15px 0px;\r\n}\r\n.tool-form label > span{\r\n    width: 150px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 13px;\r\n    float: left;\r\n    padding-top: 4px;\r\n    padding-right: 5px;\r\n}\r\n.tool-form span.required{\r\n    color:red;\r\n}\r\n.tool-form .tel-number-field{\r\n    width: 30px;\r\n    text-align: center;\r\n}\r\n.tool-form input.input-field{\r\n    width: 30px;\r\n}\r\n.tool-form input.file-input-field{\r\n    border: 1px solid #ccc;\r\n    height: 20px;\r\n    display: inline-block;\r\n    padding: 6px 6px;\r\n    cursor: pointer; \r\n    background-color: #888888;\r\n}\r\n.tool-form input.input-field, \r\n.tool-form .tel-number-field, \r\n.tool-form .textarea-field, \r\n.tool-form .select-field{\r\n   height: 20px;\r\n   overflow: hidden;\r\n   width: 240px;\r\n   background-color: #888888;\r\n   border-radius: 5px;\r\n   color: #ffffff;\r\n}\r\n.tool-form .input-field:focus, \r\n.tool-form .tel-number-field:focus, \r\n.tool-form .textarea-field:focus,  \r\n.tool-form .select-field:focus{\r\n    border: 1px solid #0C0;\r\n}\r\n.tool-form .textarea-field{\r\n    height:100px;\r\n    width: 55%;\r\n}\r\n.tool-form input[type=submit],\r\n.tool-form input[type=button]{\r\n    height: 25px;\r\n    border: none;\r\n    padding: 2px 8px 2px 8px;\r\n    background: #444466;\r\n    color: #fff;\r\n    box-shadow: 1px 1px 4px #DADADA;\r\n    -moz-box-shadow: 1px 1px 4px #DADADA;\r\n    -webkit-box-shadow: 1px 1px 4px #DADADA;\r\n    border-radius: 3px;\r\n    -webkit-border-radius: 3px;\r\n    -moz-border-radius: 3px;\r\n    color: #ffffff;\r\n}\r\n.tool-form input[type=submit]:hover,\r\n.tool-form input[type=button]:hover{\r\n    background: #333377;\r\n    color: #fff;\r\n}\r\n\r\n.rightstyle {\r\n  width: 30px;\r\n  height: 100%;\r\n  float: right;\r\n  background: #FFFFFF;\r\n  background-repeat: repeat; \r\n  background-attachment: scroll; \r\n  overflow: auto; \r\n}\r\n\r\n.leftstyle {\r\n    background: #e6e6e6;\r\n    height: 100%;\r\n}\r\n\r\n.slider {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 30px solid transparent;\r\n    border-right: 10px solid black;\r\n    border-bottom: 30px solid transparent;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <!-- navigation bar -->\r\n  <!-- <nav class=\"toolbar\">\r\n    <div>\r\n      <ul>\r\n        <li class=\"dropdown\"><a href=\"#\">File <i class=\"icon-caret-down\"></i><i class=\"icon-sort\"></i></a>\r\n          <ul class=\"sub\">\r\n            <li><a href=\"#\" name=\"importers\">Open</a></li>\r\n            <li><a href=\"#\" name=\"exporters\">Save</a></li>\r\n            <li><a href=\"#\" name=\"exporters\">Export As ThreeJS</a></li>\r\n            <li><a href=\"#\" name=\"importers\">Import From CityGML</a></li>\r\n            <li><a href=\"#\">Exit</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n              <a href=\"#\">Wiki<i class=\"icon-caret-down\"></i><i class=\"icon-sort\"></i></a>\r\n              <ul class=\"sub\">\r\n              <li><a href=\"https://github.com/akiajk/gs-JSON\">SourceCode</a></li>\r\n              <li><a href=\"https://github.com/akiajk/gs-JSON\">Tutorial</a></li>\r\n              </ul>\r\n        </li>  \r\n        <li><a href=\"#\">About</a></li>\r\n        <li><a href=\"#\">Contact</a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n -->\r\n  <input type=\"file\" id=\"files\" name=\"files[]\" (change)=\"handleFileSelect($event)\" />\r\n  <!-- gs-viewer demo -->\r\n  <gs-viewer [data]=\"gs_dummy_data\"></gs-viewer>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gs_json__ = __webpack_require__("../../../../gs-json/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // dummy gs_data
        // to pass to the viewer
        // gs.genModelTwoBoxesOpen();//gs.genModelTwoBoxesOpen();//gs.genModelPlanes();//
        this.gs_dummy_data = __WEBPACK_IMPORTED_MODULE_1_gs_json__["b" /* genModelClosedPolyline */]();
        this.test_data1 = {
            "metadata": {
                "filetype": "gs-json",
                "version": "0.1.8",
                "uuid": "02c96aa7-dd89-4a7c-87e8-022179fc5872"
            },
            "geom": {
                "points": [
                    [
                        1,
                        2,
                        3,
                        4,
                        null,
                        6,
                        null,
                        8,
                        9,
                        null,
                        11,
                        null,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        null,
                        61,
                        null,
                        63,
                        64,
                        null,
                        66,
                        null,
                        68,
                        69,
                        70,
                        71,
                        72,
                        73,
                        74,
                        75,
                        76,
                        77,
                        78,
                        79,
                        80,
                        81,
                        82,
                        83,
                        84,
                        85,
                        86,
                        87,
                        88,
                        89,
                        90,
                        91,
                        92,
                        93,
                        94,
                        95,
                        96,
                        97,
                        98,
                        99,
                        100,
                        101,
                        102,
                        70,
                        103,
                        104,
                        105,
                        106,
                        107,
                        108,
                        109,
                        110,
                        111,
                        112,
                        113,
                        null,
                        115,
                        null,
                        117,
                        118,
                        null,
                        120,
                        null,
                        122,
                        123,
                        124,
                        125,
                        124,
                        126,
                        127,
                        128,
                        129,
                        130,
                        131,
                        132,
                        133,
                        134,
                        135,
                        136,
                        137,
                        138,
                        139,
                        140,
                        141,
                        142,
                        143,
                        144,
                        145,
                        146,
                        147,
                        148,
                        149,
                        150,
                        151,
                        152,
                        153,
                        154,
                        155,
                        156,
                        157,
                        158,
                        159,
                        160,
                        161,
                        162,
                        163,
                        164,
                        165,
                        166,
                        167,
                        null,
                        169,
                        null,
                        171,
                        172,
                        null,
                        174,
                        null,
                        176,
                        177,
                        178,
                        179,
                        180,
                        181,
                        182,
                        183,
                        184,
                        185,
                        186,
                        187,
                        188,
                        189,
                        190,
                        191,
                        192,
                        193,
                        194,
                        195,
                        196,
                        197,
                        198,
                        199,
                        200,
                        201,
                        202,
                        203,
                        204,
                        205,
                        206,
                        207,
                        208,
                        209,
                        210,
                        178,
                        211,
                        212,
                        213,
                        214,
                        215,
                        216,
                        217,
                        218,
                        219,
                        220,
                        221,
                        null,
                        223,
                        null,
                        225,
                        226,
                        null,
                        228,
                        null,
                        230,
                        231,
                        232,
                        233,
                        234,
                        235,
                        236,
                        237,
                        238,
                        239,
                        240,
                        241,
                        242,
                        243,
                        244,
                        245,
                        246,
                        247,
                        248,
                        249,
                        250,
                        251,
                        252,
                        253,
                        254,
                        255,
                        256,
                        257,
                        258,
                        259,
                        260,
                        261,
                        262,
                        263,
                        264,
                        232,
                        265,
                        266,
                        267,
                        268,
                        269,
                        270,
                        271,
                        272,
                        273,
                        274,
                        275,
                        null,
                        277,
                        null,
                        279,
                        280,
                        null,
                        282,
                        null,
                        284,
                        285,
                        286,
                        287,
                        288,
                        289,
                        290,
                        291,
                        292,
                        293,
                        294,
                        295,
                        296,
                        297,
                        298,
                        299,
                        300,
                        301,
                        302,
                        303,
                        304,
                        305,
                        306,
                        307,
                        308,
                        309,
                        310,
                        311,
                        312,
                        313,
                        314,
                        315,
                        316,
                        317,
                        318,
                        319,
                        320,
                        321,
                        322,
                        323,
                        324,
                        325,
                        326,
                        327,
                        328,
                        329,
                        330,
                        null,
                        332,
                        null,
                        334,
                        335,
                        null,
                        337,
                        null,
                        339,
                        340,
                        341,
                        342,
                        343,
                        344,
                        345,
                        346,
                        347,
                        348,
                        349,
                        350,
                        351,
                        352,
                        353,
                        354,
                        355,
                        356,
                        357,
                        358,
                        359,
                        360,
                        361,
                        362,
                        363,
                        364,
                        365,
                        366,
                        367,
                        368,
                        369,
                        370,
                        371,
                        372,
                        373,
                        374,
                        375,
                        376,
                        377,
                        378,
                        379,
                        380,
                        381,
                        382,
                        383,
                        384,
                        385,
                        null,
                        387,
                        null,
                        389,
                        390,
                        null,
                        392,
                        null,
                        394,
                        395,
                        396,
                        397,
                        398,
                        399,
                        400,
                        401,
                        402,
                        403,
                        404,
                        405,
                        406,
                        407,
                        408,
                        409,
                        410,
                        411,
                        412,
                        413,
                        414,
                        415,
                        416,
                        417,
                        418,
                        419,
                        420,
                        421,
                        422,
                        423,
                        424,
                        425,
                        426,
                        427,
                        428,
                        396,
                        429,
                        430,
                        431,
                        432,
                        433,
                        434,
                        435,
                        436,
                        437,
                        438
                    ],
                    [
                        null,
                        [
                            0,
                            22.5,
                            22.5
                        ],
                        [
                            0,
                            -12.5,
                            10
                        ],
                        [
                            0,
                            -12.5,
                            0
                        ],
                        [
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            61.47114317029974,
                            0
                        ],
                        [
                            0,
                            -16.47114317029974,
                            -3.552713678800501e-15
                        ],
                        [
                            0,
                            -23.680339887498945,
                            -1.7763568394002505e-15
                        ],
                        [
                            0,
                            -1.3196601125010528,
                            -1.7763568394002505e-15
                        ],
                        [
                            0,
                            12.5,
                            0
                        ],
                        [
                            0,
                            -37.5,
                            3.061616997868383e-15
                        ],
                        [
                            0,
                            13.5,
                            0
                        ],
                        [
                            0,
                            -38.5,
                            3.184081677783118e-15
                        ],
                        [
                            0,
                            -1.98557158514987,
                            -1.7763568394002505e-15
                        ],
                        [
                            0,
                            6.090169943749474,
                            -8.881784197001252e-16
                        ],
                        [
                            -4.904734474995108,
                            11.644372063974135,
                            -1.7763568394002505e-15
                        ],
                        [
                            4.904734474995108,
                            11.644372063974135,
                            -1.7763568394002505e-15
                        ],
                        [
                            -4.9047344749951085,
                            11.644372063974139,
                            -1.7763568394002505e-15
                        ],
                        [
                            -7.345849660634137,
                            10.49923025195843,
                            -1.7763568394002505e-15
                        ],
                        [
                            -9.532440894890101,
                            8.92150660902882,
                            -1.7763568394002505e-15
                        ],
                        [
                            -11.388745690547275,
                            6.965867167617322,
                            -1.7763568394002505e-15
                        ],
                        [
                            -12.850445547583266,
                            4.700072241520733,
                            -1.7763568394002505e-15
                        ],
                        [
                            -13.866894503919307,
                            2.2026286208663066,
                            -1.7763568394002505e-15
                        ],
                        [
                            -14.40287395085825,
                            -0.43993058407936747,
                            -1.7763568394002505e-15
                        ],
                        [
                            -14.439812911182035,
                            -3.1360442004528126,
                            -1.7763568394002505e-15
                        ],
                        [
                            -13.97643149889027,
                            -5.7922954660386905,
                            -1.7763568394002505e-15
                        ],
                        [
                            -13.028785265553253,
                            -8.316648796225703,
                            -1.7763568394002505e-15
                        ],
                        [
                            -11.629708896737014,
                            -10.6216386949897,
                            -1.7763568394002505e-15
                        ],
                        [
                            -9.827678533681695,
                            -12.62740031836642,
                            -1.7763568394002505e-15
                        ],
                        [
                            -7.685132139278778,
                            -14.264436685407537,
                            -1.7763568394002505e-15
                        ],
                        [
                            -5.276306105439114,
                            -15.47602665642924,
                            -1.7763568394002505e-15
                        ],
                        [
                            -2.6846630605381305,
                            -16.22019024529962,
                            -1.7763568394002505e-15
                        ],
                        [
                            3.552713678800501e-15,
                            -16.471143170299744,
                            -1.7763568394002505e-15
                        ],
                        [
                            2.6846630605381323,
                            -16.22019024529962,
                            -1.7763568394002505e-15
                        ],
                        [
                            5.276306105439113,
                            -15.476026656429243,
                            -1.7763568394002505e-15
                        ],
                        [
                            7.685132139278779,
                            -14.264436685407539,
                            -1.7763568394002505e-15
                        ],
                        [
                            9.827678533681699,
                            -12.627400318366423,
                            -1.7763568394002505e-15
                        ],
                        [
                            11.629708896737014,
                            -10.621638694989706,
                            -1.7763568394002505e-15
                        ],
                        [
                            13.028785265553248,
                            -8.316648796225717,
                            -1.7763568394002505e-15
                        ],
                        [
                            13.976431498890268,
                            -5.792295466038703,
                            -1.7763568394002505e-15
                        ],
                        [
                            14.439812911182035,
                            -3.136044200452803,
                            -1.7763568394002505e-15
                        ],
                        [
                            14.402873950858249,
                            -0.43993058407936303,
                            -1.7763568394002505e-15
                        ],
                        [
                            13.866894503919308,
                            2.202628620866295,
                            -1.7763568394002505e-15
                        ],
                        [
                            12.850445547583261,
                            4.700072241520739,
                            -1.7763568394002505e-15
                        ],
                        [
                            11.388745690547271,
                            6.965867167617326,
                            -1.7763568394002505e-15
                        ],
                        [
                            9.532440894890097,
                            8.921506609028818,
                            -1.7763568394002505e-15
                        ],
                        [
                            7.34584966063414,
                            10.499230251958425,
                            -1.7763568394002505e-15
                        ],
                        [
                            4.904734474995102,
                            11.644372063974139,
                            -1.7763568394002505e-15
                        ],
                        [
                            -4.9047344749951085,
                            11.644372063974137,
                            -1.7763568394002505e-15
                        ],
                        [
                            -5.654253381075659,
                            10.879219971167036,
                            -1.7670777232270062e-15
                        ],
                        [
                            -6.285628290787386,
                            10.014002056947863,
                            -1.7394342591679785e-15
                        ],
                        [
                            -6.785666807183593,
                            9.066796800512094,
                            -1.6940040494453e-15
                        ],
                        [
                            -7.143920769440232,
                            8.057395782964218,
                            -1.6317363452104092e-15
                        ],
                        [
                            -7.35290456416799,
                            7.006890147929137,
                            -1.5539322122145586e-15
                        ],
                        [
                            -7.408251535148719,
                            5.937229908178903,
                            -1.4622173454145586e-15
                        ],
                        [
                            -7.308805223359823,
                            4.870765306435905,
                            -1.3585081005447404e-15
                        ],
                        [
                            -7.056643530852563,
                            3.8297798134864838,
                            -1.2449714524156636e-15
                        ],
                        [
                            -6.657035303586982,
                            2.836024521474949,
                            -1.1239797165993867e-15
                        ],
                        [
                            -6.118330240412627,
                            1.9102636610959944,
                            -9.980609805786495e-16
                        ],
                        [
                            0,
                            0,
                            3
                        ],
                        [
                            0,
                            63.05551750378732,
                            3
                        ],
                        [
                            0,
                            -18.05551750378732,
                            3.0000000000000036
                        ],
                        [
                            0,
                            -25.7664991614216,
                            2.9999999999999982
                        ],
                        [
                            0,
                            0.7664991614215992,
                            2.9999999999999982
                        ],
                        [
                            0,
                            12.319347291981714,
                            3
                        ],
                        [
                            0,
                            -37.319347291981714,
                            3.0000000000000013
                        ],
                        [
                            0,
                            13.326343140289918,
                            3
                        ],
                        [
                            0,
                            -38.326343140289914,
                            3.0000000000000067
                        ],
                        [
                            0,
                            -2.8680851059028036,
                            3.0000000000000018
                        ],
                        [
                            0,
                            7.046421150855759,
                            2.999999999999999
                        ],
                        [
                            -4.180514237983153,
                            11.732647873859971,
                            3.0000000000000018
                        ],
                        [
                            4.180514237983153,
                            11.732647873859971,
                            3.0000000000000018
                        ],
                        [
                            -4.180514237983154,
                            11.732647873859976,
                            3.0000000000000018
                        ],
                        [
                            -6.8742575664086605,
                            10.67453966741886,
                            3.0000000000000018
                        ],
                        [
                            -9.318377219397142,
                            9.124660569601732,
                            3.0000000000000018
                        ],
                        [
                            -11.424120320715359,
                            7.139291060612109,
                            3.0000000000000018
                        ],
                        [
                            -13.115021400834532,
                            4.7905255054264115,
                            3.0000000000000018
                        ],
                        [
                            -14.329679073737017,
                            2.163654204118699,
                            3.0000000000000018
                        ],
                        [
                            -15.02398569437481,
                            -0.6459337394263147,
                            3.0000000000000018
                        ],
                        [
                            -15.172729031630649,
                            -3.5362142648419663,
                            3.0000000000000018
                        ],
                        [
                            -14.770507795520286,
                            -6.402233136586676,
                            3.0000000000000018
                        ],
                        [
                            -13.831927773261725,
                            -9.13991712817374,
                            3.0000000000000018
                        ],
                        [
                            -12.391071451957695,
                            -11.649853214478167,
                            3.0000000000000018
                        ],
                        [
                            -10.500260387387264,
                            -13.840898538991791,
                            3.0000000000000018
                        ],
                        [
                            -8.228155260785531,
                            -15.633490067936703,
                            3.0000000000000018
                        ],
                        [
                            -5.657262615906833,
                            -16.962533748363963,
                            3.0000000000000018
                        ],
                        [
                            -2.8809388137791303,
                            -17.779768256760498,
                            3.0000000000000018
                        ],
                        [
                            -4.440892098500626e-15,
                            -18.05551750378732,
                            3.0000000000000018
                        ],
                        [
                            2.880938813779128,
                            -17.779768256760498,
                            3.0000000000000018
                        ],
                        [
                            5.657262615906831,
                            -16.962533748363967,
                            3.0000000000000018
                        ],
                        [
                            8.228155260785522,
                            -15.633490067936712,
                            3.0000000000000018
                        ],
                        [
                            10.500260387387257,
                            -13.8408985389918,
                            3.0000000000000018
                        ],
                        [
                            12.39107145195769,
                            -11.649853214478176,
                            3.0000000000000018
                        ],
                        [
                            13.831927773261718,
                            -9.13991712817376,
                            3.0000000000000018
                        ],
                        [
                            14.770507795520286,
                            -6.402233136586681,
                            3.0000000000000018
                        ],
                        [
                            15.172729031630649,
                            -3.536214264841969,
                            3.0000000000000018
                        ],
                        [
                            15.023985694374812,
                            -0.6459337394263311,
                            3.0000000000000018
                        ],
                        [
                            14.329679073737017,
                            2.163654204118698,
                            3.0000000000000018
                        ],
                        [
                            13.115021400834529,
                            4.790525505426415,
                            3.0000000000000018
                        ],
                        [
                            11.424120320715362,
                            7.139291060612106,
                            3.0000000000000018
                        ],
                        [
                            9.318377219397144,
                            9.12466056960173,
                            3.0000000000000018
                        ],
                        [
                            6.87425756640867,
                            10.674539667418852,
                            3.0000000000000018
                        ],
                        [
                            4.180514237983161,
                            11.732647873859971,
                            3.0000000000000018
                        ],
                        [
                            -4.816529384868654,
                            11.0761190152217,
                            3.0000000000000018
                        ],
                        [
                            -5.350498581574945,
                            10.334214502321627,
                            3.0000000000000018
                        ],
                        [
                            -5.771108828701352,
                            9.522652779896944,
                            3.0000000000000013
                        ],
                        [
                            -6.069448819185585,
                            8.658628093113908,
                            3.0000000000000013
                        ],
                        [
                            -6.239197738729058,
                            7.760446199727897,
                            3.000000000000001
                        ],
                        [
                            -6.276759182451296,
                            6.847136533055001,
                            3.000000000000001
                        ],
                        [
                            -6.181337350532871,
                            5.938049032708644,
                            3.0000000000000004
                        ],
                        [
                            -5.954953908519217,
                            5.052444184892921,
                            3
                        ],
                        [
                            -5.602405155072541,
                            4.209084957910821,
                            3
                        ],
                        [
                            -5.13116040464216,
                            3.4258392783922775,
                            2.9999999999999996
                        ],
                        [
                            0,
                            0,
                            6
                        ],
                        [
                            0,
                            64.3658572108586,
                            6
                        ],
                        [
                            0,
                            -19.365857210858593,
                            6.000000000000007
                        ],
                        [
                            0,
                            -26.95683229480096,
                            6.000000000000001
                        ],
                        [
                            0,
                            1.9568322948009609,
                            6.000000000000001
                        ],
                        [
                            0,
                            11.769322199023193,
                            6
                        ],
                        [
                            0,
                            -36.76932219902319,
                            6.0000000000000036
                        ],
                        [
                            0,
                            12.798221281347033,
                            6
                        ],
                        [
                            0,
                            -37.79822128134703,
                            6.0000000000000036
                        ],
                        [
                            0,
                            -3.7982675059177,
                            6.0000000000000036
                        ],
                        [
                            0,
                            7.377526788073997,
                            6
                        ],
                        [
                            -3.7228381389924676,
                            11.31762894160551,
                            6.0000000000000036
                        ],
                        [
                            3.7228381389924676,
                            11.31762894160551,
                            6.0000000000000036
                        ],
                        [
                            -6.557819694944979,
                            10.320686069683198,
                            6.0000000000000036
                        ],
                        [
                            -9.148428202664586,
                            8.79760922585738,
                            6.0000000000000036
                        ],
                        [
                            -11.398126256846059,
                            6.805154915846803,
                            6.0000000000000036
                        ],
                        [
                            -13.223080266955064,
                            4.41757070299594,
                            6.0000000000000036
                        ],
                        [
                            -14.555284463531528,
                            1.7238284192776785,
                            6.0000000000000036
                        ],
                        [
                            -15.345095090642817,
                            -1.1756913143626555,
                            6.0000000000000036
                        ],
                        [
                            -15.563080349390482,
                            -4.172939709046741,
                            6.0000000000000036
                        ],
                        [
                            -15.20111715548309,
                            -7.156226178483424,
                            6.0000000000000036
                        ],
                        [
                            -14.272693840890412,
                            -10.014380418791035,
                            6.0000000000000036
                        ],
                        [
                            -12.812407519591105,
                            -12.640895100321245,
                            6.0000000000000036
                        ],
                        [
                            -10.874674847764936,
                            -14.937894796665374,
                            6.0000000000000036
                        ],
                        [
                            -8.531704221144345,
                            -16.81978325118674,
                            6.0000000000000036
                        ],
                        [
                            -5.870804974322493,
                            -18.216433067973504,
                            6.0000000000000036
                        ],
                        [
                            -2.9911338530219975,
                            -19.075798965374343,
                            6.0000000000000036
                        ],
                        [
                            3.9968028886505635e-15,
                            -19.365857210858593,
                            6.0000000000000036
                        ],
                        [
                            2.9911338530219997,
                            -19.07579896537434,
                            6.0000000000000036
                        ],
                        [
                            5.870804974322496,
                            -18.216433067973504,
                            6.0000000000000036
                        ],
                        [
                            8.531704221144352,
                            -16.81978325118673,
                            6.0000000000000036
                        ],
                        [
                            10.874674847764929,
                            -14.937894796665383,
                            6.0000000000000036
                        ],
                        [
                            12.812407519591101,
                            -12.640895100321249,
                            6.0000000000000036
                        ],
                        [
                            14.272693840890412,
                            -10.014380418791031,
                            6.0000000000000036
                        ],
                        [
                            15.20111715548309,
                            -7.156226178483431,
                            6.0000000000000036
                        ],
                        [
                            15.563080349390482,
                            -4.172939709046732,
                            6.0000000000000036
                        ],
                        [
                            15.345095090642817,
                            -1.1756913143626404,
                            6.0000000000000036
                        ],
                        [
                            14.555284463531523,
                            1.7238284192776945,
                            6.0000000000000036
                        ],
                        [
                            13.223080266955058,
                            4.4175707029959455,
                            6.0000000000000036
                        ],
                        [
                            11.39812625684605,
                            6.805154915846812,
                            6.0000000000000036
                        ],
                        [
                            9.148428202664583,
                            8.797609225857382,
                            6.0000000000000036
                        ],
                        [
                            6.557819694944974,
                            10.320686069683202,
                            6.0000000000000036
                        ],
                        [
                            3.722838138992458,
                            11.317628941605513,
                            6.0000000000000036
                        ],
                        [
                            -3.7228381389924685,
                            11.31762894160551,
                            6.0000000000000036
                        ],
                        [
                            -4.274542799549424,
                            10.711025347278838,
                            6.0000000000000036
                        ],
                        [
                            -4.728439860130299,
                            10.028146579468368,
                            6.0000000000000036
                        ],
                        [
                            -5.074143512424484,
                            9.284617872611152,
                            6.0000000000000036
                        ],
                        [
                            -5.30374356670656,
                            8.497452217743021,
                            6.000000000000003
                        ],
                        [
                            -5.411986448192794,
                            7.6846610811415825,
                            6.000000000000003
                        ],
                        [
                            -5.396395406281043,
                            6.864842276439953,
                            6.000000000000002
                        ],
                        [
                            -5.257327186116231,
                            6.056754420281664,
                            6.000000000000002
                        ],
                        [
                            -4.9979638657556205,
                            5.27888770857469,
                            6.000000000000001
                        ],
                        [
                            -4.624240045711099,
                            4.549040834592458,
                            6.000000000000001
                        ],
                        [
                            -4.144707056875017,
                            3.883913729635642,
                            6
                        ],
                        [
                            0,
                            0,
                            9
                        ],
                        [
                            0,
                            65.42726406376255,
                            9
                        ],
                        [
                            0,
                            -20.427264063762557,
                            9.000000000000004
                        ],
                        [
                            0,
                            -27.466629547095764,
                            9.000000000000002
                        ],
                        [
                            0,
                            2.4666295470957653,
                            9.000000000000002
                        ],
                        [
                            0,
                            10.823807579381203,
                            9
                        ],
                        [
                            0,
                            -35.823807579381196,
                            9.000000000000007
                        ],
                        [
                            0,
                            11.892621835300936,
                            9
                        ],
                        [
                            0,
                            -36.892621835300936,
                            9.000000000000002
                        ],
                        [
                            0,
                            -4.801728242190677,
                            9.000000000000002
                        ],
                        [
                            0,
                            7.179625691198351,
                            9
                        ],
                        [
                            -3.392655733594062,
                            10.451050415632208,
                            9.000000000000002
                        ],
                        [
                            3.392655733594062,
                            10.451050415632208,
                            9.000000000000002
                        ],
                        [
                            -3.392655733594063,
                            10.451050415632213,
                            9.000000000000002
                        ],
                        [
                            -6.281667070533208,
                            9.50554363354457,
                            9.000000000000002
                        ],
                        [
                            -8.932942698824704,
                            8.018564439754636,
                            9.000000000000002
                        ],
                        [
                            -11.246142552171685,
                            6.046388986502025,
                            9.000000000000002
                        ],
                        [
                            -13.133721365884979,
                            3.6636561433243973,
                            9.000000000000002
                        ],
                        [
                            -14.524241911300969,
                            0.9605427175294956,
                            9.000000000000002
                        ],
                        [
                            -15.365078606143204,
                            -1.9606493734743515,
                            9.000000000000002
                        ],
                        [
                            -15.624409180103385,
                            -4.989364816256341,
                            9.000000000000002
                        ],
                        [
                            -15.292419019149571,
                            -8.010978973121262,
                            9.000000000000002
                        ],
                        [
                            -14.381672608997446,
                            -10.911135961343046,
                            9.000000000000002
                        ],
                        [
                            -12.926638020110586,
                            -13.580076561109076,
                            9.000000000000002
                        ],
                        [
                            -10.98238243055044,
                            -15.916792158352518,
                            9.000000000000002
                        ],
                        [
                            -8.62248805586366,
                            -17.832847512526385,
                            9.000000000000002
                        ],
                        [
                            -5.936267359636783,
                            -19.255727673010405,
                            9.000000000000002
                        ],
                        [
                            -3.0253829377429966,
                            -20.131582376892666,
                            9.000000000000002
                        ],
                        [
                            -2.220446049250313e-15,
                            -20.42726406376256,
                            9.000000000000002
                        ],
                        [
                            3.0253829377429846,
                            -20.131582376892666,
                            9.000000000000002
                        ],
                        [
                            5.936267359636773,
                            -19.25572767301041,
                            9.000000000000002
                        ],
                        [
                            8.622488055863652,
                            -17.832847512526392,
                            9.000000000000002
                        ],
                        [
                            10.982382430550432,
                            -15.916792158352534,
                            9.000000000000002
                        ],
                        [
                            12.926638020110577,
                            -13.580076561109093,
                            9.000000000000002
                        ],
                        [
                            14.381672608997441,
                            -10.91113596134306,
                            9.000000000000002
                        ],
                        [
                            15.29241901914957,
                            -8.010978973121272,
                            9.000000000000002
                        ],
                        [
                            15.624409180103385,
                            -4.98936481625635,
                            9.000000000000002
                        ],
                        [
                            15.365078606143204,
                            -1.9606493734743533,
                            9.000000000000002
                        ],
                        [
                            14.52424191130097,
                            0.9605427175294832,
                            9.000000000000002
                        ],
                        [
                            13.133721365884984,
                            3.66365614332439,
                            9.000000000000002
                        ],
                        [
                            11.246142552171696,
                            6.046388986502013,
                            9.000000000000002
                        ],
                        [
                            8.932942698824714,
                            8.018564439754625,
                            9.000000000000002
                        ],
                        [
                            6.281667070533217,
                            9.505543633544569,
                            9.000000000000002
                        ],
                        [
                            3.392655733594068,
                            10.451050415632213,
                            9.000000000000002
                        ],
                        [
                            -3.87244847269155,
                            9.865975534512636,
                            9.000000000000002
                        ],
                        [
                            -4.252430453725259,
                            9.21166109703059,
                            9.000000000000002
                        ],
                        [
                            -4.522807798262718,
                            8.504971787242601,
                            9.000000000000002
                        ],
                        [
                            -4.676611642053866,
                            7.764122229881042,
                            9.000000000000002
                        ],
                        [
                            -4.709877754625351,
                            7.008207515933673,
                            9.000000000000002
                        ],
                        [
                            -4.621748715681717,
                            6.256711034569575,
                            9.000000000000002
                        ],
                        [
                            -4.414496014758958,
                            5.529002296839998,
                            9
                        ],
                        [
                            -4.093461504521027,
                            4.843837694540636,
                            9
                        ],
                        [
                            -3.666919716716364,
                            4.218877061969151,
                            9
                        ],
                        [
                            -3.1458645895437307,
                            3.6702285009987774,
                            9
                        ],
                        [
                            0,
                            0,
                            12
                        ],
                        [
                            0,
                            66.25785643744447,
                            12
                        ],
                        [
                            0,
                            -21.257856437444467,
                            11.999999999999996
                        ],
                        [
                            0,
                            -27.366068747318508,
                            11.999999999999998
                        ],
                        [
                            0,
                            2.366068747318506,
                            11.999999999999998
                        ],
                        [
                            0,
                            9.431712199461309,
                            12
                        ],
                        [
                            0,
                            -34.43171219946131,
                            12.000000000000002
                        ],
                        [
                            0,
                            10.56512518934159,
                            12
                        ],
                        [
                            0,
                            -35.565125189341586,
                            12.000000000000005
                        ],
                        [
                            0,
                            -5.913072118991579,
                            11.999999999999998
                        ],
                        [
                            0,
                            6.465596968330048,
                            12
                        ],
                        [
                            -3.13409723515881,
                            9.108240749742881,
                            11.999999999999998
                        ],
                        [
                            3.13409723515881,
                            9.108240749742881,
                            11.999999999999998
                        ],
                        [
                            -3.134097235158811,
                            9.108240749742887,
                            11.999999999999998
                        ],
                        [
                            -5.995592414416443,
                            8.211915575871373,
                            11.999999999999998
                        ],
                        [
                            -8.628135164307048,
                            6.7762024609947,
                            11.999999999999998
                        ],
                        [
                            -10.931197127274041,
                            4.8559266805493255,
                            11.999999999999998
                        ],
                        [
                            -12.816831759430249,
                            2.5244174027973365,
                            11.999999999999998
                        ],
                        [
                            -14.213032726773935,
                            -0.12929251673400355,
                            11.999999999999998
                        ],
                        [
                            -15.066483595954937,
                            -3.00386641422293,
                            11.999999999999998
                        ],
                        [
                            -15.344593817726691,
                            -5.989533539469237,
                            11.999999999999998
                        ],
                        [
                            -15.036743255411238,
                            -8.972280848497023,
                            11.999999999999998
                        ],
                        [
                            -14.15468773382993,
                            -11.838206795739627,
                            11.999999999999998
                        ],
                        [
                            -12.732110122087922,
                            -14.477870868458137,
                            11.999999999999998
                        ],
                        [
                            -10.823334092919925,
                            -16.790472768635542,
                            11.999999999999998
                        ],
                        [
                            -8.501249675999194,
                            -18.687701652804343,
                            11.999999999999998
                        ],
                        [
                            -5.854529821670214,
                            -20.097108439694225,
                            11.999999999999998
                        ],
                        [
                            -2.9842442656017223,
                            -20.96487240809524,
                            11.999999999999998
                        ],
                        [
                            1.7763568394002505e-15,
                            -21.25785643744447,
                            11.999999999999998
                        ],
                        [
                            2.9842442656017116,
                            -20.96487240809524,
                            11.999999999999998
                        ],
                        [
                            5.854529821670203,
                            -20.09710843969423,
                            11.999999999999998
                        ],
                        [
                            8.501249675999185,
                            -18.68770165280435,
                            11.999999999999998
                        ],
                        [
                            10.823334092919918,
                            -16.790472768635553,
                            11.999999999999998
                        ],
                        [
                            12.732110122087915,
                            -14.477870868458155,
                            11.999999999999998
                        ],
                        [
                            14.154687733829924,
                            -11.838206795739643,
                            11.999999999999998
                        ],
                        [
                            15.036743255411235,
                            -8.972280848497041,
                            11.999999999999998
                        ],
                        [
                            15.344593817726691,
                            -5.9895335394692335,
                            11.999999999999998
                        ],
                        [
                            15.066483595954937,
                            -3.003866414222939,
                            11.999999999999998
                        ],
                        [
                            14.213032726773935,
                            -0.12929251673401154,
                            11.999999999999998
                        ],
                        [
                            12.816831759430254,
                            2.524417402797331,
                            11.999999999999998
                        ],
                        [
                            10.931197127274045,
                            4.85592668054932,
                            11.999999999999998
                        ],
                        [
                            8.628135164307048,
                            6.776202460994696,
                            11.999999999999998
                        ],
                        [
                            5.995592414416453,
                            8.211915575871364,
                            11.999999999999998
                        ],
                        [
                            3.1340972351588077,
                            9.108240749742887,
                            11.999999999999998
                        ],
                        [
                            -3.5443866787778715,
                            8.52556170253595,
                            11.999999999999998
                        ],
                        [
                            -3.847570872682512,
                            7.880634075460158,
                            11.999999999999998
                        ],
                        [
                            -4.034488113666914,
                            7.192946468605129,
                            11.999999999999998
                        ],
                        [
                            -4.099490085227846,
                            6.483279614868525,
                            11.999999999999998
                        ],
                        [
                            -4.040612539943423,
                            5.773078422064334,
                            11.999999999999998
                        ],
                        [
                            -3.859634655640945,
                            5.083803944811175,
                            11.999999999999998
                        ],
                        [
                            -3.5620252717128684,
                            4.436284868492054,
                            12
                        ],
                        [
                            -3.156777630226665,
                            3.8500881023212656,
                            12
                        ],
                        [
                            -2.656137615667076,
                            3.3429275011099833,
                            12
                        ],
                        [
                            -2.075233705436831,
                            2.9301285831384978,
                            12
                        ],
                        [
                            0,
                            0,
                            15
                        ],
                        [
                            0,
                            66.87059837324712,
                            15
                        ],
                        [
                            0,
                            -21.87059837324712,
                            15.000000000000007
                        ],
                        [
                            0,
                            -26.64213562373095,
                            15
                        ],
                        [
                            0,
                            1.642135623730951,
                            15
                        ],
                        [
                            0,
                            7.5,
                            15
                        ],
                        [
                            0,
                            -32.5,
                            15
                        ],
                        [
                            0,
                            8.736760581595302,
                            14.999999999999998
                        ],
                        [
                            0,
                            -33.736760581595306,
                            14.999999999999998
                        ],
                        [
                            0,
                            -7.18529918662356,
                            15.000000000000004
                        ],
                        [
                            0,
                            5.1894481026631265,
                            15
                        ],
                        [
                            -2.917498443291182,
                            7.207275810021069,
                            15.000000000000004
                        ],
                        [
                            2.917498443291182,
                            7.207275810021069,
                            15.000000000000004
                        ],
                        [
                            -2.917498443291182,
                            7.20727581002107,
                            15.000000000000004
                        ],
                        [
                            -5.665995899387532,
                            6.362929578376326,
                            15.000000000000004
                        ],
                        [
                            -8.197289795438088,
                            4.999217718459434,
                            15.000000000000004
                        ],
                        [
                            -10.414344048906361,
                            3.168417548523065,
                            15.000000000000004
                        ],
                        [
                            -12.232168821250458,
                            0.9407120199325139,
                            15.000000000000004
                        ],
                        [
                            -13.581078567492263,
                            -1.5985007166365737,
                            15.000000000000004
                        ],
                        [
                            -14.409363402155892,
                            -4.351881013240559,
                            15.000000000000004
                        ],
                        [
                            -14.68527137589024,
                            -7.2138791989651025,
                            15.000000000000004
                        ],
                        [
                            -14.398225673038493,
                            -10.074781781985909,
                            15.000000000000004
                        ],
                        [
                            -13.559230069399703,
                            -12.824917269945654,
                            15.000000000000004
                        ],
                        [
                            -12.200447107130465,
                            -15.358860380299086,
                            15.000000000000004
                        ],
                        [
                            -10.37396515727361,
                            -17.579473473998185,
                            15.000000000000004
                        ],
                        [
                            -8.149801634051254,
                            -19.401630285863714,
                            15.000000000000004
                        ],
                        [
                            -5.61321890685908,
                            -20.755479204011923,
                            15.000000000000004
                        ],
                        [
                            -2.8614558033418933,
                            -21.589121001897716,
                            15.000000000000004
                        ],
                        [
                            -2.6645352591003757e-15,
                            -21.87059837324712,
                            15.000000000000004
                        ],
                        [
                            2.861455803341895,
                            -21.589121001897716,
                            15.000000000000004
                        ],
                        [
                            5.613218906859082,
                            -20.75547920401192,
                            15.000000000000004
                        ],
                        [
                            8.149801634051261,
                            -19.40163028586371,
                            15.000000000000004
                        ],
                        [
                            10.37396515727361,
                            -17.579473473998185,
                            15.000000000000004
                        ],
                        [
                            12.200447107130469,
                            -15.358860380299085,
                            15.000000000000004
                        ],
                        [
                            13.559230069399703,
                            -12.824917269945656,
                            15.000000000000004
                        ],
                        [
                            14.398225673038493,
                            -10.07478178198591,
                            15.000000000000004
                        ],
                        [
                            14.68527137589024,
                            -7.213879198965102,
                            15.000000000000004
                        ],
                        [
                            14.409363402155885,
                            -4.351881013240542,
                            15.000000000000004
                        ],
                        [
                            13.581078567492263,
                            -1.5985007166365701,
                            15.000000000000004
                        ],
                        [
                            12.232168821250454,
                            0.9407120199325156,
                            15.000000000000004
                        ],
                        [
                            10.414344048906365,
                            3.1684175485230597,
                            15.000000000000004
                        ],
                        [
                            8.197289795438083,
                            4.999217718459436,
                            15.000000000000004
                        ],
                        [
                            5.665995899387527,
                            6.362929578376329,
                            15.000000000000004
                        ],
                        [
                            2.917498443291187,
                            7.20727581002107,
                            15.000000000000004
                        ],
                        [
                            -2.917498443291183,
                            7.20727581002107,
                            15.000000000000004
                        ],
                        [
                            -3.2505592956558247,
                            6.609761479567462,
                            15.000000000000004
                        ],
                        [
                            -3.462738228307521,
                            5.959428482546651,
                            15.000000000000004
                        ],
                        [
                            -3.546144723225002,
                            5.280461426585269,
                            15.000000000000004
                        ],
                        [
                            -3.497677056580117,
                            4.598109763756428,
                            15.000000000000002
                        ],
                        [
                            -3.319137645758658,
                            3.9377488130190224,
                            15.000000000000002
                        ],
                        [
                            -3.0171660209957336,
                            3.32393610191463,
                            15.000000000000002
                        ],
                        [
                            -2.6029919142789923,
                            2.7794981203219846,
                            15
                        ],
                        [
                            -2.0920176476587424,
                            2.324681448104284,
                            15
                        ],
                        [
                            -1.5032453511239747,
                            1.9763998245459051,
                            15
                        ],
                        [
                            -0.8585703106871732,
                            1.7476051595882374,
                            14.999999999999998
                        ],
                        [
                            0,
                            0,
                            18
                        ],
                        [
                            0,
                            67.2744346697979,
                            18
                        ],
                        [
                            0,
                            -22.2744346697979,
                            18.000000000000007
                        ],
                        [
                            0,
                            -25.188577540449522,
                            18
                        ],
                        [
                            0,
                            0.18857754044952024,
                            18
                        ],
                        [
                            0,
                            4.849351572897472,
                            18
                        ],
                        [
                            0,
                            -29.849351572897472,
                            18
                        ],
                        [
                            0,
                            6.261663039293719,
                            18
                        ],
                        [
                            0,
                            -31.26166303929372,
                            18
                        ],
                        [
                            0,
                            -8.712541548450213,
                            18.000000000000004
                        ],
                        [
                            0,
                            3.2251202898716196,
                            18
                        ],
                        [
                            -2.720672623783253,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            2.720672623783253,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            -2.7206726237832535,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            -5.255708798773098,
                            3.7895570776747878,
                            18.000000000000004
                        ],
                        [
                            -7.589540347268448,
                            2.5268455501438165,
                            18.000000000000004
                        ],
                        [
                            -9.632821051091147,
                            0.8338558679845782,
                            18.000000000000004
                        ],
                        [
                            -11.307327868102323,
                            -1.2245991396109055,
                            18.000000000000004
                        ],
                        [
                            -12.548955549784806,
                            -3.56971551168961,
                            18.000000000000004
                        ],
                        [
                            -13.310170786455142,
                            -6.111715012470981,
                            18.000000000000004
                        ],
                        [
                            -13.561831927911571,
                            -8.753282117125465,
                            18.000000000000004
                        ],
                        [
                            -13.294304615039342,
                            -11.393289548058029,
                            18.000000000000004
                        ],
                        [
                            -12.517830612579322,
                            -13.930669736759663,
                            18.000000000000004
                        ],
                        [
                            -11.262135723012067,
                            -16.268283999812166,
                            18.000000000000004
                        ],
                        [
                            -9.575291791814522,
                            -18.316641305140955,
                            18.000000000000004
                        ],
                        [
                            -7.521876370012779,
                            -19.99732426275628,
                            18.000000000000004
                        ],
                        [
                            -5.180500487783807,
                            -21.245991182566485,
                            18.000000000000004
                        ],
                        [
                            -2.640799183502833,
                            -22.01483927129751,
                            18.000000000000004
                        ],
                        [
                            -1.3322676295501878e-15,
                            -22.274434669797895,
                            18.000000000000004
                        ],
                        [
                            2.6407991835028297,
                            -22.01483927129751,
                            18.000000000000004
                        ],
                        [
                            5.180500487783809,
                            -21.245991182566488,
                            18.000000000000004
                        ],
                        [
                            7.521876370012779,
                            -19.99732426275628,
                            18.000000000000004
                        ],
                        [
                            9.575291791814514,
                            -18.316641305140955,
                            18.000000000000004
                        ],
                        [
                            11.262135723012069,
                            -16.268283999812162,
                            18.000000000000004
                        ],
                        [
                            12.51783061257932,
                            -13.93066973675967,
                            18.000000000000004
                        ],
                        [
                            13.294304615039342,
                            -11.393289548058034,
                            18.000000000000004
                        ],
                        [
                            13.561831927911571,
                            -8.753282117125453,
                            18.000000000000004
                        ],
                        [
                            13.310170786455144,
                            -6.111715012470981,
                            18.000000000000004
                        ],
                        [
                            12.548955549784807,
                            -3.5697155116896084,
                            18.000000000000004
                        ],
                        [
                            11.307327868102321,
                            -1.224599139610902,
                            18.000000000000004
                        ],
                        [
                            9.632821051091137,
                            0.8338558679845907,
                            18.000000000000004
                        ],
                        [
                            7.5895403472684455,
                            2.52684555014382,
                            18.000000000000004
                        ],
                        [
                            5.2557087987730915,
                            3.7895570776747913,
                            18.000000000000004
                        ],
                        [
                            2.7206726237832553,
                            4.573649986713425,
                            18.000000000000004
                        ],
                        [
                            -2.720672623783254,
                            4.573649986713427,
                            18.000000000000004
                        ],
                        [
                            -2.9509150214883313,
                            3.941145711922007,
                            18.000000000000004
                        ],
                        [
                            -3.0361579888161345,
                            3.273458018571623,
                            18.000000000000004
                        ],
                        [
                            -2.9722129328671087,
                            2.6033951490212512,
                            18.000000000000004
                        ],
                        [
                            -2.762221928767284,
                            1.9638820549195333,
                            18.000000000000004
                        ],
                        [
                            -2.416503327183184,
                            1.3863425602967514,
                            18
                        ],
                        [
                            -1.9520447404098051,
                            0.8991552857268186,
                            18
                        ],
                        [
                            -1.3916683202290714,
                            0.5262592049806791,
                            18
                        ],
                        [
                            -0.7629093433708718,
                            0.28597735308454775,
                            18
                        ],
                        [
                            -0.09666320764407121,
                            0.19011648536727144,
                            18
                        ],
                        [
                            0.5743326785651286,
                            0.24338692764753977,
                            17.999999999999996
                        ],
                        [
                            0,
                            0,
                            21
                        ],
                        [
                            0,
                            67.47499305169485,
                            21
                        ],
                        [
                            0,
                            -22.474993051694852,
                            21
                        ],
                        [
                            0,
                            -22.698039027185573,
                            21
                        ],
                        [
                            0,
                            -2.3019609728144292,
                            21
                        ],
                        [
                            0,
                            1.0646599662505398,
                            21
                        ],
                        [
                            0,
                            -26.064659966250538,
                            20.999999999999996
                        ],
                        [
                            0,
                            2.8297097167558913,
                            21
                        ],
                        [
                            0,
                            -27.82970971675589,
                            21
                        ],
                        [
                            0,
                            -10.705166542722157,
                            21
                        ],
                        [
                            0,
                            0.26387437197073105,
                            21
                        ],
                        [
                            -2.510516866023987,
                            0.7937951980927682,
                            21
                        ],
                        [
                            2.510516866023987,
                            0.7937951980927682,
                            21
                        ],
                        [
                            -2.510516866023987,
                            0.79379519809277,
                            21
                        ],
                        [
                            -4.692230929378789,
                            0.08889594351060737,
                            21
                        ],
                        [
                            -6.695888694612602,
                            -1.0256060857243554,
                            21
                        ],
                        [
                            -8.445457270388996,
                            -2.5074188309814502,
                            21
                        ],
                        [
                            -9.874545699272124,
                            -4.30031187736848,
                            21
                        ],
                        [
                            -10.928924298374625,
                            -6.336250231814717,
                            21
                        ],
                        [
                            -11.56858251557326,
                            -8.537976050012993,
                            21
                        ],
                        [
                            -11.7692472117299,
                            -10.821940343312473,
                            21
                        ],
                        [
                            -11.523303754594131,
                            -13.101473415948774,
                            21
                        ],
                        [
                            -10.840084971595754,
                            -15.290073723887351,
                            21
                        ],
                        [
                            -9.745516996622547,
                            -17.304690352805533,
                            21
                        ],
                        [
                            -8.281135449851517,
                            -19.068874554873755,
                            21
                        ],
                        [
                            -6.502509283701906,
                            -20.51568075282791,
                            21
                        ],
                        [
                            -4.477132105298384,
                            -21.590206926800796,
                            21
                        ],
                        [
                            -2.2818609935258185,
                            -22.251677983739384,
                            21
                        ],
                        [
                            -4.440892098500626e-16,
                            -22.474993051694852,
                            21
                        ],
                        [
                            2.281860993525819,
                            -22.251677983739384,
                            21
                        ],
                        [
                            4.477132105298386,
                            -21.590206926800796,
                            21
                        ],
                        [
                            6.502509283701906,
                            -20.51568075282791,
                            21
                        ],
                        [
                            8.281135449851515,
                            -19.06887455487376,
                            21
                        ],
                        [
                            9.745516996622545,
                            -17.304690352805537,
                            21
                        ],
                        [
                            10.840084971595756,
                            -15.290073723887353,
                            21
                        ],
                        [
                            11.52330375459413,
                            -13.10147341594878,
                            21
                        ],
                        [
                            11.7692472117299,
                            -10.821940343312468,
                            21
                        ],
                        [
                            11.568582515573262,
                            -8.537976050012997,
                            21
                        ],
                        [
                            10.928924298374625,
                            -6.336250231814722,
                            21
                        ],
                        [
                            9.87454569927212,
                            -4.300311877368477,
                            21
                        ],
                        [
                            8.445457270388989,
                            -2.507418830981443,
                            21
                        ],
                        [
                            6.695888694612595,
                            -1.0256060857243519,
                            21
                        ],
                        [
                            4.692230929378784,
                            0.08889594351060737,
                            21
                        ],
                        [
                            2.5105168660239863,
                            0.79379519809277,
                            21
                        ],
                        [
                            -2.5604954343144373,
                            0.09842302745009568,
                            21
                        ],
                        [
                            -2.421440521961776,
                            -0.584734380724081,
                            21
                        ],
                        [
                            -2.1036181242613967,
                            -1.2052416220296496,
                            21
                        ],
                        [
                            -1.6304920885838086,
                            -1.7172885606560562,
                            21
                        ],
                        [
                            -1.0369918508922362,
                            -2.0830723504181385,
                            21
                        ],
                        [
                            -0.36693370321743857,
                            -2.275588302295599,
                            21
                        ],
                        [
                            0.33021402804141653,
                            -2.2806235573334814,
                            21
                        ],
                        [
                            1.0029830760808802,
                            -2.0978063781824514,
                            21
                        ],
                        [
                            1.601704977089023,
                            -1.7406335933207555,
                            21
                        ],
                        [
                            2.0821779397374702,
                            -1.2354741678356036,
                            21
                        ]
                    ]
                ],
                "objs": [
                    [
                        [
                            [
                                0
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                45,
                                0
                            ],
                            [
                                0,
                                0,
                                45
                            ],
                            [
                                2025,
                                0,
                                0
                            ],
                            [
                                180,
                                215
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                1
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                0,
                                15
                            ],
                            [
                                0,
                                15,
                                0
                            ],
                            [
                                -225,
                                0,
                                0
                            ],
                            [
                                0,
                                150
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                2
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                25,
                                0
                            ],
                            [
                                0,
                                0,
                                25
                            ],
                            [
                                625,
                                0,
                                0
                            ],
                            [
                                0,
                                90
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                2
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                0,
                                26,
                                0
                            ],
                            [
                                0,
                                0,
                                26
                            ],
                            [
                                676,
                                0,
                                0
                            ],
                            [
                                0,
                                90
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                3
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                12
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                14.48557158514987,
                                0,
                                0
                            ],
                            [
                                0,
                                14.48557158514987,
                                0
                            ],
                            [
                                0,
                                0,
                                209.83178414850133
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                13
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                7.409830056250526,
                                0,
                                0
                            ],
                            [
                                0,
                                7.409830056250526,
                                0
                            ],
                            [
                                0,
                                0,
                                54.90558146251368
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                12
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.904734474995108,
                                13.629943649124005,
                                0
                            ],
                            [
                                -13.629943649124005,
                                4.9047344749951085,
                                0
                            ],
                            [
                                0,
                                0,
                                209.83178414850133
                            ],
                            [
                                0,
                                39.58252976502565
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                12
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.904734474995108,
                                13.629943649124005,
                                0
                            ],
                            [
                                -13.629943649124005,
                                -4.9047344749951085,
                                0
                            ],
                            [
                                0,
                                0,
                                209.83178414850133
                            ],
                            [
                                0,
                                320.41747023497436
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                13
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.904734474995108,
                                5.554202120224661,
                                -8.881784197001252e-16
                            ],
                            [
                                5.5542021202246605,
                                4.904734474995107,
                                -7.843213517900697e-16
                            ],
                            [
                                0,
                                -8.780010435435745e-15,
                                -54.90558146251365
                            ],
                            [
                                0,
                                82.89334337482593
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                13
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.904734474995108,
                                5.554202120224661,
                                -8.881784197001252e-16
                            ],
                            [
                                5.5542021202246605,
                                -4.904734474995107,
                                7.843213517900697e-16
                            ],
                            [
                                0,
                                -8.780010435435745e-15,
                                -54.90558146251365
                            ],
                            [
                                0,
                                277.1066566251741
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30,
                                31,
                                32,
                                33,
                                34,
                                35,
                                36,
                                37,
                                38,
                                39,
                                40,
                                41,
                                42,
                                43,
                                44,
                                45,
                                46
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                47,
                                48,
                                49,
                                50,
                                51,
                                52,
                                53,
                                54,
                                55,
                                56,
                                57
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                58
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                67
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.187432397884518,
                                0,
                                0
                            ],
                            [
                                0,
                                15.187432397884518,
                                0
                            ],
                            [
                                0,
                                0,
                                230.65810284031227
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                68
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                6.279921989434159,
                                0,
                                0
                            ],
                            [
                                0,
                                6.279921989434159,
                                0
                            ],
                            [
                                0,
                                0,
                                39.43742019337869
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                67
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.180514237983153,
                                14.600732979762775,
                                0
                            ],
                            [
                                -14.600732979762775,
                                4.180514237983153,
                                0
                            ],
                            [
                                0,
                                0,
                                230.6581028403122
                            ],
                            [
                                0,
                                31.955187613121435
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                67
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.180514237983153,
                                14.600732979762775,
                                0
                            ],
                            [
                                -14.600732979762775,
                                -4.180514237983153,
                                0
                            ],
                            [
                                0,
                                0,
                                230.6581028403122
                            ],
                            [
                                0,
                                328.04481238687856
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                68
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -4.180514237983153,
                                4.6862267230042125,
                                2.6645352591003757e-15
                            ],
                            [
                                4.6862267230042125,
                                4.180514237983153,
                                2.376992887176457e-15
                            ],
                            [
                                0,
                                2.2423668944008994e-14,
                                -39.43742019337866
                            ],
                            [
                                0,
                                83.4713703886842
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                68
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.180514237983153,
                                4.6862267230042125,
                                2.6645352591003757e-15
                            ],
                            [
                                4.6862267230042125,
                                -4.180514237983153,
                                -2.376992887176457e-15
                            ],
                            [
                                0,
                                2.2423668944008994e-14,
                                -39.43742019337866
                            ],
                            [
                                0,
                                276.5286296113158
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                71,
                                72,
                                73,
                                74,
                                75,
                                76,
                                77,
                                78,
                                79,
                                80,
                                81,
                                82,
                                83,
                                84,
                                85,
                                86,
                                87,
                                88,
                                89,
                                90,
                                91,
                                92,
                                93,
                                94,
                                95,
                                96,
                                97,
                                98,
                                99,
                                100,
                                101
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                102,
                                103,
                                104,
                                105,
                                106,
                                107,
                                108,
                                109,
                                110,
                                111,
                                112
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                113
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                122
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.567589704940893,
                                0,
                                0
                            ],
                            [
                                0,
                                15.567589704940893,
                                0
                            ],
                            [
                                0,
                                0,
                                242.34984922138167
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                123
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                5.420694493273036,
                                0,
                                0
                            ],
                            [
                                0,
                                5.420694493273036,
                                0
                            ],
                            [
                                0,
                                0,
                                29.383928789400617
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                122
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.7228381389924676,
                                15.115896447523209,
                                0
                            ],
                            [
                                -15.115896447523209,
                                3.7228381389924676,
                                0
                            ],
                            [
                                0,
                                0,
                                242.34984922138167
                            ],
                            [
                                0,
                                27.671611983447548
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                122
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.7228381389924676,
                                15.115896447523209,
                                0
                            ],
                            [
                                -15.115896447523209,
                                -3.7228381389924676,
                                0
                            ],
                            [
                                0,
                                0,
                                242.34984922138167
                            ],
                            [
                                0,
                                332.3283880165525
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                123
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.7228381389924676,
                                3.9401021535315124,
                                3.552713678800501e-15
                            ],
                            [
                                3.940102153531513,
                                3.7228381389924676,
                                3.356810931539965e-15
                            ],
                            [
                                -1.5777218104420236e-30,
                                2.6494918578046532e-14,
                                -29.383928789400564
                            ],
                            [
                                0,
                                86.75190550714683
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                123
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.7228381389924676,
                                3.9401021535315124,
                                3.552713678800501e-15
                            ],
                            [
                                3.940102153531513,
                                -3.7228381389924676,
                                -3.356810931539965e-15
                            ],
                            [
                                1.5777218104420236e-30,
                                2.6494918578046532e-14,
                                -29.383928789400564
                            ],
                            [
                                0,
                                273.24809449285317
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                126,
                                127,
                                128,
                                129,
                                130,
                                131,
                                132,
                                133,
                                134,
                                135,
                                136,
                                137,
                                138,
                                139,
                                140,
                                141,
                                142,
                                143,
                                144,
                                145,
                                146,
                                147,
                                148,
                                149,
                                150,
                                151,
                                152,
                                153,
                                154,
                                155,
                                156
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                157,
                                158,
                                159,
                                160,
                                161,
                                162,
                                163,
                                164,
                                165,
                                166,
                                167
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                168
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                177
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.62553582157188,
                                0,
                                0
                            ],
                            [
                                0,
                                15.62553582157188,
                                0
                            ],
                            [
                                0,
                                0,
                                244.157369711226
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                178
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.712996144102585,
                                0,
                                0
                            ],
                            [
                                0,
                                4.712996144102585,
                                0
                            ],
                            [
                                0,
                                0,
                                22.212332654325838
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                177
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.392655733594062,
                                15.252778657822885,
                                0
                            ],
                            [
                                -15.252778657822883,
                                3.3926557335940615,
                                0
                            ],
                            [
                                0,
                                0,
                                244.15736971122593
                            ],
                            [
                                0,
                                25.08016164043014
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                177
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.392655733594062,
                                15.252778657822885,
                                0
                            ],
                            [
                                -15.252778657822883,
                                -3.3926557335940615,
                                0
                            ],
                            [
                                0,
                                0,
                                244.15736971122593
                            ],
                            [
                                0,
                                334.91983835956984
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                178
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.392655733594062,
                                3.2714247244338575,
                                1.7763568394002505e-15
                            ],
                            [
                                3.271424724433858,
                                3.392655733594062,
                                1.8421842847517225e-15
                            ],
                            [
                                7.888609052210118e-31,
                                1.2061114759830972e-14,
                                -22.212332654325806
                            ],
                            [
                                0,
                                92.08438632507122
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                178
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.392655733594062,
                                3.2714247244338575,
                                1.7763568394002505e-15
                            ],
                            [
                                3.271424724433858,
                                -3.392655733594062,
                                -1.8421842847517225e-15
                            ],
                            [
                                -7.888609052210118e-31,
                                1.2061114759830972e-14,
                                -22.212332654325806
                            ],
                            [
                                0,
                                267.91561367492875
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                181,
                                182,
                                183,
                                184,
                                185,
                                186,
                                187,
                                188,
                                189,
                                190,
                                191,
                                192,
                                193,
                                194,
                                195,
                                196,
                                197,
                                198,
                                199,
                                200,
                                201,
                                202,
                                203,
                                204,
                                205,
                                206,
                                207,
                                208,
                                209,
                                210,
                                211
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                212,
                                213,
                                214,
                                215,
                                216,
                                217,
                                218,
                                219,
                                220,
                                221,
                                222
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                223
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                232
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                15.344784318452888,
                                0,
                                0
                            ],
                            [
                                0,
                                15.344784318452888,
                                0
                            ],
                            [
                                0,
                                0,
                                235.46240577983767
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                233
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                4.099528221011542,
                                0,
                                0
                            ],
                            [
                                0,
                                4.099528221011542,
                                0
                            ],
                            [
                                0,
                                0,
                                16.806131634870056
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                232
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.13409723515881,
                                15.02131286873446,
                                0
                            ],
                            [
                                -15.02131286873446,
                                3.1340972351588094,
                                0
                            ],
                            [
                                0,
                                0,
                                235.4624057798376
                            ],
                            [
                                0,
                                23.570624730044177
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                232
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.13409723515881,
                                15.02131286873446,
                                0
                            ],
                            [
                                -15.02131286873446,
                                -3.1340972351588094,
                                0
                            ],
                            [
                                0,
                                0,
                                235.4624057798376
                            ],
                            [
                                0,
                                336.4293752699558
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                233
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -3.13409723515881,
                                2.6426437814128336,
                                -1.7763568394002505e-15
                            ],
                            [
                                2.6426437814128336,
                                3.1340972351588103,
                                -2.106706586100432e-15
                            ],
                            [
                                1.5777218104420236e-30,
                                -1.1296901641999446e-14,
                                -16.80613163487002
                            ],
                            [
                                0,
                                99.72540359002763
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                233
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.13409723515881,
                                2.6426437814128336,
                                -1.7763568394002505e-15
                            ],
                            [
                                2.6426437814128336,
                                -3.1340972351588103,
                                2.106706586100432e-15
                            ],
                            [
                                -1.5777218104420236e-30,
                                -1.1296901641999446e-14,
                                -16.80613163487002
                            ],
                            [
                                0,
                                260.2745964099724
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                236,
                                237,
                                238,
                                239,
                                240,
                                241,
                                242,
                                243,
                                244,
                                245,
                                246,
                                247,
                                248,
                                249,
                                250,
                                251,
                                252,
                                253,
                                254,
                                255,
                                256,
                                257,
                                258,
                                259,
                                260,
                                261,
                                262,
                                263,
                                264,
                                265,
                                266
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                267,
                                268,
                                269,
                                270,
                                271,
                                272,
                                273,
                                274,
                                275,
                                276,
                                277
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                278
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                287
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                14.68529918662356,
                                0,
                                0
                            ],
                            [
                                0,
                                14.68529918662356,
                                0
                            ],
                            [
                                0,
                                0,
                                215.6580122006466
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                288
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.5473124789321755,
                                0,
                                0
                            ],
                            [
                                0,
                                3.5473124789321755,
                                0
                            ],
                            [
                                0,
                                0,
                                12.583425823187936
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                287
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.917498443291182,
                                14.39257499664463,
                                0
                            ],
                            [
                                -14.39257499664463,
                                2.917498443291182,
                                0
                            ],
                            [
                                0,
                                0,
                                215.65801220064662
                            ],
                            [
                                0,
                                22.918151623561727
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                287
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.917498443291182,
                                14.39257499664463,
                                0
                            ],
                            [
                                -14.39257499664463,
                                -2.917498443291182,
                                0
                            ],
                            [
                                0,
                                0,
                                215.65801220064662
                            ],
                            [
                                0,
                                337.0818483764383
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                288
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.917498443291182,
                                2.0178277073579425,
                                3.552713678800501e-15
                            ],
                            [
                                2.017827707357942,
                                2.9174984432911817,
                                5.136730251826745e-15
                            ],
                            [
                                -1.5777218104420236e-30,
                                2.2155166610704467e-14,
                                -12.58342582318788
                            ],
                            [
                                0,
                                110.66225252881955
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                288
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.917498443291182,
                                2.0178277073579425,
                                3.552713678800501e-15
                            ],
                            [
                                2.017827707357942,
                                -2.9174984432911817,
                                -5.136730251826745e-15
                            ],
                            [
                                1.5777218104420236e-30,
                                2.2155166610704467e-14,
                                -12.58342582318788
                            ],
                            [
                                0,
                                249.33774747118045
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                291,
                                292,
                                293,
                                294,
                                295,
                                296,
                                297,
                                298,
                                299,
                                300,
                                301,
                                302,
                                303,
                                304,
                                305,
                                306,
                                307,
                                308,
                                309,
                                310,
                                311,
                                312,
                                313,
                                314,
                                315,
                                316,
                                317,
                                318,
                                319,
                                320,
                                321
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                322,
                                323,
                                324,
                                325,
                                326,
                                327,
                                328,
                                329,
                                330,
                                331,
                                332
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                333
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                342
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                13.561893121347685,
                                0,
                                0
                            ],
                            [
                                0,
                                13.561893121347685,
                                0
                            ],
                            [
                                0,
                                0,
                                183.92494503485767
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                343
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                3.0365427494220993,
                                0,
                                0
                            ],
                            [
                                0,
                                3.0365427494220993,
                                0
                            ],
                            [
                                0,
                                0,
                                9.220591869067922
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                342
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.720672623783253,
                                13.28619153516364,
                                0
                            ],
                            [
                                -13.286191535163638,
                                2.7206726237832526,
                                0
                            ],
                            [
                                0,
                                0,
                                183.9249450348576
                            ],
                            [
                                0,
                                23.14544809398025
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                342
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.720672623783253,
                                13.28619153516364,
                                0
                            ],
                            [
                                -13.286191535163638,
                                -2.7206726237832526,
                                0
                            ],
                            [
                                0,
                                0,
                                183.9249450348576
                            ],
                            [
                                0,
                                336.85455190601976
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                343
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.720672623783253,
                                1.3485296968418075,
                                3.552713678800501e-15
                            ],
                            [
                                1.3485296968418077,
                                2.7206726237832526,
                                7.167636625792956e-15
                            ],
                            [
                                0,
                                2.4291732645259648e-14,
                                -9.220591869067906
                            ],
                            [
                                0,
                                127.26841248805668
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                343
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.720672623783253,
                                1.3485296968418075,
                                3.552713678800501e-15
                            ],
                            [
                                1.3485296968418077,
                                -2.7206726237832526,
                                -7.167636625792956e-15
                            ],
                            [
                                0,
                                2.4291732645259648e-14,
                                -9.220591869067906
                            ],
                            [
                                0,
                                232.7315875119433
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                346,
                                347,
                                348,
                                349,
                                350,
                                351,
                                352,
                                353,
                                354,
                                355,
                                356,
                                357,
                                358,
                                359,
                                360,
                                361,
                                362,
                                363,
                                364,
                                365,
                                366,
                                367,
                                368,
                                369,
                                370,
                                371,
                                372,
                                373,
                                374,
                                375,
                                376
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                377,
                                378,
                                379,
                                380,
                                381,
                                382,
                                383,
                                384,
                                385,
                                386,
                                387
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                388
                            ]
                        ],
                        [],
                        [
                            2,
                            [
                                1,
                                0,
                                0
                            ],
                            [
                                0,
                                1,
                                0
                            ],
                            [
                                0,
                                0,
                                1
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                397
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                11.769826508972695,
                                0,
                                0
                            ],
                            [
                                0,
                                11.769826508972695,
                                0
                            ],
                            [
                                0,
                                0,
                                138.52881605131637
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                398
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.5658353447851603,
                                0,
                                0
                            ],
                            [
                                0,
                                2.5658353447851603,
                                0
                            ],
                            [
                                0,
                                0,
                                6.5835110165487825
                            ],
                            [
                                0,
                                360
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                397
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.510516866023987,
                                11.498961740814925,
                                0
                            ],
                            [
                                -11.498961740814925,
                                2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                138.5288160513163
                            ],
                            [
                                0,
                                24.631750528737044
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                397
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.510516866023987,
                                11.498961740814925,
                                0
                            ],
                            [
                                -11.498961740814925,
                                -2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                138.5288160513163
                            ],
                            [
                                0,
                                335.36824947126297
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                398
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                -2.510516866023987,
                                0.5299208261220372,
                                0
                            ],
                            [
                                0.5299208261220372,
                                2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                -6.583511016548765
                            ],
                            [
                                0,
                                156.1618954379184
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                398
                            ]
                        ],
                        [],
                        [
                            3,
                            [
                                2.510516866023987,
                                0.5299208261220372,
                                0
                            ],
                            [
                                0.5299208261220372,
                                -2.510516866023987,
                                0
                            ],
                            [
                                0,
                                0,
                                -6.583511016548765
                            ],
                            [
                                0,
                                203.8381045620816
                            ]
                        ]
                    ],
                    [
                        [
                            [
                                401,
                                402,
                                403,
                                404,
                                405,
                                406,
                                407,
                                408,
                                409,
                                410,
                                411,
                                412,
                                413,
                                414,
                                415,
                                416,
                                417,
                                418,
                                419,
                                420,
                                421,
                                422,
                                423,
                                424,
                                425,
                                426,
                                427,
                                428,
                                429,
                                430,
                                431
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ],
                    [
                        [
                            [
                                432,
                                433,
                                434,
                                435,
                                436,
                                437,
                                438,
                                439,
                                440,
                                441,
                                442
                            ]
                        ],
                        [],
                        [
                            100
                        ]
                    ]
                ]
            },
            "attribs": {
                "points": [],
                "vertices": [],
                "edges": [],
                "wires": [],
                "faces": [],
                "objs": []
            }
        };
        //public gs_dummy_data: gs.IModel = new gs.Model(this.test_data1);
        this.data_boxes = {
            attribs: null,
            geom: {
                objs: [
                    [
                        [
                            [0, 1, 2, 3, -1],
                        ],
                        [
                            [1, 5, 4, 0, -1],
                            [2, 6, 5, 1, -1],
                            [3, 7, 6, 2, -1],
                            [0, 4, 7, 3, -1],
                            [5, 6, 7, 4, -1],
                        ],
                        [200],
                    ],
                ],
                points: [
                    [0, 1, 2, 3, 4, 5, 6, 7],
                    [
                        [-0.7, -1.0, 0.0],
                        [0.2, -1.0, 0.0],
                        [0.2, -1.0, 3.0],
                        [-0.7, -1.0, 3.0],
                        [-0.7, 1.0, 0.0],
                        [0.2, 1.0, 0.0],
                        [0.2, 1.0, 3.0],
                        [-0.7, 1.0, 3.0],
                    ],
                ],
            },
            groups: [
                {
                    name: "building_obj",
                    objs: [0],
                    props: [["descr", "The building object, that has wire and faces."]],
                },
                // groups with topo
                {
                    name: "building_all_faces",
                    topos: [
                        [[0, [0, 1, 2, 3, 4]]],
                        [],
                        [],
                        [],
                        [],
                        [],
                    ],
                },
                {
                    name: "walls",
                    parent: "building_obj",
                    props: [["descr", "Three walls."], ["material", "brick"], ["thickness", 300]],
                    topos: [
                        [[0, [1, 3, 4]]],
                        [],
                        [],
                        [],
                        [],
                        [],
                    ],
                },
                {
                    name: "floor",
                    parent: "building_obj",
                    topos: [
                        [[0, [0]]],
                        [],
                        [],
                        [],
                        [],
                        [],
                    ],
                },
                {
                    name: "roof",
                    parent: "building_obj",
                    topos: [
                        [[0, [2]]],
                        [],
                        [],
                        [],
                        [],
                        [],
                    ],
                },
                {
                    name: "winodw_openings",
                    parent: "building_obj",
                    topos: [
                        [],
                        [[0, [0]]],
                        [],
                        [],
                        [],
                        [],
                    ],
                },
                {
                    name: "vertical_edges_of_faces",
                    parent: "building_obj",
                    topos: [
                        [
                            [0,
                                [
                                    [1, [1, 3]],
                                    [3, [1, 3]],
                                    [4, [0, 2]],
                                ],
                            ],
                        ],
                        [],
                        [],
                        [],
                        [],
                        [],
                    ],
                },
                {
                    name: "vertices_on_ground",
                    parent: "building_obj",
                    topos: [
                        [
                            [0,
                                [
                                    [0, [0, 1, 2, 3]],
                                    [1, [2, 3]],
                                    [3, [0, 1]],
                                    [4, [0, 3]],
                                ],
                            ],
                        ],
                        [
                            [0,
                                [
                                    [0, [0, 1]],
                                ],
                            ],
                        ],
                        [],
                        [],
                        [],
                        [],
                    ],
                },
                {
                    name: "points_on_ground",
                    parent: "building_obj",
                    points: [0, 1, 4, 5],
                },
            ],
            metadata: {
                crs: { epsg: 3857 },
                filetype: "gs-json",
                location: "+0-0",
                version: "0.1.1",
            },
            skins: null,
        };
    }
    AppComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files; // FileList object
        var fr = new FileReader();
        var self = this;
        fr.onload = function (text) {
            var js_data = JSON.parse(text.target["result"]);
            var model = new __WEBPACK_IMPORTED_MODULE_1_gs_json__["a" /* Model */](js_data);
            self.gs_dummy_data = model;
        };
        fr.readAsText(files[0]);
    };
    AppComponent.prototype.genModelManyBoxes = function () {
        var m = new __WEBPACK_IMPORTED_MODULE_1_gs_json__["a" /* Model */]();
        var g = m.getGeom();
        for (var i = 0; i < 100; i++) {
            var p0 = [1 + Math.random(), 1 + Math.random(), 0];
            p0.map(function (v) { return v * 1000; });
            var size = [Math.random(), Math.random(), Math.random()];
            size.map(function (v) { return v * 80; });
            var p1 = [p0[0] + size[0], p0[1], p0[2]];
            var p2 = [p0[0] + size[0], p0[1] + size[1], p0[2]];
            var p3 = [p0[0], p0[1] + size[1], p0[2]];
            var p4 = [p0[0], p0[1], p0[2] + size[2]];
            var p5 = [p0[0] + size[0], p0[1], p0[2] + size[2]];
            var p6 = [p0[0] + size[0], p0[1] + size[1], p0[2] + size[2]];
            var p7 = [p0[0], p0[1] + size[1], p0[2] + size[2]];
            var points = [p0, p1, p2, p3, p4, p5, p6, p7].map(function (v) { return g.addPoint(v); });
            g.addPolymesh([
                [points[0], points[1], points[2], points[3]],
                [points[0], points[4], points[5], points[1]],
                [points[1], points[5], points[6], points[2]],
                [points[2], points[6], points[7], points[3]],
                [points[3], points[7], points[4], points[0]],
                [points[7], points[6], points[5], points[4]],
            ]);
        }
        return m;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gs_viewer_gs_viewer_module__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// if importing from npm
// import {GSViewer} from 'gs-viewer';
// for dev purpose -

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__gs_viewer_gs_viewer_module__["a" /* GSViewer */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/DataSubscriber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSubscriber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");

var DataSubscriber = /** @class */ (function () {
    function DataSubscriber(injector) {
        var _this = this;
        this.dataService = injector.get(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]);
        this._subscription = this.dataService.getMessage().subscribe(function (message) {
            _this._message = message;
            _this.notify(message.text);
        });
    }
    DataSubscriber.prototype.notify = function (message) {
        console.warn("Notify function not Implemented");
    };
    return DataSubscriber;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gs_json__ = __webpack_require__("../../../../gs-json/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__ = __webpack_require__("../../../../three-orbit-controls/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService() {
        // intializations
        // this only runs once
        this.selecting = [];
        this.grid = true;
        this.sprite = [];
        this.selectedFaces = [];
        this.scenechildren = [];
        this.textlabels = [];
        // ---- 
        // Subscription Handling
        // 
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var default_width = 1510, default_height = 720;
        // scene
        var scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        scene.background = new __WEBPACK_IMPORTED_MODULE_2_three__["Color"](0xcccccc);
        // renderer
        var renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        // camera settings
        var aspect_ratio = this._width / this._height;
        var camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](50, aspect_ratio, 0.01, 1000);
        camera.position.y = 10;
        camera.up.set(0, 0, 1);
        camera.lookAt(scene.position);
        camera.updateProjectionMatrix();
        // orbit controls
        var _OC = __WEBPACK_IMPORTED_MODULE_4_three_orbit_controls__(__WEBPACK_IMPORTED_MODULE_2_three__);
        var controls = new _OC(camera, renderer.domElement);
        controls.enableKeys = false;
        // default directional lighting
        var directional_light = new __WEBPACK_IMPORTED_MODULE_2_three__["DirectionalLight"](0xffffff, 0.5);
        directional_light.castShadow = false;
        directional_light.position.copy(camera.position);
        controls.addEventListener('change', function () {
            directional_light.position.copy(camera.position);
        });
        directional_light.target.position.set(0, 0, 0);
        scene.add(directional_light);
        // default ambient lighting
        var default_hue = 160;
        var default_saturation = 0;
        var default_lightness = 0.47;
        var hemi_light = new __WEBPACK_IMPORTED_MODULE_2_three__["HemisphereLight"](0xffffff, 0.5);
        hemi_light.color.setHSL(default_hue, default_saturation, default_saturation);
        scene.add(hemi_light);
        this._scene = scene;
        this._renderer = renderer;
        this._camera = camera;
        this._orbitControls = controls;
        this._hueValue = default_hue;
        this._saturationValue = default_saturation;
        this._lightnessValue = default_lightness;
        // add it to alight - what does alight do?
        this._alight = [];
        this._alight.push(hemi_light);
    }
    DataService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    DataService.prototype.clearMessage = function () {
        this.subject.next();
    };
    DataService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    //
    //  Getter and Setting for gs-model
    //
    DataService.prototype.getGsModel = function () {
        return this._gsModel;
    };
    DataService.prototype.setGsModel = function (model) {
        this._gsModel = model;
        if (this._gsModel !== undefined) {
            this.generateSceneMaps();
        }
        else {
            // remove all children from the scene
            for (var i = 0; i < this._scene.children.length; i++) {
                if (this._scene.children[i].type === "Scene") {
                    this._scene.remove(this._scene.children[i]);
                }
            }
        }
        this.sendMessage("model_update");
    };
    DataService.prototype.generateSceneMaps = function () {
        var scene_and_maps = __WEBPACK_IMPORTED_MODULE_3_gs_json__["c" /* genThreeOptModelAndMaps */](this._gsModel);
        this.scenemaps = scene_and_maps;
    };
    DataService.prototype.getscememaps = function () {
        return this.scenemaps;
    };
    DataService.prototype.getScene = function (width, height) {
        if (width && height) {
            this._width = width;
            this._height = height;
        }
        return this._scene;
    };
    DataService.prototype.getRenderer = function () {
        this._camera.aspect = this._width / this._height;
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(this._width, this._height);
        return this._renderer;
    };
    DataService.prototype.getCamera = function () {
        return this._camera;
    };
    DataService.prototype.getControls = function () {
        return this._orbitControls;
    };
    //
    //
    //
    DataService.prototype.getalight = function () {
        return this._alight;
    };
    DataService.prototype.addlightvalue = function (hue, saturation, lightness) {
        this._hueValue = hue;
        this._saturationValue = saturation;
        this._lightnessValue = lightness;
    };
    DataService.prototype.gethue = function (_hue) {
        this.hue = _hue;
    };
    DataService.prototype.getsaturation = function (_saturation) {
        this.saturation = _saturation;
    };
    DataService.prototype.getlightness = function (_lightness) {
        this.lightness = _lightness;
    };
    DataService.prototype.getopacity = function (_opacity) {
        this.opacity = _opacity;
    };
    DataService.prototype.addbackvalue = function (red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    };
    DataService.prototype.getred = function (red) {
        this.red = red;
    };
    DataService.prototype.getgreen = function (green) {
        this.green = green;
    };
    DataService.prototype.getblue = function (blue) {
        this.blue = blue;
    };
    DataService.prototype.addGeom = function (Geom) {
        this._Geom = Geom;
    };
    DataService.prototype.getGeom = function () {
        return this._Geom;
    };
    DataService.prototype.addscenechange = function (scenechange) {
        this.scenechange = scenechange;
    };
    DataService.prototype.getscenechange = function () {
        return this.scenechange;
    };
    DataService.prototype.addINTERSECTEDColor = function (INTERSECTEDColor) {
        if (this.INTERSECTEDColor == null) {
            this.INTERSECTEDColor = INTERSECTEDColor;
        }
    };
    DataService.prototype.getINTERSECTEDColor = function () {
        return this.INTERSECTEDColor;
    };
    DataService.prototype.addselecting = function (selecting) {
        if (selecting[selecting.length - 1] == undefined) {
            this.selecting = [];
        }
        this.sendMessage();
    };
    DataService.prototype.pushselecting = function (selecting) {
        this.selecting.push(selecting);
        this.sendMessage();
    };
    DataService.prototype.spliceselecting = function (index, number) {
        this.selecting.splice(index, number);
        this.sendMessage();
    };
    DataService.prototype.getselecting = function () {
        return this.selecting;
    };
    DataService.prototype.addattrvertix = function (attributevertix) {
        this.attributevertix = attributevertix;
    };
    DataService.prototype.getattrvertix = function () {
        return this.attributevertix;
    };
    DataService.prototype.addgrid = function (grid) {
        this.grid = grid;
    };
    DataService.prototype.addaxis = function (axis) {
        this.axis = axis;
    };
    DataService.prototype.addshadow = function (shadow) {
        this.shadow = shadow;
    };
    DataService.prototype.addframe = function (frame) {
        this.frame = frame;
    };
    DataService.prototype.addselect = function (select) {
        this.selectcheck = select;
    };
    DataService.prototype.getSelectingIndex = function (uuid) {
        for (var i = 0; i < this.selecting.length; i++) {
            if (this.selecting[i].uuid == uuid) {
                return i;
            }
        }
        return -1;
    };
    DataService.prototype.getFaceIndex = function (name) {
        for (var i = 0; i < this.selectedFaces.length; i++) {
            if (this.selectedFaces[i].name == name) {
                return i;
            }
        }
        return -1;
    };
    DataService.prototype.addsprite = function (sprite) {
        this.sprite.push(sprite);
        this.sendMessage();
    };
    DataService.prototype.pushsprite = function (sprite) {
        this.sprite = sprite;
    };
    DataService.prototype.addscenechild = function (scenechildren) {
        this.scenechildren = scenechildren;
        this.sendMessage();
    };
    DataService.prototype.getscenechild = function () {
        this.sendMessage();
        return this.scenechildren;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appdiv\">\r\n\t<split direction=\"vertical\">\r\n\t\t<split-area [size]=\"90\" id=\"splitcontainer\">\r\n\t\t  <div style=\"height: 100%\">\r\n\t\t    <split direction=\"horizontal\">\r\n\t\t      <split-area [size]=\"0.5\" id=\"splitgroups\">\r\n\t\t        <app-groups></app-groups>\r\n\t\t      </split-area>\r\n\t\t      <split-area [size]=\"99.5\" id=\"splitviewer\">\r\n\t\t        <app-viewer></app-viewer>\r\n\t\t      </split-area>\r\n\t\t    </split>\r\n\t\t  </div>\r\n\t\t</split-area>\r\n\t\t<split-area [size]=\"10\" id=\"splittoolwindow\">\r\n\t\t\t<app-toolwindow></app-toolwindow>\r\n\t\t</split-area>\r\n\t</split>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@font-face {\n  font-family: \"FontAwesome\"; }\n\n.font-awesome-hand {\n  font-family: FontAwesome; }\n\n.font-awesome-hand::after {\n  font-family: FontAwesome; }\n\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  text-align: justify;\n  margin: 0px;\n  padding: 0px; }\n\n#appdiv {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  overflow: hidden; }\n\na {\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase; }\n\n.toolbar {\n  background-color: #333; }\n\n.toolbar ul {\n  list-style: none;\n  overflow: hidden;\n  margin-bottom: 0px;\n  z-index: 1; }\n\n.toolbar div > ul > li {\n  display: inline-block;\n  float: left; }\n\n.toolbar div > ul > li:hover {\n  background-color: #fff; }\n\n.toolbar div > ul > li:hover a {\n  color: #333; }\n\n.toolbar div > ul > li > a {\n  font-size: 12px;\n  line-height: 20px;\n  display: block;\n  float: left;\n  padding: 0 16px; }\n\n/**\r\n * Carets\r\n */\n.toolbar div ul li i.icon-sort {\n  display: none; }\n\n.toolbar div ul li:hover i.icon-sort {\n  display: inline; }\n\n.toolbar div ul li:hover i.icon-caret-down {\n  display: none; }\n\n.toolbar .dropdown i {\n  margin: 0px; }\n\n.toolbar div > ul > li > a:hover {\n  background-color: #fff;\n  color: #333; }\n\n.dropdown {\n  float: left; }\n\n/**\r\n * Sub navigaton\r\n **/\n.sub {\n  min-width: 180px;\n  margin: 20px;\n  display: none;\n  position: absolute;\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb; }\n\n.sub li a {\n  display: block;\n  background-color: #fff;\n  color: #333 !important;\n  border-left: 4px solid #fff;\n  padding: 4px 12px;\n  font-size: 12px;\n  line-height: 26px; }\n\n.sub li a:hover {\n  border-left: 4px solid #ff0000;\n  float: top; }\n\n.toolbar div > ul > li:hover .sub {\n  display: block; }\n\n.sub li a {\n  transition: all .5s linear;\n  overflow: hidden; }\n\n#toolwindow {\n  position: relative;\n  background-color: slategrey; }\n\n.sidebar {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%; }\n\n.tool-form {\n  padding-top: 10px;\n  padding-left: 10px;\n  color: white; }\n\n.tool-form-heading {\n  border-bottom: 2px solid #ddd;\n  margin: 0px;\n  padding-bottom: 3px; }\n\n.tool-form label {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  color: black;\n  display: block;\n  margin: 0px 0px 15px 0px; }\n\n.tool-form label > span {\n  width: 150px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  float: left;\n  padding-top: 4px;\n  padding-right: 5px; }\n\n.tool-form span.required {\n  color: red; }\n\n.tool-form .tel-number-field {\n  width: 30px;\n  text-align: center; }\n\n.tool-form input.input-field {\n  width: 30px; }\n\n.tool-form input.file-input-field {\n  border: 1px solid #ccc;\n  height: 20px;\n  display: inline-block;\n  padding: 6px 6px;\n  cursor: pointer;\n  background-color: #888888; }\n\n.tool-form input.input-field,\n.tool-form .tel-number-field,\n.tool-form .textarea-field,\n.tool-form .select-field {\n  height: 20px;\n  overflow: hidden;\n  width: 240px;\n  background-color: #888888;\n  border-radius: 5px;\n  color: #ffffff; }\n\n.tool-form .input-field:focus,\n.tool-form .tel-number-field:focus,\n.tool-form .textarea-field:focus,\n.tool-form .select-field:focus {\n  border: 1px solid #0C0; }\n\n.tool-form .textarea-field {\n  height: 100px;\n  width: 55%; }\n\n.tool-form input[type=submit],\n.tool-form input[type=button] {\n  height: 25px;\n  border: none;\n  padding: 2px 8px 2px 8px;\n  background: #444466;\n  color: #fff;\n  box-shadow: 1px 1px 4px #DADADA;\n  -moz-box-shadow: 1px 1px 4px #DADADA;\n  -webkit-box-shadow: 1px 1px 4px #DADADA;\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: #ffffff; }\n\n.tool-form input[type=submit]:hover,\n.tool-form input[type=button]:hover {\n  background: #333377;\n  color: #fff; }\n\n.rightstyle {\n  width: 30px;\n  height: 100%;\n  float: right;\n  background: #FFFFFF;\n  background-repeat: repeat;\n  background-attachment: scroll;\n  overflow: auto; }\n\n.leftstyle {\n  background: #e6e6e6;\n  height: 100%; }\n\n.slider {\n  width: 0;\n  height: 0;\n  border-top: 30px solid transparent;\n  border-right: 10px solid black;\n  border-bottom: 30px solid transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gs_json__ = __webpack_require__("../../../../gs-json/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GSViewerComponent = /** @class */ (function () {
    function GSViewerComponent(dataService) {
        this.dataService = dataService;
    }
    ;
    GSViewerComponent.prototype.ngOnInit = function () {
        this.dataService.setGsModel(this.data);
    };
    GSViewerComponent.prototype.ngDoCheck = function () {
        if (this.dataService.getGsModel() !== this.data) {
            this.dataService.setGsModel(this.data);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], GSViewerComponent.prototype, "data", void 0);
    GSViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'gs-viewer',
            template: __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_data_service__["a" /* DataService */]])
    ], GSViewerComponent);
    return GSViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/gs-viewer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSViewer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_split__ = __webpack_require__("../../../../angular-split/esm5/angular-split.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/gs-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__ = __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__ = __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var GSViewer = /** @class */ (function () {
    function GSViewer() {
    }
    GSViewer_1 = GSViewer;
    GSViewer.forRoot = function () {
        return {
            ngModule: GSViewer_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]
            ]
        };
    };
    GSViewer = GSViewer_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_split__["a" /* AngularSplitModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_slider__["a" /* MatSliderModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__gs_viewer_component__["a" /* GSViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__toolwindow_toolwindow_component__["a" /* ToolwindowComponent */],
                __WEBPACK_IMPORTED_MODULE_9__toolwindow_groups_component__["a" /* GroupsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__data_data_service__["a" /* DataService */]],
        })
    ], GSViewer);
    return GSViewer;
    var GSViewer_1;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#settingview{\r\n  position:absolute;\r\n  background-color: white;\r\n  top:0px;\r\n  right:30px;\r\n  color:#395d73;\r\n  width:400px;\r\n  height:430px;\r\n}\r\n#grid{\r\n  margin-left: 20px;\r\n  font-family:sans-serif;\r\n}\r\n#axis{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#shadow{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#frame{\r\n  margin-left: 30px;\r\n  font-family:sans-serif;\r\n}\r\n#huerange{\r\n  margin-left: 41px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#satrange{\r\n  margin-left: 18px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#lirange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#oprange{\r\n  margin-left: 20px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#name{\r\n  font-family:sans-serif;\r\n}\r\n#redrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#greenrange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n#bluerange{\r\n  margin-left: 60px;\r\n  width: 60%;\r\n  font-family:sans-serif;\r\n}\r\n\r\n::ng-deep .mat-accent .mat-slider-thumb {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-thumb-label {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} \r\n::ng-deep .mat-accent .mat-slider-track-fill {\r\n    background-color: #395d73;\r\n    font-family:sans-serif;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"settingview\" (click)=\"setting($event)\">\r\n  <input id=\"grid\" #grid type=\"checkbox\" [checked]=\"gridVisible\" (click)=\"changegrid()\"> <label id=\"name\" value=\"gridVisible\">grid</label>\r\n  <input id=\"axis\"  type=\"checkbox\" [checked]=\"axisVisible\" (click)=\"changeaxis()\"> <label id=\"name\" value=\"axisVisible\">axis</label>\r\n  <input id=\"shadow\"  type=\"checkbox\" [checked]=\"shadowVisible\" (click)=\"changeshadow()\"> <label id=\"name\" value=\"shadowVisible\">shadow</label>\r\n  <input id=\"frame\"  type=\"checkbox\" [checked]=\"frameVisible\" (click)=\"changeframe()\"> <label id=\"name\" value=\"frameVisible\">frame</label><br/><hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Hemisphere Light</label>&nbsp;&nbsp;<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >hue</label>\r\n  <mat-slider class=\"slider\" name=\"range\" id=\"huerange\" min=0 max=360 step=1  value={{hue}} #slider (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;<label id=\"name\" >saturation</label>\r\n  <mat-slider name=\"range\" id=\"satrange\" min=0 max=1 step=0.01 value={{saturation}} #slider1 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider1.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >lightness</label>\r\n  <mat-slider name=\"range\" id=\"lirange\" min=0 max=1 step=0.01 value={{lightness}} #slider2 (change)=\"changelight(slider.value,slider1.value,slider2.value)\" ></mat-slider><label id=\"name\" >{{slider2.value.toPrecision(2)}}</label><br/>\r\n  <!-- &nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >opacity</label>&nbsp;&nbsp;&nbsp;\r\n  <mat-slider name=\"range\" id=\"oprange\" min=0 max=1 step=0.01 value={{opacity}} #slider3 (change)=\"changeopa(slider3.value)\" ></mat-slider><label id=\"name\" >{{slider3.value.toPrecision(2)}}</label><br/> -->\r\n  <hr/>&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >Backeground Color</label>&nbsp;&nbsp;<br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >R</label>\r\n  <mat-slider  name=\"range\" id=\"redrange\" min=0 max=1 step=0.01  value={{red}} #slider4 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider4.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >G</label>\r\n  <mat-slider name=\"range\" id=\"greenrange\" min=0 max=1 step=0.01 value={{green}} #slider5 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider5.value.toPrecision(2)}}</label><br/>\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label id=\"name\" >B</label>\r\n  <mat-slider name=\"range\" id=\"bluerange\" min=0 max=1 step=0.01 value={{blue}} #slider6 (change)=\"changeback(slider4.value,slider5.value,slider6.value)\" ></mat-slider><label id=\"name\" >{{slider6.value.toPrecision(2)}}</label><br/>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_service__ = __webpack_require__("../../../../../src/app/gs-viewer/data/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = /** @class */ (function () {
    function SettingComponent(dataService) {
        this.dataService = dataService;
        // avoid manipulating the scene here
        // shift to dataservice
        this.scene = this.dataService.getScene();
        this.alight = [];
        this.alight = this.dataService.getalight();
        this.hue = this.dataService.hue;
        this.saturation = this.dataService.saturation;
        this.lightness = this.dataService.lightness;
        this.opacity = this.dataService.opacity;
        this.red = this.dataService.red;
        this.green = this.dataService.green;
        this.blue = this.dataService.blue;
    }
    SettingComponent.prototype.ngOnInit = function () {
        if (this.hue == undefined) {
            this.hue = 160;
        }
        else {
            this.hue = this.dataService.hue;
        }
        if (this.saturation == undefined) {
            this.saturation = 0;
        }
        else {
            this.saturation = this.dataService.saturation;
        }
        if (this.lightness == undefined) {
            this.lightness = 0.47;
        }
        else {
            this.lightness = this.dataService.lightness;
        }
        if (this.opacity == undefined) {
            this.opacity = 1;
        }
        else {
            this.opacity = this.dataService.opacity;
        }
        this.gridVisible = this.dataService.grid;
        this.axisVisible = this.dataService.axis;
        this.shadowVisible = this.dataService.shadow;
        this.frameVisible = this.dataService.frame;
        if (this.red == undefined) {
            this.red = 0.8;
        }
        else {
            this.red = this.dataService.red;
        }
        if (this.green == undefined) {
            this.green = 0.8;
        }
        else {
            this.green = this.dataService.green;
        }
        if (this.blue == undefined) {
            this.blue = 0.8;
        }
        else {
            this.blue = this.dataService.blue;
        }
    };
    SettingComponent.prototype.changegrid = function () {
        this.gridVisible = !this.gridVisible;
        var max = 8;
        var center = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 0, 0);
        var radius = 0;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j]["geometry"].boundingSphere.radius > radius) {
                        center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        max = Math.ceil(radius + Math.max(Math.abs(center.x), Math.abs(center.y), Math.abs(center.z))) * 2;
                        break;
                    }
                }
            }
        }
        if (this.gridVisible) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_0_three__["GridHelper"](max, max);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(center.x, center.y, 0);
            this.scene.add(gridhelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("GridHelper"));
        }
        this.dataService.addgrid(this.gridVisible);
    };
    SettingComponent.prototype.changeaxis = function () {
        this.axisVisible = !this.axisVisible;
        var max = 8;
        var center = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](0, 0, 0);
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j]["geometry"].boundingSphere.radius !== 0) {
                        center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        var radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        max = radius;
                        break;
                    }
                }
            }
        }
        if (this.axisVisible) {
            var axishelper = new __WEBPACK_IMPORTED_MODULE_0_three__["AxisHelper"](max);
            axishelper.name = "AxisHelper";
            this.scene.add(axishelper);
        }
        else {
            this.scene.remove(this.scene.getObjectByName("AxisHelper"));
        }
        this.dataService.addaxis(this.axisVisible);
    };
    SettingComponent.prototype.changeshadow = function () {
        this.shadowVisible = !this.shadowVisible;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "DirectionalLight") {
                if (this.shadowVisible) {
                    this.scene.children[i].castShadow = true;
                }
                else {
                    this.scene.children[i].castShadow = false;
                }
            }
        }
        this.dataService.addshadow(this.shadowVisible);
    };
    SettingComponent.prototype.changelight = function (_hue, _saturation, _lightness) {
        this.hue = _hue;
        this.saturation = _saturation;
        this.lightness = _lightness;
        var alight = this.alight;
        this.dataService.gethue(_hue);
        this.dataService.getsaturation(_saturation);
        this.dataService.getlightness(_lightness);
        for (var i = 0; i < alight.length; i++) {
            var ambientLight = alight[i];
            ambientLight.color.setHSL(_hue, _saturation, _lightness);
        }
    };
    SettingComponent.prototype.changeframe = function () {
        this.frameVisible = !this.frameVisible;
        if (this.frameVisible) {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = false;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].type === "Scene") {
                    if (this.scene.children[i].children[0].type === "Mesh") {
                        this.scene.children[i].children[0].visible = true;
                    }
                }
            }
        }
        this.dataService.addframe(this.frameVisible);
    };
    SettingComponent.prototype.changeopa = function (_opacity) {
        this.opacity = _opacity;
        this.dataService.getopacity(_opacity);
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                if (this.scene.children[i].children[0].type === "Mesh") {
                    this.scene.children[i].children[0]["material"].opacity = _opacity;
                }
            }
        }
    };
    SettingComponent.prototype.changeback = function (_red, _green, _blue) {
        this.red = _red;
        this.green = _green;
        this.blue = _blue;
        this.dataService.getred(_red);
        this.dataService.getgreen(_green);
        this.dataService.getblue(_blue);
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_0_three__["Color"](_red, _green, _blue);
    };
    SettingComponent.prototype.setting = function (event) {
        event.stopPropagation();
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-setting',
            template: __webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_data_service__["a" /* DataService */]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#groupsview{\r\n  color:black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"groupsview\">\r\n\tGroupview\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-groups',
            template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/groups.component.css")]
        })
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#toolwindow{\r\n  background-color:white;\r\n}\r\n#toolbar{\r\n  background-color: #E6E6E6;\r\n  height: 28px;\r\n}\r\n#point{\r\n  margin-left:25px;\r\n  font-size:20px;\r\n  background:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#vertice{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#edge{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#wire{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#face{\r\n  font-size:22px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#object{\r\n  font-size:20px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#selected{\r\n  margin-left:30px;\r\n}\r\n.visible{\r\n  background-color: white !important;\r\n  color:#395d73;\r\n}\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}\r\n#table{\r\n  width:100% ;\r\n  height: 15px;\r\n}\r\n#tablename{\r\n  width:100% ;\r\n  height: 15px;\r\n  color:grey;\r\n}\r\n#numberbutton{\r\n  width:100%;\r\n  border:0;\r\n}\r\n/*.selectid{\r\n  background-color:#66CCFF;\r\n}*/\r\n#select{\r\n  position: relative;\r\n  float:right;\r\n  margin-right: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolwindow\">\r\n  <div id=\"toolbar\">\r\n    <button id=\"point\" [class.visible]=\"Visible === 'Points'\" (click)=\"point(Visible)\">P</button>\r\n    <button id=\"vertice\" [class.visible]=\"Visible === 'Vertices'\" (click)=\"vertice(Visible)\">V</button>\r\n    <button id=\"edge\" [class.visible]=\"Visible === 'Edges'\" (click)=\"edge(Visible)\">E</button>\r\n    <button id=\"wire\" [class.visible]=\"Visible === 'Wires'\" (click)=\"wire(Visible)\">W</button>\r\n    <button id=\"face\" [class.visible]=\"Visible === 'Faces'\" (click)=\"face(Visible)\">F</button>\r\n    <button id=\"object\" [class.visible]=\"Visible === 'Objs'\" (click)=\"object(Visible)\">O</button>\r\n    <input id=\"selected\" type=\"checkbox\" (click)=\"changeselected()\">\r\n    <label id=\"selectedname\" value=\"selected\">Show selected only</label>\r\n    <!-- <div id=\"select\">\r\n      <button id=\"vertice\" [class.selectvisible]=\"SelectVisible === 'Vertices'\" (click)=\"verticeselect(SelectVisible)\">V</button>\r\n      <button id=\"edge\" [class.selectvisible]=\"SelectVisible === 'Edges'\" (click)=\"edgeselect(SelectVisible)\">E</button>\r\n      <button id=\"wire\" [class.selectvisible]=\"SelectVisible === 'Wires'\" (click)=\"wireselect(SelectVisible)\">W</button>\r\n      <button id=\"face\" [class.selectvisible]=\"SelectVisible === 'Faces'\" (click)=\"faceselect(SelectVisible)\">F</button>\r\n      <button id=\"object\" [class.selectvisible]=\"SelectVisible === 'Objs'\" (click)=\"objectselect(SelectVisible)\"><i class=\"fa fa-map\"></i></button>\r\n    </div> -->\r\n  </div>\r\n  <div id=\"toolview\">\r\n    <div *ngIf=\"Visible === 'Points'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"table\" name=\"table\" bordercolor=\"#d0d0d0\">\r\n        <tr>\r\n          <td name=\"Number\" align=center width=\"40%\" align=center>ID</td>\r\n          <td width=\"20%\" align=center>X</td>\r\n          <td width=\"20%\" align=center>Y</td>\r\n          <td width=\"20%\" align=center>Z</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" id=\"tablename\" name=\"table\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute; \">\r\n        <tr>\r\n          <button id=\"numberbutton\">{{datascale.id}}</button>\r\n          <td width=\"20%\" align=center>{{datascale.x}}</td>\r\n          <td width=\"20%\" align=center>{{datascale.y}}</td>\r\n          <td width=\"20%\" align=center>{{datascale.z}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Vertices'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" width=\"50%\">\r\n        <tr>\r\n          <td  align=center width=\"25%\">Vertices Label</td>\r\n          <td  align=center width=\"25%\">Points ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"50%\">\r\n        <tr>\r\n          <!-- <button id=\"numberbutton\" [class.selectid]=\"ID == datascale.id\" (click)=clicktoshow(datascale.id)>{{datascale.vertixlabel}}</button> -->\r\n          <button id=\"numberbutton\">{{datascale.vertixlabel}}</button>\r\n          <td  align=center  width=\"50%\">{{datascale.pointid}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Edges'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Edge ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <!-- <button id=\"numberbutton\"[class.selectid]=\"ID == datascale.id\" (click)=clicktoshow(datascale.id) >{{datascale.id}}</button> -->\r\n          <button id=\"numberbutton\">{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Wires'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Wire ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\" >{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Faces'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td  align=center>Face ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute\" width=\"40%\">\r\n        <tr>\r\n          <button id=\"numberbutton\" >{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"Visible === 'Objs'\">\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" width=\"40%\">\r\n        <tr>\r\n          <td name=\"Number\" align=center  align=center>Object ID</td>\r\n        </tr>\r\n      </table>\r\n      <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"  bordercolor=\"#d0d0d0\" *ngFor=\"let datascale of attribute \" width=\"40%\">\r\n        <tr>\r\n          <button  id=\"numberbutton\"  >{{datascale}}</button>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolwindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolwindowComponent = /** @class */ (function (_super) {
    __extends(ToolwindowComponent, _super);
    function ToolwindowComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.Visible = "Objs";
        _this.scene = _this.dataService.getScene();
        _this.selectedVisible = false;
        _this.attribute = [];
        _this.num = [];
        _this.collection = [];
        _this.selectObj = [];
        _this.myElement = myElement;
        return _this;
    }
    ToolwindowComponent.prototype.ngOnInit = function () {
        this.model = this.dataService.getGsModel();
        this.Visible = this.dataService.visible;
        if (this.model !== undefined) {
            this.scene_and_maps = this.dataService.getscememaps();
        }
        else {
            return undefined;
        }
        this.object(this.Visible);
        //this.objectselect(this.SelectVisible);
        this.getvertices();
    };
    ToolwindowComponent.prototype.notify = function () {
        this.selectObj = [];
        for (var i = 0; i < this.dataService.selecting.length; i++) {
            for (var n = 0; n < this.scene.children.length; n++) {
                if (this.scene.children[n].type === "Scene") {
                    if (this.dataService.selecting[i].uuid === this.scene.children[n].children[0].uuid) {
                        this.selectObj.push(this.scene.children[n].children[0].parent);
                    }
                }
            }
        }
        if (this.selectedVisible == true) {
            if (this.Visible === "Objs")
                this.objectcheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Points")
                this.pointcheck();
        }
        this.dataService.visible = this.Visible;
    };
    ToolwindowComponent.prototype.getvertices = function () {
        var attributevertix = [];
        var points = this.getpoints();
        for (var i = 0; i < this.scene_and_maps.vertices_map.size; i++) {
            var path = this.scene_and_maps.vertices_map.get(i);
            var vertices = this.model.getGeom().getTopo(path);
            var label = vertices.getLabel();
            var verts_xyz = vertices.getLabelCentroid();
            var attributes = [];
            for (var j = 0; j < points.length; j++) {
                if (points[j].x === verts_xyz[0] && points[j].y === verts_xyz[1] && points[j].z === verts_xyz[2]) {
                    attributes.pointid = points[j].id;
                }
            }
            attributes.vertixlabel = label;
            attributevertix.push(attributes);
        }
        this.dataService.addattrvertix(attributevertix);
        return attributevertix;
    };
    ToolwindowComponent.prototype.getedges = function () {
        var attributeedge = [];
        for (var i = 0; i < this.scene_and_maps.edges_map.size; i++) {
            var path = this.scene_and_maps.edges_map.get(i);
            var edge = this.model.getGeom().getTopo(path);
            var label = edge.getLabel();
            attributeedge.push(label);
        }
        return attributeedge;
    };
    ToolwindowComponent.prototype.getwires = function () {
        var attributewire = [];
        for (var i = 0; i < this.scene_and_maps.wires_map.size; i++) {
            var path = this.scene_and_maps.wires_map.get(i);
            var wire = this.model.getGeom().getTopo(path);
            var label = wire.getLabel();
            if (attributewire.indexOf(label) === -1)
                attributewire.push(label);
        }
        return attributewire;
    };
    ToolwindowComponent.prototype.getfaces = function () {
        var attributeface = [];
        for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
            var path = this.scene_and_maps.faces_map.get(i);
            var face = this.model.getGeom().getTopo(path);
            var label = face.getLabel();
            attributeface.push(label);
        }
        return attributeface;
    };
    ToolwindowComponent.prototype.getoject = function () {
        var attributeobject = [];
        for (var i = 0; i < this.scene_and_maps.faces_map.size; i++) {
            var path = this.scene_and_maps.faces_map.get(i);
            if (i === 0 || path.id !== this.scene_and_maps.faces_map.get(i - 1).id) {
                var label = "o" + path.id;
                attributeobject.push(label);
            }
        }
        return attributeobject;
    };
    ToolwindowComponent.prototype.getchildren = function () {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    };
    ToolwindowComponent.prototype.getscenechildren = function () {
        var scenechildren = [];
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var i = 0; i < this.scene.children[n].children.length; i++) {
                    scenechildren.push(this.scene.children[n].children[i]);
                }
            }
        }
        return scenechildren;
    };
    ToolwindowComponent.prototype.clearsprite = function () {
        this.dataService.visible = this.Visible;
        for (var i = 0; i < this.dataService.sprite.length; i++) {
            this.dataService.sprite[i].visible = false;
        }
        var sprite = [];
        this.dataService.pushsprite(sprite);
    };
    ToolwindowComponent.prototype.getpoints = function () {
        var attrubtepoints = [];
        for (var i = 0; i < this.scene_and_maps.points_map.size; i++) {
            var points = this.model.getGeom().getPoint(i);
            var label = points.getLabel();
            var verts_xyz = points.getLabelCentroid();
            var attributepoint = [];
            if (verts_xyz !== undefined) {
                attributepoint.id = label;
                attributepoint.x = verts_xyz[0];
                attributepoint.y = verts_xyz[1];
                attributepoint.z = verts_xyz[2];
                attrubtepoints.push(attributepoint);
            }
        }
        return attrubtepoints;
    };
    ToolwindowComponent.prototype.point = function (Visible) {
        this.Visible = "Points";
        this.attribute = this.getpoints();
        if (this.selectedVisible == true) {
            this.pointcheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    };
    ToolwindowComponent.prototype.pointcheck = function () {
        this.attribute = [];
        var selecting = this.dataService.getselecting();
        for (var i = 0; i < selecting.length; i++) {
            var attributepoint = [];
            attributepoint.id = this.model.getGeom().getAllPoints()[selecting[i].index].getLabel();
            attributepoint.x = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[0];
            attributepoint.y = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[1];
            attributepoint.z = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition()[2];
            this.attribute.push(attributepoint);
        }
    };
    ToolwindowComponent.prototype.pointtovertix = function () {
        /*var attributevertix=[];
        var selecting=this.dataService.getselecting();
        var points=this.getpoints();
        for(var i =0;i<selecting.length;i++){
          var path=selecting[i].path;
          const vertices: gs.IVertex = this.model.getGeom().getTopo(path) as gs.IVertex;
          const label: string = vertices.getLabel();
          const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
          var attributes:any=[];
          for(var j=0;j<points.length;j++){
            if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
               attributes.pointid=points[j].id;
            }
          }
          attributes.vertixlabel=label;
          attributevertix.push(attributes);
        }
        this.dataService.addattrvertix(attributevertix);
        return attributevertix;*/
        var attributes = [];
        var vertices = this.getvertices();
        var selecting = this.dataService.getselecting();
        var char;
        var labels = [];
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < vertices.length; j++) {
                    if (selecting[i]["id"] === vertices[j].pointid) {
                        attributes.push(vertices[j]);
                    }
                    if (selecting[i]["id"].indexOf("e") > -1) {
                        var path = this.scene_and_maps.edges_map.get(selecting[i]["index"]);
                        var edge = this.model.getGeom().getTopo(path);
                        var verts = edge.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 8 && selecting[i]["id"].indexOf("w") > -1) {
                        var path = this.scene_and_maps.wires_map.get(selecting[i]["index"]);
                        var wire = this.model.getGeom().getTopo(path);
                        var verts = wire.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 8 && selecting[i]["id"].indexOf("f") > -1) {
                        var path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        var face = this.model.getGeom().getTopo(path);
                        var verts = face.getVertices();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === vertices[j].vertixlabel && attributes.indexOf(vertices[j]) == -1) {
                                attributes.push(vertices[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        var path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        var face = this.model.getGeom().getTopo(path);
                        var faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            var verts = faces[f].getVertices();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === vertices[j].vertixlabel && this.attribute.indexOf(vertices[j]) == -1) {
                                    attributes.push(vertices[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
        return attributes;
    };
    ToolwindowComponent.prototype.vertice = function (Visible) {
        this.Visible = "Vertices";
        this.attribute = this.getvertices();
        if (this.selectedVisible == true) {
            this.verticecheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    };
    ToolwindowComponent.prototype.verticecheck = function () {
        this.attribute = this.pointtovertix();
        /*this.attribute=[];
        var points=this.getpoints();
        var vertices=this.getvertices();
        var selecting=this.dataService.selecting;
    
        for(var i =0;i<selecting.length;i++){
          //const path: gs.ITopoPathData = this.scene_and_maps.vertices_map.get(i);
          const label:string=this.model.getGeom().getAllPoints()[selecting[i].index].getLabel();
          for(var j=0;j<vertices.length;j++){
    
          }
          const vertices: gs.IVertex = this.model.getGeom().getTopo(selecting[i].index) as gs.IVertex;
          //const label: string = vertices.getLabel();
          const verts_xyz: gs.XYZ = this.model.getGeom().getAllPoints()[selecting[i].index].getPosition();
          console.log(verts_xyz);
          //const verts_xyz: gs.XYZ = vertices.getLabelCentroid();
          var attributes:any=[];
          for(var j=0;j<points.length;j++){
            if(points[j].x===verts_xyz[0]&&points[j].y===verts_xyz[1]&&points[j].z===verts_xyz[2]){
               attributes.pointid=points[j].id;
            }
          }
          attributes.vertixlabel=label;
          this.attribute.push(attributes);
        }
        //this.dataService.addattrvertix(this.attribute);*/
    };
    ToolwindowComponent.prototype.edge = function (Visible) {
        this.Visible = "Edges";
        this.attribute = [];
        this.attribute = this.getedges();
        if (this.selectedVisible == true) {
            this.edgecheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    };
    ToolwindowComponent.prototype.edgecheck = function () {
        this.attribute = [];
        var edges = this.getedges();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < edges.length; j++) {
                    if (selecting[i]["id"] === edges[j]) {
                        this.attribute.push(edges[j]);
                    }
                    if (selecting[i]["id"].length < 8 && selecting[i]["id"].indexOf("f") > -1) {
                        var path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        var face = this.model.getGeom().getTopo(path);
                        var verts = face.getEdges();
                        for (var n = 0; n < verts.length; n++) {
                            var label = verts[n].getLabel();
                            if (label === edges[j] && this.attribute.indexOf(edges[j]) == -1) {
                                this.attribute.push(edges[j]);
                            }
                        }
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        var path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        var face = this.model.getGeom().getTopo(path);
                        var faces = face.getObj().getFaces();
                        for (var f = 0; f < faces.length; f++) {
                            var verts = faces[f].getEdges();
                            for (var n = 0; n < verts.length; n++) {
                                var label = verts[n].getLabel();
                                if (label === edges[j] && this.attribute.indexOf(edges[j]) == -1) {
                                    this.attribute.push(edges[j]);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.wire = function (Visible) {
        this.Visible = "Wires";
        this.attribute = [];
        this.attribute = this.getwires();
        if (this.selectedVisible == true) {
            this.wirecheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    };
    ToolwindowComponent.prototype.wirecheck = function () {
        this.attribute = [];
        var wires = this.getwires();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < wires.length; j++) {
                    if (selecting[i]["id"] === wires[j]) {
                        this.attribute.push(wires[j]);
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        var path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        var face = this.model.getGeom().getTopo(path);
                        var wireses = face.getObj().getWires();
                        for (var w = 0; w < wireses.length; w++) {
                            var label = wireses[w].getLabel();
                            if (label === wires[j] && this.attribute.indexOf(wires[j]) == -1) {
                                this.attribute.push(wires[j]);
                            }
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.face = function (Visible) {
        this.Visible = "Faces";
        this.attribute = [];
        this.attribute = this.getfaces();
        if (this.selectedVisible == true) {
            this.facecheck();
        }
        this.clearsprite();
    };
    ToolwindowComponent.prototype.clicktoshow = function (id) {
        this.ID = id;
        for (var i = 0; i < this.scenechildren.length; i++) {
            if (this.scenechildren[i].name === this.Visible) {
                if (this.selectObj.length !== 0) {
                    for (var j = 0; j < this.scenechildren[i].children.length; j++) {
                        if (this.scenechildren[i].children[j].name === id) {
                            this.scenechildren[i].children[j].visible = true;
                            this.dataService.addsprite(this.scenechildren[i].children[j]);
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.facecheck = function () {
        this.attribute = [];
        var faces = this.getfaces();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < faces.length; j++) {
                    if (selecting[i]["id"] === faces[j]) {
                        this.attribute.push(faces[j]);
                    }
                    if (selecting[i]["id"].length < 5 && selecting[i]["id"].indexOf("p") == -1) {
                        var path = this.scene_and_maps.faces_map.get(selecting[i]["index"]);
                        var face = this.model.getGeom().getTopo(path);
                        var faceses = face.getObj().getFaces();
                        for (var f = 0; f < faceses.length; f++) {
                            var label = faceses[f].getLabel();
                            if (label === faces[j] && this.attribute.indexOf(faces[j]) == -1) {
                                this.attribute.push(faces[j]);
                            }
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent.prototype.object = function (Visible) {
        this.Visible = "Objs";
        this.attribute = [];
        this.attribute = this.getoject();
        if (this.selectedVisible == true) {
            this.objectcheck();
        }
        this.dataService.visible = this.Visible;
        this.clearsprite();
    };
    ToolwindowComponent.prototype.objectcheck = function () {
        this.attribute = [];
        var object = this.getoject();
        var selecting = this.dataService.getselecting();
        if (selecting.length !== 0) {
            for (var i = 0; i < selecting.length; i++) {
                for (var j = 0; j < object.length; j++) {
                    if (selecting[i]["id"] === object[j]) {
                        this.attribute.push(object[j]);
                    }
                }
            }
        }
        /*this.attribute=[];
        for(var i=0;i<this.selectObj.length;i++){
          for(var j=0;j<this.selectObj[i].children.length;j++){
            if(this.selectObj[i].children[j].name==="Objs"){
              for(var n=0;n<this.selectObj[i].children[j].children.length;n++){
                var attributeface:any=[];
                attributeface.id=this.selectObj[i].children[j].children[n].name;
                this.attribute.push(attributeface);
              }
            }
          }
        }*/
    };
    ToolwindowComponent.prototype.changeselected = function () {
        this.selectedVisible = !this.selectedVisible;
        if (this.selectedVisible) {
            if (this.Visible === "Points")
                this.pointcheck();
            if (this.Visible === "Vertices")
                this.verticecheck();
            if (this.Visible === "Edges")
                this.edgecheck();
            if (this.Visible === "Wires")
                this.wirecheck();
            if (this.Visible === "Faces")
                this.facecheck();
            if (this.Visible === "Objs")
                this.objectcheck();
        }
        else {
            if (this.Visible === "Points")
                this.point(this.Visible);
            if (this.Visible === "Vertices")
                this.vertice(this.Visible);
            if (this.Visible === "Edges")
                this.edge(this.Visible);
            if (this.Visible === "Wires")
                this.wire(this.Visible);
            if (this.Visible === "Faces")
                this.face(this.Visible);
            if (this.Visible === "Objs")
                this.object(this.Visible);
        }
    };
    ToolwindowComponent.prototype.Onselect = function (i) {
        var select;
        for (var n = 0; n < this.scene.children.length; n++) {
            if (this.scene.children[n].type === "Scene") {
                for (var m = 0; m < this.scene.children[n].children.length; m++) {
                    var sprite = this.scene.children[n].children[m].children[this.scene.children[n].children[m].children.length - 1].children;
                    for (var j = 0; j < sprite.length; j++) {
                        if (sprite[j].name === i) {
                        }
                    }
                }
            }
        }
    };
    ToolwindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toolwindow',
            template: __webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/toolwindow/toolwindow.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], ToolwindowComponent);
    return ToolwindowComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n  margin:0px;\r\n  overflow: hidden;\r\n  color: white;\r\n}\r\n#container-top-right-resize { top: 0px; right: 0px; }\r\n\r\n/*#rotating{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 0px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#paning{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 25px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#zooming{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  background-color:transparent;\r\n  border:0;\r\n}*/\r\n\r\n#zoomingfit{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 30px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#selecting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n#points{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 80px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#vertices{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 100px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#edges{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 120px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#wires{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 140px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#faces{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 160px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n#objects{\r\n  width: 30px;\r\n  height: 25px;\r\n  font:20px bolder;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  margin-top: 180px;\r\n  background-color:transparent;\r\n  border:0;\r\n  font-family:sans-serif;\r\n}\r\n\r\n#setting{\r\n  width: 30px;\r\n  height: 25px;\r\n  font-size:15px;\r\n  right:0px; \r\n  text-align:center;\r\n  position: absolute;\r\n  top: 10px;\r\n  background-color:transparent;\r\n  border:0;\r\n}\r\n\r\n\r\n.selected{\r\n  color: grey;\r\n\r\n}\r\n.visible{\r\n  color: grey;\r\n}\r\n\r\n.cursor {\r\n\r\n}\r\n\r\n.selectvisible{\r\n  background-color:  white !important;\r\n  color:#395d73;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\"  \r\n    (mousemove)=\"onDocumentMouseMove($event)\" \r\n    (mousedown)=\"mousedown($event)\"\r\n    (mouseup)=\"mouseup($event)\"\r\n\t\t(click)=\"onDocumentMouseDown($event)\">\r\n    <!-- (window:resize)=\"onResize($event)\" -->\r\n\r\n\t\r\n  \t\t<!-- <button id=\"rotating\" \r\n  \t\t\t[class.visible]=\"Visible === 'rotate'\" \r\n  \t\t\t(click)=\"rotate()\">\r\n  \t\t\t<i class=\"fa fa-refresh\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"paning\"  \r\n  \t\t\t[class.visible]=\"Visible === 'pan'\" \r\n  \t\t\t(click)=\"pan()\">\r\n  \t\t\t<i class=\"fa fa-hand-paper-o\"></i>\r\n  \t\t</button>\r\n\r\n  \t\t<button id=\"zooming\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoom'\" \r\n  \t\t\t(click)=\"Visible='zoom'\">\r\n  \t\t\t<i class=\"fa fa-search\"></i>\r\n  \t\t</button>-->\r\n  \t\t\r\n  \t\t<button id=\"zoomingfit\"  \r\n  \t\t\t[class.visible]=\"Visible === 'zoomfit'\" \r\n  \t\t\t(click)=\"zoomfit()\">\r\n  \t\t\t<i class=\"fa fa-arrows-alt\"></i>\r\n  \t\t</button> \r\n  \t\t\r\n  \t\t<!-- <button id=\"selecting\" [class.visible]=\"Visible === 'select'\" (click)= \"select($event, Visible)\" ><i class=\"fa fa-mouse-pointer\"></i></button> -->\r\n  \t\t\r\n  \t\t<button id=\"setting\" [class.selected]=\"settingVisible\" (click)= \"settingVisible = !settingVisible\"><i class=\"fa fa-cog\"></i></button>\r\n\r\n      <button id=\"selecting\" [class.selected]=\"seVisible\" (click)= \"select(seVisible)\" ><i class=\"fa fa-mouse-pointer\"></i></button>\r\n\r\n      \t\r\n      \t<!--setting-->\r\n      \t\r\n \t\t<app-setting *ngIf=\"settingVisible == true\"></app-setting>\r\n    <div *ngIf=\"seVisible == true\">\r\n        <button id=\"points\" [class.selectvisible]=\"SelectVisible === 'Points'\" (click)=\"pointselect(SelectVisible)\">P</button>\r\n        <button id=\"vertices\" [class.selectvisible]=\"SelectVisible === 'Vertices'\" (click)=\"verticeselect(SelectVisible)\">V</button>\r\n        <button id=\"edges\" [class.selectvisible]=\"SelectVisible === 'Edges'\" (click)=\"edgeselect(SelectVisible)\">E</button>\r\n        <button id=\"wires\" [class.selectvisible]=\"SelectVisible === 'Wires'\" (click)=\"wireselect(SelectVisible)\">W</button>\r\n        <button id=\"faces\" [class.selectvisible]=\"SelectVisible === 'Faces'\" (click)=\"faceselect(SelectVisible)\">F</button>\r\n        <button id=\"objects\" [class.selectvisible]=\"SelectVisible === 'Objs'\" (click)=\"objectselect(SelectVisible)\">O</button>\r\n      </div>\r\n</div>\r\n\r\n\r\n\t\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/gs-viewer/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__ = __webpack_require__("../../../../../src/app/gs-viewer/data/DataSubscriber.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ResizedEvent } from 'angular-resize-event';
var ViewerComponent = /** @class */ (function (_super) {
    __extends(ViewerComponent, _super);
    function ViewerComponent(injector, myElement) {
        var _this = _super.call(this, injector) || this;
        _this.Visible = "Objs";
        _this.mySprites = [];
        _this.textlabels = [];
        _this.starsGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
        _this.seVisible = false;
        _this.SelectVisible = 'Objs';
        _this.myElement = myElement;
        return _this;
    }
    ViewerComponent.prototype.ngOnInit = function () {
        var container = this.myElement.nativeElement.children.namedItem("container");
        /// check for container
        if (!container) {
            console.error("No container in Three Viewer");
            return;
        }
        ///
        var width = container.clientWidth;
        var height = container.clientHeight;
        var scene = this.dataService.getScene(width, height);
        var renderer = this.dataService.getRenderer();
        var camera = this.dataService.getCamera();
        var controls = this.dataService.getControls();
        container.appendChild(renderer.domElement);
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.controls = controls;
        this.width = width;
        this.height = height;
        this.updateModel();
        // todo: check and refactor what is required?
        this.selecting = this.dataService.getselecting(); // todo: should this be in the data service??
        this.mouse = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector2"]();
        this.raycaster = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"]();
        this.scenechildren = this.dataService.getscenechild();
        this.scenechild = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["SphereGeometry"](0.3);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshBasicMaterial"]({ color: 0x00ff00 });
        this.sphere = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        this.sphere.visible = false;
        this.sphere.name = "sphereInter";
        this.scene.add(this.sphere);
        this.threshold = 1;
        this.linpre = 1;
        // render loop
        var self = this;
        function animate() {
            self.raycaster.setFromCamera(self.mouse, self.camera);
            //self.raycaster.linePrecision=0.05;
            self.raycaster.linePrecision = 0.5;
            //self.raycaster.params.Points.threshold=0.05;
            self.raycaster.params.Points.threshold = 0.2;
            self.scenechildren = self.dataService.getscenechild();
            var intersects = self.raycaster.intersectObjects(self.scenechildren);
            /*if(self.scenechildren.length!==0&&self.scenechildren[0].name==="All points"||"All vertices") {
              if(intersects.length>1) {self.threshold=self.threshold-0.01;}
                self.raycaster.params.Points.threshold=self.threshold;
            }
            if(self.scenechildren.length!==0&&self.scenechildren[0].name==="All edges"||"All wires") {
              if(intersects.length>1) {self.linpre=self.linpre-0.01;}
                self.raycaster.linePrecision=self.linpre;
            }*/
            for (var i = 0; i < self.scenechildren.length; i++) {
                var currObj = self.scenechildren[i];
                if (self.dataService.getSelectingIndex(currObj.uuid) < 0) {
                    if (intersects[0] != undefined && intersects[0].object.uuid == currObj.uuid) {
                        if (self.seVisible === true) {
                            self.sphere.visible = true;
                            self.sphere.position.copy(intersects[0].point);
                        }
                    }
                    else {
                        self.sphere.visible = false;
                    }
                }
            }
            for (var i = 0; i < self.textlabels.length; i++) {
                self.textlabels[i].updatePosition();
            }
            if (self.dataService.selecting.length != 0) {
                self.updateview();
            }
            requestAnimationFrame(animate);
            self.renderer.render(self.scene, self.camera);
        }
        ;
        animate();
        for (var i = 0; i < this.getchildren().length; i++) {
            this.getchildren()[i]["material"].transparent = false;
        }
        //this.addgrid();
    };
    //
    //  checks if the data service has a data and calls update function for the viewer
    //
    ViewerComponent.prototype.notify = function (message) {
        if (message == "model_update" && this.scene) {
            this.updateModel();
        }
    };
    /// clears all children from the scene
    ViewerComponent.prototype.clearScene = function () {
        /// remove children from scene
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                this.scene.remove(this.scene.children[i]);
            }
        }
    };
    ViewerComponent.prototype.onResize = function (event) {
        /*console.log(document);
        let changewidth:number=this.myElement.nativeElement.children.namedItem("container").clientWidth;
        let changeheight:number=this.myElement.nativeElement.children.namedItem("container").clientHeight;
        if(this.width!==changewidth||this.height!==changeheight){
          //this.width = event.target.innerWidth;//event.ClientWidth;
          //this.height = event.target.innerHeight;//event.ClientHeight;
          this.width = changeheight;//event.ClientWidth;
          this.height = changeheight;//event.ClientHeight;
          this.renderer.setSize(this.width,this.height);
          this.camera.aspect=this.width/this.height;
          this.camera.updateProjectionMatrix();
        }*/
    };
    //
    // update mode
    // todo: optimize
    // 
    ViewerComponent.prototype.updateModel = function () {
        this._model = this.dataService.getGsModel();
        if (!this._model || !this.scene) {
            console.warn("Model or Scene not defined.");
            return;
        }
        try {
            //this.scene_and_maps= gs.genThreeOptModelAndMaps( this._model );
            this.scene_and_maps = this.dataService.getscememaps();
            var scene_data = this.scene_and_maps.scene;
            //[three_mode, egde_map, tri_map] = genThreeModelandMaps()
            //[three_mode, label_data] = gs.getThreeWire(labels)
            //gs.getThreeFace(label)
            //gs.getThreeObj
            this.clearScene();
            var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["ObjectLoader"]();
            // loading data
            var objectData = loader.parse(scene_data);
            // preprocessing
            if (objectData.children !== undefined) {
                var radius = 0;
                for (var i = 0; i < objectData.children.length; i++) {
                    var chd = objectData.children[i];
                    chd["material"].needsUpdate = true;
                    chd["material"].transparent = true;
                    chd["material"].blending = 1;
                    /*var nan:boolean=false;
                    var array=chd["geometry"].attributes.position.array;
                    nan=array.filter(function(undentified) {return true});
                    console.log(chd)*/ ;
                    if (chd.name === "All faces" || chd.name === "All wires" || chd.name === "All edges" || chd.name === "All vertices" ||
                        chd.name === "Other lines" || chd.name === "All points") {
                        chd["geometry"].computeVertexNormals();
                        chd["geometry"].computeBoundingBox();
                        chd["geometry"].computeBoundingSphere();
                        if (chd.name === "All edges" || chd.name === "Other lines") {
                            this.basicMat = chd["material"].color;
                        }
                        //}
                    }
                    if (chd["geometry"] != undefined && chd["geometry"].boundingSphere.radius !== null) {
                        if (chd["geometry"].boundingSphere.radius > radius) {
                            radius = chd["geometry"].boundingSphere.radius;
                            this.center = chd["geometry"].boundingSphere.center;
                        }
                    }
                }
            }
            // setting controls
            this.controls.target.set(this.center.x, this.center.y, this.center.z);
            this.controls.update();
            // adding the object to the scene
            this.scene.add(objectData);
            // add the grid based on size of the object
            this.addgrid();
        }
        catch (ex) {
            console.error("Error displaying model:", ex);
        }
    };
    ViewerComponent.prototype.getMaterial = function (name) {
        var canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        var context = canvas.getContext('2d');
        context.textAlign = "center";
        context.fillText(name, canvas.width / 2, canvas.height / 2);
        context.font = "Bold  100px sans-serif";
        var texture = new __WEBPACK_IMPORTED_MODULE_1_three__["Texture"](canvas);
        texture.needsUpdate = true;
        var spriteMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["SpriteMaterial"]({ map: texture, color: 0xffffff });
        return spriteMaterial;
    };
    ViewerComponent.prototype.getchildren = function () {
        var children;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name == "Scene") {
                children = this.scene.children[i].children;
                break;
            }
            if (i == this.scene.children.length - 1) {
                return [];
            }
        }
        return children;
    };
    ViewerComponent.prototype.select = function (seVisible) {
        event.stopPropagation();
        this.seVisible = !this.seVisible;
        if (this.seVisible) {
            if (this.SelectVisible === "Objs") {
                this.objectselect(this.SelectVisible);
            }
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = true;
            }
        }
        else {
            for (var i = 0; i < this.getchildren().length; i++) {
                this.getchildren()[i]["material"].transparent = false;
                if (this.getchildren()[i].name == "All edges" || this.getchildren()[i].name == "Other edges") {
                    this.getchildren()[i]["material"].color = this.basicMat;
                }
            }
        }
    };
    ViewerComponent.prototype.objectselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Objs";
        this.dataService.visible = "Objs";
        document.getElementById("object").style.color = null;
        document.getElementById("face").style.color = null;
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0;
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                children[i]["material"].opacity = 0.8;
                children[i].name = "All objs";
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    };
    ViewerComponent.prototype.faceselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Faces";
        this.dataService.visible = "Faces";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = null;
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All objs" || children[i].name === "All faces") {
                children[i]["material"].opacity = 0.8;
                children[i].name = "All faces";
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    };
    ViewerComponent.prototype.wireselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Wires";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = null;
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires") {
                children[i]["material"].opacity = 0.6;
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    };
    ViewerComponent.prototype.edgeselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Edges";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = "grey";
        document.getElementById("edge").style.color = null;
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            children[i]["material"].transparent = true;
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All vertices")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.5;
                children[i]["material"].color = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](255, 255, 0);
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    };
    ViewerComponent.prototype.verticeselect = function (SelectVisible) {
        event.stopPropagation();
        this.SelectVisible = "Vertices";
        document.getElementById("object").style.color = "grey";
        document.getElementById("face").style.color = "grey";
        document.getElementById("wire").style.color = "grey";
        document.getElementById("edge").style.color = "grey";
        document.getElementById("vertice").style.color = null;
        var scenechildren = [];
        var children = this.getchildren();
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === "All objs" || children[i].name === "All faces")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All wires")
                children[i]["material"].opacity = 0.1;
            if (children[i].name === "All edges" || children[i].name === "Other lines") {
                children[i]["material"].opacity = 0.1;
                children[i]["material"].color = this.basicMat;
            }
            if (children[i].name === "All vertices") {
                children[i]["material"].opacity = 1;
                //scenechildren.push(children[i]);
            }
            if (children[i].name === "All points") {
                scenechildren.push(children[i]);
            }
        }
        this.dataService.addscenechild(scenechildren);
    };
    ViewerComponent.prototype.pointselect = function (SelectVisible) {
        event.stopPropagation();
        this.verticeselect("Vertices");
        this.SelectVisible = "Points";
    };
    //
    //  events
    //
    ViewerComponent.prototype.mousedown = function ($event) {
        this.mDownTime = (new Date()).getTime();
    };
    ViewerComponent.prototype.mouseup = function ($event) {
        this.mUpTime = (new Date()).getTime();
    };
    ViewerComponent.prototype.onDocumentMouseMove = function (event) {
        this.onResize(event);
        this.mouse.x = (event.offsetX / this.width) * 2 - 1;
        this.mouse.y = -(event.offsetY / this.height) * 2 + 1;
    };
    ViewerComponent.prototype.addgrid = function () {
        var max = 8;
        var center = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0);
        var radius = 0;
        for (var i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].type === "Scene") {
                for (var j = 0; j < this.scene.children[i].children.length; j++) {
                    if (this.scene.children[i].children[j]["geometry"].boundingSphere.radius > radius) {
                        center = this.scene.children[i].children[j]["geometry"].boundingSphere.center;
                        radius = this.scene.children[i].children[j]["geometry"].boundingSphere.radius;
                        max = Math.ceil(radius + Math.max(Math.abs(center.x), Math.abs(center.y), Math.abs(center.z))) * 2;
                        break;
                    }
                }
            }
            if (this.scene.children[i].name === "GridHelper") {
                this.scene.remove(this.scene.children[i]);
                i = i - 1;
            }
        }
        // todo: change grid -> grid_value
        if (this.dataService.grid) {
            var gridhelper = new __WEBPACK_IMPORTED_MODULE_1_three__["GridHelper"](max, max);
            gridhelper.name = "GridHelper";
            var vector = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 1, 0);
            gridhelper.lookAt(vector);
            gridhelper.position.set(center.x, center.y, 0);
            this.scene.add(gridhelper);
        }
    };
    /// selects object from three.js scene
    ViewerComponent.prototype.onDocumentMouseDown = function (event) {
        //if(this.seVisible===true) console.log(event);
        //console.log(this.scene_and_maps);
        var threshold;
        if (this.seVisible === true) {
            threshold = 100;
        }
        else {
            threshold = 0.1;
        }
        if (Math.abs(this.mDownTime - this.mUpTime) > threshold) {
            this.mDownTime = 0;
            this.mUpTime = 0;
            return;
        }
        var selectedObj, intersects;
        var select = false;
        this.scenechildren = this.dataService.getscenechild();
        this.raycaster.setFromCamera(this.mouse, this.camera);
        //this.raycaster.linePrecision = 0.05;
        this.raycaster.linePrecision = 0.5;
        //this.raycaster.params.Points.threshold=0.05;
        this.raycaster.params.Points.threshold = 0.2;
        intersects = this.raycaster.intersectObjects(this.scenechildren);
        if (intersects.length > 0) {
            selectedObj = intersects[0].object;
            if (this.scenechildren[0].name === "All objs") {
                var index_1 = Math.floor(intersects[0].faceIndex / 2);
                var path = this.scene_and_maps.faces_map.get(index_1);
                var face = this._model.getGeom().getTopo(path);
                var label_1 = "o" + path.id;
                var label_xyz = face.getLabelCentroid();
                var faces = face.getObj().getFaces();
                if (this.textlabels.length === 0) {
                    for (var n = 0; n < faces.length; n++) {
                        var verts = faces[n].getVertices();
                        var verts_xyz = verts.map(function (v) { return v.getPoint().getPosition(); });
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                        }
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                        mesh["geometry"].computeVertexNormals();
                        mesh.userData.id = label_1;
                        mesh.name = "selects";
                        this.scene.add(mesh);
                    }
                    this.addTextLabel(label_1, label_xyz, label_1, index_1, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label_1 === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                            j = j - 1;
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label_1 === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                            j = j - 1;
                        }
                    }
                    if (select == false) {
                        for (var n = 0; n < faces.length; n++) {
                            var verts = faces[n].getVertices();
                            var verts_xyz = verts.map(function (v) { return v.getPoint().getPosition(); });
                            var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                            for (var i = 0; i < verts_xyz.length; i++) {
                                geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz[i][0], verts_xyz[i][1], verts_xyz[i][2]));
                            }
                            geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                            geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                            var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                            mesh.userData.id = label_1;
                            mesh["geometry"].computeVertexNormals();
                            mesh.name = "selects";
                            this.scene.add(mesh);
                        }
                        this.addTextLabel(label_1, label_xyz, label_1, index_1, path);
                    }
                }
            }
            if (this.scenechildren[0].name === "All faces") {
                var index_2 = Math.floor(intersects[0].faceIndex / 2);
                var path = this.scene_and_maps.faces_map.get(index_2);
                var face = this._model.getGeom().getTopo(path);
                var label_2 = face.getLabel();
                var label_xyz = face.getLabelCentroid();
                var verts_1 = face.getVertices();
                var verts_xyz_1 = verts_1.map(function (v) { return v.getPoint().getPosition(); });
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz_1.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_1[i][0], verts_xyz_1[i][1], verts_xyz_1[i][2]));
                    }
                    geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                    geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                    var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                    mesh.userData.id = label_2;
                    mesh["geometry"].computeVertexNormals();
                    mesh.name = "selects";
                    this.scene.add(mesh);
                    this.addTextLabel(label_2, label_xyz, label_2, index_2, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label_2 === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label_2 === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz_1.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_1[i][0], verts_xyz_1[i][1], verts_xyz_1[i][2]));
                        }
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 2, 1));
                        geometry.faces.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Face3"](0, 3, 2));
                        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] }));
                        mesh.userData.id = label_2;
                        mesh["geometry"].computeVertexNormals();
                        mesh.name = "selects";
                        this.scene.add(mesh);
                        this.addTextLabel(label_2, label_xyz, label_2, index_2, path);
                    }
                }
            }
            if (this.scenechildren[0].name == "All wires") {
                var index_3 = Math.floor(intersects[0].index / 2);
                /*console.log(index);
                console.log(this.scene_and_maps.wires_map);*/
                var path = this.scene_and_maps.wires_map.get(index_3);
                var wire = this._model.getGeom().getTopo(path);
                var label_3 = wire.getLabel();
                var label_xyz = wire.getLabelCentroid();
                var verts_2 = wire.getVertices();
                var verts_xyz_2 = verts_2.map(function (v) { return v.getPoint().getPosition(); });
                if (wire.isClosed()) {
                    verts_xyz_2.push(verts_xyz_2[0]);
                }
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz_2.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_2[i][0], verts_xyz_2[i][1], verts_xyz_2[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = label_3;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label_3, label_xyz, label_3, index_3, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label_3 === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label_3 === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz_2.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_2[i][0], verts_xyz_2[i][1], verts_xyz_2[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label_3;
                        line["material"].needsUpdate = true;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label_3, label_xyz, label_3, index_3, path);
                    }
                }
            }
            if (this.scenechildren[0].name == "All edges" || this.scenechildren[0].name == "Other lines") {
                var index_4 = Math.floor(intersects[0].index / 2);
                var path = this.scene_and_maps.edges_map.get(index_4);
                var edge = this._model.getGeom().getTopo(path);
                var label_4 = edge.getLabel();
                var label_xyz = edge.getLabelCentroid();
                var verts_3 = edge.getVertices();
                var verts_xyz_3 = verts_3.map(function (v) { return v.getPoint().getPosition(); });
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    for (var i = 0; i < verts_xyz_3.length; i++) {
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_3[i][0], verts_xyz_3[i][1], verts_xyz_3[i][2]));
                    }
                    var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                    var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                    line.userData.id = label_4;
                    line["material"].needsUpdate = true;
                    line.name = "selects";
                    this.scene.add(line);
                    this.addTextLabel(label_4, label_xyz, label_4, index_4, path);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (label_4 === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (label_4 === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        for (var i = 0; i < verts_xyz_3.length; i++) {
                            geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_3[i][0], verts_xyz_3[i][1], verts_xyz_3[i][2]));
                        }
                        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["LineBasicMaterial"]({ color: 0x00ff00, side: __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"] });
                        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["Line"](geometry, material);
                        line.userData.id = label_4;
                        line.name = "selects";
                        this.scene.add(line);
                        this.addTextLabel(label_4, label_xyz, label_4, index_4, path);
                    }
                }
            }
            /*if(this.scenechildren[0].name=="Other lines"){
      
            }*/
            if (this.scenechildren[0].name === "All points") {
                //for(var n=0;n<intersects.length;n++){
                //console.log(intersects);
                var index = intersects[0].index;
                var attributevertix = this.dataService.getattrvertix();
                var id = this._model.getGeom().getAllPoints()[index].getLabel();
                //console.log(id);
                var label = "";
                if (this.SelectVisible == "Points") {
                    if (label === "")
                        label = id;
                    else
                        label = label + "<br/>" + id;
                }
                else {
                    for (var i = 0; i < attributevertix.length; i++) {
                        if (id === attributevertix[i].pointid) {
                            var str = attributevertix[i].vertixlabel;
                            if (label === "")
                                label = str;
                            else
                                label = label + "<br/>" + str;
                        }
                    }
                    //}
                }
                var verts_xyz_4 = this._model.getGeom().getAllPoints()[index].getPosition(); //vertices.getPoint().getPosition();
                if (this.textlabels.length === 0) {
                    var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                    geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_4[0], verts_xyz_4[1], verts_xyz_4[2]));
                    var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                    var points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                    points.userData.id = id;
                    points["material"].needsUpdate = true;
                    points.name = "selects";
                    this.scene.add(points);
                    this.addTextLabel(label, verts_xyz_4, id, index, id);
                }
                else {
                    for (var j = 0; j < this.scene.children.length; j++) {
                        if (id === this.scene.children[j].userData.id) {
                            select = true;
                            this.scene.remove(this.scene.children[j]);
                        }
                    }
                    for (var j = 0; j < this.textlabels.length; j++) {
                        if (id === this.textlabels[j]["id"]) {
                            select = true;
                            this.removeTextLabel(this.textlabels[j]["id"]);
                        }
                    }
                    if (select == false) {
                        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["Geometry"]();
                        geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](verts_xyz_4[0], verts_xyz_4[1], verts_xyz_4[2]));
                        var pointsmaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["PointsMaterial"]({ color: 0x00ff00, size: 1 });
                        var points = new __WEBPACK_IMPORTED_MODULE_1_three__["Points"](geometry, pointsmaterial);
                        points.userData.id = id;
                        points["material"].needsUpdate = true;
                        points.name = "selects";
                        this.scene.add(points);
                        this.addTextLabel(label, verts_xyz_4, id, index, id);
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.dataService.sprite.length; i++) {
                this.dataService.sprite[i].visible = false;
            }
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name == "selects") {
                    this.scene.remove(this.scene.children[i]);
                    i = i - 1;
                }
            }
            for (var i = 0; i < this.textlabels.length; i++) {
                this.removeTextLabel(this.textlabels[i]["id"]);
                i = i - 1;
            }
        }
        //}
    };
    ViewerComponent.prototype.updateview = function () {
        this.Visible = this.dataService.visible;
        var intersects = this.raycaster.intersectObjects(this.scenechildren);
        if (intersects.length > 0) {
            if (this.dataService.selecting.length != 0) {
                for (var i = 0; i < this.mySprites.length; i++) {
                    if (this.mySprites[i].parent.name === this.Visible) {
                        var spr = this.mySprites[i];
                        if (Math.abs(intersects[0].point.x - this.mySprites[i].position.x) < 0.05
                            && Math.abs(intersects[0].point.y - this.mySprites[i].position.y) < 0.05
                            && Math.abs(intersects[0].point.z - this.mySprites[i].position.z) < 0.05) {
                            //let spr: THREE.Sprite =this.mySprites[i];
                            spr.visible = true;
                        }
                        else {
                            //let spr: THREE.Sprite =this.mySprites[i];
                            spr.visible = false;
                        }
                    }
                }
            }
        } /*else{
          this.Visible=this.dataService.visible;
          for(var i=0;i<this.mySprites.length;i++){
            if(this.mySprites[i].parent.name===this.Visible){
              let spr: THREE.Sprite =this.mySprites[i];
              spr.visible = false;
            }
          }
        }*/
        for (var i = 0; i < this.dataService.sprite.length; i++) {
            var spr = this.dataService.sprite[i];
            spr.visible = true;
        }
    };
    //To add text labels just provide label text, label position[x,y,z] and its id
    ViewerComponent.prototype.addTextLabel = function (label, label_xyz, id, index, path) {
        var container = this.myElement.nativeElement.children.namedItem("container");
        var star = this.creatStarGeometry(label_xyz);
        var textLabel = this.createTextLabel(label, star, id, index, path);
        this.starsGeometry.vertices.push(star);
        this.textlabels.push(textLabel);
        this.dataService.pushselecting(textLabel);
        container.appendChild(textLabel.element);
    };
    //To remove text labels just provide its id
    ViewerComponent.prototype.removeTextLabel = function (id) {
        var i = 0;
        for (i = 0; i < this.textlabels.length; i++) {
            if (this.textlabels[i].id == id) {
                var container = this.myElement.nativeElement.children.namedItem("container");
                container.removeChild(this.textlabels[i].element);
                var index = this.starsGeometry.vertices.indexOf(this.textlabels[i].parent);
                if (index !== -1) {
                    this.starsGeometry.vertices.splice(index, 1);
                }
                break;
            }
        }
        if (i < this.textlabels.length) {
            this.textlabels.splice(i, 1);
            this.dataService.spliceselecting(i, 1);
        }
    };
    ViewerComponent.prototype.creatStarGeometry = function (label_xyz) {
        var star = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
        star.x = label_xyz[0];
        star.y = label_xyz[1];
        star.z = label_xyz[2];
        return star;
    };
    ViewerComponent.prototype.createTextLabel = function (label, star, id, index, path) {
        var div = this.createLabelDiv();
        var self = this;
        var textLabel = {
            id: id,
            index: index,
            path: path,
            element: div,
            parent: false,
            position: new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0),
            setHTML: function (html) {
                this.element.innerHTML = html;
            },
            setParent: function (threejsobj) {
                this.parent = threejsobj;
            },
            updatePosition: function () {
                if (parent) {
                    this.position.copy(this.parent);
                }
                var coords2d = this.get2DCoords(this.position, self.camera);
                this.element.style.left = coords2d.x + 'px';
                this.element.style.top = coords2d.y + 'px';
            },
            get2DCoords: function (position, camera) {
                var vector = position.project(camera);
                vector.x = (vector.x + 1) / 2 * self.width;
                vector.y = -(vector.y - 1) / 2 * self.height;
                return vector;
            }
        };
        textLabel.setHTML(label);
        textLabel.setParent(star);
        return textLabel;
    };
    ViewerComponent.prototype.createLabelDiv = function () {
        var div = document.createElement("div");
        div.style.color = '#00f';
        div.style.fontFamily = '"Fira Mono", Monaco, "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace';
        div.style.margin = '-5px 0 0 15px';
        div.style.pointerEvents = 'none';
        div.style.position = 'absolute';
        div.style.width = '100';
        div.style.height = '100';
        div.style.top = '-1000';
        div.style.left = '-1000';
        div.style.textShadow = "0px 0px 3px white";
        div.style.color = "black";
        return div;
    };
    ViewerComponent.prototype.zoomfit = function () {
        event.preventDefault();
        if (this.selecting.length === 0) {
            var obj = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            for (var i = 0; i < this.scene.children.length; i++) {
                if (this.scene.children[i].name !== "GridHelper") {
                    obj.children.push(this.scene.children[i]);
                }
            }
            var boxHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxHelper"](obj);
            boxHelper["geometry"].computeBoundingBox();
            boxHelper["geometry"].computeBoundingSphere();
            var boundingSphere = boxHelper["geometry"].boundingSphere;
            var center = boundingSphere.center;
            var radius = boundingSphere.radius;
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x + Math.abs(radius / Math.sin(fov / 2)), center.y + Math.abs(radius / Math.sin(fov / 2)), center.z + Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
        }
        else {
            var axisX, axisY, axisZ, centerX, centerY, centerZ = 0;
            var radius = 0;
            for (var i = 0; i < this.selecting.length; i++) {
                axisX += this.selecting[i].geometry.boundingSphere.center.x;
                axisY += this.selecting[i].geometry.boundingSphere.center.y;
                axisZ += this.selecting[i].geometry.boundingSphere.center.z;
                radius = Math.max(this.selecting[i].geometry.boundingSphere.radius, radius);
            }
            centerX = axisX / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            centerY = axisY / this.scene.children[1].children.length;
            var center = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](centerX, centerY, centerZ);
            var fov = this.camera.fov * (Math.PI / 180);
            var vec_centre_to_pos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            vec_centre_to_pos.subVectors(this.camera.position, center);
            var tmp_vec = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x + Math.abs(radius / Math.sin(fov / 2)), center.y + Math.abs(radius / Math.sin(fov / 2)), center.z + Math.abs(radius / Math.sin(fov / 2)));
            vec_centre_to_pos.setLength(tmp_vec.length());
            var perspectiveNewPos = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
            perspectiveNewPos.addVectors(center, vec_centre_to_pos);
            var newLookAt = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](center.x, center.y, center.z);
            this.camera.position.copy(perspectiveNewPos);
            this.camera.lookAt(newLookAt);
            this.camera.updateProjectionMatrix();
            this.controls.target.set(newLookAt.x, newLookAt.y, newLookAt.z);
        }
    };
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-viewer',
            template: __webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gs-viewer/viewer/viewer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], ViewerComponent);
    return ViewerComponent;
}(__WEBPACK_IMPORTED_MODULE_2__data_DataSubscriber__["a" /* DataSubscriber */]));



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map