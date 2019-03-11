/**
 * @desc 维度表-获取关联关系
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 项目id */
  projectId: number;
  /** dimId */
  dimId: number;
  /** 字段id */
  attributeId: number;
  /** 关联维度id */
  refDimId?: number;
}

export const init = new defs.DimRelationBO();

export async function request(params) {
  return pontFetch({
    url: '/api/model/dimTable/{dimId}/relation',
    params,
    method: 'get'
  });
}