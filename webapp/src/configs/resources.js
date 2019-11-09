// method 默认为 POST，其他 method 需要显示声明
import HTTP_METHODS from '@/constants/httpMethods';

// const { GET, POST, DELETE, PATCH } = HTTP_METHODS;
const { GET } = HTTP_METHODS;

export default {
  login: {
    check: {
      url: 'uc/lc',
      method: GET
    },
    logout: {
      url: 'uc/lo',
      method: GET
    },
    token: {
      url: 'uc/st',
      method: GET
    }
  }
};
