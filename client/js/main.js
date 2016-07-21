var Blastway = Blastway || {};
 
Blastway.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
 
Blastway.game.state.add('bootState', Blastway.bootState);
Blastway.game.state.add('loadState', Blastway.loadState);
Blastway.game.state.add('menuState', Blastway.menuState);
Blastway.game.state.add('gameState', Blastway.gameState);
 
Blastway.game.state.start('bootState');