"use client"

import { useState, useEffect, useMemo } from "react"
import superjson from "superjson";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasMounted(true);
    }
    return () => setHasMounted(true);
  }, []);

  return hasMounted;
}

export function useServerProps(data) {
  return JSON.parse(JSON.stringify(data));
}

const symbol = Symbol("__RSC_DATA__");

export function serialize(obj) {
  return superjson.serialize(obj);
}

export function deserialize(obj) {
  return superjson.deserialize(obj);
}

export function useDeserialized(obj) {
  return useMemo(() => deserialize(obj), [obj]);
}

export function useHydrate(data) {
  const deserialized = useDeserialized(data);

  if (typeof window !== "undefined") {
    window[symbol] = deserialized;
  }

  return deserialized;
}

export function useHydrated() {
  return window[symbol];
}

export function useHydratedData() {
  return useDeserialized(useHydrated());
}

export function useHydratedQuery(query) {
  const data = useHydratedData();
  return useMemo(() => query(data), [data, query]);
}

export function json(data) {
  return JSON.stringify(serialize(data));
}

export function useJson(data) {
  return useMemo(() => json(data), [data]);
}

export function parser(data) {
  return deserialize(JSON.parse(data));
}