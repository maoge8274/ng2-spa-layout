"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var col_body_directive_1 = require("./col-body.directive");
var Col = (function () {
    function Col() {
    }
    Col.prototype.ngOnInit = function () {
    };
    return Col;
}());
__decorate([
    core_1.ContentChildren(col_body_directive_1.ColBody),
    __metadata("design:type", col_body_directive_1.ColBody)
], Col.prototype, "body", void 0);
Col = __decorate([
    core_1.Component({
        selector: 'layout-col',
        styles: [
            "\n        :host{\n            width:100%\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [])
], Col);
exports.Col = Col;
//# sourceMappingURL=col.component.js.map