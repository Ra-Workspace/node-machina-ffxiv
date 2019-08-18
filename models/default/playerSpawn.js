// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.title = MachinaModels.getUint16(struct.data, 0);
    struct.u1b = MachinaModels.getUint16(struct.data, 2);
    struct.currentWorldId = MachinaModels.getUint16(struct.data, 4);
    struct.homeWorldId = MachinaModels.getUint16(struct.data, 6);
    struct.gmRank = struct.data[8];
    struct.u3c = struct.data[9];
    struct.u4 = struct.data[10];
    struct.onlineStatus = struct.data[11];
    struct.pose = struct.data[12];
    struct.u5a = struct.data[13];
    struct.u5b = struct.data[14];
    struct.u5c = struct.data[15];
    struct.targetId = MachinaModels.getUint64(struct.data, 16);
    struct.u6 = MachinaModels.getUint32(struct.data, 24);
    struct.u7 = MachinaModels.getUint32(struct.data, 28);
    struct.mainWeaponModel = MachinaModels.getUint64(struct.data, 32);
    struct.secWeaponModel = MachinaModels.getUint64(struct.data, 40);
    struct.craftToolModel = MachinaModels.getUint64(struct.data, 48);
    struct.u14 = MachinaModels.getUint32(struct.data, 56);
    struct.u15 = MachinaModels.getUint32(struct.data, 60);
    struct.bNPCBase = MachinaModels.getUint32(struct.data, 64);
    struct.bNPCName = MachinaModels.getUint32(struct.data, 68);
    struct.u18 = MachinaModels.getUint32(struct.data, 72);
    struct.u19 = MachinaModels.getUint32(struct.data, 76);
    struct.directorId = MachinaModels.getUint32(struct.data, 80);
    struct.ownerId = MachinaModels.getUint32(struct.data, 84);
    struct.u22 = MachinaModels.getUint32(struct.data, 88);
    struct.hPMax = MachinaModels.getUint32(struct.data, 92);
    struct.hPCurr = MachinaModels.getUint32(struct.data, 96);
    struct.displayFlags = MachinaModels.getUint32(struct.data, 100);
    struct.fateID = MachinaModels.getUint16(struct.data, 104);
    struct.mPCurr = MachinaModels.getUint16(struct.data, 106);
    struct.tPCurr = MachinaModels.getUint16(struct.data, 108);
    struct.mPMax = MachinaModels.getUint16(struct.data, 110);
    struct.tPMax = MachinaModels.getUint16(struct.data, 112);
    struct.modelChara = MachinaModels.getUint16(struct.data, 114);
    struct.rotation = MachinaModels.getUint16(struct.data, 116);
    struct.activeMinion = MachinaModels.getUint16(struct.data, 118);
    struct.spawnIndex = struct.data[120];
    struct.state = struct.data[121];
    struct.persistentEmote = struct.data[122];
    struct.modelType = struct.data[123];
    struct.subtype = struct.data[124];
    struct.voice = struct.data[125];
    struct.u25c = MachinaModels.getUint16(struct.data, 126);
    struct.enemyType = struct.data[128];
    struct.level = struct.data[129];
    struct.classJob = struct.data[130];
    struct.u26d = struct.data[131];
    struct.u27a = MachinaModels.getUint16(struct.data, 132);
    struct.currentMount = struct.data[134];
    struct.mountHead = struct.data[135];
    struct.mountBody = struct.data[136];
    struct.mountFeet = struct.data[137];
    struct.mountColor = struct.data[138];
    struct.scale = struct.data[139];
    struct.u29b = MachinaModels.getUint32(struct.data, 140);
    struct.u30b = MachinaModels.getUint32(struct.data, 144);
    struct.effect_1 = MachinaModels.getUint16(struct.data, 148);    struct.effect_2 = MachinaModels.getUint16(struct.data, 150);    struct.effect_3 = MachinaModels.getUint16(struct.data, 152);    struct.effect_4 = MachinaModels.getUint16(struct.data, 154);    struct.effect_5 = MachinaModels.getUint16(struct.data, 156);    struct.effect_6 = MachinaModels.getUint16(struct.data, 158);    struct.effect_7 = MachinaModels.getUint16(struct.data, 160);    struct.effect_8 = MachinaModels.getUint16(struct.data, 162);    struct.effect_9 = MachinaModels.getUint16(struct.data, 164);    struct.effect_10 = MachinaModels.getUint16(struct.data, 166);    struct.effect_11 = MachinaModels.getUint16(struct.data, 168);    struct.effect_12 = MachinaModels.getUint16(struct.data, 170);    struct.effect_13 = MachinaModels.getUint16(struct.data, 172);    struct.effect_14 = MachinaModels.getUint16(struct.data, 174);    struct.effect_15 = MachinaModels.getUint16(struct.data, 176);    struct.effect_16 = MachinaModels.getUint16(struct.data, 178);    struct.effect_17 = MachinaModels.getUint16(struct.data, 180);    struct.effect_18 = MachinaModels.getUint16(struct.data, 182);    struct.effect_19 = MachinaModels.getUint16(struct.data, 184);    struct.effect_20 = MachinaModels.getUint16(struct.data, 186);    struct.effect_21 = MachinaModels.getUint16(struct.data, 188);    struct.effect_22 = MachinaModels.getUint16(struct.data, 190);    struct.effect_23 = MachinaModels.getUint16(struct.data, 192);    struct.effect_24 = MachinaModels.getUint16(struct.data, 194);    struct.effect_25 = MachinaModels.getUint16(struct.data, 196);    struct.effect_26 = MachinaModels.getUint16(struct.data, 198);    struct.effect_27 = MachinaModels.getUint16(struct.data, 200);    struct.effect_28 = MachinaModels.getUint16(struct.data, 202);    struct.effect_29 = MachinaModels.getUint16(struct.data, 204);    struct.effect_30 = MachinaModels.getUint16(struct.data, 206);
    struct.pos = MachinaModels.getUint16(struct.data, 208);
    struct.models_1 = MachinaModels.getUint32(struct.data, 210);    struct.models_2 = MachinaModels.getUint32(struct.data, 214);    struct.models_3 = MachinaModels.getUint32(struct.data, 218);    struct.models_4 = MachinaModels.getUint32(struct.data, 222);    struct.models_5 = MachinaModels.getUint32(struct.data, 226);    struct.models_6 = MachinaModels.getUint32(struct.data, 230);    struct.models_7 = MachinaModels.getUint32(struct.data, 234);    struct.models_8 = MachinaModels.getUint32(struct.data, 238);    struct.models_9 = MachinaModels.getUint32(struct.data, 242);    struct.models_10 = MachinaModels.getUint32(struct.data, 246);
    struct.name = String.fromCodePoint(struct.data.slice(250, 251));
    struct.look_1 = struct.data[251];    struct.look_2 = struct.data[252];    struct.look_3 = struct.data[253];    struct.look_4 = struct.data[254];    struct.look_5 = struct.data[255];    struct.look_6 = struct.data[256];    struct.look_7 = struct.data[257];    struct.look_8 = struct.data[258];    struct.look_9 = struct.data[259];    struct.look_10 = struct.data[260];    struct.look_11 = struct.data[261];    struct.look_12 = struct.data[262];    struct.look_13 = struct.data[263];    struct.look_14 = struct.data[264];    struct.look_15 = struct.data[265];    struct.look_16 = struct.data[266];    struct.look_17 = struct.data[267];    struct.look_18 = struct.data[268];    struct.look_19 = struct.data[269];    struct.look_20 = struct.data[270];    struct.look_21 = struct.data[271];    struct.look_22 = struct.data[272];    struct.look_23 = struct.data[273];    struct.look_24 = struct.data[274];    struct.look_25 = struct.data[275];    struct.look_26 = struct.data[276];
    struct.fcTag = String.fromCodePoint(struct.data.slice(277, 278));
};