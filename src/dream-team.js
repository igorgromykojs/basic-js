const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {

    let team = "";
    let names = arr.filter(function (name) {
      return typeof (name) === 'string';
    });
    names = names.map(item => item.trim().toUpperCase());
    names.sort().forEach(element => {
      team += element[0];
    });
    if (team.length == 0) {
      return false;
    } else {
      return team;
    }
  

};

// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]));

module.exports = {
  createDreamTeam
};
