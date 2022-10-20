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

const googleApiKey = "AIzaSyBPAy9LB51jzBwiW0j3Rq1kC3kZBTsvFSk"

const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbGl0YW5zaC5zaGFybWE5M0BnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbGFsaXRhbnNoIiwiaWF0IjoxNjYyNTU5MDc0LCJleHAiOjE2NjI5OTEwNzR9.Omx-_2PuckGbkAib74CobcsmbsSlCDGAt_UDzkUPXeg';

export {
  url, responseCode, methodType, activeBaseURL, googleApiKey, accessToken
}
