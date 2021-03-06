/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const application_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(application_1.Application, {
        cors: true
    });
    app.setGlobalPrefix(`/${process.env.MYAPP_PREFIX}`);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('猿来阅app')
        .setDescription('全网学习数据分享')
        .setVersion('0.1')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.MYAPP_PORT || 8001, () => {
        console.log(`Server myapp runing http://localhost:${process.env.MYAPP_PORT} port...`);
    });
}
bootstrap();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_module_1 = __webpack_require__(5);
const common_module_1 = __webpack_require__(13);
const db_module_1 = __webpack_require__(16);
const config_1 = __webpack_require__(26);
const user_module_1 = __webpack_require__(27);
const common_1 = __webpack_require__(1);
const auth_1 = __webpack_require__(43);
const bookshop_module_1 = __webpack_require__(52);
let Application = class Application {
};
Application = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            user_module_1.UserModule,
            db_module_1.DbModule,
            auth_1.AuthModule,
            bookshop_module_1.BookshopModule,
            common_module_1.CommonModule,
            update_module_1.UpdateModule
        ]
    })
], Application);
exports.Application = Application;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const update_controller_1 = __webpack_require__(7);
const update_service_1 = __webpack_require__(8);
const app_entity_1 = __webpack_require__(9);
const ad_img_entity_1 = __webpack_require__(17);
let UpdateModule = class UpdateModule {
};
UpdateModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([app_entity_1.App, ad_img_entity_1.AdImg])],
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService]
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_service_1 = __webpack_require__(8);
const app_dto_1 = __webpack_require__(11);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
let UpdateController = class UpdateController {
    constructor(updateService) {
        this.updateService = updateService;
    }
    async checkUpdate(appDto) {
        const updateInfo = await this.updateService.checkUpdate(appDto);
        return {
            code: 2000,
            message: '检测完成。',
            result: updateInfo
        };
    }
    async startAdimg() {
        const adimg = await this.updateService.startAdimg();
        return {
            code: 2000,
            message: '开屏广告获取成功。',
            result: adimg
        };
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '检测是否更新' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.AppDto]),
    __metadata("design:returntype", Promise)
], UpdateController.prototype, "checkUpdate", null);
__decorate([
    common_1.Get('start'),
    swagger_1.ApiOperation({ summary: '获取开屏广告' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UpdateController.prototype, "startAdimg", null);
UpdateController = __decorate([
    common_1.Controller('update'),
    swagger_1.ApiTags('app更新'),
    __metadata("design:paramtypes", [update_service_1.UpdateService])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(6);
const app_entity_1 = __webpack_require__(9);
const typeorm_2 = __webpack_require__(10);
const ad_img_entity_1 = __webpack_require__(17);
let UpdateService = class UpdateService {
    constructor(appRepository, adImgRepository) {
        this.appRepository = appRepository;
        this.adImgRepository = adImgRepository;
    }
    async checkUpdate(appDto) {
        const { appid } = appDto;
        const appinfo = await this.appRepository.findOne(appid);
        if (!appinfo) {
            throw new common_1.HttpException('appid 错误', common_1.HttpStatus.FORBIDDEN);
        }
        let serverApp = appinfo.version.split('.');
        let clientApp = appDto.version.split('.');
        let updateInfo = {
            isUpdate: null,
            content: appinfo.content,
            updateUrl: null
        };
        if (Number(serverApp[2]) > Number(clientApp[2])) {
            updateInfo.isUpdate = 1;
            updateInfo.updateUrl = appinfo.hot_url;
        }
        else if (Number(serverApp[1]) > Number(clientApp[1])) {
            updateInfo.isUpdate = 2;
            updateInfo.updateUrl = appinfo.pack_url;
        }
        else if (Number(serverApp[0]) > Number(clientApp[0])) {
            updateInfo.isUpdate = 3;
            updateInfo.updateUrl = appinfo.pack_url;
        }
        else {
            updateInfo.isUpdate = 0;
            updateInfo.content = null;
        }
        return updateInfo;
    }
    async startAdimg() {
        return this.adImgRepository.findOne({ where: { type: 1, status: 1 } });
    }
};
UpdateService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(app_entity_1.App)),
    __param(1, typeorm_1.InjectRepository(ad_img_entity_1.AdImg)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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
const swagger_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(10);
let App = class App {
};
__decorate([
    swagger_1.ApiProperty({
        description: 'appid',
        required: true,
        example: '__UNI__BF91653'
    }),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], App.prototype, "appid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'app版本号',
        required: true,
        example: '1.0.2'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], App.prototype, "version", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '更新内容',
        required: true,
        example: '常被误i悲催尾部i吧'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], App.prototype, "content", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '热更新下载地址',
        required: true,
        example: 'http://www.12345.com'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], App.prototype, "hot_url", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '整包更新下载地址',
        required: true,
        example: 'http://www.12345.com'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], App.prototype, "pack_url", void 0);
App = __decorate([
    typeorm_1.Entity()
], App);
exports.App = App;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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
const class_validator_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(2);
class AppDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'app id',
        required: true,
        example: '__UNI__BF91653'
    }),
    class_validator_1.IsNotEmpty({ message: 'appid 不得为空' }),
    __metadata("design:type", String)
], AppDto.prototype, "appid", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '客户端app版本号',
        required: true,
        example: '1.0.2'
    }),
    class_validator_1.IsNotEmpty({ message: 'app 版本号不得为空' }),
    __metadata("design:type", String)
], AppDto.prototype, "version", void 0);
exports.AppDto = AppDto;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const common_service_1 = __webpack_require__(14);
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Module({
        providers: [common_service_1.CommonService],
        exports: [common_service_1.CommonService]
    })
], CommonModule);
exports.CommonModule = CommonModule;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __webpack_require__(15);
const common_1 = __webpack_require__(1);
let CommonService = class CommonService {
    sendEmail(sendEmailDto) {
        const { email, content } = sendEmailDto;
        const transporter = nodemailer_1.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.EMAIL_SECURE),
            auth: {
                user: '244115113@qq.com',
                pass: process.env.EMAIL_PASSWORD
            }
        });
        let mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: process.env.EMAIL_SUBJECT,
            html: content
        };
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    reject(new common_1.HttpException({
                        status: common_1.HttpStatus.FORBIDDEN,
                        message: '发送失败，请稍后重试！'
                    }, 400));
                }
                resolve(info);
            });
        });
    }
    randomCode() {
        const CODELEN = 6;
        const randomArr = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
        var code = '';
        for (let i = 0; i < CODELEN; i++) {
            let index = Math.ceil(Math.random() * 35);
            code += randomArr[index];
        }
        return code;
    }
};
CommonService = __decorate([
    common_1.Injectable()
], CommonService);
exports.CommonService = CommonService;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ad_img_entity_1 = __webpack_require__(17);
const user_actions_entity_1 = __webpack_require__(21);
const book_actions_entity_1 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(22);
const manager_entity_1 = __webpack_require__(23);
const book_entity_1 = __webpack_require__(19);
const category_entity_1 = __webpack_require__(18);
const common_1 = __webpack_require__(1);
const db_service_1 = __webpack_require__(24);
const typeorm_1 = __webpack_require__(6);
const email_entity_1 = __webpack_require__(25);
const app_entity_1 = __webpack_require__(9);
let DbModule = class DbModule {
};
DbModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'mysql',
                    host: 'localhost',
                    port: Number(process.env.DB_PORT),
                    username: process.env.DB_NAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE,
                    entities: [
                        category_entity_1.Category,
                        book_entity_1.Book,
                        manager_entity_1.Manager,
                        user_entity_1.User,
                        email_entity_1.Email,
                        app_entity_1.App,
                        book_actions_entity_1.BookActions,
                        user_actions_entity_1.UserActions,
                        ad_img_entity_1.AdImg
                    ],
                    synchronize: true
                })
            })
        ],
        providers: [db_service_1.DbService],
        exports: [db_service_1.DbService]
    })
], DbModule);
exports.DbModule = DbModule;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

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
const swagger_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(10);
const category_entity_1 = __webpack_require__(18);
let AdImg = class AdImg {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AdImg.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: [1, 2],
        description: '类型',
        required: true,
        example: 1
    }),
    typeorm_1.Column({ default: 2 }),
    __metadata("design:type", Number)
], AdImg.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '地址',
        required: true,
        example: 'http://img2.imgtn.bdimg.com/it/u=540844892,1263014220&fm=11&gp=0.jpg'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AdImg.prototype, "url", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: [0, 1],
        description: '是否允许跳转',
        required: true,
        example: 1
    }),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], AdImg.prototype, "is_href", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '跳转地址',
        example: null
    }),
    typeorm_1.Column({ default: null }),
    __metadata("design:type", String)
], AdImg.prototype, "href_url", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: [0, 1],
        description: '状态',
        example: 0
    }),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], AdImg.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '所属图书类别id',
        required: true,
        example: 4
    }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], AdImg.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => category_entity_1.Category, category => category.adImg),
    __metadata("design:type", Array)
], AdImg.prototype, "category", void 0);
AdImg = __decorate([
    typeorm_1.Entity()
], AdImg);
exports.AdImg = AdImg;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

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
const typeorm_1 = __webpack_require__(10);
const book_entity_1 = __webpack_require__(19);
const ad_img_entity_1 = __webpack_require__(17);
let Category = class Category {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Category.prototype, "zh_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Category.prototype, "en_name", void 0);
__decorate([
    typeorm_1.OneToMany(type => ad_img_entity_1.AdImg, adImg => adImg.category),
    __metadata("design:type", Array)
], Category.prototype, "adImg", void 0);
__decorate([
    typeorm_1.OneToMany(type => book_entity_1.Book, book => book.category),
    __metadata("design:type", Array)
], Category.prototype, "book", void 0);
Category = __decorate([
    typeorm_1.Entity()
], Category);
exports.Category = Category;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

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
const book_actions_entity_1 = __webpack_require__(20);
const category_entity_1 = __webpack_require__(18);
const typeorm_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(2);
let Book = class Book {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '中文名称',
        required: true,
        example: 'vue.js深入浅出'
    }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Book.prototype, "zh_name", void 0);
__decorate([
    swagger_1.ApiProperty({ description: '英文名称', required: true, example: 'vue.js' }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Book.prototype, "en_name", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '图书',
        required: true,
        example: 'https://file.ituring.com.cn/SmallCover/19079fff942994b2fff5'
    }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Book.prototype, "book", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '图书封面',
        required: true,
        example: 'upload/images/covers/1580830233290.png'
    }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Book.prototype, "cover", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '图书概述',
        required: true
    }),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '图书特点',
        required: false
    }),
    typeorm_1.Column({ type: 'text', default: null }),
    __metadata("design:type", String)
], Book.prototype, "feature", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '出版日期',
        required: true,
        example: '1579508386'
    }),
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Book.prototype, "create_time", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '图书总页数',
        required: true,
        example: '1200'
    }),
    typeorm_1.Column({ type: 'smallint' }),
    __metadata("design:type", Number)
], Book.prototype, "total_page", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '目录截图',
        required: true,
        example: [
            'upload/images/catalog/1580830233343.png',
            'upload/images/catalog/1580830233345.png'
        ]
    }),
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], Book.prototype, "catalog", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '关于作者',
        required: true,
        example: '贾森·迈尔斯（Jason Myers），Built Technologies平台首席工程师，Juice Analytics公司高级开发者，曾在思科公司担任技术主管。在转做开发前，曾做过15年系统架构师。'
    }),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Book.prototype, "about_author", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '是否热门',
        required: true,
        example: 1
    }),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "is_hot", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '是否推荐',
        required: true,
        example: 1
    }),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "is_recommend", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '最新上架',
        required: true,
        example: 1
    }),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "is_new", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '所属类别id',
        required: true,
        example: 3
    }),
    typeorm_1.ManyToOne(type => category_entity_1.Category, category => category.book),
    __metadata("design:type", category_entity_1.Category)
], Book.prototype, "category", void 0);
__decorate([
    typeorm_1.OneToOne(type => book_actions_entity_1.BookActions, bookActions => bookActions.book, {
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", book_actions_entity_1.BookActions)
], Book.prototype, "bookActions", void 0);
Book = __decorate([
    typeorm_1.Entity()
], Book);
exports.Book = Book;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

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
const book_entity_1 = __webpack_require__(19);
const typeorm_1 = __webpack_require__(10);
let BookActions = class BookActions {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BookActions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], BookActions.prototype, "down_count", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], BookActions.prototype, "browse_count", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], BookActions.prototype, "fav_count", void 0);
__decorate([
    typeorm_1.OneToOne(type => book_entity_1.Book, book => book.bookActions),
    __metadata("design:type", book_entity_1.Book)
], BookActions.prototype, "book", void 0);
BookActions = __decorate([
    typeorm_1.Entity()
], BookActions);
exports.BookActions = BookActions;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

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
const user_entity_1 = __webpack_require__(22);
const typeorm_1 = __webpack_require__(10);
let UserActions = class UserActions {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserActions.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ default: '[]' }),
    __metadata("design:type", String)
], UserActions.prototype, "fav_list", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], UserActions.prototype, "user", void 0);
UserActions = __decorate([
    typeorm_1.Entity()
], UserActions);
exports.UserActions = UserActions;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

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
const typeorm_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(2);
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '邮箱',
        required: true,
        example: '123456@qq.com'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '昵称',
        required: true,
        example: 'test'
    }),
    typeorm_1.Column({ default: 'Hello World' }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ description: '密码', required: true, example: '123456' }),
    typeorm_1.Column({ select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '头像',
        required: false,
        example: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg'
    }),
    typeorm_1.Column({
        default: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg'
    }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '注册时间',
        required: false,
        example: 1581692214957
    }),
    typeorm_1.Column({
        type: 'bigint',
        default: 0
    }),
    __metadata("design:type", Number)
], User.prototype, "register_time", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '最后一次登录时间',
        required: false,
        example: 1581692214957
    }),
    typeorm_1.Column({
        type: 'bigint',
        default: 0
    }),
    __metadata("design:type", Number)
], User.prototype, "login_time", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

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
const typeorm_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(2);
let Manager = class Manager {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Manager.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({
        description: '账号',
        required: true,
        example: 'admin'
    }),
    __metadata("design:type", String)
], Manager.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '密码',
        required: true,
        example: '123456'
    }),
    typeorm_1.Column({ select: false }),
    __metadata("design:type", String)
], Manager.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '权限',
        required: true,
        example: 'admin'
    }),
    typeorm_1.Column({ default: 'admin' }),
    __metadata("design:type", String)
], Manager.prototype, "roles", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '头像',
        required: false,
        example: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1640434779,3971610929&fm=26&gp=0.jpg'
    }),
    typeorm_1.Column({
        default: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1640434779,3971610929&fm=26&gp=0.jpg'
    }),
    __metadata("design:type", String)
], Manager.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '创建时间',
        required: false
    }),
    typeorm_1.Column({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], Manager.prototype, "create_time", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '最后一次登录时间',
        required: false
    }),
    typeorm_1.Column({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], Manager.prototype, "login_time", void 0);
Manager = __decorate([
    typeorm_1.Entity()
], Manager);
exports.Manager = Manager;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
let DbService = class DbService {
};
DbService = __decorate([
    common_1.Injectable()
], DbService);
exports.DbService = DbService;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

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
const typeorm_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(2);
let Email = class Email {
};
__decorate([
    swagger_1.ApiProperty({
        description: '邮件id',
        required: true,
        example: '9c0c9763-e55f-a70d-4ae0-2480fc66eec3@qq.com'
    }),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Email.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '邮箱',
        required: true,
        example: '421821209@qq.com'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Email.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '验证码',
        required: true,
        example: 'cbha23'
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Email.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '失效时间',
        required: true
    }),
    typeorm_1.Column({
        type: 'bigint'
    }),
    __metadata("design:type", Number)
], Email.prototype, "fail_time", void 0);
Email = __decorate([
    typeorm_1.Entity()
], Email);
exports.Email = Email;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = __webpack_require__(19);
const common_module_1 = __webpack_require__(13);
const user_entity_1 = __webpack_require__(22);
const typeorm_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const user_controller_1 = __webpack_require__(28);
const user_service_1 = __webpack_require__(39);
const auth_1 = __webpack_require__(43);
const email_entity_1 = __webpack_require__(25);
const user_actions_entity_1 = __webpack_require__(21);
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, email_entity_1.Email, user_actions_entity_1.UserActions, book_entity_1.Book]),
            auth_1.AuthModule,
            common_module_1.CommonModule
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const edit_pswd_dto_1 = __webpack_require__(29);
const myapp_forget_pswd_pipe_1 = __webpack_require__(30);
const myapp_verify_code_pipe_1 = __webpack_require__(31);
const common_service_1 = __webpack_require__(14);
const myapp_register_pipe_1 = __webpack_require__(32);
const auth_service_1 = __webpack_require__(33);
const passport_1 = __webpack_require__(36);
const login_dto_1 = __webpack_require__(37);
const register_dto_1 = __webpack_require__(38);
const user_service_1 = __webpack_require__(39);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
const email_dto_1 = __webpack_require__(40);
const forget_pswd_dto_1 = __webpack_require__(41);
const myapp_edit_pswd_pipe_1 = __webpack_require__(42);
let UserController = class UserController {
    constructor(userService, authService, commonService) {
        this.userService = userService;
        this.authService = authService;
        this.commonService = commonService;
    }
    async register(registerDto, req) {
        const _a = req.body, { emailId, code } = _a, result = __rest(_a, ["emailId", "code"]);
        const user = await this.userService.register(result);
        console.log(user);
        return {
            code: 2001,
            message: '注册成功！',
            result: user
        };
    }
    async forgetpswd(forgetPswdDto, req) {
        const result = await this.userService.forgetpswd(forgetPswdDto);
        return {
            code: 2000,
            message: '密码重置成功，建议您登录后立即修改。',
            result
        };
    }
    async editPswd(editPswdDto, req) {
        const { id } = req.user;
        const { firstPswd: newPswd, oldPswd } = editPswdDto;
        await this.userService.editPswd(id, oldPswd, newPswd);
        return {
            code: 2000,
            message: '密码修改成功，请您重新登录。'
        };
    }
    async sendResisterEmail(emailDto, req) {
        const { email } = req.body;
        const randomCode = this.commonService.randomCode();
        const content = `<h1>${process.env.EMAIL_SUBJECT}管理员致电!</h1><p style="font-size: 18px;color:#000;">尊敬的申请者您好，欢迎您注册猿来阅掌上阅读，验证码为：<u style="font-size: 16px;color:#1890ff;">${randomCode}</u></p><p style="font-size: 14px;color:#ff0000;">验证码10分钟内有效</p>`;
        const { messageId } = await this.commonService.sendEmail({
            email,
            content
        });
        const id = messageId.slice(1, -1);
        const fail_time = Date.now() + 1000 * 60 * 10;
        const _a = await this.userService.createEmail({
            id,
            email,
            code: randomCode,
            fail_time
        }), { code } = _a, result = __rest(_a, ["code"]);
        return {
            code: 2001,
            message: '验证码发送成功，请注意查收！',
            result
        };
    }
    async sendForgetpswdEmail(emailDto, req) {
        console.log(req.body);
        const { email } = req.body;
        const randomCode = this.commonService.randomCode();
        const content = `<h1>${process.env.EMAIL_SUBJECT}管理员致电!</h1><p style="font-size: 18px;color:#000;">尊敬的用户您好，您正在试图找回密码，如非您本人操作，请忽略！验证码为：<u style="font-size: 16px;color:#1890ff;">${randomCode}</u></p><p style="font-size: 14px;color:#ff0000;">验证码10分钟内有效</p>`;
        const { messageId } = await this.commonService.sendEmail({
            email,
            content
        });
        const id = messageId.slice(1, -1);
        const fail_time = Date.now() + 1000 * 60 * 10;
        const _a = await this.userService.createEmail({
            id,
            email,
            code: randomCode,
            fail_time
        }), { code } = _a, result = __rest(_a, ["code"]);
        return {
            code: 2001,
            message: '验证码发送成功，请注意查收！',
            result
        };
    }
    async login(loginDto, req) {
        const _a = req.user, { password } = _a, result = __rest(_a, ["password"]);
        const token = await this.authService.setUserToken(result);
        return { result: token, code: 2001, message: '登陆成功' };
    }
    async getUser(req) {
        const user = await this.userService.getUser(req.user);
        return { result: user, code: 2000, message: 'Token验证通过。' };
    }
    async getFavList(req) {
        const favList = await this.userService.getFavList(req.user);
        return {
            result: favList,
            code: 2000,
            message: '收藏列表查询成功'
        };
    }
};
__decorate([
    common_1.Post('/register'),
    swagger_1.ApiOperation({ summary: '注册' }),
    common_1.UsePipes(myapp_register_pipe_1.MyappRegisterPipe, myapp_verify_code_pipe_1.MyappVerifyCodePipe),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    common_1.Put('/forgetpswd'),
    swagger_1.ApiOperation({ summary: '忘记密码' }),
    common_1.UsePipes(myapp_forget_pswd_pipe_1.MyappForgetPswdPipe, myapp_verify_code_pipe_1.MyappVerifyCodePipe),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forget_pswd_dto_1.ForgetPswdDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgetpswd", null);
__decorate([
    common_1.Put('/editpswd'),
    common_1.UseGuards(passport_1.AuthGuard('myapp-jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({ summary: '修改密码' }),
    common_1.UsePipes(myapp_edit_pswd_pipe_1.MyappEditPswdPipe),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_pswd_dto_1.EditPswdDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "editPswd", null);
__decorate([
    common_1.Post('/register/code'),
    swagger_1.ApiOperation({ summary: '发送注册验证码' }),
    common_1.UsePipes(myapp_register_pipe_1.MyappRegisterPipe),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_dto_1.EmailDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sendResisterEmail", null);
__decorate([
    common_1.Post('/forgetpswd/code'),
    swagger_1.ApiOperation({ summary: '发送忘记密码密码验证码' }),
    common_1.UsePipes(myapp_forget_pswd_pipe_1.MyappForgetPswdPipe),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_dto_1.EmailDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sendForgetpswdEmail", null);
__decorate([
    common_1.Put('/login'),
    common_1.UseGuards(passport_1.AuthGuard('myapp-local')),
    swagger_1.ApiOperation({ summary: '登录' }),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard('myapp-jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({ summary: '获取用户信息' }),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Get('/fav'),
    common_1.UseGuards(passport_1.AuthGuard('myapp-jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({ summary: '获取用户收藏' }),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFavList", null);
UserController = __decorate([
    common_1.Controller('user'),
    swagger_1.ApiTags('用户'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService,
        common_service_1.CommonService])
], UserController);
exports.UserController = UserController;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

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
const class_validator_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(2);
class EditPswdDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: '旧密码',
        required: true,
        example: '123456'
    }),
    class_validator_1.IsNotEmpty({ message: '请输入当前密码' }),
    class_validator_1.MinLength(6, { message: '密码长度至少为6' }),
    class_validator_1.MaxLength(16, { message: '密码长度至多为16' }),
    __metadata("design:type", String)
], EditPswdDto.prototype, "oldPswd", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '新密码',
        required: true,
        example: '123456'
    }),
    class_validator_1.IsNotEmpty({ message: '请输入新密码' }),
    class_validator_1.MinLength(6, { message: '密码长度至少为6' }),
    class_validator_1.MaxLength(16, { message: '密码长度至多为16' }),
    __metadata("design:type", String)
], EditPswdDto.prototype, "firstPswd", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '再次输入新密码',
        required: true,
        example: '123456'
    }),
    class_validator_1.IsNotEmpty({ message: '请再次输入新密码' }),
    class_validator_1.MinLength(6, { message: '密码长度至少为6' }),
    class_validator_1.MaxLength(16, { message: '密码长度至多为16' }),
    __metadata("design:type", String)
], EditPswdDto.prototype, "secondPswd", void 0);
exports.EditPswdDto = EditPswdDto;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = __webpack_require__(22);
const typeorm_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_2 = __webpack_require__(10);
let MyappForgetPswdPipe = class MyappForgetPswdPipe {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async transform(user, metadata) {
        const { email } = user;
        const isUser = await this.userRepository.findOne({ email });
        if (!isUser) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                message: '该邮箱尚未注册！'
            }, 400);
        }
        return user;
    }
};
MyappForgetPswdPipe = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MyappForgetPswdPipe);
exports.MyappForgetPswdPipe = MyappForgetPswdPipe;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_entity_1 = __webpack_require__(25);
const typeorm_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_2 = __webpack_require__(10);
let MyappVerifyCodePipe = class MyappVerifyCodePipe {
    constructor(emailRepository) {
        this.emailRepository = emailRepository;
    }
    async transform(user, metadata) {
        const { emailId, email, code } = user;
        const mail = await this.emailRepository.findOne({ id: emailId });
        const currentTime = Date.now();
        if (!mail ||
            mail.code.toLocaleUpperCase() !== code.toLocaleUpperCase() ||
            mail.email !== email) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                message: '验证码错误！'
            }, 400);
        }
        else if (currentTime > Number(mail.fail_time)) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                message: '验证码已失效！'
            }, 400);
        }
        return user;
    }
};
MyappVerifyCodePipe = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(email_entity_1.Email)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MyappVerifyCodePipe);
exports.MyappVerifyCodePipe = MyappVerifyCodePipe;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = __webpack_require__(22);
const typeorm_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const typeorm_2 = __webpack_require__(10);
let MyappRegisterPipe = class MyappRegisterPipe {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async transform(user, metadata) {
        const { email } = user;
        const isUser = await this.userRepository.findOne({ email });
        if (isUser) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                message: '该邮箱已注册！'
            }, 400);
        }
        return user;
    }
};
MyappRegisterPipe = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MyappRegisterPipe);
exports.MyappRegisterPipe = MyappRegisterPipe;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = __webpack_require__(22);
const manager_entity_1 = __webpack_require__(23);
const jwt_1 = __webpack_require__(34);
const typeorm_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const bcryptjs_1 = __webpack_require__(35);
const typeorm_2 = __webpack_require__(10);
let AuthService = class AuthService {
    constructor(managerRepository, userRepository, jwtService) {
        this.managerRepository = managerRepository;
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async validateManager(username, password) {
        let manager = await typeorm_2.getConnection()
            .createQueryBuilder()
            .select('user')
            .from(manager_entity_1.Manager, 'user')
            .where('user.username =:username ', { username })
            .addSelect('user.password')
            .getOne();
        if (!manager) {
            throw new common_1.BadRequestException('用户不存在');
        }
        if (!bcryptjs_1.compareSync(password, manager.password)) {
            throw new common_1.BadRequestException('密码错误');
        }
        manager.login_time = Date.now();
        await this.managerRepository.save(manager);
        return manager;
    }
    async setToken(user) {
        const { username, id, roles } = user;
        const payload = { username, id, roles };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
    async validateUser(username, password) {
        let user = await typeorm_2.getConnection()
            .createQueryBuilder()
            .select('user')
            .from(user_entity_1.User, 'user')
            .where('user.email =:email ', { email: username })
            .addSelect('user.password')
            .getOne();
        if (!user) {
            throw new common_1.BadRequestException('用户不存在');
        }
        if (!bcryptjs_1.compareSync(password, user.password)) {
            throw new common_1.BadRequestException('密码错误');
        }
        user.login_time = Date.now();
        await this.userRepository.save(user);
        return user;
    }
    async setUserToken(user) {
        const { email, id } = user;
        const payload = { email, id };
        return {
            token: this.jwtService.sign(payload)
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(manager_entity_1.Manager)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

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
const class_validator_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(2);
class LoginDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: '邮箱',
        required: true,
        example: '123456@qq.com'
    }),
    class_validator_1.IsEmail({ allow_display_name: true }, { message: '请输入正确的邮箱' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '密码',
        required: true,
        example: '123456'
    }),
    class_validator_1.IsNotEmpty({ message: '请输入密码' }),
    class_validator_1.MinLength(6, { message: '密码长度至少为6' }),
    class_validator_1.MaxLength(16, { message: '密码长度至多为16' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

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
const user_entity_1 = __webpack_require__(22);
const class_validator_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(2);
class RegisterDto extends user_entity_1.User {
}
__decorate([
    class_validator_1.IsEmail({ allow_display_name: true }, { message: '请输入正确的邮箱' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '请输入密码' }),
    class_validator_1.MinLength(6, { message: '密码长度至少为6' }),
    class_validator_1.MaxLength(16, { message: '密码长度至多为16' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '请输入验证码' }),
    swagger_1.ApiProperty({ description: '验证码', required: true }),
    __metadata("design:type", String)
], RegisterDto.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({ description: '请添加邮件id', required: true }),
    __metadata("design:type", String)
], RegisterDto.prototype, "emailId", void 0);
exports.RegisterDto = RegisterDto;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = __webpack_require__(19);
const user_actions_entity_1 = __webpack_require__(21);
const typeorm_1 = __webpack_require__(6);
const user_entity_1 = __webpack_require__(22);
const common_1 = __webpack_require__(1);
const typeorm_2 = __webpack_require__(10);
const bcryptjs_1 = __webpack_require__(35);
const email_entity_1 = __webpack_require__(25);
const bcryptjs_2 = __webpack_require__(35);
let UserService = class UserService {
    constructor(userRepository, emailRepository, userActionsRepository, bookRepository) {
        this.userRepository = userRepository;
        this.emailRepository = emailRepository;
        this.userActionsRepository = userActionsRepository;
        this.bookRepository = bookRepository;
    }
    async register(registerDto) {
        registerDto.register_time = Date.now();
        registerDto.password = bcryptjs_1.hashSync(registerDto.password);
        const user = await this.userRepository.save(registerDto);
        await this.userActionsRepository.save({ user });
        return user;
    }
    async forgetpswd(forgetPswdDto) {
        const { email, code, emailId } = forgetPswdDto;
        const DEFAULT_PSWD = '123456';
        const newPassword = bcryptjs_1.hashSync(DEFAULT_PSWD);
        let user = await this.userRepository.findOne({ email });
        user.password = newPassword;
        await this.userRepository.save(user);
        return { default_pswd: DEFAULT_PSWD };
    }
    async editPswd(id, oldPswd, newPswd) {
        let user = await typeorm_2.getConnection()
            .createQueryBuilder()
            .select('user')
            .from(user_entity_1.User, 'user')
            .where('user.id =:id ', { id })
            .addSelect('user.password')
            .getOne();
        if (!bcryptjs_2.compareSync(oldPswd, user.password)) {
            throw new common_1.BadRequestException('当前密码错误');
        }
        user.password = bcryptjs_1.hashSync(newPswd);
        await this.userRepository.save(user);
        return true;
    }
    async getUser(user) {
        return await this.userRepository.findOne(user.id);
    }
    async createEmail(email) {
        return await this.emailRepository.save(email);
    }
    async getFavList(user) {
        const { id } = user;
        let { fav_list } = await this.userActionsRepository
            .createQueryBuilder('user_actions')
            .where('user_actions.userId = :userId', { userId: id })
            .getOne();
        return await this.bookRepository.findByIds(JSON.parse(fav_list), {
            select: ['id', 'zh_name', 'cover', 'description']
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(1, typeorm_1.InjectRepository(email_entity_1.Email)),
    __param(2, typeorm_1.InjectRepository(user_actions_entity_1.UserActions)),
    __param(3, typeorm_1.InjectRepository(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

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
const class_validator_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(2);
class EmailDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: '邮箱',
        required: true,
        example: '421821209@qq.com'
    }),
    class_validator_1.IsEmail({ allow_display_name: true }, { message: '请输入正确的邮箱' }),
    __metadata("design:type", String)
], EmailDto.prototype, "email", void 0);
exports.EmailDto = EmailDto;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

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
const class_validator_1 = __webpack_require__(12);
const swagger_1 = __webpack_require__(2);
class ForgetPswdDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: '邮箱',
        required: true,
        example: '421821209@qq.com'
    }),
    class_validator_1.IsEmail({ allow_display_name: true }, { message: '请输入正确的邮箱' }),
    __metadata("design:type", String)
], ForgetPswdDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: '请输入验证码' }),
    swagger_1.ApiProperty({ description: '验证码', required: true }),
    __metadata("design:type", String)
], ForgetPswdDto.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({ description: '邮件id', required: true }),
    __metadata("design:type", String)
], ForgetPswdDto.prototype, "emailId", void 0);
exports.ForgetPswdDto = ForgetPswdDto;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
let MyappEditPswdPipe = class MyappEditPswdPipe {
    async transform(editPswdDto, metadata) {
        const { oldPswd, firstPswd, secondPswd } = editPswdDto;
        if (oldPswd === firstPswd) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                message: '新密码不能和当前密码一致'
            }, 400);
        }
        else if (firstPswd !== secondPswd) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                message: '新密码两次输入不一致'
            }, 400);
        }
        return editPswdDto;
    }
};
MyappEditPswdPipe = __decorate([
    common_1.Injectable()
], MyappEditPswdPipe);
exports.MyappEditPswdPipe = MyappEditPswdPipe;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(44));
__export(__webpack_require__(33));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const myapp_jwt_strategy_1 = __webpack_require__(45);
const myapp_local_strategy_1 = __webpack_require__(47);
const user_entity_1 = __webpack_require__(22);
const roles_guard_1 = __webpack_require__(49);
const manage_jwt_strategy_1 = __webpack_require__(50);
const jwt_1 = __webpack_require__(34);
const manager_entity_1 = __webpack_require__(23);
const typeorm_1 = __webpack_require__(6);
const manage_local_strategy_1 = __webpack_require__(51);
const passport_1 = __webpack_require__(36);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(33);
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([manager_entity_1.Manager, user_entity_1.User]),
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: () => ({
                    secret: process.env.MANAGE_AUTH_SECRET,
                    signOptions: {
                        expiresIn: 3600
                    }
                })
            }),
            roles_guard_1.RolesGuard
        ],
        providers: [
            auth_service_1.AuthService,
            manage_local_strategy_1.ManageLocalStrategy,
            manage_jwt_strategy_1.ManageJwtStrategy,
            myapp_local_strategy_1.MyappLocalStrategy,
            myapp_jwt_strategy_1.MyappJwtStrategy
        ],
        exports: [auth_service_1.AuthService, roles_guard_1.RolesGuard]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

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
const passport_jwt_1 = __webpack_require__(46);
const passport_1 = __webpack_require__(36);
const common_1 = __webpack_require__(1);
let MyappJwtStrategy = class MyappJwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'myapp-jwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.MANAGE_AUTH_SECRET
        });
    }
    async validate(payload) {
        const { id, email } = payload;
        return { id, email };
    }
};
MyappJwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], MyappJwtStrategy);
exports.MyappJwtStrategy = MyappJwtStrategy;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

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
const auth_service_1 = __webpack_require__(33);
const passport_local_1 = __webpack_require__(48);
const passport_1 = __webpack_require__(36);
const common_1 = __webpack_require__(1);
let MyappLocalStrategy = class MyappLocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy, 'myapp-local') {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
        this.authService = authService;
    }
    async validate(username, password) {
        return await this.authService.validateUser(username, password);
    }
};
MyappLocalStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], MyappLocalStrategy);
exports.MyappLocalStrategy = MyappLocalStrategy;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(3);
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        const hasRole = () => user.roles === 'admin';
        return user && hasRole();
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(core_1.Reflector)),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

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
const passport_jwt_1 = __webpack_require__(46);
const passport_1 = __webpack_require__(36);
const common_1 = __webpack_require__(1);
let ManageJwtStrategy = class ManageJwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'manage-jwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.MANAGE_AUTH_SECRET
        });
    }
    async validate(payload) {
        const { id, username, roles } = payload;
        return { id, username, roles };
    }
};
ManageJwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ManageJwtStrategy);
exports.ManageJwtStrategy = ManageJwtStrategy;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

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
const auth_service_1 = __webpack_require__(33);
const passport_local_1 = __webpack_require__(48);
const passport_1 = __webpack_require__(36);
const common_1 = __webpack_require__(1);
let ManageLocalStrategy = class ManageLocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy, 'manage-local') {
    constructor(authService) {
        super({
            usernameField: 'username',
            passwordField: 'password'
        });
        this.authService = authService;
    }
    async validate(username, password) {
        return await this.authService.validateManager(username, password);
    }
};
ManageLocalStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], ManageLocalStrategy);
exports.ManageLocalStrategy = ManageLocalStrategy;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = __webpack_require__(19);
const category_entity_1 = __webpack_require__(18);
const typeorm_1 = __webpack_require__(6);
const common_1 = __webpack_require__(1);
const bookshop_controller_1 = __webpack_require__(53);
const bookshop_service_1 = __webpack_require__(54);
const user_actions_entity_1 = __webpack_require__(21);
const ad_img_entity_1 = __webpack_require__(17);
let BookshopModule = class BookshopModule {
};
BookshopModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, book_entity_1.Book, user_actions_entity_1.UserActions, ad_img_entity_1.AdImg])],
        controllers: [bookshop_controller_1.BookshopController],
        providers: [bookshop_service_1.BookshopService]
    })
], BookshopModule);
exports.BookshopModule = BookshopModule;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __webpack_require__(36);
const bookshop_service_1 = __webpack_require__(54);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(2);
let BookshopController = class BookshopController {
    constructor(bookshopService) {
        this.bookshopService = bookshopService;
    }
    async findAllCategory() {
        const allCategory = await this.bookshopService.findAllCategory();
        return {
            code: 2000,
            message: '查询类别成功！',
            result: allCategory
        };
    }
    async findCategoryBooks(id) {
        const categoryBooks = await this.bookshopService.findCategoryBooks(id);
        return {
            code: 2000,
            message: '查询类别图书成功！',
            result: categoryBooks
        };
    }
    async findCategoryAdimg(id) {
        const adimgs = await this.bookshopService.findCategoryAdimg(id);
        return {
            code: 2000,
            message: '查询类别广告图成功！',
            result: adimgs
        };
    }
    async findBook(id) {
        const book = await this.bookshopService.findBook(id);
        return {
            code: 2000,
            message: '查询图书成功！',
            result: book
        };
    }
    async favStatus(id, req) {
        const userId = req.user.id;
        const favList = await this.bookshopService.favStatus(id, userId);
        return {
            code: 2000,
            message: '查询图书收藏状态成功！',
            result: favList
        };
    }
    async downBook(id) {
        await this.bookshopService.downBook(id);
        return {
            code: 2000,
            message: '图书下载请求已提交！'
        };
    }
    async favBook(req, id) {
        const userId = req.user.id;
        return await this.bookshopService.favBook(id, userId);
    }
};
__decorate([
    common_1.Get('category'),
    swagger_1.ApiOperation({ summary: '所有图书类别' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookshopController.prototype, "findAllCategory", null);
__decorate([
    common_1.Get('category/:id'),
    swagger_1.ApiOperation({ summary: '按类别查询图书' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookshopController.prototype, "findCategoryBooks", null);
__decorate([
    common_1.Get('category/ad/:id'),
    swagger_1.ApiOperation({ summary: '按类别查询广告图' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookshopController.prototype, "findCategoryAdimg", null);
__decorate([
    common_1.Get('book/:id'),
    swagger_1.ApiOperation({ summary: '查询一本图书' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookshopController.prototype, "findBook", null);
__decorate([
    common_1.Get('book/fav/:id'),
    common_1.UseGuards(passport_1.AuthGuard('myapp-jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({ summary: '登陆时查询图书是否被当前用户收藏' }),
    __param(0, common_1.Param('id')), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookshopController.prototype, "favStatus", null);
__decorate([
    common_1.Get('book/down/:id'),
    swagger_1.ApiOperation({ summary: '下载一本图书' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookshopController.prototype, "downBook", null);
__decorate([
    common_1.Put('book/fav/:id'),
    common_1.UseGuards(passport_1.AuthGuard('myapp-jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({ summary: '收藏一本图书' }),
    __param(0, common_1.Request()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BookshopController.prototype, "favBook", null);
BookshopController = __decorate([
    common_1.Controller('bookshop'),
    swagger_1.ApiTags('书城'),
    __metadata("design:paramtypes", [bookshop_service_1.BookshopService])
], BookshopController);
exports.BookshopController = BookshopController;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = __webpack_require__(18);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(10);
const book_entity_1 = __webpack_require__(19);
const user_actions_entity_1 = __webpack_require__(21);
const ad_img_entity_1 = __webpack_require__(17);
let BookshopService = class BookshopService {
    constructor(categoryRepository, bookRepository, adImgRepository, userActionsRepository) {
        this.categoryRepository = categoryRepository;
        this.bookRepository = bookRepository;
        this.adImgRepository = adImgRepository;
        this.userActionsRepository = userActionsRepository;
    }
    async findAllCategory() {
        return this.categoryRepository.find();
    }
    async findCategoryBooks(category) {
        const categoryBooks = await this.bookRepository.find({
            select: ['id', 'zh_name', 'cover'],
            where: { category },
            take: 20
        });
        const categoryHotBooks = await this.bookRepository.find({
            select: ['id', 'zh_name', 'cover'],
            where: { category, is_hot: 1 }
        });
        const categoryNewBooks = await this.bookRepository.find({
            select: ['id', 'zh_name', 'cover'],
            where: { category, is_new: 1 }
        });
        const categoryRecommendBooks = await this.bookRepository.find({
            select: ['id', 'zh_name', 'cover'],
            where: { category, is_recommend: 1 }
        });
        const result = [
            {
                title: '热门图书',
                book: categoryHotBooks
            },
            {
                title: '推荐图书',
                book: categoryRecommendBooks
            },
            {
                title: '最新上架',
                book: categoryNewBooks
            },
            {
                title: '系列图书',
                book: categoryBooks
            }
        ];
        return result;
    }
    async findCategoryAdimg(id) {
        return this.adImgRepository.find({
            where: { categoryId: id, type: 2, status: 1 }
        });
    }
    async findBook(id) {
        let book = await this.bookRepository.findOne(id, {
            relations: ['category', 'bookActions']
        });
        book.bookActions.browse_count++;
        return await this.bookRepository.save(book);
    }
    async favStatus(id, userId) {
        let { fav_list } = await typeorm_2.getRepository(user_actions_entity_1.UserActions)
            .createQueryBuilder('user_actions')
            .where('user_actions.userId = :userId', { userId })
            .getOne();
        const favList = JSON.parse(fav_list);
        if (favList.includes(Number(id))) {
            return { isFav: 1 };
        }
        else {
            return { isFav: 0 };
        }
    }
    async downBook(id) {
        let book = await this.bookRepository.findOne(id, {
            relations: ['bookActions']
        });
        book.bookActions.down_count++;
        await this.bookRepository.save(book);
    }
    async favBook(id, userId) {
        let message = '';
        let code = 2000;
        let isFav = 0;
        let userActions = await typeorm_2.getRepository(user_actions_entity_1.UserActions)
            .createQueryBuilder('user_actions')
            .where('user_actions.userId = :userId', { userId })
            .getOne();
        let fav_list = JSON.parse(userActions.fav_list);
        if (fav_list.includes(Number(id))) {
            fav_list = fav_list.filter(item => {
                return item != Number(id);
            });
            message = '取消收藏';
        }
        else {
            fav_list.push(Number(id));
            isFav = 1;
            message = '添加收藏';
        }
        userActions.fav_list = JSON.stringify(fav_list);
        await this.userActionsRepository.save(userActions);
        let book = await this.bookRepository.findOne(id, {
            relations: ['bookActions']
        });
        book.bookActions.fav_count++;
        await this.bookRepository.save(book);
        return {
            message,
            code,
            result: {
                isFav
            }
        };
    }
};
BookshopService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_entity_1.Category)),
    __param(1, typeorm_1.InjectRepository(book_entity_1.Book)),
    __param(2, typeorm_1.InjectRepository(ad_img_entity_1.AdImg)),
    __param(3, typeorm_1.InjectRepository(user_actions_entity_1.UserActions)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BookshopService);
exports.BookshopService = BookshopService;


/***/ })
/******/ ]);