angular.module('starter.services', [])

.factory('Musicas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var musicas = [{
    id: 0,
    nome: 'Nome da Musica',
    letra: 'You on your way?'
    
  }, {
    id: 1,
    nome: 'Max Lynx',
    letra: 'Hey, it\'s me'
    
  }, {
    id: 2,
    nome: 'Adam Bradleyson',
    letra: 'I should buy a boat'
    
  }, {
    id: 3,
    nome: 'Perry Governor',
    letra: 'Look at my mukluks!'
    
  }, {
    id: 4,
    nome: 'Mike Harrington',
    letra: 'This is wicked good ice cream.'
  }];

  return {
    all: function() {
      return musicas;
    },
    remove: function(musica) {
      musicas.splice(musicas.indexOf(chat), 1);
    },
    get: function(musicaId) {
      for (var i = 0; i < musicas.length; i++) {
        if (musicas[i].id === parseInt(musicaId)) {
          return musicas[i];
        }
      }
      return null;
    }
  };
});
