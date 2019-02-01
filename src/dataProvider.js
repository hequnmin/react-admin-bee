import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';

// const API_URL = 'my.api.url';
const API_URL = 'http://localhost:3000/api';    //Connect to react-admin-bee-server

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
  switch (type) {
    case GET_LIST: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      // const query = {
      //   sort: JSON.stringify([field, order]),
      //   range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      //   filter: JSON.stringify(params.filter),
      // };
      const query = {
        ...fetchUtils.flattenObject(params.filter),
        _sort: field,
        _order: order,
        _start: (page - 1) * perPage,
        _end: page * perPage,
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_ONE:
      return { url: `${API_URL}/${resource}/${params.id}` };
    case GET_MANY: {
      const query = {
        filter: JSON.stringify({ id: params.ids }),
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_MANY_REFERENCE: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      // const query = {
      //   sort: JSON.stringify([field, order]),
      //   range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
      //   filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
      // };
      const query = {
        ...fetchUtils.flattenObject(params.filter),
        [params.target]: params.id,
        _sort: field,
        _order: order,
        _start: (page - 1) * perPage,
        _end: page * perPage,
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case UPDATE:
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: 'PUT', body: JSON.stringify(params.data) },
      };
    case CREATE:
      return {
        url: `${API_URL}/${resource}`,
        options: { method: 'POST', body: JSON.stringify(params.data) },
      };
    case DELETE:
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: 'DELETE' },
      };
    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
  // const { headers, json } = response;
  const json = response.json;
  switch (type) {
    case GET_LIST:
      return {
        data: json.data,            // data: json.map(x => x),
        total: parseInt(json.total),          // total: parseInt(headers.get('x-total-count').split('/').pop(), 10),      // parseInt(headers.get('content-range').split('/').pop(), 10),
      };
    case GET_ONE:
      return {
        data: json.data,
      };
    case CREATE:
      return { data: { ...params.data, id: json.id } };
    case UPDATE:
      return {
        data: json.data,
      };
    default:
      return { data: json };
  }
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
  const { fetchJson } = fetchUtils;
  const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
  return fetchJson(url, options)
    .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};
