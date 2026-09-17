import {
  setTrustedContacts,
  type TrustedContact as SavedContact,
} from "@/auth";
import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function TrustedContactsScreen() {
  const [contacts, setContacts] = React.useState<SavedContact[]>([
    { name: "", mobNumber: "" },
  ]);

  // Keeps track of which contacts have already been saved
  const [savedStates, setSavedStates] = React.useState<boolean[]>([false]);

  const updateContact = (
    index: number,
    field: keyof SavedContact,
    value: string,
  ) => {
    setContacts((currentContacts) =>
      currentContacts.map((contact, contactIndex) =>
        contactIndex === index ? { ...contact, [field]: value } : contact,
      ),
    );
  };

  const addContact = () => {
    setContacts((currentContacts) => [
      ...currentContacts,
      { name: "", mobNumber: "" },
    ]);

    setSavedStates((currentStates) => [...currentStates, false]);
  };

  const removeContact = (index: number) => {
    setContacts((currentContacts) =>
      currentContacts.filter((_, contactIndex) => contactIndex !== index),
    );

    setSavedStates((currentStates) =>
      currentStates.filter((_, contactIndex) => contactIndex !== index),
    );
  };

  const saveContacts = () => {
    setTrustedContacts(contacts);

    // Mark all current contacts as saved
    setSavedStates(contacts.map(() => true));

    console.log("trusted contacts added", contacts);
    alert("Trusted contacts saved for testing.");
  };

  return (
    <ScrollView
      contentContainerClassName="flex-grow bg-[#FAF9F7] px-6 pb-10"
      showsVerticalScrollIndicator={false}
    >  
      <View className="mt-7">
        <Text className="text-[38px] font-extrabold leading-[44px] text-[#172B55]">
          Trusted Contacts
        </Text>

        <Text className="mt-4 max-w-[340px] text-[17px] leading-[26px] text-[#7A86A5]">
          People you trust. In your corner, when you need them most.
        </Text>
      </View>

      {/* Decorative visual */}
      <View className="h-[105px] items-end justify-center">
        <View className="mr-5 h-[82px] w-[140px] items-center justify-center rounded-full bg-[#EEF1FF]">
          <Text className="text-[40px] text-[#6676C8]">♡</Text>
        </View>
      </View>

      {/* Contacts */}
      {contacts.map((contact, index) => {
        const isSaved = savedStates[index];

        return isSaved ? (
          <View
            key={index}
            className="mb-5 rounded-[28px] bg-white px-6 py-6 shadow-sm"
          >
            <View className="flex-row items-center">
              {/* Avatar */}
              <View className="mr-5 h-[76px] w-[76px] items-center justify-center rounded-full bg-[#C9CBE8]">
                <Text className="text-[30px]">👤</Text>
              </View>

              {/* Name + Number */}
              <View className="flex-1">
                <Text
                  className="text-[21px] font-bold text-[#172B55]"
                  numberOfLines={1}
                >
                  {contact.name}
                </Text>

                <Text
                  className="mt-1 text-[16px] text-[#7A86A5]"
                  numberOfLines={1}
                >
                  +91 {contact.mobNumber}
                </Text>
              </View>

              {/* Arrow */}
              <Text className="ml-2 text-[32px] text-[#707B9D]">›</Text>
            </View>

            {/* Status badges + menu */}
            <View className="mt-4 flex-row items-center">
              <View className="rounded-[12px] bg-[#E8F5EF] px-3 py-2">
                <Text className="text-[14px] font-medium text-[#438D70]">
                  ✓ Saved
                </Text>
              </View>

              <Text className="mx-2 text-[#B69BA5]">•</Text>

              <View className="rounded-[12px] bg-[#F0F1FA] px-3 py-2">
                <Text className="text-[14px] font-medium text-[#697291]">
                  ♢ Trusted
                </Text>
              </View>

              <View className="flex-1" />

              <Pressable
                accessibilityLabel={`More options for ${contact.name}`}
                className="px-2 py-1 active:opacity-50"
              >
                <Text className="text-[25px] font-bold text-[#697291]">
                  ⋮
                </Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View
            key={index}
            className="mb-5 rounded-[28px] bg-white px-5 py-6 shadow-sm"
          >
            <Text className="mb-6 text-[22px] font-bold text-[#172B55]">
              {index === 0 ? "Add your first contact" : `Contact ${index + 1}`}
            </Text>

            {/* Name */}
            <View className="mb-5">
              <View className="mb-2 flex-row items-center">
                <View className="h-8 w-8 items-center justify-center rounded-full bg-[#EEF1FF]">
                  <Text className="text-[15px]">👤</Text>
                </View>

                <Text className="ml-2 text-[15px] font-semibold text-[#172B55]">
                  Name
                </Text>
              </View>

              <TextInput
                placeholder="Enter trusted contact's name"
                placeholderTextColor="#8996B0"
                value={contact.name}
                onChangeText={(value) =>
                  updateContact(index, "name", value)
                }
                className="h-[56px] rounded-[18px] border border-[#DCE1EC] bg-[#FAFBFD] px-4 text-[16px] text-[#172B55]"
              />
            </View>

            {/* Mobile Number */}
            <View className="mb-6">
              <View className="mb-2 flex-row items-center">
                <View className="h-8 w-8 items-center justify-center rounded-full bg-[#EEF1FF]">
                  <Text className="text-[15px]">📞</Text>
                </View>

                <Text className="ml-2 text-[15px] font-semibold text-[#172B55]">
                  Mobile number
                </Text>
              </View>

              <TextInput
                placeholder="Enter mobile number"
                placeholderTextColor="#8996B0"
                maxLength={10}
                value={contact.mobNumber}
                onChangeText={(value) =>
                  updateContact(index, "mobNumber", value)
                }
                keyboardType="phone-pad"
                className="h-[56px] rounded-[18px] border border-[#DCE1EC] bg-[#FAFBFD] px-4 text-[16px] text-[#172B55]"
              />
            </View>

            {/* Trust Reminder */}
            <View className="mb-6 flex-row items-center rounded-[20px] bg-[#F0F3FF] px-4 py-4">
              <View className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-[#E0E6FF]">
                <Text className="text-[20px]">🛡</Text>
              </View>

              <View className="flex-1">
                <Text className="text-[15px] font-semibold text-[#3D5FCC]">
                  Choose someone you trust
                </Text>

                <Text className="mt-1 text-[13px] leading-[19px] text-[#7887A8]">
                  SafeW can reach them when you need help.
                </Text>
              </View>
            </View>

            {/* Remove */}
            {contacts.length > 1 && (
              <Pressable
                onPress={() => removeContact(index)}
                accessibilityLabel={`Remove contact ${index + 1}`}
                className="items-center py-2 active:opacity-60"
              >
                <Text className="text-[14px] font-semibold text-[#D64545]">
                  Remove contact
                </Text>
              </Pressable>
            )}
          </View>
        );
      })}

      {/* Add Another Contact */}
      <Pressable
        onPress={addContact}
        accessibilityLabel="Add another trusted contact"
        className="mb-4 h-[64px] flex-row items-center rounded-full bg-[#EEF0FF] px-6 active:opacity-70"
      >
        <View className="mr-4 h-10 w-10 items-center justify-center rounded-full bg-[#DCE3FF]">
          <Text className="text-[28px] leading-[30px] text-[#5368C9]">
            +
          </Text>
        </View>

        <Text className="flex-1 text-[17px] font-bold text-[#4D61B8]">
          Add another contact
        </Text>

        <Text className="text-[30px] text-[#6976B0]">›</Text>
      </Pressable>

      {/* Save Contacts */}
      <Pressable
        onPress={saveContacts}
        className="h-[64px] flex-row items-center justify-center rounded-full bg-[#4058D6] active:opacity-80"
      >
        <Text className="text-[17px] font-bold text-white">
          Save contacts
        </Text>

        <Text className="ml-3 text-[24px] text-white">→</Text>
      </Pressable>

      {/* Footer */}
      <Text className="px-4 py-5 text-center text-[13px] text-[#8996B0]">
        You can update these contacts anytime.
      </Text>
    </ScrollView>
  );
}