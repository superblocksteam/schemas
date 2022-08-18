/* eslint-disable */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","$ref":"#/definitions/RegistrationRequestBody","definitions":{"RegistrationRequestBody":{"$ref":"#/definitions/PostRegistrationRequestBody"},"PostRegistrationRequestBody":{"type":"object","properties":{"pluginVersions":{"$ref":"#/definitions/SupportedPluginVersions"},"type":{"$ref":"#/definitions/AgentType"}},"required":["pluginVersions","type"],"additionalProperties":false},"SupportedPluginVersions":{"type":"object","additionalProperties":{"type":"array","items":{"$ref":"#/definitions/SemVer"}}},"SemVer":{"type":"string"},"AgentType":{"type":"number","enum":[0,1,2]}}};const schema12 = {"type":"object","properties":{"pluginVersions":{"$ref":"#/definitions/SupportedPluginVersions"},"type":{"$ref":"#/definitions/AgentType"}},"required":["pluginVersions","type"],"additionalProperties":false};const schema15 = {"type":"number","enum":[0,1,2]};const schema13 = {"type":"object","additionalProperties":{"type":"array","items":{"$ref":"#/definitions/SemVer"}}};const schema14 = {"type":"string"};function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){for(const key0 in data){let data0 = data[key0];const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;if(typeof data1 !== "string"){let dataType0 = typeof data1;let coerced0 = undefined;if(!(coerced0 !== undefined)){if(dataType0 == "number" || dataType0 == "boolean"){coerced0 = "" + data1;}else if(data1 === null){coerced0 = "";}else {validate12.errors = [{instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1")+"/" + i0,schemaPath:"#/definitions/SemVer/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced0 !== undefined){data1 = coerced0;if(data0 !== undefined){data0[i0] = coerced0;}}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate12.errors = [{instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/additionalProperties/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;if(!valid0){break;}}}else {validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate12.errors = vErrors;return errors === 0;}function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.pluginVersions === undefined) && (missing0 = "pluginVersions")) || ((data.type === undefined) && (missing0 = "type"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!((key0 === "pluginVersions") || (key0 === "type"))){validate11.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.pluginVersions !== undefined){const _errs2 = errors;if(!(validate12(data.pluginVersions, {instancePath:instancePath+"/pluginVersions",parentData:data,parentDataProperty:"pluginVersions",rootData}))){vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);errors = vErrors.length;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){let data1 = data.type;const _errs3 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){let dataType0 = typeof data1;let coerced0 = undefined;if(!(coerced0 !== undefined)){if(dataType0 == "boolean" || data1 === null
              || (dataType0 == "string" && data1 && data1 == +data1)){coerced0 = +data1;}else {validate11.errors = [{instancePath:instancePath+"/type",schemaPath:"#/definitions/AgentType/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}}if(coerced0 !== undefined){data1 = coerced0;if(data !== undefined){data["type"] = coerced0;}}}if(!(((data1 === 0) || (data1 === 1)) || (data1 === 2))){validate11.errors = [{instancePath:instancePath+"/type",schemaPath:"#/definitions/AgentType/enum",keyword:"enum",params:{allowedValues: schema15.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs3 === errors;}else {var valid0 = true;}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(!(validate11(data, {instancePath,parentData,parentDataProperty,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}validate10.errors = vErrors;return errors === 0;}