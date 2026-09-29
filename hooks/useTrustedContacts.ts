import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { loadTrustedContacts, type TrustedContact } from "@/auth";

export function useTrustedContacts() {
  const [contacts, setContacts] = useState<TrustedContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      setLoading(true);
      setError(null);

      void loadTrustedContacts()
        .then((loadedContacts) => {
          if (active) setContacts(loadedContacts);
        })
        .catch((loadError: unknown) => {
          console.error("Unable to load trusted contacts:", loadError);
          if (active) {
            setContacts([]);
            setError(
              loadError instanceof Error
                ? loadError
                : new Error("Unable to load trusted contacts."),
            );
          }
        })
        .finally(() => {
          if (active) setLoading(false);
        });

      return () => {
        active = false;
      };
    }, []),
  );

  return { contacts, loading, error };
}
