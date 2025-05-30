"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <link rel="shortcut icon"
    href="https://static-index-4gtuqm3bfa95c963-1304825656.tcloudbaseapp.com/official-website/favicon.svg"
    mce_href="https://static-index-4gtuqm3bfa95c963-1304825656.tcloudbaseapp.com/official-website/favicon.svg"
    type="image/x-icon" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  <title>欢迎使用腾讯云托管</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
    }

    .title-logo {
      width: 80px;
      height: 80px;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media screen and (min-width:1200px) {
      body .container {
        margin-top: 160px;
        margin-bottom: 272px;
      }
    }

    @media screen and (max-width:1919px) {
      body .container {
        margin-top: 76px;
        margin-bottom: 128px;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .count-button {
      width: 320px;
      height: 40px;
      box-sizing: border-box;
      margin: 16px 8px;
      font-weight: 500;
      font-size: 17px;
      color: #FFFFFF;
      letter-spacing: 1px;
      text-align: center;
      border-radius: 4px;
    }

    .count-number {
      align-self: flex-start;
      opacity: 0.9;
      font-weight: 500;
      font-size: 14px;
      color: #000000;
    }

    .count-reset {
      color: #576b95;
      cursor: pointer;
      margin-left: auto;
    }

    .count-text {
      width: 320px;
      height: 40px;
      padding: 0 12px;
      margin: 0 auto;
      line-height: 40px;
      text-align: left;
      display: flex;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      opacity: 0.9;
      box-sizing: border-box;
      font-weight: 400;
      font-size: 14px;
      color: #000000;
    }

    .quote {
      font-size: 12px;
    }

    .qrcode {
      height: 144px;
      width: 144px;
      display: block;
      margin: 0 auto;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 320px;
    }

    .title-text {
      width: 320px;
      height: 48px;
      text-align: center;
      margin-top: 16px;
      font-size: 32px;
      opacity: 0.9;
      font-weight: 500;
      font-size: 32px;
      color: #000000;
      letter-spacing: 0;
      line-height: 48px;
    }

    .counter-container {
      margin-top: 48px;
    }

    .hr {
      text-align: center;
      position: relative;
      z-index: 2;
      height: 20px;
      line-height: 20px;
    }

    .hr::after {
      position: absolute;
      content: '';
      top: 10px;
      left: 60px;
      width: 200px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      z-index: -1;
    }

    .hr small {
      display: inline-block;
      background-color: white;
    }

    .hr-text {
      display: inline-block;
      height: 20px;
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.55);
      letter-spacing: 0;
      text-align: center;
      z-index: 2;
      background-color: white;
      padding: 0 8px;
      line-height: 20px;
    }

    .link-button {
      width: 154px;
      height: 48px;
      box-sizing: border-box;
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.90);
      letter-spacing: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.03);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card {
      margin-top: 16px;
      width: 320px;
      height: 200px;
      box-sizing: border-box;
      border: 1px solid rgba(0, 0, 0, 0.10);
      border-radius: 5.71px;
      position: relative;
    }

    .card-text {
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.55);
      letter-spacing: 0;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="title">
      <img class="title-logo"
        src="https://static-index-4gtuqm3bfa95c963-1304825656.tcloudbaseapp.com/official-website/favicon.svg" />
      <div style="display: inline; margin-bottom: 48px" class="title-text">欢迎使用腾讯云托管</div>
    </div>
  </div>
</body>
</html>
    `;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map