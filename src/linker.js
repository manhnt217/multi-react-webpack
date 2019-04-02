import('./user1/index').then(
  comp => {
    console.log('Loaded index1')
  }
)

import('./user2/index').then(
  comp => {
    console.log('Loaded index2')
  }
)
