
import(/* webpackChunkName: 'user1' */ './user1/index').then(
  comp => {
    console.log('Loaded index1')
  }
)


import(/* webpackChunkName: 'user2' */ './user2/index').then(
  comp => {
    console.log('Loaded index2')
  }
)
