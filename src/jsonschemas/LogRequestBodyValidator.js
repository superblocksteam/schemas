/* eslint-disable */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","$ref":"#/definitions/LogRequestBody","definitions":{"LogRequestBody":{"$ref":"#/definitions/PostLogsRequestBody"},"PostLogsRequestBody":{"type":"object","properties":{"logs":{"type":"array","items":{"$ref":"#/definitions/RemoteHttpLog"}}},"required":["logs"],"additionalProperties":false},"RemoteHttpLog":{"type":"object","additionalProperties":false,"properties":{"resourceId":{"type":"string"},"resourceType":{"$ref":"#/definitions/EventEntityType"},"organizationId":{"type":"string"},"correlationId":{"type":"string"},"environment":{"type":"string"},"resourceName":{"type":"string"},"resourceAction":{"type":"string"},"userEmail":{"type":"string"},"error":{"type":"string"},"errorType":{"type":"string"},"controllerId":{"type":"string"},"workerId":{"type":"string"},"parentId":{"type":"string"},"parentName":{"type":"string"},"parentType":{"$ref":"#/definitions/EventEntityType"},"plugin":{"type":"string"},"integragionId":{"type":"string"},"level":{"type":"number"},"time":{"type":"number"},"remote":{"type":"boolean"},"msg":{"type":"string"}},"required":["level","msg","organizationId","remote","resourceId","resourceType","time"]},"EventEntityType":{"type":"string","enum":["application","workflow","scheduled_job","datasource","folder","user","organization","api","step","agent","controller","worker","survey","account","billing","observability","group","organization_invites"]}}};const schema12 = {"type":"object","properties":{"logs":{"type":"array","items":{"$ref":"#/definitions/RemoteHttpLog"}}},"required":["logs"],"additionalProperties":false};const schema13 = {"type":"object","additionalProperties":false,"properties":{"resourceId":{"type":"string"},"resourceType":{"$ref":"#/definitions/EventEntityType"},"organizationId":{"type":"string"},"correlationId":{"type":"string"},"environment":{"type":"string"},"resourceName":{"type":"string"},"resourceAction":{"type":"string"},"userEmail":{"type":"string"},"error":{"type":"string"},"errorType":{"type":"string"},"controllerId":{"type":"string"},"workerId":{"type":"string"},"parentId":{"type":"string"},"parentName":{"type":"string"},"parentType":{"$ref":"#/definitions/EventEntityType"},"plugin":{"type":"string"},"integragionId":{"type":"string"},"level":{"type":"number"},"time":{"type":"number"},"remote":{"type":"boolean"},"msg":{"type":"string"}},"required":["level","msg","organizationId","remote","resourceId","resourceType","time"]};const schema14 = {"type":"string","enum":["application","workflow","scheduled_job","datasource","folder","user","organization","api","step","agent","controller","worker","survey","account","billing","observability","group","organization_invites"]};const func2 = Object.prototype.hasOwnProperty;function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((((((data.level === undefined) && (missing0 = "level")) || ((data.msg === undefined) && (missing0 = "msg"))) || ((data.organizationId === undefined) && (missing0 = "organizationId"))) || ((data.remote === undefined) && (missing0 = "remote"))) || ((data.resourceId === undefined) && (missing0 = "resourceId"))) || ((data.resourceType === undefined) && (missing0 = "resourceType"))) || ((data.time === undefined) && (missing0 = "time"))){validate12.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(func2.call(schema13.properties, key0))){validate12.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.resourceId !== undefined){let data0 = data.resourceId;const _errs2 = errors;if(typeof data0 !== "string"){let dataType0 = typeof data0;let coerced0 = undefined;if(!(coerced0 !== undefined)){if(dataType0 == "number" || dataType0 == "boolean"){coerced0 = "" + data0;}else if(data0 === null){coerced0 = "";}else {validate12.errors = [{instancePath:instancePath+"/resourceId",schemaPath:"#/properties/resourceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced0 !== undefined){data0 = coerced0;if(data !== undefined){data["resourceId"] = coerced0;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.resourceType !== undefined){let data1 = data.resourceType;const _errs4 = errors;if(typeof data1 !== "string"){let dataType1 = typeof data1;let coerced1 = undefined;if(!(coerced1 !== undefined)){if(dataType1 == "number" || dataType1 == "boolean"){coerced1 = "" + data1;}else if(data1 === null){coerced1 = "";}else {validate12.errors = [{instancePath:instancePath+"/resourceType",schemaPath:"#/definitions/EventEntityType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced1 !== undefined){data1 = coerced1;if(data !== undefined){data["resourceType"] = coerced1;}}}if(!((((((((((((((((((data1 === "application") || (data1 === "workflow")) || (data1 === "scheduled_job")) || (data1 === "datasource")) || (data1 === "folder")) || (data1 === "user")) || (data1 === "organization")) || (data1 === "api")) || (data1 === "step")) || (data1 === "agent")) || (data1 === "controller")) || (data1 === "worker")) || (data1 === "survey")) || (data1 === "account")) || (data1 === "billing")) || (data1 === "observability")) || (data1 === "group")) || (data1 === "organization_invites"))){validate12.errors = [{instancePath:instancePath+"/resourceType",schemaPath:"#/definitions/EventEntityType/enum",keyword:"enum",params:{allowedValues: schema14.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.organizationId !== undefined){let data2 = data.organizationId;const _errs7 = errors;if(typeof data2 !== "string"){let dataType2 = typeof data2;let coerced2 = undefined;if(!(coerced2 !== undefined)){if(dataType2 == "number" || dataType2 == "boolean"){coerced2 = "" + data2;}else if(data2 === null){coerced2 = "";}else {validate12.errors = [{instancePath:instancePath+"/organizationId",schemaPath:"#/properties/organizationId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced2 !== undefined){data2 = coerced2;if(data !== undefined){data["organizationId"] = coerced2;}}}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.correlationId !== undefined){let data3 = data.correlationId;const _errs9 = errors;if(typeof data3 !== "string"){let dataType3 = typeof data3;let coerced3 = undefined;if(!(coerced3 !== undefined)){if(dataType3 == "number" || dataType3 == "boolean"){coerced3 = "" + data3;}else if(data3 === null){coerced3 = "";}else {validate12.errors = [{instancePath:instancePath+"/correlationId",schemaPath:"#/properties/correlationId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced3 !== undefined){data3 = coerced3;if(data !== undefined){data["correlationId"] = coerced3;}}}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.environment !== undefined){let data4 = data.environment;const _errs11 = errors;if(typeof data4 !== "string"){let dataType4 = typeof data4;let coerced4 = undefined;if(!(coerced4 !== undefined)){if(dataType4 == "number" || dataType4 == "boolean"){coerced4 = "" + data4;}else if(data4 === null){coerced4 = "";}else {validate12.errors = [{instancePath:instancePath+"/environment",schemaPath:"#/properties/environment/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced4 !== undefined){data4 = coerced4;if(data !== undefined){data["environment"] = coerced4;}}}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.resourceName !== undefined){let data5 = data.resourceName;const _errs13 = errors;if(typeof data5 !== "string"){let dataType5 = typeof data5;let coerced5 = undefined;if(!(coerced5 !== undefined)){if(dataType5 == "number" || dataType5 == "boolean"){coerced5 = "" + data5;}else if(data5 === null){coerced5 = "";}else {validate12.errors = [{instancePath:instancePath+"/resourceName",schemaPath:"#/properties/resourceName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced5 !== undefined){data5 = coerced5;if(data !== undefined){data["resourceName"] = coerced5;}}}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.resourceAction !== undefined){let data6 = data.resourceAction;const _errs15 = errors;if(typeof data6 !== "string"){let dataType6 = typeof data6;let coerced6 = undefined;if(!(coerced6 !== undefined)){if(dataType6 == "number" || dataType6 == "boolean"){coerced6 = "" + data6;}else if(data6 === null){coerced6 = "";}else {validate12.errors = [{instancePath:instancePath+"/resourceAction",schemaPath:"#/properties/resourceAction/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced6 !== undefined){data6 = coerced6;if(data !== undefined){data["resourceAction"] = coerced6;}}}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.userEmail !== undefined){let data7 = data.userEmail;const _errs17 = errors;if(typeof data7 !== "string"){let dataType7 = typeof data7;let coerced7 = undefined;if(!(coerced7 !== undefined)){if(dataType7 == "number" || dataType7 == "boolean"){coerced7 = "" + data7;}else if(data7 === null){coerced7 = "";}else {validate12.errors = [{instancePath:instancePath+"/userEmail",schemaPath:"#/properties/userEmail/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced7 !== undefined){data7 = coerced7;if(data !== undefined){data["userEmail"] = coerced7;}}}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.error !== undefined){let data8 = data.error;const _errs19 = errors;if(typeof data8 !== "string"){let dataType8 = typeof data8;let coerced8 = undefined;if(!(coerced8 !== undefined)){if(dataType8 == "number" || dataType8 == "boolean"){coerced8 = "" + data8;}else if(data8 === null){coerced8 = "";}else {validate12.errors = [{instancePath:instancePath+"/error",schemaPath:"#/properties/error/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced8 !== undefined){data8 = coerced8;if(data !== undefined){data["error"] = coerced8;}}}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.errorType !== undefined){let data9 = data.errorType;const _errs21 = errors;if(typeof data9 !== "string"){let dataType9 = typeof data9;let coerced9 = undefined;if(!(coerced9 !== undefined)){if(dataType9 == "number" || dataType9 == "boolean"){coerced9 = "" + data9;}else if(data9 === null){coerced9 = "";}else {validate12.errors = [{instancePath:instancePath+"/errorType",schemaPath:"#/properties/errorType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced9 !== undefined){data9 = coerced9;if(data !== undefined){data["errorType"] = coerced9;}}}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.controllerId !== undefined){let data10 = data.controllerId;const _errs23 = errors;if(typeof data10 !== "string"){let dataType10 = typeof data10;let coerced10 = undefined;if(!(coerced10 !== undefined)){if(dataType10 == "number" || dataType10 == "boolean"){coerced10 = "" + data10;}else if(data10 === null){coerced10 = "";}else {validate12.errors = [{instancePath:instancePath+"/controllerId",schemaPath:"#/properties/controllerId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced10 !== undefined){data10 = coerced10;if(data !== undefined){data["controllerId"] = coerced10;}}}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.workerId !== undefined){let data11 = data.workerId;const _errs25 = errors;if(typeof data11 !== "string"){let dataType11 = typeof data11;let coerced11 = undefined;if(!(coerced11 !== undefined)){if(dataType11 == "number" || dataType11 == "boolean"){coerced11 = "" + data11;}else if(data11 === null){coerced11 = "";}else {validate12.errors = [{instancePath:instancePath+"/workerId",schemaPath:"#/properties/workerId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced11 !== undefined){data11 = coerced11;if(data !== undefined){data["workerId"] = coerced11;}}}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.parentId !== undefined){let data12 = data.parentId;const _errs27 = errors;if(typeof data12 !== "string"){let dataType12 = typeof data12;let coerced12 = undefined;if(!(coerced12 !== undefined)){if(dataType12 == "number" || dataType12 == "boolean"){coerced12 = "" + data12;}else if(data12 === null){coerced12 = "";}else {validate12.errors = [{instancePath:instancePath+"/parentId",schemaPath:"#/properties/parentId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced12 !== undefined){data12 = coerced12;if(data !== undefined){data["parentId"] = coerced12;}}}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.parentName !== undefined){let data13 = data.parentName;const _errs29 = errors;if(typeof data13 !== "string"){let dataType13 = typeof data13;let coerced13 = undefined;if(!(coerced13 !== undefined)){if(dataType13 == "number" || dataType13 == "boolean"){coerced13 = "" + data13;}else if(data13 === null){coerced13 = "";}else {validate12.errors = [{instancePath:instancePath+"/parentName",schemaPath:"#/properties/parentName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced13 !== undefined){data13 = coerced13;if(data !== undefined){data["parentName"] = coerced13;}}}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.parentType !== undefined){let data14 = data.parentType;const _errs31 = errors;if(typeof data14 !== "string"){let dataType14 = typeof data14;let coerced14 = undefined;if(!(coerced14 !== undefined)){if(dataType14 == "number" || dataType14 == "boolean"){coerced14 = "" + data14;}else if(data14 === null){coerced14 = "";}else {validate12.errors = [{instancePath:instancePath+"/parentType",schemaPath:"#/definitions/EventEntityType/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced14 !== undefined){data14 = coerced14;if(data !== undefined){data["parentType"] = coerced14;}}}if(!((((((((((((((((((data14 === "application") || (data14 === "workflow")) || (data14 === "scheduled_job")) || (data14 === "datasource")) || (data14 === "folder")) || (data14 === "user")) || (data14 === "organization")) || (data14 === "api")) || (data14 === "step")) || (data14 === "agent")) || (data14 === "controller")) || (data14 === "worker")) || (data14 === "survey")) || (data14 === "account")) || (data14 === "billing")) || (data14 === "observability")) || (data14 === "group")) || (data14 === "organization_invites"))){validate12.errors = [{instancePath:instancePath+"/parentType",schemaPath:"#/definitions/EventEntityType/enum",keyword:"enum",params:{allowedValues: schema14.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.plugin !== undefined){let data15 = data.plugin;const _errs34 = errors;if(typeof data15 !== "string"){let dataType15 = typeof data15;let coerced15 = undefined;if(!(coerced15 !== undefined)){if(dataType15 == "number" || dataType15 == "boolean"){coerced15 = "" + data15;}else if(data15 === null){coerced15 = "";}else {validate12.errors = [{instancePath:instancePath+"/plugin",schemaPath:"#/properties/plugin/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced15 !== undefined){data15 = coerced15;if(data !== undefined){data["plugin"] = coerced15;}}}var valid0 = _errs34 === errors;}else {var valid0 = true;}if(valid0){if(data.integragionId !== undefined){let data16 = data.integragionId;const _errs36 = errors;if(typeof data16 !== "string"){let dataType16 = typeof data16;let coerced16 = undefined;if(!(coerced16 !== undefined)){if(dataType16 == "number" || dataType16 == "boolean"){coerced16 = "" + data16;}else if(data16 === null){coerced16 = "";}else {validate12.errors = [{instancePath:instancePath+"/integragionId",schemaPath:"#/properties/integragionId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced16 !== undefined){data16 = coerced16;if(data !== undefined){data["integragionId"] = coerced16;}}}var valid0 = _errs36 === errors;}else {var valid0 = true;}if(valid0){if(data.level !== undefined){let data17 = data.level;const _errs38 = errors;if(!((typeof data17 == "number") && (isFinite(data17)))){let dataType17 = typeof data17;let coerced17 = undefined;if(!(coerced17 !== undefined)){if(dataType17 == "boolean" || data17 === null
              || (dataType17 == "string" && data17 && data17 == +data17)){coerced17 = +data17;}else {validate12.errors = [{instancePath:instancePath+"/level",schemaPath:"#/properties/level/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}}if(coerced17 !== undefined){data17 = coerced17;if(data !== undefined){data["level"] = coerced17;}}}var valid0 = _errs38 === errors;}else {var valid0 = true;}if(valid0){if(data.time !== undefined){let data18 = data.time;const _errs40 = errors;if(!((typeof data18 == "number") && (isFinite(data18)))){let dataType18 = typeof data18;let coerced18 = undefined;if(!(coerced18 !== undefined)){if(dataType18 == "boolean" || data18 === null
              || (dataType18 == "string" && data18 && data18 == +data18)){coerced18 = +data18;}else {validate12.errors = [{instancePath:instancePath+"/time",schemaPath:"#/properties/time/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}}if(coerced18 !== undefined){data18 = coerced18;if(data !== undefined){data["time"] = coerced18;}}}var valid0 = _errs40 === errors;}else {var valid0 = true;}if(valid0){if(data.remote !== undefined){let data19 = data.remote;const _errs42 = errors;if(typeof data19 !== "boolean"){let coerced19 = undefined;if(!(coerced19 !== undefined)){if(data19 === "false" || data19 === 0 || data19 === null){coerced19 = false;}else if(data19 === "true" || data19 === 1){coerced19 = true;}else {validate12.errors = [{instancePath:instancePath+"/remote",schemaPath:"#/properties/remote/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}}if(coerced19 !== undefined){data19 = coerced19;if(data !== undefined){data["remote"] = coerced19;}}}var valid0 = _errs42 === errors;}else {var valid0 = true;}if(valid0){if(data.msg !== undefined){let data20 = data.msg;const _errs44 = errors;if(typeof data20 !== "string"){let dataType20 = typeof data20;let coerced20 = undefined;if(!(coerced20 !== undefined)){if(dataType20 == "number" || dataType20 == "boolean"){coerced20 = "" + data20;}else if(data20 === null){coerced20 = "";}else {validate12.errors = [{instancePath:instancePath+"/msg",schemaPath:"#/properties/msg/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced20 !== undefined){data20 = coerced20;if(data !== undefined){data["msg"] = coerced20;}}}var valid0 = _errs44 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.logs === undefined) && (missing0 = "logs")){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(key0 === "logs")){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.logs !== undefined){let data0 = data.logs;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){const _errs4 = errors;if(!(validate12(data0[i0], {instancePath:instancePath+"/logs/" + i0,parentData:data0,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/logs",schemaPath:"#/properties/logs/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}validate10.errors = vErrors;return errors === 0;}