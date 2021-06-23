const STATE_KEY = 'com.twilioquest.owls_nest';

function onMapDidLoad(self) {
  self.playAnimation('idle', true);
  self.sprite.body.enable = false;
  self.sprite.alpha = 0;
  self.sprite.scale.x = 2;
  self.sprite.scale.y = 2;
  self.sprite.tint = 0x059142;
}

function onTriggerAreaWasEntered(self, event, world) {
  const worldState = world.getState(STATE_KEY);
  
  // Only trigger on the approproate prompt and if the threat has not yet
  // been received
  if (
    event.target.key !== 'fredricDialogTrigger' ||
    worldState.fredricThreatReceived
  ) {
    return;
  }
  
  // Temporarily disable player movement and reveal Fredric!
  world.disablePlayerMovement();
  world.screenShake(10);
  world.__internals.level.game.add.tween(self.sprite).to({
    alpha: 0.8,
    tint: 0xffffff
  }, 2500, 'Linear', true);

  // Re-enable movement and register that threat was received
  setTimeout(() => {
    world.startConversation('fredricDefault', 'fredricNeutral.png');
    worldState.fredricThreatReceived = true;
  }, 5000);

  world.setState(STATE_KEY, worldState);
}

function onConversationDidEnd(self, event, world) {
  const worldState = world.getState(STATE_KEY);

  if (!event.npc && event.npc.name !== 'fredricDefault') {
    return;
  }

  world.__internals.level.game.add.tween(self.sprite).to({
    alpha: 0,
    tint: 0x059142
  }, 2500, 'Linear', true);

  setTimeout(() => {
    world.enablePlayerMovement();
  }, 3000);
}

// Export object configuration
module.exports = {
  animations: {
    idle: {
      frames: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
        20, 21, 22, 23
      ],
      frameRate: 4
    }
  },
  spriteSheets: {
    OWLN_fredric: {
      fileName: 'fredric_holo.png',
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'OWLN_fredric',
      layers: [],
    },
  },
  events: {
    onMapDidLoad,
    onTriggerAreaWasEntered,
    onConversationDidEnd,
  }
};
