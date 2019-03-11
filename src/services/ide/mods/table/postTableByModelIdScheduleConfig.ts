/**
 * @desc 保存逻辑表的调度配置, 会先检测调度配置的正确性, 如果不正确会抛出异常提示错误原因
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** 逻辑表模型id */
  modelId: number;
  /** 项目Id */
  projectId: number;
  /** 逻辑表类型:TableTypeEnum */
  tableType: number;
}

export const init = new defs.LogicalTableParseIssueDTO();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/model/table/{modelId}/scheduleConfig',
    params: bodyParams,
    method: 'post'
  });
}