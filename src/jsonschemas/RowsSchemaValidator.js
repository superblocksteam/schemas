/* eslint-disable */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","$ref":"#/definitions/RowsSchema","definitions":{"RowsSchema":{"type":"array","items":{"type":"object","additionalProperties":{}}}}};const schema12 = {"type":"array","items":{"type":"object","additionalProperties":{}}};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;if(errors === _errs0){if(Array.isArray(data)){var valid1 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/definitions/RowsSchema/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs2 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/definitions/RowsSchema/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;}