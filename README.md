# 🛡️ SAFE-W — Your safety shouldn’t start with an emergency.

**SAFE-W** is a women-focused personal safety application designed to help users **recognize risks, prepare for unsafe situations, understand their rights, stay connected with trusted people, and access support when needed.**

The idea behind SAFE-W is simple:

> **Safety should begin with awareness and preparation—not only when an emergency happens.**

---

## 💡 Inspiration

The inspiration behind SAFE-W comes from the **increasing concerns around crimes and safety faced by women in India**.

Incidents involving harassment, assault, domestic violence, online crimes, and other forms of violence highlight the importance of better awareness, preparation, and accessible safety support.

This made me ask:

> **Can technology help women feel more prepared and supported before a situation becomes an emergency?**

Many safety solutions primarily focus on what happens during an emergency. SAFE-W takes a broader approach by combining **safety awareness, preparation, trusted contacts, location support, emergency tools, women's rights information, and AI-based guidance** in one application.

The goal is not to suggest that an app can prevent every dangerous situation. Instead, SAFE-W aims to provide practical information and tools that can help users **recognize risks, prepare beforehand, and access support when they need it.**

That is where SAFE-W began:

**Your safety shouldn’t start with an emergency.**

---

# 🚨 Features

## 🚨 I'm in Danger

The emergency section provides quick access to important safety tools when a user feels threatened or unsafe.

It brings together:

* Emergency helpine 
* Trusted contacts
* Location support
* Police siren

The purpose is to reduce the number of steps needed to access important safety tools during a stressful situation.

---

## 🚔 Police Siren

SAFE-W includes a **police siren feature** that can be activated when the user feels threatened or unsafe.

The sound is designed to create the impression of police presence and may help act as a **deterrent or distraction**, depending on the situation.

**Important:** The siren does **not** contact the police or automatically report an emergency.It design to distact attacker or attract people nearby 

---

## 👥 Trusted Contacts

Users can add people they trust so that important contact information is readily available when needed.

Trusted contacts can provide an additional layer of personal support when a user feels unsafe or needs help.

---

## 📍 Location Support

SAFE-W uses device location with the user's permission to help users access and communicate their current location.

Location access is permission-based, giving the user control over whether the application can access their location.

---

## 🤖 Saaya — Safety companion 

**Saaya** is SAFE-W's AI-powered safety assistant.

Saaya is designed to provide calm and practical guidance around topics such as:

* Personal safety
* Unsafe situations
* Safety preparation
* Women's rights
* General safety awareness

Saaya is intended as a **supportive information and guidance tool**, not a replacement for emergency services, law enforcement, legal professionals, or other qualified professionals.

---

## ⚖️ Women's Rights

The **Women's Rights** section helps users learn about **rights and legal protections available to women under Indian law**.

Users can explore information related to:

* Women's legal rights
* Legal protections available to women
* Laws related to harassment and violence
* Rights relevant to different situations
* Important legal awareness information in India

The goal is to make rights-related information easier to discover and understand, especially for users who may not already know what legal protections are available to them.

> **Know your rights. Know your options.**

---

# 📚 Learn & Prepare

SAFE-W is not only designed for emergencies. It also helps users prepare **before** they find themselves in an unsafe situation.

The core approach is:

## **Notice → Move → Tell**
learn in app what it means ?

### What users can learn

**Know what counts as a crime**

Understand different forms of harassment, assault, domestic violence, online crimes, and other unsafe or unlawful situations.

**Recognize warning signs**

Learn to notice behaviors and situations that may indicate potential danger.

**Know essential safety practices**

Learn practical steps for staying aware, preparing ahead, and responding more safely to uncomfortable or threatening situations.

**Test your instincts**

Short quizzes and scenarios allow users to test their **awareness, judgment, and understanding of safety situations**.

The purpose is not to teach users to predict every dangerous situation. It is to help them become **more aware, prepared, and confident in recognizing when something feels wrong and knowing what steps they can consider taking.**

---

# 🔗 How SAFE-W Brings It Together

SAFE-W combines three areas of personal safety:

### **Prepare**

Learn about risks, warning signs, safety practices, and women's rights.

### **Connect**

Keep trusted contacts and location-related support accessible.

### **Respond**

Access emergency tools and Saaya when a situation becomes unsafe.

This creates a safety experience that extends **before, during, and after an unsafe situation**, rather than focusing only on the emergency itself.

---

# 🛠️ Built With

* **React Native** — Mobile application
* **Expo SDK 54** — Development and Android build
* **Expo Router** — App navigation
* **NativeWind** — UI styling
* **Firebase Authentication** — User authentication
* **Firebase Firestore** — User and trusted-contact data
* **Node.js + Express** — Backend server
* **Google Gemini API** — Saaya AI assistant
* **Expo Location** — Location functionality
* **Expo Audio** — Police siren functionality

---

# 🧠 AI Architecture

Saaya uses the **Google Gemini API** through a Node.js/Express backend.

The application sends the user's message to the backend, where the Gemini API processes the request according to SAFE-W's safety-focused instructions.

Firebase is used separately for application services such as:

* User authentication
* Trusted contact data
* Saaya-related chat history

This keeps the AI functionality separate from the application's authentication and database services.

---

# 📱 Android APK

SAFE-W has been built as an **Android application** and an APK is provided for demonstration and testing.

The APK allows reviewers to experience the actual application rather than only viewing screenshots or source code.

https://safew.expo.app/download - download apk from here

> **Note:** SAFE-W is currently provided as a demonstration/prototype Android application and should not be treated as a replacement for emergency services.

---

# 🔐 Privacy & Permissions

SAFE-W uses certain device capabilities that require user permission.

Depending on the feature being used, the application may request access to:

* **Location** — for location-related safety functionality
* **Audio** — for the police siren feature
* **Contacts / contact information** — where required for trusted-contact functionality

Permissions are requested as needed rather than assuming access without user consent.

---

# ⚠️ Safety Disclaimer

SAFE-W is intended as a **personal safety, awareness, and preparation tool**.

It does not guarantee protection or prevent crime.

The information provided by the application, including AI-generated guidance and legal-awareness content, should not be considered a substitute for:

* Emergency services
* Police or law enforcement
* Professional legal advice
* Medical or mental-health professionals
* Other qualified emergency or professional support

In an immediate emergency, users should contact the appropriate emergency services or seek help from people nearby.

**AI Note:** Saaya uses AI and, like any AI system, it can sometimes provide inaccurate, incomplete, or inappropriate information. Users should use their judgment and verify important information, especially in emergency, legal, or safety-critical situations.

---

# 🚀 Future Improvements

Possible future development includes:

* Country-specific women's rights and legal information
* Additional languages
* More safety scenarios and interactive preparation
* Expanded emergency and trusted-contact functionality
* Further improvements to Saaya's safety guidance
* Additional accessibility improvements
* Add camera and record voices too 
* Make it as evidence storeage 

---

# 🎥 Demo

A demonstration video of SAFE-W is provided as part of the project submission.

The demo showcases the application's main safety flow, preparation features, trusted contacts, location support, Saaya, women's rights information, and emergency tools.

---

# 🏆 Ship-a-ton

SAFE-W was created as a project for **RevenueCat Ship-a-ton**.

The project focuses on using technology to build a practical safety solution that goes beyond a traditional emergency button and emphasizes **awareness, preparation, support, and accessible safety tools**.

---

# 👩‍💻 Project

**SAFE-W**

**Tagline:** *Your safety shouldn’t start with an emergency.*

Built with **React Native, Expo, Firebase, Node.js, Express, and Google Gemini.**

---

# Auhor 

Ritu Jha 
