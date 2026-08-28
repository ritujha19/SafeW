import {ScrollView, View, Text, Pressable, TextInput, StyleSheet} from "react-native";
import React from "react";

type Contact = {
    name: string;
    mobNumber: string;
};

export default function TrustedContact() {
    const [contacts, setContacts] = React.useState<Contact[]>([
        {name: "", mobNumber: ""},
    ]);

    const updateContact = (index: number, field: keyof Contact, value: string) => {
        setContacts((currentContacts) => currentContacts.map((contact, contactIndex) =>
            contactIndex === index ? {...contact, [field]: value} : contact,
        ));
    };

    const addContact = () => {
        setContacts((currentContacts) => [...currentContacts, {name: "", mobNumber: ""}]);
    };

    const removeContact = (index: number) => {
        setContacts((currentContacts) => currentContacts.filter((_, contactIndex) => contactIndex !== index));
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.eyebrow}>SAFETY NETWORK</Text>
                <Text style={styles.title}>Add trusted contacts</Text>
                <Text style={styles.description}>
                    Quickly reach your trusted contacts in an emergency and share your location with them.
                </Text>
            </View>

            {contacts.map((contact, index) => (
                <View key={index} style={styles.contactCard}>
                    <Text style={styles.contactTitle}>Contact {index + 1}</Text>
                    <Text style={styles.label}>NAME</Text>
                    <TextInput
                        placeholder="Enter trusted contact's name"
                        placeholderTextColor="#8A97A8"
                        value={contact.name}
                        onChangeText={(value) => updateContact(index, "name", value)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>MOBILE NUMBER</Text>
                    <TextInput
                        placeholder="Enter trusted contact's mobile number"
                        placeholderTextColor="#8A97A8"
                        value={contact.mobNumber}
                        onChangeText={(value) => updateContact(index, "mobNumber", value)}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                    <Pressable
                        onPress={() => removeContact(index)}
                        accessibilityLabel={`Remove contact ${index + 1}`}
                        style={({pressed}) => [styles.removeButton, pressed && styles.pressed]}
                    >
                        <Text style={styles.removeText}>Remove</Text>
                    </Pressable>
                </View>
            ))}

            <Pressable
                onPress={addContact}
                accessibilityLabel="Add another trusted contact"
                style={({pressed}) => [styles.addButton, pressed && styles.pressed]}
            >
                <Text style={styles.plus}>+</Text>
                <Text style={styles.addButtonText}>Add another contact</Text>
            </Pressable>

            <Pressable
                onPress={() => {console.log("trusted contacts added", contacts)}}
                style={({pressed}) => [styles.submitButton, pressed && styles.pressed]}
            >
                <Text style={styles.submitText}>Save trusted contacts</Text>
            </Pressable>

            <Text style={styles.footerText}>You can update these contacts anytime.</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 24,
        backgroundColor: "#F4F7FB",
    },
    header: {
        marginBottom: 24,
    },
    eyebrow: {
        color: "#2B6CB0",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginBottom: 8,
    },
    title: {
        color: "#132238",
        fontSize: 30,
        fontWeight: "800",
        marginBottom: 10,
    },
    description: {
        color: "#5B6878",
        fontSize: 15,
        lineHeight: 22,
    },
    contactCard: {
        backgroundColor: "#FFFFFF",
        borderColor: "#DCE5F0",
        borderRadius: 14,
        borderWidth: 1,
        marginBottom: 14,
        padding: 18,
        shadowColor: "#183B56",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
    },
    contactTitle: {
        color: "#132238",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 18,
    },
    label: {
        color: "#6B7788",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1,
        marginBottom: 7,
    },
    input: {
        backgroundColor: "#F7F9FC",
        borderColor: "#D6E0EC",
        borderRadius: 9,
        borderWidth: 1,
        color: "#132238",
        fontSize: 15,
        height: 48,
        marginBottom: 16,
        paddingHorizontal: 14,
    },
    addButton: {
        alignItems: "center",
        borderColor: "#2B6CB0",
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 14,
        minHeight: 50,
    },
    plus: {
        color: "#2B6CB0",
        fontSize: 25,
        fontWeight: "400",
        lineHeight: 25,
        marginRight: 9,
    },
    addButtonText: {
        color: "#2B6CB0",
        fontSize: 15,
        fontWeight: "700",
    },
    submitButton: {
        alignItems: "center",
        backgroundColor: "#2B6CB0",
        borderRadius: 10,
        justifyContent: "center",
        minHeight: 52,
    },
    submitText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
    footerText: {
        color: "#7B8796",
        fontSize: 12,
        marginTop: 18,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.7,
    },
    removeButton:{
        alignItems: "center",
        backgroundColor: "#E53E3E",
        borderRadius: 10,  
    },
    removeText:{
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
        padding: 10,
    }
});