import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Make sure you have installed expo-linear-gradient

const TermsScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#2CA39A', '#FFFFFF']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>POPI Act:</Text>

        <Text style={styles.sectionTitle}>POPIA Compliance Policy</Text>

        <Text style={styles.sectionText}>
          1. Purpose{'\n'}
          This policy outlines how our system complies with the Protection of Personal Information Act (POPIA), ensuring that all personal information is collected, processed, stored, and shared lawfully and securely. We are committed to protecting the privacy of our users, including patrons, institutions, and service providers.
        </Text>

        <Text style={styles.sectionText}>
          2. Definitions{'\n'}
          Personal Information: Information relating to an identifiable, living natural person or an existing juristic person (e.g., name, contact details, booking history, payment details).{'\n'}
          Data Subject: The individual or juristic person to whom personal information relates (e.g., system users, event organizers, cultural institutions).{'\n'}
          Processing: Any activity relating to the collection, storage, use, or dissemination of personal information.{'\n'}
          Responsible Party: The entity responsible for processing personal information (our organization).{'\n'}
          Operator: A third party processing personal information on behalf of the responsible party (e.g., payment gateway providers).
        </Text>

        <Text style={styles.sectionText}>
          3. Scope{'\n'}
          This policy applies to all personal information processed by our system, including:{'\n'}
          - User Registration: Collection of personal data for account creation (e.g., name, email address, phone number).{'\n'}
          - Bookings and Payments: Processing of booking and payment information (e.g., event bookings, payment methods, transactional data).{'\n'}
          - Personalized Recommendations: Processing of user preferences and activity for AI-driven content recommendations.{'\n'}
          - Marketing and Communications: Use of personal information for promotional activities, where consent has been given.
        </Text>

        <Text style={styles.sectionText}>
          4. Lawful Processing of Personal Information{'\n'}
          We commit to processing personal information lawfully, and in a manner that respects the privacy rights of data subjects. Personal information will only be processed under the following conditions:{'\n'}
          - Consent: We will obtain explicit consent from data subjects before collecting or processing their personal information, particularly for marketing or communication purposes.{'\n'}
          - Contractual Necessity: Personal information may be processed when it is required to fulfill a service or contract, such as processing bookings or payments.{'\n'}
          - Legitimate Interest: We may process personal information to enhance the user experience, such as offering personalized recommendations, provided it does not infringe on data subjects' rights.{'\n'}
          - Compliance with Legal Obligations: Personal information may be processed to comply with legal requirements or court orders.
        </Text>

        <Text style={styles.sectionText}>
          5. Rights of Data Subjects{'\n'}
          Data subjects have the following rights under POPIA:{'\n'}
          - Right to Access: Data subjects may request access to their personal information stored by our system.{'\n'}
          - Right to Rectification: Data subjects may request that inaccurate or incomplete personal information be corrected or updated.{'\n'}
          - Right to Erasure (Right to be Forgotten): Data subjects may request the deletion of their personal information, provided it is no longer necessary for the purposes for which it was collected.{'\n'}
          - Right to Object: Data subjects may object to the processing of their personal information for direct marketing or other purposes.{'\n'}
          - Right to Data Portability: Data subjects may request that their personal information be transferred to another service provider where technically feasible.
        </Text>

        <Text style={styles.sectionText}>
          6. Collection of Personal Information{'\n'}
          We will only collect personal information that is necessary for the purposes outlined below:{'\n'}
          - User Registration: Information needed to create and manage user accounts, such as names, contact information, and password credentials.{'\n'}
          - Event Bookings: Information required for booking events, including user preferences, dates, and transaction history.{'\n'}
          - Payments: Information necessary for processing payments, including payment card details, billing addresses, and transaction data.{'\n'}
          - Personalization: Information gathered from user activity (e.g., browsing history, event searches) to provide tailored recommendations.
        </Text>

        <Text style={styles.sectionText}>
          7. Processing and Storage of Personal Information{'\n'}
          - Purpose-Specific Processing: Personal information will only be processed for the purposes for which it was collected (e.g., processing event bookings, providing recommendations, or executing payments).{'\n'}
          - Data Minimization: Only personal information that is necessary for the purpose of processing will be collected and retained.{'\n'}
          - Storage: Personal information will be stored securely in encrypted databases. Data will be stored only for as long as it is necessary to fulfill the purpose of its collection or as required by law.{'\n'}
          - Operators: Any third-party operators processing personal information on our behalf will be bound by contractual agreements to adhere to strict data security and confidentiality standards as required by POPIA.
        </Text>

        <Text style={styles.sectionText}>
          8. Security Safeguards{'\n'}
          We are committed to implementing appropriate technical and organizational measures to protect personal information against unauthorized access, loss, or destruction. Our security measures include:{'\n'}
          - Encryption: All sensitive personal information, including payment data, will be encrypted both in transit and at rest.{'\n'}
          - Access Control: Access to personal information will be restricted to authorized personnel only, based on the principle of least privilege.{'\n'}
          - Regular Audits: Periodic security audits will be conducted to identify and rectify potential vulnerabilities in our system.{'\n'}
          - Incident Response: A detailed incident response plan will be in place to address any data breaches or unauthorized access. In the event of a data breach, the relevant authorities and affected data subjects will be notified in accordance with POPIA requirements.
        </Text>

        <Text style={styles.sectionText}>
          9. Direct Marketing{'\n'}
          We will only use personal information for direct marketing purposes where:{'\n'}
          - Consent: The data subject has explicitly consented to receiving marketing communications.{'\n'}
          - Opt-Out: Data subjects will be provided with an easy way to opt out of receiving future marketing communications. All marketing emails will contain an unsubscribe option.
        </Text>

        <Text style={styles.sectionText}>
          10. Cross-Border Transfers{'\n'}
          In cases where personal information is transferred outside South Africa, we will ensure that the recipient country or organization provides adequate protection for the personal information in accordance with POPIA. If necessary, data subjects will be informed and consent obtained before transferring their personal information.
        </Text>

        <Text style={styles.sectionText}>
          11. Data Retention{'\n'}
          - Retention Period: Personal information will be retained only for as long as is necessary to fulfill the purposes outlined in this policy or as required by law.{'\n'}
          - Data Deletion: Once personal information is no longer needed, it will be securely deleted or anonymized.
        </Text>

        <Text style={styles.sectionText}>
          12. Complaints and Queries{'\n'}
          Data subjects who wish to lodge complaints about how their personal information is handled, or who have queries about this policy, may contact our Data Protection Officer (DPO) at the following address:{'\n'}
          Data Protection Officer: [Name and Contact Details]{'\n'}
          Email: [Email Address]{'\n'}
          Phone: [Phone Number]
        </Text>

        <Text style={styles.sectionText}>
        POPIA Compliance Policy
1. Purpose
This policy outlines how our system complies with the Protection of Personal Information Act (POPIA), ensuring that all personal information is collected, processed, stored, and shared lawfully and securely. We are committed to protecting the privacy of our users, including patrons, institutions, and service providers.

2. Definitions
Personal Information: Information relating to an identifiable, living natural person or an existing juristic person (e.g., name, contact details, booking history, payment details).
Data Subject: The individual or juristic person to whom personal information relates (e.g., system users, event organizers, cultural institutions).
Processing: Any activity relating to the collection, storage, use, or dissemination of personal information.
Responsible Party: The entity responsible for processing personal information (our organization).
Operator: A third party processing personal information on behalf of the responsible party (e.g., payment gateway providers).
3. Scope
This policy applies to all personal information processed by our system, including:

User Registration: Collection of personal data for account creation (e.g., name, email address, phone number).
Bookings and Payments: Processing of booking and payment information (e.g., event bookings, payment methods, transactional data).
Personalized Recommendations: Processing of user preferences and activity for AI-driven content recommendations.
Marketing and Communications: Use of personal information for promotional activities, where consent has been given.
4. Lawful Processing of Personal Information
We commit to processing personal information lawfully, and in a manner that respects the privacy rights of data subjects. Personal information will only be processed under the following conditions:

Consent: We will obtain explicit consent from data subjects before collecting or processing their personal information, particularly for marketing or communication purposes.
Contractual Necessity: Personal information may be processed when it is required to fulfill a service or contract, such as processing bookings or payments.
Legitimate Interest: We may process personal information to enhance the user experience, such as offering personalized recommendations, provided it does not infringe on data subjects' rights.
Compliance with Legal Obligations: Personal information may be processed to comply with legal requirements or court orders.
5. Rights of Data Subjects
Data subjects have the following rights under POPIA:

Right to Access: Data subjects may request access to their personal information stored by our system.
Right to Rectification: Data subjects may request that inaccurate or incomplete personal information be corrected or updated.
Right to Erasure (Right to be Forgotten): Data subjects may request the deletion of their personal information, provided it is no longer necessary for the purposes for which it was collected.
Right to Object: Data subjects may object to the processing of their personal information for direct marketing or other purposes.
Right to Data Portability: Data subjects may request that their personal information be transferred to another service provider where technically feasible.
6. Collection of Personal Information
We will only collect personal information that is necessary for the purposes outlined below:

User Registration: Information needed to create and manage user accounts, such as names, contact information, and password credentials.
Event Bookings: Information required for booking events, including user preferences, dates, and transaction history.
Payments: Information necessary for processing payments, including payment card details, billing addresses, and transaction data.
Personalization: Information gathered from user activity (e.g., browsing history, event searches) to provide tailored recommendations.
7. Processing and Storage of Personal Information
Purpose-Specific Processing: Personal information will only be processed for the purposes for which it was collected (e.g., processing event bookings, providing recommendations, or executing payments).
Data Minimization: Only personal information that is necessary for the purpose of processing will be collected and retained.
Storage: Personal information will be stored securely in encrypted databases. Data will be stored only for as long as it is necessary to fulfill the purpose of its collection or as required by law.
Operators: Any third-party operators processing personal information on our behalf will be bound by contractual agreements to adhere to strict data security and confidentiality standards as required by POPIA.
8. Security Safeguards
We are committed to implementing appropriate technical and organizational measures to protect personal information against unauthorized access, loss, or destruction. Our security measures include:

Encryption: All sensitive personal information, including payment data, will be encrypted both in transit and at rest.
Access Control: Access to personal information will be restricted to authorized personnel only, based on the principle of least privilege.
Regular Audits: Periodic security audits will be conducted to identify and rectify potential vulnerabilities in our system.
Incident Response: A detailed incident response plan will be in place to address any data breaches or unauthorized access. In the event of a data breach, the relevant authorities and affected data subjects will be notified in accordance with POPIA requirements.
9. Direct Marketing
We will only use personal information for direct marketing purposes where:

Consent: The data subject has explicitly consented to receiving marketing communications.
Opt-Out: Data subjects will be provided with an easy way to opt out of receiving future marketing communications. All marketing emails will contain an unsubscribe option.
10. Cross-Border Transfers
In cases where personal information is transferred outside South Africa, we will ensure that the recipient country or organization provides adequate protection for the personal information in accordance with POPIA. If necessary, data subjects will be informed and consent obtained before transferring their personal information.

11. Data Retention
Retention Period: Personal information will be retained only for as long as is necessary to fulfill the purposes outlined in this policy or as required by law.
Data Deletion: Once personal information is no longer needed, it will be securely deleted or anonymized.
12. Complaints and Queries
Data subjects who wish to lodge complaints about how their personal information is handled, or who have queries about this policy, may contact our Data Protection Officer (DPO) at the following address:

13. Policy Review and Updates
This POPIA compliance policy will be reviewed regularly to ensure it reflects any updates to the law or changes to our processing activities. Any updates will be communicated to users through our website or system notifications.

       </Text>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
 container: {
    flexGrow: 1,
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TermsScreen;
