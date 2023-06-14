// this program counts how many users in the object are online

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let result = 0;
  for(const user in allUsers){
    if(allUsers[user].online == true){
      result++;
    }
  }
  return result;
}

console.log(countOnline(users));