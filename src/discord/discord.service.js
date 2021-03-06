"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.DiscordService = void 0;
var common_1 = require("@nestjs/common");
var DiscordService = /** @class */ (function () {
    function DiscordService() {
        this.discord = [];
    }
    DiscordService.prototype.create = function (createDiscordDto) {
        var discordUser = {
            id: Date.now(),
            username: createDiscordDto.username,
            bio: __assign({}, createDiscordDto.bio),
            createdOn: new Date(Date.now()),
            updatedOn: new Date(Date.now())
        };
        if (!discordUser.username) {
            throw new common_1.HttpException('Incomplete Data', common_1.HttpStatus.BAD_REQUEST);
        }
        this.discord.push(discordUser);
        return 'User added successfully!';
    };
    DiscordService.prototype.findAll = function () {
        return __spreadArray([], this.discord);
    };
    DiscordService.prototype.findOne = function (id) {
        var discordUser = this.discord.find(function (user) { return user.id === id; });
        if (!discordUser) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return __assign({}, discordUser);
    };
    DiscordService.prototype.update = function (id, updateDiscordDto) {
        var username = updateDiscordDto.username, _a = updateDiscordDto.bio, description = _a.description, twitter = _a.twitter, linkedin = _a.linkedin, github = _a.github;
        var discordUser = this.discord.find(function (user) { return user.id === id; });
        if (!discordUser) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        var updatedDiscord = __assign({}, discordUser);
        if (username) {
            updatedDiscord.username = username;
        }
        if (description) {
            updatedDiscord.bio.description = description;
        }
        if (twitter) {
            updatedDiscord.bio.twitter = twitter;
        }
        if (linkedin) {
            updatedDiscord.bio.linkedin = linkedin;
        }
        if (github) {
            updatedDiscord.bio.github = github;
        }
        return 'User updated successfully!';
    };
    DiscordService.prototype.remove = function (id) {
        var updatedDiscord = this.discord.filter(function (user) { return user.id !== id; });
        if (!updatedDiscord) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        this.discord = __spreadArray([], updatedDiscord);
        return 'User deleted successfully!';
    };
    DiscordService = __decorate([
        common_1.Injectable()
    ], DiscordService);
    return DiscordService;
}());
exports.DiscordService = DiscordService;
