/**
 * @desc 获取没有绑定到业务空间的项目
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = [];

export async function request(params) {
  return pontFetch({
    url: '/api/project/unBindProjects',
    params,
    method: 'get'
  });
}