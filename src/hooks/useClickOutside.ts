import React, { useEffect, useRef } from "react";

function useClickOutside(callbackFn: () => void): React.MutableRefObject<any> {
  const domNode = useRef<any>()

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target)) {
        callbackFn()
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return domNode
}

export default useClickOutside