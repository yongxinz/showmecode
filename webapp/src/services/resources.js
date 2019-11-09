/**
 * 传body：resources.xxx.xxx({a: 1})
 * 传params：resources.xxx.xxx(null, { params: { id: 22 } })
 * 传query：resources.xxx.xxx(null, { query: { id: 22 } })
 */

import resourcesConfig from '@/configs/resources';
import request from '@/services/request';
import generateResources from '@/utils/generateResources';

const resources = generateResources(resourcesConfig, request);

export default resources;
