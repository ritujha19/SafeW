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
  };

  const removeContact = (index: number) => {
    setContacts((currentContacts) =>
      currentContacts.filter((_, contactIndex) => contactIndex !== index),
    );
  };

  const saveContacts = () => {
    setTrustedContacts(contacts);
    console.log("trusted contacts added", contacts);
    alert("Trusted contacts saved for testing.");
  };

  return (
    <ScrollView
      contentContainerClassName="flex-grow bg-[#FAF9F7] px-6 pb-10"
      showsVerticalScrollIndicator={false}
    >

      {/* Introduction */}
      <View className="pt-5">
        <Text className="mb-3 text-[13px] font-bold tracking-[1.5px] text-[#5E78D6]">
          SAFETY NETWORK
        </Text>

        <Text className="text-[36px] font-extrabold leading-[42px] text-[#172B55]">
          Add a trusted{"\n"}contact
        </Text>

        <Text className="mt-4 max-w-[340px] text-[16px] leading-[25px] text-[#70809F]">
          In an emergency, SafeW can quickly reach your trusted people and
          share your location with them.
        </Text>
      </View>

      {/* Soft visual area */}
      <View className="my-5 h-[100px] items-center justify-center">
        <View className="h-[88px] w-[88px] items-center justify-center rounded-full bg-[#EEF1FF]">
          <View className="h-[64px] w-[64px] items-center justify-center rounded-full bg-[#E0E6FF]">
            <Text className="text-[30px]">🛡</Text>
          </View>
        </View>
      </View>

      {/* Contact Card */}
      {contacts.map((contact, index) => (
        <View
          key={index}
          className="mb-4 rounded-[28px] bg-white px-5 py-6 shadow-sm"
        >
          <Text className="mb-6 text-[22px] font-bold text-[#172B55]">
            Contact details
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
                You can add more contacts later.
              </Text>
            </View>
          </View>

          {/* Remove */}
          <Pressable
            onPress={() => removeContact(index)}
            accessibilityLabel={`Remove contact ${index + 1}`}
            className="items-center py-2 active:opacity-60"
          >
            <Text className="text-[14px] font-semibold text-[#D64545]">
              Remove contact
            </Text>
          </Pressable>
        </View>
      ))}

      {/* Add Another Contact */}
      <Pressable
        onPress={addContact}
        accessibilityLabel="Add another trusted contact"
        className="mb-4 h-[56px] flex-row items-center justify-center rounded-full bg-[#EEF1FF] active:opacity-70"
      >
        <View className="mr-3 h-8 w-8 items-center justify-center rounded-full bg-[#DDE4FF]">
          <Text className="text-[24px] leading-[25px] text-[#4058D6]">
            +
          </Text>
        </View>

        <Text className="text-[16px] font-bold text-[#4058D6]">
          Add another contact
        </Text>
      </Pressable>

      {/* Save */}
      <Pressable
        onPress={saveContacts}
        className="h-[56px] flex-row items-center justify-center rounded-full bg-[#4058D6] active:opacity-80"
      >
        <Text className="text-[16px] font-bold text-white">
          Save contact
        </Text>

        <Text className="ml-3 text-[24px] leading-[25px] text-white">
          →
        </Text>
      </Pressable>

      {/* Footer */}
      <Text className="px-4 py-5 text-center text-[13px] text-[#8996B0]">
        You can update these contacts anytime.
      </Text>
    </ScrollView>
  );
}