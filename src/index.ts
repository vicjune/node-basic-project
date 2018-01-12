import app from './App'

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log({
    text: 'cocoa',
    number: 4,
    bool: true,
    obj: {
      var: 'coucou',
      co: null
    },
    array: [
      'gzeg',
      'ffazrfaerf',
      'ergegr'
    ]
  })

  return console.log(`server is listening on ${port}`)
})
