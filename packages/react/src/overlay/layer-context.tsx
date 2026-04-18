import * as React from "react";

type OverlayLayer = "root" | "modal";

const OverlayLayerContext = React.createContext<OverlayLayer>("root");

export function OverlayLayerProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: OverlayLayer;
}) {
  return (
    <OverlayLayerContext.Provider value={value}>
      {children}
    </OverlayLayerContext.Provider>
  );
}

export function useOverlayLayerProps<T extends object>(props: T): T & {
  "data-mui-layer"?: OverlayLayer;
} {
  const layer = React.useContext(OverlayLayerContext);

  if (layer === "root") {
    return props;
  }

  return {
    ...props,
    "data-mui-layer": layer,
  };
}
