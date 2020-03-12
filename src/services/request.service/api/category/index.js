import { sendRequest } from '../../request.builder';

const prefix = 'https://discworld.herokuapp.com/api/category/';

export const category = {
  getCategories: () => {
    const options = {
      url: `${prefix}`,
      method: 'GET',
    };

    return sendRequest(options);
  },
};
