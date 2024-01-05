# Simple Countries API

Try it here: [https://vovk-countries-api.fly.dev/countries](https://vovk-countries-api.fly.dev/countries).

This API will return a list of countries. Two parameters are available `limit` and `offset`.

For example `GET` request to `https://vvovk-countries-api.herokuapp.com/countries?offset=2&limit=1` will respond with

```
{
  "total": 250,
  "limit": 1,
  "offset": 2,
  "data": [
    {
      "name": "Albania"
    }
  ]
}
```

Enjoy! 🥳
