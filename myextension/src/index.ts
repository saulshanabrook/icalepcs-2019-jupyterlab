import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import {
  LinkedDataRegistryToken,
  LinkedDataRegistry
} from "@jupyterlab/metadata-extension";

/**
 * Initialization data for the myextension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: "myextension",
  autoStart: true,
  requires: [LinkedDataRegistryToken],
  activate: (app: JupyterFrontEnd, registry: LinkedDataRegistry) => {
    registry.register({
      get: url => {
        if (
          url.protocol !== "file:" ||
          !url.pathname.endsWith(".h5") ||
          url.hash
        ) {
          return null;
        }
        return async () => {
          console.log(
            await (await fetch(
              `http://127.0.0.1:8000/info${url.pathname}`
            )).json()
          );
          return await (await fetch(
            `http://127.0.0.1:8000/info${url.pathname}`
          )).json();
        };
      }
    });
  }
};

export default extension;
