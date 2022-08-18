/* eslint-disable */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","$ref":"#/definitions/UpdateApplication","definitions":{"UpdateApplication":{"type":"object","properties":{"environment":{"type":"string","enum":["staging","production"]},"name":{"type":"string"},"color":{"type":"string"},"icon":{"type":"string"},"folderId":{"type":"string"},"isPublic":{"type":"boolean"}},"additionalProperties":false}}};const schema12 = {"type":"object","properties":{"environment":{"type":"string","enum":["staging","production"]},"name":{"type":"string"},"color":{"type":"string"},"icon":{"type":"string"},"folderId":{"type":"string"},"isPublic":{"type":"boolean"}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;if(errors === _errs0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs2 = errors;for(const key0 in data){if(!((((((key0 === "environment") || (key0 === "name")) || (key0 === "color")) || (key0 === "icon")) || (key0 === "folderId")) || (key0 === "isPublic"))){validate10.errors = [{instancePath,schemaPath:"#/definitions/UpdateApplication/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs2 === errors){if(data.environment !== undefined){let data0 = data.environment;const _errs3 = errors;if(typeof data0 !== "string"){let dataType0 = typeof data0;let coerced0 = undefined;if(!(coerced0 !== undefined)){if(dataType0 == "number" || dataType0 == "boolean"){coerced0 = "" + data0;}else if(data0 === null){coerced0 = "";}else {validate10.errors = [{instancePath:instancePath+"/environment",schemaPath:"#/definitions/UpdateApplication/properties/environment/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced0 !== undefined){data0 = coerced0;if(data !== undefined){data["environment"] = coerced0;}}}if(!((data0 === "staging") || (data0 === "production"))){validate10.errors = [{instancePath:instancePath+"/environment",schemaPath:"#/definitions/UpdateApplication/properties/environment/enum",keyword:"enum",params:{allowedValues: schema12.properties.environment.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs3 === errors;}else {var valid1 = true;}if(valid1){if(data.name !== undefined){let data1 = data.name;const _errs5 = errors;if(typeof data1 !== "string"){let dataType1 = typeof data1;let coerced1 = undefined;if(!(coerced1 !== undefined)){if(dataType1 == "number" || dataType1 == "boolean"){coerced1 = "" + data1;}else if(data1 === null){coerced1 = "";}else {validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/definitions/UpdateApplication/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced1 !== undefined){data1 = coerced1;if(data !== undefined){data["name"] = coerced1;}}}var valid1 = _errs5 === errors;}else {var valid1 = true;}if(valid1){if(data.color !== undefined){let data2 = data.color;const _errs7 = errors;if(typeof data2 !== "string"){let dataType2 = typeof data2;let coerced2 = undefined;if(!(coerced2 !== undefined)){if(dataType2 == "number" || dataType2 == "boolean"){coerced2 = "" + data2;}else if(data2 === null){coerced2 = "";}else {validate10.errors = [{instancePath:instancePath+"/color",schemaPath:"#/definitions/UpdateApplication/properties/color/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced2 !== undefined){data2 = coerced2;if(data !== undefined){data["color"] = coerced2;}}}var valid1 = _errs7 === errors;}else {var valid1 = true;}if(valid1){if(data.icon !== undefined){let data3 = data.icon;const _errs9 = errors;if(typeof data3 !== "string"){let dataType3 = typeof data3;let coerced3 = undefined;if(!(coerced3 !== undefined)){if(dataType3 == "number" || dataType3 == "boolean"){coerced3 = "" + data3;}else if(data3 === null){coerced3 = "";}else {validate10.errors = [{instancePath:instancePath+"/icon",schemaPath:"#/definitions/UpdateApplication/properties/icon/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced3 !== undefined){data3 = coerced3;if(data !== undefined){data["icon"] = coerced3;}}}var valid1 = _errs9 === errors;}else {var valid1 = true;}if(valid1){if(data.folderId !== undefined){let data4 = data.folderId;const _errs11 = errors;if(typeof data4 !== "string"){let dataType4 = typeof data4;let coerced4 = undefined;if(!(coerced4 !== undefined)){if(dataType4 == "number" || dataType4 == "boolean"){coerced4 = "" + data4;}else if(data4 === null){coerced4 = "";}else {validate10.errors = [{instancePath:instancePath+"/folderId",schemaPath:"#/definitions/UpdateApplication/properties/folderId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced4 !== undefined){data4 = coerced4;if(data !== undefined){data["folderId"] = coerced4;}}}var valid1 = _errs11 === errors;}else {var valid1 = true;}if(valid1){if(data.isPublic !== undefined){let data5 = data.isPublic;const _errs13 = errors;if(typeof data5 !== "boolean"){let coerced5 = undefined;if(!(coerced5 !== undefined)){if(data5 === "false" || data5 === 0 || data5 === null){coerced5 = false;}else if(data5 === "true" || data5 === 1){coerced5 = true;}else {validate10.errors = [{instancePath:instancePath+"/isPublic",schemaPath:"#/definitions/UpdateApplication/properties/isPublic/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}}if(coerced5 !== undefined){data5 = coerced5;if(data !== undefined){data["isPublic"] = coerced5;}}}var valid1 = _errs13 === errors;}else {var valid1 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/definitions/UpdateApplication/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}