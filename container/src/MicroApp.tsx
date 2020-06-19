import React, { memo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const MicroAppComponent: React.FC<MicroAppProps> = ({
  name,
  host,
  document,
  window,
  basename,
}) => {
  const containerId = `${name}-container`;
  const scriptId = `micro-app-${name}-script`;

  const renderMicroApp = useCallback(() => {
    if (window.hasOwnProperty(name)) {
      window[name].render(containerId, basename);
    } else {
      console.warn('No renderer function found!');
    }
  }, [window, name, containerId, basename]);

  const loadScripts = useCallback(
    (manifest: Manifest) => {
      let chunkCount = -1;
      manifest.entrypoints
        .filter((entry) => entry.endsWith('.js'))
        .forEach((entry, _, arr) => {
          if (chunkCount < 0) {
            chunkCount = arr.length;
          }
          const path = `${host}/${entry}`;
          const script = document.createElement('script');
          if (`/${entry}` === manifest.files['main.js']) {
            script.id = scriptId;
          }
          script.onload = () => {
            chunkCount--;

            // If loaded all dependent scripts => render micro app
            if (chunkCount === 0) {
              renderMicroApp();
            }
          };
          script.src = path;
          script.crossOrigin = '';
          script.async = true;
          document.body.appendChild(script);
        });
    },
    [scriptId, host, document, renderMicroApp]
  );

  const loadStyles = useCallback(
    (manifest: Manifest) => {
      manifest.entrypoints
        .filter((entry) => entry.endsWith('.css'))
        .forEach((entry) => {
          const href = `${host}/${entry}`;
          const link = document.createElement('link');
          link.href = href;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        });
    },
    [host, document]
  );

  useEffect(() => {
    if (document.getElementById(scriptId)) {
      renderMicroApp();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        loadStyles(manifest);
        loadScripts(manifest);
      });

    return () => {
      window[name].unmount(containerId);
    };
  }, [
    name,
    host,
    document,
    window,
    containerId,
    scriptId,
    renderMicroApp,
    loadScripts,
    loadStyles,
  ]);

  return <div id={containerId} />;
};

const MicroApp = memo(MicroAppComponent);
MicroApp.displayName = 'MicroApp';

export default MicroApp;

export interface MicroAppProps {
  name: string;
  host: string;
  document: Document;
  window: Window;
  basename?: string;
}

export interface Manifest {
  files: Record<string, string>;
  entrypoints: Array<string>;
}
