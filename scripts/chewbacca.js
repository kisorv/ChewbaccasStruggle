class FriendList {
  constructor() {
    this.friendList = [];
  }
  addFriend(newFriend) {
    this.friendList.push(newFriend);
  }
  rankFriend() {}
  print() {
    console.log(this.friendList);
  }
}

class Friend {
  constructor(name, flyingSkill, dejarikSkill, galacticEmpire) {
    this.name = name;
    this.flyingSkill = flyingSkill;
    this.dejarikSkill = dejarikSkill;
    this.galacticEmpire = galacticEmpire;
  }
}

let getFriendName = function() {
  return prompt("What is your name?");
};

let getFlyingSkill = function() {
  return prompt("Rate your flying skill from 1-10 with 10 being the best.");
};

let getDejarikSkill = function() {
  return prompt("Rate your Dejarik skill from 1-10 with 10 being the best.");
};

let getGalacticEmpire = function() {
  return prompt(
    "Rate your fear of the Galactic Empire from 1-10 with 10 being not afraid at all."
  );
};

const newFriend = new Friend(
  getFriendName(),
  getFlyingSkill(),
  getDejarikSkill(),
  getGalacticEmpire()
);
console.log(newFriend);
const friendList = new FriendList();
