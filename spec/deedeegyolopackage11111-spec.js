'use babel';

import Deedeegyolopackage11111 from '../lib/deedeegyolopackage11111';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Deedeegyolopackage11111', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('deedeegyolopackage11111');
  });

  describe('when the deedeegyolopackage11111:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.deedeegyolopackage11111')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'deedeegyolopackage11111:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.deedeegyolopackage11111')).toExist();

        let deedeegyolopackage11111Element = workspaceElement.querySelector('.deedeegyolopackage11111');
        expect(deedeegyolopackage11111Element).toExist();

        let deedeegyolopackage11111Panel = atom.workspace.panelForItem(deedeegyolopackage11111Element);
        expect(deedeegyolopackage11111Panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'deedeegyolopackage11111:toggle');
        expect(deedeegyolopackage11111Panel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.deedeegyolopackage11111')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'deedeegyolopackage11111:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let deedeegyolopackage11111Element = workspaceElement.querySelector('.deedeegyolopackage11111');
        expect(deedeegyolopackage11111Element).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'deedeegyolopackage11111:toggle');
        expect(deedeegyolopackage11111Element).not.toBeVisible();
      });
    });
  });
});
