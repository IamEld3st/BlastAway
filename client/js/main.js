var Blastway = Blastway || {};
 
Blastway.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
 
Blastway.game.state.add('Boot', Blastway.bootState);
Blastway.game.state.add('Preload', Blastway.loadState);
Blastway.game.state.add('MainMenu', Blastway.menuState);
Blastway.game.state.add('Game', Blastway.gameState);
 
Blastway.game.state.start('Boot');

