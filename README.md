# UBS AURA
*AURA Advise, Understand, Reflect, Act  - Wealth that learns you, Advice that evolves with you.*

PolyFinTech100 API Hackathon 2025: Smart Wealth Management Official Submission for Team Tweaking. Our solution is a **standalone wealth management application** that the Union Bank of Switzerland (UBS) can adopt as part of its digital ecosystem. The platform will serve as a **centralised hub** for High Net Worth Individuals (HNWIs) seeking a simplified yet comprehensive view of their entire financial portfolio by consolidating information across multiple banks and financial institutions through a **Personal Online Datastore (POD)**. Since we cannot access customer-specific information from other banks, this app will instead **consolidate anonymised and aggregated data**, presented through **contextualised statements**. Our **Artificial Intelligence (AI) engine** will then process these statements to generate objective insights, simplified analytics, and a clear overview tailored to the needs of HNWIs with complex financial structures. View the [Full Proposed Solution](https://github.com/Troaxx/aura/blob/main/data/full-proposed-solution.pdf) for a more comprehensive explanation.

![Main](https://github.com/Troaxx/aura/blob/main/data/main.png)


## Problem Statement
How might we leverage AI technology to transform our wealth management business for high-net-worth individuals, offering them more personalised, and insightful financial advice, optimising portfolio management, and enhancing overall client satisfaction?

## Features
![Features](https://github.com/Troaxx/aura/blob/main/data/features.png)
- **Financial Products Overview**: An unbiased and holistic view of their financial solutions.
- **Legacy Planner**: Structure long-term estate and succession planning.
- **Jargon Translator**: Breaks down complex financial terminology into simple, accessible explanations.
- **Life Map**: Goal-based generational planning.
- **Private Vault**: A secure and encrypted overview of all assets held across multiple institutions.
- **AI Chatbot Companion**: An always-available assistant that interprets contextualised statements and UBS-specific insights.

## System Architecture
![System Architecture](https://github.com/Troaxx/aura/blob/main/data/system-architecture.png)

## Proposed Data Control
![Data Control](https://github.com/Troaxx/aura/blob/main/data/data-control.png)
With reference to this diagram, users will choose which assets they want UBS AURA to analyse and the application will seek permission from an IMDA-approved third-party provider. Then, since we cannot access customer-specific information from other banks, the system will instead consolidate anonymised and aggregated data from these banks and be presented through contextualised statements which are stored in the PODS as shown on step 4. So UBS AURA will never actually have access to any external information, just what the user gives it permission to view. Therefore, UBS can instead position itself as a distribution partner, offering this app for its clients while ensuring compliance with MAS and PDPA principles.

## Running the Application
1. Install dependencies
   ```bash
   npm install 
   ```

2. Start the app
   ```bash
   npx expo start
   ```

3. Debugging: Clear Cache
    ```bash
    npx expo start --clear
    ```

4. Integrating Your Own Chatbot
   ```
   Create a .env file in the root directory and add your API_KEY=<here>.
   ```

## Accessing the Application
1. On Chrome: http://localhost:8081
2. On Your Iphone: 
   - Download 'Expo Go' from the App Store
   - Scan the QR Code emitted on your terminal

## Licensing
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developers
- Daniella Han Xue En [@Troaxx](https://github.com/Troaxx)
- Respeto Sofia Amihan Molase [@sofiaamihan](https://github.com/sofiaamihan)
