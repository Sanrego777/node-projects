### rewrite URL
- To rewrite url means to change the requested url (by a web browser, or generally a client) to a different url on the server. Idea is to provide a nicer url to the client, or alter the destination as we need.
- Because rewrite url happens on the server, client is not aware of it. Also, client's url remains unchanged (in contrary to redirection that tells client to navigate to a new url, and so url can change).
- How rewrite url is done depends on the used server. In Express it is achieved by writing middleware.

#### Resources
 - [Express routing](https://expressjs.com/en/guide/routing.html)
 - [Express - writing middleware](https://expressjs.com/en/guide/writing-middleware.html)
 - [Express- using middleware](https://expressjs.com/en/guide/using-middleware.html)
