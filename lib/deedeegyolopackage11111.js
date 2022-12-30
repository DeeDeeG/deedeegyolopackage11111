'use babel';

import Deedeegyolopackage11111View from './deedeegyolopackage11111-view';
import { CompositeDisposable } from 'atom';

export default {

  deedeegyolopackage11111View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.deedeegyolopackage11111View = new Deedeegyolopackage11111View(state.deedeegyolopackage11111ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.deedeegyolopackage11111View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'deedeegyolopackage11111:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.deedeegyolopackage11111View.destroy();
  },

  serialize() {
    return {
      deedeegyolopackage11111ViewState: this.deedeegyolopackage11111View.serialize()
    };
  },

  toggle() {
    console.log('Deedeegyolopackage11111 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
