# Darksky Micro Proxy

## The Issue

If you try to create a webapp using DarkSky API, you will soon realize that you have a big issue to deal with: they disabled [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
on their servers.

You will see a `No 'Access-Control-Allow-Origin' header is present on the requested resource` message in console when you try to fetch weather data from the api. 

From the [DarkSky FAQ](https://darksky.net/dev/docs/faq#cross-origin)
> We take security very seriously at Dark Sky. As a security precaution we have disabled cross-origin resource sharing (CORS) on our servers.
> Your API call includes your secret API key as part of the request. If you were to make API calls from client-facing code, anyone could extract and use your API key, which would result in a bill that you'd have to pay. We disable CORS to help keep your API secret key a secret.
> To prevent API key abuse, you should set up a proxy server to make calls to our API behind the scenes. 
> Then you can provide forecasts to your clients without exposing your API key.


## The Solution

As recommends by DarkSky you can use a proxy server to consume the API and then pass the JSON to the client. **Darksky Micro Proxy** is a microservice proxy created with [Micro](https://github.com/zeit/micro) and hosted on [Zeit | Now](https://zeit.co/now). It will proxy your request (latitude,longitude) to Darksky API and will give you back their response.


## Use it

Test it here: current temperature for [Berlin (54.62, 8.96)](https://dci-fbw12-darksky.now.sh/?54.62,8.96).



 ## Learn Now
 To start using Now:
 - Register an account on [Zeit](https://zeit.co/signup)
 - Download and install the [Now Desktop client](https://zeit.co/download)
 - Check the [documentation](https://zeit.co/docs)

## Setup and deploy on Now

- Clone this repository
- Register at https://darksky.net/dev/ to get you **Api Key**
- Local development: create a `now-secrets.json`file and insert your **Darksky API key**, check [Now Env documentation](https://github.com/zeit/now-env) for details
- Run the microservice locally locally with `npm run dev`: you should see a message  
 `> Ready! Listening on http://0.0.0.0:3001`
- To deploy your own Darksky proxy to [Now](https://zeit.co/now) edit `now.json` and change name/alias. With the *Now-Cli* save your secret `now secret add darksky-api-key YOUR_API_KEY`.
You should see a message   
`> Success! Secret darksky-api-key added!`.  
 You can deploy your proxy using `now`


