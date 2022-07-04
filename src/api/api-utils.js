
export function createDefaultResponse() {
  return {
    isSuccessful: false,
    data: null,
    errorMessage: null,
  };
}

export async function normalizeResponse(promise = Promise.resolve) {
  const defaultResponse = createDefaultResponse();
  let networkResponse = null;

  try {
    networkResponse = await promise;
    defaultResponse.data = networkResponse.data;
    defaultResponse.isSuccessful = true;
  } catch (error) {
    defaultResponse.errorMessage = error.message;
  }

  return defaultResponse;
}

export function makeRequest(
  httpClient = fetch,
  baseURL = 'http://localhost:4000',
  baseHeaders = {
    Accept: "application/json",
  },
) {
  return async function request({
    url = "/",
    requestMethod = "GET",
    body = {},
    headers = {},
  }) {
      // const token = await auth.getCurrentUserToken();
      return normalizeResponse(
          httpClient({
              url: baseURL + url,
              method: requestMethod,
              data: body,
              headers: {
                  ...baseHeaders,
                  ...headers,
                    // Authorization: `Bearer ${token}`,
              },
              validateStatus: function validateStatus(status) {
                  // Resolve only if the status code is in the 200 range
                  return status >= 200 && status < 400;
              },
            }),
            );
        };

}

export default function makeApi() {

  function logIn(user) {
    console.log(user);
    return makeRequest({
      body: user,
      url: '/my-drive/usr/login',
      requestMethod: 'POST',
    })
  }

  function signUp(uData) {
    
  }

  return {
    logIn: logIn,
  }


}