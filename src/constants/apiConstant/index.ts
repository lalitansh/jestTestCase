const methodType = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
}

const responseCode = {
  success: 200,
  sessionExpire: 401,
  pageNotFound: 404,
  subscriptionExpire: 650
}

const activeBaseURL = {
  base: 'https://jsonplaceholder.typicode.com/'
}

const url = {
  posts: 'posts',
  postDetails: 'posts/'
}

export {
  url, responseCode, methodType, activeBaseURL
}
